import os

def listar_paginas_html(diretorio):
    paginas_html = []
    for root, dirs, files in os.walk(diretorio):
        for file in files:
            if file.endswith(".html"):
                paginas_html.append(os.path.join(root, file))
    return paginas_html

def criar_pagina_indice_bootstrap(paginas, diretorio_indice="Testes", nome_indice="index.html"):
    os.makedirs(diretorio_indice, exist_ok=True)
    with open(os.path.join(diretorio_indice, nome_indice), "w", encoding="utf-8") as indice:
        indice.write("<!DOCTYPE html>\n<html lang=\"pt\">\n<head>\n")
        indice.write("    <meta charset=\"UTF-8\">\n")
        indice.write("    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n")
        indice.write("    <title>Índice de Páginas</title>\n")
        indice.write("    <link href=\"https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css\" rel=\"stylesheet\">\n")
        indice.write("</head>\n<body>\n")
        indice.write(f"    <div class=\"container mt-5\">\n")
        indice.write(f"        <h1 class=\"mb-4\">Índice de Páginas - {os.path.basename(diretorio_indice)}</h1>\n")
        indice.write("        <ul class=\"list-group\">\n")
        for pagina in paginas:
            rel_path = os.path.relpath(pagina, diretorio_indice)
            indice.write(f"            <li class=\"list-group-item\"><a href=\"{rel_path}\">{os.path.basename(pagina)}</a></li>\n")
        indice.write("        </ul>\n    </div>\n")
        indice.write("<script src=\"https://code.jquery.com/jquery-3.5.1.slim.min.js\"></script>\n")
        indice.write("<script src=\"https://cdn.jsdelivr.net/npm/@popperjs/core@2.5.2/dist/umd/popper.min.js\"></script>\n")
        indice.write("<script src=\"https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js\"></script>\n")
        indice.write("</body>\n</html>")

def main():
    diretorio_principal = input("Digite o caminho do diretório principal: ")

    if not os.path.exists(diretorio_principal):
        print("O diretório especificado não existe.")
        return

    paginas_html = listar_paginas_html(diretorio_principal)

    if not paginas_html:
        print("Não foram encontradas páginas HTML no diretório.")
        return

    diretorio_indice = os.path.join(diretorio_principal, "Testes")
    nome_indice = "index.html"

    print(f"Criando índice em: {os.path.join(diretorio_indice, nome_indice)}")
    criar_pagina_indice_bootstrap(paginas_html, diretorio_indice, nome_indice)

    print(f"O índice foi gerado com sucesso em: {os.path.join(diretorio_indice, nome_indice)}")

if __name__ == "__main__":
    main()
