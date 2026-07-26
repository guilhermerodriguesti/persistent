import os
import json
import re

def parse_markdown(filepath):
    if not os.path.exists(filepath):
        print(f"Erro: Arquivo não encontrado: {filepath}")
        return None
        
    with open(filepath, "r", encoding="utf-8") as f:
        lines = f.readlines()
        
    root = {
        "text": "Root",
        "type": "root",
        "children": []
    }
    
    stack = [(0, root)]
    
    for line in lines:
        line_str = line.rstrip('\r\n')
        stripped = line_str.strip()
        if not stripped:
            continue
            
        # Verificar se é um cabeçalho
        if stripped.startswith('#'):
            hashes = len(stripped) - len(stripped.lstrip('#'))
            header_text = stripped[hashes:].strip()
            
            node = {
                "text": header_text,
                "type": f"h{hashes}",
                "children": []
            }
            
            while stack and stack[-1][0] >= hashes:
                stack.pop()
                
            if stack:
                stack[-1][1]["children"].append(node)
                stack.append((hashes, node))
            else:
                root["children"].append(node)
                stack = [(hashes, node)]
                
        # Verificar se é um item de lista
        elif stripped.startswith('- ') or stripped.startswith('* ') or stripped.startswith('+ '):
            marker = '- ' if stripped.startswith('- ') else ('* ' if stripped.startswith('* ') else '+ ')
            
            # Contar recuo em tabs
            num_tabs = 0
            for char in line_str:
                if char == '\t':
                    num_tabs += 1
                else:
                    break
                    
            item_text = stripped[len(marker):].strip()
            li_level = 4 + num_tabs
            
            node = {
                "text": item_text,
                "type": "li",
                "children": []
            }
            
            while stack and stack[-1][0] >= li_level:
                stack.pop()
                
            if stack:
                stack[-1][1]["children"].append(node)
                stack.append((li_level, node))
            else:
                root["children"].append(node)
                stack = [(li_level, node)]
        else:
            # Linha de texto simples
            if stack:
                parent_level, parent_node = stack[-1]
                node = {
                    "text": stripped,
                    "type": "p",
                    "children": []
                }
                parent_node["children"].append(node)
                
    return root

def main():
    workspace = "/Users/guilhermerodrigues/Downloads/PROVA 3"
    files = {
        "bombas": {
            "src": "BOMBAS E EXPLOSIVOS.md",
            "dest": "BOMBAS E EXPLOSIVOS.html"
        },
        "informatica": {
            "src": "INFORMÁTICA FORENSE.md",
            "dest": "INFORMÁTICA FORENSE.html"
        },
        "quimica": {
            "src": "QUÍMICA FORENSE.md",
            "dest": "QUÍMICA FORENSE.html"
        }
    }
    
    database = {}
    
    # 1. Parsing dos arquivos markdown
    for key, info in files.items():
        filepath = os.path.join(workspace, info["src"])
        print(f"Processando {info['src']}...")
        parsed = parse_markdown(filepath)
        if parsed:
            if parsed["children"] and parsed["children"][0]["type"] == "h1":
                database[key] = parsed["children"][0]
            else:
                database[key] = parsed
                
    # Salvar base de dados temporária em JSON para debug
    debug_json_path = os.path.join(workspace, "database_debug.json")
    with open(debug_json_path, "w", encoding="utf-8") as f:
        json.dump(database, f, ensure_ascii=False, indent=2)
    print(f"Base de dados temporária gerada em: {debug_json_path}")
    
    # Ler o template base
    template_path = os.path.join(workspace, "template.html")
    if not os.path.exists(template_path):
        print(f"Erro: Template {template_path} não encontrado!")
        return
        
    with open(template_path, "r", encoding="utf-8") as f:
        template_content = f.read()
        
    # 2. Gerar o Painel Unificado (index.html)
    print("Compilando index.html unificado...")
    db_json_str = json.dumps(database, ensure_ascii=False)
    compiled_unified = template_content.replace(
        "/*{{FORENSIC_DATABASE_PLACEHOLDER}}*/",
        f"const FORENSIC_DATABASE = {db_json_str};"
    )
    index_path = os.path.join(workspace, "index.html")
    with open(index_path, "w", encoding="utf-8") as f:
        f.write(compiled_unified)
    print(f"-> Painel Unificado gerado: {index_path}")
    
    # 3. Gerar cada página HTML única
    for key, info in files.items():
        dest_filename = info["dest"]
        dest_path = os.path.join(workspace, dest_filename)
        print(f"Compilando página única: {dest_filename}...")
        
        # Filtra banco de dados para conter apenas a chave da matéria atual
        single_db = {key: database[key]}
        single_db_str = json.dumps(single_db, ensure_ascii=False)
        
        compiled_single = template_content.replace(
            "/*{{FORENSIC_DATABASE_PLACEHOLDER}}*/",
            f"const FORENSIC_DATABASE = {single_db_str};"
        )
        
        with open(dest_path, "w", encoding="utf-8") as f:
            f.write(compiled_single)
        print(f"-> Página única gerada: {dest_path}")
        
    print("\nProcesso concluído com sucesso!")

if __name__ == "__main__":
    main()
