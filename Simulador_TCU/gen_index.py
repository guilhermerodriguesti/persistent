import os
import re

def update_index():
    # Get the directory where this script is located
    base_dir = os.path.dirname(os.path.abspath(__file__))
    index_path = os.path.join(base_dir, "index.html")
    target_root = os.path.join(base_dir, "simuladores_gerados")
    
    if not os.path.exists(index_path):
        print(f"index.html not found.")
        return

    with open(index_path, 'r', encoding='utf-8') as f:
        html = f.read()

    # Find all simulators recursively in target/
    groups = {}
    last_daily_path = "index.html" # default
    last_daily_title = "Começar Simulado"

    if os.path.exists(target_root):
        for root, dirs, files in os.walk(target_root):
            for file in files:
                if file.endswith('.html') and '_data' not in file:
                    context_folder = os.path.basename(root)
                    if context_folder == "simuladores_gerados": continue
                    
                    context_title = context_folder.replace('_', ' ').title()
                    # Prettier titles for specific folders
                    if "Revisoes Diarias" in context_title: context_title = "🕒 Revisões Diárias"
                    if "Revisao Rapida" in context_title: context_title = "⚡ Revisão Expressa"
                    
                    if context_title not in groups: groups[context_title] = []
                    
                    rel_path = os.path.relpath(os.path.join(root, file), base_dir).replace("\\", "/")
                    display_name = file.replace('.html', '').replace('_', ' ').title()
                    
                    # If it's a daily sim, check for most recent
                    if "diario" in file:
                        if last_daily_path == "index.html" or file > os.path.basename(last_daily_path):
                            last_daily_path = rel_path
                            last_daily_title = f"Simulado do Dia ({display_name.split()[-1]})"

                    groups[context_title].append({
                        "name": display_name,
                        "path": rel_path,
                        "category": context_title
                    })

    # 1. Update Hero Card (Estudo Ágil)
    # Target: <a href="simulado_rapido.html" class="btn-action px-5">Começar Agora</a>
    hero_pattern = r'<a href=".*?" class="btn-action px-5">.*?</a>'
    new_hero_btn = f'<a href="{last_daily_path}" class="btn-action px-5">{last_daily_title}</a>'
    html = re.sub(hero_pattern, new_hero_btn, html)

    # 2. Update Dynamic Sections
    new_cards_html = "<!-- START DYNAMIC SECTIONS -->\n"
    # Sort groups: Daily reviews first, then others
    sorted_group_names = sorted(groups.keys(), key=lambda x: (0 if "🕒" in x else 1 if "⚡" in x else 2, x))
    
    for title in sorted_group_names:
        sims = sorted(groups[title], key=lambda x: x['name'], reverse=("🕒" in title))
        new_cards_html += f"""
            <h2 class="section-title animate-fade">
                <i class="fas fa-folder-open text-primary"></i> {title}
            </h2>
            <div class="row g-4 mb-5 animate-fade">
        """
        for s in sims:
            new_cards_html += f"""
                <div class="col-lg-4 col-md-6">
                    <div class="card-custom">
                        <div class="card-icon"><i class="fas fa-file-alt"></i></div>
                        <h3 class="card-title">{s['name']}</h3>
                        <p class="card-desc">Simulado dedicado para {s['category'].replace('🕒 ', '').replace('⚡ ', '')}.</p>
                        <a href="{s['path']}" class="btn-action">Iniciar <i class="fas fa-play ms-2"></i></a>
                    </div>
                </div>
            """
        new_cards_html += "</div>\n"
    new_cards_html += "            <!-- END DYNAMIC SECTIONS -->"

    # Replace dynamic markers
    marker_pattern = r'<!-- START DYNAMIC SECTIONS -->.*?<!-- END DYNAMIC SECTIONS -->'
    if re.search(marker_pattern, html, flags=re.DOTALL):
        html = re.sub(marker_pattern, new_cards_html, html, flags=re.DOTALL)
    
    with open(index_path, 'w', encoding='utf-8') as f:
        f.write(html)
    print("Dashboard updated with daily simulators and Hero link.")

if __name__ == "__main__":
    update_index()
