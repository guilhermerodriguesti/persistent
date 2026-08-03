#!/usr/bin/env python3
"""
Script para converter arquivos de quiz do layout antigo para o novo layout
baseado em Bombas_Explosivos_Quiz_Interativo.html
"""

import re
import json
import os

# Template HTML do novo layout
HTML_TEMPLATE = '''<!DOCTYPE html>
<html lang="pt-BR">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>{title}</title>
<style>
  :root{{--cor:#1a3a5c;--cor2:#2e6da4;--cor3:#e8f0f8;--verde:#1e7e34;--vermelho:#c0392b;--laranja:#d35400;}}
  *{{box-sizing:border-box;margin:0;padding:0;}}
  body{{font-family:'Segoe UI',Arial,sans-serif;background:#f0f4f8;color:#222;}}
  header{{background:var(--cor);color:#fff;padding:18px 24px;display:flex;align-items:center;gap:14px;}}
  header h1{{font-size:1.3rem;font-weight:700;}}
  .subtitle{{font-size:.85rem;opacity:.8;}}
  .scorebar{{background:var(--cor2);color:#fff;padding:10px 24px;display:flex;gap:18px;align-items:center;flex-wrap:wrap;}}
  .sc{{font-size:.95rem;}} .sc span{{font-weight:700;}}
  .lbl{{opacity:.75;font-size:.85rem;}}
  .btn-reset{{background:#fff;color:var(--cor);border:none;border-radius:6px;padding:6px 14px;font-size:.85rem;cursor:pointer;font-weight:600;transition:.2s;}}
  .btn-reset:hover{{background:#e0e8f0;}}
  .btn-wrong{{background:var(--laranja);color:#fff;border:none;border-radius:6px;padding:6px 14px;font-size:.85rem;cursor:pointer;font-weight:600;transition:.2s;margin-left:auto;}}
  .btn-wrong:hover:not(:disabled){{background:#b94600;}}
  .btn-wrong:disabled{{opacity:.4;cursor:not-allowed;}}
  main{{max-width:860px;margin:28px auto;padding:0 16px 60px;}}
  .chapter{{margin-bottom:32px;}}
  .chapter-title{{background:var(--cor);color:#fff;padding:10px 18px;border-radius:8px 8px 0 0;font-weight:700;font-size:1rem;}}
  .question{{background:#fff;border:1px solid #d0dcea;border-top:none;padding:20px 20px 14px;}}
  .question:last-child{{border-radius:0 0 8px 8px;}}
  .question+.question{{border-top:1px dashed #c8d8ea;}}
  .q-num{{font-size:.78rem;color:#888;margin-bottom:4px;}}
  .q-text{{font-size:1rem;font-weight:600;margin-bottom:14px;line-height:1.5;}}
  .opt{{display:block;width:100%;background:var(--cor3);border:2px solid transparent;border-radius:6px;padding:10px 14px;margin-bottom:8px;cursor:pointer;text-align:left;font-size:.93rem;line-height:1.4;transition:.15s;}}
  .opt:hover:not(:disabled){{background:#d5e5f8;border-color:var(--cor2);}}
  .opt.correct{{background:#d4edda;border-color:var(--verde);color:var(--verde);font-weight:600;}}
  .opt.wrong{{background:#fde8e8;border-color:var(--vermelho);color:var(--vermelho);}}
  .opt:disabled{{cursor:default;}}
  .feedback{{margin-top:8px;font-size:.88rem;padding:8px 12px;border-radius:6px;line-height:1.5;}}
  .feedback.ok{{background:#d4edda;color:#155724;}}
  .feedback.err{{background:#fde8e8;color:#721c24;}}
  .feedback .loc{{margin-top:4px;font-size:.8rem;opacity:.8;}}
</style>
</head>
<body>
<header>
  <div>
    <h1>{title}</h1>
    <div class="subtitle">{subtitle}</div>
  </div>
</header>
<div class="scorebar">
  <div class="sc">✅ Acertos: <span id="sc-c">0</span></div>
  <div class="sc">❌ Erros: <span id="sc-w">0</span></div>
  <div class="sc">📝 Respondidas: <span id="sc-a">0</span> <span class="lbl" id="sc-total"></span></div>
  <button class="btn-reset" onclick="resetAll()">↺ Reiniciar tudo</button>
  <button class="btn-wrong" id="btn-wrong" onclick="resetWrong()" disabled>↺ Só os erros</button>
</div>
<main id="quiz-container"></main>

<script>
const CHAPTERS = [
  {{
    "title": "{chapter_title}",
    "questions": [
{questions_data}
    ]
  }}
];

let answered = 0, corrects = 0, wrongs = 0;
let wrongQuestions = [];

function updateScore(){{
  document.getElementById('sc-c').textContent = corrects;
  document.getElementById('sc-w').textContent = wrongs;
  document.getElementById('sc-a').textContent = answered;
  document.getElementById('btn-wrong').disabled = (wrongQuestions.length === 0);
}}

function buildQuiz(dataSource){{
  dataSource = dataSource || CHAPTERS;
  window._currentData = dataSource;
  const container = document.getElementById('quiz-container');
  container.innerHTML = '';
  let total = 0;
  dataSource.forEach(ch => total += ch.questions.length);
  document.getElementById('sc-total').textContent = '/ ' + total;

  dataSource.forEach((ch, ci) => {{
    const div = document.createElement('div');
    div.className = 'chapter';
    let html = `<div class="chapter-title">${{ch.title}}</div>`;
    ch.questions.forEach((q, qi) => {{
      const qid = 'q_' + ci + '_' + qi;
      html += `<div class="question" id="block_${{qid}}">
        <div class="q-num">Questão ${{qi+1}}</div>
        <div class="q-text">${{q.q}}</div>`;
      q.opts.forEach((opt, oi) => {{
        html += `<button class="opt" id="${{qid}}_${{oi}}" onclick="handleAnswer(${{ci}}, ${{qi}}, ${{oi}})">${{opt}}</button>`;
      }});
      html += `<div class="feedback" id="fb_${{qid}}" style="display:none"></div></div>`;
    }});
    div.innerHTML = html;
    container.appendChild(div);
  }});
}}

function handleAnswer(ci, qi, chosen){{
  const dataSource = window._currentData || CHAPTERS;
  const ch = dataSource[ci];
  const q = ch.questions[qi];
  const qid = 'q_' + ci + '_' + qi;
  const correct = q.ans;
  const isRight = (chosen === correct);

  q.opts.forEach((_, oi) => {{
    const btn = document.getElementById(qid + '_' + oi);
    btn.disabled = true;
    if(oi === correct) btn.classList.add('correct');
    if(oi === chosen && !isRight) btn.classList.add('wrong');
  }});

  const fb = document.getElementById('fb_' + qid);
  fb.style.display = 'block';
  if(isRight){{
    fb.className = 'feedback ok';
    fb.innerHTML = `✅ <strong>Correto!</strong> ${{q.exp}}`;
    corrects++;
  }} else {{
    fb.className = 'feedback err';
    fb.innerHTML = `❌ <strong>Incorreto.</strong> ${{q.exp}}`;
    wrongs++;
    wrongQuestions.push({{chTitle: ch.title, qObj: q}});
  }}
  answered++;
  updateScore();
}}

function resetAll(){{
  if(!confirm('Reiniciar o quiz completo?')) return;
  answered = 0; corrects = 0; wrongs = 0;
  wrongQuestions = [];
  buildQuiz(CHAPTERS);
  updateScore();
}}

function resetWrong(){{
  if(wrongQuestions.length === 0) return;
  if(!confirm('Reiniciar apenas com as ' + wrongQuestions.length + ' questão(ões) que você errou?')) return;
  const chapMap = {{}};
  wrongQuestions.forEach(({{chTitle, qObj}}) => {{
    if(!chapMap[chTitle]) chapMap[chTitle] = {{title: chTitle, questions: []}};
    chapMap[chTitle].questions.push(qObj);
  }});
  const filtered = Object.values(chapMap);
  answered = 0; corrects = 0; wrongs = 0;
  wrongQuestions = [];
  buildQuiz(filtered);
  updateScore();
}}

buildQuiz();
</script>
</body>
</html>
'''

def extract_questions_from_old_format(filepath):
    """Extrai questões do formato antigo (IF-01.html original)"""
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # Se o arquivo é QUIMICA, usar formato QUIMICA
    if 'QUIMICA' in filepath:
        match = re.search(r'const quizData = \[(.*?)\];', content, re.DOTALL)
        if match:
            return extract_quimica_format(match.group(1))
    
    # Tentar formato "questoes" (IF files)
    match = re.search(r'const questoes = \[(.*?)\];', content, re.DOTALL)
    if match:
        return extract_questoes_format(match.group(1))
    
    # Tentar formato "quizData" (BOMBAS files)
    match = re.search(r'const quizData = \[(.*?)\];', content, re.DOTALL)
    if match:
        return extract_quiz_data_format(match.group(1))
    
    raise ValueError("Não foi possível encontrar o array de questões (nem 'questoes' nem 'quizData')")

def extract_questoes_format(questions_str):
    """Extrai questões do formato 'questoes' (IF files)"""
    # Não substituir aspas simples - trabalhar com o formato original
    questions = []
    
    # Padrão para capturar objetos de questão com aspas simples
    question_pattern = r'\{\s*q:\s*"([^"]+)",\s*opcoes:\s*\[(.*?)\],\s*correta:\s*(\d+),\s*explicacao:\s*"([^"]+)"\s*\}'
    
    for match in re.finditer(question_pattern, questions_str, re.DOTALL):
        q_text = match.group(1)
        opts_str = match.group(2)
        correct = int(match.group(3))
        explanation = match.group(4)
        
        # Extrair opções - aceitar aspas simples ou duplas
        options = []
        # Tentar padrão com aspas duplas
        opt_pattern = r'"([^"]+)"'
        for opt_match in re.finditer(opt_pattern, opts_str):
            options.append(opt_match.group(1))
        
        # Se não encontrou opções com aspas duplas, tentar aspas simples
        if not options:
            opt_pattern = r"'([^']+)'"
            for opt_match in re.finditer(opt_pattern, opts_str):
                options.append(opt_match.group(1))
        
        if options:  # Só adicionar se encontrou opções
            questions.append({
                'q': q_text,
                'opts': options,
                'ans': correct,
                'exp': explanation
            })
    
    return questions

def extract_quiz_data_format(questions_str):
    """Extrai questões do formato 'quizData' (BOMBAS files)"""
    questions = []
    question_pattern = r'\{\s*question:\s*"([^"]+)",\s*options:\s*\[(.*?)\],\s*answer:\s*(\d+),\s*explanation:\s*"([^"]+)"\s*\}'
    
    for match in re.finditer(question_pattern, questions_str, re.DOTALL):
        q_text = match.group(1)
        opts_str = match.group(2)
        correct = int(match.group(3))
        explanation = match.group(4)
        
        # Extrair opções
        options = []
        for opt_match in re.finditer(r'"([^"]+)"', opts_str):
            options.append(opt_match.group(1))
        
        questions.append({
            'q': q_text,
            'opts': options,
            'ans': correct,
            'exp': explanation
        })
    
    return questions

def extract_quimica_format(questions_str):
    """Extrai questões do formato QUIMICA (com topic opcional e diagram opcional)"""
    questions = []
    
    # Tentar primeiro com aspas nos nomes dos campos (formato JSON padrão)
    question_pattern_with_quotes = r'\{\s*(?:"topic":\s*"([^"]+)",\s*)?"question":\s*"((?:[^"\\]|\\.)*)",\s*"options":\s*\[(.*?)\],\s*"answer":\s*(\d+),\s*"explanation":\s*"((?:[^"\\]|\\.)*)"(?:,\s*"diagram":\s*`([^`]*)`)?\s*\}'
    
    matches = list(re.finditer(question_pattern_with_quotes, questions_str, re.DOTALL))
    
    # Se não encontrar com aspas, tentar sem aspas
    if not matches:
        question_pattern_without_quotes = r'\{\s*(?:topic:\s*"([^"]+)",\s*)?question:\s*"((?:[^"\\]|\\.)*)",\s*options:\s*\[(.*?)\],\s*answer:\s*(\d+),\s*explanation:\s*"((?:[^"\\]|\\.)*)"(?:,\s*diagram:\s*`([^`]*)`)?\s*\}'
        matches = list(re.finditer(question_pattern_without_quotes, questions_str, re.DOTALL))
    
    for match in matches:
        topic = match.group(1) if match.group(1) else ""
        q_text = match.group(2)
        opts_str = match.group(3)
        correct = int(match.group(4))
        explanation = match.group(5)
        diagram = match.group(6) if match.group(6) else ""
        
        # Extrair opções
        options = []
        opt_pattern = r'"((?:[^"\\]|\\.)*)"'
        for opt_match in re.finditer(opt_pattern, opts_str):
            options.append(opt_match.group(1))
        
        # Adicionar topic ao início da questão se existir
        if topic:
            q_text = f"[{topic}] {q_text}"
        
        # Adicionar diagram à explicação se existir
        if diagram:
            explanation = f"{explanation}<br><br>{diagram}"
        
        if options:
            questions.append({
                'q': q_text,
                'opts': options,
                'ans': correct,
                'exp': explanation
            })
    
    return questions

def extract_title_and_subtitle(filepath):
    """Extrai título e subtítulo do arquivo HTML"""
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # Tentar extrair do <title>
    title_match = re.search(r'<title>(.*?)</title>', content)
    title = title_match.group(1) if title_match else "Simulado"
    
    # Tentar extrair do <h1>
    h1_match = re.search(r'<h1>(.*?)</h1>', content)
    if h1_match:
        title = h1_match.group(1)
    
    # Tentar extrair subtítulo (p.subtitle ou similar)
    subtitle_match = re.search(r'<p[^>]*class="[^"]*subtitle[^"]*"[^>]*>(.*?)</p>', content, re.DOTALL)
    subtitle = subtitle_match.group(1).strip() if subtitle_match else ""
    
    return title, subtitle

def convert_questions_to_new_format(questions):
    """Converte questões para o formato do novo layout"""
    converted = []
    for q in questions:
        converted.append({
            'q': q['q'],
            'opts': q['opts'],
            'ans': q['ans'],
            'exp': q['exp']
        })
    return converted

def generate_questions_json(questions):
    """Gera o JSON das questões para inserir no template"""
    lines = []
    for i, q in enumerate(questions):
        if i > 0:
            lines.append(",")
        lines.append("      {")
        lines.append(f'        "q": {json.dumps(q["q"])},')
        lines.append('        "opts": [')
        for j, opt in enumerate(q['opts']):
            if j > 0:
                lines.append(",")
            lines.append(f'          {json.dumps(opt)}')
        lines.append("        ],")
        lines.append(f'        "ans": {q["ans"]},')
        lines.append(f'        "exp": {json.dumps(q["exp"])}')
        lines.append("      }")
    return '\n'.join(lines)

def convert_file(input_path, output_path):
    """Converte um arquivo do formato antigo para o novo"""
    print(f"Convertendo {input_path}...")
    
    # Extrair dados
    questions = extract_questions_from_old_format(input_path)
    title, subtitle = extract_title_and_subtitle(input_path)
    
    # Converter para novo formato
    questions_json = generate_questions_json(questions)
    
    # Gerar chapter title baseado no nome do arquivo
    chapter_title = title.replace("Simulado: ", "").replace("Simulado ", "")
    
    # Gerar HTML final
    html_content = HTML_TEMPLATE.format(
        title=title,
        subtitle=subtitle,
        chapter_title=chapter_title,
        questions_data=questions_json
    )
    
    # Escrever arquivo de saída
    with open(output_path, 'w', encoding='utf-8') as f:
        f.write(html_content)
    
    print(f"  ✓ Convertido com {len(questions)} questões")

def main():
    """Função principal"""
    questoes_dir = "/Users/guilhermerodrigues/Documents/GitHub/persistent/Simulador_Interativo/concursos/CFP-2026/IF-PPCEXB/questoes"
    
    # Lista de arquivos para converter (excluindo IF-01 que já foi convertido)
    files_to_convert = [
        "IF-02-backup.html",
        "IF-03-backup.html", 
        "IF-04-backup.html",
        "IF-05-backup.html",
        "IF-06-backup.html",
        "IF-07-backup.html",
        "IF-08-backup.html",
        "BOMBAS-01-backup.html",
        "BOMBAS-02-backup.html",
        "BOMBAS-03-backup.html",
        "BOMBAS-04-backup.html",
        "QUIMICA-04-topico1.html",
        "QUIMICA-04-topico2.html",
        "QUIMICA-05-topico3.html",
        "QUIMICA-06-topico4.html",
        "QUIMICA-07-apensos.html",
        "QUIMICA-08-tipos-de-drogas.html"
    ]
    
    # Primeiro, criar backups dos arquivos originais se não existirem
    for filename in files_to_convert:
        # Para arquivos QUIMICA, o backup é o próprio arquivo original
        if filename.startswith("QUIMICA-"):
            original_path = os.path.join(questoes_dir, filename)
            backup_path = os.path.join(questoes_dir, filename.replace(".html", "-backup.html"))
        else:
            original = filename.replace("-backup", "")
            backup_path = os.path.join(questoes_dir, filename)
            original_path = os.path.join(questoes_dir, original)
        
        if not os.path.exists(backup_path) and os.path.exists(original_path):
            import shutil
            shutil.copy(original_path, backup_path)
            print(f"Backup criado: {backup_path}")
    
    # Converter arquivos
    for filename in files_to_convert:
        if filename.startswith("QUIMICA-"):
            backup_path = os.path.join(questoes_dir, filename.replace(".html", "-backup.html"))
            output_path = os.path.join(questoes_dir, filename)
        else:
            backup_path = os.path.join(questoes_dir, filename)
            output_path = os.path.join(questoes_dir, filename.replace("-backup", ""))
        
        if os.path.exists(backup_path):
            try:
                convert_file(backup_path, output_path)
            except Exception as e:
                print(f"  ✗ Erro ao converter {filename}: {e}")
        else:
            print(f"  ✗ Backup não encontrado: {backup_path}")

if __name__ == "__main__":
    main()
