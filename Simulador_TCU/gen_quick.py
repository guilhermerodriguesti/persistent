import json
import random
import os
import datetime
import re
import gen_html

def generate_quick_sim(count=10):
    # Get current date for the simulation
    today = datetime.datetime.now().strftime("%Y-%m-%d")
    today_display = datetime.datetime.now().strftime("%d/%m/%Y")
    
    # Dynamic base directory
    base_dir = os.path.dirname(os.path.abspath(__file__))
    target_root = os.path.join(base_dir, "simuladores_gerados")
    
    all_questions = []
    
    if not os.path.exists(target_root):
        print("Build target directory not found. Please run parser.py first.")
        return

    # Recursively find all _data.js files, excluding previous quick sims to avoid recursion
    for root, dirs, files in os.walk(target_root):
        if "revisoes_diarias" in root: continue
        
        for file in files:
            if file.endswith("_data.js"):
                path = os.path.join(root, file)
                try:
                    with open(path, 'r', encoding='utf-8') as f:
                        content = f.read()
                        json_str = re.sub(r'^const\s+\w+\s*=\s*', '', content).strip().rstrip(";")
                        qs = json.loads(json_str)
                        all_questions.extend(qs)
                except Exception as e:
                    print(f"Error loading questions from {file}: {e}")
    
    if not all_questions:
        print("No questions found to generate quick simulation.")
        return

    # Random selection
    sample = random.sample(all_questions, min(count, len(all_questions)))
    
    # Save in a folder for daily reviews
    daily_dir = os.path.join(target_root, "00_revisoes_diarias")
    os.makedirs(daily_dir, exist_ok=True)
    
    file_id = today.replace("-", "_")
    output_js = os.path.join(daily_dir, f"simulado_diario_{file_id}_data.js")
    
    with open(output_js, 'w', encoding='utf-8') as f:
        f.write("const questions = ")
        json.dump(sample, f, indent=4, ensure_ascii=False)
        f.write(";")
    
    # Generate HTML
    display_title = f"Simulado do Dia - {today_display}"
    category_name = "Revisões Diárias"
    gen_html.generate_html(output_js, display_title, category_name, base_dir)
    
    print(f"Daily Revision for {today_display} generated with {len(sample)} questions.")

if __name__ == "__main__":
    generate_quick_sim(10)
