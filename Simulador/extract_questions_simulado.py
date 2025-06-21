#!/usr/bin/env python3
# -*- coding: utf-8 -*-

import re
import json
import os

def extract_questions_from_text(input_file):
    """Extrai todas as questões do arquivo de texto fornecido"""
    
    with open(input_file, 'r', encoding='utf-8') as file:
        content = file.read()
    
    # Padrão para encontrar questões
    pattern = r'Questão (\d+)\n(.*?)\n\(\s*\) CERTO\s*\(\s*\) ERRADO\n\nResposta: (CERTO|ERRADO)\nComentário: (.*?)(?=\n\nQuestão|\n\n\d+\.|\Z)'
    
    matches = re.findall(pattern, content, re.DOTALL)
    
    questions = []
    current_theme = "Simulado Geral"  # Tema padrão
    
    # Padrão para encontrar temas
    theme_pattern = r'\n(\d+\.\s+[^\n]+)'
    themes = re.findall(theme_pattern, content)
    theme_positions = [content.find(theme) for theme in themes]
    
    for match in matches:
        question_num = int(match[0])
        question_text = match[1].strip()
        answer = "C" if match[2] == "CERTO" else "E"
        comment = match[3].strip()
        
        # Determinar tema baseado na posição da questão no texto
        question_pos = content.find(f"Questão {question_num}")
        theme = current_theme
        
        for i, pos in enumerate(theme_positions):
            if pos < question_pos and (i == len(theme_positions) - 1 or theme_positions[i + 1] > question_pos):
                theme = themes[i].strip()
                break
        
        # Determinar tema específico baseado no conteúdo da questão
        specific_theme = determine_theme(question_text, theme)
        
        questions.append({
            "text": question_text,
            "answer": answer,
            "comment": comment,
            "theme": specific_theme
        })
    
    return questions

def determine_theme(question_text, general_theme):
    """Determina o tema específico da questão baseado no conteúdo"""
    
    themes = {
        "Arquitetura de Computadores": ["arquitetura", "CUDA", "GPU", "processador", "núcleo", "cache", "pipeline", "RISC", "CISC", "Hyper-Threading"],
        "Sistemas Distribuídos": ["distribuído", "cluster", "grid", "nuvem", "cloud", "middleware", "memória compartilhada"],
        "Sistemas de Arquivos": ["NTFS", "EXT4", "XFS", "FAT", "exFAT", "ZFS", "APFS", "journaling", "metadados"],
        "Virtualização": ["virtualização", "contêiner", "Docker", "Kubernetes", "máquina virtual", "VM", "hypervisor"],
        "Armazenamento": ["RAID", "SAN", "NAS", "DAS", "storage", "armazenamento", "disco", "SSD", "HDD"],
        "Computação Quântica": ["quântica", "qubit", "superposição", "emaranhamento"],
        "Bancos de Dados": ["banco de dados", "SQL", "NoSQL", "ACID", "transação", "índice", "chave primária", "normalização", "forma normal"],
        "Redes": ["rede", "TCP/IP", "OSI", "roteador", "switch", "firewall", "VPN", "NAT", "DHCP", "DNS"],
        "Segurança": ["segurança", "criptografia", "hash", "autenticação", "autorização", "vulnerabilidade", "exploit", "malware", "ransomware"],
        "Forense Digital": ["forense", "evidência", "perícia", "timeline", "artefato", "aquisição", "imagem forense", "cadeia de custódia"],
        "Programação": ["algoritmo", "estrutura de dados", "orientação a objetos", "OOP", "linguagem", "compilador", "interpretador"]
    }
    
    question_lower = question_text.lower()
    
    for theme, keywords in themes.items():
        if any(keyword.lower() in question_lower for keyword in keywords):
            return theme
    
    # Extrair o tema principal do tema geral (ex: "1. FUNDAMENTOS DA COMPUTAÇÃO" -> "FUNDAMENTOS DA COMPUTAÇÃO")
    if general_theme.strip():
        parts = general_theme.split(' ', 1)
        if len(parts) > 1:
            return parts[1].strip()
    
    return general_theme

def generate_javascript(questions):
    """Gera o código JavaScript com todas as questões"""
    
    js_questions = []
    for q in questions:
        js_question = {
            "text": q["text"].replace('"', '\\"').replace('\n', ' '),
            "answer": q["answer"],
            "comment": q["comment"].replace('"', '\\"').replace('\n', ' '),
            "theme": q["theme"]
        }
        js_questions.append(js_question)
    
    return json.dumps(js_questions, indent=2, ensure_ascii=False)

if __name__ == "__main__":
    # Se o arquivo de texto com as questões não existir, crie-o
    input_file = "input_simulado.txt"
    
    if not os.path.exists(input_file):
        print(f"Arquivo {input_file} não encontrado.")
        print("Por favor, crie um arquivo de texto com as questões no formato:")
        print("Questão X")
        print("Texto da questão")
        print("( ) CERTO")
        print("( ) ERRADO")
        print("Resposta: CERTO/ERRADO")
        print("Comentário: Explicação da resposta")
        exit(1)
    
    questions = extract_questions_from_text(input_file)
    print(f"Extraídas {len(questions)} questões")
    
    js_code = generate_javascript(questions)
    
    with open('quiz_questions_simulado.js', 'w', encoding='utf-8') as f:
        f.write(f"const questions = {js_code};")
    
    print("Arquivo quiz_questions_simulado.js gerado com sucesso!")
