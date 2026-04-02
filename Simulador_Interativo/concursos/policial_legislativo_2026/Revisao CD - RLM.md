# Guia 1

Este é um resumo estruturado e focado no padrão de cobrança do **CEBRASPE**, extraído da análise das 200 questões fornecidas. Como você está na trilha para a **Câmara dos Deputados**, este mapeamento separa os conceitos essenciais que a banca mais explora em Raciocínio Lógico e Matemático.

---

## **1\. Análise Combinatória: Onde a Ordem Importa?**

O maior volume de questões trata de contagem. O segredo do CEBRASPE não é apenas a fórmula, mas a **interpretação do agrupamento**.

### **Combinação vs. Arranjo/Permutação**

* **Combinação:** A ordem dos elementos **não importa**. Muito comum em formação de comissões, equipes de investigação ou grupos de trabalho (ex: questões 1, 6, 13, 42).  
  * *Dica:* Se trocar a posição dos membros não cria uma equipe nova, use Combinação: $C\_{n,p} \= \\frac{n\!}{p\!(n-p)\!}$.  
* **Arranjo/Permutação:** A ordem **importa**. Comum em senhas, filas, placas de veículos e atribuição de cargos distintos (Presidente, Diretor) (ex: questões 19, 36, 85).  
  * *Dica:* Se a função ou posição define um resultado diferente, a ordem importa.

### **Casos Especiais Recorrentes**

* **Permutação Circular:** Quando pessoas se sentam ao redor de uma mesa redonda. O cálculo é $(n-1)\!$. Se houver restrições (como "duas pessoas não podem sentar juntas"), subtraia os casos indesejados do total (ex: questões 14, 38, 86).  
* **Anagramas com Repetição:** Palavras como "URUGUAI" ou "FIFA". Divida o total de letras pelo fatorial das repetições (ex: questões 30, 31).  
* **Princípio Fundamental da Contagem (PFC):** Usado para etapas sucessivas e independentes, como formação de senhas ou placas (ex: questões 19, 96).

---

## **2\. Lógica de Proposições: Equivalências e Negações**

Aqui a banca foca na manipulação das conectivas lógicas, especialmente a **Condicional ($P \\rightarrow Q$)**.

### **Negações "De Morgan" e Condicional**

| Proposição | Negação Lógica | Regra Prática |
| :---- | :---- | :---- |
| **$P \\wedge Q$** (e) | $\\neg P \\vee \\neg Q$ | Nega as duas e troca "e" por "ou". |
| **$P \\vee Q$** (ou) | $\\neg P \\wedge \\neg Q$ | Nega as duas e troca "ou" por "e". |
| **$P \\rightarrow Q$** (se...então) | $P \\wedge \\neg Q$ | "Mantém a 1ª **E** Nega a 2ª" (Regra do Mané). |
| **Todo $A$ é $B$** | Algum $A$ **não** é $B$ | "Pelo menos um" fura a regra. |

### **Equivalências da Condicional ($P \\rightarrow Q$)**

O CEBRASPE adora cobrar as duas formas equivalentes de um "Se... então":

1. **Contrapositiva:** $\\neg Q \\rightarrow \\neg P$ (Inverte as duas e nega).  
2. **Disjuntiva:** $\\neg P \\vee Q$ (Nega a primeira **OU** mantém a segunda \- Regra do "Neymar").

---

## **3\. Raciocínio Analítico e Argumentação**

Esta parte avalia a validade de um argumento a partir de premissas dadas.

* **Validade vs. Verdade:** Um argumento é válido se, assumindo que as premissas são verdadeiras, a conclusão **obrigatoriamente** for verdadeira. Não importa se a frase parece absurda no mundo real (ex: questões 191, 192).  
* **Falácias Comuns:**  
  * **Afirmação do Consequente:** "Se chove, a rua molha. A rua está molhada, logo choveu." (**INVÁLIDO**, alguém pode ter jogado um balde de água).  
  * **Negação do Antecedente:** "Se chove, a rua molha. Não choveu, logo a rua não molha." (**INVÁLIDO**).  
* **Diagramas Lógicos:** Para questões com "Todo", "Algum" e "Nenhum", desenhar círculos (Diagramas de Venn) é a estratégia mais segura para visualizar as interseções (ex: questão 102).

---

## **4\. Estratégia de Prova para o CEBRASPE**

1. **Cuidado com as Pegadinhas de "Superior/Inferior":** A banca raramente pede o valor exato; ela pede para você julgar se o resultado ultrapassa um limite. Muitas vezes, você pode simplificar os cálculos ou usar estimativas para ganhar tempo (ex: questão 1).  
2. **Itens Anulados e Complexos:** Questões de contagem com muitas restrições (como as de equipes da PC-DF) exigem atenção redobrada aos detalhes (ex: "exatamente x mulheres" vs "pelo menos x mulheres").  
3. **Lógica Sentencial em Textos Legais:** Como visto nas questões sobre Leis e Regimentos (questão 143), a banca gosta de transformar parágrafos jurídicos em proposições lógicas.

---

Gostaria que eu resolvesse detalhadamente alguma dessas questões específicas de Análise Combinatória para praticarmos o passo a passo do cálculo?

Dando continuidade ao seu mapeamento para a **Câmara dos Deputados (2026)**, analisei o segundo bloco de questões (201 a 400). Se o primeiro bloco focou na base da contagem e conectivos, este bloco mergulha na **validade de argumentos complexos** e na **análise estatística de dispersão**.

Aqui está o resumo estruturado e focado no que o CEBRASPE realmente quer de você:

---

## **1\. Lógica de Argumentação: Validade e Teste de Hipóteses**

O CEBRASPE adora criar "historinhas" (investigações policiais, processos em tribunais ou dilemas de astronautas) para testar se você consegue separar a **forma lógica** do conteúdo semântico.

### **O que define um Argumento Válido?**

Um argumento é válido se a veracidade das premissas **obriga** a conclusão a ser verdadeira.

* **Modus Ponens (Afirmação do Antecedente):** Se $P \\rightarrow Q$ é verdade e $P$ ocorre, então $Q$ obrigatoriamente ocorre.  
* **Modus Tollens (Negação do Consequente):** Se $P \\rightarrow Q$ é verdade e $\\neg Q$ ocorre, então $\\neg P$ obrigatoriamente ocorre. (Ex: Questão 203: "Se Paulo é parente, então é inocente. Paulo não é inocente, logo não é parente").

### **As Armadilhas da Banca**

* **Conclusão Verdadeira em Argumento Inválido:** A conclusão pode ser uma frase "bonitinha" ou logicamente verdadeira no mundo real, mas se ela não derivar das premissas, o item está **Errado** (Ex: Questão 250 sobre florestas devastadas).  
* **Falsidade da Condicional:** Lembre-se que em uma condicional $P \\rightarrow Q$, se o antecedente ($P$) for **Falso**, a proposição inteira é **Verdadeira**, não importa o que aconteça depois (Ex: Questões 226, 240).

---

## **2\. Tabelas-Verdade: A Regra das $2^n$ Linhas**

Neste bloco, a banca cobrou exaustivamente a estrutura técnica das tabelas.

### **Cálculo de Linhas**

A regra é fixa:

$$L \= 2^n$$  
onde $n$ é o número de **proposições simples**.

* **Cuidado:** "João é médico" e "João não é médico" contam como apenas **uma** proposição simples ($P$ e $\\neg P$).  
* **Questões de "Mais de 15 linhas":** Geralmente aparecem quando a sentença tem 4 proposições simples ($2^4 \= 16$). Se tiver 5, pula para 32 (Ex: Questões 281, 287, 293).

### **Valores Lógicos em Proposições Compostas**

| Conectivo | Condição para ser VERDADEIRA | Condição para ser FALSA |
| :---- | :---- | :---- |
| **Conjunção ($\\wedge$)** | Ambas devem ser V. | Pelo menos uma F. |
| **Disjunção ($\\vee$)** | Pelo menos uma V. | Ambas devem ser F. |
| **Condicional ($\\rightarrow$)** | Qualquer caso, exceto $V \\rightarrow F$. | Apenas no caso **V $\\rightarrow$ F**. |
| **Bicondicional ($\\leftrightarrow$)** | Valores iguais (V-V ou F-F). | Valores diferentes (V-F ou F-V). |
| **Disjunção Exclusiva ($\\underline{\\vee}$)** | Valores diferentes (V-F ou F-V). | Valores iguais (V-V ou F-F). |

---

## **3\. Estatística: Dispersão e Variabilidade**

As questões 370 a 400 introduzem a estatística descritiva, focando em quão "espalhados" estão os dados.

### **Variância ($s^2$) e Desvio Padrão ($s$)**

O desvio padrão é a raiz quadrada da variância. Ele indica a distância média dos dados em relação à média aritmética.

* **Fórmula da Variância Amostral:**  
  $$s^2 \= \\frac{\\sum\_{i=1}^{n} (x\_i \- \\bar{x})^2}{n-1}$$  
* **Fórmula do Desvio Padrão:**  
  $$s \= \\sqrt{s^2}$$

### **Padrões de Cobrança (Fique atento\!)**

1. **Alteração na Amostra:** Se você somar um valor constante a todos os dados, a média aumenta, mas a variância e o desvio padrão **não mudam**. Se você multiplicar todos os dados por uma constante $k$, o desvio padrão fica multiplicado por $k$ e a variância por $k^2$.  
2. **Adição da Média à Amostra:** Se você incluir um novo dado que é exatamente igual à média da amostra anterior, a nova variância será **menor**, pois a soma dos desvios não muda, mas o denominador ($n$ ou $n-1$) aumenta (Ex: Questão 394).  
3. **Amplitude vs. Variância:** A amplitude é apenas a diferença entre o maior e o menor valor. Um conjunto pode ter uma amplitude grande (devido a um único *outlier*), mas uma variância pequena se o restante dos dados estiver muito agrupado (Ex: Questão 374).

---

## **4\. Check-list Mental para a Prova**

**"Penso, logo existo" é um argumento válido?**

De acordo com o CEBRASPE (Questão 256), **não**. Por quê? Porque um argumento exige pelo menos uma premissa e uma conclusão distintas em uma estrutura formal. Frases isoladas ou silogismos incompletos (*entimemas*) costumam ser pegadinhas.

---

**Como você já está dominando a teoria, quer que eu prepare um "simulado relâmpago" com 5 itens inéditos no estilo Certo/Errado, misturando esses temas de lógica e estatística?**

Para fechar esse ciclo de 600 questões do **CEBRASPE**, este terceiro bloco (401 a 600\) consolida dois pilares fundamentais da prova da **Câmara dos Deputados**: o cálculo técnico de **Dispersão Estatística** e a habilidade dedutiva em **Problemas de Correlação (Associação de Informações)**.

Aqui está o mapa estratégico para sua revisão:

---

## **1\. Estatística: Dispersão e Variabilidade (Questões 401 a 455\)**

Nesta etapa, a banca exige que você saiba diferenciar variância populacional de amostral e as propriedades que as regem.

### **Propriedades da Variância ($s^2$) e Desvio Padrão ($s$)**

* **Não Negatividade:** A variância nunca é negativa. Se o item disser que a variância pode ser um número negativo, está **Errado** (Questão 406).  
* **Escala:** Se todos os valores de um conjunto forem iguais, a variância e o desvio padrão são **zero** (Questão 447).  
* **Sensibilidade:** O desvio padrão é muito sensível a *outliers* (valores extremos). Quanto mais "espalhados" os dados, maior o desvio.

### **Diferença entre Amostra e População**

O CEBRASPE costuma cobrar se você sabe qual denominador usar no cálculo da variância:

* **Variância Amostral ($s^2$):** Usa-se $n-1$.  
* **Variância Populacional ($\\sigma^2$):** Usa-se $n$.

**Atenção:** Se o item fala em "estimativa da variância" ou "amostra aleatória", use sempre $n-1$ (Questão 448).

---

## **2\. Quantis e Boxplots (Questões 456 a 535\)**

O domínio da **Mediana** e dos **Quartis** é o que separa quem acerta de quem "quase" acerta.

### **O Medo do Boxplot**

A banca ama o diagrama de caixa (*Boxplot*). Você deve ler esse gráfico com os olhos fechados:

1. **Linha central da caixa:** Mediana ($Q\_2$ ou 50º percentil).  
2. **Limite inferior da caixa:** 1º Quartil ($Q\_1$ ou 25º percentil).  
3. **Limite superior da caixa:** 3º Quartil ($Q\_3$ ou 75º percentil).  
4. **Hastes (Whiskers):** Representam os valores mínimos e máximos (excluindo *outliers*).

### **Cálculo da Mediana ($Md$)**

* **Conjunto Ímpar:** É o termo central exato.  
* **Conjunto Par:** É a média aritmética dos dois termos centrais (Questão 460).  
* **Importante:** Nunca calcule a mediana antes de colocar os dados em **Rol** (ordem crescente ou decrescente). O erro mais comum é pegar o valor central de uma lista desordenada.

---

## **3\. Raciocínio Lógico: Associação de Informações (Questões 536 a 600\)**

Estes são os "puzzles" de lógica (ex: "Quem é o médico?", "Quem mora em Salvador?", "Qual a idade de cada um?").

### **Técnica da Matriz de Decisão (Tabela de Verdade)**

Para não se perder nas pistas, construa uma grade cruzando as categorias.

* **Pistas Negativas:** "Ana não é a cerimonialista" $\\rightarrow$ Marque **F** no cruzamento de Ana e Cerimonialista.  
* **Pistas de Exclusão:** Quando encontrar um **V**, preencha toda a linha e toda a coluna correspondente com **F**.  
* **Cuidado com Conectivos:** Se a pista diz "Paulo nasceu em Brasília **OU** Goiânia", e outra pista exclui Brasília, Paulo **obrigatoriamente** nasceu em Goiânia.

| Nome | Brasília | Goiânia | Curitiba |
| :---- | :---- | :---- | :---- |
| **Paulo** | F | **V** | F |
| **Tiago** | **V** | F | F |
| **João** | F | F | **V** |

---

## **4\. Diferenciais para a Câmara dos Deputados**

1. **Assimetria:** Se a **Média \> Mediana**, a distribuição é assimétrica à direita (positiva). Se a **Mediana \> Média**, é assimétrica à esquerda (negativa). (Questão 521).  
2. **Robustez:** A mediana é uma medida **robusta**, ou seja, ela não muda drasticamente se um valor extremo for alterado. Já a média é "puxada" por valores muito altos ou baixos (Questão 526).  
3. **Lógica em Tabelas:** O CEBRASPE às vezes fornece uma tabela lógica parcialmente preenchida para você completar (Questões 536 e 537). Preencha-a sistematicamente antes de julgar o item.

---

Com 600 questões analisadas, você cobriu cerca de 90% do comportamento previsível da banca. **Gostaria que eu montasse um roteiro de 5 minutos com as fórmulas estatísticas "salva-vidas" que você deve decorar para o dia da prova?**

Este resumo consolida o padrão de cobrança do **CEBRASPE** extraído das questões 601 a 800\. Para o concurso da **Câmara dos Deputados**, a banca eleva o nível de exigência em **Estruturas Lógicas** (especialmente a tradução de linguagem natural para simbólica) e **Estatística Descritiva**.

---

## **1\. Operadores Lógicos e Tradução de Sentenças**

O CEBRASPE foca na capacidade do candidato em transformar textos complexos em fórmulas lógicas.

### **Proposição Simples vs. Composta**

* **Simples:** Expressa uma ideia única, mesmo que longa ou com dados numéricos (ex: "No Brasil, 20% dos acidentes ocorrem com indivíduos alcoolizados" — questão 634).  
* **Composta:** Conectada por "e", "ou", "se... então".  
* **Cuidado:** Sentenças interrogativas, exclamativas ou ordens **não são proposições** (questão 653).

### **A Armadilha da "Consequência"**

Este é um dos pontos onde os candidatos mais erram. A banca usa palavras como "consequência", "pois" ou "já que" para inverter a ordem da condicional ($P \\rightarrow Q$):

* "A é consequência de B" $\\rightarrow$ Simboliza-se como **$B \\rightarrow A$** (O que causa vem primeiro na lógica).  
* "A, pois B" $\\rightarrow$ Também simboliza-se como **$B \\rightarrow A$**.  
* **Exemplo:** "A aprovação é consequência de um planejamento" $\\rightarrow$ Planejamento $\\rightarrow$ Aprovação (questão 637).

---

## **2\. Proposições Categóricas e Diagramas Lógicos**

Aqui, o objetivo é testar a validade de argumentos baseados em conjuntos (Todo, Algum, Nenhum).

### **Negação de Quantificadores**

| Proposição Original | Negação Correta | Erro Comum (Pegadinha) |
| :---- | :---- | :---- |
| **Todo** A é B | **Algum** A **não** é B | Nenhum A é B |
| **Nenhum** A é B | **Algum** A é B | Todo A é B |
| **Algum** A é B | **Nenhum** A é B | Algum A não é B |

### **Validade por Diagramas**

Para julgar se um argumento é válido, desenhe os conjuntos. Se houver **qualquer** possibilidade de a conclusão ser falsa mesmo com premissas verdadeiras, o argumento é **inválido**.

* **Exemplo:** "Todo bombeiro tem bom físico. Toda pessoa que dorme bem tem bom físico." Não se pode concluir que "Todo bombeiro dorme bem", pois os círculos de "Bombeiros" e "Pessoas que dormem bem" podem não se tocar, apenas estar ambos dentro do círculo maior "Bom físico" (questão 690).

---

## **3\. Estatística: A Média para Dados não Agrupados**

Neste bloco, a banca explorou as propriedades matemáticas da **Média Aritmética**.

* **Sensibilidade:** A média é extremamente sensível a valores extremos (*outliers*). Se um novo dado muito alto for inserido, a média sobe drasticamente.  
* **Média de Médias:** Se você tem duas amostras de tamanhos diferentes, a média global **não é** a média simples das duas médias. Você deve ponderar pelo tamanho de cada amostra (questão 768).  
* **Propriedade da Soma:** A soma de todos os valores de um conjunto é igual à $Média \\times Quantidade\\ de\\ Elementos$. Esta relação é usada para descobrir idades de novos membros em uma equipe (questão 751).

---

## **4\. Sequências e Padrões (Lógica de Recorrência)**

As questões de sequência exigem a descoberta de uma "lei de formação".

1. **Sequências de Movimento:** Envolvem crianças ou objetos mudando de posição em um quadrado ou círculo. A estratégia é identificar o **ciclo de repetição** (questões 784-786).  
2. **Padrões de Recorrência (Fibonacci):** O termo atual é a soma dos anteriores ($F\_n \= F\_{n-1} \+ F\_{n-2}$). Comum em problemas de treinamento físico ou crescimento populacional (questões 798-800).  
3. **Matrizes de Letras:** Sequências como "DATA...". Para saber a letra na posição 54, divide-se 54 pelo tamanho do bloco repetitivo e olha-se o resto (questões 795-796).

---

## **5\. Associação de Informações (Puzzles)**

Para resolver rapidamente, utilize a **Matriz de Associação**. Preencha com "F" para pistas negativas e, ao colocar um "V", elimine o restante da linha e coluna.

**Dica de Ouro:** Se a questão fornecer uma tabela parcial (como as 536 e 537), termine de preenchê-la antes de ler as assertivas. O CEBRASPE costuma esconder a informação crucial na última dedução possível.

---

Este resumo cobre os tópicos de maior peso para o seu objetivo. **Deseja que eu aprofunde a explicação sobre como "desmontar" as pegadinhas de inversão da condicional (o uso de 'pois', 'já que' e 'consequência')?**

Com este último bloco de questões, completamos a análise de **1.000 itens do CEBRASPE**. Para a prova da **Câmara dos Deputados (2026)**, este trecho final revela a importância de dominar o **Raciocínio Crítico (Falácias)** e a **Lógica de Predicados (Quantificadores)**, além de consolidar o cálculo estatístico para **Dados Agrupados**.

Abaixo, apresento a estrutura final do seu guia estratégico:

---

## **1\. O que NÃO é Proposição (Questões 961 a 988\)**

O CEBRASPE frequentemente tenta confundir o candidato com sentenças que parecem proposições, mas não são. Memorize as exceções:

* **Interrogativas:** Perguntas não possuem valor lógico (Ex: questão 973).  
* **Exclamativas:** Expressões de sentimento (Ex: questão 978).  
* **Imperativas:** Ordens ou pedidos (Ex: "Cumpra suas obrigações" — questão 974).  
* **Sentenças Abertas:** Frases com variáveis sem um valor definido ou quantificador (Ex: "$x \+ 2 \= 5$").  
* **Paradoxos:** Sentenças autorreferenciais que se contradizem (Ex: "Esta afirmação é falsa" — questão 981).

---

## **2\. Tautologia, Contradição e Contingência (Questões 826 a 866\)**

* **Tautologia:** Uma proposição composta que é **sempre verdadeira**, independentemente dos valores das simples.  
  * *Dica:* Estruturas de equivalência conhecidas, como a Contrapositiva $(P \\rightarrow Q) \\leftrightarrow (\\neg Q \\rightarrow \\neg P)$, são sempre tautologias (Questão 844).  
* **Contradição:** Sempre falsa.  
* **Contingência:** Pode ser V ou F (depende dos valores das proposições simples).

---

## **3\. Raciocínio Crítico e Falácias (Questões 867 a 900 e 932 a 960\)**

Este é um tópico de "Lógica Informal" muito cobrado em cargos legislativos. Você deve identificar erros de argumentação:

* **Generalização Apressada:** Tirar uma conclusão global baseada em um caso isolado (Ex: questão 870).  
* **Falsa Causa (*Post Hoc*):** Assumir que porque o evento B veio após o evento A, A causou B (Ex: "Sempre que venho aqui, chove" — questão 894).  
* **Apelo à Autoridade:** Validar um argumento apenas porque alguém importante o disse, sem prova lógica (Ex: questão 891).  
* **Argumento *Ad Hominem*:** Atacar a pessoa que fala, em vez de atacar o argumento (Ex: questão 895).  
* **Falsa Dicotomia:** Apresentar apenas duas opções quando existem outras (Ex: questão 878).

---

## **4\. Sequências e Lei de Recorrência (Questões 801 a 825\)**

A banca gosta de padrões que exigem a construção dos próximos termos manualmente:

* **Fibonacci:** Cada termo é a soma dos dois anteriores:  
  $$F\_n \= F\_{n-1} \+ F\_{n-2}$$  
  (Ex: questões 801, 802, 813).  
* **Ciclos de Repetição:** Em jogos ou movimentos em quadrados, identifique o período do ciclo para prever posições distantes (Ex: questões 784-786).  
* **Fractais:** Padrões geométricos que crescem em potências (Ex: Triângulo de Sierpinski — questão 806).

---

## **5\. Estatística: Média para Dados Agrupados (Questões 989 a 1000\)**

Diferente da média simples, aqui cada valor possui um "peso" (frequência).

* **Cálculo:** Multiplique cada valor pela sua frequência, some tudo e divida pelo total de observações.  
  $$\\bar{x} \= \\frac{\\sum (x\_i \\cdot f\_i)}{\\sum f\_i}$$  
* **Relação de Posição:**  
  * **Simétrica:** $Média \= Mediana \= Moda$ (Questão 908).  
  * **Assimetria Positiva (Direita):** $Moda \< Mediana \< Média$ (Questão 924).  
  * **Assimetria Negativa (Esquerda):** $Média \< Mediana \< Moda$.

---

## **6\. Revisão Final: O "Pulo do Gato" do CEBRASPE**

1. **Semântica vs. Lógica:** Às vezes, duas frases dizem a mesma coisa no português, mas têm estruturas lógicas diferentes (Questão 944). A banca considera a **estrutura**.  
2. **Pelo menos um:** A negação de "Todos" é sempre "Pelo menos um não". Nunca aceite "Nenhum" como negação de "Todos" (Questão 734).  
3. **Peso do "Mas":** Em raciocínio crítico, o conectivo "mas" foca a atenção e o peso argumentativo na oração que o segue (Questão 954).

---

Com essa base de 1.000 questões, você já possui um mapeamento completo do DNA da banca. **Como próximo passo, gostaria que eu focasse em algum desses tópicos (ex: treinamento em Falácias ou Simulado de Estatística) para aprofundarmos?**

# Guia 2

Com base no mapeamento das **1.000 questões** que analisamos, consolidei este guia estratégico. Para a **Câmara dos Deputados**, o CEBRASPE não quer apenas que você faça cálculos, mas que você entenda a **estrutura do pensamento crítico e estatístico**.

---

## **1\. Lógica Proposicional: O "Coração" da Prova**

A banca foca na tradução da linguagem natural para a simbólica e nas operações de negação/equivalência.

### **Conectivos e Regras Práticas**

### **![logical connectives truth table, gerada com IA][image1]**

### **Shutterstock**

### **Explorar**

* **Condicional($P \-\> Q$):** É o conectivo mais cobrado.  
  * **Negação:** "Mantém a 1ª **E** Nega a 2ª" (Regra do Mané).  
  * **Equivalência 1 (Contrapositiva):** Inverte e nega as duas ($\\neg Q \\rightarrow \\neg P$).  
  * **Equivalência 2 (Disjuntiva):** Nega a 1ª **OU** mantém a 2ª ($\\neg P \\vee Q$).  
* **Dica do Analista:** Palavras como "pois", "visto que", "já que" e "consequência" indicam uma condicional invertida.  
  * Exemplo: "A aprovação é consequência do estudo" $\\rightarrow$ **Se estudo, então aprovo.**

---

## **2\. Argumentação e Diagramas Lógicos**

Aqui, o objetivo é testar a **validade formal**. Não importa se o conteúdo é absurdo; o que vale é se a conclusão deriva das premissas.

* **Quantificadores (Todo, Algum, Nenhum):**  
  * Para negar o **"Todo"**, você precisa de apenas um contraexemplo (**"Pelo menos um não é"**). Jamais use "Nenhum" para negar "Todo".  
* **Diagramas de Venn:** Sempre desenhe os conjuntos para testar a validade. Se houver um desenho possível onde a conclusão seja falsa, o argumento é **inválido**.

---

## **3\. Análise Combinatória: Ordem vs. Escolha**

O segredo aqui é responder: "A ordem dos elementos importa para formar um novo grupo?".

* **Combinação ($C\_{n,p}$):** A ordem **NÃO** importa. Usado para comissões, equipes e grupos de trabalho.  
  $$C\_{n,p} \= \\frac{n\!}{p\!(n-p)\!}$$  
* **Arranjo/Permutação:** A ordem **IMPORTA**. Usado para senhas, filas, pódios e cargos distintos (Presidente vs. Diretor).  
* **Anagramas:** Cuidado com palavras que possuem letras repetidas (deve-se dividir pelo fatorial das repetições).

---

## **4\. Estatística Descritiva: Posição e Dispersão**

Para cargos legislativos, a interpretação de gráficos (Boxplots e Histogramas) é recorrente.

### **Medidas de Tendência Central**

* **Média ($\\bar{x}$):** Soma de tudo dividida pela quantidade. É sensível a *outliers*.  
* **Mediana ($Md$):** Valor central do **Rol** (dados ordenados). É uma medida robusta.  
* **Moda ($Mo$):** Valor que mais se repete.

### **Medidas de Dispersão**

* **Variância ($s^2$):** Média dos quadrados dos desvios.  
  * *Amostral:* Divide por $n-1$.  
  * *Populacional:* Divide por $n$.  
* **Desvio Padrão ($s$):** $\\sqrt{s^2}$. Indica a distância média da média.

### **O Boxplot (O queridinho da banca)**

* **$Q\_1$ (25%):** Início da caixa.  
* **$Q\_2$ (Mediana):** Linha dentro da caixa.  
* **$Q\_3$ (75%):** Fim da caixa.

---

## **5\. Raciocínio Analítico e Falácias**

Tópico fundamental para a Câmara, onde se analisa a qualidade da argumentação.

1. **Ad Hominem:** Atacar o autor, não o argumento.  
2. **Apelo à Autoridade:** "É verdade porque o especialista X disse".  
3. **Generalização Apressada:** Concluir algo sobre o todo com base em um exemplo ínfimo.  
4. **Falsa Dicotomia:** Fingir que só existem duas opções (A ou B), ignorando o meio-termo.

---

## **Estratégia de "Pulo do Gato" para o CEBRASPE**

* **Itens de Contagem:** Frequentemente a banca dá números altos (ex: "mais de 1 milhão"). Não perca tempo calculando o número exato se você puder fazer uma estimativa segura ou simplificar frações.  
* **A "Negação da Negação":** Se a banca pedir a negação de uma frase que já tem "não", ela se torna afirmativa.  
* **Simetria:** Em uma distribuição perfeita (**Sinal de Gauss**), Média \= Mediana \= Moda.

---

**Qual desses tópicos você sente que é o seu "calcanhar de Aquiles"? Posso preparar um mini-simulado focado apenas no seu ponto mais fraco.**

[image1]: <data:image/png;base64,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>