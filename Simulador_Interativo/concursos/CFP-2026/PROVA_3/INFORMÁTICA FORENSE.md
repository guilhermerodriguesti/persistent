# INFORMÁTICA FORENSE

## 1 INTRODUÇÃO

### Definição

- Área da Criminalística que examina vestígios de crimes cometidos no âmbito da informática
- Crimes por computador não são "virtuais" - sempre deixam rastros
- Papel do Perito Criminal: buscar, coletar e examinar vestígios, determinando materialidade, autoria e modus operandi

### 1.1 Computadores e Crimes

- Crimes por computador

	- Ações delituosas cometidas com utilização de computadores, redes de computadores ou demais recursos de informática

- Crimes cibernéticos

	- Ações praticadas por meio de computador no espaço cibernético
	- Espaço cibernético: todos os recursos disponíveis na Internet (serviços, dados, bancos de dados, computadores, equipamentos de rede, softwares)

- Vestígio digital

	- Conceito de vestígio (CPP): todo objeto ou material bruto, visível ou latente, constatado ou recolhido, relacionado à infração penal
	- Vestígio digital: dados armazenados ou transmitidos em meio computacional ou eletrônico relacionados à infração penal

- Legislação aplicável

	- Lei 12.737/2012 (Lei Carolina Dieckmann) e Lei 14.155/2021 - modificaram o Código Penal
	- Art. 154-A CP - Invasão de dispositivo informático

		- Invadir dispositivo informático alheio (conectado ou não à rede) para obter, adulterar ou destruir dados, ou instalar vulnerabilidades
		- Pena base: reclusão de 1 a 4 anos e multa
		- §1º - Produzir, oferecer, distribuir, vender ou difundir dispositivo/programa para permitir a invasão: mesma pena
		- §2º - Se resultar prejuízo econômico: aumento de 1/3 a 2/3
		- §3º - Se resultar obtenção de comunicações privadas, segredos comerciais/industriais, informações sigilosas ou controle remoto não autorizado: reclusão de 2 a 5 anos e multa
		- §4º - Se houver divulgação, comercialização ou transmissão a terceiro dos dados obtidos (hipótese do §3º): aumento de 1 a 2/3

	- Art. 155 CP - Furto

		- §4º-B - Furto mediante fraude por dispositivo eletrônico/informático (conectado ou não, com ou sem violação de segurança ou uso de programa malicioso): reclusão de 4 a 8 anos e multa
		- §4º-C - Causas de aumento do §4º-B

			- I - Servidor fora do território nacional: aumento de 1/3 a 2/3
			- II - Crime praticado contra idoso ou vulnerável: aumento de 1/3 ao dobro

	- Art. 171 CP - Estelionato

		- §2º-A - Fraude com uso de informações obtidas via redes sociais, contatos telefônicos, e-mail fraudulento ou meio análogo: reclusão de 4 a 8 anos e multa
		- §2º-B - Se com servidor fora do território nacional: aumento de 1/3 a 2/3
		- §4º - Crime contra idoso ou vulnerável: aumento de 1/3 ao dobro

	- Art. 266 CP - Interrupção de serviço

		- Interromper/perturbar serviço telegráfico, radiotelegráfico ou telefônico: detenção de 1 a 3 anos e multa
		- §1º - Mesma pena para quem interrompe serviço telemático ou de informação de utilidade pública

	- Art. 298 CP - Falsificação de documento particular

		- Parágrafo único: cartão de crédito ou débito equipara-se a documento particular

- Natureza do crime cibernético

	- Dinâmica e por vezes de abrangência internacional
	- Exemplo: criminoso no Brasil usando servidor na Inglaterra realiza transferências de contas na Suíça
	- Sucesso no combate depende fundamentalmente de como o local foi processado

- Classificação dos crimes informáticos

	- Puros ou Próprios

		- Condutas criminosas realizadas por meio do computador e consumadas no espaço cibernético
		- O recurso de informática é o alvo da ação
		- Exemplos: invasão de rede de computadores, disseminação de programas maliciosos

	- Impuros ou Impróprios

		- Realizados por meio do computador, mas o prejuízo ocorre fora do espaço cibernético
		- Exemplos: divulgação de material pornográfico infantil na Internet, furto de valores financeiros pela Internet

	- Indireto ou Incidental

		- Computadores não são o meio para o crime, mas são "testemunhas"
		- Contêm planilhas, documentos, imagens e mensagens relacionados ao crime investigado

- Convenção de Budapeste (2001)

	- Publicada pelo Conselho da Europa em Budapeste, Hungria
	- Objetivo: aprimorar enfrentamento aos crimes cibernéticos (legislação e cooperação internacional)
	- Mais de 80 países signatários em 2026
	- Brasil aderiu em 2023
	- Referência para harmonização de conceitos e procedimentos sobre crimes cibernéticos

### 1.2 Informática Forense

- Definição

	- Conjunto de procedimentos realizados sobre mídias de armazenamento e equipamentos computacionais em busca de evidências digitais
	- Área das Ciências Forenses que trata da coleta, preservação, análise e apresentação de evidências digitais sustentáveis em juízo

- Surgimento

	- Uma das mais jovens disciplinas das Ciências Forenses
	- Surgida após a década de 1960 com a popularização de computadores e telecomunicações
	- Ganhou destaque com a popularização da Internet e telefonia móvel (meados de 1990)

- Diferenciais em relação às demais áreas da informática

	- Preocupação jurídica inerente à sua destinação
	- Aplicação de conceitos da Criminalística (cadeia de custódia, preservação do local do crime)
	- Procedimentos sólidos que não suscitem dúvidas ou questionamentos

- Ferramentas especializadas

	- Analisam dados não diretamente acessíveis
	- Preservam ao máximo a integridade do material original
	- Permitem encontrar: arquivos apagados, ocultos, com extensão alterada, criptografados ou modificados

- Analogia do iceberg

	- Usuário comum: enxerga apenas a ponta do iceberg (dados diretamente visíveis)
	- Perito Criminal: com procedimentos e ferramentas especializadas, enxerga tudo que está "sob a água"

- 1.2.1 Equipamento

	- Estação de trabalho pericial (principal ferramenta do perito)

		- Não é um computador comum
		- Características indispensáveis

			- Acesso irrestrito ao interior da estação e ao sistema operacional
			- Capacidade de processamento, armazenamento e memória condizentes com as exigências da Informática Forense
			- Interfaces para os mais variados padrões de dispositivos eletrônicos
			- Proteção contra interrupções de energia
			- Licenças de uso válidas (equipamentos, sistemas operacionais e aplicativos forenses)

	- Dispositivos recomendados (uso individual ou em laboratório)

		- Estação pericial portátil
		- Duplicador forense de dados
		- Leitor externo de discos rígidos
		- Equipamento para extração de dados de celulares e smartphones

	- Conectividade

		- Acesso irrestrito à Internet pela rede corporativa da PF
		- Acesso a servidores de processamento avançado compartilhados
		- Para exames com sigilo de origem: conexão distinta da rede corporativa, sem dados vinculados à PF

- 1.2.2 Procedimentos

	- Início: expedição de mandado judicial autorizando apreensão e análise de material
	- Ideal: peritos participam do planejamento e coordenação da operação de busca e apreensão

		- Orientam quanto à seleção, coleta e transporte correto do material

	- Chegada do material à unidade de Criminalística

		- Identificação e descrição no Sistema Criminalística
		- Registrar: marca, modelo, número de série, capacidade de armazenamento, estado de conservação, presença ou não de lacres

	- Realização dos exames
	- Finalização do laudo (descreve material, procedimentos e resultados)
	- Devolução do material com o laudo
	- Produção do laudo geralmente gera uma ou mais mídias como anexo (DVD/Blu-Ray/Pendrive/HD Externo)

		- Exige procedimentos adicionais para garantir integridade e autenticidade

- 1.2.3 Tipos de Exames

	- Classificação pelo tipo de material

		- Mídias de armazenamento computacional

			- Discos rígidos, SSDs, mídias óticas, cartões de memória, pen drives e outros

		- Dispositivos computacionais portáteis

			- Aparelhos celulares, smartphones e tablets
			- Grande importância pela popularização e sofisticação desses aparelhos

		- Redes de computadores

			- Dados em computadores conectados em redes locais (intranets) ou na Internet
			- Exemplos: arquivos na nuvem, servidores remotos, páginas na Internet

	- Classificação pelo objetivo do exame

		- Extração de dados

			- Disponibilizar dados em formato legível para terceiros
			- Procedimentos: recuperar arquivos apagados, decifrar criptografados, aplicar palavras-chave, categorizar arquivos, exportar para mídia
			- Comum em operações com crimes indiretos e muitas mídias apreendidas

		- Análise de registros

			- Análise de registros computacionais (logs)
			- Exemplos do que pode ser determinado

				- Se arquivos de abuso sexual foram disponibilizados (e-mail, peer-to-peer)
				- Hora do último uso do computador
				- Se arquivo foi criado ou impresso em um equipamento
				- Últimas buscas realizadas no computador
				- Qual usuário excluiu entrada de banco de dados
				- Como uma página na Internet foi desfigurada
				- Se aparelho celular esteve nas proximidades de uma coordenada
				- Se houve ligações entre dois suspeitos

		- Análise de sistemas

			- Realizados por engenharia reversa ou análise comportamental
			- Exemplos: sistemas de distribuição não aleatória de processos em varas judiciais, aplicativos maliciosos para fraudes bancárias

	- Determinação do exame

		- Definida pelo tipo de material encaminhado e pelo objetivo
		- Quesitos de áreas distintas da informática em mídia de armazenamento

			- Chefe da unidade pode determinar extração e disponibilização dos dados pela Informática Forense
			- Ou execução conjunta por peritos das duas áreas

## 2 NOÇÕES GERAIS DE INFORMÁTICA

### 2.1 Sistemas Numéricos e Notações Computacionais

- Bit

	- Menor unidade de informação armazenável ou transmissível
	- Dois estados: 0 (zero) ou 1 (um) / verdadeiro ou falso
	- Sistema binário (base 2)
	- Todos os dados de um computador são codificados em 0s e 1s

- Byte (octeto)

	- Conjunto de 8 bits
	- 256 combinações possíveis (2⁸)
	- Exemplo de mapeamento (padrão ASCII)

		- Caractere "K" → 01001011
		- Caractere "L" → 01001100

- Sistema hexadecimal

	- Base 16 (símbolos: 0-9 e A-F)
	- Torna a representação binária mais amigável para humanos
	- Cada octeto representado por dois símbolos hexadecimais
	- Cada conjunto de 4 bits = 1 símbolo hexadecimal (16 combinações possíveis)
	- Exemplos

		- "K" (0100 1011) → 4B em hexadecimal
		- "L" (0100 1100) → 4C em hexadecimal

- Agrupamentos de bytes - prefixos do SI

	- kilo (10³), mega (10⁶), giga (10⁹), tera (10¹²), peta (10¹⁵)
- Convenção de notação

	- 'b' minúsculo = bit
	- 'B' maiúsculo = byte
	- Exemplo: 7kb = 7.000 bits; 5MB = 5.000.000 bytes

### 2.2 Componentes de um Computador

- Gabinete: estrutura física que abriga os componentes principais
- Placa-mãe: dispositivo central ao qual todos os componentes se conectam
- Vantagem de componentes separados: possibilidade de substituição em caso de falha ou evolução tecnológica
- Principais componentes internos

	- Placa-mãe
	- Processador (CPU)
	- Memória principal (RAM)
	- Memória secundária (disco rígido)
	- Placa de vídeo (pode ou não estar integrada à placa-mãe)
	- Fonte de energia

- 2.2.1 Placa-mãe

	- Placa de circuito integrado que interconecta todos os dispositivos do computador
	- Funções: barramentos e circuitos de apoio, controle de acesso ao processador, disco rígido, RAM e demais dispositivos, interface com dispositivos de entrada e saída
	- Contém memória com o BIOS (Basic Input Output System)

		- Função: identificar, configurar, testar e inicializar os dispositivos do sistema

	- Conexão de dispositivos

		- Placas de rede ou vídeo: conectadas por slots (quando integradas: on-board)
		- Leitores de DVD, disquetes e discos rígidos: conectados por cabos

- 2.2.2 Processador (CPU)

	- Unidade Central de Processamento (Central Processing Unit)
	- Responsável pelo processamento de dados e cálculos aritméticos
	- Fisicamente: chip de silício encaixado na placa-mãe
	- CPU ≠ gabinete de computador (erro terminológico comum)
	- Função: recebe dados (entrada) → realiza operações (processamento) → disponibiliza resultado (saída)

- 2.2.3 Memória Principal (RAM)

	- Random Access Memory (Memória de Acesso Aleatório)
	- Também chamada de memória volátil
	- Armazena dados e programas em execução
	- Rápida, mas perde os dados quando o computador é desligado
	- Fisicamente: pequenas placas de circuito integrado conectadas à placa-mãe
	- Capacidade atual: ordem de gigabytes

- 2.2.4 Memória Secundária (Auxiliar)

	- Armazenamento permanente (não volátil) - mantém dados após desligamento
	- Dados transferidos para a RAM quando necessários ao processador
	- Tipos

		- Discos rígidos (HD - Hard Disk Drive)

			- Principal dispositivo de memória permanente
			- Grande capacidade + boa velocidade de leitura/gravação
			- Dados em discos magnéticos concêntricos, divididos em trilhas e setores
			- Conectores comuns: IDE e SATA

		- Memórias flash

			- Chips que mantêm dados persistentes (semelhantes à RAM, mas não voláteis)
			- Usos: cartões de memória, pen drives, memória interna de celulares e câmeras
			- SSDs (Solid-State Drive): conjunto de memórias flash; mais rápidos que HDs, usam os mesmos cabos

		- Mídias óticas

			- CD, DVD e Blu-Ray
			- Uso: distribuição de software, material de áudio e vídeo, backup de baixo custo

	- Capacidades usuais

		- Disco rígido: 500GB a 30TB
		- SSD: 120GB a 8TB
		- CD: 650MB ou 700MB
		- DVD: 4,7GB ou 8,5GB
		- Blu-ray: 25GB ou 50GB
		- Pen drive e cartões de memória: 16GB a 2TB

- 2.2.5 Periféricos

	- Dispositivos normalmente fora do gabinete
	- Permitem entrada de dados ou saída dos resultados do processamento
	- Também chamados de dispositivos de entrada e saída (input/output)
	- Classificação

		- Entrada: teclado, mouse, scanner, webcam, microfone
		- Saída: monitor, impressora, caixas de som
		- Entrada e saída: interface de rede, monitor touch-screen, impressora multifuncional

### 2.3 Sistema Operacional

- Software que gerencia o acesso aos recursos do computador
- Funcionalidades básicas

	- Gerência de memória
	- Acesso a dispositivos de entrada e saída
	- Carregamento de outros programas
	- Interface gráfica
	- Gerenciamento do sistema de arquivos

- Posicionamento: camada intermediária entre hardware e demais programas
- Sistemas operacionais mais utilizados

	- Computadores: Microsoft Windows, Mac OS X, Linux
	- Dispositivos móveis (smartphones/tablets): Android, iOS (iPad e iPhone)

### 2.4 Sistema de Arquivos

- Método para organização estruturada de dados em mídias de armazenamento
- Fornece meios para gravação e leitura de arquivos e diretórios
- Sistema operacional: responsável por entender o sistema de arquivos e fornecer acesso
- Exemplos de sistemas de arquivos

	- Windows: FAT32, NTFS
	- Linux: Ext2, Ext4, ReiserFS
	- Mac OS X: HFS+

- Blocos (unidades de alocação)

	- Divisão lógica da mídia para facilitar gerenciamento de espaço
	- Unidade mínima de armazenamento que um arquivo pode ocupar
	- Arquivo pequeno: ocupa um bloco inteiro
	- Arquivo grande: ocupa tantos blocos quantos forem necessários

- Mapa de bits

	- Controla quais blocos estão livres (0) e quais estão ocupados (1)
	- Consultado ao criar um arquivo; atualizado após ocupação dos blocos
	- Processo análogo ocorre ao apagar um arquivo

- Metadados

	- Informações sobre os atributos dos arquivos ("dados a respeito de dados")
	- Incluem: nome do arquivo, datas (criação, modificação, último acesso), tamanho total
	- Armazenados em estruturas de tabelas (variam conforme o sistema de arquivos)
- Extensão de arquivo

	- Indica o tipo do arquivo e pode estar associada a um programa específico
	- Exemplo: "Apostila.docx"
	- Extensão pode ser alterada (arquivo Word renomeado como .mp3)

- Assinaturas de arquivo

	- Sequência de bytes interna que identifica o tipo do arquivo
	- Presente no início e/ou no fim dos arquivos
	- Independente da extensão (possível conflito entre assinatura e extensão)

### 2.5 Funções Unidirecionais de Resumo (Hash)

- Finalidade na Informática Forense

	- Garantir a integridade dos vestígios digitais
	- Detectar inequivocamente qualquer alteração no dado

- Definição

	- Algoritmos que mapeiam um conjunto de dados de qualquer tamanho em um conjunto de tamanho fixo (hash)

- Propriedades fundamentais

	- Determinístico: mesma entrada sempre produz mesma saída
	- Unidirecional: impossível obter a entrada a partir do hash (não pode ser invertido)
	- Resistente a colisões: probabilisticamente improvável que entradas diferentes gerem o mesmo hash
	- Hash funciona como "impressão digital" do arquivo
	- Qualquer alteração no conteúdo original resulta em hash completamente diferente

- Funcionamento prático

	- Arquivos de tamanhos diferentes submetidos à mesma função geram hashes do mesmo tamanho
	- Alteração de um único bit gera hash completamente diferente
- Algoritmos mais utilizados

	- MD5 (Message Digest 5): saída de 128 bits
	- SHA (Secure Hash Algorithm)

		- SHA-256: saída de 256 bits

	- Hash de 64 bits já pode gerar cerca de 18 quintilhões (2⁶⁴) de valores diferentes

- Ferramentas para cálculo e verificação de hash

	- MD5Summer (www.md5summer.org): facilidade de uso e simplicidade
	- FSUM (www.slavasoft.com/fsum)
	- Ambas gratuitas para plataforma Windows

## 3 BUSCA E APREENSÃO

### Contexto geral

- Busca em local com crimes por computador não difere muito de outras buscas, mas tem particularidades relevantes
- Cuidados adicionais para evitar apreensão desnecessária e acondicionamento inadequado de materiais frágeis
- Função do Perito Criminal: especialista para orientar seleção, preservação e encaminhamento dos vestígios de informática

### Etapas do trabalho no local

- Planejamento
- Execução da busca
- Seleção de material relevante
- Arrecadação

### 3.1 Planejamento

- Perito Criminal deve participar do planejamento sempre que possível
- Interação com a equipe de investigação
- Contribuições do perito no planejamento

	- Orientação na montagem das equipes de busca
	- Escolha dos métodos de entrada no local
	- Determinação do tipo de equipamento a ser arrecadado
	- Outras decisões relacionadas às buscas

- Diferentes ambientes exigem diferentes estratégias

	- Exemplos: residências, empresas de pequeno porte, empresas de grande porte, empresas com filiais em rede

- Participação no planejamento permite

	- Escolha das ferramentas adequadas para cada caso
	- Identificação de riscos
	- Redução da chance de imprevistos técnicos

- Atenção especial em crimes próprios (consumados no espaço cibernético)

	- Apreensão incorreta de computadores criptografados pode dificultar ou inviabilizar o exame pericial

### 3.2 Execução da Busca

- Normativos de referência

	- Instrução Técnica 003/2010-GAB/DITEC (procedimentos gerais no local de busca)
	- IT 018/2013-DITEC/DPF (crimes de abuso sexual contra crianças e adolescentes)
	- Ambos em processo de revisão e atualização

- Após ter o local sob controle

	- Evitar tentativas de ocultar, adulterar ou destruir evidências
	- Impedir que pessoas estranhas à equipe manipulem equipamentos de informática
	- Atenção a mídias fáceis de ocultar (disquetes, CDs, DVDs, pen drives)

- Reconhecimento pelo Perito Criminal

	- Localizar equipamentos
	- Identificar sistemas e topologias de rede
	- Localizar pontos de acesso
	- Interromper conexões de rede (vestígios podem ser apagados remotamente)

- Regra geral: Perito Criminal não deve operar computadores no local
- Exceções permitidas para operação no local

	- Em observância a determinações expressas no mandado judicial (com anuência da coordenação)
	- Para preservação de evidências voláteis ou cujo acesso posterior seja inviável ou comprometido
	- Para racionalizar a seleção do material (avaliar relevância das informações nos equipamentos)

- Caberá ao Perito Criminal determinar se há condições técnicas e recursos suficientes para operar o equipamento no local
- Crime por computador em andamento: realizar procedimentos de exame em local de crime de informática

### 3.3 Seleção de Material Relevante

- Operação bem-sucedida: foco e seleção apenas do que é importante para o caso
- Não é aquela que apreende o maior número de equipamentos
- Usar informações disponíveis para selecionar apenas o que for relevante
- Exemplo de foco: mandado abrange toda a empresa, mas interesse está no setor de contabilidade

	- Não é necessário apreender computadores dos demais setores
	- Atenção a servidores de arquivos ou e-mails, diretoria e presidência

- Dicas para seleção

	- Saber o que se deseja provar (uma prova documental pode ser suficiente)
	- Imprimir relatório diretamente do sistema da empresa pode ser mais eficaz que apreender computadores
	- Senhas, nomes de usuários e detalhes de sistemas podem ser necessários em exame futuro

		- Podem estar em anotações próximas aos computadores
		- Podem ser solicitados às pessoas presentes (sem obrigação de fornecimento)

- 3.3.1 Computadores (Desktops e Notebooks)

	- Regra: apreender os computadores por inteiro (não apenas o HD/SSD)
	- Motivos para não retirar o disco do gabinete

		- Possibilidade de criptografia de disco ativada vinculada ao TPM (módulo de segurança da placa-mãe)
		- Dificuldade de acesso físico ao interior de notebooks
		- Possibilidade de configurações lógicas de múltiplos discos (ex.: RAID)

	- Periféricos (impressoras, teclados, monitores): apreender somente se houver interesse específico
	- Computador desligado: deve permanecer desligado
	- Computador ligado: procedimentos a adotar

		- Verificar necessidade de registrar flagrante (pelo que estiver visível na tela)
		- Verificar existência de criptografia de disco e/ou informações relevantes na memória volátil
		- Procedimentos possíveis para preservação de dados

			- Obtenção da chave de recuperação do Bitlocker
			- Configuração do Bitlocker em modo de suspensão
			- Obtenção das chaves criptográficas do WhatsApp Web
			- Ativação do modo de hibernação do Windows
			- Captura da memória RAM
			- Colocar o computador em modo de hibernação

	- Apreender cabos, carregadores e acessórios, especialmente modelos pouco usuais
- 3.3.2 Mídias Avulsas

	- Mídias removíveis e avulsas devem ser apreendidas (podem conter dados relevantes)
	- Exemplos: pen drives, CDs, DVDs, cartões de memória, chips de celular, disquetes
	- Cuidado especial com dispositivos conectados ao computador alvo

		- Exemplos: gavetas de discos rígidos (HDs externos), chaves de hardware (dongles)

	- Atenção a mídias de armazenamento pouco usuais

		- Máquinas fotográficas e filmadoras digitais
		- Pen drives em formatos incomuns (chaveiros, canivetes, bichos de pelúcia)
		- Apreender também o dispositivo de leitura correspondente, sempre que possível

	- Evitar apreensão de mídias sem dados relevantes

		- Exemplos: CDs/DVDs originais com músicas ou instalação de programas
- 3.3.3 Cópias de Dados

	- Realizadas quando houver inviabilidade legal ou técnica à apreensão de equipamentos
	- Também usadas para reduzir o volume de material arrecadado
	- Cenários comuns

		- Dados em computadores de grande porte
		- Dados em repositório na rede da empresa

		- Exemplo: cópia da caixa postal de e-mails de um alvo específico (evita apreensão do servidor inteiro)

	- Deve ser feita, sempre que possível, sob supervisão do Perito Criminal de informática
	- Requisitos para realização de cópias no local

		- Disponibilidade de mídias de tipo e capacidade adequados
		- Disponibilidade de equipamentos e software adequados
		- Disponibilidade de recursos humanos para realização em tempo hábil

	- Acompanhamento por testemunhas do local (dono do equipamento ou funcionários responsáveis)
	- Dados apreendidos devem ser submetidos a funções de hash para verificação futura de integridade
	- Hash dos dados apreendidos deve constar no Auto de Apreensão

### 3.4 Arrecadação

- Mídias de armazenamento são equipamentos frágeis (mecânica, eletrônica e magneticamente)
- Devem ser manuseadas com extremo cuidado
- Fatores de risco e cuidados especiais

	- Calor e umidade

		- Grandes inimigos de computadores e mídias
		- Não deixar próximos a fontes de umidade, locais com alta temperatura ou sol incidente

	- Campos magnéticos

		- Podem danificar mídias magnéticas
		- Evitar campos de motores elétricos, alto-falantes e ímãs

	- Eletricidade estática

		- Componentes eletrônicos muito suscetíveis
		- Estática do corpo humano pode causar danos
		- Plásticos de acondicionamento também podem acumular estática
		- Usar embalagens antiestáticas sempre que possível

	- Choques mecânicos

		- Quedas e impactos podem facilmente danificar mídias
		- Usar embalagens com proteção (ex.: plástico-bolha)
		- Evitar depositar material diretamente no fundo de viaturas
		- Preparar espaço para transporte sem muita vibração mecânica

- Procedimentos de acondicionamento

	- Discos rígidos: embalagens próprias (ou proteção improvisada com papelão/plástico-bolha)
	- Equipamentos devidamente etiquetados e lacrados
	- Separação em embalagens diferentes; preferência por plásticos transparentes
	- Etiquetas afixadas no equipamento em si (não nas embalagens)
	- Cabos, carregadores e acessórios embalados junto ao equipamento correspondente
	- Discos rígidos do mesmo gabinete: embalados e lacrados em um único volume
	- Mídias removíveis: agrupadas por tipo, cada conjunto embalado e lacrado separadamente

## 4 DUPLICAÇÃO FORENSE DE MÍDIAS

### Definição

- Procedimento de cópia integral dos dados de uma mídia de armazenamento para outra
- Também conhecido como "espelhamento"
- Etapa crítica e de suma importância na perícia de informática

### Diferencial em relação à cópia convencional

- Cópia lógica comum (copiar e colar): copia apenas dados "visíveis" no sistema de arquivos
- Duplicação forense: copia todo o conteúdo (metadados, arquivos apagados, do primeiro ao último bit)

### Princípio fundamental

- Todas as etapas posteriores são realizadas sobre a cópia gerada
- Mídia original lida uma única vez; permanece preservada e inalterada
- Procedimento não modifica nenhum bit da mídia original
- Integridade da cópia verificada pelo hash gerado ao final

### Identificação das mídias antes da duplicação

- Origem: mídia a ser analisada (material original apreendido)
- Destino: mídia que abrigará a cópia
- Destino deve ter capacidade igual ou superior à origem

	- Para discos rígidos: recomendado usar destino com capacidade superior

### Referência normativa

- Manual de Duplicação Forense de Mídias de Armazenamento Computacionais (INC/PF)

### 4.1 Tipos de Duplicação Forense

- 4.1.1 Duplicação de Mídia para Mídia

	- Cópia completa dos dados da mídia de origem diretamente para a mídia de destino
	- Bit a bit: primeiro bit da origem = primeiro bit do destino
	- Indicada quando é necessário utilizar a mídia de destino em substituição à original

		- Exemplo: devolver conteúdo do disco rígido ao investigado (original fica com a perícia)
		- Exemplo: necessidade de inicializar o computador apreendido sem alterar o original

	- Exige "zeramento" prévio da mídia de destino (zero fill / wipe)

		- Gravar zeros em todo o conteúdo da mídia
		- Garante que dados preexistentes não se confundam com os dados copiados

- 4.1.2 Duplicação de Mídia para Arquivo-Imagem

	- Cópia completa dos dados da mídia de origem para um ou mais arquivos na mídia de destino
	- Bit a bit: primeiro bit da origem = primeiro bit do arquivo gravado
	- Todo o conteúdo da origem é armazenado em arquivos no sistema de arquivos do destino
	- Uma mídia de destino pode abrigar cópias de diversas mídias de origem (se houver capacidade)
	- Método mais indicado para realização de exames periciais

		- Maior flexibilidade para analisar múltiplos arquivos-imagem simultaneamente
		- Maior facilidade para manter a integridade dos dados

	- Não é necessário "zerar" a mídia de destino após cada duplicação
### 4.2 Equipamentos Utilizados

- Dois métodos possíveis: equipamento forense especializado ou computador comum
- Ambos permitem duplicação mídia para mídia e mídia para arquivo-imagem
- 4.2.1 Equipamento Forense Especializado

	- Vantagens

		- Facilidade de uso e bom desempenho
		- Garantia de que a mídia original não será alterada (quando corretamente utilizado)
		- Emissão de relatório ao final (identificação das mídias, informações do processo, hash dos dados copiados)

	- Procedimento: mídias conectadas em entradas específicas, configurações escolhidas e cópia iniciada
	- Pressupõe acesso direto à mídia original (retirada do equipamento recebido para análise)
	- Podem ser levados para o campo (duplicação durante a busca)
	- Equipamentos disponíveis na PF

		- Tableau TD3
		- Tableau TX1
		- Atola
	- Características: interface para praticamente todos os tipos de discos rígidos, duplicações simultâneas

- 4.2.2 Computador Comum

	- Maior flexibilidade na escolha de interfaces e aplicativos
	- Útil para

		- Discos rígidos não reconhecidos pelos equipamentos especializados
		- Procedimentos especiais (tolerância a erros, tratamento de setores defeituosos)
		- Casos em que não é possível remover a mídia original do equipamento

			- Exemplos: notebooks com mídias muito delicadas, interfaces ou configurações incomuns

	- Risco principal: alteração acidental dos dados da mídia original
	- Mitigação do risco

		- Uso de distribuição forense do sistema operacional Linux (não modifica mídias conectadas)

			- Versões mais utilizadas: CAINE e Kali

		- Se a mídia tiver proteção/bloqueio contra escrita: usar Windows com software forense (ex.: FTK Imager)
	- Métodos de proteção contra escrita

		- Trava mecânica: dispositivos mecânicos na própria mídia (ex.: trava de disquete, chave de cartão de memória)
		- Bloqueio lógico: software especializado desabilita escrita em interfaces do computador (ex.: porta USB)
		- Bloqueio físico: dispositivo de hardware entre a mídia e o computador que impede escrita (equipamentos especializados geralmente possuem essa funcionalidade)

	- Perito Criminal determina o conjunto de hardware e software mais adequado para cada caso

## 5 ANÁLISE DE VESTÍGIOS DIGITAIS

### Contexto

- Etapa realizada após a duplicação forense
- Procedimentos: recuperar arquivos apagados, decifrar criptografados, indexar conteúdos, analisar registros ou sistemas
- Objetivo: elucidar o crime sob investigação

### Referência normativa

- Manual de Exames Periciais em Informática (INC/PF)

### Etapas da análise (agrupamento didático)

- Extração → Processamento → Filtragem → Exame

### 5.1 Extração

- Varredura e recuperação de todo o conteúdo da mídia
- Inclui: sistema de arquivos e áreas não alocadas
- Disponibiliza todos os arquivos ativos (inclusive dentro de outros arquivos) e apagados
- Dois processos principais

	- Recuperação de arquivos apagados
	- Expansão de arquivos-contêiner

- 5.1.1 Recuperação de Arquivos Apagados

	- Equívoco comum: apagar, esvaziar a lixeira ou formatar não elimina definitivamente o dado
	- Processo real ao apagar um arquivo

		- Sistema operacional marca como "livres" os blocos ocupados e a entrada na tabela do sistema de arquivos
		- Conteúdo permanece fisicamente no disco até que a área seja reutilizada por outro arquivo

	- Área marcada como livre: passa a fazer parte do espaço livre e pode ser ocupada por arquivos posteriores
	- Arquivo definitivamente eliminado somente quando outro sobrescrever toda a área
	- Probabilidade de recuperação: quanto mais recente o apagamento, maior a chance (menor risco de sobrescrita)
	- Duas abordagens de recuperação

		- Recuperação pelo sistema de arquivos

			- Baseia-se nas entradas da tabela marcadas como "livres"
			- Metadados dos arquivos apagados ainda registrados nessas entradas (incluindo localização dos blocos)
			- Software especializado lê o conteúdo dos blocos e recupera o arquivo

		- Recuperação baseada na assinatura (data carving)

			- Busca em todo o disco por sequências específicas de bytes que indicam início de tipos de arquivos
			- Recupera todos os arquivos de determinado tipo cujas assinaturas ainda estejam gravadas
			- Não utiliza informações do sistema de arquivos (não recupera metadados como nome do arquivo)
			- Limitação: arquivos sem assinatura no final ou fragmentados podem ser recuperados parcialmente

- 5.1.2 Expansão de Arquivos-Contêiner

	- Arquivos-contêiner: repositórios de outros arquivos
	- Exemplos: arquivos compactados (ZIP, RAR), arquivos de e-mail (PST, NSF)
	- Processo: conteúdo é aberto, arquivos internos são extraídos e disponibilizados para a próxima etapa

### 5.2 Processamento

- Opera sobre todos os arquivos ativos, recuperados e expandidos da etapa anterior
- Três processos principais

	- Cálculo de hashes
	- Categorização
	- Indexação

- 5.2.1 Cálculo de Hashes

	- Hash calculado para todos os arquivos disponibilizados
	- Permite identificar arquivos idênticos ou arquivos já conhecidos pela Perícia Criminal
	- Perito Criminal escolhe o tipo de função unidirecional de resumo a utilizar

- 5.2.2 Categorização

	- Identificação de todos os arquivos pela assinatura e extensão
	- Detecta inconsistências entre assinatura e extensão (ex.: arquivo Word renomeado para .mp3)
	- Separação por tipo: documentos, planilhas, bases de dados, imagens, vídeos, áudio, arquivos de sistema
	- Arquivos criptografados também são identificados

- 5.2.3 Indexação

	- Realizada a critério do Perito Criminal
	- Gera índice de todas as palavras encontradas dentro de cada arquivo analisado
	- Funciona como índice remissivo: tabela com palavras e suas localizações no disco
	- Normalmente limitada a arquivos com texto
	- Ferramentas especializadas podem indexar textos via OCR (Optical Character Recognition) de imagens

### 5.3 Filtragem

- Objetivo: filtrar arquivos irrelevantes e destacar os de potencial interesse pericial
- Etapa essencial: após a extração, um disco rígido pode conter milhões de arquivos
- Dois processos principais

	- Redução
	- Pesquisa por palavras-chave

- 5.3.1 Redução

	- Detectar e descartar arquivos claramente desconexos com o objeto do exame
	- Baseia-se nos hashes calculados no processamento
	- Usos da base de dados de arquivos conhecidos

		- Excluir arquivos sem interesse (SO, bibliotecas de aplicativos comerciais, jogos)
		- Identificar arquivos relevantes por hash

			- Exemplos: hashes de MASI de casos comprovados, hashes de malwares, programas de esteganografia

	- Outros filtros possíveis

		- Ocultar arquivos com conteúdo duplicado (hashes idênticos)
		- Ocultar arquivos com tamanho zero

- 5.3.2 Pesquisa por Palavras-Chave

	- Busca de arquivos que possuam texto definido ou que obedeçam a determinado padrão
	- Permite encontrar

		- Textos específicos
		- Expressões diversas (ex.: sequências numéricas de cartão de crédito)
		- Caracteres curinga (substituem qualquer caractere durante a busca)

			- Exemplo: "luiz?" encontra "luiz" e "luis"

	- Busca indexada: consulta o índice gerado na fase de processamento (rápida)
	- Busca live: varredura exaustiva de todo o conteúdo da mídia (extremamente lenta)
	- Desvantagem: risco de excesso de ocorrências com palavras muito comuns ou expressões muito curtas

### 5.4 Exame

- Etapa final: requer intervenção direta do Perito Criminal
- Depende do tipo de exame e da quesitação apresentada
- Dois processos principais: análise e seleção
- Eventualmente necessária a decifragem de arquivos
- 5.4.1 Análise

	- Pode variar de inspeção visual simples a remontagem de sistemas/bancos de dados
	- Duração: poucas horas a diversas semanas
	- Determinada pelos objetivos do exame e pela quesitação
	- Exemplos de atividades

		- Identificação de aplicativos de interesse (programas de transmissão de dados, esteganografia, limpeza de dados)
		- Análise de informações do SO ou aplicativos (registry do Windows, logs, cache, histórico de navegação)
		- Análise de aplicativo malicioso (ex.: verificar se captura senhas bancárias)
		- Constatação de compartilhamento de imagens de abuso sexual de crianças
		- Organização cronológica das informações encontradas

- 5.4.2 Seleção

	- Agrupa e exporta em formato inteligível os arquivos com conteúdo probatório
	- Arquivos selecionados exportados para mídia ótica ou impressos no corpo do laudo
	- Varia conforme a quesitação

		- Resposta pode ser um conjunto de arquivos ou o resultado de pesquisa por palavras-chave

- 5.4.3 Decifragem de Arquivos

	- Problema crescente: usuários/criminosos com maior conhecimento de informática usam criptografia
	- Acesso a arquivos cifrados: depende da recuperação da senha do usuário (casos simples excluídos)
	- Técnicas de recuperação de senhas

		- Força bruta

			- Busca exaustiva testando todas as combinações possíveis
			- Teoricamente encontra qualquer senha
			- Ineficiente para senhas longas
			- Exemplo: para 5 caracteres de letras minúsculas, vai de "aaaaa" a "zzzzz"

		- Dicionário

			- Testa todas as ocorrências de um conjunto de palavras/expressões
			- Baseia-se no hábito de pessoas escolherem palavras simples como senhas
			- Fontes: palavras comuns, nomes de lugares, expressões de filmes, dados pessoais, palavras do próprio disco
			- Regras de mutação: maiúsculas, substituições (ex.: "a" por "@"), adição de números

		- Probabilísticos

			- Métodos complexos que determinam sequências com maior chance de terem sido usadas como senhas
			- Usam probabilidades condicionais e gramáticas especializadas
			- Evitam senhas dificilmente memorizáveis por humanos
			- Podem usar conjuntos de senhas já conhecidas e padrões por idioma

	- Exploração de falhas nos algoritmos de proteção

		- Permite obtenção da chave de acesso de forma rápida e eficiente
		- Tendência: uso crescente de algoritmos mais fortes e robustos, dificultando esse método

### 5.5 Ferramentas Integradas

- Agregam funcionalidades de diversas ferramentas especializadas em cada etapa do exame
- Funcionalidades típicas em uma única ferramenta

	- Cópia do conteúdo da mídia para arquivo-imagem
	- Recuperação de dados apagados
	- Indexação e pesquisa por palavras-chave
	- Visualização de arquivos de vários formatos
	- Geração de relatórios com links para arquivos selecionados

- Permitem agilizar e parcialmente automatizar os exames
- IPED (Indexador e Processador de Evidências Digitais)

	- Software de código aberto desenvolvido internamente na Polícia Federal
	- Cobre as principais etapas da análise de vestígios digitais
	- Funcionamento: cópia/imagem da mídia importada como "evidência" e cada elemento processado
	- Funcionalidades durante o exame

		- Visualização da maioria dos arquivos
		- Criação de filtros
		- Pesquisas por palavras-chave
		- Seleção e organização de arquivos de interesse em categorias
		- Geração de relatórios em HTML (diretórios e páginas prontos para anexar ao laudo)
- Outras ferramentas integradas

	- Exterro FTK
	- OpenText Forensic (EnCase)
	- X-Ways Forensics
	- Magnet Axiom
	- Cellebrite Digital Inspector e Physical Analyzer

## 6 EXAMES EM CASOS DE ABUSO SEXUAL INFANTOJUVENIL (ASI)

### Relevância do tema

- Um dos exames mais relevantes da área de Perícia em Informática
- Extensa variedade de tipos de vestígios digitais e técnicas de identificação, valoração e correlação
- ECA utiliza mais de 30 verbos distintos para tipificar crimes relacionados à violência sexual infantojuvenil
- Característica comum dos abusadores: tendência a acumular registros (dezenas de milhares de imagens/vídeos por caso)
- Exame pericial bem realizado pode determinar conclusivamente materialidade, autoria e modus operandi
- Desgaste ao examinador: grande volume de conteúdo de forte impacto emocional

### Norma de referência

- Portaria Ditec/PF nº 1710, de 02 de março de 2026
- Foco operacional: trabalho com dados já extraídos e processados, organização de marcadores, priorização, redução de exposição, documentação metodológica, entrega de anexos técnicos, cuidados com saúde mental, mecanismos para redistribuição de pendências

### 6.1 Terminologia

- Abuso sexual infantojuvenil (ASI)

	- Toda ação, interação ou situação em que criança ou adolescente seja envolvido (real ou simulado) em atividade de natureza sexual
	- Com ou sem contato físico, mediante coação, persuasão, exploração, manipulação, vantagem ou qualquer constrangimento
	- Inclusive quando praticado com fins de registro, produção, armazenamento, transmissão, distribuição ou consumo de MASI
	- Conforme definido no ECA

- BFAC (Banco Federal de Arquivos Conhecidos)

	- Banco de dados instituído por portaria da DITEC
	- Finalidades

		- Armazenar arquivos encontrados frequentemente em dispositivos apreendidos que podem ser ignorados
		- Armazenar arquivos relacionados a crimes de ASI
		- Armazenar arquivos relacionados a crimes com uso de malwares

- Inteligência Artificial (IA)

	- Conjunto de técnicas computacionais baseadas em modelos estatísticos, redes neurais, aprendizado de máquina ou métodos análogos
	- Processa informações, reconhece padrões e realiza inferências/classificações de forma autônoma ou semiautônoma
	- Objetivo: apoiar ou aprimorar a atuação humana em tarefas analíticas, operacionais ou decisórias

- Marcadores

	- Identificações visuais ou digitais aplicadas aos arquivos em ferramenta forense durante a análise
	- Objetivo: organizar e destacar informações

- Material de ASI (MASI)

	- Imagens, vídeos ou outro registro contendo informações relacionadas a ASI

- Peer-to-peer (P2P)

	- Arquitetura de redes ponto-a-ponto que permite compartilhamento de serviços e dados sem servidor central

- Puberal

	- Fase de transição entre a infância e a idade adulta

### 6.2 Visão Geral

- Etapas do exame de análise de conteúdo relacionado à ASI

	- I - Extração e processamento dos dados
	- II - Identificação e classificação de MASI
	- III - Análise de disponibilização ou transmissão de MASI
	- IV - Análise de produção de MASI
	- V - Análises adicionais relacionadas a quesitos específicos

- Exame de Identificação de MASI

	- Consiste na análise visual do conteúdo dos arquivos
	- Pode ser realizado por perito de qualquer área
	- Condição: dados previamente extraídos e processados por ferramenta forense
	- Pode ocorrer como exame à parte mediante solicitação/designação
	- Atuação típica: análise de conteúdo e organização probatória (não extração técnica do dispositivo)

- Proteção da saúde mental dos peritos

	- Triagens usando BFAC e IA
	- Pausas estruturadas
	- Limites à designação de exames
	- Apoio biopsicossocial

### 6.3 Organização e Priorização do Material Examinado

- Separação dos arquivos em três conjuntos (quando não houver disposição diversa na quesitação)

	- I - Disponibilização: imagens/vídeos disponibilizados ou transmitidos via P2P, mensagens instantâneas, redes sociais ou e-mail
	- II - Produção: imagens/vídeos possivelmente produzidos pelo investigado
	- III - Posse: demais imagens/vídeos não enquadrados nos conjuntos anteriores

- Priorização do material (ordenação recomendada)

	- Primeiro: identificação positiva via BFAC
	- Em cada conjunto: por maior probabilidade de conter MASI (IA como ferramenta de apoio)

		- Hierarquia: I - ASI / II - Suspeita de ASI / III - Pornografia adulta / IV - Pessoas sem conotação sexual / V - Outros

- Marcadores para arquivos com MASI identificados

	- ASI - Disponibilização
	- ASI - Produção (arquivos encaminhados para inclusão no BFAC)
	- ASI - Posse

		- Arquivos apagados e recuperados: marcador próprio (ex.: "ASI - Posse (arquivos apagados)")

- Saturação qualitativa (grupo de Posse)

	- 500 arquivos com cenas de ASI considerados suficientes para estabelecer conjunto probatório suficiente
	- Exame de Identificação de MASI para caracterizar posse pode ser interrompido ao atingir essa quantidade

- Arquivos classificados somente por IA ou BFAC (sem confirmação visual do perito)

	- Incluídos em marcador próprio explicitando essa circunstância
	- Uso de ferramenta de IA deve sempre ser consignado no laudo

### 6.4 Critérios para Identificação Visual de MASI

- Dois elementos essenciais (presença simultânea)

	- I - Indícios de menoridade dos indivíduos representados
	- II - Conotação sexual, explícita ou implícita (inclusive em sequências progressivas de imagens)

- Critérios para avaliar indícios de menoridade (sem estimar a idade numérica)

	- I - Ausência ou início precoce de desenvolvimento puberal

		- a) Ausência de pelos pubianos ou presença de poucos fios finos, lisos e pouco pigmentados na base da genitália
		- b) Gênero feminino: ausência de desenvolvimento mamário ou presença de broto mamário (discreta elevação da auréola)
		- c) Gênero masculino: genitália com aspecto infantil, sem aumento perceptível testicular ou apenas início de crescimento testicular

	- II - Proporção corporal típica de crianças (cabeça proporcionalmente maior em relação ao corpo)
	- III - Traços faciais infantis (mandíbula retraída, bochechas arredondadas, olhos proporcionalmente maiores)
	- IV - Presença de adulto na cena (comparação proporcional entre os corpos)

- Elementos contextuais corroboradores

	- Ambiente infantil
	- Presença de roupas ou trajes infantis
	- Poses sensuais
	- Uso de termos sugestivos em pastas e arquivos (ex.: "pthc", "preteen", "13yo")
	- Existência de MASI previamente confirmado na mesma pasta
	- Classificação indicativa por IA ou algoritmo de detecção de nudez
	- Correspondência com hashes do BFAC
	- Metadados, legendas ou textos que façam alusão à menoridade

## 7 EXAMES EM EQUIPAMENTOS ELETRÔNICOS PORTÁTEIS

### Contexto

- Exames periciais para extração e análise de dados em equipamentos computacionais portáteis
- Exemplos: aparelhos celulares, tablets, agendas eletrônicas, GPS e drones

### Normativos de referência

- Instrução Técnica 017/2013-DITEC/DPF (aparelhos eletrônicos com comunicação em rede de telefonia móvel)
- Manual de Perícias em Equipamentos Computacionais Portáteis (anexo da apostila)

### 7.1 Dispositivos Móveis: Conceitos Fundamentais

- Evolução dos aparelhos celulares

	- Meados dos anos 1990: armazenavam apenas alguns contatos e registros de chamadas
	- Atualmente: armazenam milhares de páginas de texto, fotos, músicas, vídeos; executam aplicativos de computador
	- Smartphones substituíram agendas eletrônicas, PDAs e até notebooks para muitos usuários

- Importância pericial dos celulares

	- Funcionalidades semelhantes às de pequenos computadores
	- Coletam e armazenam informações úteis para investigações (GPS, comunicações, redes sociais)
	- Estão em constante proximidade com o usuário
	- Registram localização, comunicações, hábitos, finanças e rede de contatos do investigado
	- Tão ou mais importantes que desktops e notebooks para a perícia de informática

- Tecnologias de comunicação de aparelhos celulares

	- CDMA (Code Division Multiple Access)

		- Identificação única por ESN (Electronic Serial Number) ou MEID (Mobile Equipment Identifier)
		- Praticamente inexistente no Brasil atualmente

	- GSM (Global System for Mobile Communications) e iDEN

		- IMEI (International Mobile Equipment Identity): identifica unicamente o aparelho (15 dígitos numéricos)
		- IMSI (International Mobile Subscriber Identity): identifica o assinante junto à operadora
		- Cartão SIM (Subscriber Identity Module)

			- Pequeno cartão inteligente vinculado a uma linha telefônica pela operadora
			- Armazena: agenda, mensagens de texto, código IMSI do assinante
			- ICCID (Integrated Circuit Card Identifier): código único do cartão (20 dígitos, pode estar impresso no cartão)
			- Tipos de cartão SIM: mini, micro, nano e eSIM

			- eSIM: microchip soldado na placa-mãe, recebe credenciais da operadora via software
		- Funcionamento: celular GSM só opera na rede com cartão SIM válido (IMSI) em aparelho com IMEI válido
		- Um cartão SIM pode ser usado em vários aparelhos; um aparelho pode ter mais de uma linha

### 7.2 Análise Pericial

- 7.2.1 Descrição do Material

	- Identificar e descrever todos os componentes e estado de conservação de forma clara e unívoca
	- Evita troca, extravio ou perda do material
	- Números de identificação por tecnologia

		- CDMA: código ESN (sob a bateria; 11 dígitos numéricos ou 8 alfanuméricos)
		- GSM/iDEN: código IMEI (sob a bateria, tampa traseira ou gaveta do SIM; 15 dígitos; ou digitando *#06#)

	- Cartões SIM presentes: informar operadora, ICCID, IMSI e MSISDN

	- Descrever acessórios: carregadores, capas protetoras, bateria

- 7.2.2 Exames

	- Objetivo: obter dados da memória do aparelho
	- Ressalva importante: registros do aparelho ou SIM podem divergir dos registros da operadora

		- Apenas a operadora pode informar com precisão chamadas realizadas/recebidas e mensagens

	- Isolamento obrigatório do dispositivo de qualquer rede de comunicação

		- Risco de wipe remoto (Find my iPhone, Find my device, Find my mobile)
		- Estratégias de isolamento: remoção do(s) SIM, bolsa/caixa Faraday, ativação do modo avião

	- Cartões SIM e de memória: analisar separadamente com leitores específicos

		- Não inserir em aparelho diverso (risco de sobrescrita de informações)

	- Dados geralmente encontrados em aparelhos celulares

		- Anotações (data/hora de criação e modificação)
		- Aplicativos instalados (versão, data de aquisição e deleção)
		- Autopreenchimento (valores armazenados para formulários)
		- Bate-papos (participantes, conteúdo, data/hora)
		- Calendário (eventos, localização, data/hora)
		- Cartões móveis (cupons, embarque, ingressos, fidelidade, gift cards)
		- Conexões IP
		- Contas do usuário (Gmail, WhatsApp, Facebook, Dropbox etc.)
		- Contatos (incluindo dados de apps de bate-papo e do SIM)
		- Dados SIM (ICCID, IMSI, MSISDN, contatos da operadora)
		- Dicionários do usuário (palavras definidas ou digitadas)
		- Dispositivos Bluetooth (pareamentos: veículos, fones, etc.)
		- E-mails (data/hora, assunto, remetente/destinatário, corpo, anexos)
		- Eventos com energia (ligado/desligado, carga/descarga da bateria)
		- Gravações (aplicativo, localização, data/hora, autoria)
		- Histórico, bookmarks e cookies de navegação na Internet
		- Itens pesquisados (YouTube, mapas, navegadores etc.)
		- Locais do dispositivo (torres de celular, Wi-Fi, GPS, metadados de mídia)
		- Mensagens SMS e MMS (data/hora, origem/destino, conteúdo)
		- Notificações de aplicativos
		- Redes sem fio com que o telefone já teve contato
		- Registros de chamadas (efetuadas, recebidas e perdidas, inclusive via apps)
		- Senhas encontradas no telefone
		- Torres de célula (localização e informações técnicas)
		- Usuários do dispositivo (nome, foto, última conexão)
		- Utilização de aplicativos (nome, vezes iniciado, data do último uso)

	- Estrutura de armazenamento de smartphones semelhante à de mídias computacionais

		- Sistema de arquivos analisável; arquivos apagados recuperáveis com ferramentas específicas

	- Quatro formas de extração de dados de aparelhos celulares

		- Extração manual

			- Perito manuseia a interface do aparelho e registra por fotos, vídeos ou transcrição
			- Vantagem: não necessita ferramentas especiais
			- Desvantagem: só obtém informações diretamente visíveis; processo extremamente demorado

		- Extração lógica

			- Cópia dos arquivos e pastas armazenados logicamente no aparelho
			- Via ferramentas forenses disponíveis nas unidades de Criminalística
			- Mais fácil de ser suportada por ferramentas; retorna menor quantidade de dados
			- Não recupera dados apagados nem acessa área protegida da memória

		- Extração via sistema de arquivos

			- Acesso ao sistema de arquivos pelo aparelho através das ferramentas de extração
			- Permite recuperar informações apagadas, compreender estrutura de arquivos, histórico, apps
			- Permite analisar arquivos não decodificados pela ferramenta

		- Extração física

			- Cópia de toda a área de armazenamento físico do aparelho (mais próxima dos exames em computador)
			- Acesso à memória flash do aparelho via bootloaders desenvolvidos pelas ferramentas forenses
			- Duas fases: dumping da memória e decodificação
			- Mais abrangente em termos de dados extraídos; permite recuperação de arquivos apagados
			- Limitação: ferramenta pode não conseguir decodificar dados de determinado aplicativo

- 7.2.3 Dificuldades

	- Bateria

		- Recomendável garantir carga completa antes de iniciar o exame
		- Problemas comuns: baterias danificadas, degradadas, instáveis, inchadas
		- Pode ser necessária a substituição da bateria para viabilizar o exame
		- Abertura de modelos modernos exige ferramentas específicas, aquecimento controlado e conhecimento técnico
		- Toda intervenção física deve ser documentada (cadeia de custódia)
		- Alternativa menos invasiva: fonte de alimentação externa
		- Baterias danificadas podem representar risco de incêndio ou explosão

	- Código de travamento e senhas

		- Risco de apagamento automático após número pré-determinado de tentativas (Android e iOS)
		- Perito pode fazer tentativas controladas ou usar exploits
		- Sem sucesso: dados ainda podem ser obtidos do SIM Card e cartão de memória
		- Em alguns modelos: extração parcial de dados fora da área protegida por criptografia

	- Número da linha

		- No GSM: número da linha está associado ao SIM, não ao aparelho
		- Campo "Meu número" no celular pode conter valor inserido pelo usuário (≠ linha real do SIM)
		- Número da linha deve ser informado pela operadora via ICCID ou IMSI

	- Aparelho danificado

		- Danos físicos ou funcionais comuns: conector USB, display, outros componentes
		- Podem dificultar ou impedir acesso aos dados
		- Soluções possíveis: substituição temporária de componentes, limpeza de conectores, equipamentos específicos, assistência técnica especializada
		- Toda ação deve ser registrada detalhadamente (cadeia de custódia)

	- Erros durante a extração

		- Técnicas avançadas cada vez mais necessárias (desbloqueio de bootloader, root, jailbreak)
		- Riscos: falha no procedimento, comprometimento parcial ou total do dispositivo
		- Abordagem recomendada: progressiva, do menos invasivo para o mais invasivo
		- Documenta todo o procedimento adotado

- 7.2.4 Ferramentas Forenses

	- Diversas ferramentas disponíveis (variação em complexidade, custo e abrangência de modelos)
	- Ferramentas diferentes podem ter capacidades distintas de extração (complementam-se)
	- Perito não deve se limitar a uma única ferramenta
	- Ferramentas mais sofisticadas: extração lógica ou física via cabos ou equipamentos específicos
	- Destaques: Cellebrite Inseyets e Magnet GrayKey
### 7.3 Conceitos de Criptografia para Dispositivos Móveis

- Proteção de dados em smartphones: evolução dos mecanismos (senha simples → criptografia, áreas seguras, controle por hardware)
- 7.3.1 Tipos de Bloqueio de Acesso

	- Numérica (PIN)

		- 4 a 8 algarismos escolhidos pelo usuário
		- Segurança considerada média

	- Padrão geométrico

		- Padrão/"desenho" definido pelo usuário
		- Segurança considerada baixa (número limitado de padrões; usuário tende a escolher padrões simples)

	- Alfanumérica

		- Caracteres alfanuméricos; quantidade definida pelo usuário
		- Alta qualidade de proteção (senhas complexas com letras e algarismos)

	- Biométrica

		- Digital, íris ou reconhecimento facial
		- Normalmente combinada com PIN ou padrão geométrico
		- PIN/padrão exigido ao reiniciar ou após longo período sem desbloqueio

- 7.3.2 Criptografia do Aparelho Celular

	- Transforma informações legíveis em formato embaralhado acessível apenas com chave correta
	- Chave geralmente associada a senha, PIN ou biometria
	- Aplicada automaticamente nos dispositivos modernos
	- Conceitos básicos

		- Dado criptografado: informação convertida em formato ilegível
		- Chave criptográfica: elemento necessário para reverter ao formato original

	- 7.3.2.1 FDE - Full Disk Encryption (Criptografia de Disco Completo)

		- Todo o conteúdo do dispositivo protegido de forma única e integrada
		- Utiliza uma única chave principal

	- 7.3.2.2 FBE - File-Based Encryption (Criptografia Baseada em Arquivos)

		- Modelo mais avançado
		- Dados protegidos individualmente ou em grupos
		- Diferentes chaves criptográficas para diferentes dados

- 7.3.3 Estados de Criptografia (AFU x BFU)

	- Estado do aparelho no momento da apreensão: fator crítico para o sucesso da análise pericial
	- 7.3.3.1 BFU - Before First Unlock (Antes do Primeiro Desbloqueio)

		- Ocorre quando o aparelho foi ligado/reiniciado, mas ainda não foi desbloqueado pelo usuário
		- Consequência: dados fortemente protegidos; chaves principais de criptografia não carregadas na RAM

	- 7.3.3.2 AFU - After First Unlock (Após o Primeiro Desbloqueio)

		- Ocorre quando o usuário já desbloqueou o aparelho pelo menos uma vez após ligá-lo
		- Consequência: chaves de criptografia carregadas na RAM; acesso a muito mais dados possível

	- 7.3.3.3 Preservação do Estado AFU

		- Prioridade: evitar que o aparelho em AFU retorne ao estado BFU
		- Medidas práticas

			- Manter o aparelho ligado e com carga (power bank se necessário)
			- Ativar o modo avião
			- Desabilitar conexões de rede celular, Wi-Fi e Bluetooth
			- Usar bolsas de Faraday quando aplicável
			- Não desligar ou reiniciar sob nenhuma hipótese
			- Realizar a extração dos dados o mais rápido possível

		- Riscos da inobservância

			- Recebimento de comandos remotos de wipe
			- Perda do estado AFU por reinicialização automática após longo período sem desbloqueio

	- 7.3.3.4 Por que e quando manter o aparelho em estado AFU

		- Chaves de criptografia carregadas na RAM permitem acesso transparente a dados protegidos
		- Retorno ao BFU: chaves removidas da memória → dados inacessíveis mesmo com ferramentas avançadas
		- Dados acessíveis no AFU: mensagens, arquivos, histórico, dados de aplicativos, credenciais

### 7.4 Busca e Apreensão de Dispositivos Móveis

- Foco: preservação adequada dos vestígios digitais
- Objetivos: evitar bloqueios remotos, apagamento de informações ou alterações no conteúdo
- 7.4.1 Cenários de Apreensão de Dispositivos Móveis

	- Classificação pelo estado do aparelho e nível de acesso disponível
	- 7.4.1.1 Aparelho Ligado com Senha Fornecida

		- Ativar modo avião e confirmar bloqueio de conexões
		- Validar a senha sem alterar ou remover do aparelho
		- Verificar senhas específicas de aplicativos e recursos protegidos (WhatsApp, pasta segura)
		- Anotar todas as senhas descobertas
		- Desativar conteúdos temporários relevantes quando possível
		- Em iPhones: tentar desativar a proteção contra roubo
		- Ao final: desligar o aparelho

	- 7.4.1.2 Aparelho Desligado com Senha Fornecida

		- Remover e identificar os cartões SIM
		- Ligar o aparelho e ativar o modo avião
		- Validar se a senha fornecida está correta
		- Seguir o fluxo de aparelho ligado com senha
		- Registrar a senha nos documentos de apreensão

	- 7.4.1.3 Aparelho Ligado sem Senha Fornecida

		- Priorizar apreensão imediata se o aparelho estiver em uso
		- Ativar modo avião e tentar remover o bloqueio de acesso (se viável)
		- Buscar descobrir a senha com terceiros no local
		- Manter o aparelho ligado, isolado em bolsa de Faraday com alimentação contínua
		- Em iPhones: observar estado AFU/BFU e considerar envio rápido para extração

	- 7.4.1.4 Aparelho Desligado sem Senha Fornecida

		- Buscar obter a senha com pessoas no local
		- Se obtiver sucesso: seguir o fluxo de aparelho desligado com senha fornecida

	- 7.4.1.5 Aparelho Ligado sem Bloqueio Aparente

		- Ativar modo avião e verificar se há senha configurada nas definições
		- Se houver senha: tratar conforme cenário correspondente
		- Se não houver bloqueio: desligar o aparelho

## 8 LAUDO E ANEXOS DIGITAIS

### Estrutura básica do laudo de exame de vestígios digitais

- Descreve todos os procedimentos, resultados e forma de apresentação
- Itens típicos

	- Preâmbulo
	- Histórico (opcional)
	- Material
	- Objetivo
	- Exame
	- Respostas aos quesitos ou Conclusão
	- Considerações técnicas (apêndices)

### Formas de apresentação dos resultados

- Poucos arquivos selecionados: incorporados no corpo do laudo
- Grande quantidade ou tipos não visualizáveis em documento: exportados e gravados em mídia como anexo

	- Casos: arquivos executáveis, áudio, vídeo

- Vantagens do anexo em formato original

	- Grandes volumes de dados anexados
	- Facilidade de manipulação, navegação, busca por palavras-chave, ordenação e cálculos

### Problema central dos anexos digitais

- Garantir que ninguém possa replicar, inserir, alterar ou substituir arquivos sem deixar vestígios
- Necessidade de mecanismos de verificação de integridade e autenticidade

### 8.1 Garantia de Integridade e Autenticidade

- Integridade: garantir que arquivo não foi alterado (condição para aceitação de vestígios digitais)
- Procedimento nos laudos da PF

	- Hash calculado para cada arquivo do anexo
	- Resultado registrado em arquivo texto (ex.: hashes.txt) gravado na mídia
	- Lista contém relação de todos os arquivos e seus respectivos hashes em hexadecimal

- Verificação de integridade: possível a qualquer momento comparando os hashes
- Autenticidade da mídia

	- Hash do arquivo hashes.txt calculado e transcrito no corpo do laudo
	- Laudo assinado digitalmente

- Resultado: integridade dos arquivos + autenticidade da mídia vinculados ao laudo pericial digital assinado
### 8.2 Procedimentos para Geração do Anexo

- Passo a: Criação da lista de hashes

	- Usar software para gerar lista com hashes de todos os arquivos que serão gravados
	- Armazenar em arquivo texto (ex.: hashes.txt)
- Passo b: Cálculo do hash da lista de hashes

	- Calcular o hash do arquivo hashes.txt
	- Transcrever o valor calculado no corpo do laudo
- Passo c: Gravação dos arquivos no anexo

	- Gerar arquivo-contêiner (ISO, ZIP, E01 etc.) com todos os arquivos/subpastas do resultado + hashes.txt
	- Gravar na mídia que será encaminhada como anexo
	- Adotar providências para impedir alterações

		- Mídias óticas não regraváveis
		- Pendrives/HDs externos configurados como somente leitura (ex.: comando DiskPart)

### 8.3 Procedimentos para Verificação do Anexo

- Passo a: Cálculo da integridade da lista de hashes

	- Calcular hash do arquivo hashes.txt contido no anexo
	- Comparar com o valor presente no corpo do laudo

- Passo b: Cálculo da integridade dos arquivos

	- Calcular hash de todos os arquivos gravados na mídia
	- Comparar com os valores armazenados no hashes.txt

- Resultado esperado

	- Passo a: dois valores idênticos (laudo e recém-calculado)
	- Passo b: verificação correta de todos os arquivos sem nenhuma falha

- Com isso: autenticidade da mídia e integridade do conteúdo garantidas

*XMind - Trial Version*