const questions = [
  {
    "text": "A arquitetura CUDA (Compute Unified Device Architecture) é uma tecnologia desenvolvida pela NVIDIA que permite o uso de GPUs para processamento paralelo geral, sendo amplamente utilizada em aplicações de computação forense para acelerar algoritmos de quebra de senhas e análise de grandes volumes de dados.",
    "answer": "C",
    "comment": "A arquitetura CUDA da NVIDIA realmente permite utilizar GPUs para processamento paralelo geral, sendo amplamente empregada em computação forense para acelerar processos como quebra de senhas, análise de hashes e processamento de grandes volumes de dados.",
    "theme": "Arquitetura de Computadores"
  },
  {
    "text": "No contexto de sistemas distribuídos, o modelo de memória compartilhada permite que processos em máquinas diferentes acessem diretamente a mesma região de memória física, sem necessidade de mecanismos de comunicação como troca de mensagens.",
    "answer": "E",
    "comment": "Em sistemas distribuídos, não existe memória física compartilhada entre máquinas diferentes. O modelo de memória compartilhada em sistemas distribuídos é uma abstração implementada através de mecanismos de comunicação como troca de mensagens ou middleware.",
    "theme": "Sistemas Distribuídos"
  },
  {
    "text": "O sistema de arquivos NTFS suporta metadados estendidos, journaling e criptografia nativa, características fundamentais para preservação de evidências em perícia forense digital.",
    "answer": "C",
    "comment": "O NTFS possui essas características essenciais para perícia forense: metadados estendidos (timestamps, atributos alternativos), journaling ($LogFile) para recuperação de dados e EFS para criptografia nativa.",
    "theme": "Sistemas de Arquivos"
  },
  {
    "text": "A virtualização por contêineres, como Docker, compartilha o kernel do sistema operacional hospedeiro, resultando em menor overhead de recursos comparado às máquinas virtuais tradicionais, mas oferecendo isolamento de segurança inferior.",
    "answer": "C",
    "comment": "Contêineres compartilham o kernel do host, proporcionando menor overhead de recursos que VMs tradicionais, mas com menor isolamento de segurança, pois não há separação completa do sistema operacional.",
    "theme": "Virtualização"
  },
  {
    "text": "Em arquiteturas RAID 5, a falha simultânea de dois discos resulta em perda total dos dados, pois este nível de RAID utiliza apenas um disco de paridade distribuída.",
    "answer": "C",
    "comment": "RAID 5 utiliza paridade distribuída em apenas um disco equivalente, permitindo recuperação de apenas uma falha de disco. Duas falhas simultâneas resultam em perda total dos dados.",
    "theme": "Arquitetura de Computadores"
  },
  {
    "text": "O sistema de arquivos EXT4 utiliza extents para melhorar a performance e reduzir a fragmentação, substituindo o sistema tradicional de ponteiros indiretos usado em EXT3.",
    "answer": "C",
    "comment": "EXT4 introduziu extents, que são grupos contíguos de blocos, melhorando significativamente a performance e reduzindo fragmentação comparado ao sistema de ponteiros indiretos do EXT3.",
    "theme": "Sistemas de Arquivos"
  },
  {
    "text": "A computação quântica utiliza qubits que podem existir em superposição de estados, permitindo processamento massivamente paralelo que representa uma ameaça potencial aos algoritmos criptográficos atuais baseados em problemas matematicamente difíceis.",
    "answer": "C",
    "comment": "Computação quântica utiliza qubits em superposição, permitindo paralelismo quântico. Algoritmos como Shor podem quebrar RSA e ECC, representando ameaça aos sistemas criptográficos atuais.",
    "theme": "Computação Quântica"
  },
  {
    "text": "Em processadores com tecnologia Hyper-Threading, cada núcleo físico pode executar apenas uma thread por vez, mas com alternância muito rápida que simula execução simultânea.",
    "answer": "E",
    "comment": "Hyper-Threading permite que cada núcleo físico execute duas threads simultaneamente, compartilhando recursos de execução. Não é mera alternância rápida, mas execução simultânea real.",
    "theme": "Arquitetura de Computadores"
  },
  {
    "text": "O sistema de arquivos XFS foi projetado originalmente pela SGI para sistemas de alto desempenho, oferecendo excelente escalabilidade para grandes volumes de dados e sendo nativo do kernel Linux.",
    "answer": "C",
    "comment": "XFS foi desenvolvido pela SGI, é conhecido pela excelente escalabilidade e performance com grandes volumes de dados, e está integrado nativamente no kernel Linux.",
    "theme": "Sistemas de Arquivos"
  },
  {
    "text": "Em emuladores de sistemas operacionais, todo o hardware é simulado via software, resultando em maior overhead comparado às máquinas virtuais que utilizam extensões de virtualização do processador.",
    "answer": "C",
    "comment": "Emuladores simulam completamente o hardware via software, resultando em maior overhead que VMs que utilizam extensões de virtualização do processador (Intel VT-x, AMD-V).",
    "theme": "Arquitetura de Computadores"
  },
  {
    "text": "No modelo relacional, a primeira forma normal (1FN) exige que todos os atributos sejam atômicos, não permitindo grupos repetitivos ou atributos multivalorados em uma tabela.",
    "answer": "C",
    "comment": "A 1FN requer que todos os atributos sejam atômicos (indivisíveis) e que não existam grupos repetitivos ou atributos com múltiplos valores em uma única célula.",
    "theme": "Bancos de Dados"
  },
  {
    "text": "SQLite é um banco de dados NoSQL que armazena dados em formato de documentos JSON, sendo amplamente utilizado em aplicações móveis por sua simplicidade e ausência de servidor.",
    "answer": "E",
    "comment": "SQLite é um banco de dados relacional (SQL), não NoSQL. Armazena dados em formato relacional tradicional, não em documentos JSON, embora seja serverless e popular em aplicações móveis.",
    "theme": "Bancos de Dados"
  },
  {
    "text": "Em SGBDs relacionais, o controle de concorrência otimista assume que conflitos são raros e verifica inconsistências apenas no momento do commit da transação, sendo mais eficiente em ambientes com baixa contenção.",
    "answer": "C",
    "comment": "Controle otimista não bloqueia recursos durante a transação, verificando conflitos apenas no commit. É mais eficiente quando conflitos são raros (baixa contenção).",
    "theme": "Armazenamento"
  },
  {
    "text": "A propriedade ACID dos bancos de dados relacionais garante que todas as transações sejam Atômicas, Consistentes, Isoladas e Duráveis, sendo essencial para manter a integridade dos dados em perícias forenses.",
    "answer": "C",
    "comment": "ACID (Atomicity, Consistency, Isolation, Durability) é fundamental para garantir integridade dos dados, especialmente importante em perícias forenses onde a consistência e durabilidade dos dados são cruciais.",
    "theme": "Sistemas Distribuídos"
  },
  {
    "text": "Bancos de dados multidimensionais organizam dados em estruturas de cubos OLAP, otimizados para consultas analíticas complexas, mas inadequados para operações transacionais de alta frequência.",
    "answer": "C",
    "comment": "Bancos multidimensionais usam cubos OLAP para análises complexas (OLAP - Online Analytical Processing), mas não são otimizados para OLTP (Online Transaction Processing) de alta frequência.",
    "theme": "BANCOS DE DADOS"
  },
  {
    "text": "Em bancos NoSQL do tipo documento, como MongoDB, não existe esquema rígido, permitindo que documentos em uma mesma coleção tenham estruturas completamente diferentes.",
    "answer": "C",
    "comment": "Bancos NoSQL de documentos são schema-less ou schema-flexible, permitindo que documentos na mesma coleção tenham estruturas variadas, oferecendo flexibilidade de modelagem.",
    "theme": "Bancos de Dados"
  },
  {
    "text": "O comando SELECT em SQL sempre retorna resultados ordenados por ordem alfabética da primeira coluna, a menos que seja especificada explicitamente uma cláusula ORDER BY.",
    "answer": "E",
    "comment": "SQL não garante ordem específica nos resultados sem ORDER BY explícito. A ordem pode variar conforme implementação do SGBD, índices utilizados e outros fatores internos.",
    "theme": "Bancos de Dados"
  },
  {
    "text": "Em transações de banco de dados, o nível de isolamento READ COMMITTED previne dirty reads, mas permite phantom reads e non-repeatable reads.",
    "answer": "C",
    "comment": "READ COMMITTED previne dirty reads (leitura de dados não commitados), mas permite non-repeatable reads e phantom reads, oferecendo isolamento intermediário.",
    "theme": "Bancos de Dados"
  },
  {
    "text": "O arquivo de log (transaction log) em SGBDs relacionais registra todas as modificações realizadas no banco de dados, sendo fundamental para recuperação após falhas e para auditoria em perícias forenses.",
    "answer": "C",
    "comment": "O transaction log registra todas as modificações (INSERT, UPDATE, DELETE), sendo essencial para recovery após falhas e valioso para auditoria e investigação forense.",
    "theme": "Armazenamento"
  },
  {
    "text": "Bancos de dados NoSQL do tipo chave-valor, como Redis, são ideais para consultas complexas envolvendo junções entre múltiplas estruturas de dados.",
    "answer": "E",
    "comment": "Bancos chave-valor são otimizados para acesso simples por chave, não para consultas complexas com junções. Essas consultas são melhor atendidas por bancos relacionais.",
    "theme": "Bancos de Dados"
  },
  {
    "text": "Debuggers como GDB e OllyDbg permitem análise dinâmica de malware, possibilitando a execução controlada do código suspeito para observar seu comportamento em tempo real.",
    "answer": "C",
    "comment": "Debuggers permitem análise dinâmica, executando o código passo a passo, definindo breakpoints e observando o comportamento do malware em ambiente controlado.",
    "theme": "Segurança"
  },
  {
    "text": "A técnica de ofuscação polimórfica em malware altera apenas o código de descriptografia a cada infecção, mantendo o payload principal inalterado para preservar a funcionalidade.",
    "answer": "E",
    "comment": "Malware polimórfico altera seu próprio código (incluindo o payload) a cada infecção, mantendo apenas a funcionalidade. O código de descriptografia também muda para evadir detecção.",
    "theme": "Armazenamento"
  },
  {
    "text": "Rootkits de kernel operam no mesmo nível de privilégio do sistema operacional, podendo interceptar chamadas de sistema e ocultar sua presença modificando estruturas de dados do kernel.",
    "answer": "C",
    "comment": "Rootkits de kernel executam em ring 0 (kernel space), podendo interceptar system calls, modificar estruturas do kernel e ocultar processos, arquivos e conexões de rede.",
    "theme": "Armazenamento"
  },
  {
    "text": "Sandboxing é uma técnica que executa software suspeito em ambiente isolado, mas não oferece proteção contra malware que detecta ambientes virtualizados e altera seu comportamento.",
    "answer": "C",
    "comment": "Embora sandboxing isole a execução, malware sofisticado pode detectar ambientes virtualizados (VM detection) e permanecer inativo ou comportar-se diferentemente, evadindo análise.",
    "theme": "Armazenamento"
  },
  {
    "text": "Compactadores de executáveis (packers) como UPX apenas reduzem o tamanho dos arquivos, não oferecendo nenhuma proteção contra engenharia reversa.",
    "answer": "E",
    "comment": "Além de compressão, packers oferecem proteção contra engenharia reversa através de ofuscação, anti-debugging, criptografia e outras técnicas anti-análise.",
    "theme": "Armazenamento"
  },
  {
    "text": "Malware fileless reside apenas na memória RAM, não escrevendo arquivos no disco rígido, dificultando sua detecção por antivírus tradicionais baseados em assinaturas.",
    "answer": "C",
    "comment": "Malware fileless opera exclusivamente em memória, utilizando ferramentas legítimas do sistema (living off the land), dificultando detecção por soluções tradicionais baseadas em arquivos.",
    "theme": "Armazenamento"
  },
  {
    "text": "A análise estática de malware envolve a execução do código suspeito em ambiente controlado para observar seu comportamento durante a execução.",
    "answer": "E",
    "comment": "Análise estática examina o código sem execução, através de disassembly, análise de strings, imports, etc. A execução em ambiente controlado caracteriza análise dinâmica.",
    "theme": "Segurança"
  },
  {
    "text": "Adware é um tipo de malware que sempre opera de forma maliciosa, coletando dados pessoais sem consentimento e instalando outros malwares no sistema infectado.",
    "answer": "E",
    "comment": "Adware nem sempre é malicioso. Pode ser legítimo quando instalado com consentimento explícito, exibindo publicidade em troca de software gratuito. Torna-se malicioso quando instalado sem consentimento.",
    "theme": "Segurança"
  },
  {
    "text": "Keyloggers de hardware são mais difíceis de detectar que keyloggers de software, pois operam independentemente do sistema operacional e não podem ser identificados por software antimalware.",
    "answer": "C",
    "comment": "Keyloggers de hardware interceptam dados antes de chegarem ao sistema operacional, sendo invisíveis ao software antimalware tradicional e requerendo inspeção física para detecção.",
    "theme": "Segurança"
  },
  {
    "text": "Ransomware sempre utiliza criptografia simétrica para cifrar os arquivos das vítimas, pois algoritmos assimétricos seriam muito lentos para grandes volumes de dados.",
    "answer": "E",
    "comment": "Ransomware moderno frequentemente utiliza criptografia híbrida: simétrica para cifrar arquivos (performance) e assimétrica para proteger a chave simétrica, combinando eficiência e segurança.",
    "theme": "Armazenamento"
  },
  {
    "text": "Em programação orientada a objetos, o polimorfismo permite que objetos de diferentes classes sejam tratados através de uma interface comum, desde que implementem os mesmos métodos.",
    "answer": "C",
    "comment": "Polimorfismo permite que objetos de classes diferentes respondam à mesma mensagem/método de formas específicas, possibilitando tratamento uniforme através de interfaces comuns.",
    "theme": "LINGUAGENS DE PROGRAMAÇÃO"
  },
  {
    "text": "A linguagem Python utiliza tipagem estática, exigindo que o tipo de todas as variáveis seja declarado explicitamente no momento da criação.",
    "answer": "E",
    "comment": "Python utiliza tipagem dinâmica, determinando o tipo das variáveis em tempo de execução. Não requer declaração explícita de tipos, embora suporte type hints opcionais.",
    "theme": "Armazenamento"
  },
  {
    "text": "Em linguagens compiladas como C, o processo de linking combina múltiplos arquivos objeto e bibliotecas para produzir um executável final.",
    "answer": "C",
    "comment": "O linker (ligador) combina arquivos objeto (.o), bibliotecas estáticas e dinâmicas, resolvendo referências simbólicas para produzir o executável final.",
    "theme": "Armazenamento"
  },
  {
    "text": "JavaScript é uma linguagem exclusivamente interpretada, não podendo ser compilada ou otimizada em tempo de execução.",
    "answer": "E",
    "comment": "JavaScript moderno utiliza compilação JIT (Just-In-Time) em engines como V8, compilando código para instruções nativas durante a execução para otimização de performance.",
    "theme": "Programação"
  },
  {
    "text": "Em Java, a sobrecarga de métodos (overloading) permite que múltiplos métodos tenham o mesmo nome, desde que possuam diferentes assinaturas (parâmetros).",
    "answer": "C",
    "comment": "Overloading em Java permite múltiplos métodos com mesmo nome mas assinaturas diferentes (número, tipo ou ordem dos parâmetros), determinando qual método chamar em tempo de compilação.",
    "theme": "Redes"
  },
  {
    "text": "APIs REST utilizam exclusivamente o protocolo HTTP e devem implementar todos os métodos HTTP (GET, POST, PUT, DELETE, PATCH) para serem consideradas RESTful.",
    "answer": "E",
    "comment": "APIs REST tipicamente usam HTTP mas não exclusivamente, e não precisam implementar todos os métodos HTTP. REST é um estilo arquitetural com princípios específicos, não uma especificação rígida.",
    "theme": "Armazenamento"
  },
  {
    "text": "GraphQL é uma linguagem de consulta que permite aos clientes especificar exatamente quais dados necessitam, reduzindo over-fetching comparado a APIs REST tradicionais.",
    "answer": "C",
    "comment": "GraphQL permite consultas específicas, onde clientes solicitam apenas campos necessários, reduzindo over-fetching de dados comum em APIs REST com endpoints fixos.",
    "theme": "Programação"
  },
  {
    "text": "Montadores (assemblers) convertem código Assembly diretamente para código de máquina, sendo o último estágio antes da execução pelo processador.",
    "answer": "C",
    "comment": "Assemblers traduzem mnemonics Assembly para instruções de máquina específicas do processador, produzindo código objeto que pode ser executado após linking.",
    "theme": "Arquitetura de Computadores"
  },
  {
    "text": "Em estruturas de controle de fluxo, o comando switch/case sempre requer uma instrução break explícita para evitar fall-through em todas as linguagens de programação.",
    "answer": "E",
    "comment": "Comportamento varia entre linguagens. C/Java requerem break explícito, mas Python usa elif (sem fall-through), Swift requer break explícito para fall-through, e outras linguagens têm comportamentos diferentes.",
    "theme": "Armazenamento"
  },
  {
    "text": "SonarQube é uma ferramenta de análise estática que examina código fonte para identificar vulnerabilidades de segurança, bugs e problemas de qualidade sem executar o programa.",
    "answer": "C",
    "comment": "SonarQube realiza análise estática contínua do código fonte, identificando vulnerabilidades, bugs, code smells e métricas de qualidade sem necessidade de execução do código.",
    "theme": "Segurança"
  },
  {
    "text": "Em uma pilha (stack), o último elemento inserido é o primeiro a ser removido, seguindo o princípio LIFO (Last In, First Out).",
    "answer": "C",
    "comment": "Pilhas seguem estritamente o princípio LIFO, onde elementos são inseridos e removidos apenas no topo da estrutura, como uma pilha de pratos.",
    "theme": "ESTRUTURAS DE DADOS E ALGORITMOS"
  },
  {
    "text": "Árvores binárias de busca balanceadas, como AVL, garantem complexidade O(log n) para operações de busca, inserção e remoção no pior caso.",
    "answer": "C",
    "comment": "Árvores AVL mantêm balanceamento automático, garantindo altura O(log n) e, consequentemente, complexidade O(log n) para operações básicas mesmo no pior caso.",
    "theme": "Armazenamento"
  },
  {
    "text": "O algoritmo de ordenação QuickSort sempre apresenta complexidade O(n log n), sendo considerado o mais eficiente entre todos os algoritmos de ordenação por comparação.",
    "answer": "E",
    "comment": "QuickSort tem complexidade média O(n log n), mas no pior caso é O(n²) quando o pivot é sempre o menor ou maior elemento. MergeSort garante O(n log n) sempre.",
    "theme": "Programação"
  },
  {
    "text": "Listas ligadas permitem inserção e remoção em tempo constante O(1) quando se conhece a referência do nó, mas requerem O(n) para busca sequencial.",
    "answer": "C",
    "comment": "Com referência direta ao nó, inserção/remoção são O(1). Porém, localizar um elemento específico requer traversal sequencial O(n) em listas ligadas simples.",
    "theme": "Armazenamento"
  },
  {
    "text": "Hash tables com tratamento de colisões por chaining mantêm todos os elementos em uma única lista ligada, degradando a performance para O(n) no pior caso.",
    "answer": "E",
    "comment": "Chaining usa múltiplas listas ligadas (uma por bucket). No pior caso, todos elementos podem ir para um bucket, resultando em O(n), mas normalmente performance é melhor.",
    "theme": "Segurança"
  },
  {
    "text": "O algoritmo de busca binária só pode ser aplicado em arrays ordenados e possui complexidade O(log n), dividindo o espaço de busca pela metade a cada iteração.",
    "answer": "C",
    "comment": "Busca binária requer array ordenado, comparando elemento central e eliminando metade do espaço de busca a cada passo, resultando em complexidade O(log n).",
    "theme": "Programação"
  },
  {
    "text": "Filas de prioridade são sempre implementadas usando heaps, não sendo possível implementá-las com outras estruturas de dados.",
    "answer": "E",
    "comment": "Embora heaps sejam implementação eficiente para filas de prioridade, podem ser implementadas com arrays não ordenados, arrays ordenados, listas ligadas ou árvores balanceadas.",
    "theme": "Armazenamento"
  },
  {
    "text": "Em grafos direcionados, um ciclo hamiltoniano visita cada vértice exatamente uma vez e retorna ao vértice inicial.",
    "answer": "C",
    "comment": "Ciclo hamiltoniano é um caminho fechado que visita cada vértice do grafo exatamente uma vez antes de retornar ao vértice de origem.",
    "theme": "ESTRUTURAS DE DADOS E ALGORITMOS"
  },
  {
    "text": "O algoritmo de Dijkstra encontra o caminho mais curto entre dois vértices em grafos com pesos negativos, sendo aplicável universalmente a qualquer tipo de grafo ponderado.",
    "answer": "E",
    "comment": "Dijkstra não funciona corretamente com arestas de peso negativo. Para grafos com pesos negativos, deve-se usar Bellman-Ford ou Floyd-Warshall.",
    "theme": "Programação"
  },
  {
    "text": "Autômatos determinísticos possuem exatamente uma transição possível para cada estado e símbolo de entrada, enquanto autômatos não-determinísticos podem ter múltiplas transições possíveis.",
    "answer": "C",
    "comment": "Autômatos determinísticos têm função de transição única δ(q,a), enquanto não-determinísticos permitem múltiplas transições possíveis para o mesmo estado e entrada.",
    "theme": "ESTRUTURAS DE DADOS E ALGORITMOS"
  },
  {
    "text": "O protocolo TCP garante entrega confiável através de acknowledgments, controle de fluxo e retransmissão automática de segmentos perdidos.",
    "answer": "C",
    "comment": "TCP implementa confiabilidade através de ACKs, sequence numbers, controle de fluxo (sliding window), controle de congestionamento e retransmissão automática de dados perdidos.",
    "theme": "REDES DE COMPUTADORES"
  },
  {
    "text": "Redes P2P (peer-to-peer) eliminam completamente a necessidade de servidores centralizados, com todos os nós funcionando exclusivamente como clientes.",
    "answer": "E",
    "comment": "Em P2P, cada nó funciona simultaneamente como cliente e servidor, não apenas como cliente. Alguns modelos P2P híbridos ainda utilizam servidores para descoberta de peers.",
    "theme": "Redes"
  },
  {
    "text": "O protocolo BGP (Border Gateway Protocol) é responsável pelo roteamento entre diferentes sistemas autônomos na Internet, utilizando algoritmos de vetor de distância.",
    "answer": "E",
    "comment": "BGP é um protocolo de roteamento inter-AS, mas utiliza algoritmo de vetor de caminho (path vector), não vetor de distância. Mantém informações completas do caminho.",
    "theme": "Programação"
  },
  {
    "text": "Comutadores (switches) de camada 2 tomam decisões de encaminhamento baseadas em endereços MAC, mantendo uma tabela de endereços aprendidos dinamicamente.",
    "answer": "C",
    "comment": "Switches L2 operam na camada de enlace, usando endereços MAC para decisões de encaminhamento e construindo CAM table através de learning dinâmico.",
    "theme": "Armazenamento"
  },
  {
    "text": "O protocolo DHCP utiliza broadcast para descoberta inicial de servidores, mas todas as comunicações subsequentes ocorrem via unicast entre cliente e servidor.",
    "answer": "E",
    "comment": "DHCP usa broadcast na descoberta (DISCOVER) e oferta (OFFER). REQUEST pode ser broadcast ou unicast, e ACK/NAK podem ser broadcast dependendo do estado do cliente.",
    "theme": "Armazenamento"
  },
  {
    "text": "Em redes Ethernet 802.3, colisões são detectadas através do mecanismo CSMA/CD, mas não ocorrem em redes comutadas full-duplex.",
    "answer": "C",
    "comment": "CSMA/CD detecta colisões em Ethernet compartilhada. Em redes comutadas full-duplex, cada link é um domínio de colisão separado, eliminando colisões.",
    "theme": "Armazenamento"
  },
  {
    "text": "O protocolo ARP resolve endereços IP para endereços MAC na rede local, mas não funciona através de roteadores em redes diferentes.",
    "answer": "C",
    "comment": "ARP opera apenas no segmento de rede local (mesmo domínio de broadcast). Roteadores não encaminham broadcasts ARP, limitando seu escopo à rede local.",
    "theme": "Redes"
  },
  {
    "text": "IPv6 elimina completamente a necessidade de NAT (Network Address Translation) devido ao seu espaço de endereçamento de 128 bits.",
    "answer": "C",
    "comment": "O vasto espaço de endereçamento IPv6 (2^128) permite endereços únicos globalmente, eliminando a necessidade de NAT para conservação de endereços.",
    "theme": "Redes"
  },
  {
    "text": "O protocolo ICMP é usado exclusivamente para reportar erros de rede, não podendo ser utilizado para diagnóstico de conectividade.",
    "answer": "E",
    "comment": "ICMP reporta erros mas também é usado para diagnósticos através de ping (Echo Request/Reply), traceroute e outras ferramentas de diagnóstico de rede.",
    "theme": "Redes"
  },
  {
    "text": "Redes sem fio 802.11 utilizam CSMA/CA (Carrier Sense Multiple Access with Collision Avoidance) porque a detecção de colisões é impraticável no meio wireless.",
    "answer": "C",
    "comment": "Em wireless, estações podem não detectar colisões devido a problemas como hidden node. CSMA/CA usa prevenção através de RTS/CTS e random backoff.",
    "theme": "Redes"
  },
  {
    "text": "A norma ISO/IEC 27001:2022 estabelece requisitos para implementação de um Sistema de Gestão de Segurança da Informação (SGSI), sendo certificável por organismos externos.",
    "answer": "C",
    "comment": "ISO 27001 especifica requisitos para SGSI, sendo uma norma certificável que permite auditoria externa e certificação formal por organismos acreditados.",
    "theme": "Segurança"
  },
  {
    "text": "Autenticação multifator (MFA) sempre requer pelo menos três fatores diferentes: algo que você sabe, algo que você tem e algo que você é.",
    "answer": "E",
    "comment": "MFA requer pelo menos dois fatores diferentes. Três fatores caracterizam autenticação \\\"strong\\\" ou \\\"three-factor\\\", mas MFA pode ser implementada com apenas dois fatores.",
    "theme": "Sistemas de Arquivos"
  },
  {
    "text": "O protocolo OAuth 2.0 é um framework de autorização que permite acesso delegado a recursos sem compartilhar credenciais, mas não fornece autenticação por si só.",
    "answer": "C",
    "comment": "OAuth 2.0 é framework de autorização (não autenticação) que permite acesso delegado através de tokens, sem revelar credenciais do usuário ao aplicativo third-party.",
    "theme": "Redes"
  },
  {
    "text": "Esteganografia é a prática de ocultar informações dentro de outros dados aparentemente inócuos, sendo diferente da criptografia que torna dados ilegíveis.",
    "answer": "C",
    "comment": "Esteganografia esconde a existência de informação dentro de outros dados (imagens, áudio), enquanto criptografia torna dados visíveis mas ilegíveis sem a chave.",
    "theme": "Segurança"
  },
  {
    "text": "OSINT (Open Source Intelligence) refere-se exclusivamente a técnicas de hacking para obter informações confidenciais de organizações através de vulnerabilidades de rede.",
    "answer": "E",
    "comment": "OSINT envolve coleta de informações de fontes públicas e abertas (redes sociais, sites, documentos públicos), não hacking ou exploração de vulnerabilidades.",
    "theme": "Redes"
  },
  {
    "text": "Single Sign-On (SSO) melhora a experiência do usuário reduzindo o número de senhas, mas cria um ponto único de falha para segurança se comprometido.",
    "answer": "C",
    "comment": "SSO oferece conveniência com uma única autenticação, mas se comprometido, pode dar acesso a múltiplos sistemas, criando risco de single point of failure.",
    "theme": "Segurança"
  },
  {
    "text": "O protocolo SAML (Security Assertion Markup Language) é usado exclusivamente para autenticação, não podendo transmitir informações de autorização.",
    "answer": "E",
    "comment": "SAML transmite assertions que podem incluir informações de autenticação, autorização e atributos do usuário, não sendo limitado apenas à autenticação.",
    "theme": "Segurança"
  },
  {
    "text": "Biometria comportamental analisa padrões únicos de comportamento do usuário, como dinâmica de digitação e movimento do mouse, para autenticação contínua.",
    "answer": "C",
    "comment": "Biometria comportamental monitora padrões únicos como cadência de digitação, pressão nas teclas, movimento do mouse, possibilitando autenticação contínua e transparente.",
    "theme": "Segurança"
  },
  {
    "text": "Data Loss Prevention (DLP) pode monitorar e bloquear transmissão de dados sensíveis apenas através de email, não sendo efetivo para outros canais de comunicação.",
    "answer": "E",
    "comment": "DLP moderno monitora múltiplos canais: email, web, USB, impressão, rede, cloud storage, oferecendo proteção abrangente contra vazamento de dados.",
    "theme": "Armazenamento"
  },
  {
    "text": "A técnica de recuperação de dados em SSDs é mais complexa que em HDDs tradicionais devido ao wear leveling e garbage collection implementados pelo controlador.",
    "answer": "C",
    "comment": "SSDs usam wear leveling e garbage collection que realocam dados e apagam blocos internamente, complicando recuperação forense comparado aos HDDs com localização física fixa.",
    "theme": "Armazenamento"
  },
  {
    "text": "Firewalls de próxima geração (NGFW) combinam filtragem tradicional de pacotes com inspeção profunda de aplicação, detecção de intrusão e controle de aplicações.",
    "answer": "C",
    "comment": "NGFWs integram funcionalidades tradicionais de firewall com DPI (Deep Packet Inspection), IPS, controle de aplicações e identificação de usuários em um único dispositivo.",
    "theme": "Redes"
  },
  {
    "text": "Sistemas IDS (Intrusion Detection System) sempre bloqueiam automaticamente tráfego malicioso detectado, funcionando como medida preventiva ativa.",
    "answer": "E",
    "comment": "IDS apenas detecta e alerta sobre atividades suspeitas (passivo). IPS (Intrusion Prevention System) é que bloqueia ativamente tráfego malicioso.",
    "theme": "SEGURANÇA DE REDES DE COMPUTADORES"
  },
  {
    "text": "O protocolo IPSec pode operar em modo transporte, protegendo apenas os dados do payload, ou em modo túnel, protegendo todo o pacote IP.",
    "answer": "C",
    "comment": "IPSec modo transporte protege apenas payload, mantendo cabeçalho IP original. Modo túnel encapsula todo pacote IP original em novo pacote, protegendo cabeçalho e payload.",
    "theme": "Armazenamento"
  },
  {
    "text": "Ataques DDoS sempre utilizam botnets com milhares de computadores infectados, sendo impossível realizá-los com recursos limitados.",
    "answer": "E",
    "comment": "Embora botnets potencializem DDoS, ataques podem ser realizados com amplificação (DNS, NTP), vulnerabilidades de aplicação ou poucos recursos bem direcionados.",
    "theme": "SEGURANÇA DE REDES DE COMPUTADORES"
  },
  {
    "text": "NAT (Network Address Translation) oferece algum nível de segurança ao ocultar a topologia interna da rede, mas não deve ser considerado uma medida de segurança primária.",
    "answer": "C",
    "comment": "NAT proporciona \\\"security through obscurity\\\" ocultando IPs internos, mas não é medida de segurança real. Firewalls e outras medidas específicas são necessárias.",
    "theme": "Redes"
  },
  {
    "text": "VPNs SSL/TLS operam na camada de aplicação, permitindo acesso granular a aplicações específicas sem necessidade de software cliente dedicado.",
    "answer": "C",
    "comment": "VPNs SSL/TLS funcionam via navegador web na camada de aplicação, oferecendo acesso granular a aplicações específicas sem necessidade de cliente VPN tradicional.",
    "theme": "Redes"
  },
  {
    "text": "O protocolo DNSSEC apenas protege contra cache poisoning, não oferecendo proteção contra outros tipos de ataques DNS.",
    "answer": "E",
    "comment": "DNSSEC protege contra cache poisoning, DNS spoofing, man-in-the-middle em consultas DNS e garante integridade e autenticidade das respostas DNS.",
    "theme": "Arquitetura de Computadores"
  },
  {
    "text": "Honeypots de alta interação simulam completamente sistemas reais, oferecendo maior realismo mas aumentando o risco de comprometimento da rede.",
    "answer": "C",
    "comment": "Honeypots de alta interação usam sistemas operacionais reais com serviços completos, oferecendo maior realismo para atrair atacantes, mas com maior risco se comprometidos.",
    "theme": "Arquitetura de Computadores"
  },
  {
    "text": "SIEM (Security Information and Event Management) apenas coleta logs de dispositivos de rede, não sendo capaz de correlacionar eventos de diferentes fontes.",
    "answer": "E",
    "comment": "SIEM coleta, normaliza, correlaciona e analisa logs de múltiplas fontes (rede, sistemas, aplicações), identificando padrões e ameaças através de correlação.",
    "theme": "Armazenamento"
  },
  {
    "text": "O framework MITRE ATT&CK categoriza táticas, técnicas e procedimentos de atacantes, fornecendo uma base comum para entender comportamentos adversários.",
    "answer": "C",
    "comment": "MITRE ATT&CK é framework que documenta TTPs (Tactics, Techniques, Procedures) baseados em observações reais de ataques, fornecendo linguagem comum para threat intelligence.",
    "theme": "SEGURANÇA DE REDES DE COMPUTADORES"
  },
  {
    "text": "O algoritmo RSA baseia sua segurança na dificuldade de fatoração de números grandes compostos pelo produto de dois números primos.",
    "answer": "C",
    "comment": "RSA fundamenta-se no problema da fatoração de inteiros: é computacionalmente difícil fatorar n = p × q quando p e q são primos grandes.",
    "theme": "Sistemas de Arquivos"
  },
  {
    "text": "Cifras de bloco como AES sempre requerem padding quando os dados não são múltiplos do tamanho do bloco, exceto no modo CTR que opera como stream cipher.",
    "answer": "C",
    "comment": "Modos como ECB, CBC requerem padding para dados não múltiplos do bloco. CTR transforma cifra de bloco em stream cipher, eliminando necessidade de padding.",
    "theme": "CRIPTOGRAFIA"
  },
  {
    "text": "O protocolo Diffie-Hellman permite que duas partes estabeleçam uma chave secreta compartilhada através de canal inseguro, mas é vulnerável a ataques man-in-the-middle.",
    "answer": "C",
    "comment": "Diffie-Hellman possibilita acordo de chaves sem compartilhamento prévio, mas é vulnerável a MITM se não houver autenticação das partes comunicantes.",
    "theme": "CRIPTOGRAFIA"
  },
  {
    "text": "Funções hash criptográficas como SHA-256 são irreversíveis devido à impossibilidade matemática de inverter a função, não apenas à complexidade computacional.",
    "answer": "E",
    "comment": "Hashes são considerados \\\"computacionalmente irreversíveis\\\" devido à complexidade, não impossibilidade matemática. Tecnicamente, múltiplas entradas podem produzir mesma saída.",
    "theme": "Armazenamento"
  },
  {
    "text": "Curvas elípticas (ECC) oferecem mesmo nível de segurança que RSA usando chaves menores, resultando em melhor performance e menor consumo de recursos.",
    "answer": "C",
    "comment": "ECC-256 oferece segurança equivalente a RSA-3072, proporcionando mesma segurança com chaves menores, resultando em melhor performance e eficiência energética.",
    "theme": "Armazenamento"
  },
  {
    "text": "Ataques de canal lateral (side-channel) exploram informações vazadas durante implementação de algoritmos criptográficos, como consumo de energia ou tempo de execução.",
    "answer": "C",
    "comment": "Side-channel attacks exploram vazamentos físicos durante execução: timing, power consumption, electromagnetic emanations, cache access patterns, para extrair informações secretas.",
    "theme": "Armazenamento"
  },
  {
    "text": "O modo de operação ECB (Electronic Codebook) é considerado inseguro porque blocos idênticos de plaintext produzem blocos idênticos de ciphertext, revelando padrões.",
    "answer": "C",
    "comment": "ECB cifra cada bloco independentemente com mesma chave. Blocos idênticos produzem outputs idênticos, revelando padrões no texto original.",
    "theme": "CRIPTOGRAFIA"
  },
  {
    "text": "Certificados digitais X.509 contêm a chave pública do titular e são assinados pela chave privada da Autoridade Certificadora, estabelecendo cadeia de confiança.",
    "answer": "C",
    "comment": "Certificados X.509 contêm chave pública do titular, informações de identidade e assinatura digital da CA usando sua chave privada, criando cadeia de confiança.",
    "theme": "CRIPTOGRAFIA"
  },
  {
    "text": "Perfect Forward Secrecy (PFS) garante que o comprometimento de chaves de longo prazo não compromete sessões passadas, usando chaves efêmeras por sessão.",
    "answer": "C",
    "comment": "PFS usa chaves temporárias únicas por sessão que são destruídas após uso. Comprometimento de chaves permanentes não afeta confidencialidade de sessões passadas.",
    "theme": "Armazenamento"
  },
  {
    "text": "O algoritmo 3DES aplica DES três vezes consecutivas sempre com chaves diferentes, oferecendo segurança equivalente a uma chave de 168 bits.",
    "answer": "E",
    "comment": "3DES pode usar duas ou três chaves. Com duas chaves (mais comum), segurança efetiva é ~112 bits devido a meet-in-the-middle attacks, não 168 bits.",
    "theme": "Segurança"
  },
  {
    "text": "O Registro do Windows armazena configurações do sistema e aplicações em estrutura hierárquica de chaves, sendo crucial para análise forense de atividades do usuário.",
    "answer": "C",
    "comment": "O Registry contém configurações críticas, histórico de atividades, programas executados, dispositivos conectados, sendo fonte valiosa de evidências em perícia forense.",
    "theme": "Forense Digital"
  },
  {
    "text": "No Windows 10/11, BitLocker utiliza exclusivamente o chip TPM para criptografia de disco, não permitindo outras formas de autenticação.",
    "answer": "E",
    "comment": "BitLocker pode usar TPM + PIN, TPM + USB, senha, ou até funcionar sem TPM (modo software). TPM sozinho é apenas uma das opções de configuração.",
    "theme": "Armazenamento"
  },
  {
    "text": "Event Logs do Windows registram atividades do sistema em três categorias principais: Application, Security e System, sendo armazenados em formato .evtx no Windows moderno.",
    "answer": "C",
    "comment": "Windows mantém logs principais em Application, Security e System. Formato .evtx substituiu .evt em versões modernas, oferecendo melhor estruturação e consulta.",
    "theme": "SISTEMA OPERACIONAL WINDOWS"
  },
  {
    "text": "Windows Server 2019/2022 introduziu contêineres nativos do Windows, permitindo executar aplicações em isolamento sem necessidade de virtualização completa.",
    "answer": "C",
    "comment": "Windows Server suporta contêineres nativos (Windows containers e Hyper-V containers), oferecendo isolamento de processos sem overhead de VMs completas.",
    "theme": "Virtualização"
  },
  {
    "text": "O UAC (User Account Control) no Windows sempre requer senha de administrador para executar programas com privilégios elevados.",
    "answer": "E",
    "comment": "UAC tem diferentes níveis. Para usuários administradores, pode apenas mostrar prompt de confirmação. Senha é requerida quando usuário padrão tenta executar como administrador.",
    "theme": "SISTEMA OPERACIONAL WINDOWS"
  },
  {
    "text": "NTFS Master File Table (MFT) contém metadados de todos os arquivos no volume, incluindo timestamps MAC (Modified, Accessed, Created) essenciais para análise forense.",
    "answer": "C",
    "comment": "MFT é estrutura central do NTFS contendo metadados completos dos arquivos, incluindo timestamps MAC/MACE críticos para estabelecer linha temporal em perícias.",
    "theme": "Sistemas de Arquivos"
  },
  {
    "text": "Windows Defender ATP pode realizar análise comportamental de malware executando arquivos suspeitos em sandbox local no próprio endpoint.",
    "answer": "E",
    "comment": "Windows Defender ATP (agora Microsoft Defender for Endpoint) usa sandbox na nuvem, não local. Análise comportamental é feita em ambiente cloud seguro.",
    "theme": "Armazenamento"
  },
  {
    "text": "Volume Shadow Copy Service (VSS) permite recuperação de versões anteriores de arquivos, mas é automaticamente desabilitado em sistemas com criptografia BitLocker.",
    "answer": "E",
    "comment": "VSS funciona normalmente com BitLocker. BitLocker criptografa dados no nível de volume, mas VSS opera acima dessa camada, mantendo funcionalidade de snapshots.",
    "theme": "Segurança"
  },
  {
    "text": "Windows PowerShell permite execução de scripts .ps1 por padrão em todas as instalações, facilitando automação mas potencialmente criando riscos de segurança.",
    "answer": "E",
    "comment": "PowerShell por padrão tem Execution Policy \\\"Restricted\\\", impedindo execução de scripts. Administrador deve alterar política explicitamente para permitir execução.",
    "theme": "Arquitetura de Computadores"
  },
  {
    "text": "Prefetch do Windows otimiza inicialização de aplicações através de cache, mas também fornece evidências forenses sobre programas executados no sistema.",
    "answer": "C",
    "comment": "Prefetch acelera carregamento de aplicações frequentes, mas arquivos .pf contêm evidências valiosas: programas executados, timestamps e frequência de uso.",
    "theme": "Arquitetura de Computadores"
  },
  {
    "text": "No Linux, o comando sudo permite execução temporária de comandos com privilégios de root, registrando todas as atividades no arquivo /var/log/auth.log.",
    "answer": "C",
    "comment": "sudo concede privilégios temporários de root para comandos específicos, registrando todas as execuções em /var/log/auth.log (Debian/Ubuntu) ou /var/log/secure (RHEL/CentOS).",
    "theme": "Armazenamento"
  },
  {
    "text": "Inodes no sistema de arquivos Linux contêm apenas informações sobre localização física dos dados no disco, não armazenando metadados dos arquivos.",
    "answer": "E",
    "comment": "Inodes contêm metadados completos: permissões, proprietário, timestamps, tamanho, ponteiros para blocos de dados, mas não o nome do arquivo (que fica no diretório).",
    "theme": "Sistemas de Arquivos"
  },
  {
    "text": "O comando crontab permite agendamento de tarefas automáticas no Linux, sendo frequentemente explorado por malware para persistência no sistema.",
    "answer": "C",
    "comment": "crontab agenda execução automática de comandos. Malware frequentemente instala entradas maliciosas para manter persistência, requerendo verificação regular em perícias.",
    "theme": "Segurança"
  },
  {
    "text": "Systemd é o sistema de init padrão em distribuições Linux modernas, gerenciando serviços através de arquivos de unidade e oferecendo logs centralizados via journalctl.",
    "answer": "C",
    "comment": "systemd substituiu SysV init na maioria das distribuições, usando unit files para configuração de serviços e journald para logging centralizado acessível via journalctl.",
    "theme": "Armazenamento"
  },
  {
    "text": "O arquivo /etc/passwd no Linux contém senhas dos usuários em texto plano, representando risco de segurança significativo se comprometido.",
    "answer": "E",
    "comment": "/etc/passwd não contém senhas há décadas. Senhas ficam hasheadas em /etc/shadow (shadow passwords), enquanto /etc/passwd contém apenas informações básicas dos usuários.",
    "theme": "Arquitetura de Computadores"
  },
  {
    "text": "LVM (Logical Volume Manager) permite redimensionamento dinâmico de partições no Linux, mas complica recuperação forense devido à abstração adicional sobre dispositivos físicos.",
    "answer": "C",
    "comment": "LVM oferece flexibilidade de gerenciamento de volumes, mas adiciona camada de abstração que pode complicar análise forense, requerendo compreensão da estrutura LVM.",
    "theme": "Virtualização"
  },
  {
    "text": "O comando lsof (list open files) mostra apenas arquivos regulares abertos por processos, não incluindo sockets de rede ou dispositivos.",
    "answer": "E",
    "comment": "lsof lista TODOS os recursos abertos: arquivos regulares, diretórios, sockets de rede, pipes, dispositivos de caractere/bloco, sendo muito útil em investigações.",
    "theme": "Armazenamento"
  },
  {
    "text": "Capabilities no Linux permitem granularidade fina de privilégios, atribuindo permissões específicas a processos sem necessidade de privilégios root completos.",
    "answer": "C",
    "comment": "Linux capabilities dividem privilégios root em capacidades específicas (CAP_NET_ADMIN, CAP_SYS_ADMIN, etc.), permitindo princípio do menor privilégio.",
    "theme": "SISTEMA OPERACIONAL LINUX"
  },
  {
    "text": "O arquivo /proc/meminfo no Linux fornece informações em tempo real sobre uso de memória, sendo acessível apenas pelo usuário root.",
    "answer": "E",
    "comment": "/proc/meminfo é legível por todos os usuários, fornecendo informações detalhadas sobre uso de memória RAM, swap, buffers e cache do sistema.",
    "theme": "Armazenamento"
  },
  {
    "text": "SELinux (Security-Enhanced Linux) implementa controle de acesso obrigatório (MAC), adicionando camada extra de segurança além das permissões tradicionais do Linux.",
    "answer": "C",
    "comment": "SELinux implementa MAC através de políticas que definem acesso baseado em contextos de segurança, fornecendo proteção adicional além das permissões DAC tradicionais.",
    "theme": "Armazenamento"
  },
  {
    "text": "Android utiliza máquina virtual Dalvik em todas as versões para execução de aplicações, garantindo isolamento entre apps através de sandboxing.",
    "answer": "E",
    "comment": "Dalvik foi substituído pelo ART (Android Runtime) a partir do Android 5.0. ART oferece melhor performance através de compilação ahead-of-time.",
    "theme": "Virtualização"
  },
  {
    "text": "iOS implementa sandboxing rigoroso onde cada aplicação executa em ambiente isolado, com comunicação inter-app limitada através de mecanismos controlados pelo sistema.",
    "answer": "C",
    "comment": "iOS usa sandboxing extensivo, isolando apps em contêineres separados. Comunicação entre apps ocorre via mecanismos aprovados: URL schemes, extensions, document providers.",
    "theme": "Armazenamento"
  },
  {
    "text": "No Android, permissões de aplicações são sempre solicitadas no momento da instalação, não sendo possível modificá-las posteriormente.",
    "answer": "E",
    "comment": "A partir do Android 6.0, permissões são solicitadas em runtime quando necessárias, e usuários podem modificar permissões nas configurações a qualquer momento.",
    "theme": "Armazenamento"
  },
  {
    "text": "Jailbreak em iOS e root em Android removem completamente todas as proteções de segurança, tornando o dispositivo equivalente a um computador tradicional.",
    "answer": "E",
    "comment": "Embora jailbreak/root concedam privilégios elevados, muitas proteções permanecem: criptografia hardware, Secure Boot, TEE (Trusted Execution Environment) geralmente persistem.",
    "theme": "Armazenamento"
  },
  {
    "text": "Keychain no iOS e Keystore no Android utilizam hardware seguro (TEE/Secure Element) para proteger chaves criptográficas e dados sensíveis contra extração.",
    "answer": "C",
    "comment": "Ambos utilizam hardware seguro quando disponível (Secure Enclave no iOS, TEE no Android) para proteger material criptográfico contra ataques, incluindo de usuários privilegiados.",
    "theme": "SISTEMAS OPERACIONAIS MÓVEIS"
  },
  {
    "text": "Android File Based Encryption (FBE) permite criptografia por usuário e por arquivo, habilitando funcionalidades como Direct Boot antes da autenticação completa do usuário.",
    "answer": "C",
    "comment": "FBE substitui Full Disk Encryption, permitindo granularidade por arquivo/usuário e Direct Boot para funcionalidades essenciais antes do unlock do usuário.",
    "theme": "Segurança"
  },
  {
    "text": "No iOS, o processo de boot verificado (Secure Boot) valida a integridade de cada componente do sistema durante inicialização, desde bootloader até kernel.",
    "answer": "C",
    "comment": "iOS implementa cadeia de confiança desde hardware até aplicações: Boot ROM → iBoot → kernel → kext, validando assinaturas Apple em cada etapa.",
    "theme": "Sistemas Distribuídos"
  },
  {
    "text": "Aplicações Android podem acessar diretamente o hardware do dispositivo sem permissões específicas, incluindo câmera, microfone e sensores.",
    "answer": "E",
    "comment": "Android requer permissões específicas para acesso a hardware sensível. Câmera, microfone, localização, etc. requerem declaração no manifest e consentimento do usuário.",
    "theme": "Redes"
  },
  {
    "text": "O sistema de arquivos APFS usado em dispositivos iOS oferece snapshots, clonagem e criptografia nativa, facilitando backup e recuperação forense.",
    "answer": "C",
    "comment": "APFS introduziu recursos avançados: snapshots para backup, copy-on-write cloning, criptografia nativa por volume, melhorando gestão de dados e análise forense.",
    "theme": "Sistemas de Arquivos"
  },
  {
    "text": "Memory management no iOS utiliza Automatic Reference Counting (ARC) que elimina completamente vazamentos de memória e corrupção de dados.",
    "answer": "E",
    "comment": "ARC automatiza gerenciamento de memória para objetos Objective-C/Swift, mas não previne todos os vazamentos (referências circulares) nem corrupção de memória em código C/C++.",
    "theme": "SISTEMAS OPERACIONAIS MÓVEIS"
  },
  {
    "text": "ITIL 4 introduz o conceito de Service Value System (SVS), focando na co-criação de valor com stakeholders através de práticas ágeis e adaptáveis.",
    "answer": "C",
    "comment": "ITIL 4 evoluiu para Service Value System, enfatizando co-criação de valor, colaboração com stakeholders e abordagem mais ágil que versões anteriores.",
    "theme": "GOVERNANÇA DE TI E LEGISLAÇÃO APLICADA"
  },
  {
    "text": "A Lei 14.133/2021 (Nova Lei de Licitações) sempre exige processo licitatório para contratações de TI, não permitindo contratação direta independentemente do valor.",
    "answer": "E",
    "comment": "Lei 14.133/2021 prevê dispensa e inexigibilidade para casos específicos, incluindo valores baixos, situações emergenciais e serviços técnicos especializados únicos.",
    "theme": "GOVERNANÇA DE TI E LEGISLAÇÃO APLICADA"
  },
  {
    "text": "O Marco Civil da Internet (Lei 12.965/2014) estabelece neutralidade de rede como princípio fundamental, proibindo discriminação de pacotes por provedores de internet.",
    "answer": "C",
    "comment": "Marco Civil estabelece neutralidade de rede como princípio, impedindo que provedores discriminem, restrinjam ou priorizem tráfego baseado em conteúdo ou origem.",
    "theme": "Redes"
  },
  {
    "text": "A Instrução Normativa SGD/ME nº 94/2022 regulamenta contratações de TI na Administração Pública federal, exigindo Plano Diretor de Tecnologia da Informação (PDTI) para todas as contratações.",
    "answer": "E",
    "comment": "IN 94/2022 exige PDTI, mas há exceções para contratações de menor complexidade, valores baixos ou situações específicas definidas na própria norma.",
    "theme": "Armazenamento"
  },
  {
    "text": "Governança de TI difere de gestão de TI por focar em direcionamento estratégico e supervisão, enquanto gestão concentra-se na execução operacional das decisões.",
    "answer": "C",
    "comment": "Governança define direção estratégica, políticas e controles de supervisão. Gestão executa as decisões operacionais dentro do framework estabelecido pela governança.",
    "theme": "Armazenamento"
  },
  {
    "text": "COBIT 2019 é framework exclusivamente para auditoria de TI, não sendo aplicável para governança ou gestão de tecnologia.",
    "answer": "E",
    "comment": "COBIT 2019 é framework abrangente para governança e gestão de TI corporativa, não apenas auditoria. Cobre estratégia, alinhamento de negócios, gestão de riscos e performance.",
    "theme": "GOVERNANÇA DE TI E LEGISLAÇÃO APLICADA"
  },
  {
    "text": "A Lei Geral de Proteção de Dados (LGPD) aplica-se apenas a dados pessoais digitais, não abrangendo informações físicas ou em papel.",
    "answer": "E",
    "comment": "LGPD abrange dados pessoais independentemente do meio, incluindo registros físicos, documentos em papel e qualquer forma de armazenamento de dados pessoais.",
    "theme": "Armazenamento"
  },
  {
    "text": "SLA (Service Level Agreement) deve sempre incluir penalidades financeiras para descumprimento, sendo inválido se não especificar multas.",
    "answer": "E",
    "comment": "SLA pode incluir diferentes consequências: penalidades financeiras, créditos de serviço, revisão contratual, ou simplesmente métricas de performance. Penalidades não são obrigatórias.",
    "theme": "GOVERNANÇA DE TI E LEGISLAÇÃO APLICADA"
  },
  {
    "text": "Plano de Continuidade de Negócios (BCP) foca exclusivamente em recuperação de desastres de TI, não abordando outros aspectos operacionais da organização.",
    "answer": "E",
    "comment": "BCP é abrangente, cobrindo continuidade de todos os processos críticos de negócio: pessoas, instalações, fornecedores, comunicação, não apenas TI.",
    "theme": "GOVERNANÇA DE TI E LEGISLAÇÃO APLICADA"
  },
  {
    "text": "DevOps integra desenvolvimento e operações através de automação, colaboração e entrega contínua, reduzindo tempo de ciclo e melhorando qualidade do software.",
    "answer": "C",
    "comment": "DevOps quebra silos entre desenvolvimento e operações, utilizando automação, CI/CD, colaboração e feedback contínuo para acelerar entrega e melhorar qualidade.",
    "theme": "GOVERNANÇA DE TI E LEGISLAÇÃO APLICADA"
  },
  {
    "text": "Machine Learning supervisionado requer dataset de treinamento com entradas e saídas conhecidas (labels), enquanto aprendizado não supervisionado busca padrões em dados sem labels.",
    "answer": "C",
    "comment": "ML supervisionado usa dados rotulados para treinar modelos preditivos. ML não supervisionado encontra padrões ocultos em dados sem rótulos (clustering, redução de dimensionalidade).",
    "theme": "Armazenamento"
  },
  {
    "text": "Redes Neurais Convolucionais (CNNs) são otimizadas exclusivamente para processamento de imagens, não sendo aplicáveis a outros tipos de dados.",
    "answer": "E",
    "comment": "Embora CNNs sejam excelentes para imagens, também são usadas em processamento de texto, áudio, séries temporais e qualquer dado com estrutura espacial ou temporal.",
    "theme": "Armazenamento"
  },
  {
    "text": "Large Language Models (LLMs) como GPT utilizam arquitetura Transformer com mecanismo de atenção para processar sequências de texto de comprimento variável.",
    "answer": "C",
    "comment": "LLMs modernos baseiam-se na arquitetura Transformer, usando self-attention para processar sequências, permitindo paralelização e captura de dependências de longo alcance.",
    "theme": "Arquitetura de Computadores"
  },
  {
    "text": "Deep Learning sempre requer datasets massivos para treinamento efetivo, sendo impossível obter bons resultados com pequenos conjuntos de dados.",
    "answer": "E",
    "comment": "Embora datasets grandes ajudem, técnicas como transfer learning, data augmentation, fine-tuning e few-shot learning permitem resultados efetivos com dados limitados.",
    "theme": "INTELIGÊNCIA ARTIFICIAL"
  },
  {
    "text": "Deepfakes utilizam Generative Adversarial Networks (GANs) onde duas redes neurais competem: uma gera conteúdo falso e outra tenta detectar falsificações.",
    "answer": "C",
    "comment": "GANs consistem em generator (cria conteúdo falso) e discriminator (detecta falsos), treinando adversarialmente até o generator produzir conteúdo indistinguível do real.",
    "theme": "Redes"
  },
  {
    "text": "Natural Language Processing (NLP) é uma subárea de IA que permite computadores compreenderem e processarem linguagem humana apenas em formato textual.",
    "answer": "E",
    "comment": "NLP moderno processa linguagem humana em múltiplas modalidades: texto, fala, linguagem de sinais, e até combinações multimodais (texto + imagem).",
    "theme": "Armazenamento"
  },
  {
    "text": "Algoritmos de clustering como K-means sempre requerem especificação prévia do número de clusters (k), limitando sua aplicabilidade em cenários exploratórios.",
    "answer": "E",
    "comment": "Enquanto K-means requer k predefinido, outros algoritmos como DBSCAN, hierarchical clustering ou métodos de determinação automática de k superam essa limitação.",
    "theme": "Sistemas Distribuídos"
  },
  {
    "text": "AI Generativa pode criar conteúdo original em múltiplos domínios (texto, imagem, código, música), mas sempre requer prompts detalhados para funcionar adequadamente.",
    "answer": "E",
    "comment": "IA generativa pode funcionar com prompts simples, sem prompts (geração não condicionada) ou com outros tipos de entrada (imagens, exemplos), não requerendo sempre prompts detalhados.",
    "theme": "INTELIGÊNCIA ARTIFICIAL"
  },
  {
    "text": "Overfitting em modelos de ML ocorre quando o modelo memoriza dados de treinamento mas generaliza mal para dados novos, sendo detectado por performance ruim em dados de validação.",
    "answer": "C",
    "comment": "Overfitting caracteriza-se por alta performance em treinamento mas baixa em validação/teste, indicando memorização ao invés de aprendizado de padrões generalizáveis.",
    "theme": "INTELIGÊNCIA ARTIFICIAL"
  },
  {
    "text": "Computer Vision utiliza apenas técnicas de deep learning para análise de imagens, tendo substituído completamente métodos tradicionais de processamento de imagem.",
    "answer": "E",
    "comment": "Embora deep learning seja dominante, métodos tradicionais (filtros, morfologia, SIFT, HOG) ainda são utilizados, especialmente em aplicações com recursos limitados ou requisitos específicos.",
    "theme": "Armazenamento"
  },
  {
    "text": "O Princípio de Locard estabelece que \\\"todo contato deixa um vestígio\\\", aplicando-se também ao ambiente digital onde atividades sempre deixam rastros nos sistemas.",
    "answer": "C",
    "comment": "O princípio de Locard aplica-se perfeitamente ao ambiente digital: toda interação deixa vestígios em logs, registros, metadados, caches, sendo fundamental para perícia forense.",
    "theme": "PRINCÍPIOS DA COMPUTAÇÃO FORENSE"
  },
  {
    "text": "A coleta de evidências digitais deve sempre priorizar dados voláteis como memória RAM, cache e processos ativos, pois são perdidos ao desligar o sistema.",
    "answer": "C",
    "comment": "Ordem de volatilidade determina prioridade na coleta: registros, cache, RAM, swap, rede, sistema de arquivos. Dados voláteis devem ser coletados primeiro para preservar evidências.",
    "theme": "Arquitetura de Computadores"
  },
  {
    "text": "Cadeia de custódia é dispensável em perícias de informática forense quando as evidências são coletadas pelo próprio perito que realizará a análise.",
    "answer": "E",
    "comment": "Cadeia de custódia é sempre obrigatória, independentemente de quem coleta ou analisa. Documenta integridade, autenticidade e continuidade das evidências do local até o tribunal.",
    "theme": "Armazenamento"
  },
  {
    "text": "Hash criptográfico (MD5, SHA) garante apenas a integridade dos dados forenses, não fornecendo informações sobre autenticidade ou data de criação das evidências.",
    "answer": "C",
    "comment": "Hashes verificam integridade (dados não foram alterados) mas não garantem autenticidade (origem) nem timestamp. Outras técnicas são necessárias para essas propriedades.",
    "theme": "Sistemas Distribuídos"
  },
  {
    "text": "Clonagem bit-a-bit (imagem forense) replica setor por setor incluindo espaços não alocados e dados deletados, diferindo de cópia lógica que copia apenas arquivos ativos.",
    "answer": "C",
    "comment": "Imagem bit-a-bit copia tudo: setores ocupados, livres, slack space, dados deletados. Cópia lógica copia apenas arquivos visíveis no sistema de arquivos.",
    "theme": "Armazenamento"
  },
  {
    "text": "Análise de metadados EXIF em imagens pode revelar informações como localização GPS, modelo da câmera e timestamp, sendo valiosa para estabelecer contexto da evidência.",
    "answer": "C",
    "comment": "Metadados EXIF contêm informações ricas: GPS, câmera, configurações, timestamps, software usado, sendo cruciais para autenticar e contextualizar evidências visuais.",
    "theme": "Sistemas de Arquivos"
  },
  {
    "text": "Live forensics é sempre preferível a post-mortem forensics porque preserva mais evidências e não altera o estado do sistema investigado.",
    "answer": "E",
    "comment": "Live forensics pode alterar o sistema (footprint do investigador). Post-mortem preserva estado inalterado. Escolha depende do cenário: sistemas críticos vs preservação de evidências voláteis.",
    "theme": "Forense Digital"
  },
  {
    "text": "Steganografia em arquivos pode ser detectada através de análise estatística da distribuição de dados, mesmo quando não se conhece a técnica específica utilizada.",
    "answer": "C",
    "comment": "Steganalysis usa métodos estatísticos para detectar anomalias na distribuição de dados que podem indicar presença de informação oculta, independentemente da técnica específica.",
    "theme": "PRINCÍPIOS DA COMPUTAÇÃO FORENSE"
  },
  {
    "text": "Recuperação de arquivos deletados é sempre possível em sistemas de arquivos modernos através de ferramentas forenses especializadas.",
    "answer": "E",
    "comment": "Recuperação depende de vários fatores: sobreescrita dos setores, journaling, TRIM em SSDs, fragmentação. Sistemas modernos e SSDs complicam significativamente a recuperação.",
    "theme": "Armazenamento"
  },
  {
    "text": "Crimes cibernéticos diferem de crimes tradicionais por utilizarem tecnologia como meio, ferramenta ou alvo, requerendo métodos especializados de investigação e coleta de evidências.",
    "answer": "C",
    "comment": "Crimes cibernéticos envolvem tecnologia como meio (phishing), ferramenta (ataques DDoS) ou alvo (invasão), exigindo conhecimento técnico especializado e métodos forenses específicos.  Considerações Finais Este simulado foi elaborado com base no edital oficial da PF 2025 e nas características da banca CEBRASPE, cobrindo todos os conhecimentos específicos exigidos para o cargo de Perito Criminal Federal em Informática Forense. As questões seguem o padrão certo/errado da banca, com distribuição equilibrada de respostas e comentários explicativos que justificam cada alternativa.  O simulado abrange desde fundamentos técnicos até aplicações práticas da perícia forense digital, preparando adequadamente os candidatos para a prova de conhecimentos específicos que representa 70 das 120 questões da prova objetiva.",
    "theme": "Forense Digital"
  }
];