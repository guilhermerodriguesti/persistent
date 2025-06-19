const questions = [
  {
    "text": "Na análise forense de um sistema Windows, o arquivo SAM (Security Account Manager) armazena os hashes das senhas de usuários locais. Para acessar seu conteúdo em uma análise post-mortem, é necessário também o arquivo SYSTEM, pois este contém a chave de boot (boot key) utilizada para criptografar os hashes no SAM.",
    "answer": "C",
    "comment": "Exato. O arquivo SAM (C:\\Windows\\System32\\config\\SAM) contém os hashes das senhas, mas eles são ofuscados/criptografados usando a SysKey. A SysKey, por sua vez, é derivada de informações armazenadas na hive do Registro SYSTEM (C:\\Windows\\System32\\config\\SYSTEM). Portanto, para que ferramentas como o pwdump ou samdump2 possam extrair os hashes do SAM em uma análise offline, a posse de ambos os arquivos é essencial.",
    "theme": "Análise Forense Windows"
  },
  {
    "text": "A técnica de Chip-off em forense de dispositivos móveis consiste em dessoldar fisicamente o chip de memória (e.g., eMMC ou UFS) da placa-mãe do aparelho para lê-lo em um dispositivo externo. Trata-se de uma técnica invasiva e destrutiva, utilizada como último recurso.",
    "answer": "C",
    "comment": "A técnica de Chip-off é exatamente isso: a remoção física do chip de armazenamento. É considerada destrutiva porque o processo de dessoldagem e leitura pode danificar permanentemente o chip ou a placa, inutilizando o dispositivo. É um método de último recurso, empregado quando outros métodos de aquisição (lógica, sistema de arquivos, física via software) falham, especialmente em casos de aparelhos danificados ou com sistemas de segurança muito robustos.",
    "theme": "Forense Mobile"
  },
  {
    "text": "O formato de imagem forense AFF (Advanced Forensics Format) é um formato de código aberto que oferece vantagens sobre o formato DD (raw), como a capacidade de armazenar metadados do caso e o uso de compressão, mas, ao contrário do formato E01, não permite o armazenamento de hashes para verificação de integridade dos dados.",
    "answer": "E",
    "comment": "O formato AFF (desenvolvido por Simson Garfinkel) é, de fato, de código aberto e superior ao DD por permitir compressão e armazenamento de metadados. No entanto, a afirmação de que ele não armazena hashes para verificação de integridade está incorreta. Assim como o E01, o AFF também armazena hashes (MD5 e/ou SHA1) tanto para a imagem inteira quanto para blocos individuais de dados, garantindo a integridade da evidência.",
    "theme": "Formatos Forenses"
  },
  {
    "text": "Ataques de DLL Hijacking (sequestro de DLL) ocorrem quando um atacante substitui uma DLL legítima por uma maliciosa ou coloca uma DLL maliciosa com o mesmo nome de uma DLL legítima em um local onde ela será carregada primeiro, devido à ordem de busca de DLLs do Windows.",
    "answer": "C",
    "comment": "Essa é a definição precisa de DLL Hijacking. O sistema operacional Windows tem uma ordem de busca predefinida para carregar bibliotecas dinâmicas (DLLs). Se um aplicativo solicita o carregamento de uma DLL sem especificar seu caminho completo, um atacante pode colocar uma versão maliciosa em um diretório que é verificado antes do diretório da DLL legítima (como o próprio diretório do executável). Isso faz com que o programa carregue e execute o código malicioso.",
    "theme": "Análise Forense Windows"
  },
  {
    "text": "A análise forense de sistemas de arquivos HFS+ (usado em versões mais antigas do macOS e iOS) revela que ele utiliza um arquivo chamado Catalog File para manter os metadados de todos os arquivos e diretórios, de forma similar à MFT do NTFS.",
    "answer": "C",
    "comment": "O HFS+ (Hierarchical File System Plus) organiza seus metadados em vários arquivos especiais. O principal deles é o Catalog File, que contém registros para cada arquivo e diretório no volume, detalhando atributos como nome, tamanho, timestamps e a localização dos blocos de dados. Ele é o análogo funcional da Master File Table (MFT) do NTFS. Outros arquivos importantes no HFS+ incluem o Extents Overflow File e o Attributes File.",
    "theme": "Análise Forense Windows"
  },
  {
    "text": "A técnica de Data Wiping (limpeza de dados), que consiste em sobrescrever o disco com padrões de zeros ou dados aleatórios, garante a destruição segura e irrecuperável dos dados em HDDs magnéticos, mas é menos eficaz e pode degradar a vida útil de SSDs devido ao wear leveling e à over-provisioning.",
    "answer": "C",
    "comment": "Em HDDs, o data wiping é direto: os setores lógicos correspondem aos físicos. Em SSDs, o controlador gerencia a localização física dos dados. O wear leveling move os dados, e a over-provisioning mantém blocos de reserva inacessíveis ao sistema operacional. Uma simples sobrescrita pode não atingir todas as cópias dos dados ou os blocos de reserva. Por isso, para SSDs, o comando ATA Secure Erase, que instrui o próprio controlador a apagar todos os blocos, é o método mais eficaz.",
    "theme": "Forense Mobile"
  },
  {
    "text": "O protocolo SMB (Server Message Block) é utilizado principalmente para o compartilhamento de arquivos, impressoras e portas seriais em redes Windows. A análise forense do tráfego SMB pode revelar nomes de arquivos acessados, transferências de dados e tentativas de autenticação.",
    "answer": "C",
    "comment": "O SMB (ou CIFS - Common Internet File System) é o protocolo fundamental para o funcionamento de redes locais Windows. A análise de pacotes de uma captura de rede (PCAP) contendo tráfego SMB (porta 445/TCP) é extremamente informativa, permitindo ao perito ver quais usuários se autenticaram, quais arquivos foram lidos, escritos ou deletados em compartilhamentos de rede, e até mesmo extrair os próprios arquivos transferidos.",
    "theme": "Análise Forense Windows"
  },
  {
    "text": "Em forense de blockchain, é possível rastrear transações de criptomoedas como o Bitcoin porque todas as transações são públicas e registradas em um livro-razão distribuído. No entanto, o sistema é pseudoanônimo, pois os endereços não estão diretamente ligados a identidades do mundo real.",
    "answer": "C",
    "comment": "Essa é a dualidade fundamental da forense de criptomoedas públicas como o Bitcoin. A transparência do blockchain permite que qualquer pessoa veja todas as transações entre endereços. A dificuldade está em conectar um endereço (uma string alfanumérica) a uma pessoa ou entidade real. A análise forense, muitas vezes com o auxílio de empresas especializadas (como a Chainalysis), foca em agrupar endereços (heurística de clustering) e em encontrar pontos de conexão com o mundo real, como transações com exchanges de criptomoedas que exigem identificação de clientes (KYC).",
    "theme": "Blockchain"
  },
  {
    "text": "O UserAssist é uma chave do Registro do Windows que registra a execução de malwares em modo de linha de comando, mas não registra a execução de aplicativos com interface gráfica (GUI).",
    "answer": "E",
    "comment": "O UserAssist (localizado na hive NTUSER.DAT de cada usuário) registra a execução de programas baseados em GUI, atalhos e applets do painel de controle. Ele registra o nome do executável, a contagem de execuções e o timestamp da última execução. A informação é armazenada de forma ofuscada (usando a cifra ROT13), mas é facilmente decodificada por ferramentas forenses. Ele não é projetado para rastrear a execução de comandos em modo texto.",
    "theme": "Análise Forense Windows"
  },
  {
    "text": "A virtualização aninhada (Nested Virtualization) permite executar uma máquina virtual dentro de outra máquina virtual. Do ponto de vista forense, isso adiciona uma camada de complexidade, pois a evidência pode estar contida em um arquivo de disco virtual que reside dentro de outro arquivo de disco virtual.",
    "answer": "C",
    "comment": "A virtualização aninhada cria um cenário de boneca russa para o perito forense. A análise requer a escavação através das camadas. Por exemplo, um perito pode precisar primeiro analisar a imagem de disco do computador hospedeiro para encontrar o arquivo de disco da primeira VM (ex: um .vmdk), depois montar esse .vmdk para analisar seu sistema de arquivos e encontrar o arquivo de disco da segunda VM (a VM aninhada), para só então analisar as evidências contidas nela.",
    "theme": "Virtualização"
  },
  {
    "text": "O SDB (Shim Cache, também conhecido como AppCompatCache) é um artefato do sistema operacional Windows que armazena informações sobre a execução de aplicativos para fins de compatibilidade. Forensicamente, ele pode ser usado para determinar se um programa foi executado, mesmo que o executável tenha sido deletado.",
    "answer": "C",
    "comment": "O Shim Cache é um componente do Application Compatibility Database (SDB). Ele armazena metadados de executáveis que foram executados no sistema, incluindo o caminho completo do arquivo, o tamanho e o timestamp da última modificação do arquivo. Essas informações são cacheadas na hive SYSTEM do Registro. Como o cache persiste mesmo após a exclusão do arquivo, ele se torna uma prova crucial da execução de um programa (como um malware que tentou se limpar).",
    "theme": "Análise Forense Windows"
  },
  {
    "text": "A análise forense de sistemas SCADA (Supervisory Control and Data Acquisition) é idêntica à de sistemas de TI corporativos, utilizando as mesmas ferramentas e focando nos mesmos tipos de artefatos, como logs de web servers e e-mails.",
    "answer": "E",
    "comment": "A forense em ambientes de tecnologia operacional (OT), como sistemas SCADA e ICS, é uma disciplina especializada. Embora compartilhe princípios com a forense de TI, ela lida com protocolos proprietários (ex: Modbus, DNP3), hardware especializado (PLCs, RTUs), sistemas operacionais de tempo real e, o mais importante, a prioridade é a segurança e a continuidade do processo físico (evitar acidentes ou paradas de produção). A análise foca em logs de processo, históricos de alarmes e configurações de controladores, que são artefatos distintos dos ambientes de TI.",
    "theme": "Sistemas de Arquivos"
  },
  {
    "text": "O conceito de Live Forensics (forense em sistema vivo) viola o princípio de preservação da evidência, pois sempre altera o estado do sistema, e por isso nunca deve ser aplicado em uma investigação criminal.",
    "answer": "E",
    "comment": "Embora a Live Forensics altere minimamente o estado do sistema (pela própria execução das ferramentas de coleta), ela é frequentemente necessária e justificada. A Ordem de Volatilidade dita a coleta de dados efêmeros, como o conteúdo da memória RAM e conexões de rede ativas. Se o sistema fosse desligado, essa evidência crucial seria irremediavelmente perdida. O procedimento deve ser realizado com cuidado, usando ferramentas confiáveis a partir de mídias externas e documentando cada passo, para minimizar e justificar as alterações.",
    "theme": "Telecomunicações"
  },
  {
    "text": "O exploit checkm8 (pronuncia-se checkmate) é uma vulnerabilidade de hardware irreparável por software (unpatchable) na BootROM de milhões de dispositivos iOS (do iPhone 4S ao iPhone X). Ele permite contornar a segurança do sistema para realizar uma aquisição física (BFU - Before First Unlock) e extrair parte do sistema de arquivos.",
    "answer": "C",
    "comment": "O checkm8 foi um marco na forense de iOS. Por ser uma falha na BootROM (o primeiro código executado, que é gravado no hardware), a Apple não pode corrigi-la com uma atualização de software nos dispositivos afetados. Ferramentas forenses como as da Cellebrite e Grayshift utilizam esse exploit para obter um nível de acesso profundo ao dispositivo, permitindo uma extração física parcial mesmo antes de o usuário ter digitado a senha pela primeira vez após uma reinicialização (BFU).",
    "theme": "Forense Mobile"
  },
  {
    "text": "A análise de Thumbnails (miniaturas), como o thumbs.db no Windows XP ou o cache centralizado no Windows 7/10, pode fornecer evidências visuais de arquivos de imagem ou vídeo que já foram deletados do sistema.  ( ) Certo (  ) Errado  Gabarito e Comentário: Gabarito: Certo Comentário: O sistema operacional cria miniaturas de imagens, vídeos e documentos para exibi-las rapidamente no explorador de arquivos. Essas miniaturas são armazenadas em um cache. Mesmo que o arquivo original seja deletado, sua miniatura pode permanecer nesse cache por um longo tempo, fornecendo ao perito uma prova visual da existência anterior do arquivo e uma ideia de seu conteúdo.  Questão 86 O sistema de arquivos Btrfs (B-tree File System) possui funcionalidades nativas de snapshot e subvolumes, que, do ponto de vista forense, podem preservar estados anteriores do sistema de arquivos, permitindo a recuperação de arquivos modificados ou deletados de forma similar às Shadow Copies do Windows.",
    "answer": "C",
    "comment": "Btrfs é um sistema de arquivos moderno para Linux que integra funcionalidades de gerenciador de volumes. Seu mecanismo copy-on-write (CoW) facilita a criação de snapshots instantâneos e com baixo custo de armazenamento. Esses snapshots são cópias de um subvolume em um determinado ponto no tempo. Para um perito, analisar os snapshots existentes em um sistema pode revelar versões antigas de arquivos ou arquivos que foram deletados no sistema de arquivos principal.",
    "theme": "Análise Forense Windows"
  },
  {
    "text": "A técnica forense de Log Correlation (correlação de logs) consiste em analisar e comparar logs de múltiplas fontes (ex: firewall, servidor web, logs do Windows, logs de um switch) para construir uma linha do tempo unificada e mais completa de um incidente de segurança.",
    "answer": "C",
    "comment": "Um único log raramente conta a história completa. A correlação de logs é uma técnica fundamental na análise forense de redes e sistemas. Ao cruzar informações de diferentes dispositivos e sistemas, o perito pode seguir a trilha de um atacante através da rede, entender a sequência de eventos, identificar a origem do ataque e determinar a extensão do comprometimento. Ferramentas SIEM (Security Information and Event Management) automatizam parte desse processo.",
    "theme": "Análise Forense Windows"
  },
  {
    "text": "A análise estática de malware envolve a execução do código malicioso em um ambiente controlado e monitorado (sandbox) para observar seu comportamento, como as alterações que ele faz no sistema de arquivos, no registro e as conexões de rede que ele estabelece.",
    "answer": "E",
    "comment": "A descrição se refere à análise dinâmica de malware. A análise estática, por outro lado, examina o arquivo de malware sem executá-lo. Isso inclui técnicas como a análise de strings contidas no executável, a verificação de suas seções e cabeçalhos (formato PE), a identificação de bibliotecas e funções importadas, e a desmontagem (disassembly) do código para entender sua lógica.",
    "theme": "Forense Mobile"
  },
  {
    "text": "O Server Name Indication (SNI) é uma extensão do protocolo TLS que permite a um cliente indicar para qual nome de domínio ele está tentando se conectar no início do processo de handshake. Isso permite a um perito, ao analisar um tráfego de rede criptografado, identificar o site de destino, mesmo sem ter a chave privada do servidor.",
    "answer": "C",
    "comment": "O SNI é um campo enviado em texto claro durante o Client Hello, a primeira mensagem do handshake TLS. Ele foi criado para permitir que um mesmo servidor com um único endereço IP hospede múltiplos sites com certificados TLS diferentes. Para a forense de redes, o SNI é uma fonte de informação valiosíssima, pois revela o nome do domínio de destino (ex: www.site-malicioso.com) antes que o túnel criptografado seja estabelecido.",
    "theme": "Criptografia"
  },
  {
    "text": "A Linkability (Lincabilidade) é uma propriedade desejável em sistemas que visam o anonimato, pois permite associar diferentes ações ou itens de interesse ao mesmo indivíduo, facilitando a investigação.",
    "answer": "E",
    "comment": "A Linkability é o oposto do que se busca em sistemas de anonimato. Ela se refere à capacidade de um adversário (ou perito) de ligar (associar) duas ou mais observações (ações, mensagens, transações) como pertencentes à mesma entidade. Sistemas como Tor e criptomoedas focadas em privacidade (como Monero) implementam mecanismos para quebrar ou dificultar a linkability, tornando o rastreamento mais difícil.",
    "theme": "Análise Forense Windows"
  },
  {
    "text": "Em um ataque de SQL Injection, um atacante insere comandos SQL maliciosos em campos de entrada de uma aplicação web. Um tipo comum desse ataque é o Union-based SQL Injection, onde o atacante utiliza o operador UNION para combinar o resultado de uma consulta legítima com os resultados de uma consulta forjada por ele para extrair dados de outras tabelas do banco de dados.",
    "answer": "C",
    "comment": "O Union-based SQL Injection é uma técnica clássica e poderosa. O atacante explora uma vulnerabilidade para anexar uma nova consulta SELECT à original usando o operador UNION. Para funcionar, a consulta do atacante deve ter o mesmo número de colunas e tipos de dados compatíveis com a consulta original. Se bem-sucedido, o resultado da consulta maliciosa será exibido na página da aplicação, permitindo a extração de dados sensíveis.",
    "theme": "Forense Mobile"
  },
  {
    "text": "A análise de Alternate Data Streams (ADS) no sistema de arquivos NTFS é de pouca relevância forense, pois eles são utilizados apenas para armazenar metadados inócuos do sistema e não podem conter arquivos completos ou código executável.",
    "answer": "E",
    "comment": "Alternate Data Streams (ADS) são uma característica poderosa e, do ponto de vista forense, perigosa do NTFS. Um ADS permite que mais de um fluxo de dados seja associado a um nome de arquivo, de forma oculta ao Windows Explorer e a muitos comandos de linha. Malwares frequentemente utilizam ADS para esconder seus componentes, anexando um executável malicioso a um arquivo de texto aparentemente inofensivo. Portanto, a verificação de ADS é um passo crucial em qualquer exame forense de um sistema Windows.",
    "theme": "Análise Forense Windows"
  },
  {
    "text": "A Ordem de Volatilidade (Order of Volatility) estabelece que, ao coletar dados de um sistema, deve-se priorizar o conteúdo do disco rígido, pois é o mais propenso a ser sobrescrito por processos do sistema.",
    "answer": "E",
    "comment": "A afirmação inverte o princípio. A Ordem de Volatilidade dita a coleta dos dados mais voláteis (que se perdem mais rápido) para os menos voláteis. A sequência correta de prioridade é: 1) Registradores da CPU e cache; 2) Memória RAM e tabelas de roteamento; 3) Dados em trânsito na rede; 4) Arquivos temporários em disco; 5) Conteúdo do disco rígido (dados permanentes); 6) Mídias de backup e arquivamento remoto.",
    "theme": "Informática Forense"
  },
  {
    "text": "Um Logic Bomb (Bomba Lógica) é um tipo de código malicioso que permanece inativo em um sistema até que uma condição específica seja atendida, como uma data/hora específica ou a ausência de um determinado usuário no sistema. Ao ser ativada, ela executa sua carga maliciosa.",
    "answer": "C",
    "comment": "Essa é a definição exata de uma Logic Bomb. Sua característica principal é o gatilho condicional. Ela é frequentemente usada por insiders mal-intencionados, que programam a bomba para detonar (ex: deletar arquivos críticos) em uma data futura ou se seu próprio nome for removido da folha de pagamento, dificultando a atribuição do ato.",
    "theme": "Forense Mobile"
  },
  {
    "text": "A análise forense de Web Shells envolve a busca por scripts maliciosos (em linguagens como PHP, ASP, JSP) que foram enviados para um servidor web comprometido. Esses scripts fornecem a um atacante uma interface para executar comandos arbitrários no servidor.",
    "answer": "C",
    "comment": "Um Web Shell é uma das ferramentas de pós-exploração mais comuns após um servidor web ser comprometido (por exemplo, através de uma vulnerabilidade de upload de arquivo). Ele age como um terminal via web, permitindo que o atacante navegue pelo sistema de arquivos, execute comandos, configure proxies e utilize o servidor como um pivô para atacar a rede interna. A detecção envolve procurar por arquivos de script suspeitos nos diretórios do servidor web.",
    "theme": "Forense Mobile"
  },
  {
    "text": "O padrão FIDO2/WebAuthn, que promove a autenticação sem senha, baseia-se em criptografia simétrica, onde uma única chave secreta é compartilhada entre o autenticador do usuário e o servidor remoto.",
    "answer": "E",
    "comment": "O padrão FIDO2/WebAuthn baseia-se em criptografia de chave pública (assimétrica). Durante o registro, o autenticador (ex: uma chave de segurança ou um celular) gera um par de chaves: uma chave privada, que nunca sai do dispositivo, e uma chave pública, que é enviada ao servidor. Para se autenticar, o servidor envia um desafio, que o autenticador assina usando a chave privada. O servidor verifica a assinatura com a chave pública. Isso evita o compartilhamento de segredos e protege contra phishing.",
    "theme": "Criptografia"
  },
  {
    "text": "No contexto da forense de macOS, o Unified Log (Log Unificado), introduzido a partir do macOS Sierra, centraliza os logs de praticamente todos os processos do sistema e dos aplicativos em um formato binário e estruturado, que pode ser consultado pela ferramenta de linha de comando log.",
    "answer": "C",
    "comment": "O Unified Log representou uma grande mudança na forma como o macOS lida com logs. Ele substituiu a miríade de arquivos de log em texto plano por um sistema centralizado, de alta performance e com armazenamento em formato binário (.tracev3). Isso torna a análise mais complexa do que um simples grep, exigindo o uso de ferramentas específicas como o comando log ou o Console.app para filtrar e extrair informações relevantes, mas também oferece um registro de atividades muito mais rico e detalhado.",
    "theme": "Informática Forense"
  },
  {
    "text": "Uma Rainbow Table é um mecanismo de ataque que funciona para qualquer algoritmo de hash e é sempre mais eficiente do que um ataque de força bruta, independentemente do uso de salting.",
    "answer": "E",
    "comment": "A afirmação contém múltiplos erros. Uma Rainbow Table é específica para um algoritmo de hash (uma tabela para MD5 não funciona para SHA-256). Seu principal objetivo é criar um compromisso de tempo-memória, sendo mais rápida que a força bruta para hashes não salgados. No entanto, o uso de salting (adicionar um valor aleatório à senha antes de gerar o hash) torna as Rainbow Tables ineficazes, pois seria necessário gerar uma tabela para cada salt possível, o que é computacionalmente inviável.",
    "theme": "Criptografia"
  },
  {
    "text": "A análise de memória RAM pode revelar chaves de criptografia de disco (como as do BitLocker) que estão em uso, permitindo que um perito desbloqueie e acesse o conteúdo de um disco criptografado.",
    "answer": "C",
    "comment": "Quando um volume criptografado (como um disco com BitLocker) está montado e em uso, suas chaves de criptografia residem na memória RAM para que o sistema possa ler e escrever dados em tempo real. A coleta de um dump da memória RAM de um sistema em execução pode permitir ao perito localizar e extrair essas chaves, utilizando ferramentas específicas, para posteriormente descriptografar uma imagem forense do disco.",
    "theme": "Criptografia"
  },
  {
    "text": "A esteganálise é o processo de criar mensagens esteganográficas, ou seja, ocultar dados dentro de outros arquivos.",
    "answer": "E",
    "comment": "A descrição se refere à esteganografia. A esteganálise é a arte e ciência de detectar mensagens esteganográficas. Enquanto a esteganografia oculta a informação, a esteganálise tenta descobrir se um arquivo (como uma imagem ou áudio) contém dados ocultos, analisando padrões estatísticos, anomalias no arquivo ou usando outras técnicas para revelar a mensagem secreta.",
    "theme": "Esteganografia"
  },
  {
    "text": "O protocolo ICMP (Internet Control Message Protocol) é utilizado para transferência de dados de usuários, como o download de arquivos ou o envio de e-mails.",
    "answer": "E",
    "comment": "O ICMP não é projetado para transferência de dados de usuários. Sua função é enviar mensagens de controle e erro na rede, sendo parte integral do conjunto de protocolos IP. Exemplos clássicos são os comandos ping (que usa mensagens ICMP Echo Request/Reply) e traceroute. Embora possa ser abusado para criar túneis de dados (ICMP tunneling), essa não é sua função legítima. Protocolos como FTP, HTTP e SMTP são usados para transferência de dados de usuários.",
    "theme": "Forense Mobile"
  },
  {
    "text": "Em forense de dispositivos IoT (Internet of Things), as evidências são geralmente encontradas em discos rígidos de alta capacidade e em sistemas de arquivos complexos como NTFS ou APFS.",
    "answer": "E",
    "comment": "A forense de IoT apresenta desafios únicos justamente pelo oposto. Dispositivos IoT (câmeras, assistentes virtuais, sensores) geralmente possuem recursos computacionais limitados: pouca memória RAM, armazenamento em chips de memória flash de baixa capacidade (eMMC, NAND) e, frequentemente, utilizam sistemas de arquivos embarcados e mais simples (como SquashFS, JFFS2). A evidência é volátil e muitas vezes só pode ser acessada via rede ou interfaces de hardware específicas (JTAG, UART).",
    "theme": "Análise Forense Windows"
  },
  {
    "text": "A Write Role-Based Access Control (WRAC) é um modelo de cadeia de custódia que propõe diferentes níveis de permissão (funções) para os peritos, como Coletor, Analista e Revisor, garantindo que um indivíduo só possa executar as tarefas autorizadas para sua função.",
    "answer": "C",
    "comment": "O modelo WRAC é uma abordagem moderna para gerenciar a cadeia de custódia em laboratórios forenses. Ao invés de um controle monolítico, ele aplica o princípio de privilégio mínimo, onde cada participante do processo tem um papel definido com permissões específicas. Isso aumenta a segurança e a integridade do processo, pois um perito com o papel de Coletor, por exemplo, pode não ter permissão para analisar ou modificar a evidência, apenas para registrá-la e armazená-la.",
    "theme": "Legislação"
  },
  {
    "text": "O file system tunneling é uma característica de sistemas operacionais que preserva os timestamps de criação de um arquivo por um curto período após ele ser salvo, fechado e reaberto rapidamente, o que pode confundir um perito se ele não estiver ciente desse comportamento.",
    "answer": "C",
    "comment": "O file system tunneling (ou tunneling de sistema de arquivos) é um mecanismo projetado para garantir que, ao salvar um arquivo em um editor (operação que geralmente envolve criar um arquivo temporário, deletar o original e renomear o temporário), os metadados do arquivo original, como seu timestamp de criação, sejam preservados. Forensicamente, isso é importante porque o timestamp de criação pode não refletir a hora da última modificação, como se poderia esperar intuitivamente.",
    "theme": "Análise Forense Windows"
  },
  {
    "text": "A análise de Windows Event Logs (Logs de Eventos do Windows) é uma fonte primária de evidências. O log Segurança, por exemplo, pode registrar tentativas de logon (bem-sucedidas e falhas), criação de contas e acesso a arquivos e objetos, desde que a auditoria esteja habilitada.",
    "answer": "C",
    "comment": "Os Logs de Eventos do Windows (arquivos .evtx) são cruciais. Os três logs principais são: Sistema (eventos do sistema e drivers), Aplicativo (eventos de programas) e Segurança. O log de Segurança é especialmente importante, mas sua utilidade depende criticamente das políticas de auditoria configuradas. Sem a auditoria habilitada para eventos específicos (como o logon de contas, que é o Event ID 4624), nenhuma informação será registrada.",
    "theme": "Análise Forense Windows"
  },
  {
    "text": "O Process Hollowing é uma técnica de evasão de defesas em que um malware inicia um processo legítimo em estado suspenso, substitui o código desse processo na memória pelo seu próprio código malicioso e, em seguida, retoma a execução do processo.",
    "answer": "C",
    "comment": "Essa é a definição exata de Process Hollowing. É uma forma de injeção de processo em que o malware se mascara como um processo confiável (ex: svchost.exe, explorer.exe). Para defesas baseadas em monitoramento de processos, a atividade maliciosa parecerá originar-se de um processo legítimo, tornando a detecção mais difícil. A análise de memória é fundamental para identificar essa técnica, ao encontrar um código na memória de um processo que não corresponde ao seu executável em disco.",
    "theme": "Forense Mobile"
  },
  {
    "text": "A Lei nº 13.964/2019 (Pacote Anticrime) estabelece que a coleta dos vestígios deverá ser realizada, preferencialmente, por perito oficial, que dará o encaminhamento necessário para a central de custódia, mesmo que isso implique em atraso na coleta.",
    "answer": "E",
    "comment": "O Art. 158-C do CPP, introduzido pela lei, afirma que a coleta deve ser realizada preferencialmente por perito oficial. Contudo, o parágrafo primeiro do mesmo artigo estabelece que, na falta de perito oficial, a coleta pode ser realizada por qualquer agente público, que deverá encaminhar o material para a central de custódia. A prioridade é a preservação do vestígio, evitando que ele se perca, mesmo que o coletor não seja um perito.",
    "theme": "Forense Mobile"
  },
  {
    "text": "Silver Ticket é uma técnica de ataque em ambientes Active Directory que permite a um atacante forjar um tíquete de serviço Kerberos (TGS), concedendo acesso a um serviço específico (como compartilhamentos de arquivos - CIFS, ou agendador de tarefas) em um servidor específico.",
    "answer": "C",
    "comment": "Diferente do Golden Ticket, que compromete todo o domínio ao forjar um TGT, o Silver Ticket é mais direcionado e discreto. Para criá-lo, o atacante precisa do hash da senha da conta de serviço da máquina que hospeda o serviço alvo (não da conta krbtgt). Com isso, ele pode forjar um TGS válido para aquele serviço, contornando a necessidade de se comunicar com o Controlador de Domínio e tornando o ataque mais difícil de detectar.",
    "theme": "Informática Forense"
  },
  {
    "text": "O Disk-at-a-time e o File-at-a-time são dois modos de operação da criptografia de disco completo (FDE - Full Disk Encryption).",
    "answer": "E",
    "comment": "Esses termos não se referem a modos de FDE. Eles descrevem estratégias de backup. Disk-at-a-time (ou image-level) cria uma imagem completa do disco, enquanto File-at-a-time (file-level) faz o backup de arquivos e pastas individuais. A FDE opera em um nível inferior, criptografando setores ou blocos do disco em tempo real, de forma transparente para o sistema de arquivos e para as aplicações de backup.",
    "theme": "Criptografia"
  },
  {
    "text": "A análise de artefatos MTP (Media Transfer Protocol) em um sistema Windows pode revelar quais dispositivos móveis (como celulares Android) foram conectados ao computador e quais arquivos foram transferidos entre eles.",
    "answer": "C",
    "comment": "Quando um celular Android é conectado a um PC Windows, ele frequentemente usa o protocolo MTP para a transferência de arquivos. O Windows registra informações sobre esses dispositivos e as operações realizadas. A análise de chaves do Registro associadas a dispositivos MTP pode revelar o nome do dispositivo, seu número de série e, em alguns casos, logs que indicam as operações de transferência de arquivos, fornecendo uma trilha de auditoria valiosa.",
    "theme": "Análise Forense Windows"
  },
  {
    "text": "O pagefile.sys do Windows armazena apenas dados de aplicativos, enquanto o swapfile.sys, introduzido no Windows 8, armazena exclusivamente dados de aplicativos da Plataforma Universal do Windows (UWP), também conhecidos como Metro apps.",
    "answer": "C",
    "comment": "Essa é a distinção correta. Com a introdução dos aplicativos Metro/UWP, a Microsoft criou um novo arquivo de paginação, o swapfile.sys, para gerenciar a memória desses aplicativos de forma mais eficiente, lidando com a suspensão e retomada rápidas. O pagefile.sys tradicional continua sendo usado para a memória virtual de aplicativos de desktop convencionais. Ambos os arquivos são fontes valiosas de evidências forenses.",
    "theme": "Análise Forense Windows"
  },
  {
    "text": "O Windows Subsystem for Linux (WSL) cria um ambiente Linux que é completamente isolado do sistema de arquivos NTFS do Windows hospedeiro, tornando impossível para processos do WSL acessarem ou modificarem arquivos no Windows.",
    "answer": "E",
    "comment": "O WSL é projetado para uma interoperabilidade profunda. Processos executados dentro de uma distribuição WSL podem acessar e modificar arquivos no sistema de arquivos do Windows (NTFS), que é montado automaticamente (ex: em /mnt/c). Da mesma forma, o Windows Explorer e outros aplicativos do Windows podem acessar o sistema de arquivos da distribuição Linux (ex: \\\\wsl$\\Ubuntu\\home). Essa interoperabilidade, embora útil, cria novos vetores de ataque e complexidades para a análise forense.",
    "theme": "Análise Forense Windows"
  },
  {
    "text": "A técnica de Frequency Analysis (Análise de Frequência) em criptoanálise clássica explora o fato de que, em qualquer idioma, certas letras e combinações de letras aparecem com frequências distintas. Ela é eficaz contra cifras de substituição monoalfabética, como a Cifra de César.",
    "answer": "C",
    "comment": "A análise de frequência é a pedra angular da quebra de cifras de substituição simples. Em português, por exemplo, a letra A é a mais comum. Em um texto cifrado com uma cifra de substituição, o criptoanalista conta a frequência de cada símbolo cifrado. O símbolo mais frequente provavelmente corresponde a A, o segundo mais frequente a E, e assim por diante. Cifras polialfabéticas (como a Cifra de Vigenère) foram criadas para derrotar essa técnica.",
    "theme": "Sistemas de Arquivos"
  },
  {
    "text": "A ferramenta photorec é um software de file carving que recupera arquivos com base em suas assinaturas, mas seu nome indica que ela é capaz de recuperar apenas arquivos de imagem (fotos).",
    "answer": "E",
    "comment": "O nome photorec (Photo Recovery) é histórico e enganoso. Embora tenha sido criado inicialmente para recuperar fotos, a ferramenta hoje suporta centenas de tipos de arquivos diferentes, incluindo documentos (ZIP, Office), vídeos e muitos outros formatos. Ela funciona ignorando o sistema de arquivos e procurando por assinaturas de dados conhecidas para recuperar os arquivos, sendo uma das ferramentas de file carving de código aberto mais populares e eficazes.",
    "theme": "Informática Forense"
  },
  {
    "text": "A Doutrina do Fruto da Árvore Envenenada (Fruit of the Poisonous Tree Doctrine), aplicável no direito brasileiro, estabelece que, se uma prova for obtida por meios ilícitos (a árvore envenenada), todas as provas que dela derivarem (os frutos) também serão consideradas ilícitas e inadmissíveis no processo.",
    "answer": "C",
    "comment": "Essa doutrina, importada do direito norte-americano e positivada no Art. 157, § 1º, do Código de Processo Penal, é um princípio fundamental do direito processual penal. Se a evidência inicial (ex: uma confissão obtida sob tortura ou uma apreensão de computador sem mandado judicial) for ilícita, todas as outras evidências descobertas como consequência direta da primeira também serão contaminadas. Existem exceções, como a da fonte independente ou da descoberta inevitável.",
    "theme": "Forense Mobile"
  },
  {
    "text": "O sistema de arquivos ReFS (Resilient File System) da Microsoft foi projetado para substituir o NTFS em todos os cenários de uso, incluindo como volume de boot do sistema operacional Windows.",
    "answer": "E",
    "comment": "Embora o ReFS ofereça vantagens sobre o NTFS em termos de resiliência a corrupção de dados e escalabilidade para grandes volumes, ele foi projetado para usos específicos, principalmente como um sistema de arquivos para armazenamento de dados em servidores (servidores de arquivos, armazenamento de VMs Hyper-V). Atualmente, o ReFS não pode ser usado como volume de boot para o sistema operacional Windows; essa função ainda é exclusiva do NTFS.",
    "theme": "Análise Forense Windows"
  },
  {
    "text": "Na análise forense de um ataque de phishing, é crucial examinar os cabeçalhos completos do e-mail recebido pela vítima, pois eles podem conter o endereço IP real do servidor que originou a mensagem, mesmo que o campo From: (De:) tenha sido falsificado.",
    "answer": "C",
    "comment": "O campo From: em um e-mail é trivialmente falsificável. A verdadeira trilha de um e-mail está nos cabeçalhos Received:, que são adicionados por cada servidor de e-mail (MTA) que processa a mensagem em seu caminho. Ao analisar esses cabeçalhos de baixo para cima, um perito pode rastrear o caminho reverso do e-mail e, frequentemente, identificar o endereço IP do primeiro servidor que o injetou na internet, que é uma pista fundamental sobre a origem do ataque.",
    "theme": "Blockchain"
  },
  {
    "text": "A análise forense de dispositivos que utilizam wearable technology (tecnologia vestível), como smartwatches e pulseiras de fitness, é inviável, pois esses dispositivos não armazenam nenhum dado localmente, transmitindo tudo em tempo real para a nuvem.",
    "answer": "E",
    "comment": "Embora a sincronização com a nuvem seja uma característica central dos wearables, eles armazenam uma quantidade significativa de dados localmente, pelo menos temporariamente. Esses dados podem incluir informações de localização (GPS), registros de atividade física (passos, frequência cardíaca), notificações, contatos e até fragmentos de mensagens. A análise pode ser complexa, mas é viável e pode fornecer uma linha do tempo detalhada das atividades e da localização de um indivíduo.",
    "theme": "Informática Forense"
  },
  {
    "text": "A criptografia de fluxo (stream cipher), como o RC4, criptografa os dados bit a bit ou byte a byte, enquanto a criptografia de bloco (block cipher), como o AES, divide os dados em blocos de tamanho fixo e criptografa cada bloco separadamente.",
    "answer": "C",
    "comment": "Essa é a distinção fundamental entre os dois tipos de cifras simétricas. Cifras de fluxo geram um fluxo de bits pseudoaleatório (keystream) que é combinado com o texto claro usando a operação XOR. Cifras de bloco operam em blocos de dados (ex: 128 bits para o AES). Como a maioria das mensagens não tem um tamanho múltiplo do bloco, modos de operação (como CBC, GCM) são necessários para lidar com o preenchimento (padding) e para garantir que blocos idênticos de texto claro não resultem em blocos idênticos de texto cifrado.",
    "theme": "Criptografia"
  },
  {
    "text": "O SRUM (System Resource Utilization Monitor), presente no Windows 8 e posteriores, é um artefato forense que monitora detalhadamente o consumo de recursos por aplicativos, incluindo o total de bytes lidos/escritos, o uso de rede por interface e o tempo de atividade do processo, sendo uma fonte rica para entender a atividade de um malware.",
    "answer": "C",
    "comment": "O SRUM, armazenado em um banco de dados ESE (SRUDB.dat), é um tesouro forense. Ele fornece um histórico detalhado de 30 a 60 dias sobre quais aplicativos foram executados, por qual usuário, e o quanto de rede (dados enviados/recebidos) e recursos de CPU/disco eles consumiram. Para um malware que se comunica pela rede e depois se apaga, o SRUM pode ser a única evidência de sua atividade de rede.",
    "theme": "Análise Forense Windows"
  },
  {
    "text": "O MAC Spoofing é uma técnica onde um atacante altera o endereço MAC (Media Access Control) de sua interface de rede para se passar por outro dispositivo na rede ou para ocultar sua identidade.",
    "answer": "C",
    "comment": "O endereço MAC é o identificador único gravado na placa de rede. No entanto, ele pode ser facilmente alterado via software na maioria dos sistemas operacionais. Atacantes usam MAC spoofing para contornar filtros de acesso baseados em MAC, para se passar por um dispositivo autorizado (como um roteador) em ataques de man-in-the-middle, ou simplesmente para dificultar a identificação de seu dispositivo físico nos logs de rede.",
    "theme": "Redes e Protocolos"
  },
  {
    "text": "A análise de Browser Cache (cache do navegador) pode revelar fragmentos de páginas web visitadas, incluindo imagens, scripts e folhas de estilo (CSS), que podem ser usados para reconstruir parcialmente o conteúdo que um usuário visualizou.",
    "answer": "C",
    "comment": "Os navegadores armazenam em cache os componentes de sites para acelerar o carregamento em visitas futuras. Para um perito, esse cache é uma fonte valiosa de evidências. Mesmo que o histórico de navegação seja apagado, os arquivos em cache podem persistir, permitindo ao perito ver imagens, textos e outros conteúdos de sites que o usuário visitou.",
    "theme": "Informática Forense"
  },
  {
    "text": "O Attribute List ($AttrList) é um atributo especial no NTFS que é utilizado quando todos os atributos de um arquivo não cabem em seu registro na MFT (Master File Table). Ele aponta para outros registros na MFT onde os demais atributos estão armazenados.",
    "answer": "C",
    "comment": "Um registro na MFT tem um tamanho fixo (geralmente 1KB). Se um arquivo tem muitos atributos (como segurança complexa, múltiplos ADS, ou está muito fragmentado), eles podem não caber nesse espaço. Quando isso acontece, o NTFS cria um atributo $AttrList que funciona como um índice, apontando para a localização dos outros atributos em um ou mais registros de extensão na MFT. Isso é um sinal de um arquivo não residente e possivelmente fragmentado.",
    "theme": "Análise Forense Windows"
  },
  {
    "text": "Um ataque de DNS Cache Poisoning (ou DNS Spoofing) ocorre quando um atacante consegue inserir dados falsos no cache de um servidor DNS, fazendo com que ele retorne um endereço IP malicioso para uma requisição de um domínio legítimo.",
    "answer": "C",
    "comment": "O objetivo do DNS Cache Poisoning é redirecionar os usuários para sites falsos. Se um atacante envenena o cache do servidor DNS de um provedor de internet para o domínio www.banco.com.br, todos os usuários daquele provedor que tentarem acessar o site do banco serão redirecionados para o servidor do atacante, que pode hospedar uma página de phishing para roubar credenciais. O DNSSEC (DNS Security Extensions) foi criado para prevenir esse tipo de ataque.",
    "theme": "Forense Mobile"
  },
  {
    "text": "Em uma análise de memória RAM com a ferramenta Volatility, o plugin pstree exibe a árvore de processos, mostrando as relações de pai e filho entre eles, o que é útil para identificar processos órfãos ou processos suspeitos iniciados por outros processos.",
    "answer": "C",
    "comment": "O plugin pstree é um dos primeiros a serem executados em uma análise de memória. Ele visualiza a hierarquia dos processos, mostrando qual processo iniciou qual. Isso pode revelar rapidamente anomalias, como um explorer.exe (processo de interface do usuário) sendo filho do services.exe (processo de serviços do sistema), ou um svchost.exe executando como filho de um winword.exe (Microsoft Word), o que pode indicar injeção de processo ou execução de macro maliciosa.",
    "theme": "Informática Forense"
  },
  {
    "text": "A Secure Enclave presente em processadores de dispositivos Apple é uma área de armazenamento criptografado onde o sistema operacional armazena senhas de usuários e chaves de criptografia de arquivos.",
    "answer": "E",
    "comment": "A Secure Enclave é um coprocessador de segurança com seu próprio boot seguro e sistema operacional, não uma área de armazenamento. Sua função é lidar com operações criptográficas sensíveis e proteger dados como as chaves de proteção de dados e informações biométricas (Face ID/Touch ID). As chaves nunca saem da Secure Enclave, que apenas informa ao processador principal se uma operação criptográfica foi bem-sucedida ou não.",
    "theme": "Forense Mobile"
  },
  {
    "text": "A Lei nº 12.850/2013 (Lei de Organizações Criminosas) prevê o instrumento da ação controlada, que consiste em retardar a intervenção policial ou administrativa para que a medida legal se concretize no momento mais eficaz do ponto de vista da formação de provas e obtenção de informações.",
    "answer": "C",
    "comment": "A ação controlada (Art. 8º) é uma técnica especial de investigação crucial em casos complexos. Em vez de agir imediatamente ao tomar conhecimento de uma atividade criminosa, a autoridade policial pode, com autorização judicial, monitorar e acompanhar a ação para identificar mais membros da organização, descobrir a estrutura do grupo, o destino de bens ilícitos, etc. Isso é aplicável a investigações de crimes cibernéticos, permitindo o acompanhamento de atividades em fóruns ou redes de malware.",
    "theme": "Legislação"
  },
  {
    "text": "O Windows Registry Transactional Log (arquivos .LOG1 e .LOG2 no diretório config) armazena um log de transações para as hives do Registro. Ele é usado para garantir a consistência do Registro em caso de falha, mas também pode conter fragmentos de chaves e valores recentemente modificados, sendo útil para a análise forense.",
    "answer": "C",
    "comment": "Similar a um journal de sistema de arquivos, os logs transacionais do Registro garantem que as operações de escrita nas hives sejam atômicas. Se o sistema falhar durante uma escrita, ele pode usar esses logs para reverter a transação e evitar a corrupção da hive. Para o perito, esses arquivos de log podem conter dados do Registro que ainda não foram incorporados à hive principal, revelando a atividade mais recente no sistema, mesmo que ela não esteja visível no arquivo da hive principal.",
    "theme": "Análise Forense Windows"
  },
  {
    "text": "A técnica DLL Sideloading é uma forma de DLL Hijacking onde um atacante coloca uma DLL maliciosa no mesmo diretório de um executável legítimo e assinado digitalmente. Quando o executável é executado, ele carrega a DLL maliciosa em vez da legítima que estaria em um diretório do sistema.",
    "answer": "C",
    "comment": "O DLL Sideloading é uma variante específica e muito comum do DLL Hijacking. Muitos programas legítimos são vulneráveis a isso porque foram programados para carregar DLLs sem especificar o caminho completo. Atacantes exploram isso empacotando um executável legítimo (ex: de um software conhecido) com uma DLL maliciosa que tem o nome de uma dependência legítima. Isso ajuda a evadir defesas, pois a execução inicial é de um processo confiável e assinado.",
    "theme": "Análise Forense Windows"
  },
  {
    "text": "A documentoscopia digital é a área da forense computacional que se ocupa exclusivamente da verificação da autenticidade de assinaturas digitais em documentos eletrônicos.",
    "answer": "E",
    "comment": "A documentoscopia digital é muito mais ampla. Ela abrange a análise de qualquer documento digital para verificar sua autenticidade, integridade e investigar possíveis adulterações ou falsificações. Isso inclui não apenas a verificação de assinaturas digitais, mas também a análise de metadados, a detecção de montagens em imagens e vídeos (perícia audiovisual), a análise de fontes e formatação em documentos de texto, e a comparação de características para determinar a autoria.",
    "theme": "Informática Forense"
  },
  {
    "text": "O file slack de um arquivo é composto por duas partes: RAM slack e drive slack. O RAM slack é o espaço entre o final de um arquivo e o final do setor em que ele termina.",
    "answer": "C",
    "comment": "A terminologia está correta. Quando o sistema operacional grava um arquivo, ele o faz em setores. O espaço não utilizado dentro do último setor do arquivo é o RAM slack (um termo histórico, pois em sistemas antigos continha lixo da RAM). Se o arquivo não preenche o último cluster alocado para ele, o espaço que sobra, compreendendo os setores inteiros não utilizados dentro daquele cluster, é chamado de drive slack ou file system slack. Ambas as áreas podem conter dados de arquivos anteriores.",
    "theme": "Informática Forense"
  },
  {
    "text": "Em uma análise forense de rede, o protocolo ARP (Address Resolution Protocol) não possui valor investigativo, pois opera apenas na camada de enlace e não carrega dados de aplicações.",
    "answer": "E",
    "comment": "O ARP é extremamente relevante para a investigação. Ele é usado para mapear endereços IP (Camada 3) para endereços MAC (Camada 2). A análise de tráfego ARP pode revelar o mapeamento de dispositivos na rede local. Além disso, anomalias no tráfego ARP, como respostas ARP não solicitadas (gratuitous ARP) ou múltiplos IPs sendo associados a um mesmo MAC, são fortes indicadores de ataques de man-in-the-middle, como ARP spoofing ou ARP cache poisoning.",
    "theme": "Formatos Forenses"
  },
  {
    "text": "A análise de Crash Dumps (despejos de memória de falha), como os arquivos MEMORY.DMP gerados pelo Windows após uma Tela Azul da Morte (BSOD), pode fornecer um snapshot completo da memória RAM no momento da falha, sendo analisáveis pelas mesmas ferramentas usadas para dumps de memória live, como a Volatility.",
    "answer": "C",
    "comment": "Os Crash Dumps são gerados pelo sistema operacional exatamente para permitir a análise da causa de uma falha grave. Um Complete memory dump é, funcionalmente, idêntico a um dump de memória RAM adquirido para fins forenses. Ele contém o estado de todos os processos, drivers e do kernel no momento do crash, e pode ser analisado com a Volatility para investigar a atividade de um malware que possa ter causado a instabilidade do sistema.",
    "theme": "Análise Forense Windows"
  },
  {
    "text": "O sistema de arquivos FAT (File Allocation Table) não suporta permissões de segurança em nível de arquivo, como as encontradas no NTFS. Qualquer usuário com acesso ao volume FAT tem acesso a todos os arquivos contidos nele.",
    "answer": "C",
    "comment": "Essa é uma das principais limitações dos sistemas de arquivos da família FAT (FAT12, FAT16, FAT32, exFAT). Eles foram projetados em uma era onde a segurança multiusuário não era uma preocupação. Eles não possuem o conceito de proprietários, grupos ou listas de controle de acesso (ACLs). A segurança em um volume FAT depende inteiramente do controle de acesso fornecido pelo sistema operacional ao ponto de montagem (a letra da unidade, por exemplo).",
    "theme": "Análise Forense Windows"
  },
  {
    "text": "Um ataque de Cross-Site Scripting (XSS) Refletido ocorre quando um atacante consegue armazenar permanentemente um script malicioso no banco de dados de um site, que é então executado no navegador de todo usuário que visita a página comprometida.",
    "answer": "E",
    "comment": "A descrição se refere a um ataque de XSS Armazenado (Stored XSS). Em um ataque de XSS Refletido, o script malicioso não é armazenado no servidor. Ele faz parte da própria requisição (geralmente na URL) e é refletido de volta pelo servidor na resposta HTTP para o navegador da vítima, que então o executa. É comumente distribuído através de links maliciosos enviados por e-mail ou mensagens.",
    "theme": "Forense Mobile"
  },
  {
    "text": "A entropia de um arquivo é uma medida de sua aleatoriedade. Arquivos com alta entropia, como arquivos comprimidos (ZIP, GZ) ou criptografados, são mais aleatórios e difíceis de comprimir. A análise de entropia pode ajudar a identificar seções de um executável que podem estar criptografadas ou empacotadas.",
    "answer": "C",
    "comment": "A entropia é um conceito da teoria da informação muito útil na análise de malware. Um arquivo de texto tem baixa entropia, pois possui padrões repetitivos. Um arquivo criptografado, por design, deve ser indistinguível de dados aleatórios, possuindo alta entropia. Malwares frequentemente usam packers para comprimir e/ofuscar seu código. A identificação de seções com alta entropia dentro de um executável é um forte indicativo de que ele está empacotado ou contém dados criptografados.",
    "theme": "Forense Mobile"
  },
  {
    "text": "A Portaria nº 82/2014 da SENASP estabelece diretrizes para os procedimentos de cadeia de custódia de vestígios, mas não possui força de lei, servindo apenas como uma recomendação técnica.",
    "answer": "E",
    "comment": "Embora não seja uma lei em sentido estrito, a Portaria SENASP/MJ nº 82/2014, ao estabelecer as Diretrizes sobre os Procedimentos a serem observados no tocante à Cadeia de Custódia de Vestígios, foi um marco e tem sido amplamente utilizada como referência técnica e procedimental por todas as perícias do país. Com a positivação da cadeia de custódia no CPP pela Lei 13.964/19, os procedimentos ali descritos ganharam ainda mais relevância e respaldo, sendo cobrados em juízo como o padrão a ser seguido.",
    "theme": "Forense Mobile"
  },
  {
    "text": "O Global System for Mobile Communications (GSM) é a tecnologia de rede móvel de quarta geração (4G), que oferece altas velocidades de dados através da arquitetura LTE (Long-Term Evolution).",
    "answer": "E",
    "comment": "O GSM é o padrão para a segunda geração (2G) de redes móveis, que introduziu os serviços digitais de voz e dados (GPRS/EDGE). A terceira geração (3G) é baseada em tecnologias como UMTS/HSPA. A quarta geração (4G) é, de fato, baseada na arquitetura LTE. É uma distinção fundamental em telecomunicações.",
    "theme": "Análise Forense Windows"
  },
  {
    "text": "Na análise de um sistema de arquivos, um perito encontra um arquivo com timestamp de modificação mais recente que o timestamp de acesso. Isso é uma anomalia que indica, com certeza, o uso de técnicas de time stomping.",
    "answer": "E",
    "comment": "Embora possa ser suspeito, isso não é uma prova definitiva de time stomping. Existem cenários legítimos onde isso pode ocorrer. Por exemplo, um programa antivírus pode ler (acessar) um arquivo e, em seguida, um outro processo pode modificar um de seus metadados (como o atributo de arquivamento) sem alterar o conteúdo, resultando em um tempo de modificação posterior ao de acesso. Além disso, em muitos sistemas modernos, o registro do timestamp de acesso é desabilitado por padrão para melhorar o desempenho.",
    "theme": "Informática Forense"
  },
  {
    "text": "A hibernação de um sistema operacional salva o conteúdo da memória RAM em um arquivo no disco e desliga completamente o computador, enquanto o modo sleep (dormir/suspender) mantém a RAM energizada com o estado do sistema e coloca os outros componentes em um estado de baixo consumo de energia.",
    "answer": "C",
    "comment": "Essa é a diferença fundamental entre os dois modos. Hibernar (salva no disco, hiberfil.sys) permite que o estado do sistema sobreviva a uma perda total de energia, mas a retomada é mais lenta. Dormir (salva na RAM) permite uma retomada quase instantânea, mas se a energia for perdida (ex: bateria acabar), o estado do sistema é perdido. Do ponto de vista forense, a hibernação cria um artefato valioso no disco (hiberfil.sys), enquanto o modo sleep mantém a evidência viva na RAM, exigindo uma aquisição live.",
    "theme": "Sistemas Operacionais"
  }
];