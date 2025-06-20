#!/usr/bin/env python3
# -*- coding: utf-8 -*-

import re
import json

def extract_questions_from_quiz():
    """Extrai todas as questões do arquivo quiz.html original"""
    
    with open('quiz.html', 'r', encoding='utf-8') as file:
        content = file.read()
    
    # Padrão para encontrar questões
    pattern = r'Questão (\d+)\n(.*?)\n\n\( \) Certo\n\( \) Errado\n\nGabarito e Comentário:\nGabarito: (Certo|Errado)\nComentário: (.*?)(?=\n\nQuestão|\n\nQuiz|\Z)'
    
    matches = re.findall(pattern, content, re.DOTALL)
    
    questions = []
    
    for match in matches:
        question_num = int(match[0])
        question_text = match[1].strip()
        answer = "C" if match[2] == "Certo" else "E"
        comment = match[3].strip()
        
        # Determinar tema baseado no conteúdo da questão
        theme = determine_theme(question_text)
        
        questions.append({
            "text": question_text,
            "answer": answer,
            "comment": comment,
            "theme": theme
        })
    
    return questions

def determine_theme(question_text):
    """Determina o tema da questão baseado no seu conteúdo"""
    
    themes = {
        "Análise Forense Windows": ["SAM", "SYSTEM", "Windows", "UserAssist", "DLL", "hiberfil", "pagefile", "prefetch", "MFT", "NTFS"],
        "Forense Mobile": ["Chip-off", "móveis", "eMMC", "UFS", "Android", "iOS", "JTAG"],
        "Formatos Forenses": ["AFF", "E01", "DD", "raw", "imagem forense"],
        "Criptografia": ["hash", "MD5", "SHA", "Rainbow Table", "salt", "criptografia"],
        "Redes e Protocolos": ["SMB", "TCP", "UDP", "PCAP", "tráfego", "rede"],
        "Blockchain": ["Bitcoin", "blockchain", "criptomoeda", "endereço"],
        "Virtualização": ["virtual", "VM", "virtualização", "aninhada"],
        "Sistemas de Arquivos": ["HFS+", "APFS", "ext4", "FAT", "Catalog File"],
        "Armazenamento": ["SSD", "HDD", "wear leveling", "Data Wiping"],
        "Esteganografia": ["esteganografia", "esteganálise", "ocultar"],
        "IoT": ["IoT", "Internet of Things"],
        "Legislação": ["Lei", "Portaria", "SENASP", "cadeia de custódia"],
        "Telecomunicações": ["GSM", "LTE", "4G", "3G", "2G"],
        "Análise de Malware": ["malware", "entropia", "empacotado", "packer"],
        "Sistemas Operacionais": ["hibernação", "sleep", "WSL", "Linux"]
    }
    
    question_lower = question_text.lower()
    
    for theme, keywords in themes.items():
        if any(keyword.lower() in question_lower for keyword in keywords):
            return theme
    
    return "Informática Forense"

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
    questions = extract_questions_from_quiz()
    print(f"Extraídas {len(questions)} questões")
    
    js_code = generate_javascript(questions)
    
    with open('quiz_forense.js', 'w', encoding='utf-8') as f:
        f.write(f"const questions = {js_code};")
    
    print("Arquivo quiz_forense.js gerado com sucesso!")
