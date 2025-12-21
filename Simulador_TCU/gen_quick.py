import json
import random
import os

def generate_quick_sim(count=10):
    base_dir = r"c:\Users\guilherme.rodrigues\Documents\GitHub\persistent\Simulador_TCU"
    all_questions = []
    
    # Files we already created
    data_files = [f"simulado_{i:02d}_data.js" for i in range(1, 6)]
    
    for df in data_files:
        path = os.path.join(base_dir, df)
        if os.path.exists(path):
            with open(path, 'r', encoding='utf-8') as f:
                content = f.read()
                # Remove "const questions = " and ";"
                json_str = content.replace("const questions = ", "").strip().rstrip(";")
                qs = json.loads(json_str)
                all_questions.extend(qs)
    
    if not all_questions:
        print("No questions found in data files.")
        return

    # Pick random 10
    sample = random.sample(all_questions, min(count, len(all_questions)))
    
    # Save to new data file
    output_data = os.path.join(base_dir, "simulado_rapido_data.js")
    with open(output_data, 'w', encoding='utf-8') as f:
        f.write("const questions = ")
        json.dump(sample, f, indent=4, ensure_ascii=False)
        f.write(";")
    
    print(f"Generated {output_data} with {len(sample)} random questions.")

    # Use existing gen_html logic to create the HTML
    import gen_html
    gen_html.generate_html(99, "simulado_rapido_data.js", "Revisão Expressa (10 Itens Diários)")
    
    # Rename the file to something better
    old_path = os.path.join(base_dir, "simulado_99.html")
    new_path = os.path.join(base_dir, "simulado_rapido.html")
    if os.path.exists(new_path): os.remove(new_path)
    os.rename(old_path, new_path)
    print(f"Generated {new_path}")

if __name__ == "__main__":
    generate_quick_sim(10)
