# Guia 1

Este resumo estruturado foca nos pontos críticos e nas "pegadinhas" recorrentes da banca **CEBRASPE** (2024-2026) para o cargo de Analista e áreas correlatas, com base nas 200 questões enviadas.

---

## **1\. Cloud Computing (Computação em Nuvem)**

### **Modelos de Serviço (SPI)**

* **IaaS (Infraestrutura):** O mais básico. Fornece recursos de hardware (computação e armazenamento). O cliente é responsável pelo SO, middleware e aplicações.  
* **PaaS (Plataforma):** Foco em desenvolvimento. Oferece o ambiente para criar apps sem gerenciar infraestrutura física.  
* **SaaS (Software):** Software completo via web.

### **Modelos de Implantação (NIST SP 800-145)**

* **Pública:** Aberta ao público geral; infraestrutura do provedor.  
* **Privada:** Uso exclusivo de uma organização. Pode ser gerenciada por ela ou por terceiros (não é obrigatoriamente interna).  
* **Híbrida:** Combinação de duas ou mais nuvens (públicas/privadas) que permanecem entidades únicas.  
* **Comunitária:** Compartilhada por organizações com interesses em comum (ex: conformidade).

### **Características Essenciais**

* **Elasticidade Rápida:** Capacidade de prover recursos rapidamente (percepção de "ilimitado" para o usuário).  
* **Escalabilidade Automática:** Recursos ajustados dinamicamente conforme a demanda.  
* **Mensuração de Serviço:** Pagamento por uso (on-demand).  
* **Agrupamento de Recursos (Resource Pooling):** Modelo multiusuário.

---

## **2\. Ciência de Dados e Mineração (CRISP-DM)**

A metodologia **CRISP-DM** é cíclica e possui 6 fases fundamentais. O CEBRASPE foca na distinção entre elas:

| Fase | O que acontece | Pegadinha do CEBRASPE |
| :---- | :---- | :---- |
| **1\. Business Understanding** | Define objetivos e critérios de sucesso. | Não é na modelagem que se define métricas de sucesso. |
| **2\. Data Understanding** | Coleta, descrição e exploração inicial. | **Não** inclui construção de modelos preditivos. |
| **3\. Data Preparation** | Limpeza, seleção de atributos, transformação. | É aqui que se seleciona o que vai para o modelo. |
| **4\. Modeling** | Escolha de algoritmos e teste (treino/teste). | Divisão de dados em treino/validação ocorre aqui. |
| **5\. Evaluation** | Avalia se os resultados atendem o negócio. | Precede a implantação final. |
| **6\. Deployment** | Coloca em produção e gera relatório. | \- |

### **Tarefas de Mineração**

* **Associação:** Identifica regras "Se X, então Y" (ex: cesta de compras).   
  * Indicadores: **Suporte e Confiança**.  
* **Agrupamento (Clustering):**   
  * Técnica não supervisionada. Na análise hierárquica, uma vez alocado, o elemento não costuma ser realocado.  
* **Regressão:**   
  * Objetiva predição, controle e estimação.

---

## **3\. Engenharia de Dados: ETL vs. ELT**

* **ETL (Extract, Transform, Load):** A transformação ocorre **antes** da carga, geralmente em uma *Staging Area*. Comum para dados estruturados.  
* **ELT (Extract, Load, Transform):** A transformação ocorre **dentro** do destino. Melhor para *Big Data* (dados semiestruturados/não estruturados) e costuma ter menor custo de manutenção.

### **Técnicas Importantes**

* **Extração Incremental:** Extrai apenas o que mudou (mais eficiente que a *Full*).  
* **Derivação:** Cria novos atributos via cálculos complexos (não é apenas vincular fontes).  
* **Limpeza:** Reorganização para garantir qualidade e consistência.  
* **Junção:** Vincula dados de diferentes fontes (não confunda com derivação).

---

## **4\. Bancos de Dados Relacionais**

* **Estrutura:** Tabelas (Relações), Linhas (Tuplas/Registros) e Colunas (Atributos/Campos).  
* **Integridade Referencial:** Garante que uma **Chave Estrangeira (FK)** corresponda a uma **Chave Primária (PK)** existente ou seja nula.  
* **Chave Primária (PK):** Valor único e obrigatório. Pode ser composta (vários campos), mas identifica a tupla de forma unívoca.  
* **Independência Física:** Mudanças na estrutura física (discos, índices) não afetam a lógica (aplicativos).  
* **Cardinalidade:** 1:1, 1:N, N:N. Relacionamentos N:N em bancos lógicos tornam-se tabelas associativas no físico.

---

## **5\. Business Intelligence (BI) e Analytics**

* **Processo de BI:**   
  1. Transforma Dados \-\> Informação \-\> Decisões \-\> Ações.  
* **Dashboards:** Painéis visuais para monitoramento, análise e gerenciamento. Um bom dashboard **não** deve exigir codificação complexa para o usuário.  
* **Tipos de Analytics:**  
  1. **Descritiva:** O que aconteceu? (Relatórios/Dashboards).  
  2. **Preditiva:** O que vai acontecer? (Modelos de ML/Histórico).  
  3. **Prescritiva:** O que devo fazer? (Respostas ideais e simulações).

---

## **6\. Windows 10 e Segurança**

* **Microsoft Defender:** Solução integrada de Antivírus e Antimalware.  
* **SmartScreen:** Verifica sites de phishing e arquivos maliciosos na web.  
* **Firewall:** Bloqueia acessos indevidos. **Atenção:** Ele **não** faz backup.  
* **BitLocker:** Criptografia de unidade de disco.  
* **OneDrive:** Sincronização e backup na nuvem.  
* **Atalhos:**  
  * Win \+ V: Histórico da área de transferência (múltiplos itens).  
  * Alt \+ Tab: Alternar entre janelas (não cria áreas de trabalho; para isso use Win \+ Tab).  
* **Arquivos:** Windows **não** diferencia maiúsculas de minúsculas no nome de arquivos (A.txt \= a.txt).

---

## **7\. Noções de Estatística (Probabilidade)**

Para o CEBRASPE, domine o cálculo de eventos equiprováveis:

$$P(E) \= \\frac{\\text{Número de casos favoráveis}}{\\text{Número total de casos possíveis}}$$

* **Probabilidade Frequentista:** Baseada na frequência observada de um evento em repetidos experimentos.  
* **Análise Qualitativa:** Variáveis qualitativas podem ser **Nominais** (sem ordem, ex: cor) ou **Ordinais** (com ordem, ex: classe social).

---

Gostaria que eu elaborasse um **simulado com 10 questões inéditas** no estilo CEBRASPE focadas nas "pegadinhas" identificadas nestes temas?

Este segundo bloco de questões (201 a 400\) aprofunda temas fundamentais como Probabilidade, Normalização de Dados, Segurança (Malware e Backup) e o avanço da Inteligência Artificial.

Aqui está o resumo estruturado focado nos padrões de cobrança do **CEBRASPE**:

---

## **1\. Estatística: Probabilidade e Eventos**

A banca foca muito na interpretação de textos e conjuntos aplicados à probabilidade básica.

* **Cálculo Base:** $P(E) \= \\frac{\\text{casos favoráveis}}{\\text{espaço amostral}}$. Se as chances são iguais (equiprováveis), a divisão é direta.  
* **Princípio da Indiferença:** Proposições simétricas em relação à evidência recebem a mesma probabilidade.  
* **Independência:** Se os eventos são independentes, a probabilidade de ocorrerem em sequência é o produto das probabilidades individuais ($P(A \\cap B) \= P(A) \\times P(B)$).  
* **Probabilidade Condicional:** Fique atento ao "dado que" ou "sabendo que". Isso reduz o espaço amostral.  
* **União de Eventos:** $P(A \\cup B) \= P(A) \+ P(B) \- P(A \\cap B)$. Se os eventos forem mutuamente exclusivos, a interseção é zero.

---

## **2\. Banco de Dados: Normalização**

O objetivo é reduzir redundância e inconsistência. O CEBRASPE cobra as definições exatas de cada forma normal:

| Forma Normal | Requisito Principal | O que elimina? |
| :---- | :---- | :---- |
| **1FN** | Atributos atômicos (únicos). | Atributos multivalorados e compostos. |
| **2FN** | Estar na 1FN \+ Dependência Funcional Total. | Dependências parciais (em chaves compostas). |
| **3FN** | Estar na 2FN \+ Sem dependências transitivas. | Atributos que dependem de outros atributos não chave. |
| **4FN** | Estar na 3FN (ou BCNF). | Dependências multivaloradas independentes. |

* **Ponto de Atenção:** Uma tabela na 3FN está **obrigatoriamente** na 1FN e 2FN. No entanto, a normalização excessiva pode prejudicar o desempenho de consultas complexas devido ao excesso de *joins*.

---

## **3\. Segurança da Informação: Pragas e Backup**

### **Malware (Ameaças)**

* **Vírus:** Precisa de **ação humana** para se propagar e infectar outros programas (hospedeiro).  
* **Worm:** **Auto-propagável**. Infecta máquinas pela rede explorando vulnerabilidades, sem ação humana.  
* **Ransomware:** Criptografa dados e exige resgate (geralmente em Bitcoin). Backup é a melhor defesa, mas o ataque pode atingir o backup se estiver conectado.  
* **Spyware:** Monitora atividades. Exemplos: *Keylogger* (teclado) e *Screenlogger* (tela).  
* **Backdoor:** Porta dos fundos que permite o retorno de um invasor. O **RAT** (Remote Access Trojan) combina Trojan com Backdoor.  
* **Trojan (Cavalo de Troia):** Programa que parece inofensivo, mas executa funções maliciosas escondidas.

### **Backup**

* **Completo (Full):** Cópia de todos os dados. Demorado, mas restauração é rápida (1 mídia).  
* **Incremental:** Apenas o que mudou desde o **último backup** (qualquer tipo). Economiza espaço, mas restauração é lenta (Full \+ todos os incrementais).  
* **Diferencial:** Apenas o que mudou desde o **último backup completo**. Equilíbrio entre espaço e velocidade de restauração (Full \+ 1 diferencial).  
* **Regra 3-2-1:** 3 cópias, 2 mídias diferentes, 1 cópia fora do site (remota).  
* **Hot Backup:** Realizado com o sistema em funcionamento (sem interrupção).

---

## **4\. Windows 11: Gestão e Operação**

* **Nomenclatura:** Caracteres proibidos: \\ / : \* ? " \< \> |.  
* **Movimentação de Arquivos:**   
  * Mesma unidade: Move (ajusta ponteiros).  
  * Unidades diferentes: Copia (permissões NTFS podem ser alteradas).  
* **Explorador de Arquivos:** Atalho Win \+ E. A opção "Detalhes" permite ver data, tipo e tamanho.  
* **Segurança:** SmartApp Control (executa apenas apps de boa reputação) e SmartScreen (proteção web).

---

## **5\. Inteligência Artificial e Machine Learning**

### **Conceitos Gerais**

* **IA Generativa:** Cria novos conteúdos (texto, imagem, áudio).   
  * Ex: Modelos baseados em **Transformers** (como GPT \- *Generative Pre-trained Transformer*).  
* **IA Discriminativa:** Classifica ou rotula dados existentes (ex: É spam ou não?).  
* **RAG (Retrieval Augmented Generation):** Recupera dados externos confiáveis para enriquecer o prompt e reduzir "alucinações" da IA.

### **Algoritmos e Técnicas**

* **Aprendizado Supervisionado:** Usa dados rotulados (Classificação e Regressão).  
  * **Naive Bayes:** Baseado em probabilidade e independência condicional.  
  * **Árvores de Decisão:** Particionam dados baseados em entropia (pureza).  
* **Aprendizado Não Supervisionado:** Dados sem rótulos.  
  * **Clustering (K-means):** Agrupa dados por similaridade.  
  * **PCA:** Redução de dimensionalidade mantendo padrões fortes.  
* **Métricas:** **Acurácia** é ruim para classes desbalanceadas. A curva **ROC/AUC** avalia o desempenho do classificador (quanto mais perto do canto superior esquerdo, melhor).

---

## **6\. Processamento de Linguagem Natural (PLN)**

* **Tokenização:** Segmentação do texto em unidades menores (tokens).  
* **Stemming vs. Lemmatização:**  
  * *Stemming:* Corta a palavra até o radical (pode gerar palavras sem sentido).  
  * *Lemmatização:* Reduz à forma canônica (dicionário), exige análise gramatical (POS Tagging).  
* **Bag of Words (BoW):** Vetoriza o texto pela frequência das palavras, mas ignora a ordem e o contexto.  
* **Auto-atenção:** Mecanismo dos *Transformers* que permite focar em partes diferentes de uma frase para entender o contexto de longo alcance.

---

Deseja que eu crie uma **tabela comparativa definitiva entre Stemming e Lemmatização** ou prefere um **mapa mental sobre as Formas Normais** para facilitar a memorização?

Este bloco de questões (401 a 600\) foca intensamente na intersecção entre a estratégia organizacional (Governança) e a segurança técnica (Firewalls, Antivírus e Redes), além de exigir precisão em cálculos de arquitetura.

Aqui está o resumo estruturado para facilitar sua revisão final para o concurso da **Câmara dos Deputados 2026**:

---

## **1\. Gestão e Governança de TI**

O CEBRASPE foca na distinção entre **Governança** (estratégica) e **Gestão** (operacional).

* **Governança de TI:** Responsabilidade da alta administração. O objetivo principal é o **Alinhamento Estratégico** (TI \+ Negócio) e a entrega de valor. Não é exclusiva para grandes empresas; PMEs também se beneficiam.  
* **Governança Digital:** Não é apenas implementar tecnologia; envolve políticas, processos e regulamentos para transparência e participação cidadã.  
* **SWOT na TI:** Identifica forças/fraquezas (internas) e oportunidades/ameaças (externas). Nunca é "exclusiva" para um lado só.  
* **Utilidade vs. Garantia (ITIL):**  
  * **Utilidade:** O que o serviço faz? (Aumento da capacidade/desempenho). "Apto para o propósito".  
  * **Garantia:** Como o serviço é entregue? (Disponibilidade, Continuidade, Segurança). "Apto para o uso".  
* **Accountability:** No setor público, refere-se à prestação de contas e responsabilidade por ações e decisões, não apenas à conduta ética (embora relacionada).

---

## **2\. Dados: Estruturados, Semiestruturados e Não Estruturados**

A banca adora confundir os formatos e locais de armazenamento.

| Tipo de Dado | Características | Exemplos | Armazenamento Típico |
| :---- | :---- | :---- | :---- |
| **Estruturados** | Formato rígido, tabelas, campos definidos. | Banco de dados SQL, números, datas. | RDBMS (Relacional). |
| **Semiestruturados** | Não seguem um esquema fixo, mas têm metadados/tags. | XML, JSON, CSV. | NoSQL / Document DB. |
| **Não Estruturados** | Sem formato fixo, difíceis de modelar como tabela. | PDFs, Posts em redes sociais, áudio, vídeo. | Data Lakes / NoSQL. |

*   
  **Ponto Chave:** A limpeza de dados não remove dados "corretos"; ela corrige ou remove dados **incorretos**, duplicados ou mal formatados.

---

## **3\. Segurança de Rede: Firewall e Proxy**

### **Firewall**

* **Conceito:** Dispositivo (hardware ou software) que regula o tráfego entre redes interna e externa via regras.  
* **Comportamento Padrão:** Bloquear tudo o que entra (inbound) e permitir o que sai (outbound), salvo regra específica.  
* **WAF (Web Application Firewall):** Opera na **Camada 7 (Aplicação)** do modelo OSI. Diferente de firewalls comuns (Camadas 3 e 4).  
* **Stateful (Com monitoramento de estado):** Lembra-se das conexões ativas. Se o tráfego de saída foi permitido, o retorno é aceito implicitamente.  
* **UTM (Unified Threat Management):** Combina firewall, antivírus, antispyware, etc., em uma única solução para melhor desempenho e gestão.

### **Proxy**

* **Intermediário:** Atua entre o usuário e o servidor final.  
* **Caching:** Armazena conteúdo acessado recentemente para acelerar o acesso de outros usuários da rede.  
* **Segurança:** Filtros de conteúdo impedem acesso a sites proibidos pela política da empresa.

---

## **4\. Intranet e Extranet**

* **Intranet:** Rede privada e restrita a uma organização. **Usa os mesmos protocolos da Internet (TCP/IP, HTTP, HTTPS)**. Pode ser acessada remotamente via VPN.  
* **Extranet:** Acesso de parceiros, clientes ou fornecedores a partes específicas da Intranet.  
* **Pegadinha:** O ícone do cadeado (HTTPS) no navegador sinaliza segurança na conexão, **não** indica que o site é uma Intranet.

---

## **5\. Antivírus e Pragas Virtuais**

* **Heurística:** Identifica vírus desconhecidos por comportamento ou estrutura. Pode gerar **Falsos Positivos** (arquivos legítimos marcados como vírus).  
* **Assinatura:** Identifica vírus conhecidos em uma lista. Menos eficaz contra ataques *Zero-Day*.  
* **Anti-Spyware:** Focado em programas que monitoram atividades (Keyloggers, Screenloggers).  
* **Zero-Day:** Ataques a brechas desconhecidas pelo fabricante; não há assinatura de antivírus imediata.  
* **Antivírus ≠ Firewall:** O antivírus detecta e remove arquivos; o firewall controla o tráfego na rede.

---

## **6\. Arquitetura: Sistemas de Numeração**

O CEBRASPE cobra conversões rápidas. Lembre-se:

* **Binário para Hexadecimal:** Agrupe de 4 em 4 bits.  
  * Ex: $1111$ (15) \= $F$; $1001$ (9) \= $9$.  
* **Complemento de Dois:** Inverter os bits e somar 1\. Usado para representar números negativos.  
* **Limites de 16 bits (Signed):**  
  * O intervalo é de $-32.768$ a $+32.767$. Portanto, representar $32.768$ positivo com 16 bits sinalizados é impossível (causa *overflow*).  
* **Capacidade:** Com $n$ dígitos binários, representamos $2^n$ números distintos.

---

## **7\. Modelagem Entidade-Relacionamento (MER)**

* **Relacionamento N:N:** Sempre resulta em uma terceira tabela (tabela de associação/ligação).  
* **Relacionamento 1:1:** Pode ser implementado na mesma tabela ou em tabelas separadas com FK.  
* **Engenharia Reversa:** Obter o modelo conceitual (diagrama) a partir de um banco de dados já existente.  
* **Especialização:** Decompor uma entidade geral em específicas (ex: Pessoa $\\rightarrow$ Física e Jurídica).

---

Para consolidar esses temas, **gostaria que eu montasse um roteiro de revisão para a parte de Aritmética Computacional (Binário/Hex) com os cálculos passo a passo baseados nestas questões?**

Este terceiro bloco de questões (601 a 800\) consolida o conhecimento em ferramentas de produtividade, navegadores modernos e aprofunda a estatística inferencial e a governança de dados.

Aqui está o resumo estruturado com o "DNA" das pegadinhas do **CEBRASPE** para a reta final:

---

## **1\. Navegadores (Chrome, Edge, Firefox)**

A banca cobra cada vez mais recursos de **sincronização** e **IA integrada**.

* **Google Chrome:**  
  * **Sincronização:** Requer login na Conta Google para espelhar favoritos, histórico e senhas em múltiplos dispositivos.  
  * **Segurança:** Possui o recurso de verificar se combinações de usuário e senha foram expostas em vazamentos de terceiros.  
  * **Limpeza:** "Limpar dados de navegação" apaga o histórico de sites e a *lista* de downloads, mas não exclui os arquivos físicos baixados.  
* **Microsoft Edge:**  
  * **Modo InPrivate:** Apaga histórico, cookies e dados de formulários ao fechar, mas **NÃO** remove favoritos criados ou arquivos baixados durante a sessão.  
  * **Edge Secure Network:** Funcionalidade de **VPN integrada** e gratuita para criptografar a conexão.  
  * **IA e Leitura:** Integra o **Copilot** (assistente de IA) e possui a "Leitura Avançada" (atalho F9) que limpa o layout para focar no texto.  
* **Mozilla Firefox:**  
  * **Personalização:** Uso de temas e extensões (addons). Permite o uso de **Tags** em favoritos para busca rápida via barra de endereços.  
  * **Segurança:** O alerta de senhas expostas é padrão. Diferente do Chrome, permite gerenciar o histórico em um painel lateral permanente.

---

## **2\. Pacote Office 365 (Word, Excel, PowerPoint)**

### **Microsoft Word 2019/365**

* **Tabelas:** É possível converter texto em tabela (se houver separadores como tabulações) e até inserir uma **Planilha Excel viva** dentro do documento para edição direta.  
* **Estilos:** O recurso "Estilos" é a forma correta de garantir que títulos e seções mantenham a mesma formatação e numeração automática.  
* **Pincel de Formatação:** Copia apenas a formatação de um texto para outro, não serve para "marcar com cores" (isso é o Realce).

### **Microsoft Excel 2019/365**

* **Funções Essenciais:**  
  * ALEATÓRIO(): Gera valores reais entre $0$ e $1$.  
  * CONT.VALORES(): Conta células **não vazias** (ignora apenas as vazias, conta texto e números).  
  * SOMASE(): Soma baseada em critérios (ex: "\>2").  
* **Auditoria de Fórmulas:** Permite rastrear **precedentes** (quem alimenta a fórmula) e **dependentes** (quem é alimentado por ela).  
* **Máscaras:** Na formatação "Personalizado", é possível criar máscaras para CPF/CNPJ sem alterar o valor numérico bruto da célula.

### **Microsoft PowerPoint 2019/365**

* **Slide Mestre:** Alterações aqui (fontes, logos, imagens de fundo) replicam-se para todos os slides baseados naquele mestre.  
* **Transição vs. Animação:** Transição é o efeito **entre** slides; Animação é o efeito em objetos **dentro** do slide.  
* **Importação:** Permite reutilizar slides de outros arquivos .pptx, escolhendo se mantém a formatação original ou adota a do destino.

---

## **3\. Redes e Segurança: Intranet, Proxy e Backup**

* **Intranet/Extranet:**  
  * A Intranet usa os mesmos protocolos da Internet (HTTP, FTP, TCP/IP), mas é restrita.  
  * A **Extranet** é o acesso de parceiros externos a uma parte da Intranet (geralmente via VPN ou acesso autenticado).  
* **Servidores Proxy:**  
  * **Proxy Direto:** Intermediário que solicita recursos na web em nome do cliente (melhora desempenho via cache).  
  * **Proxy Reverso:** Protege e otimiza servidores *backend* (faz balanceamento de carga e segurança). Não é exclusivo para conteúdo dinâmico.  
* **Backup e Recuperação:**  
  * **Incremental:** Copia dados alterados desde o **último backup (qualquer tipo)**. Mais rápido para gravar.  
  * **Diferencial:** Copia dados alterados desde o **último backup completo**. Mais rápido para restaurar.  
  * **Restore:** O processo de restauração deve ser testado periodicamente para garantir a disponibilidade.

---

## **4\. Banco de Dados e Governança de Dados**

* **Recuperação em SGBD:**  
  * **COMMIT:** Torna as alterações permanentes.  
  * **ROLLBACK:** Desfaz transações não confirmadas após uma falha, garantindo a atomicidade.  
  * **LOG:** Registro essencial para recuperação; deve ser armazenado fisicamente separado dos dados para segurança.  
* **Governança (DAMA-DMBOK):**  
  * **CDO (Chief Data Officer):** Executivo responsável pela estratégia e qualidade dos dados.  
  * **Data Profiling:** Técnica para analisar a estrutura e inconsistências dos dados antes de usá-los.  
  * **Metadados:** "Dados sobre dados". Sua gestão é crucial para integrar fontes distintas.

---

## **5\. Estatística: Quantis, Probabilidade e Qui-Quadrado**

Aqui a matemática fica séria. Use estas fórmulas para o cálculo rápido:

### **Quantis e Mediana**

Para um conjunto de dados ordenado:

* **Mediana ($Q\_2$):** Valor que divide a amostra em $50\\%/50\\%$. Se $n$ for par, é a média dos dois termos centrais.  
* **Quartis ($Q\_1$ e $Q\_3$):** Dividem em $25\\%$ e $75\\%$.

### **Probabilidade e Combinatória**

* **Eventos Independentes:** $P(A \\text{ e } B) \= P(A) \\times P(B)$.  
* **Análise Combinatória:** O CEBRASPE ama questões de sorteio de equipes ou placas. Use:  
  $$C\_{n,p} \= \\binom{n}{p} \= \\frac{n\!}{p\!(n-p)\!}$$

### **Distribuição Qui-Quadrado ($\\chi^2$)**

* **Definição:** Se $Z\_1, Z\_2, \\dots, Z\_k$ são variáveis normais padrão independentes, então $\\sum\_{i=1}^k Z\_i^2 \\sim \\chi^2(k)$.  
* **Propriedades:** \* A variância de uma $\\chi^2(k)$ é $2k$.  
  * Utilizada em testes de aderência (comparar frequências observadas vs. esperadas).  
  * Rejeita-se $H\_0$ (ajuste adequado) se $\\chi^2\_{cal} \> \\chi^2\_{tab}$.

---

**Dica de Ouro:** Nas questões de **Média Aritmética**, o CEBRASPE adora perguntar o impacto de novos elementos. Lembre-se: se o novo elemento for **maior** que a média antiga, a nova média **sobe**; se for igual, a média **permanece**.

Gostaria que eu preparasse um **"check-list" final de fórmulas de Probabilidade e Qui-Quadrado** para você levar para a revisão de véspera?

Este bloco final (questões 801 a 1000\) consolida os temas de **Governança de Dados**, **Segurança Cibernética**, **Arquitetura de Hardware** e aprofunda a **Estatística Inferencial**.

Aqui está o resumo estratégico para sua revisão da **Câmara dos Deputados 2026**, focado nos padrões de "Certo/Errado" do CEBRASPE:

---

## **1\. Governança e Qualidade de Dados (DAMA-DMBOK)**

A banca exige precisão nas definições das dimensões de qualidade e papéis.

* **Dimensões da Qualidade:**  
  * **Acurácia:** Grau em que os dados representam corretamente a realidade (não confunda com exclusividade ou falta de duplicatas).  
  * **Consistência:** Dados iguais em sistemas diferentes (não é a representação do mundo real).  
* **Data Profiling:** É a "fotografia inicial". Serve para entender a estrutura, o conteúdo e as inter-relações antes da limpeza.  
* **Data Steward:** Atua na área de **negócios**. É o guardião do uso, controle e dos metadados (metadados ajudam a entender composição e relacionamentos).

---

## **2\. Segurança: Engenharia Social e Malware**

O foco aqui é o comportamento humano e o ciclo de vida dos ataques.

* **Engenharia Social:** Técnicas de convencimento para induzir a vítima a erro.  
* **Phishing e Variações:**  
  * **Phishing:** Fraude para obter dados via páginas/emails falsos. **Não** é interceptação de comunicação (isso é *Man-in-the-Middle*).  
  * **Spear Phishing:** Alvo específico (ex: TI da empresa).  
  * **Whaling:** Alvo de alto escalão (CEOs/CFOs).  
* **Malwares Específicos:**  
  * **Worm:** Foco em propagação automática pela rede explorando vulnerabilidades.  
  * **Adware:** Spyware focado em coletar hábitos para exibir anúncios.  
  * **Keylogger:** Captura o que é digitado no teclado físico (o que captura a tela é o *Screenlogger*).  
  * **Ransomware:** Possui a etapa de **exfiltração** (envio de dados para fora) para monetização/extorsão.

---

## **3\. Conceitos de Internet e Nuvem Microsoft**

* **Cookies:** Pequenos arquivos de texto gravados no computador do usuário para salvar preferências. O usuário **pode** bloqueá-los.  
* **HTTPS:** Protocolo de segurança (criptografia). Sua presença **não** garante que o site seja uma Intranet.  
* **OneDrive:**  
  * Sincroniza pastas locais com a nuvem.  
  * Permite compartilhamento restrito e controle de permissões (visualizar/editar).  
  * **Offline:** É possível editar arquivos offline; a sincronização ocorre assim que a conexão volta.  
* **Office 365:** É classificado como **SaaS** (Software como Serviço), não IaaS.

---

## **4\. Arquitetura de Computadores: Barramentos**

* **PCI Express:** Barramento **serial**, ponto a ponto. Cada dispositivo tem um canal exclusivo (não compartilha largura de banda com outros).  
* **PCI Convencional:** Paralelo, obsoleto para laptops por ser fisicamente grande.  
* **USB:** Possui limites de comprimento de cabo (geralmente 5m para passivos), mas a banca foca na versatilidade de velocidades.

---

## **5\. Estatística: Análise Descritiva e Gráficos**

* **Mediana e Quartis:** É **obrigatório** ordenar os dados antes do cálculo. A mediana é o $Q\_2$ (percentil 50).  
* **Boxplot (Diagrama de Caixa):** Representa os quartis e a dispersão. O traço central é a **mediana**, não a média.  
* **Gráficos Adequados:**  
  * **Barras:** Variáveis qualitativas (ordinais/nominais) ou quantitativas discretas. Bom para ver tendências.  
  * **Setores (Pizza):** Variáveis qualitativas nominais (poucas categorias). **Ruim** para dados complexos ou ordinais.  
  * **Histograma:** Variáveis quantitativas **contínuas**. A **área** das barras representa a frequência. Barras são contíguas (coladas).

---

## **6\. Estatística: Probabilidade e Distribuições**

* **União ($P(A \\cup B)$):** $P(A) \+ P(B) \- P(A \\cap B)$. Se forem independentes, $P(A \\cap B) \= P(A) \\cdot P(B)$.  
* **Mutuamente Excludentes:** Se $A \\cap D \= \\emptyset$, então $P(A \\cap D) \= 0$.  
* **Distribuição Uniforme Contínua $\[a, b\]$:**  
  * **Média:** $(a+b)/2$.  
  * **Variância:** $(b-a)^2/12$.  
* **Distribuição Qui-Quadrado ($\\chi^2$):**  
  * Soma de $k$ variáveis normais padrão ($Z$) ao quadrado: $\\sum Z^2 \\sim \\chi^2(k)$.  
  * **Média** da $\\chi^2(k) \= k$.  
  * **Variância** da $\\chi^2(k) \= 2k$.

---

## **7\. Teste de Hipóteses**

O CEBRASPE foca na relação entre os erros e o poder do teste.

| Conceito | Definição | Outro nome |
| :---- | :---- | :---- |
| **Erro Tipo I** | Rejeitar $H\_0$ quando ela é verdadeira. | Probabilidade $\\alpha$ (Significância). |
| **Erro Tipo II** | Aceitar $H\_0$ quando ela é falsa. | Probabilidade $\\beta$. |
| **Potência/Poder** | Rejeitar $H\_0$ quando ela é falsa (decisão correta). | $1 \- \\beta$. |

*   
  **Regra de Ouro:** Se você aumenta a significância ($\\alpha$), você aumenta o Poder do Teste ($1 \- \\beta$).  
* **Teste Bicaudal:** Quando a hipótese alternativa usa "diferente" ($\\neq$).

---

**Último conselho para o Excel:** O CEBRASPE ama a função CONT.VALORES. Lembre-se: ela conta **tudo** (números, texto, erros), exceto células vazias. Se a questão disser que ela conta "apenas números", marque **Errado** (quem faz isso é a CONT.NÚM).

Parabéns por concluir essa maratona de 1000 questões\! Deseja que eu gere um **"Flashcard de Emergência"** com as 5 fórmulas de estatística que mais caíram?

# Guia 2

Este resumo estruturado foi desenhado com foco nos padrões de cobrança observados nas questões mais recentes do **CEBRASPE** para a Câmara dos Deputados. Ele sintetiza os pontos críticos para facilitar sua revisão final.

---

## **1\. Hardware, Software e Funcionamento**

* **Arquitetura de Von Neumann:** Baseada em CPU (Unidade Central de Processamento), Memória e Dispositivos de E/S. O ciclo básico é: Busca, Decodificação e Execução.  
* **Componentes de Hardware:** \* **Barramentos:** O **PCI Express** é serial e ponto a ponto (canal exclusivo). O PCI convencional é paralelo.  
  * **Memórias:** Hierarquia (Registradores \> Cache \> RAM \> Disco). A RAM é volátil; a ROM não.  
* **Software:** Software de sistema (SO) vs. Software de aplicação.

---

## **2\. Windows (10/11) e Microsoft 365**

* **Windows 10/11:** \* **Segurança:** SmartScreen (proteção web) e Microsoft Defender (antivírus/antimalware).  
  * **Atalhos:** Win \+ V (histórico de área de transferência), Win \+ E (Explorador).  
  * **Arquivos:** Nomes não podem conter \\ / : \* ? " \< \> |. Não diferencia maiúsculas de minúsculas.  
* **M365 (SaaS):**  
  * **Word:** Uso de **Estilos** para padronização.  
  * **Excel:** Referências absolutas ($A$1). CONT.VALORES conta tudo não vazio; CONT.NÚM apenas números.  
  * **OneDrive:** Sincronização em nuvem. Permite edição offline com atualização automática ao conectar.

---

## **3\. Redes, Internet e Nuvem**

* **Intranet vs. Internet:** Ambas utilizam os mesmos protocolos (**TCP/IP, HTTP, HTTPS**). A Intranet é restrita a uma organização.  
* **Browsers:** Recursos de sincronização, navegação privada (não apaga favoritos ou downloads) e extensões.  
* **Cloud Computing:**  
  * **IaaS:** Infraestrutura (hardware, servidores virtuais).  
  * **PaaS:** Plataforma (ambiente de desenvolvimento, middleware).  
  * **SaaS:** Software (aplicação pronta via web, ex: M365).  
  * **Modelos:** Pública, Privada (uso exclusivo), Híbrida e Comunitária.

---

## **4\. Segurança e Governança Digital**

* **Malware:**  
  * **Vírus:** Depende de execução do usuário/hospedeiro.  
  * **Worm:** Auto-propagável pela rede, explora vulnerabilidades.  
  * **Ransomware:** Sequestro de dados via criptografia com pedido de resgate.  
* **Backup:**  
  * **Incremental:** Dados alterados desde o último backup (qualquer tipo).  
  * **Diferencial:** Dados alterados desde o último backup **completo**.  
  * **Regra 3-2-1:** 3 cópias, 2 mídias, 1 fora do site.  
* **Ameaças:** **Phishing** (pesca de dados via fraude/engenharia social) e **Pharming** (envenenamento de DNS/redirecionamento de tráfego).

---

## **5\. Inteligência Artificial (IA) e Ética**

* **IA Generativa:** Cria conteúdos novos (Transformers/GPT). Baseada em probabilidade conjunta $p(x, y)$.  
* **RAG (Retrieval Augmented Generation):** Integra dados externos ao prompt para reduzir alucinações e atualizar o modelo.  
* **Ética no Serviço Público:** Foco na transparência, combate ao viés algorítmico e responsabilidade digital (LGPD).

---

## **6\. Ciência de Dados e Big Data**

* **Big Data (5 Vs):** Volume, Velocidade, Variedade, Veracidade e Valor.  
* **Tipos de Dados:**  
  * **Estruturados:** Tabelas SQL (rígidos).  
  * **Semiestruturados:** XML, JSON (tags).  
  * **Não Estruturados:** Vídeos, PDFs, Redes Sociais.  
* **Engenharia de Dados (ETL vs. ELT):**  
  * **ETL:** Transformação ocorre em área temporária (*Staging*) antes da carga.  
  * **ELT:** Carga ocorre antes; a transformação é feita no destino (melhor para Big Data).

---

## **7\. Mineração de Dados (CRISP-DM)**

Metodologia cíclica em 6 fases:

1. **Business Understanding:** Define objetivos.  
2. **Data Understanding:** Exploração inicial.  
3. **Data Preparation:** Limpeza e seleção (etapa mais demorada).  
4. **Modeling:** Aplicação de algoritmos (treino/teste).  
5. **Evaluation:** Validação frente ao negócio.  
6. **Deployment:** Produção.

### **Tarefas de Mineração**

* **Classificação:** Supervisionada (rótulos predefinidos).  
* **Regressão:** Previsão de valores contínuos.  
* **Clusterização (Agrupamento):** Não supervisionada (similaridade).  
* **Associação:** Regras "Se X, então Y" (indicadores: **Suporte e Confiança**).

---

## **8\. Estatística e Probabilidade**

* **Medidas de Tendência Central:**  
  * **Média:** Sensível a outliers.  
  * **Mediana:** Valor central (requer dados ordenados).  
  * **Moda:** Valor mais frequente.  
* **Dispersão:** Variância ($s^2$) e Desvio Padrão ($s$).  
* **Distribuição Qui-Quadrado ($\\chi^2$):** Soma de normais padrão ao quadrado. Usada para testes de aderência.  
* **Teste de Hipóteses:**  
  * **Erro Tipo I ($\\alpha$):** Rejeitar $H\_0$ verdadeira.  
  * **Erro Tipo II ($\\beta$):** Aceitar $H\_0$ falsa.  
  * **Poder do Teste:** $1 \- \\beta$.  
* ![standard normal distribution curve, gerada com IA][image1]  
* Shutterstock  
* Explorar

---

## **9\. Visualização de Dados**

* **Gráficos:**  
  * **Histograma:** Dados contínuos em classes.  
  * **Box Plot:** Quartis, mediana e outliers.  
  * **Dispersão:** Correlação entre duas variáveis.  
* **Princípios:** Razão dado-tinta (Tufte) – eliminar o que é meramente decorativo.  
* **Storytelling:** Transformar dados em narrativa visual para suporte à decisão.

---

Para aprofundar seu estudo, **você gostaria que eu elaborasse uma tabela comparativa detalhada entre os tipos de Malware ou prefere um simulado focado em Cálculos de Probabilidade e Qui-Quadrado?**

[image1]: <data:image/png;base64,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>