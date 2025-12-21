import re
import json
import os

def parse_simulado(file_path):
    # Avoid printing problematic paths to stdout on Windows
    # print(f"Parsing {file_path}...") 
    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()

    # 1. Extract Gabarito
    gabarito_match = re.search(r'Gabarito\s+(.*)', content, re.DOTALL)
    gabarito = []
    if gabarito_match:
        gabarito_text = gabarito_match.group(1)
        # Find all answers in order: 1) Certo, 2) Errado ...
        entries = re.findall(r'\d+\)\s+(Certo|Errado)', gabarito_text)
        gabarito = [ans.upper() for ans in entries]
    
    print(f"  Found {len(gabarito)} answers in Gabarito.")

    # 2. Extract Questions
    # A question block starts with the URL
    # regex for URL: www.tecconcursos.com.br/questoes/\d+
    url_pattern = r'www\.tecconcursos\.com\.br/questoes/\d+'
    
    # Let's find all URL positions
    url_matches = list(re.finditer(url_pattern, content))
    questions = []
    
    for i, match in enumerate(url_matches):
        start_pos = match.start()
        # End pos is either next URL or Gabarito
        if i + 1 < len(url_matches):
            end_pos = url_matches[i+1].start()
        else:
            end_pos = content.find('Gabarito')
            if end_pos == -1: end_pos = len(content)
            
        block = content[start_pos:end_pos].strip()
        
        # In each block:
        # URL [Exam Info] [Category] [Question Text] Certo Errado
        
        # Split by multiple spaces or just look for the pattern
        # Remove Page markers from the block to avoid clutter
        block = re.sub(r'--- Page \d+ ---', '', block)
        block = block.replace('\n', ' ').strip()
        # Also remove any isolated numbers like "1) 2) 3)" that might have been picked up
        block = re.sub(r'^\d+\)\s*', '', block)
        
        url_match = re.match(url_pattern, block)
        if not url_match: continue
        
        url = url_match.group(0)
        rest = block[url_match.end():].strip()
        
        # Heuristic to separate Info, Category and Text
        # Most start with "CEBRASPE (CESPE) -"
        info_match = re.search(r'(CEBRASPE \(CESPE\) - .*?/\d{4})', rest)
        if info_match:
            exam_info = info_match.group(1)
            after_info = rest[info_match.end():].strip()
            
            # The category is usually before the first "Julgue", "Acerca", etc.
            # or the first sentence.
            # Let's try to split by some common intro phrases
            intro_phrases = [
                "Julgue", "No que se refere", "Acerca de", "Com base", 
                "O desdobramento", "Indicadores", "Um gerente", "A retroação", 
                "A utilização", "Em relação", "Segundo", "A sanção", 
                "Resolução", "Define-se", "Presunção", "A abrangência", 
                "A implantação", "As organizações", "Mauro trabalha",
                "Considerando", "A respeito", "No modelo", "Em determinada",
                "Tendo", "Determinada", "Uma loja"
            ]
            pattern = '|'.join([rf'\b{p}\b' for p in intro_phrases])
            cat_split = re.split(f'({pattern})', after_info, 1)
            
            if len(cat_split) > 1:
                category = cat_split[0].strip()
                # Clean up category (sometimes it has weird chars from PDF)
                category = re.sub(r'\s+', ' ', category).strip()
                
                # The rest is the text + "Certo Errado"
                text_content = (cat_split[1] + cat_split[2]).strip()
                # Remove "Certo Errado" at the end
                text_content = re.sub(r'Certo\s+Errado.*$', '', text_content).strip()
                text_content = re.sub(r'\s+', ' ', text_content)
            else:
                category = "Geral"
                text_content = after_info
        else:
            # Fallback for weird blocks
            category = "Geral"
            text_content = rest
            
        # Get answer from Gabarito using global index if possible
        # We need to know the starting number of this file
        # For simplicity, we'll assume the files are ordered and sequential
        # But we can also look at the Gabarito numbers
        
        questions.append({
            "id": i + 1, # This will be adjusted later
            "category": category,
            "text": text_content,
            "answer": "UNKNOWN",
            "explanation": "Explicação disponível no sistema Tec Concursos."
        })

    # Match with Gabarito
    if len(questions) == len(gabarito):
        for i in range(len(questions)):
            questions[i]["answer"] = gabarito[i]
    else:
        print(f"  Warning: Question count ({len(questions)}) != Gabarito count ({len(gabarito)})")
        # Try to match based on the ID numbers in Gabarito if they start from something else
        # For now, let's just use the Gabarito we found.
        # Actually, let's re-read the numbers from Gabarito to get the correct absolute IDs
        gabarito_dict = {}
        entries = re.findall(r'(\d+)\)\s+(Certo|Errado)', gabarito_text)
        for num, ans in entries:
            gabarito_dict[int(num)] = ans.upper()
        
        # We need to find the absolute IDs for questions too.
        # Let's re-extract IDs from the file
        ids = re.findall(r'(\d+)\)', content)
        # Filter out IDs in Gabarito
        content_without_gabarito = content[:content.find('Gabarito')]
        content_ids = [int(n) for n in re.findall(r'(\d+)\)', content_without_gabarito)]
        
        # Usually IDs are unique and sequential. Let's find the range.
        if gabarito_dict:
            start_id = min(gabarito_dict.keys())
            for i in range(len(questions)):
                q_id = start_id + i
                questions[i]["id"] = q_id
                if q_id in gabarito_dict:
                    questions[i]["answer"] = gabarito_dict[q_id]

    return questions

import unicodedata
import os
import re

def normalize_text(text):
    """Normalizes text for folder/file names: no accents, lowercase, underscores."""
    n = unicodedata.normalize('NFKD', text).encode('ASCII', 'ignore').decode('ASCII')
    n = n.lower()
    n = re.sub(r'[^a-z0-9]+', '_', n)
    return n.strip('_')

def get_context_and_name(filename):
    """
    Tries to infer the context (folder) and a clean name from the filename.
    Example: 'Língua Portuguesa para TCU 2025 1.txt' 
    -> Context: 'Língua Portuguesa para TCU 2025'
    -> Name: 'Língua Portuguesa para TCU 2025 1'
    """
    base_name = os.path.splitext(filename)[0]
    
    # Heuristic: If it ends with a number (like '... 1'), the part before is the context
    match = re.match(r'^(.*?)\s*(\d+)$', base_name)
    if match:
        context = match.group(1).strip()
    else:
        # Fallback: group by the first few words or use the whole name if short
        words = base_name.split(' - ')
        if len(words) > 1:
            context = words[0].strip()
        else:
            context = base_name

    folder_name = normalize_text(context)
    file_name_norm = normalize_text(base_name)
    
    return folder_name, f"{file_name_norm}_data.js"

def save_to_js(questions, output_path, var_name="questions"):
    with open(output_path, 'w', encoding='utf-8') as f:
        f.write(f"const {var_name} = ")
        json.dump(questions, f, indent=4, ensure_ascii=False)
        f.write(";")

import gen_html
import gen_quick
import gen_index

if __name__ == "__main__":
    # Get the directory where this script is located
    base_dir = os.path.dirname(os.path.abspath(__file__))
    txt_dir = os.path.join(base_dir, "arquivos_brutos")
    data_dir = os.path.join(base_dir, "simuladores_gerados")
    
    # List all .txt files in the dedicated folder
    if not os.path.exists(txt_dir):
        os.makedirs(txt_dir, exist_ok=True)
        print(f"Folder '{txt_dir}' created. Please place your .txt files there.")
        exit()

    all_files = [f for f in os.listdir(txt_dir) if f.endswith('.txt')]
    
    print(f"--- FASE 1: Parsing de {len(all_files)} arquivos ---")
    
    for file_name in all_files:
        file_path = os.path.join(txt_dir, file_name)
        folder_name, output_js_file = get_context_and_name(file_name)
        target_dir = os.path.join(data_dir, folder_name)
        
        os.makedirs(target_dir, exist_ok=True)
        
        try:
            qs = parse_simulado(file_path)
            js_path = os.path.join(target_dir, output_js_file)
            save_to_js(qs, js_path)
            
            display_name = gen_html.format_name(output_js_file.replace("_data.js", ""))
            category_name = gen_html.format_name(folder_name)
            gen_html.generate_html(js_path, display_name, category_name, base_dir)
        except Exception as e:
            print(f"  !! Erro ao processar context '{folder_name}'")

    print("\n--- FASE 2: Gerando Simulado Rápido Aleatório ---")
    try:
        gen_quick.generate_quick_sim(10)
    except Exception as e:
        print(f"  !! Erro no Simulador Rápido: {e}")

    print("\n--- FASE 3: Atualizando Dashboard Central ---")
    try:
        gen_index.update_index()
    except Exception as e:
        print(f"  !! Erro ao atualizar Dashboard: {e}")

    print("\nWorkflow Dinâmico Finalizado! Abra index.html para estudar.")
