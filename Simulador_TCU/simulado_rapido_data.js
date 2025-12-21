const questions = [
    {
        "id": 106,
        "category": "TI - Ciência de Dados e Inteligência Artificial - Redes Neurais",
        "text": "Julgue o item a seguir, relativo a redes neurais artificiais. Os nós de origem na camada de entrada da rede neural, isto é, na primeira camada oculta, fornecem os respectivos elementos do padrão de ativação (vetor de entrada), que constituem os sinais de entrada aplicados aos neurônios (nós de computação) na segunda camada.",
        "answer": "ERRADO",
        "explanation": "O erro está em afirmar que a camada de entrada é a 'primeira camada oculta'. A camada de entrada é distinta das camadas ocultas; ela apenas recebe os vetores de entrada e os transmite para a primeira camada oculta (ou intermediária)."
    },
    {
        "id": 19,
        "category": "TI - Segurança da Informação - Conceitos de Criptografia (Chaves, Simetria, etc.)",
        "text": "Julgue o próximo item, a respeito de ataques, malwares, criptografia e certificação digital. Na criptografia simétrica, o texto cifrado resultante depende diretamente da chave secreta e do texto inteligível, usados como entrada para o algoritmo de criptografia.",
        "answer": "CERTO",
        "explanation": "Correto. A criptografia simétrica utiliza uma única chave secreta compartilhada. O processo de cifragem é uma função matemática (algoritmo) que recebe o texto plano (inteligível) e a chave como parâmetros para produzir o texto cifrado."
    },
    {
        "id": 86,
        "category": "TI - Gestão e Governança de TI - ITIL v4",
        "text": "No que concerne ao gerenciamento de serviços conforme o ITIL v4, julgue o item a seguir. O objetivo da prática de gerenciamento de nível de serviço é definir metas necessárias ao negócio, sendo a garantia definida como uma funcionalidade oferecida por um produto ou serviço para atender a uma necessidade específica, ou seja, resumidamente é “o que o serviço faz”.",
        "answer": "ERRADO",
        "explanation": "A descrição 'o que o serviço faz' refere-se à **Utilidade** (Utility). A **Garantia** (Warranty) refere-se a 'como o serviço é entregue' (disponibilidade, capacidade, continuidade e segurança), ou seja, se o serviço é adequado para o uso."
    },
    {
        "id": 57,
        "category": "Direito Administrativo (Doutrina e Leis Federais) - Atributos ou Características dos Atos Administrativos",
        "text": "Presunção de legitimidade, imperatividade e autoexecutoriedade são atributos do ato administrativo.",
        "answer": "CERTO",
        "explanation": "Correto. São os atributos clássicos da doutrina. Presunção de legitimidade (o ato nasce legal), Imperatividade (impõe obrigações a terceiros independente de concordância) e Autoexecutoriedade (administração executa sem ordem judicial prévia)."
    },
    {
        "id": 7,
        "category": "Administração Geral e Pública - Planejamento Estratégico",
        "text": "Acerca dos objetivos estratégicos organizacionais, julgue o item a seguir à luz do PDE 2024–2030. Os objetivos estratégicos da Embrapa devem ser vistos e compreendidos na perspectiva de interdependência e verticalidade entre eles, permitindo analisar as contribuições e os resultados gerados de forma dinâmica e multidimensional.",
        "answer": "ERRADO",
        "explanation": "No planejamento estratégico moderno e no PDE específico, a ênfase é na **horizontalidade** e integração, combatendo a visão estritamente vertical ou isolada (silos) que o item erroneamente sugere."
    },
    {
        "id": 29,
        "category": "Administração Geral e Pública - Balanced Scorecard (BSC)",
        "text": "Julgue o item a seguir quanto a avaliação institucional e o balanced scorecard . Na perspectiva do aprendizado e do crescimento do balanced scorecard , a capacitação da organização ocorre por meio dos investimentos em novos equipamentos, em pesquisas, em sistemas informacionais e em seus colaboradores.",
        "answer": "CERTO",
        "explanation": "Correto. A perspectiva de Aprendizado e Crescimento (a base do BSC) foca nos ativos intangíveis: capital humano (colaboradores/treinamento), capital organizacional (cultura) e capital de informação (sistemas)."
    },
    {
        "id": 199,
        "category": "TI - Engenharia de Software - TDD e BDD (Test-Driven Development e Behavior Driven Development)",
        "text": "Julgue o item seguinte, a respeito do desenvolvimento orientado ao comportamento (BDD). A linguagem ubíqua Cucumber é utilizada para a definição de cenários iniciais no BDD e permite que a equipe de negócios faça levantamentos com as partes interessadas (stakeholders) e os transforme em histórias do usuário (user story).",
        "answer": "ERRADO",
        "explanation": "O erro é triplo: 1) Cucumber não é uma linguagem, é uma ferramenta/framework. 2) A linguagem usada é o **Gherkin**. 3) No BDD, a 'linguagem ubíqua' é um conceito do DDD usado para que tech e business falem a mesma língua."
    },
    {
        "id": 96,
        "category": "TI - Ciência de Dados e Inteligência Artificial - Conceitos Gerais de Machine Learning",
        "text": "Julgue o item a seguir, a respeito de algoritmos e técnicas supervisionadas e não supervisionadas de aprendizado de máquina e aprendizagem profunda. A distância de Minkowski entre duas cadeias de caracteres é definida como o número mínimo de operações de edição necessárias para transformar a primeira cadeia de caracteres na segunda.",
        "answer": "ERRADO",
        "explanation": "A descrição refere-se à **Distância de Levenshtein** (ou Edit Distance). A Distância de Minkowski é uma métrica geral de distância em espaços vetoriais, sendo a base para as distâncias Euclidiana e de Manhattan."
    },
    {
        "id": 83,
        "category": "TI - Gestão e Governança de TI - ITIL v4",
        "text": "Acerca do gerenciamento de serviços com base na ITIL v4, julgue o item a seguir. A identificação de oportunidades de melhoria em serviços existentes e em novos serviços criados está associada à prática de melhoria contínua.",
        "answer": "CERTO",
        "explanation": "Correto. A prática de Melhoria Contínua (Continual Improvement) tem como objetivo alinhar os serviços da organização com as necessidades de negócio em constante mudança, buscando melhorias em produtos, serviços e práticas."
    },
    {
        "id": 126,
        "category": "TI - Desenvolvimento de Sistemas - Códigos em Java",
        "text": "Com base no código precedente, escrito em Java, julgue o próximo item. Se a entrada realizada pelo usuário nas variáveis numero1 ou numero2 não for um valor inteiro, então, de acordo com a sintaxe e a lógica do programa para tratar a exceção de erro, será mostrada a mensagem ERRO - Valor digitado não é um número inteiro!.",
        "answer": "ERRADO",
        "explanation": "Geralmente, em Java, se o programa espera um int e recebe outro tipo via Scanner, ocorre uma 'InputMismatchException'. Se o código não possuir um bloco try-catch tratando especificamente essa exceção ou validando o tipo, ele encerrará com erro brusco em vez de mostrar a mensagem customizada mencionada."
    }
];