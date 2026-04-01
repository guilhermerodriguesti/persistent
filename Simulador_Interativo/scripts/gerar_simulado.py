#!/usr/bin/env python3
"""
Script para gerar simulados interativos automaticamente
Uso: python gerar_simulado.py <concurso> <nome_simulado>
Exemplo: python gerar_simulado.py policial_legislativo_2026 "Simulado 01 - Direito Constitucional"
"""

import os
import sys
import json
from datetime import datetime

def criar_data_file(questoes, output_path):
    """Cria o arquivo JavaScript com as questões"""
    js_content = "const questions = [\n"
    
    for i, q in enumerate(questoes):
        js_content += "    {\n"
        js_content += f"        question: `{q.get('enunciado', '')}`,\n"
        js_content += f"        alternatives: [\n"
        for alt in q.get('alternativas', []):
            js_content += f"            `{alt}`,\n"
        js_content += "        ],\n"
        js_content += f"        correct: {q.get('correta', 0)},\n"
        js_content += f"        subject: '{q.get('disciplina', '')}',\n"
        js_content += f"        year: '{q.get('ano', '')}',\n"
        js_content += f"        institution: '{q.get('banca', '')}'\n"
        js_content += "    }" + ("," if i < len(questoes) - 1 else "") + "\n"
    
    js_content += "];\n"
    
    with open(output_path, 'w', encoding='utf-8') as f:
        f.write(js_content)

def criar_html_simulado(titulo, data_filename, output_path, template_path):
    """Cria o arquivo HTML do simulado a partir do template"""
    with open(template_path, 'r', encoding='utf-8') as f:
        template = f.read()
    
    html = template.replace('{{TITULO_SIMULADO}}', titulo)
    html = html.replace('{{DATA_FILE}}', data_filename)
    
    with open(output_path, 'w', encoding='utf-8') as f:
        f.write(html)

def gerar_simulado(concurso, nome_simulado, questoes_json_path=None):
    """
    Gera um simulado completo
    
    Args:
        concurso: Nome da pasta do concurso (ex: policial_legislativo_2026)
        nome_simulado: Nome do simulado (ex: "Simulado 01 - Direito Constitucional")
        questoes_json_path: Caminho para arquivo JSON com questões (opcional)
    """
    # Diretórios base
    base_dir = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
    concurso_dir = os.path.join(base_dir, 'concursos', concurso)
    template_path = os.path.join(base_dir, 'templates', 'simulado_template.html')
    
    # Verificar se o concurso existe
    if not os.path.exists(concurso_dir):
        print(f"❌ Erro: Concurso '{concurso}' não encontrado!")
        print(f"   Crie a pasta: {concurso_dir}")
        return False
    
    # Criar pasta de simulados se não existir
    simulados_dir = os.path.join(concurso_dir, 'simulados')
    os.makedirs(simulados_dir, exist_ok=True)
    
    # Gerar nome do arquivo (slug)
    slug = nome_simulado.lower()
    slug = slug.replace(' - ', '_').replace(' ', '_')
    slug = ''.join(c for c in slug if c.isalnum() or c == '_')
    
    # Caminhos dos arquivos
    data_filename = f"{slug}_data.js"
    html_filename = f"{slug}.html"
    data_path = os.path.join(simulados_dir, data_filename)
    html_path = os.path.join(simulados_dir, html_filename)
    
    # Carregar questões
    if questoes_json_path and os.path.exists(questoes_json_path):
        with open(questoes_json_path, 'r', encoding='utf-8') as f:
            questoes = json.load(f)
    else:
        # Questões de exemplo
        questoes = [
            {
                "enunciado": "Exemplo de questão 1. Qual é a resposta correta?",
                "alternativas": [
                    "Alternativa A - Incorreta",
                    "Alternativa B - Correta",
                    "Alternativa C - Incorreta",
                    "Alternativa D - Incorreta",
                    "Alternativa E - Incorreta"
                ],
                "correta": 1,
                "disciplina": "Exemplo",
                "ano": "2026",
                "banca": "Exemplo"
            },
            {
                "enunciado": "Exemplo de questão 2. Assinale a alternativa correta.",
                "alternativas": [
                    "Alternativa A - Incorreta",
                    "Alternativa B - Incorreta",
                    "Alternativa C - Correta",
                    "Alternativa D - Incorreta",
                    "Alternativa E - Incorreta"
                ],
                "correta": 2,
                "disciplina": "Exemplo",
                "ano": "2026",
                "banca": "Exemplo"
            }
        ]
        print("⚠️  Usando questões de exemplo. Forneça um arquivo JSON com questões reais.")
    
    # Criar arquivos
    print(f"📝 Gerando simulado: {nome_simulado}")
    print(f"   Concurso: {concurso}")
    print(f"   Questões: {len(questoes)}")
    
    criar_data_file(questoes, data_path)
    print(f"✅ Arquivo de dados criado: {data_filename}")
    
    criar_html_simulado(nome_simulado, data_filename, html_path, template_path)
    print(f"✅ Arquivo HTML criado: {html_filename}")
    
    # Atualizar index do concurso
    atualizar_index_concurso(concurso_dir, concurso)
    
    print(f"\n🎉 Simulado gerado com sucesso!")
    print(f"   Acesse: concursos/{concurso}/simulados/{html_filename}")
    
    return True

def atualizar_index_concurso(concurso_dir, concurso_nome):
    """Atualiza o index.html do concurso com os simulados disponíveis"""
    simulados_dir = os.path.join(concurso_dir, 'simulados')
    
    if not os.path.exists(simulados_dir):
        return
    
    # Listar todos os simulados
    simulados = []
    for file in os.listdir(simulados_dir):
        if file.endswith('.html'):
            simulados.append(file)
    
    if not simulados:
        return
    
    # Gerar HTML dos cards
    cards_html = ""
    for i, simulado in enumerate(sorted(simulados)):
        nome = simulado.replace('.html', '').replace('_', ' ').title()
        cards_html += f"""
                <div class="col-lg-4 col-md-6">
                    <div class="simulado-card">
                        <div class="card-icon"><i class="fas fa-file-alt"></i></div>
                        <h3 class="card-title">{nome}</h3>
                        <p class="card-desc">Simulado completo com questões comentadas.</p>
                        <div class="card-meta">
                            <span class="meta-tag"><i class="fas fa-question-circle"></i> Questões</span>
                            <span class="meta-tag"><i class="fas fa-clock"></i> Cronômetro</span>
                        </div>
                        <a href="simulados/{simulado}" class="btn-start">
                            Iniciar <i class="fas fa-play ms-2"></i>
                        </a>
                    </div>
                </div>
"""
    
    # Atualizar index.html
    index_path = os.path.join(concurso_dir, 'index.html')
    if os.path.exists(index_path):
        with open(index_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        # Substituir o container de simulados
        if 'id="simuladosContainer"' in content:
            start = content.find('<div class="row g-4 animate-fade delay-2" id="simuladosContainer">')
            if start != -1:
                end = content.find('</div>', start + len('<div class="row g-4 animate-fade delay-2" id="simuladosContainer">'))
                if end != -1:
                    new_content = content[:start] + f'<div class="row g-4 animate-fade delay-2" id="simuladosContainer">\n{cards_html}            ' + content[end:]
                    
                    with open(index_path, 'w', encoding='utf-8') as f:
                        f.write(new_content)
                    
                    print(f"✅ Index do concurso atualizado")

if __name__ == "__main__":
    if len(sys.argv) < 3:
        print("Uso: python gerar_simulado.py <concurso> <nome_simulado> [questoes.json]")
        print("\nExemplo:")
        print('  python gerar_simulado.py policial_legislativo_2026 "Simulado 01 - Direito Constitucional"')
        print('  python gerar_simulado.py policial_legislativo_2026 "Simulado 02" questoes.json')
        sys.exit(1)
    
    concurso = sys.argv[1]
    nome_simulado = sys.argv[2]
    questoes_json = sys.argv[3] if len(sys.argv) > 3 else None
    
    gerar_simulado(concurso, nome_simulado, questoes_json)
