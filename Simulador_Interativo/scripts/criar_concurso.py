#!/usr/bin/env python3
"""
Script para criar a estrutura de um novo concurso
Uso: python criar_concurso.py <nome_concurso> <titulo_completo> <icone>
Exemplo: python criar_concurso.py trf_2026 "TRF - Técnico Judiciário 2026" "fa-gavel"
"""

import os
import sys

def criar_concurso(nome_concurso, titulo_completo, icone="fa-graduation-cap"):
    """
    Cria a estrutura completa de um novo concurso
    
    Args:
        nome_concurso: Nome da pasta (ex: trf_2026)
        titulo_completo: Título exibido (ex: "TRF - Técnico Judiciário 2026")
        icone: Ícone Font Awesome (ex: "fa-gavel")
    """
    base_dir = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
    concurso_dir = os.path.join(base_dir, 'concursos', nome_concurso)
    
    # Criar diretórios
    os.makedirs(concurso_dir, exist_ok=True)
    os.makedirs(os.path.join(concurso_dir, 'simulados'), exist_ok=True)
    
    # Criar index.html do concurso
    index_html = f"""<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>{titulo_completo} - Simulados</title>
    
    <link href="https://fonts.googleapis.com/css2?family=Outfit:wght@400;600;700;800&family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">

    <style>
        :root {{
            --primary: #6366f1;
            --primary-dark: #4f46e5;
            --secondary: #10b981;
            --accent: #f59e0b;
            --background: #0f172a;
            --card-bg: rgba(30, 41, 59, 0.7);
            --glass-border: rgba(255, 255, 255, 0.1);
            --text-main: #f8fafc;
            --text-dim: #94a3b8;
        }}

        body {{
            background: radial-gradient(circle at top right, #1e1b4b, #0f172a);
            color: var(--text-main);
            font-family: 'Inter', sans-serif;
            min-height: 100vh;
        }}

        h1, h2, h3 {{
            font-family: 'Outfit', sans-serif;
        }}

        .bg-shape {{
            position: fixed;
            z-index: -1;
            filter: blur(100px);
            border-radius: 50%;
            opacity: 0.3;
        }}

        .shape-1 {{
            width: 500px;
            height: 500px;
            background: var(--primary);
            top: -150px;
            right: -150px;
        }}

        .shape-2 {{
            width: 400px;
            height: 400px;
            background: #9333ea;
            bottom: -100px;
            left: -100px;
        }}

        .container {{
            max-width: 1200px;
            padding: 40px 20px;
        }}

        .breadcrumb-custom {{
            background: transparent;
            padding: 0;
            margin-bottom: 30px;
        }}

        .breadcrumb-custom a {{
            color: var(--text-dim);
            text-decoration: none;
            transition: color 0.3s;
        }}

        .breadcrumb-custom a:hover {{
            color: var(--primary);
        }}

        .breadcrumb-custom .active {{
            color: var(--text-main);
        }}

        .page-header {{
            text-align: center;
            margin-bottom: 60px;
            padding: 40px 20px;
            background: var(--card-bg);
            backdrop-filter: blur(20px);
            border: 1px solid var(--glass-border);
            border-radius: 24px;
        }}

        .page-icon {{
            width: 100px;
            height: 100px;
            background: rgba(99, 102, 241, 0.15);
            border-radius: 24px;
            display: inline-flex;
            align-items: center;
            justify-content: center;
            font-size: 3rem;
            color: var(--primary);
            margin-bottom: 24px;
        }}

        .page-title {{
            font-size: 3rem;
            font-weight: 800;
            margin-bottom: 16px;
            background: linear-gradient(135deg, #fff, #94a3b8);
            -webkit-background-clip: text;
            background-clip: text;
            -webkit-text-fill-color: transparent;
        }}

        .page-subtitle {{
            color: var(--text-dim);
            font-size: 1.2rem;
        }}

        .section-title {{
            font-size: 1.8rem;
            font-weight: 700;
            margin-bottom: 30px;
            display: flex;
            align-items: center;
            gap: 12px;
        }}

        .section-title i {{
            color: var(--primary);
        }}

        .simulado-card {{
            background: var(--card-bg);
            backdrop-filter: blur(20px);
            border: 1px solid var(--glass-border);
            border-radius: 20px;
            padding: 30px;
            height: 100%;
            transition: all 0.4s;
            position: relative;
            overflow: hidden;
        }}

        .simulado-card::before {{
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            height: 3px;
            background: linear-gradient(90deg, var(--primary), var(--secondary));
            transform: scaleX(0);
            transition: transform 0.4s;
        }}

        .simulado-card:hover {{
            transform: translateY(-8px);
            border-color: rgba(99, 102, 241, 0.5);
            box-shadow: 0 20px 40px rgba(0, 0, 0, 0.4);
        }}

        .simulado-card:hover::before {{
            transform: scaleX(1);
        }}

        .card-icon {{
            width: 60px;
            height: 60px;
            background: rgba(99, 102, 241, 0.15);
            border-radius: 16px;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 1.5rem;
            color: var(--primary);
            margin-bottom: 20px;
            transition: all 0.3s;
        }}

        .simulado-card:hover .card-icon {{
            background: var(--primary);
            color: white;
            transform: rotate(-10deg) scale(1.1);
        }}

        .card-title {{
            font-size: 1.3rem;
            font-weight: 700;
            margin-bottom: 12px;
        }}

        .card-desc {{
            color: var(--text-dim);
            font-size: 0.95rem;
            margin-bottom: 20px;
            line-height: 1.6;
        }}

        .card-meta {{
            display: flex;
            flex-wrap: wrap;
            gap: 12px;
            margin-bottom: 20px;
        }}

        .meta-tag {{
            background: rgba(255, 255, 255, 0.05);
            border: 1px solid rgba(255, 255, 255, 0.1);
            padding: 6px 12px;
            border-radius: 8px;
            font-size: 0.85rem;
            color: var(--text-dim);
            display: flex;
            align-items: center;
            gap: 6px;
        }}

        .meta-tag i {{
            color: var(--primary);
        }}

        .btn-start {{
            background: var(--primary);
            color: white;
            border: none;
            padding: 12px 24px;
            border-radius: 12px;
            font-weight: 700;
            width: 100%;
            transition: all 0.3s;
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 8px;
            text-decoration: none;
        }}

        .btn-start:hover {{
            background: var(--primary-dark);
            color: white;
            transform: scale(1.02);
        }}

        .empty-state {{
            text-align: center;
            padding: 80px 20px;
            background: var(--card-bg);
            backdrop-filter: blur(20px);
            border: 1px dashed var(--glass-border);
            border-radius: 24px;
        }}

        .empty-state i {{
            font-size: 5rem;
            color: var(--text-dim);
            opacity: 0.3;
            margin-bottom: 24px;
        }}

        .empty-state h3 {{
            font-size: 1.5rem;
            margin-bottom: 12px;
            color: var(--text-dim);
        }}

        .empty-state p {{
            color: var(--text-dim);
            opacity: 0.7;
        }}

        @keyframes fadeIn {{
            from {{
                opacity: 0;
                transform: translateY(20px);
            }}
            to {{
                opacity: 1;
                transform: translateY(0);
            }}
        }}

        .animate-fade {{
            animation: fadeIn 0.8s ease forwards;
        }}

        .delay-1 {{ animation-delay: 0.2s; }}
        .delay-2 {{ animation-delay: 0.4s; }}
    </style>
</head>
<body>
    <div class="bg-shape shape-1"></div>
    <div class="bg-shape shape-2"></div>

    <div class="container">
        <nav class="breadcrumb-custom animate-fade">
            <a href="../../index.html"><i class="fas fa-home"></i> Início</a>
            <span class="mx-2">/</span>
            <span class="active">{titulo_completo}</span>
        </nav>

        <header class="page-header animate-fade">
            <div class="page-icon">
                <i class="fas {icone}"></i>
            </div>
            <h1 class="page-title">{titulo_completo}</h1>
            <p class="page-subtitle">Simulados Completos para sua Preparação</p>
        </header>

        <main>
            <h2 class="section-title animate-fade delay-1">
                <i class="fas fa-list-check"></i>
                Simulados Disponíveis
            </h2>

            <div class="row g-4 animate-fade delay-2" id="simuladosContainer">
                <!-- Empty State -->
                <div class="col-12">
                    <div class="empty-state">
                        <i class="fas fa-inbox"></i>
                        <h3>Nenhum simulado disponível ainda</h3>
                        <p>Os simulados para este concurso serão adicionados em breve.</p>
                        <p style="margin-top: 20px; font-size: 0.9rem;">
                            Use o script <code>gerar_simulado.py</code> para criar simulados.
                        </p>
                    </div>
                </div>
            </div>
        </main>
    </div>

    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"></script>
</body>
</html>
"""
    
    index_path = os.path.join(concurso_dir, 'index.html')
    with open(index_path, 'w', encoding='utf-8') as f:
        f.write(index_html)
    
    print(f"✅ Concurso '{nome_concurso}' criado com sucesso!")
    print(f"   Pasta: {concurso_dir}")
    print(f"   Título: {titulo_completo}")
    print(f"   Ícone: {icone}")
    print(f"\n📝 Próximos passos:")
    print(f"   1. Adicione o concurso ao index.html principal")
    print(f"   2. Use gerar_simulado.py para criar simulados:")
    print(f"      python gerar_simulado.py {nome_concurso} \"Nome do Simulado\" questoes.json")
    
    return True

if __name__ == "__main__":
    if len(sys.argv) < 3:
        print("Uso: python criar_concurso.py <nome_concurso> <titulo_completo> [icone]")
        print("\nExemplo:")
        print('  python criar_concurso.py trf_2026 "TRF - Técnico Judiciário 2026" "fa-gavel"')
        print("\nÍcones disponíveis (Font Awesome):")
        print("  fa-shield-alt, fa-gavel, fa-graduation-cap, fa-building,")
        print("  fa-landmark, fa-balance-scale, fa-university, etc.")
        sys.exit(1)
    
    nome = sys.argv[1]
    titulo = sys.argv[2]
    icone = sys.argv[3] if len(sys.argv) > 3 else "fa-graduation-cap"
    
    criar_concurso(nome, titulo, icone)
