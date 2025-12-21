import os

def generate_html(idx, data_file, topics):
    template_path = r"c:\Users\guilherme.rodrigues\Documents\GitHub\persistent\Simulador_TCU\auditoria_tcu.html"
    title = f"Simulado TCU 2025 - Bloco {idx:02d}"
    with open(template_path, 'r', encoding='utf-8') as f:
        html = f.read()

    # Update Title
    html = html.replace("<title>Simulador TCU - Auditoria Governamental e Controle Externo</title>", 
                        f"<title>Simulado TCU 2025 - Bloco {idx:02d} ({topics})</title>")
    
    # Update Meta Description
    html = html.replace('content="Simulados TCU 2025 - Preparação de Alta Performance"',
                        f'content="Simulado TCU 2025 - Bloco {idx:02d} - {topics}"')

    # Update Header H1 (using the new ID)
    html = html.replace('<h1 id="mainTitle"><i class="fas fa-microchip me-2"></i> Simulador TCU</h1>',
                        f'<h1 id="mainTitle"><i class="fas fa-microchip me-2"></i> Simulado TCU - Bloco {idx:02d}</h1>')
    
    # Update Header Subtitle (using the new ID)
    html = html.replace('<p id="subTitle">Auditoria Governamental e Controle Externo</p>',
                        f'<p id="subTitle">{topics}</p>')

    # Update Data Script
    html = html.replace('src="auditoria_tcu_data.js"', f'src="{data_file}"')

    output_path = rf"c:\Users\guilherme.rodrigues\Documents\GitHub\persistent\Simulador_TCU\simulado_{idx:02d}.html"
    with open(output_path, 'w', encoding='utf-8') as f:
        f.write(html)
    print(f"Generated {output_path}")

simulados = [
    (1, "simulado_01_data.js", "Administração e Auditoria"),
    (2, "simulado_02_data.js", "TI - Dados e Redes"),
    (3, "simulado_03_data.js", "TI - Desenvolvimento e Segurança"),
    (4, "simulado_04_data.js", "Direitos e Controle"),
    (5, "simulado_05_data.js", "AFO e Contabilidade Pública")
]

for idx, data, topics in simulados:
    generate_html(idx, data, topics)
