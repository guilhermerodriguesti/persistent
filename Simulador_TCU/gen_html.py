import os
import re

def generate_html(data_full_path, display_name, category_name, root_dir=None):
    """
    data_full_path: Absolute path to the .js file.
    display_name: Pretty name for the title.
    category_name: Folder name or context.
    root_dir: The base directory of the project.
    """
    if root_dir is None:
        root_dir = os.path.dirname(os.path.abspath(__file__))
        
    template_path = os.path.join(root_dir, "auditoria_tcu.html")
    if not os.path.exists(template_path):
        print(f"Error: Template not found at {template_path}")
        return None

    with open(template_path, 'r', encoding='utf-8') as f:
        template = f.read()

    # Determine paths
    target_dir = os.path.dirname(data_full_path)
    base_name = os.path.basename(data_full_path).replace("_data.js", "")
    output_filename = f"{base_name}.html"
    output_path = os.path.join(target_dir, output_filename)
    
    # Calculate depth to return to index.html
    rel_to_root = os.path.relpath(root_dir, target_dir)
    index_link = os.path.join(rel_to_root, "index.html").replace("\\", "/")

    html = template

    # 1. Update Title
    html = html.replace("<title>Simulador TCU - Auditoria Governamental e Controle Externo</title>", 
                        f"<title>Simulado TCU 2025/2026 - {display_name}</title>")
    
    # 2. Update Meta Description
    html = html.replace('content="Simulados TCU 2025/2026 - Preparação de Alta Performance"',
                        f'content="Simulado focado em {display_name} - Contexto: {category_name}"')

    # 3. Update Header H1
    h1_content = f'<h1 id="mainTitle"><i class="fas fa-graduation-cap me-2"></i> {display_name}</h1>'
    html = re.sub(r'<h1 id="mainTitle">.*?</h1>', h1_content, html, flags=re.DOTALL)
    
    # 4. Update Header Subtitle
    sub_content = f'<p id="subTitle">Simulado TCU 2025/2026 | {category_name}</p>'
    html = re.sub(r'<p id="subTitle">.*?</p>', sub_content, html, flags=re.DOTALL)

    # 5. Update Dashboard Link
    html = html.replace('href="index.html"', f'href="{index_link}"')

    # 6. Update Data Script path (it's in the same folder)
    js_filename = os.path.basename(data_full_path)
    html = html.replace('src="auditoria_tcu_data.js"', f'src="{js_filename}"')

    with open(output_path, 'w', encoding='utf-8') as f:
        f.write(html)
    
    return output_path

def format_name(name):
    """Converts names to Title Case."""
    return name.replace('_', ' ').title()

if __name__ == "__main__":
    # If run as script, redo everything in simuladores_gerados/
    root = os.path.dirname(os.path.abspath(__file__))
    target_root = os.path.join(root, "simuladores_gerados")
    
    if os.path.exists(target_root):
        print("Regenerating all HTML files...")
        for r, dirs, files in os.walk(target_root):
            for file in files:
                if file.endswith("_data.js"):
                    full_p = os.path.join(r, file)
                    ctx = os.path.basename(r)
                    disp = format_name(file.replace("_data.js", ""))
                    cat = format_name(ctx)
                    generate_html(full_p, disp, cat, root)
        print("Done!")
    else:
        print("Nothing to regenerate.")
