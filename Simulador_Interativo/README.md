# 🎯 Simulador Interativo

Sistema completo de simulados para diversos concursos públicos com interface moderna e interativa.

## 📁 Estrutura do Projeto

```
Simulador_Interativo/
├── index.html                    # Página principal com lista de concursos
├── README.md                     # Este arquivo
├── concursos/                    # Pasta com os concursos
│   └── policial_legislativo_2026/
│       ├── index.html            # Página do concurso
│       └── simulados/            # Simulados do concurso
│           ├── simulado_01.html
│           └── simulado_01_data.js
├── templates/                    # Templates para gerar simulados
│   └── simulado_template.html
└── scripts/                      # Scripts de automação
    └── gerar_simulado.py         # Gerador de simulados
```

## 🚀 Como Usar

### 1. Adicionar um Novo Concurso

```bash
# Criar pasta do concurso
mkdir -p concursos/nome_do_concurso_2026

# Copiar template do index
cp concursos/policial_legislativo_2026/index.html concursos/nome_do_concurso_2026/
```

Edite o `index.html` copiado para personalizar:
- Título do concurso
- Ícone
- Descrição

### 2. Gerar um Simulado

#### Opção 1: Com arquivo JSON de questões

```bash
cd scripts
python gerar_simulado.py policial_legislativo_2026 "Simulado 01 - Direito Constitucional" questoes.json
```

#### Opção 2: Com questões de exemplo (para testar)

```bash
cd scripts
python gerar_simulado.py policial_legislativo_2026 "Simulado de Teste"
```

### 3. Formato do Arquivo JSON de Questões

Crie um arquivo `questoes.json` com o seguinte formato:

```json
[
    {
        "enunciado": "Texto completo da questão aqui...",
        "alternativas": [
            "Alternativa A - Texto da alternativa",
            "Alternativa B - Texto da alternativa",
            "Alternativa C - Texto da alternativa",
            "Alternativa D - Texto da alternativa",
            "Alternativa E - Texto da alternativa"
        ],
        "correta": 2,
        "disciplina": "Direito Constitucional",
        "ano": "2024",
        "banca": "CEBRASPE"
    },
    {
        "enunciado": "Segunda questão...",
        "alternativas": [
            "Alternativa A",
            "Alternativa B",
            "Alternativa C",
            "Alternativa D"
        ],
        "correta": 0,
        "disciplina": "Direito Administrativo",
        "ano": "2023",
        "banca": "FCC"
    }
]
```

**Campos:**
- `enunciado`: Texto da questão
- `alternativas`: Array com as alternativas (mínimo 2)
- `correta`: Índice da alternativa correta (0 = A, 1 = B, 2 = C, etc.)
- `disciplina`: Nome da disciplina (opcional)
- `ano`: Ano da questão (opcional)
- `banca`: Banca organizadora (opcional)

## ✨ Funcionalidades

### Interface do Simulado
- ✅ Design moderno com glassmorphism
- ✅ Navegação entre questões (botões e setas do teclado)
- ✅ Cronômetro automático
- ✅ Barra de progresso
- ✅ Seleção de alternativas
- ✅ Tela de resultados com estatísticas
- ✅ Responsivo para mobile

### Estatísticas
- Total de acertos
- Total de erros
- Tempo total
- Percentual de aproveitamento

## 🎨 Personalização

### Cores (CSS Variables)

Edite as variáveis CSS no arquivo HTML para personalizar as cores:

```css
:root {
    --primary: #6366f1;        /* Cor principal */
    --secondary: #10b981;      /* Cor secundária */
    --accent: #f59e0b;         /* Cor de destaque */
    --danger: #ef4444;         /* Cor de erro */
}
```

## 📝 Exemplos de Uso

### Criar simulado de Direito Constitucional

```bash
cd scripts
python gerar_simulado.py policial_legislativo_2026 "Simulado 01 - Direito Constitucional" ../questoes_constitucional.json
```

### Criar simulado de Informática

```bash
cd scripts
python gerar_simulado.py policial_legislativo_2026 "Simulado 02 - Informática" ../questoes_informatica.json
```

## 🔧 Requisitos

- Python 3.6+ (para o script gerador)
- Navegador moderno (Chrome, Firefox, Safari, Edge)
- Nenhuma dependência externa necessária

## 📱 Compatibilidade

- ✅ Chrome 90+
- ✅ Firefox 88+
- ✅ Safari 14+
- ✅ Edge 90+
- ✅ Mobile (iOS Safari, Chrome Mobile)

## 🤝 Contribuindo

Para adicionar novos concursos ou melhorias:

1. Crie a estrutura de pastas do concurso
2. Gere os simulados usando o script
3. Teste no navegador
4. Atualize o `index.html` principal se necessário

## 📄 Licença

Este projeto é de uso educacional para preparação em concursos públicos.

---

**Desenvolvido com ❤️ para concurseiros**
