// Questões organizadas por tópicos
const questionsByTopic = {
  fundamentos: [
    {
      text: "A arquitetura de von Neumann caracteriza-se por utilizar uma única memória para armazenar dados e instruções.",
      answer: true,
      comment: "Certo. Na arquitetura de von Neumann, dados e instruções compartilham o mesmo barramento e espaço de memória, diferentemente da arquitetura Harvard."
    },
    {
      text: "O barramento de endereços é responsável por transferir dados entre a CPU e a memória principal.",
      answer: false,
      comment: "Errado. O barramento de endereços transporta endereços de memória, enquanto o barramento de dados transfere os dados propriamente ditos."
    },
    {
      text: "O registrador acumulador é utilizado para armazenar temporariamente resultados de operações aritméticas e lógicas na CPU.",
      answer: true,
      comment: "Certo. O acumulador é um registrador fundamental para operações intermediárias na CPU."
    },
    {
      text: "O clock do processador determina a quantidade de instruções que podem ser executadas por segundo.",
      answer: false,
      comment: "Errado. O clock determina a frequência dos ciclos, mas a quantidade de instruções por ciclo depende da arquitetura (CPI)."
    },
    {
      text: "Memória cache é utilizada para aumentar a velocidade de acesso aos dados frequentemente utilizados pela CPU.",
      answer: true,
      comment: "Certo. A cache armazena dados temporários de acesso rápido, reduzindo a latência de acesso à memória principal."
    },
    {
      text: "O kernel monolítico é caracterizado por possuir todos os serviços do sistema operacional em um único espaço de execução.",
      answer: true,
      comment: "Certo. No kernel monolítico, todos os módulos rodam no mesmo espaço, diferentemente do microkernel."
    },
    {
      text: "No microkernel, drivers de dispositivos e sistemas de arquivos são executados fora do núcleo principal do sistema operacional.",
      answer: true,
      comment: "Certo. O microkernel delega serviços como drivers e sistemas de arquivos para processos de espaço de usuário."
    },
    {
      text: "O gerenciamento de memória virtual permite que programas utilizem mais memória do que a fisicamente disponível no sistema.",
      answer: true,
      comment: "Certo. A memória virtual utiliza técnicas como paginação para simular mais memória do que a física."
    },
    {
      text: "A segmentação de memória é uma técnica que divide a memória em blocos de tamanho fixo chamados de páginas.",
      answer: false,
      comment: "Errado. A segmentação divide a memória em segmentos de tamanhos variáveis; páginas são usadas na paginação."
    },
    {
      text: "O escalonador de processos do sistema operacional é responsável por decidir qual processo será executado pela CPU em determinado momento.",
      answer: true,
      comment: "Certo. O escalonador (scheduler) gerencia a ordem de execução dos processos."
    }
  ],
  sistemas: [
    {
      text: "O modo usuário do processador permite acesso irrestrito a todos os recursos do sistema.",
      answer: false,
      comment: "Errado. O modo usuário restringe o acesso a recursos críticos, protegendo o sistema."
    },
    {
      text: "O modo kernel permite que o sistema operacional execute instruções privilegiadas.",
      answer: true,
      comment: "Certo. Apenas no modo kernel é possível executar instruções privilegiadas."
    },
    {
      text: "A memória RAM é volátil, ou seja, perde seu conteúdo quando o computador é desligado.",
      answer: true,
      comment: "Certo. A RAM depende de energia para manter os dados."
    },
    {
      text: "O gerenciamento de memória do sistema operacional é responsável por evitar que dois processos acessem a mesma área de memória simultaneamente.",
      answer: true,
      comment: "Certo. O SO isola e protege áreas de memória entre processos."
    },
    {
      text: "O kernel é a camada mais externa do sistema operacional, responsável pela interface com o usuário.",
      answer: false,
      comment: "Errado. O kernel é a camada central, não a interface com o usuário."
    },
    {
      text: "DMA (Direct Memory Access) permite que dispositivos de E/S acessem a memória principal sem intervenção direta da CPU.",
      answer: true,
      comment: "Certo. DMA libera a CPU de transferências de dados entre dispositivos e memória."
    },
    {
      text: "A arquitetura Harvard utiliza barramentos separados para instruções e dados.",
      answer: true,
      comment: "Certo. Diferente da von Neumann, Harvard separa fisicamente os barramentos."
    },
    {
      text: "O swap é uma técnica de gerenciamento de memória que utiliza parte do disco rígido para simular memória RAM adicional.",
      answer: true,
      comment: "Certo. O swap amplia a memória disponível usando o disco."
    },
    {
      text: "O processador RISC possui um conjunto de instruções mais complexo que o CISC.",
      answer: false,
      comment: "Errado. RISC tem conjunto reduzido e instruções simples; CISC é mais complexo."
    },
    {
      text: "O gerenciamento de processos envolve apenas a criação e finalização de processos pelo sistema operacional.",
      answer: false,
      comment: "Errado. Envolve também escalonamento, sincronização, comunicação e controle de estados."
    }
  ],
  processadores: [
    {
      text: "O processador é responsável por executar instruções e processar dados em um sistema computacional.",
      answer: true,
      comment: "Certo. O processador é o núcleo de execução de instruções."
    },
    {
      text: "Processadores multi-core possuem múltiplos núcleos de processamento em um único chip.",
      answer: true,
      comment: "Certo. Multi-core aumenta o paralelismo e desempenho."
    },
    {
      text: "O pipeline em processadores permite a execução simultânea de múltiplas instruções em diferentes estágios.",
      answer: true,
      comment: "Certo. O pipeline aumenta a eficiência do processador."
    },
    {
      text: "A arquitetura CISC é caracterizada por instruções simples e de tamanho fixo.",
      answer: false,
      comment: "Errado. CISC possui instruções complexas e de tamanho variável."
    },
    {
      text: "O hyper-threading permite que um único núcleo de processador execute múltiplas threads simultaneamente.",
      answer: true,
      comment: "Certo. Hyper-threading aumenta o aproveitamento do núcleo."
    },
    {
      text: "O clock do processador é medido em hertz (Hz) e indica a frequência de operação do chip.",
      answer: true,
      comment: "Certo. O clock define a velocidade dos ciclos do processador."
    },
    {
      text: "A unidade de ponto flutuante (FPU) é responsável por operações aritméticas com números inteiros.",
      answer: false,
      comment: "Errado. A FPU realiza operações com números reais (ponto flutuante)."
    },
    {
      text: "Processadores ARM são amplamente utilizados em dispositivos móveis devido à sua eficiência energética.",
      answer: true,
      comment: "Certo. ARM é referência em baixo consumo de energia."
    },
    {
      text: "O registrador de instrução (IR) armazena o endereço da próxima instrução a ser executada.",
      answer: false,
      comment: "Errado. O IR armazena a instrução atual; o PC (Program Counter) armazena o endereço da próxima."
    },
    {
      text: "A execução especulativa em processadores visa aumentar o desempenho executando instruções antes de sua necessidade ser confirmada.",
      answer: true,
      comment: "Certo. Execução especulativa antecipa instruções para ganhar desempenho."
    }
  ],
  distribuidos: [
    {
      text: "Sistemas distribuídos são compostos por múltiplos computadores autônomos que cooperam para alcançar um objetivo comum.",
      answer: true,
      comment: "Certo. Sistemas distribuídos envolvem cooperação entre computadores independentes."
    },
    {
      text: "Em sistemas distribuídos, a transparência de localização permite que o usuário acesse recursos sem saber onde eles estão fisicamente localizados.",
      answer: true,
      comment: "Certo. Transparência de localização esconde a localização física dos recursos."
    },
    {
      text: "A escalabilidade é uma característica importante em sistemas distribuídos, permitindo o aumento de recursos sem perda significativa de desempenho.",
      answer: true,
      comment: "Certo. Sistemas distribuídos devem ser escaláveis."
    },
    {
      text: "A heterogeneidade em sistemas distribuídos refere-se à existência de diferentes tipos de hardware, sistemas operacionais e redes.",
      answer: true,
      comment: "Certo. Heterogeneidade é comum em ambientes distribuídos."
    },
    {
      text: "A comunicação em sistemas distribuídos pode ser realizada por troca de mensagens ou acesso remoto a objetos.",
      answer: true,
      comment: "Certo. Troca de mensagens e RPC são formas comuns de comunicação."
    },
    {
      text: "Falhas parciais são irrelevantes em sistemas distribuídos, pois não afetam o funcionamento global do sistema.",
      answer: false,
      comment: "Errado. Falhas parciais podem comprometer a disponibilidade e consistência do sistema."
    },
    {
      text: "A sincronização de relógios é um desafio em sistemas distribuídos devido à ausência de um relógio global.",
      answer: true,
      comment: "Certo. A sincronização de tempo é um problema clássico em sistemas distribuídos."
    },
    {
      text: "O middleware em sistemas distribuídos pode prover serviços como comunicação, segurança e gerenciamento de transações.",
      answer: true,
      comment: "Certo. Middleware é fundamental para abstrair a complexidade dos sistemas distribuídos."
    },
    {
      text: "A transparência de replicação permite que múltiplas cópias de dados sejam gerenciadas sem intervenção do usuário.",
      answer: true,
      comment: "Certo. O usuário não precisa saber quantas cópias existem ou onde estão."
    },
    {
      text: "Em sistemas distribuídos, a consistência eventual garante que todas as réplicas convergirão para o mesmo valor, eventualmente.",
      answer: true,
      comment: "Certo. Consistência eventual é um modelo comum em sistemas distribuídos."
    }
  ],
  virtualizacao: [
    {
      text: "Emuladores permitem que um sistema simule o funcionamento de outro hardware ou software, possibilitando a execução de programas não nativos.",
      answer: true,
      comment: "Certo. Emuladores simulam ambientes diferentes do original."
    },
    {
      text: "O desempenho de um emulador é, em geral, superior ao do hardware original que ele simula.",
      answer: false,
      comment: "Errado. Emuladores normalmente apresentam desempenho inferior devido à sobrecarga da simulação."
    },
    {
      text: "Emuladores são frequentemente utilizados para executar jogos antigos em computadores modernos.",
      answer: true,
      comment: "Certo. Emulação é comum para retrocompatibilidade de jogos."
    },
    {
      text: "A emulação de hardware pode ser feita tanto por software quanto por hardware dedicado.",
      answer: true,
      comment: "Certo. Existem emuladores baseados em software e hardware."
    },
    {
      text: "Emuladores não são úteis para testes de segurança em ambientes isolados.",
      answer: false,
      comment: "Errado. Emuladores são úteis para testes seguros e isolados."
    },
    {
      text: "Máquinas virtuais permitem a execução de múltiplos sistemas operacionais independentes em um mesmo hardware físico.",
      answer: true,
      comment: "Certo. Máquinas virtuais compartilham hardware físico entre vários sistemas."
    },
    {
      text: "O hipervisor é o componente responsável por gerenciar máquinas virtuais em um ambiente de virtualização.",
      answer: true,
      comment: "Certo. O hipervisor controla e isola as VMs."
    },
    {
      text: "Máquinas virtuais sempre compartilham o mesmo kernel do sistema operacional hospedeiro.",
      answer: false,
      comment: "Errado. Cada VM pode ter seu próprio kernel, diferente do hospedeiro."
    },
    {
      text: "A virtualização por hardware (full virtualization) permite que sistemas operacionais convidados sejam executados sem modificações.",
      answer: true,
      comment: "Certo. Full virtualization não exige alteração no SO convidado."
    },
    {
      text: "A paravirtualização exige modificações no sistema operacional convidado para funcionar corretamente.",
      answer: true,
      comment: "Certo. Paravirtualização requer adaptação do SO convidado."
    }
  ],
  raid: [
    {
      text: "RAID é uma tecnologia que combina múltiplos discos físicos em uma única unidade lógica para melhorar desempenho, confiabilidade ou ambos.",
      answer: true,
      comment: "Certo. RAID (Redundant Array of Independent Disks) combina discos para obter benefícios específicos."
    },
    {
      text: "RAID 0 (striping) oferece alta performance mas não fornece redundância de dados.",
      answer: true,
      comment: "Certo. RAID 0 distribui dados entre discos para performance, mas sem redundância."
    },
    {
      text: "RAID 1 (mirroring) duplica todos os dados em dois ou mais discos, oferecendo alta confiabilidade.",
      answer: true,
      comment: "Certo. RAID 1 mantém cópias idênticas dos dados em múltiplos discos."
    },
    {
      text: "RAID 5 utiliza paridade distribuída e requer no mínimo 3 discos para funcionar.",
      answer: true,
      comment: "Certo. RAID 5 distribui paridade entre discos e precisa de pelo menos 3 discos."
    },
    {
      text: "RAID 6 oferece proteção contra falha de até dois discos simultaneamente.",
      answer: true,
      comment: "Certo. RAID 6 usa dupla paridade, permitindo sobreviver a falha de 2 discos."
    },
    {
      text: "RAID 10 combina mirroring (RAID 1) com striping (RAID 0), oferecendo tanto performance quanto redundância.",
      answer: true,
      comment: "Certo. RAID 10 é uma combinação de RAID 1 e RAID 0."
    },
    {
      text: "RAID 0+1 é idêntico ao RAID 10 em termos de configuração e benefícios.",
      answer: false,
      comment: "Errado. RAID 0+1 e RAID 10 têm configurações diferentes, embora ambos combinem striping e mirroring."
    },
    {
      text: "O nível de RAID 3 utiliza paridade dedicada em um disco separado.",
      answer: true,
      comment: "Certo. RAID 3 usa um disco dedicado para armazenar informações de paridade."
    },
    {
      text: "RAID 4 é similar ao RAID 5, mas com paridade concentrada em um único disco.",
      answer: true,
      comment: "Certo. RAID 4 concentra a paridade em um disco, enquanto RAID 5 a distribui."
    },
    {
      text: "Hot spare é um disco de reserva que pode substituir automaticamente um disco falhado em um array RAID.",
      answer: true,
      comment: "Certo. Hot spare permite recuperação automática sem intervenção manual."
    },
    {
      text: "RAID software é implementado pelo sistema operacional, enquanto RAID hardware usa controlador dedicado.",
      answer: true,
      comment: "Certo. A implementação pode ser via software (SO) ou hardware (controlador)."
    },
    {
      text: "RAID hardware oferece melhor performance que RAID software, pois não consome recursos da CPU.",
      answer: true,
      comment: "Certo. RAID hardware tem processamento dedicado, liberando a CPU."
    },
    {
      text: "A capacidade útil de um RAID 1 com 2 discos de 1TB cada é 2TB.",
      answer: false,
      comment: "Errado. RAID 1 com 2 discos de 1TB oferece 1TB de capacidade útil (metade para redundância)."
    },
    {
      text: "RAID 5 com 4 discos de 1TB cada oferece 3TB de capacidade útil.",
      answer: true,
      comment: "Certo. RAID 5 usa 1 disco equivalente para paridade, então 4TB - 1TB = 3TB útil."
    },
    {
      text: "RAID 6 com 5 discos de 1TB cada oferece 3TB de capacidade útil.",
      answer: true,
      comment: "Certo. RAID 6 usa 2 discos equivalentes para paridade dupla, então 5TB - 2TB = 3TB útil."
    },
    {
      text: "A reconstrução de um array RAID após falha de disco pode levar horas ou dias, dependendo do tamanho.",
      answer: true,
      comment: "Certo. Reconstrução envolve recálculo de paridade e pode ser demorada."
    },
    {
      text: "RAID não protege contra falhas de software, vírus ou corrupção de dados.",
      answer: true,
      comment: "Certo. RAID protege contra falhas de hardware, não de software ou corrupção."
    },
    {
      text: "RAID 0 oferece a melhor performance de leitura e escrita entre todos os níveis de RAID.",
      answer: true,
      comment: "Certo. RAID 0 maximiza performance ao distribuir dados sem overhead de paridade."
    },
    {
      text: "RAID 1 oferece melhor performance de leitura que um disco único, pois pode ler de múltiplos discos simultaneamente.",
      answer: true,
      comment: "Certo. RAID 1 pode ler de diferentes espelhos simultaneamente."
    },
    {
      text: "RAID 5 oferece melhor performance de escrita que RAID 1 para a mesma quantidade de discos.",
      answer: false,
      comment: "Errado. RAID 5 tem overhead de cálculo de paridade, enquanto RAID 1 apenas duplica dados."
    },
    {
      text: "Nested RAID combina diferentes níveis de RAID para obter benefícios múltiplos.",
      answer: true,
      comment: "Certo. Exemplos incluem RAID 10, RAID 50, RAID 60."
    },
    {
      text: "RAID 50 combina RAID 5 com RAID 0, oferecendo striping com paridade distribuída.",
      answer: true,
      comment: "Certo. RAID 50 é RAID 0 de múltiplos arrays RAID 5."
    },
    {
      text: "RAID 60 combina RAID 6 com RAID 0, oferecendo striping com paridade dupla.",
      answer: true,
      comment: "Certo. RAID 60 é RAID 0 de múltiplos arrays RAID 6."
    },
    {
      text: "O write penalty em RAID 5 ocorre porque cada escrita requer leitura de dados antigos e paridade para recalcular.",
      answer: true,
      comment: "Certo. RAID 5 precisa ler dados antigos e paridade para atualizar a paridade."
    },
    {
      text: "RAID 1 não tem write penalty, pois apenas duplica dados sem cálculo de paridade.",
      answer: true,
      comment: "Certo. RAID 1 apenas escreve dados em múltiplos discos sem overhead adicional."
    },
    {
      text: "RAID 6 tem write penalty maior que RAID 5 devido ao cálculo de paridade dupla.",
      answer: true,
      comment: "Certo. RAID 6 calcula duas paridades, aumentando o overhead de escrita."
    },
    {
      text: "A falha de um disco em RAID 5 coloca o array em modo degradado, mas ainda funcional.",
      answer: true,
      comment: "Certo. RAID 5 pode continuar operando com um disco falhado, usando paridade para reconstruir dados."
    },
    {
      text: "RAID 0 não pode sobreviver a falha de nenhum disco, pois não há redundância.",
      answer: true,
      comment: "Certo. Qualquer falha em RAID 0 resulta em perda total de dados."
    },
    {
      text: "RAID 1 pode sobreviver a falha de até metade dos discos (desde que pelo menos um espelho sobreviva).",
      answer: true,
      comment: "Certo. RAID 1 pode perder até N-1 discos, onde N é o número total de discos."
    },
    {
      text: "A escolha do nível de RAID deve considerar fatores como performance, confiabilidade, custo e capacidade necessária.",
      answer: true,
      comment: "Certo. Cada nível de RAID tem trade-offs específicos que devem ser avaliados."
    }
  ],
  "sistemas-arquivos": [
    {
      text: "O NTFS (New Technology File System) é o sistema de arquivos padrão do Windows desde o Windows NT.",
      answer: true,
      comment: "Certo. NTFS substituiu o FAT como sistema padrão do Windows."
    },
    {
      text: "O FAT32 suporta arquivos individuais com tamanho máximo de 4GB.",
      answer: true,
      comment: "Certo. FAT32 limita arquivos a 4GB menos 1 byte devido ao tamanho do campo de tamanho."
    },
    {
      text: "O exFAT foi desenvolvido pela Microsoft para dispositivos de armazenamento removível, como cartões SD.",
      answer: true,
      comment: "Certo. exFAT é otimizado para dispositivos flash e removíveis."
    },
    {
      text: "O EXT3 é um sistema de arquivos com journaling, que registra operações para recuperação em caso de falha.",
      answer: true,
      comment: "Certo. EXT3 adicionou journaling ao EXT2 para maior confiabilidade."
    },
    {
      text: "O EXT4 é uma evolução do EXT3, oferecendo melhor performance e suporte a arquivos maiores.",
      answer: true,
      comment: "Certo. EXT4 introduziu melhorias significativas sobre o EXT3."
    },
    {
      text: "O XFS foi desenvolvido pela Silicon Graphics e é conhecido por sua excelente performance com arquivos grandes.",
      answer: true,
      comment: "Certo. XFS é otimizado para arquivos grandes e sistemas de alto desempenho."
    },
    {
      text: "O NTFS suporta compressão de arquivos e pastas nativa.",
      answer: true,
      comment: "Certo. NTFS oferece compressão transparente de arquivos e diretórios."
    },
    {
      text: "O FAT32 pode ser lido e escrito por sistemas Windows, Linux e macOS sem software adicional.",
      answer: true,
      comment: "Certo. FAT32 é amplamente suportado por diferentes sistemas operacionais."
    },
    {
      text: "O exFAT suporta arquivos maiores que 4GB, diferentemente do FAT32.",
      answer: true,
      comment: "Certo. exFAT remove a limitação de 4GB do FAT32."
    },
    {
      text: "O EXT3 oferece três níveis de journaling: journal, ordered e writeback.",
      answer: true,
      comment: "Certo. EXT3 permite escolher entre diferentes níveis de journaling."
    },
    {
      text: "O EXT4 suporta arquivos de até 16TB e volumes de até 1EB.",
      answer: true,
      comment: "Certo. EXT4 aumentou significativamente os limites de tamanho."
    },
    {
      text: "O XFS utiliza alocação de espaço baseada em extents, melhorando a performance.",
      answer: true,
      comment: "Certo. XFS usa extents para alocação eficiente de espaço."
    },
    {
      text: "O NTFS utiliza uma estrutura de dados chamada MFT (Master File Table) para armazenar metadados.",
      answer: true,
      comment: "Certo. MFT é o coração do NTFS, contendo informações sobre todos os arquivos."
    },
    {
      text: "O FAT32 utiliza uma tabela de alocação de arquivos (FAT) para rastrear clusters livres e ocupados.",
      answer: true,
      comment: "Certo. FAT é a estrutura fundamental do sistema FAT32."
    },
    {
      text: "O exFAT utiliza uma bitmap de alocação para gerenciar espaço em disco.",
      answer: true,
      comment: "Certo. exFAT usa bitmap para rastrear clusters livres e ocupados."
    },
    {
      text: "O EXT3 e EXT4 utilizam inodes para armazenar metadados de arquivos.",
      answer: true,
      comment: "Certo. Inodes são estruturas fundamentais nos sistemas EXT."
    },
    {
      text: "O XFS utiliza B-trees para organizar metadados, oferecendo melhor performance para operações de busca.",
      answer: true,
      comment: "Certo. B-trees permitem operações eficientes de busca e inserção."
    },
    {
      text: "O NTFS suporta permissões de acesso baseadas em ACLs (Access Control Lists).",
      answer: true,
      comment: "Certo. NTFS oferece controle granular de acesso através de ACLs."
    },
    {
      text: "O FAT32 não suporta permissões de arquivo nativas, sendo limitado a atributos básicos.",
      answer: true,
      comment: "Certo. FAT32 tem apenas atributos básicos como somente leitura e oculto."
    },
    {
      text: "O exFAT suporta timestamps com precisão de nanossegundos.",
      answer: true,
      comment: "Certo. exFAT oferece timestamps de alta precisão."
    },
    {
      text: "O EXT4 introduziu delayed allocation, que melhora a performance de escrita.",
      answer: true,
      comment: "Certo. Delayed allocation adia a alocação até que os dados sejam efetivamente escritos."
    },
    {
      text: "O XFS suporta journaling de metadados, mas não de dados.",
      answer: true,
      comment: "Certo. XFS faz journaling apenas de metadados para melhor performance."
    },
    {
      text: "O NTFS suporta criptografia de arquivos através do EFS (Encrypting File System).",
      answer: true,
      comment: "Certo. EFS permite criptografia transparente de arquivos no NTFS."
    },
    {
      text: "O FAT32 não suporta journaling, sendo vulnerável a corrupção em caso de falha durante escrita.",
      answer: true,
      comment: "Certo. FAT32 não tem mecanismos de recuperação como journaling."
    },
    {
      text: "O exFAT suporta clusters de tamanho variável, otimizando o uso de espaço.",
      answer: true,
      comment: "Certo. exFAT permite clusters de diferentes tamanhos para melhor eficiência."
    },
    {
      text: "O EXT4 suporta subvolumes, permitindo melhor organização de dados.",
      answer: false,
      comment: "Errado. Subvolumes são uma característica do Btrfs, não do EXT4."
    },
    {
      text: "O XFS oferece melhor performance que EXT4 para arquivos grandes e operações sequenciais.",
      answer: true,
      comment: "Certo. XFS é otimizado para arquivos grandes e operações sequenciais."
    },
    {
      text: "O NTFS suporta links simbólicos e hard links.",
      answer: true,
      comment: "Certo. NTFS oferece ambos os tipos de links."
    },
    {
      text: "O FAT32 não suporta links simbólicos, apenas links físicos limitados.",
      answer: true,
      comment: "Certo. FAT32 tem suporte limitado a links, sem links simbólicos."
    },
    {
      text: "O exFAT suporta nomes de arquivo de até 255 caracteres Unicode.",
      answer: true,
      comment: "Certo. exFAT oferece suporte completo a Unicode para nomes de arquivo."
    },
    {
      text: "O EXT4 suporta checksums de metadados, melhorando a detecção de corrupção.",
      answer: true,
      comment: "Certo. EXT4 usa checksums para verificar integridade de metadados."
    },
    {
      text: "O XFS suporta alocação de espaço preemptiva, reduzindo a fragmentação.",
      answer: true,
      comment: "Certo. XFS aloca espaço de forma preemptiva para minimizar fragmentação."
    }
  ],
  "computacao-quantica": [
    {
      text: "A computação quântica utiliza princípios da mecânica quântica para processar informações de forma diferente da computação clássica.",
      answer: true,
      comment: "Certo. A computação quântica se baseia em fenômenos quânticos como superposição e entrelaçamento."
    },
    {
      text: "Qubits são as unidades básicas de informação na computação quântica, equivalentes aos bits na computação clássica.",
      answer: true,
      comment: "Certo. Qubits podem existir em superposição de estados, diferentemente dos bits clássicos."
    },
    {
      text: "A superposição quântica permite que um qubit represente múltiplos estados simultaneamente.",
      answer: true,
      comment: "Certo. Um qubit pode estar em uma combinação linear de estados |0⟩ e |1⟩."
    },
    {
      text: "O entrelaçamento quântico é um fenômeno onde dois ou mais qubits se tornam correlacionados de forma que não podem ser descritos independentemente.",
      answer: true,
      comment: "Certo. O entrelaçamento é uma característica fundamental da mecânica quântica."
    },
    {
      text: "A decoerência é o processo pelo qual um sistema quântico perde suas propriedades quânticas devido à interação com o ambiente.",
      answer: true,
      comment: "Certo. A decoerência é um dos principais desafios na construção de computadores quânticos."
    },
    {
      text: "O algoritmo de Shor pode fatorar números grandes de forma exponencialmente mais rápida que algoritmos clássicos.",
      answer: true,
      comment: "Certo. O algoritmo de Shor representa uma ameaça potencial à criptografia RSA."
    },
    {
      text: "O algoritmo de Grover oferece uma aceleração quadrática para problemas de busca não estruturada.",
      answer: true,
      comment: "Certo. Grover reduz a complexidade de O(N) para O(√N) em buscas."
    },
    {
      text: "Portas quânticas são operações que manipulam qubits, equivalentes às portas lógicas da computação clássica.",
      answer: true,
      comment: "Certo. Portas quânticas são unitárias e reversíveis."
    },
    {
      text: "A porta Hadamard é uma porta quântica fundamental que cria superposição de estados.",
      answer: true,
      comment: "Certo. A porta Hadamard transforma |0⟩ em (|0⟩ + |1⟩)/√2."
    },
    {
      text: "A porta CNOT (Controlled-NOT) é uma porta de dois qubits que implementa o entrelaçamento.",
      answer: true,
      comment: "Certo. CNOT é uma porta fundamental para criar estados entrelaçados."
    },
    {
      text: "A medição quântica sempre colapsa um qubit em um estado definido (|0⟩ ou |1⟩).",
      answer: true,
      comment: "Certo. A medição destrói a superposição e colapsa o estado quântico."
    },
    {
      text: "Computadores quânticos podem resolver todos os problemas que computadores clássicos resolvem.",
      answer: false,
      comment: "Errado. Computadores quânticos são especializados para certos tipos de problemas."
    },
    {
      text: "A correção de erros quântica é mais complexa que a correção de erros clássica devido à natureza da informação quântica.",
      answer: true,
      comment: "Certo. Erros quânticos são contínuos e não podem ser copiados diretamente."
    },
    {
      text: "O teorema da não-clonagem afirma que é impossível copiar um estado quântico desconhecido.",
      answer: true,
      comment: "Certo. Este teorema é fundamental para a segurança da criptografia quântica."
    },
    {
      text: "A criptografia quântica utiliza princípios quânticos para garantir a segurança da comunicação.",
      answer: true,
      comment: "Certo. Protocolos como BB84 usam propriedades quânticas para distribuição de chaves."
    },
    {
      text: "Qubits físicos podem ser implementados usando diferentes tecnologias, como íons aprisionados ou circuitos supercondutores.",
      answer: true,
      comment: "Certo. Existem várias plataformas para implementar qubits físicos."
    },
    {
      text: "A supremacia quântica foi demonstrada quando um computador quântico resolveu um problema que seria intratável para supercomputadores clássicos.",
      answer: true,
      comment: "Certo. Google demonstrou supremacia quântica em 2019."
    },
    {
      text: "O número de qubits em um computador quântico determina diretamente sua capacidade computacional.",
      answer: false,
      comment: "Errado. A qualidade dos qubits e a conectividade também são fatores importantes."
    },
    {
      text: "A computação quântica adiabática é uma abordagem alternativa que evolui o sistema quântico lentamente.",
      answer: true,
      comment: "Certo. A computação adiabática é uma das abordagens para computação quântica."
    },
    {
      text: "O princípio da incerteza de Heisenberg impõe limitações fundamentais na medição de propriedades quânticas.",
      answer: true,
      comment: "Certo. O princípio da incerteza é uma limitação fundamental da mecânica quântica."
    },
    {
      text: "A teleportação quântica permite transferir o estado de um qubit para outro qubit distante usando entrelaçamento.",
      answer: true,
      comment: "Certo. A teleportação quântica não transfere matéria, apenas informação quântica."
    },
    {
      text: "Algoritmos quânticos sempre oferecem aceleração exponencial em relação a algoritmos clássicos.",
      answer: false,
      comment: "Errado. Nem todos os algoritmos quânticos oferecem aceleração exponencial."
    },
    {
      text: "A simulação quântica é uma aplicação promissora onde computadores quânticos simulam sistemas quânticos complexos.",
      answer: true,
      comment: "Certo. Simular sistemas quânticos é uma aplicação natural para computadores quânticos."
    },
    {
      text: "O ruído em computadores quânticos pode ser mitigado através de técnicas de correção de erros quânticos.",
      answer: true,
      comment: "Certo. A correção de erros quânticos é essencial para computação quântica prática."
    },
    {
      text: "A computação quântica baseada em nuvem permite acesso remoto a computadores quânticos através da internet.",
      answer: true,
      comment: "Certo. Plataformas como IBM Quantum Experience oferecem acesso via nuvem."
    },
    {
      text: "O algoritmo de Deutsch-Jozsa pode determinar se uma função é constante ou balanceada com uma única consulta quântica.",
      answer: true,
      comment: "Certo. Este algoritmo demonstra a vantagem da computação quântica para certos problemas."
    },
    {
      text: "A computação quântica pode revolucionar a otimização, machine learning e criptografia.",
      answer: true,
      comment: "Certo. Estas são áreas promissoras para aplicações da computação quântica."
    },
    {
      text: "Qubits topológicos são mais resistentes a erros devido à sua natureza topológica.",
      answer: true,
      comment: "Certo. Qubits topológicos são uma abordagem promissora para correção de erros."
    },
    {
      text: "A computação quântica não pode ser simulada eficientemente por computadores clássicos para sistemas grandes.",
      answer: true,
      comment: "Certo. A simulação clássica de sistemas quânticos grandes é exponencialmente difícil."
    },
    {
      text: "O desenvolvimento de computadores quânticos práticos ainda enfrenta desafios técnicos significativos.",
      answer: true,
      comment: "Certo. Desafios incluem decoerência, correção de erros e escalabilidade."
    }
  ],
  "bancos-dados": [
    {
      text: "A arquitetura de três níveis (three-tier architecture) separa a aplicação em camadas de apresentação, lógica de negócio e dados.",
      answer: true,
      comment: "Certo. Esta arquitetura promove separação de responsabilidades e escalabilidade."
    },
    {
      text: "O modelo relacional é baseado na teoria matemática dos conjuntos e álgebra relacional.",
      answer: true,
      comment: "Certo. O modelo relacional tem fundamentação matemática sólida."
    },
    {
      text: "O modelo hierárquico organiza dados em uma estrutura de árvore com relacionamentos pai-filho.",
      answer: true,
      comment: "Certo. O modelo hierárquico foi um dos primeiros modelos de dados."
    },
    {
      text: "O modelo de rede permite relacionamentos muitos-para-muitos complexos através de ponteiros.",
      answer: true,
      comment: "Certo. O modelo de rede é mais flexível que o hierárquico."
    },
    {
      text: "O modelo orientado a objetos integra dados e comportamento em objetos encapsulados.",
      answer: true,
      comment: "Certo. O modelo OO combina dados e métodos em objetos."
    },
    {
      text: "O modelo NoSQL é uma categoria que inclui diferentes tipos de bancos de dados não relacionais.",
      answer: true,
      comment: "Certo. NoSQL engloba document, key-value, column-family e graph databases."
    },
    {
      text: "A representação física de dados envolve como os dados são armazenados fisicamente no disco.",
      answer: true,
      comment: "Certo. Inclui estruturas de armazenamento, índices e organização de arquivos."
    },
    {
      text: "O modelo lógico define a estrutura dos dados independentemente de como são armazenados fisicamente.",
      answer: true,
      comment: "Certo. O modelo lógico é independente da implementação física."
    },
    {
      text: "A arquitetura cliente-servidor é a mais comum em sistemas de banco de dados modernos.",
      answer: true,
      comment: "Certo. Separa clientes (aplicações) do servidor de banco de dados."
    },
    {
      text: "O modelo de dados entidade-relacionamento (ER) é usado para modelagem conceitual de bancos de dados.",
      answer: true,
      comment: "Certo. O modelo ER é fundamental para design de bancos de dados."
    },
    {
      text: "A normalização é um processo que elimina redundância e anomalias de dados no modelo relacional.",
      answer: true,
      comment: "Certo. A normalização melhora a integridade e eficiência dos dados."
    },
    {
      text: "O modelo de dados semântico foca no significado dos dados e seus relacionamentos.",
      answer: true,
      comment: "Certo. Modelos semânticos representam conhecimento e significado."
    },
    {
      text: "A arquitetura distribuída permite que dados sejam armazenados em múltiplos locais geograficamente dispersos.",
      answer: true,
      comment: "Certo. Bancos distribuídos melhoram disponibilidade e performance."
    },
    {
      text: "O modelo de dados dimensional é otimizado para data warehousing e business intelligence.",
      answer: true,
      comment: "Certo. Modelos dimensionais usam fatos e dimensões para análise."
    },
    {
      text: "A representação física inclui decisões sobre índices, particionamento e compressão de dados.",
      answer: true,
      comment: "Certo. Estas decisões impactam diretamente a performance."
    },
    {
      text: "O modelo de dados temporal mantém histórico de mudanças nos dados ao longo do tempo.",
      answer: true,
      comment: "Certo. Modelos temporais rastreiam evolução temporal dos dados."
    },
    {
      text: "A arquitetura de microserviços pode usar bancos de dados separados para cada serviço (database per service).",
      answer: true,
      comment: "Certo. Esta abordagem promove independência entre serviços."
    },
    {
      text: "O modelo de dados XML é baseado em documentos hierárquicos com tags auto-descritivas.",
      answer: true,
      comment: "Certo. XML permite estrutura flexível e auto-descritiva."
    },
    {
      text: "A representação física de índices B-tree é otimizada para operações de busca e inserção.",
      answer: true,
      comment: "Certo. B-trees mantêm balanceamento e oferecem performance logarítmica."
    },
    {
      text: "O modelo de dados JSON é baseado em objetos JavaScript e é amplamente usado em APIs web.",
      answer: true,
      comment: "Certo. JSON é popular para troca de dados e document databases."
    },
    {
      text: "A arquitetura de replicação master-slave permite leituras distribuídas e alta disponibilidade.",
      answer: true,
      comment: "Certo. Master para escritas, slaves para leituras e backup."
    },
    {
      text: "O modelo de dados de grafos representa relacionamentos complexos entre entidades.",
      answer: true,
      comment: "Certo. Grafos são ideais para redes sociais, recomendações e navegação."
    },
    {
      text: "A representação física de dados inclui decisões sobre alinhamento de dados e padding.",
      answer: true,
      comment: "Certo. Alinhamento afeta performance de acesso à memória."
    },
    {
      text: "O modelo de dados de colunas armazena dados por coluna em vez de por linha.",
      answer: true,
      comment: "Certo. Column stores são otimizados para consultas analíticas."
    },
    {
      text: "A arquitetura de sharding distribui dados horizontalmente entre múltiplos servidores.",
      answer: true,
      comment: "Certo. Sharding melhora escalabilidade horizontal."
    },
    {
      text: "O modelo de dados de documentos armazena dados semi-estruturados em formatos como JSON ou XML.",
      answer: true,
      comment: "Certo. Document databases são flexíveis para dados variáveis."
    },
    {
      text: "A representação física de dados inclui técnicas de compressão para reduzir espaço em disco.",
      answer: true,
      comment: "Certo. Compressão economiza espaço e pode melhorar performance de I/O."
    },
    {
      text: "O modelo de dados key-value é o mais simples, armazenando pares chave-valor.",
      answer: true,
      comment: "Certo. Key-value stores são simples e muito rápidos para operações básicas."
    },
    {
      text: "A arquitetura de cache em memória (in-memory) oferece performance superior para dados frequentemente acessados.",
      answer: true,
      comment: "Certo. Cache em memória reduz latência de acesso a dados."
    },
    {
      text: "O modelo de dados de séries temporais é otimizado para dados que mudam ao longo do tempo.",
      answer: true,
      comment: "Certo. Time series databases são ideais para IoT, métricas e monitoramento."
    },
    {
      text: "A representação física de dados inclui decisões sobre fragmentação e distribuição de dados.",
      answer: true,
      comment: "Certo. Fragmentação pode melhorar performance e disponibilidade."
    }
  ],
  "bancos-multidimensionais": [
    {
      text: "Bancos de dados multidimensionais são otimizados para análise de dados e business intelligence.",
      answer: true,
      comment: "Certo. São projetados especificamente para consultas analíticas complexas."
    },
    {
      text: "O modelo dimensional utiliza fatos e dimensões como conceitos fundamentais.",
      answer: true,
      comment: "Certo. Fatos são medidas numéricas, dimensões são contextos de análise."
    },
    {
      text: "Fatos são tabelas que contêm medidas numéricas e chaves estrangeiras para dimensões.",
      answer: true,
      comment: "Certo. Fatos representam eventos ou transações mensuráveis."
    },
    {
      text: "Dimensões são tabelas que fornecem contexto descritivo para análise dos fatos.",
      answer: true,
      comment: "Certo. Dimensões permitem filtrar, agrupar e analisar fatos."
    },
    {
      text: "O esquema em estrela (star schema) é o modelo dimensional mais simples e comum.",
      answer: true,
      comment: "Certo. Uma tabela de fatos central conectada a múltiplas dimensões."
    },
    {
      text: "O esquema em floco de neve (snowflake schema) normaliza as dimensões para reduzir redundância.",
      answer: true,
      comment: "Certo. Dimensões são normalizadas em múltiplas tabelas relacionadas."
    },
    {
      text: "O esquema em constelação (constellation schema) permite múltiplas tabelas de fatos compartilhando dimensões.",
      answer: true,
      comment: "Certo. Múltiplos fatos podem usar as mesmas dimensões."
    },
    {
      text: "Hierarquias em dimensões permitem análise em diferentes níveis de agregação.",
      answer: true,
      comment: "Certo. Exemplo: País → Estado → Cidade → Bairro."
    },
    {
      text: "Dimensões de tempo são fundamentais em data warehouses para análise temporal.",
      answer: true,
      comment: "Certo. Permitem análise por período, mês, trimestre, ano, etc."
    },
    {
      text: "Dimensões degeneradas são chaves que não se referem a tabelas de dimensão separadas.",
      answer: true,
      comment: "Certo. São chaves que ficam na tabela de fatos sem dimensão própria."
    },
    {
      text: "Slowly Changing Dimensions (SCD) tratam mudanças em dados de dimensão ao longo do tempo.",
      answer: true,
      comment: "Certo. Permitem rastrear histórico de mudanças em dimensões."
    },
    {
      text: "Dimensões conformadas são dimensões padronizadas usadas por múltiplos data marts.",
      answer: true,
      comment: "Certo. Garantem consistência entre diferentes áreas de negócio."
    },
    {
      text: "Fatos aditivos podem ser somados através de todas as dimensões.",
      answer: true,
      comment: "Certo. Exemplos: vendas, quantidade, receita."
    },
    {
      text: "Fatos semi-aditivos podem ser somados através de algumas dimensões, mas não de todas.",
      answer: true,
      comment: "Certo. Exemplo: saldo bancário pode ser somado por conta, mas não por tempo."
    },
    {
      text: "Fatos não-aditivos não podem ser somados diretamente.",
      answer: true,
      comment: "Certo. Exemplos: percentuais, médias, índices."
    },
    {
      text: "OLAP (Online Analytical Processing) é a tecnologia para análise multidimensional de dados.",
      answer: true,
      comment: "Certo. OLAP permite análise interativa de dados multidimensionais."
    },
    {
      text: "Cubos OLAP são estruturas de dados que permitem análise em múltiplas dimensões simultaneamente.",
      answer: true,
      comment: "Certo. Cubos facilitam drill-down, drill-up e slice-and-dice."
    },
    {
      text: "Drill-down permite navegar de níveis mais altos para mais baixos em uma hierarquia.",
      answer: true,
      comment: "Certo. Exemplo: de País para Estado para Cidade."
    },
    {
      text: "Drill-up (roll-up) permite navegar de níveis mais baixos para mais altos em uma hierarquia.",
      answer: true,
      comment: "Certo. Exemplo: de Cidade para Estado para País."
    },
    {
      text: "Slice-and-dice permite cortar o cubo em diferentes dimensões para análise.",
      answer: true,
      comment: "Certo. Permite visualizar dados de diferentes perspectivas."
    },
    {
      text: "MOLAP (Multidimensional OLAP) armazena dados em estruturas multidimensionais proprietárias.",
      answer: true,
      comment: "Certo. MOLAP oferece performance superior para consultas pré-calculadas."
    },
    {
      text: "ROLAP (Relational OLAP) utiliza banco de dados relacional para armazenar dados multidimensionais.",
      answer: true,
      comment: "Certo. ROLAP é mais flexível e pode lidar com volumes maiores de dados."
    },
    {
      text: "HOLAP (Hybrid OLAP) combina características de MOLAP e ROLAP.",
      answer: true,
      comment: "Certo. HOLAP usa ROLAP para dados detalhados e MOLAP para agregados."
    },
    {
      text: "Agregações pré-calculadas melhoram a performance de consultas OLAP frequentes.",
      answer: true,
      comment: "Certo. Evitam recálculos custosos durante consultas."
    },
    {
      text: "Dimensões de data permitem análise temporal com diferentes granularidades.",
      answer: true,
      comment: "Certo. Permitem análise por dia, semana, mês, trimestre, ano."
    },
    {
      text: "Dimensões de produto podem incluir hierarquias como categoria → subcategoria → produto.",
      answer: true,
      comment: "Certo. Hierarquias permitem análise em diferentes níveis de detalhe."
    },
    {
      text: "Dimensões de cliente podem incluir informações demográficas e comportamentais.",
      answer: true,
      comment: "Certo. Permitem segmentação e análise de comportamento."
    },
    {
      text: "Dimensões de localização permitem análise geográfica e territorial.",
      answer: true,
      comment: "Certo. Incluem hierarquias como País → Estado → Cidade."
    },
    {
      text: "Fatos de transação registram eventos individuais como vendas ou pedidos.",
      answer: true,
      comment: "Certo. Cada linha representa uma transação específica."
    },
    {
      text: "Fatos de período registram medidas acumuladas em um período específico.",
      answer: true,
      comment: "Certo. Exemplos: estoque no fim do mês, saldo bancário."
    },
    {
      text: "Fatos de evento registram ocorrências específicas sem medidas numéricas.",
      answer: true,
      comment: "Certo. Exemplos: logins, cliques, visitas."
    }
  ],
  sqlite: [
    {
      text: "SQLite é um sistema gerenciador de banco de dados relacional que implementa um motor de banco de dados SQL.",
      answer: true,
      comment: "Certo. SQLite é um SGBD relacional completo e autocontido."
    },
    {
      text: "SQLite é um banco de dados serverless, não requerendo um processo servidor separado para funcionar.",
      answer: true,
      comment: "Certo. SQLite opera diretamente no processo da aplicação."
    },
    {
      text: "SQLite armazena todo o banco de dados em um único arquivo no sistema de arquivos.",
      answer: true,
      comment: "Certo. Todo o banco é contido em um arquivo, facilitando backup e portabilidade."
    },
    {
      text: "SQLite é amplamente utilizado em aplicações móveis devido ao seu tamanho pequeno e simplicidade.",
      answer: true,
      comment: "Certo. É padrão em iOS e Android para armazenamento local."
    },
    {
      text: "SQLite suporta transações ACID (Atomicidade, Consistência, Isolamento, Durabilidade).",
      answer: true,
      comment: "Certo. SQLite garante integridade de dados através de transações ACID."
    },
    {
      text: "SQLite é escrito em linguagem C e pode ser facilmente integrado em aplicações C/C++.",
      answer: true,
      comment: "Certo. SQLite é uma biblioteca C que pode ser linkada diretamente."
    },
    {
      text: "SQLite suporta a maioria dos comandos SQL padrão, incluindo SELECT, INSERT, UPDATE e DELETE.",
      answer: true,
      comment: "Certo. SQLite implementa SQL-92 com algumas extensões."
    },
    {
      text: "SQLite não suporta usuários e permissões, pois é projetado para uso local e embutido.",
      answer: true,
      comment: "Certo. Segurança é gerenciada pelo sistema de arquivos do SO."
    },
    {
      text: "SQLite utiliza bloqueio em nível de arquivo para controlar acesso concorrente ao banco.",
      answer: true,
      comment: "Certo. O arquivo inteiro é bloqueado durante escritas."
    },
    {
      text: "SQLite suporta índices para melhorar a performance de consultas.",
      answer: true,
      comment: "Certo. Índices podem ser criados em uma ou múltiplas colunas."
    },
    {
      text: "SQLite implementa triggers que podem ser executados automaticamente em resposta a mudanças nos dados.",
      answer: true,
      comment: "Certo. Triggers podem ser BEFORE ou AFTER INSERT, UPDATE, DELETE."
    },
    {
      text: "SQLite suporta views que são tabelas virtuais baseadas em consultas SQL.",
      answer: true,
      comment: "Certo. Views simplificam consultas complexas e fornecem abstração."
    },
    {
      text: "SQLite não suporta stored procedures como outros SGBDs relacionais.",
      answer: true,
      comment: "Certo. SQLite não tem linguagem procedural própria."
    },
    {
      text: "SQLite suporta foreign keys, mas esta funcionalidade deve ser habilitada explicitamente.",
      answer: true,
      comment: "Certo. Foreign keys são opcionais e devem ser ativadas via PRAGMA."
    },
    {
      text: "SQLite utiliza um sistema de tipos dinâmicos onde o tipo de uma coluna é determinado pelo valor armazenado.",
      answer: true,
      comment: "Certo. SQLite tem tipagem dinâmica, não estática."
    },
    {
      text: "SQLite suporta os tipos de dados: NULL, INTEGER, REAL, TEXT e BLOB.",
      answer: true,
      comment: "Certo. Estes são os tipos fundamentais suportados pelo SQLite."
    },
    {
      text: "SQLite pode ser usado como banco de dados temporário em memória usando ':memory:' como nome do arquivo.",
      answer: true,
      comment: "Certo. Banco em memória é útil para testes e cache temporário."
    },
    {
      text: "SQLite suporta backup online através do comando VACUUM.",
      answer: true,
      comment: "Certo. VACUUM reorganiza o banco e libera espaço não utilizado."
    },
    {
      text: "SQLite é usado pelo navegador Firefox para armazenar dados de navegação e configurações.",
      answer: true,
      comment: "Certo. Firefox usa SQLite para bookmarks, histórico, cookies, etc."
    },
    {
      text: "SQLite suporta expressões regulares através da função REGEXP.",
      answer: true,
      comment: "Certo. REGEXP permite busca com padrões complexos."
    },
    {
      text: "SQLite implementa um sistema de journaling para garantir durabilidade das transações.",
      answer: true,
      comment: "Certo. Journaling registra mudanças para recuperação em caso de falha."
    },
    {
      text: "SQLite suporta funções de agregação personalizadas através de callbacks.",
      answer: true,
      comment: "Certo. Desenvolvedores podem criar funções de agregação customizadas."
    },
    {
      text: "SQLite é usado em sistemas embarcados devido ao seu tamanho pequeno e baixo consumo de recursos.",
      answer: true,
      comment: "Certo. Ideal para dispositivos com recursos limitados."
    },
    {
      text: "SQLite suporta transações aninhadas através de SAVEPOINT.",
      answer: true,
      comment: "Certo. SAVEPOINT permite controle granular de transações."
    },
    {
      text: "SQLite não suporta replicação nativa, pois é projetado para uso local.",
      answer: true,
      comment: "Certo. Replicação deve ser implementada na camada da aplicação."
    },
    {
      text: "SQLite suporta full-text search através da extensão FTS (Full-Text Search).",
      answer: true,
      comment: "Certo. FTS permite busca eficiente em texto completo."
    },
    {
      text: "SQLite é usado em aplicações desktop como o Adobe Reader para armazenar dados de configuração.",
      answer: true,
      comment: "Certo. Muitas aplicações desktop usam SQLite para dados locais."
    },
    {
      text: "SQLite suporta R-trees para indexação espacial de dados geográficos.",
      answer: true,
      comment: "Certo. R-trees são úteis para consultas espaciais e geográficas."
    },
    {
      text: "SQLite implementa um sistema de cache para melhorar a performance de leitura.",
      answer: true,
      comment: "Certo. Cache reduz acesso ao disco e melhora performance."
    },
    {
      text: "SQLite é usado em sistemas de controle de versão como Git para armazenar metadados.",
      answer: true,
      comment: "Certo. Git usa SQLite para armazenar informações sobre commits e branches."
    },
    {
      text: "SQLite suporta backup incremental através de snapshots do arquivo do banco.",
      answer: true,
      comment: "Certo. Backup pode ser feito copiando o arquivo do banco."
    }
  ],
  sql: [
    {
      text: "SQL (Structured Query Language) é uma linguagem padrão para gerenciar e consultar bancos de dados relacionais.",
      answer: true,
      comment: "Certo. SQL é a linguagem padrão para SGBDs relacionais."
    },
    {
      text: "O comando SELECT é usado para recuperar dados de uma ou mais tabelas em um banco de dados.",
      answer: true,
      comment: "Certo. SELECT é o comando fundamental para consultas em SQL."
    },
    {
      text: "A cláusula WHERE é usada para filtrar registros em uma consulta SQL baseada em condições específicas.",
      answer: true,
      comment: "Certo. WHERE permite especificar critérios de filtragem."
    },
    {
      text: "O comando INSERT é utilizado para adicionar novos registros em uma tabela do banco de dados.",
      answer: true,
      comment: "Certo. INSERT adiciona uma ou mais linhas à tabela."
    },
    {
      text: "O comando UPDATE permite modificar dados existentes em uma tabela do banco de dados.",
      answer: true,
      comment: "Certo. UPDATE altera valores em registros existentes."
    },
    {
      text: "O comando DELETE remove registros de uma tabela baseado em condições especificadas.",
      answer: true,
      comment: "Certo. DELETE remove linhas que atendem aos critérios da cláusula WHERE."
    },
    {
      text: "A cláusula ORDER BY é usada para ordenar os resultados de uma consulta SQL.",
      answer: true,
      comment: "Certo. ORDER BY permite ordenar por uma ou mais colunas."
    },
    {
      text: "A cláusula GROUP BY agrupa registros baseado em valores de colunas específicas.",
      answer: true,
      comment: "Certo. GROUP BY é usado com funções de agregação."
    },
    {
      text: "Funções de agregação como COUNT, SUM, AVG, MAX e MIN são usadas para calcular valores baseados em grupos de dados.",
      answer: true,
      comment: "Certo. Estas funções operam sobre conjuntos de valores."
    },
    {
      text: "A cláusula HAVING é usada para filtrar grupos de dados após o uso de GROUP BY.",
      answer: true,
      comment: "Certo. HAVING filtra resultados de agregação."
    },
    {
      text: "JOIN é usado para combinar dados de múltiplas tabelas baseado em relacionamentos entre elas.",
      answer: true,
      comment: "Certo. JOIN permite consultas que envolvem várias tabelas."
    },
    {
      text: "INNER JOIN retorna apenas os registros que têm correspondência em ambas as tabelas.",
      answer: true,
      comment: "Certo. INNER JOIN retorna apenas registros com match em ambas as tabelas."
    },
    {
      text: "LEFT JOIN retorna todos os registros da tabela à esquerda e os correspondentes da tabela à direita.",
      answer: true,
      comment: "Certo. LEFT JOIN preserva todos os registros da tabela principal."
    },
    {
      text: "RIGHT JOIN retorna todos os registros da tabela à direita e os correspondentes da tabela à esquerda.",
      answer: true,
      comment: "Certo. RIGHT JOIN preserva todos os registros da tabela secundária."
    },
    {
      text: "FULL OUTER JOIN retorna todos os registros de ambas as tabelas, mesmo sem correspondência.",
      answer: true,
      comment: "Certo. FULL OUTER JOIN combina LEFT e RIGHT JOIN."
    },
    {
      text: "A cláusula DISTINCT remove duplicatas dos resultados de uma consulta SQL.",
      answer: true,
      comment: "Certo. DISTINCT retorna valores únicos."
    },
    {
      text: "Subconsultas (subqueries) são consultas SQL aninhadas dentro de outras consultas.",
      answer: true,
      comment: "Certo. Subconsultas podem ser usadas em SELECT, FROM, WHERE, etc."
    },
    {
      text: "O operador EXISTS verifica se uma subconsulta retorna algum resultado.",
      answer: true,
      comment: "Certo. EXISTS retorna TRUE se a subconsulta retornar pelo menos uma linha."
    },
    {
      text: "O operador IN verifica se um valor está presente em um conjunto de valores ou subconsulta.",
      answer: true,
      comment: "Certo. IN é útil para verificar pertencimento a conjuntos."
    },
    {
      text: "A cláusula LIMIT restringe o número de registros retornados por uma consulta SQL.",
      answer: true,
      comment: "Certo. LIMIT é útil para paginação e controle de resultados."
    },
    {
      text: "O comando CREATE TABLE é usado para criar uma nova tabela no banco de dados.",
      answer: true,
      comment: "Certo. CREATE TABLE define a estrutura da tabela."
    },
    {
      text: "O comando ALTER TABLE permite modificar a estrutura de uma tabela existente.",
      answer: true,
      comment: "Certo. ALTER TABLE pode adicionar, modificar ou remover colunas."
    },
    {
      text: "O comando DROP TABLE remove uma tabela e todos os seus dados do banco de dados.",
      answer: true,
      comment: "Certo. DROP TABLE é uma operação destrutiva e irreversível."
    },
    {
      text: "Constraints como PRIMARY KEY, FOREIGN KEY e UNIQUE são usadas para garantir integridade dos dados.",
      answer: true,
      comment: "Certo. Constraints impõem regras de integridade."
    },
    {
      text: "O comando CREATE INDEX cria um índice para melhorar a performance de consultas.",
      answer: true,
      comment: "Certo. Índices aceleram operações de busca."
    },
    {
      text: "O comando CREATE VIEW cria uma tabela virtual baseada em uma consulta SQL.",
      answer: true,
      comment: "Certo. Views simplificam consultas complexas."
    },
    {
      text: "O comando CREATE TRIGGER define ações automáticas que são executadas quando dados são modificados.",
      answer: true,
      comment: "Certo. Triggers podem ser BEFORE ou AFTER INSERT, UPDATE, DELETE."
    },
    {
      text: "O comando CREATE PROCEDURE define um conjunto de instruções SQL que podem ser executadas como uma unidade.",
      answer: true,
      comment: "Certo. Stored procedures encapsulam lógica de negócio."
    },
    {
      text: "O comando GRANT é usado para conceder privilégios a usuários ou roles no banco de dados.",
      answer: true,
      comment: "Certo. GRANT controla acesso a objetos do banco."
    },
    {
      text: "O comando REVOKE remove privilégios previamente concedidos a usuários ou roles.",
      answer: true,
      comment: "Certo. REVOKE é o oposto de GRANT."
    },
    {
      text: "O comando COMMIT finaliza uma transação e torna as mudanças permanentes no banco de dados.",
      answer: true,
      comment: "Certo. COMMIT confirma as mudanças da transação."
    },
    {
      text: "O comando ROLLBACK desfaz todas as mudanças feitas na transação atual.",
      answer: true,
      comment: "Certo. ROLLBACK reverte mudanças não confirmadas."
    }
  ],
  transacoes: [
    {
      text: "Transações são unidades lógicas de trabalho que consistem em uma sequência de operações de banco de dados.",
      answer: true,
      comment: "Certo. Transações agrupam operações relacionadas em uma unidade atômica."
    },
    {
      text: "A propriedade ACID garante que transações sejam Atomicidade, Consistência, Isolamento e Durabilidade.",
      answer: true,
      comment: "Certo. ACID é o conjunto de propriedades que garantem confiabilidade das transações."
    },
    {
      text: "Atomicidade garante que uma transação seja executada completamente ou não seja executada de forma alguma.",
      answer: true,
      comment: "Certo. Atomicidade previne execução parcial de transações."
    },
    {
      text: "Consistência garante que uma transação leve o banco de dados de um estado válido para outro estado válido.",
      answer: true,
      comment: "Certo. A transação deve respeitar todas as regras de integridade."
    },
    {
      text: "Isolamento garante que transações concorrentes não interfiram umas com as outras.",
      answer: true,
      comment: "Certo. Isolamento previne problemas como dirty read, non-repeatable read e phantom read."
    },
    {
      text: "Durabilidade garante que mudanças confirmadas por transações sejam permanentes mesmo em caso de falha do sistema.",
      answer: true,
      comment: "Certo. Durabilidade assegura que COMMIT seja permanente."
    },
    {
      text: "Logs de transação registram todas as operações realizadas para permitir recuperação em caso de falha.",
      answer: true,
      comment: "Certo. Logs são essenciais para recuperação e análise de transações."
    },
    {
      text: "Write-Ahead Logging (WAL) garante que mudanças sejam registradas no log antes de serem aplicadas ao banco.",
      answer: true,
      comment: "Certo. WAL é uma técnica fundamental para garantir durabilidade."
    },
    {
      text: "Checkpoint é um ponto no tempo onde o estado do banco é consistente e pode ser usado para recuperação.",
      answer: true,
      comment: "Certo. Checkpoints reduzem o tempo de recuperação."
    },
    {
      text: "Deadlock ocorre quando duas ou mais transações esperam por recursos que estão sendo usados por outras transações.",
      answer: true,
      comment: "Certo. Deadlock é um problema clássico em sistemas de transações concorrentes."
    },
    {
      text: "Dirty read ocorre quando uma transação lê dados que foram modificados por outra transação ainda não confirmada.",
      answer: true,
      comment: "Certo. Dirty read é um problema de isolamento."
    },
    {
      text: "Non-repeatable read ocorre quando uma transação lê o mesmo dado duas vezes e obtém valores diferentes.",
      answer: true,
      comment: "Certo. Isso acontece quando outra transação modifica o dado entre as leituras."
    },
    {
      text: "Phantom read ocorre quando uma transação executa a mesma consulta duas vezes e obtém conjuntos de resultados diferentes.",
      answer: true,
      comment: "Certo. Phantom read é causado por inserções ou deleções de outras transações."
    },
    {
      text: "Níveis de isolamento definem o grau de isolamento entre transações concorrentes.",
      answer: true,
      comment: "Certo. Níveis incluem READ UNCOMMITTED, READ COMMITTED, REPEATABLE READ e SERIALIZABLE."
    },
    {
      text: "READ UNCOMMITTED é o nível de isolamento mais baixo, permitindo dirty reads.",
      answer: true,
      comment: "Certo. READ UNCOMMITTED oferece melhor performance mas menor isolamento."
    },
    {
      text: "SERIALIZABLE é o nível de isolamento mais alto, garantindo execução serial das transações.",
      answer: true,
      comment: "Certo. SERIALIZABLE previne todos os problemas de isolamento."
    },
    {
      text: "Two-Phase Locking (2PL) é um protocolo que garante serializabilidade através de bloqueios.",
      answer: true,
      comment: "Certo. 2PL tem fase de crescimento e fase de encolhimento."
    },
    {
      text: "Timestamp ordering é uma técnica de controle de concorrência que usa timestamps para ordenar transações.",
      answer: true,
      comment: "Certo. Timestamps determinam a ordem de execução das transações."
    },
    {
      text: "Log de redo (redo log) registra operações para permitir refazer mudanças em caso de recuperação.",
      answer: true,
      comment: "Certo. Redo log é usado para recuperação forward."
    },
    {
      text: "Log de undo (undo log) registra informações para permitir desfazer mudanças em caso de rollback.",
      answer: true,
      comment: "Certo. Undo log é usado para rollback de transações."
    },
    {
      text: "Análise de logs permite identificar padrões de uso, performance e problemas em transações.",
      answer: true,
      comment: "Certo. Logs são ferramentas valiosas para diagnóstico e otimização."
    },
    {
      text: "Long-running transactions podem causar problemas de performance e bloqueio de recursos.",
      answer: true,
      comment: "Certo. Transações longas aumentam a probabilidade de deadlocks."
    },
    {
      text: "Distributed transactions envolvem múltiplos bancos de dados ou sistemas.",
      answer: true,
      comment: "Certo. Distributed transactions são mais complexas que transações locais."
    },
    {
      text: "Two-Phase Commit (2PC) é um protocolo para garantir atomicidade em transações distribuídas.",
      answer: true,
      comment: "Certo. 2PC coordena commit entre múltiplos participantes."
    },
    {
      text: "Log shipping é uma técnica de replicação que usa logs de transação para sincronizar bancos de dados.",
      answer: true,
      comment: "Certo. Log shipping é usado para backup e alta disponibilidade."
    },
    {
      text: "Point-in-time recovery permite restaurar um banco de dados para um momento específico no passado.",
      answer: true,
      comment: "Certo. Usa logs de transação para restaurar até um timestamp específico."
    },
    {
      text: "Log truncation remove logs antigos para liberar espaço em disco.",
      answer: true,
      comment: "Certo. Log truncation deve ser feita após backup ou checkpoint."
    },
    {
      text: "Log analysis tools podem identificar transações problemáticas e otimizar performance.",
      answer: true,
      comment: "Certo. Ferramentas de análise ajudam a diagnosticar problemas."
    },
    {
      text: "Transaction logs podem ser usados para auditoria e compliance em sistemas críticos.",
      answer: true,
      comment: "Certo. Logs fornecem rastreabilidade completa de operações."
    },
    {
      text: "Log compression reduz o tamanho dos logs de transação para economizar espaço em disco.",
      answer: true,
      comment: "Certo. Compressão é importante para logs de longa duração."
    }
  ],
  nosql: [
    {
      text: "NoSQL é um termo que se refere a bancos de dados que não seguem o modelo relacional tradicional.",
      answer: true,
      comment: "Certo. NoSQL significa 'Not Only SQL' e inclui diversos tipos de bancos de dados."
    },
    {
      text: "Bancos NoSQL são projetados para lidar com grandes volumes de dados não estruturados ou semi-estruturados.",
      answer: true,
      comment: "Certo. NoSQL é otimizado para big data e dados variáveis."
    },
    {
      text: "Document databases armazenam dados em formato de documentos, como JSON ou XML.",
      answer: true,
      comment: "Certo. MongoDB, CouchDB e Couchbase são exemplos de document databases."
    },
    {
      text: "Key-value stores são os bancos NoSQL mais simples, armazenando pares chave-valor.",
      answer: true,
      comment: "Certo. Redis, DynamoDB e Riak são exemplos de key-value stores."
    },
    {
      text: "Column-family databases organizam dados em famílias de colunas em vez de linhas.",
      answer: true,
      comment: "Certo. Cassandra e HBase são exemplos de column-family databases."
    },
    {
      text: "Graph databases são otimizados para armazenar e consultar relacionamentos complexos entre entidades.",
      answer: true,
      comment: "Certo. Neo4j, ArangoDB e Amazon Neptune são exemplos de graph databases."
    },
    {
      text: "NoSQL databases geralmente oferecem melhor escalabilidade horizontal que bancos relacionais tradicionais.",
      answer: true,
      comment: "Certo. NoSQL é projetado para distribuição e escalabilidade horizontal."
    },
    {
      text: "Bancos NoSQL frequentemente sacrificam consistência forte em favor de disponibilidade e tolerância a partições (CAP theorem).",
      answer: true,
      comment: "Certo. Muitos NoSQL seguem o modelo BASE (Basically Available, Soft state, Eventually consistent)."
    },
    {
      text: "MongoDB é um document database que armazena dados em formato BSON (Binary JSON).",
      answer: true,
      comment: "Certo. MongoDB é um dos document databases mais populares."
    },
    {
      text: "Redis é um key-value store que pode operar em memória para máxima performance.",
      answer: true,
      comment: "Certo. Redis é conhecido por sua alta performance e operação em memória."
    },
    {
      text: "Cassandra é um column-family database projetado para alta disponibilidade e escalabilidade linear.",
      answer: true,
      comment: "Certo. Cassandra é usado por empresas como Netflix e Facebook."
    },
    {
      text: "Neo4j é um graph database que usa nós, relacionamentos e propriedades para modelar dados.",
      answer: true,
      comment: "Certo. Neo4j é especializado em consultas de grafos e relacionamentos."
    },
    {
      text: "NoSQL databases geralmente não suportam JOINs complexos como bancos relacionais.",
      answer: true,
      comment: "Certo. NoSQL prioriza consultas simples e denormalização."
    },
    {
      text: "Sharding é uma técnica comum em bancos NoSQL para distribuir dados entre múltiplos servidores.",
      answer: true,
      comment: "Certo. Sharding permite escalabilidade horizontal em NoSQL."
    },
    {
      text: "Eventual consistency é um modelo de consistência onde dados eventualmente se tornam consistentes em todos os nós.",
      answer: true,
      comment: "Certo. Eventual consistency é comum em sistemas distribuídos NoSQL."
    },
    {
      text: "CouchDB é um document database que suporta replicação master-master e sincronização offline.",
      answer: true,
      comment: "Certo. CouchDB é conhecido por sua capacidade de sincronização."
    },
    {
      text: "HBase é um column-family database que roda sobre Hadoop Distributed File System (HDFS).",
      answer: true,
      comment: "Certo. HBase é parte do ecossistema Hadoop."
    },
    {
      text: "NoSQL databases são frequentemente usados em aplicações web modernas e APIs REST.",
      answer: true,
      comment: "Certo. NoSQL é popular em aplicações web devido à flexibilidade."
    },
    {
      text: "DynamoDB é um serviço de banco de dados NoSQL gerenciado pela Amazon Web Services (AWS).",
      answer: true,
      comment: "Certo. DynamoDB é um exemplo de NoSQL como serviço (DBaaS)."
    },
    {
      text: "NoSQL databases geralmente não impõem um esquema rígido, permitindo flexibilidade na estrutura dos dados.",
      answer: true,
      comment: "Certo. Schema-less é uma característica comum em NoSQL."
    },
    {
      text: "Time-series databases são um tipo especializado de NoSQL otimizado para dados que mudam ao longo do tempo.",
      answer: true,
      comment: "Certo. InfluxDB e TimescaleDB são exemplos de time-series databases."
    },
    {
      text: "NoSQL databases podem ser classificados em quatro categorias principais: document, key-value, column-family e graph.",
      answer: true,
      comment: "Certo. Estas são as quatro categorias principais de bancos NoSQL."
    },
    {
      text: "MongoDB suporta agregações complexas através do pipeline de agregação.",
      answer: true,
      comment: "Certo. O pipeline de agregação do MongoDB é similar ao GROUP BY do SQL."
    },
    {
      text: "Redis suporta estruturas de dados avançadas como listas, sets, sorted sets e hashes.",
      answer: true,
      comment: "Certo. Redis vai além de simples key-value, oferecendo estruturas de dados ricas."
    },
    {
      text: "NoSQL databases são frequentemente usados em big data e analytics devido à capacidade de processar grandes volumes.",
      answer: true,
      comment: "Certo. NoSQL é ideal para big data devido à escalabilidade horizontal."
    },
    {
      text: "ArangoDB é um banco de dados multi-modelo que suporta documentos, grafos e key-value em uma única plataforma.",
      answer: true,
      comment: "Certo. ArangoDB combina múltiplos modelos de dados."
    },
    {
      text: "NoSQL databases geralmente não suportam transações ACID completas como bancos relacionais.",
      answer: true,
      comment: "Certo. Muitos NoSQL sacrificam ACID por performance e escalabilidade."
    },
    {
      text: "Elasticsearch é um search engine baseado em Lucene que pode ser usado como banco NoSQL para busca de texto.",
      answer: true,
      comment: "Certo. Elasticsearch é especializado em busca e análise de texto."
    },
    {
      text: "NoSQL databases são frequentemente usados em aplicações de IoT para armazenar dados de sensores.",
      answer: true,
      comment: "Certo. NoSQL é ideal para dados de IoT devido à flexibilidade e escalabilidade."
    },
    {
      text: "Polyglot persistence é uma estratégia que usa diferentes tipos de bancos de dados para diferentes necessidades.",
      answer: true,
      comment: "Certo. Polyglot persistence aproveita os pontos fortes de cada tipo de banco."
    },
    {
      text: "NoSQL databases podem ser usados em conjunto com bancos relacionais em arquiteturas híbridas.",
      answer: true,
      comment: "Certo. Arquiteturas híbridas combinam os benefícios de SQL e NoSQL."
    }
  ],
  "engenharia-reversa": [
    {
      text: "Engenharia reversa de software é o processo de analisar um programa para entender seu funcionamento interno sem acesso ao código-fonte original.",
      answer: true,
      comment: "Certo. O objetivo é compreender lógica, algoritmos e estruturas."
    },
    {
      text: "Descompilação é a técnica de converter código executável (binário) de volta para uma representação de alto nível próxima ao código-fonte.",
      answer: true,
      comment: "Certo. Descompiladores tentam reconstruir código legível a partir de binários."
    },
    {
      text: "Ferramentas de descompilação podem ser usadas para auditoria de segurança, análise de malware e recuperação de código perdido.",
      answer: true,
      comment: "Certo. São amplamente usadas em segurança e forense."
    },
    {
      text: "O IDA Pro é uma das ferramentas mais conhecidas para engenharia reversa e análise de binários.",
      answer: true,
      comment: "Certo. IDA Pro é referência em análise estática e descompilação."
    },
    {
      text: "O Ghidra é uma ferramenta gratuita e open source para engenharia reversa desenvolvida pela NSA.",
      answer: true,
      comment: "Certo. Ghidra é uma alternativa poderosa ao IDA Pro."
    },
    {
      text: "O Hopper é um descompilador popular para macOS e Linux.",
      answer: true,
      comment: "Certo. Hopper é conhecido por sua interface amigável e suporte a múltiplas arquiteturas."
    },
    {
      text: "O dotPeek é uma ferramenta de descompilação para assemblies .NET.",
      answer: true,
      comment: "Certo. dotPeek é amplamente usado para engenharia reversa de .NET."
    },
    {
      text: "O JADX é uma ferramenta de descompilação para arquivos APK e bytecode Dalvik/ART do Android.",
      answer: true,
      comment: "Certo. JADX converte bytecode Android em Java legível."
    },
    {
      text: "Descompiladores nem sempre conseguem recuperar o código-fonte original exato devido a otimizações e perda de informações.",
      answer: true,
      comment: "Certo. O código gerado pode ser diferente do original."
    },
    {
      text: "Obfuscação de código é uma técnica usada para dificultar a engenharia reversa e a descompilação.",
      answer: true,
      comment: "Certo. Obfuscadores tornam o código mais difícil de entender."
    },
    {
      text: "Ferramentas como o Hex-Rays Decompiler produzem código C aproximado a partir de binários.",
      answer: true,
      comment: "Certo. Hex-Rays é um plugin do IDA Pro para descompilação C."
    },
    {
      text: "A análise estática examina o binário sem executá-lo, enquanto a análise dinâmica envolve execução monitorada.",
      answer: true,
      comment: "Certo. Ambas são técnicas complementares em engenharia reversa."
    },
    {
      text: "Ferramentas de descompilação podem identificar strings, funções, fluxos de controle e chamadas de sistema em binários.",
      answer: true,
      comment: "Certo. Estas informações ajudam a entender o comportamento do programa."
    },
    {
      text: "A engenharia reversa pode ser usada para detectar vulnerabilidades e backdoors em softwares proprietários.",
      answer: true,
      comment: "Certo. É uma prática comum em auditorias de segurança."
    },
    {
      text: "A legalidade da engenharia reversa depende da legislação local e dos termos de uso do software.",
      answer: true,
      comment: "Certo. Em alguns países, engenharia reversa é restrita por lei."
    },
    {
      text: "Desmontadores (disassemblers) convertem código binário em assembly, enquanto descompiladores tentam gerar código de alto nível.",
      answer: true,
      comment: "Certo. Desmontagem e descompilação são processos distintos."
    },
    {
      text: "O Radare2 é uma suíte open source para análise reversa, desmontagem e depuração de binários.",
      answer: true,
      comment: "Certo. Radare2 é uma ferramenta poderosa e flexível."
    },
    {
      text: "A engenharia reversa pode ser usada para interoperabilidade, permitindo integração entre sistemas sem documentação.",
      answer: true,
      comment: "Certo. Permite criar drivers, plugins e integrações."
    },
    {
      text: "Ferramentas de descompilação podem ser usadas para identificar algoritmos de criptografia e compactação em binários.",
      answer: true,
      comment: "Certo. Isso é útil em análise de malware e forense."
    },
    {
      text: "A análise de fluxo de controle é importante para entender a lógica de execução de um programa.",
      answer: true,
      comment: "Certo. Ajuda a identificar funções principais e caminhos de execução."
    },
    {
      text: "Descompilação de bytecode Java pode ser feita com ferramentas como JD-GUI e CFR.",
      answer: true,
      comment: "Certo. JD-GUI e CFR são populares para engenharia reversa de Java."
    },
    {
      text: "A engenharia reversa pode ser usada para recuperar algoritmos perdidos ou não documentados.",
      answer: true,
      comment: "Certo. Útil em manutenção de sistemas legados."
    },
    {
      text: "Ferramentas de descompilação podem ser usadas para identificar vulnerabilidades de segurança em binários.",
      answer: true,
      comment: "Certo. Permite análise de segurança sem acesso ao código-fonte."
    },
    {
      text: "A análise de binários pode revelar informações sensíveis como chaves criptográficas e credenciais embutidas.",
      answer: true,
      comment: "Certo. Engenharia reversa pode expor segredos mal protegidos."
    },
    {
      text: "A engenharia reversa pode ser usada para detectar e remover malware de sistemas comprometidos.",
      answer: true,
      comment: "Certo. É fundamental em resposta a incidentes e forense."
    },
    {
      text: "Descompiladores podem ser específicos para diferentes arquiteturas, como x86, ARM, MIPS, etc.",
      answer: true,
      comment: "Certo. Cada arquitetura pode exigir ferramentas especializadas."
    },
    {
      text: "A engenharia reversa pode ser usada para fins educacionais e de pesquisa.",
      answer: true,
      comment: "Certo. Ajuda a entender funcionamento interno de sistemas."
    },
    {
      text: "A análise de malware frequentemente envolve descompilação e engenharia reversa de binários maliciosos.",
      answer: true,
      comment: "Certo. É uma etapa essencial em resposta a ameaças."
    },
    {
      text: "Ferramentas de descompilação podem ser usadas para identificar violações de licenciamento de software.",
      answer: true,
      comment: "Certo. Permite verificar uso indevido de código proprietário."
    },
    {
      text: "A engenharia reversa pode ser usada para adaptar softwares a novos ambientes ou sistemas operacionais.",
      answer: true,
      comment: "Certo. Facilita portabilidade e compatibilidade."
    },
    {
      text: "A engenharia reversa pode ser usada para identificar e corrigir bugs em softwares sem suporte do fabricante.",
      answer: true,
      comment: "Certo. Útil em manutenção de sistemas legados."
    }
  ],
  debuggers: [
    {
      text: "Um debugger é uma ferramenta que permite analisar e controlar a execução de um programa passo a passo.",
      answer: true,
      comment: "Certo. Debuggers permitem execução controlada e análise detalhada de programas."
    },
    {
      text: "Breakpoints são pontos de parada que permitem pausar a execução de um programa em locais específicos.",
      answer: true,
      comment: "Certo. Breakpoints são fundamentais para análise controlada de execução."
    },
    {
      text: "O GDB (GNU Debugger) é uma ferramenta de debug específica apenas para programas escritos em C++.",
      answer: false,
      comment: "Errado. GDB suporta múltiplas linguagens incluindo C, C++, Fortran, Java e outras."
    },
    {
      text: "Watchpoints permitem monitorar mudanças em variáveis específicas durante a execução de um programa.",
      answer: true,
      comment: "Certo. Watchpoints são úteis para detectar quando e onde variáveis são modificadas."
    },
    {
      text: "O modo de execução passo a passo (step-by-step) permite executar uma instrução por vez no debugger.",
      answer: true,
      comment: "Certo. Execução passo a passo é essencial para análise detalhada de fluxo."
    },
    {
      text: "Debuggers podem exibir o conteúdo da pilha de execução (call stack) para rastrear chamadas de função.",
      answer: true,
      comment: "Certo. A pilha de execução mostra a sequência de chamadas de função."
    },
    {
      text: "O LLDB é um debugger desenvolvido pela Apple e integrado ao Xcode para desenvolvimento iOS e macOS.",
      answer: true,
      comment: "Certo. LLDB é o debugger padrão do Xcode e suporta múltiplas linguagens."
    },
    {
      text: "Debuggers podem modificar valores de variáveis em tempo de execução para testar diferentes cenários.",
      answer: true,
      comment: "Certo. Modificação dinâmica de valores é útil para testes e correção de bugs."
    },
    {
      text: "O WinDbg é um debugger específico para sistemas Windows e pode analisar tanto código de usuário quanto kernel.",
      answer: true,
      comment: "Certo. WinDbg é uma ferramenta poderosa para debug no Windows."
    },
    {
      text: "Debuggers podem exibir o conteúdo de registradores da CPU para análise de baixo nível.",
      answer: true,
      comment: "Certo. Análise de registradores é importante para debug de assembly e otimização."
    },
    {
      text: "O conceito de 'attach' permite que um debugger se conecte a um processo já em execução.",
      answer: true,
      comment: "Certo. Attach é útil para debug de processos em produção ou longa duração."
    },
    {
      text: "Debuggers podem exibir o código assembly correspondente ao código fonte sendo executado.",
      answer: true,
      comment: "Certo. Visualização de assembly ajuda a entender a tradução de código fonte."
    },
    {
      text: "O Valgrind é uma ferramenta de debug específica apenas para detecção de vazamentos de memória.",
      answer: false,
      comment: "Errado. Valgrind oferece múltiplas ferramentas incluindo detecção de erros de memória, profiling e análise de cache."
    },
    {
      text: "Debuggers podem definir breakpoints condicionais que só ativam quando certas condições são atendidas.",
      answer: true,
      comment: "Certo. Breakpoints condicionais são úteis para debug de cenários específicos."
    },
    {
      text: "O conceito de 'remote debugging' permite debug de programas em máquinas remotas através da rede.",
      answer: true,
      comment: "Certo. Remote debugging é essencial para desenvolvimento distribuído e debug de sistemas embarcados."
    },
    {
      text: "Debuggers podem exibir informações sobre threads e processos para análise de concorrência.",
      answer: true,
      comment: "Certo. Análise de threads é crucial para debug de aplicações multithread."
    },
    {
      text: "O AddressSanitizer (ASan) é uma ferramenta de debug que detecta erros de memória em tempo de execução.",
      answer: true,
      comment: "Certo. ASan é uma ferramenta poderosa para detecção de bugs de memória."
    },
    {
      text: "Debuggers podem exibir o conteúdo da heap para análise de alocação e liberação de memória.",
      answer: true,
      comment: "Certo. Análise da heap é importante para detectar vazamentos e corrupção de memória."
    },
    {
      text: "O conceito de 'core dump' permite salvar o estado de um programa após uma falha para análise posterior.",
      answer: true,
      comment: "Certo. Core dumps são essenciais para análise post-mortem de crashes."
    },
    {
      text: "Debuggers podem exibir informações de performance como tempo de execução e uso de CPU.",
      answer: true,
      comment: "Certo. Análise de performance é uma funcionalidade importante de debuggers modernos."
    },
    {
      text: "O GDB pode ser usado para debug de programas em linguagens interpretadas como Python e Perl.",
      answer: false,
      comment: "Errado. GDB é focado em linguagens compiladas; linguagens interpretadas têm seus próprios debuggers."
    },
    {
      text: "Debuggers podem exibir o conteúdo de arquivos de símbolos para mapear código assembly com código fonte.",
      answer: true,
      comment: "Certo. Arquivos de símbolos permitem debug com informações de código fonte."
    },
    {
      text: "O conceito de 'reverse debugging' permite executar um programa de trás para frente.",
      answer: true,
      comment: "Certo. Reverse debugging é útil para rastrear a origem de bugs complexos."
    },
    {
      text: "Debuggers podem exibir informações sobre chamadas de sistema (syscalls) para análise de comportamento do programa.",
      answer: true,
      comment: "Certo. Análise de syscalls é importante para entender interação com o sistema operacional."
    },
    {
      text: "O Dr. Memory é uma ferramenta de debug específica para detecção de erros de memória em Windows.",
      answer: true,
      comment: "Certo. Dr. Memory é uma alternativa ao Valgrind para Windows."
    },
    {
      text: "Debuggers podem exibir o conteúdo de arquivos de configuração e logs para análise de comportamento.",
      answer: true,
      comment: "Certo. Análise de logs é complementar ao debug de código."
    },
    {
      text: "O conceito de 'live debugging' permite debug de programas em produção sem interromper o serviço.",
      answer: true,
      comment: "Certo. Live debugging é crucial para sistemas que não podem ser interrompidos."
    },
    {
      text: "Debuggers podem exibir informações sobre bibliotecas carregadas e suas funções.",
      answer: true,
      comment: "Certo. Análise de bibliotecas é importante para debug de dependências."
    },
    {
      text: "O GDB pode ser usado para debug de programas multithread, permitindo análise de cada thread separadamente.",
      answer: true,
      comment: "Certo. GDB oferece comandos específicos para debug de threads."
    },
    {
      text: "Debuggers podem exibir o conteúdo de variáveis globais e estáticas para análise de estado do programa.",
      answer: true,
      comment: "Certo. Análise de variáveis globais é importante para debug de estado compartilhado."
    },
    {
      text: "O conceito de 'post-mortem debugging' permite análise de programas que já terminaram sua execução.",
      answer: true,
      comment: "Certo. Post-mortem debugging é útil para análise de crashes e comportamento final."
    },
    {
      text: "Debuggers podem exibir informações sobre alocação de memória dinâmica (malloc/free) para detectar vazamentos.",
      answer: true,
      comment: "Certo. Análise de alocação dinâmica é crucial para debug de problemas de memória."
    },
    {
      text: "O GDB pode ser usado para debug de programas em diferentes arquiteturas (x86, ARM, MIPS, etc.).",
      answer: true,
      comment: "Certo. GDB suporta múltiplas arquiteturas através de backends específicos."
    },
    {
      text: "Debuggers podem exibir o conteúdo de arquivos de mapeamento de memória (/proc/pid/maps) para análise de layout de memória.",
      answer: true,
      comment: "Certo. Análise de layout de memória é importante para debug de problemas de endereçamento."
    },
    {
      text: "O conceito de 'symbolic debugging' permite debug usando nomes de variáveis e funções do código fonte.",
      answer: true,
      comment: "Certo. Symbolic debugging torna o debug mais legível e eficiente."
    },
    {
      text: "Debuggers podem exibir informações sobre exceções e sinais do sistema operacional para análise de falhas.",
      answer: true,
      comment: "Certo. Análise de exceções é crucial para debug de crashes e comportamentos inesperados."
    }
  ],
  malware: [
    {
      text: "Um vírus de computador é um programa malicioso que se replica inserindo cópias de si mesmo em outros programas.",
      answer: true,
      comment: "Certo. Vírus se caracterizam pela capacidade de auto-replicação e infecção de outros arquivos."
    },
    {
      text: "Backdoors são programas que permitem acesso não autorizado a um sistema, contornando mecanismos de segurança normais.",
      answer: true,
      comment: "Certo. Backdoors criam pontos de entrada secretos para acesso remoto não autorizado."
    },
    {
      text: "Keyloggers são programas que capturam e registram todas as teclas pressionadas pelo usuário no teclado.",
      answer: true,
      comment: "Certo. Keyloggers monitoram entrada de dados para capturar senhas e informações sensíveis."
    },
    {
      text: "Worms são programas maliciosos que se propagam automaticamente através de redes sem necessidade de intervenção humana.",
      answer: true,
      comment: "Certo. Worms se distinguem por sua capacidade de auto-propagacao através de redes."
    },
    {
      text: "Trojan horses são programas que se disfarçam de software legítimo para enganar usuários e executar ações maliciosas.",
      answer: true,
      comment: "Certo. Trojans se caracterizam pelo disfarce e execução de ações não autorizadas."
    },
    {
      text: "Ransomware é um tipo de malware que criptografa arquivos do usuário e exige pagamento para descriptografá-los.",
      answer: true,
      comment: "Certo. Ransomware é caracterizado pela extorsão através de criptografia de dados."
    },
    {
      text: "Spyware é um software que coleta informações sobre o usuário sem seu conhecimento ou consentimento.",
      answer: true,
      comment: "Certo. Spyware monitora atividades e coleta dados pessoais secretamente."
    },
    {
      text: "Rootkits são programas que ocultam sua presença no sistema, modificando funcionalidades do sistema operacional.",
      answer: true,
      comment: "Certo. Rootkits se especializam em ocultação e persistência no sistema."
    },
    {
      text: "Adware é um software que exibe anúncios indesejados e pode coletar informações de navegação do usuário.",
      answer: true,
      comment: "Certo. Adware é caracterizado pela exibição de propaganda não solicitada."
    },
    {
      text: "Botnets são redes de computadores infectados controlados remotamente para executar ataques coordenados.",
      answer: true,
      comment: "Certo. Botnets permitem controle centralizado de múltiplos sistemas comprometidos."
    },
    {
      text: "Polymorphic malware é um tipo de vírus que altera seu código a cada infecção para evitar detecção.",
      answer: true,
      comment: "Certo. Polimorfismo é uma técnica de evasão que modifica a assinatura do malware."
    },
    {
      text: "Metamorphic malware é capaz de reescrever completamente seu código mantendo a mesma funcionalidade.",
      answer: true,
      comment: "Certo. Metamorfismo é mais avançado que polimorfismo, alterando a estrutura do código."
    },
    {
      text: "Fileless malware executa diretamente na memória RAM sem deixar arquivos no disco rígido.",
      answer: true,
      comment: "Certo. Malware fileless é difícil de detectar por não persistir em arquivos."
    },
    {
      text: "Macro viruses são vírus que se propagam através de documentos que contêm macros executáveis.",
      answer: true,
      comment: "Certo. Vírus de macro exploram funcionalidades de automação em documentos."
    },
    {
      text: "Boot sector viruses infectam o setor de inicialização do disco rígido ou disquetes.",
      answer: true,
      comment: "Certo. Vírus de boot sector comprometem o processo de inicialização do sistema."
    },
    {
      text: "Stealth viruses são capazes de interceptar chamadas do sistema operacional para ocultar sua presença.",
      answer: true,
      comment: "Certo. Vírus stealth usam técnicas de interceptação para evitar detecção."
    },
    {
      text: "Logic bombs são códigos maliciosos que executam ações destrutivas quando condições específicas são atendidas.",
      answer: true,
      comment: "Certo. Logic bombs são programadas para ativar em situações específicas."
    },
    {
      text: "Time bombs são um tipo de logic bomb que ativa em uma data ou hora específica.",
      answer: true,
      comment: "Certo. Time bombs são logic bombs baseadas em tempo."
    },
    {
      text: "Droppers são programas que instalam outros malwares no sistema sem o conhecimento do usuário.",
      answer: true,
      comment: "Certo. Droppers servem como veículos para instalação de malware adicional."
    },
    {
      text: "Loaders são programas que carregam malware na memória e o executam, evitando detecção por antivírus.",
      answer: true,
      comment: "Certo. Loaders são usados para contornar mecanismos de proteção."
    },
    {
      text: "Crypter é uma ferramenta que criptografa malware para evitar detecção por assinaturas de antivírus.",
      answer: true,
      comment: "Certo. Crypters são usados para ofuscar código malicioso."
    },
    {
      text: "Packer é um programa que comprime e ofusca código executável para dificultar análise reversa.",
      answer: true,
      comment: "Certo. Packers são comumente usados para proteger e ocultar malware."
    },
    {
      text: "Oligomorphic malware é um tipo de vírus que possui um número limitado de variantes para evitar detecção.",
      answer: true,
      comment: "Certo. Oligomorfismo usa um conjunto limitado de técnicas de mutação."
    },
    {
      text: "Encrypted viruses são vírus que criptografam seu próprio código e usam um algoritmo de descriptografia.",
      answer: true,
      comment: "Certo. Vírus criptografados usam auto-criptografia para evadir detecção."
    },
    {
      text: "Companion viruses criam arquivos executáveis com nomes similares aos legítimos para enganar usuários.",
      answer: true,
      comment: "Certo. Vírus companion exploram a ordem de execução de arquivos."
    },
    {
      text: "Overwriting viruses sobrescrevem o conteúdo de arquivos infectados, causando perda de dados.",
      answer: true,
      comment: "Certo. Vírus overwriting destroem dados ao sobrescrever arquivos."
    },
    {
      text: "Parasitic viruses se anexam a arquivos executáveis existentes sem destruir o arquivo original.",
      answer: true,
      comment: "Certo. Vírus parasitários preservam a funcionalidade do arquivo hospedeiro."
    },
    {
      text: "Armored viruses usam técnicas de ofuscação e anti-debugging para dificultar análise reversa.",
      answer: true,
      comment: "Certo. Vírus blindados são projetados para resistir à análise."
    },
    {
      text: "Multipartite viruses podem infectar tanto arquivos executáveis quanto setores de boot.",
      answer: true,
      comment: "Certo. Vírus multipartite combinam técnicas de infecção de arquivos e boot."
    },
    {
      text: "Cavity viruses inserem seu código em espaços vazios dentro de arquivos executáveis.",
      answer: true,
      comment: "Certo. Vírus cavity aproveitam espaços não utilizados em arquivos."
    },
    {
      text: "Tunneling viruses usam técnicas para contornar interceptadores de chamadas do sistema operacional.",
      answer: true,
      comment: "Certo. Vírus tunneling evitam hooks do sistema operacional."
    }
  ],
  obfuscacao: [
    {
      text: "Ofuscação de código é uma técnica que torna o código-fonte difícil de entender mantendo sua funcionalidade original.",
      answer: true,
      comment: "Certo. Ofuscação preserva a funcionalidade enquanto dificulta a compreensão humana."
    },
    {
      text: "Renomeação de variáveis é uma técnica de ofuscação que substitui nomes significativos por nomes sem sentido.",
      answer: true,
      comment: "Certo. Renomeação remove informações semânticas do código."
    },
    {
      text: "Ofuscação de strings é uma técnica que esconde strings literais no código através de criptografia ou codificação.",
      answer: true,
      comment: "Certo. Strings ofuscadas dificultam a análise estática do código."
    },
    {
      text: "Dead code insertion é uma técnica que adiciona código não executável para confundir analisadores estáticos.",
      answer: true,
      comment: "Certo. Código morto aumenta a complexidade sem afetar a execução."
    },
    {
      text: "Control flow obfuscation altera a estrutura de controle do programa para dificultar a análise de fluxo.",
      answer: true,
      comment: "Certo. Ofuscação de fluxo de controle complica a análise de execução."
    },
    {
      text: "String encryption é uma técnica que criptografa strings em tempo de compilação e as descriptografa em tempo de execução.",
      answer: true,
      comment: "Certo. Criptografia de strings protege informações sensíveis no código."
    },
    {
      text: "Code splitting é uma técnica que divide funções complexas em múltiplas funções menores para dificultar análise.",
      answer: true,
      comment: "Certo. Divisão de código aumenta a complexidade da estrutura."
    },
    {
      text: "Obfuscation by virtualization substitui código nativo por código interpretado em uma máquina virtual customizada.",
      answer: true,
      comment: "Certo. Virtualização de código é uma técnica avançada de ofuscação."
    },
    {
      text: "Anti-debugging techniques são usadas em código ofuscado para detectar e evitar análise dinâmica.",
      answer: true,
      comment: "Certo. Técnicas anti-debug protegem contra análise em tempo de execução."
    },
    {
      text: "Code packing é uma técnica que comprime e criptografa código executável para dificultar análise reversa.",
      answer: true,
      comment: "Certo. Packers são comumente usados para ofuscar código executável."
    },
    {
      text: "Obfuscation by opaque predicates introduz condições sempre verdadeiras ou falsas para confundir análise de fluxo.",
      answer: true,
      comment: "Certo. Predicados opacos criam caminhos de execução enganosos."
    },
    {
      text: "String concatenation obfuscation divide strings em partes que são concatenadas em tempo de execução.",
      answer: true,
      comment: "Certo. Concatenação de strings dificulta análise estática."
    },
    {
      text: "Code obfuscation pode ser aplicada em diferentes níveis: fonte, bytecode, assembly e binário.",
      answer: true,
      comment: "Certo. Ofuscação pode ser aplicada em múltiplas camadas do código."
    },
    {
      text: "Anti-tampering techniques detectam modificações no código ofuscado e podem reagir de forma defensiva.",
      answer: true,
      comment: "Certo. Proteção contra adulteração é importante em código ofuscado."
    },
    {
      text: "Obfuscation by junk code insertion adiciona instruções sem efeito para aumentar a complexidade do código.",
      answer: true,
      comment: "Certo. Código lixo aumenta a dificuldade de análise sem afetar funcionalidade."
    },
    {
      text: "String obfuscation techniques incluem base64 encoding, XOR encryption e custom encryption algorithms.",
      answer: true,
      comment: "Certo. Múltiplas técnicas podem ser usadas para ofuscar strings."
    },
    {
      text: "Control flow flattening é uma técnica que transforma estruturas de controle em um grafo plano.",
      answer: true,
      comment: "Certo. Achatamento de fluxo de controle dificulta análise de execução."
    },
    {
      text: "Obfuscation by instruction substitution substitui instruções simples por sequências mais complexas.",
      answer: true,
      comment: "Certo. Substituição de instruções aumenta a complexidade do código."
    },
    {
      text: "Anti-disassembly techniques são usadas para dificultar a desmontagem de código ofuscado.",
      answer: true,
      comment: "Certo. Técnicas anti-desmontagem protegem contra análise estática."
    },
    {
      text: "Code obfuscation pode ser usada tanto para proteger propriedade intelectual quanto para ocultar malware.",
      answer: true,
      comment: "Certo. Ofuscação tem aplicações legítimas e maliciosas."
    },
    {
      text: "Obfuscation by function inlining expande chamadas de função inline para dificultar análise de estrutura.",
      answer: true,
      comment: "Certo. Inline de funções aumenta a complexidade do código."
    },
    {
      text: "String obfuscation pode usar técnicas de encoding como rot13, hexadecimal ou custom encodings.",
      answer: true,
      comment: "Certo. Diferentes técnicas de encoding podem ser aplicadas a strings."
    },
    {
      text: "Anti-VM techniques detectam ambientes virtualizados e podem alterar comportamento do código ofuscado.",
      answer: true,
      comment: "Certo. Detecção de VM é comum em código ofuscado malicioso."
    },
    {
      text: "Obfuscation by loop transformation altera estruturas de loop para dificultar análise de complexidade.",
      answer: true,
      comment: "Certo. Transformação de loops complica análise de performance e fluxo."
    },
    {
      text: "Code obfuscation tools podem ser específicos para linguagens como Java, C#, JavaScript ou C++.",
      answer: true,
      comment: "Certo. Ferramentas de ofuscação são frequentemente específicas por linguagem."
    },
    {
      text: "Obfuscation by data transformation altera a representação de dados para dificultar análise.",
      answer: true,
      comment: "Certo. Transformação de dados protege informações sensíveis."
    },
    {
      text: "Anti-deobfuscation techniques são usadas para resistir a tentativas de desofuscação automática.",
      answer: true,
      comment: "Certo. Proteção contra desofuscação é importante em código ofuscado."
    },
    {
      text: "Obfuscation by API call hiding substitui chamadas diretas de API por chamadas indiretas ou customizadas.",
      answer: true,
      comment: "Certo. Ocultação de chamadas de API dificulta análise de comportamento."
    },
    {
      text: "Code obfuscation pode afetar performance do programa, especialmente quando técnicas pesadas são usadas.",
      answer: true,
      comment: "Certo. Ofuscação pode introduzir overhead de performance."
    },
    {
      text: "Obfuscation by constant folding prevention evita que constantes sejam calculadas em tempo de compilação.",
      answer: true,
      comment: "Certo. Prevenção de constant folding mantém valores dinâmicos."
    },
    {
      text: "String obfuscation pode usar técnicas de steganography para esconder strings em outros dados.",
      answer: true,
      comment: "Certo. Esteganografia pode ser usada para ocultar strings no código."
    }
  ],
  compactadores: [
    {
      text: "Compactadores de código executável são ferramentas que comprimem e protegem arquivos executáveis.",
      answer: true,
      comment: "Certo. Packers reduzem tamanho e adicionam camadas de proteção aos executáveis."
    },
    {
      text: "UPX (Ultimate Packer for eXecutables) é um compactador open source que suporta múltiplas plataformas.",
      answer: true,
      comment: "Certo. UPX é um dos packers mais populares e amplamente utilizados."
    },
    {
      text: "Compactadores podem usar algoritmos de compressão como LZMA, ZLIB ou algoritmos proprietários.",
      answer: true,
      comment: "Certo. Diferentes algoritmos de compressão são usados por packers."
    },
    {
      text: "O processo de packing envolve comprimir o código original e adicionar um stub de descompressão.",
      answer: true,
      comment: "Certo. O stub é responsável por descomprimir o código em tempo de execução."
    },
    {
      text: "Compactadores podem ofuscar strings e recursos do executável para dificultar análise reversa.",
      answer: true,
      comment: "Certo. Ofuscação é uma funcionalidade comum em packers avançados."
    },
    {
      text: "ASPack é um compactador específico para executáveis Windows que oferece alta taxa de compressão.",
      answer: true,
      comment: "Certo. ASPack é conhecido por sua eficiência em compressão de executáveis PE."
    },
    {
      text: "Compactadores podem adicionar proteções anti-debug e anti-VM para dificultar análise dinâmica.",
      answer: true,
      comment: "Certo. Proteções anti-análise são comuns em packers comerciais."
    },
    {
      text: "O formato PE (Portable Executable) do Windows é frequentemente alvo de compactadores.",
      answer: true,
      comment: "Certo. PE é o formato executável padrão do Windows e muito usado por packers."
    },
    {
      text: "Compactadores podem modificar a estrutura de importação de DLLs para dificultar análise estática.",
      answer: true,
      comment: "Certo. Ofuscação de imports é uma técnica comum em packers."
    },
    {
      text: "PECompact é um compactador que oferece opções de proteção e compressão para executáveis Windows.",
      answer: true,
      comment: "Certo. PECompact é uma ferramenta comercial popular para packing."
    },
    {
      text: "Compactadores podem usar técnicas de criptografia para proteger o código comprimido.",
      answer: true,
      comment: "Certo. Criptografia adiciona camada extra de proteção ao código."
    },
    {
      text: "O processo de unpacking envolve extrair o código original de um executável compactado.",
      answer: true,
      comment: "Certo. Unpacking é essencial para análise de malware compactado."
    },
    {
      text: "Compactadores podem adicionar verificações de integridade para detectar modificações no executável.",
      answer: true,
      comment: "Certo. Verificação de integridade protege contra adulteração."
    },
    {
      text: "Themida é um compactador avançado que oferece proteções anti-debug e anti-VM sofisticadas.",
      answer: true,
      comment: "Certo. Themida é conhecido por suas proteções avançadas contra análise."
    },
    {
      text: "Compactadores podem modificar a seção de recursos do executável para ocultar informações.",
      answer: true,
      comment: "Certo. Ofuscação de recursos é uma técnica comum em packers."
    },
    {
      text: "O formato ELF (Executable and Linkable Format) do Linux também pode ser compactado por packers.",
      answer: true,
      comment: "Certo. Packers suportam múltiplos formatos executáveis."
    },
    {
      text: "Compactadores podem usar técnicas de polimorfismo para gerar diferentes versões do mesmo executável.",
      answer: true,
      comment: "Certo. Polimorfismo dificulta detecção por assinaturas."
    },
    {
      text: "VMProtect é um compactador que usa virtualização de código para proteger executáveis.",
      answer: true,
      comment: "Certo. VMProtect é conhecido por suas técnicas de virtualização."
    },
    {
      text: "Compactadores podem adicionar delays e loops para dificultar análise dinâmica.",
      answer: true,
      comment: "Certo. Técnicas anti-timing são usadas para confundir analisadores."
    },
    {
      text: "O processo de packing pode alterar a entropia do executável, afetando detecção por antivírus.",
      answer: true,
      comment: "Certo. Alteração de entropia é um efeito comum do packing."
    },
    {
      text: "Compactadores podem usar técnicas de steganografia para esconder dados no executável.",
      answer: true,
      comment: "Certo. Esteganografia pode ser usada para ocultar informações adicionais."
    },
    {
      text: "Enigma Protector é um compactador que oferece proteções anti-reversa e anti-debug.",
      answer: true,
      comment: "Certo. Enigma Protector é uma ferramenta comercial para proteção de software."
    },
    {
      text: "Compactadores podem modificar a estrutura de seções do executável para dificultar análise.",
      answer: true,
      comment: "Certo. Modificação de seções é uma técnica comum em packers."
    },
    {
      text: "O processo de packing pode adicionar overhead de performance ao executável.",
      answer: true,
      comment: "Certo. Descompressão em tempo de execução pode afetar performance."
    },
    {
      text: "Compactadores podem usar técnicas de ofuscação de imports para dificultar análise de dependências.",
      answer: true,
      comment: "Certo. Ofuscação de imports complica análise de chamadas de API."
    },
    {
      text: "Armadillo é um compactador que oferece proteções anti-debug e anti-dump.",
      answer: true,
      comment: "Certo. Armadillo é conhecido por suas proteções contra dumping de memória."
    },
    {
      text: "Compactadores podem adicionar verificações de ambiente para detectar análise dinâmica.",
      answer: true,
      comment: "Certo. Detecção de ambiente é comum em packers avançados."
    },
    {
      text: "O processo de packing pode alterar a assinatura digital do executável original.",
      answer: true,
      comment: "Certo. Modificações no executável invalidam assinaturas digitais."
    },
    {
      text: "Compactadores podem usar técnicas de anti-disassembly para dificultar análise estática.",
      answer: true,
      comment: "Certo. Técnicas anti-desmontagem protegem contra análise reversa."
    },
    {
      text: "PELock é um compactador que oferece proteções anti-debug e anti-VM para executáveis Windows.",
      answer: true,
      comment: "Certo. PELock é uma ferramenta comercial para proteção de software."
    },
    {
      text: "Compactadores podem modificar a tabela de relocações do executável para dificultar análise.",
      answer: true,
      comment: "Certo. Modificação de relocações complica análise de endereçamento."
    },
    {
      text: "O processo de packing pode ser usado tanto para proteção de software quanto para ocultar malware.",
      answer: true,
      comment: "Certo. Packers têm aplicações legítimas e maliciosas."
    }
  ],
  polimorfico: [
    {
      text: "Malware polimórfico é um tipo de malware que altera sua assinatura a cada infecção para evitar detecção.",
      answer: true,
      comment: "Certo. Polimorfismo é uma técnica de evasão que modifica a aparência do malware."
    },
    {
      text: "Polymorphic engines são componentes que geram automaticamente diferentes variantes do mesmo malware.",
      answer: true,
      comment: "Certo. Engines polimórficos são responsáveis pela geração de variantes."
    },
    {
      text: "Malware polimórfico pode alterar sua estrutura de código mantendo a mesma funcionalidade maliciosa.",
      answer: true,
      comment: "Certo. Alteração estrutural preserva funcionalidade enquanto evita detecção."
    },
    {
      text: "Encryption é uma técnica comum usada por malware polimórfico para ofuscar seu código.",
      answer: true,
      comment: "Certo. Criptografia é fundamental para polimorfismo, alterando a aparência do código."
    },
    {
      text: "Malware polimórfico pode usar diferentes algoritmos de criptografia para cada variante gerada.",
      answer: true,
      comment: "Certo. Variação de algoritmos aumenta a dificuldade de detecção."
    },
    {
      text: "Decryption routines são componentes que descriptografam o malware polimórfico em tempo de execução.",
      answer: true,
      comment: "Certo. Rotinas de descriptografia são essenciais para execução do malware."
    },
    {
      text: "Malware polimórfico pode alterar a ordem das instruções sem afetar a lógica do programa.",
      answer: true,
      comment: "Certo. Reordenação de instruções é uma técnica comum de polimorfismo."
    },
    {
      text: "Junk code insertion é uma técnica usada por malware polimórfico para adicionar código sem efeito.",
      answer: true,
      comment: "Certo. Código lixo aumenta a complexidade sem afetar funcionalidade."
    },
    {
      text: "Register reassignment é uma técnica que altera o uso de registradores em malware polimórfico.",
      answer: true,
      comment: "Certo. Reatribuição de registradores altera a aparência do código assembly."
    },
    {
      text: "Malware polimórfico pode usar diferentes chaves de criptografia para cada variante.",
      answer: true,
      comment: "Certo. Variação de chaves é essencial para polimorfismo efetivo."
    },
    {
      text: "Instruction substitution é uma técnica que substitui instruções por sequências equivalentes.",
      answer: true,
      comment: "Certo. Substituição de instruções mantém funcionalidade enquanto altera aparência."
    },
    {
      text: "Malware polimórfico pode alterar strings e constantes para dificultar análise estática.",
      answer: true,
      comment: "Certo. Ofuscação de strings é uma técnica comum em malware polimórfico."
    },
    {
      text: "Control flow obfuscation pode ser usada por malware polimórfico para confundir análise de fluxo.",
      answer: true,
      comment: "Certo. Ofuscação de fluxo de controle complica análise dinâmica."
    },
    {
      text: "Malware polimórfico pode usar técnicas de anti-debugging para evitar análise dinâmica.",
      answer: true,
      comment: "Certo. Proteções anti-debug são comuns em malware polimórfico."
    },
    {
      text: "Signature-based detection é menos efetiva contra malware polimórfico devido às mudanças constantes.",
      answer: true,
      comment: "Certo. Detecção baseada em assinatura falha contra polimorfismo."
    },
    {
      text: "Behavioral analysis é mais efetiva para detectar malware polimórfico que análise estática.",
      answer: true,
      comment: "Certo. Análise comportamental foca na funcionalidade, não na aparência."
    },
    {
      text: "Malware polimórfico pode usar técnicas de metamorphism para reescrever completamente seu código.",
      answer: true,
      comment: "Certo. Metamorfismo é uma evolução do polimorfismo."
    },
    {
      text: "Oligomorphic malware possui um número limitado de variantes, diferente do polimórfico puro.",
      answer: true,
      comment: "Certo. Oligomorfismo usa conjunto limitado de técnicas de mutação."
    },
    {
      text: "Malware polimórfico pode alterar sua entrada point (entry point) para dificultar análise.",
      answer: true,
      comment: "Certo. Alteração do ponto de entrada complica análise estática."
    },
    {
      text: "Code obfuscation techniques são frequentemente combinadas com polimorfismo para maior proteção.",
      answer: true,
      comment: "Certo. Ofuscação e polimorfismo são técnicas complementares."
    },
    {
      text: "Malware polimórfico pode usar técnicas de anti-VM para detectar ambientes de análise.",
      answer: true,
      comment: "Certo. Detecção de VM é comum em malware polimórfico avançado."
    },
    {
      text: "Heuristic analysis é uma técnica de detecção que pode identificar malware polimórfico baseado em padrões.",
      answer: true,
      comment: "Certo. Análise heurística procura por padrões suspeitos, não assinaturas exatas."
    },
    {
      text: "Malware polimórfico pode alterar sua estrutura de dados para dificultar análise reversa.",
      answer: true,
      comment: "Certo. Modificação de estruturas de dados complica análise estática."
    },
    {
      text: "Sandbox analysis pode ser usada para detectar malware polimórfico através de execução controlada.",
      answer: true,
      comment: "Certo. Análise em sandbox permite observação do comportamento real."
    },
    {
      text: "Malware polimórfico pode usar técnicas de timing para detectar ambientes de análise.",
      answer: true,
      comment: "Certo. Detecção de timing é usada para identificar análise dinâmica."
    },
    {
      text: "Memory analysis pode revelar malware polimórfico após descriptografia em tempo de execução.",
      answer: true,
      comment: "Certo. Análise de memória captura o código descriptografado."
    },
    {
      text: "Malware polimórfico pode alterar sua seção de imports para dificultar análise de dependências.",
      answer: true,
      comment: "Certo. Ofuscação de imports complica análise de chamadas de API."
    },
    {
      text: "Machine learning pode ser usado para detectar malware polimórfico baseado em características comportamentais.",
      answer: true,
      comment: "Certo. ML pode identificar padrões que humanos não conseguem detectar."
    },
    {
      text: "Malware polimórfico pode usar técnicas de anti-disassembly para dificultar análise estática.",
      answer: true,
      comment: "Certo. Técnicas anti-desmontagem protegem contra análise reversa."
    },
    {
      text: "Network traffic analysis pode detectar malware polimórfico através de padrões de comunicação.",
      answer: true,
      comment: "Certo. Análise de tráfego de rede pode revelar comportamento malicioso."
    },
    {
      text: "Malware polimórfico pode alterar sua seção de recursos para ocultar informações.",
      answer: true,
      comment: "Certo. Ofuscação de recursos é uma técnica comum em malware polimórfico."
    },
    {
      text: "Dynamic analysis é mais efetiva que análise estática para malware polimórfico devido à descriptografia em tempo de execução.",
      answer: true,
      comment: "Certo. Análise dinâmica captura o código real após descriptografia."
    }
  ],
  sandboxing: [
    {
      text: "Sandboxing é uma técnica de isolamento que executa código em um ambiente controlado e isolado.",
      answer: true,
      comment: "Certo. Sandboxing cria ambientes seguros para execução de código suspeito."
    },
    {
      text: "Virtual machines são comumente usadas para criar ambientes sandbox isolados do sistema host.",
      answer: true,
      comment: "Certo. VMs fornecem isolamento completo entre o ambiente sandbox e o sistema host."
    },
    {
      text: "Container-based sandboxing usa tecnologias como Docker para isolar aplicações em ambientes controlados.",
      answer: true,
      comment: "Certo. Containers oferecem isolamento mais leve que VMs, mas ainda efetivo."
    },
    {
      text: "Application sandboxing isola aplicações individuais do resto do sistema operacional.",
      answer: true,
      comment: "Certo. Sandboxing de aplicação restringe acesso a recursos do sistema."
    },
    {
      text: "Browser sandboxing isola processos do navegador para prevenir ataques baseados em web.",
      answer: true,
      comment: "Certo. Sandboxing de navegador protege contra exploits de JavaScript e plugins."
    },
    {
      text: "System call interception é uma técnica que monitora e controla chamadas do sistema operacional em sandboxes.",
      answer: true,
      comment: "Certo. Interceptação de syscalls permite controle granular sobre comportamento do código."
    },
    {
      text: "API hooking é uma técnica usada em sandboxes para interceptar e monitorar chamadas de API.",
      answer: true,
      comment: "Certo. Hooking de API permite análise detalhada de comportamento de aplicações."
    },
    {
      text: "Sandboxing pode ser usado para análise de malware em ambientes seguros sem risco ao sistema host.",
      answer: true,
      comment: "Certo. Análise de malware em sandbox é uma prática fundamental em segurança."
    },
    {
      text: "Process isolation é uma técnica que previne que processos sandboxed acessem outros processos do sistema.",
      answer: true,
      comment: "Certo. Isolamento de processos é essencial para segurança do sandbox."
    },
    {
      text: "File system virtualization permite que aplicações sandboxed acessem arquivos sem modificar o sistema real.",
      answer: true,
      comment: "Certo. Virtualização de sistema de arquivos protege dados do sistema host."
    },
    {
      text: "Network sandboxing isola tráfego de rede de aplicações sandboxed para análise de comportamento.",
      answer: true,
      comment: "Certo. Sandboxing de rede permite análise de comunicação sem afetar rede real."
    },
    {
      text: "Registry virtualization é uma técnica que virtualiza o registro do Windows em ambientes sandboxed.",
      answer: true,
      comment: "Certo. Virtualização de registro protege configurações do sistema Windows."
    },
    {
      text: "Sandboxing pode detectar malware que usa técnicas anti-VM através de análise comportamental.",
      answer: true,
      comment: "Certo. Análise comportamental em sandbox pode revelar malware que evita detecção estática."
    },
    {
      text: "Memory sandboxing isola e monitora acesso à memória de aplicações sandboxed.",
      answer: true,
      comment: "Certo. Sandboxing de memória previne corrupção e vazamentos de memória."
    },
    {
      text: "Sandboxing pode ser usado para testar software em desenvolvimento sem afetar o sistema de produção.",
      answer: true,
      comment: "Certo. Sandboxing é útil para desenvolvimento e testes seguros."
    },
    {
      text: "Hardware-assisted sandboxing usa recursos de hardware para melhorar isolamento e performance.",
      answer: true,
      comment: "Certo. Recursos de hardware como Intel VT-x melhoram eficiência do sandboxing."
    },
    {
      text: "Sandboxing pode detectar malware polimórfico através de execução controlada e análise dinâmica.",
      answer: true,
      comment: "Certo. Análise dinâmica em sandbox revela comportamento real do malware."
    },
    {
      text: "User-mode sandboxing executa aplicações em modo usuário com privilégios limitados.",
      answer: true,
      comment: "Certo. Sandboxing em modo usuário restringe acesso a recursos privilegiados."
    },
    {
      text: "Kernel-mode sandboxing pode ser usado para monitorar e controlar operações do kernel.",
      answer: true,
      comment: "Certo. Sandboxing em modo kernel oferece controle mais profundo do sistema."
    },
    {
      text: "Sandboxing pode detectar ransomware através de monitoramento de operações de arquivo.",
      answer: true,
      comment: "Certo. Monitoramento de operações de arquivo pode identificar comportamento de ransomware."
    },
    {
      text: "API monitoring em sandboxes pode detectar tentativas de comunicação com servidores C&C.",
      answer: true,
      comment: "Certo. Monitoramento de API de rede pode revelar comunicação maliciosa."
    },
    {
      text: "Sandboxing pode detectar keyloggers através de monitoramento de entrada de teclado.",
      answer: true,
      comment: "Certo. Monitoramento de entrada pode identificar captura não autorizada de dados."
    },
    {
      text: "Process monitoring em sandboxes pode detectar criação de processos suspeitos.",
      answer: true,
      comment: "Certo. Monitoramento de processos pode identificar comportamento malicioso."
    },
    {
      text: "Sandboxing pode detectar backdoors através de monitoramento de conexões de rede.",
      answer: true,
      comment: "Certo. Monitoramento de rede pode revelar comunicação de backdoor."
    },
    {
      text: "Memory analysis em sandboxes pode detectar injeção de código malicioso.",
      answer: true,
      comment: "Certo. Análise de memória pode identificar código injetado dinamicamente."
    },
    {
      text: "Sandboxing pode detectar rootkits através de monitoramento de operações do kernel.",
      answer: true,
      comment: "Certo. Monitoramento de kernel pode identificar modificações maliciosas."
    },
    {
      text: "Behavioral analysis em sandboxes pode detectar malware que evita detecção estática.",
      answer: true,
      comment: "Certo. Análise comportamental foca no que o malware faz, não em sua aparência."
    },
    {
      text: "Sandboxing pode detectar spyware através de monitoramento de acesso a dados pessoais.",
      answer: true,
      comment: "Certo. Monitoramento de acesso a dados pode identificar coleta não autorizada."
    },
    {
      text: "Network traffic analysis em sandboxes pode detectar comunicação maliciosa com servidores externos.",
      answer: true,
      comment: "Certo. Análise de tráfego de rede pode revelar comunicação com C&C."
    },
    {
      text: "Sandboxing pode detectar worms através de monitoramento de propagação automática.",
      answer: true,
      comment: "Certo. Monitoramento de propagação pode identificar comportamento de worm."
    },
    {
      text: "File system monitoring em sandboxes pode detectar modificações maliciosas de arquivos.",
      answer: true,
      comment: "Certo. Monitoramento de sistema de arquivos pode identificar alterações suspeitas."
    },
    {
      text: "Sandboxing pode detectar trojans através de monitoramento de execução de ações não autorizadas.",
      answer: true,
      comment: "Certo. Monitoramento de execução pode identificar comportamento de cavalo de Troia."
    }
  ],
  assembly: [
    {
      text: "Assembly é uma linguagem de programação de baixo nível que representa instruções de máquina de forma simbólica.",
      answer: true,
      comment: "Certo. Assembly é uma representação simbólica das instruções de máquina."
    },
    {
      text: "Registradores são pequenas áreas de memória de alta velocidade localizadas na CPU.",
      answer: true,
      comment: "Certo. Registradores são componentes fundamentais da CPU para armazenamento temporário."
    },
    {
      text: "A arquitetura x86 é uma das arquiteturas mais comuns para processadores Intel e AMD.",
      answer: true,
      comment: "Certo. x86 é a arquitetura dominante em computadores pessoais."
    },
    {
      text: "A instrução MOV é usada para mover dados entre registradores e memória em assembly.",
      answer: true,
      comment: "Certo. MOV é uma das instruções mais fundamentais em assembly."
    },
    {
      text: "A instrução ADD realiza operações de adição entre registradores ou registrador e memória.",
      answer: true,
      comment: "Certo. ADD é uma instrução aritmética básica em assembly."
    },
    {
      text: "A instrução SUB realiza operações de subtração em assembly.",
      answer: true,
      comment: "Certo. SUB é usada para subtrair valores em assembly."
    },
    {
      text: "A instrução JMP é usada para saltos incondicionais em assembly.",
      answer: true,
      comment: "Certo. JMP permite transferência de controle para outro endereço."
    },
    {
      text: "A instrução CALL é usada para chamar subrotinas em assembly.",
      answer: true,
      comment: "Certo. CALL salva o endereço de retorno e transfere controle para a subrotina."
    },
    {
      text: "A instrução RET é usada para retornar de uma subrotina em assembly.",
      answer: true,
      comment: "Certo. RET restaura o endereço de retorno e transfere controle de volta."
    },
    {
      text: "A instrução PUSH coloca um valor na pilha em assembly.",
      answer: true,
      comment: "Certo. PUSH decrementa o ponteiro da pilha e armazena o valor."
    },
    {
      text: "A instrução POP remove um valor da pilha em assembly.",
      answer: true,
      comment: "Certo. POP carrega o valor do topo da pilha e incrementa o ponteiro."
    },
    {
      text: "A instrução CMP é usada para comparar valores em assembly.",
      answer: true,
      comment: "Certo. CMP compara dois operandos e define flags baseado no resultado."
    },
    {
      text: "A instrução JE (Jump if Equal) salta se o resultado da comparação anterior for igual.",
      answer: true,
      comment: "Certo. JE é uma instrução de salto condicional baseada em flags."
    },
    {
      text: "A instrução JNE (Jump if Not Equal) salta se o resultado da comparação anterior for diferente.",
      answer: true,
      comment: "Certo. JNE é o oposto de JE, salta quando valores são diferentes."
    },
    {
      text: "A instrução AND realiza operação lógica AND bit a bit em assembly.",
      answer: true,
      comment: "Certo. AND é uma instrução lógica fundamental em assembly."
    },
    {
      text: "A instrução OR realiza operação lógica OR bit a bit em assembly.",
      answer: true,
      comment: "Certo. OR é usada para operações lógicas de inclusão."
    },
    {
      text: "A instrução XOR realiza operação lógica XOR bit a bit em assembly.",
      answer: true,
      comment: "Certo. XOR é útil para operações lógicas e limpeza de registradores."
    },
    {
      text: "A instrução SHL (Shift Left) desloca bits para a esquerda em assembly.",
      answer: true,
      comment: "Certo. SHL multiplica efetivamente o valor por 2^n, onde n é o número de posições."
    },
    {
      text: "A instrução SHR (Shift Right) desloca bits para a direita em assembly.",
      answer: true,
      comment: "Certo. SHR divide efetivamente o valor por 2^n, onde n é o número de posições."
    },
    {
      text: "A instrução MUL realiza multiplicação em assembly.",
      answer: true,
      comment: "Certo. MUL multiplica dois operandos e armazena o resultado."
    },
    {
      text: "A instrução DIV realiza divisão em assembly.",
      answer: true,
      comment: "Certo. DIV divide um valor por outro e armazena quociente e resto."
    },
    {
      text: "A instrução NOP (No Operation) não executa nenhuma operação em assembly.",
      answer: true,
      comment: "Certo. NOP é usada para alinhamento de código e debugging."
    },
    {
      text: "A instrução INT (Interrupt) gera uma interrupção do sistema em assembly.",
      answer: true,
      comment: "Certo. INT é usada para chamar serviços do sistema operacional."
    },
    {
      text: "A arquitetura ARM é amplamente usada em dispositivos móveis e sistemas embarcados.",
      answer: true,
      comment: "Certo. ARM é a arquitetura dominante em smartphones e tablets."
    },
    {
      text: "A instrução LDR (Load Register) carrega dados da memória para registrador em ARM assembly.",
      answer: true,
      comment: "Certo. LDR é a instrução de carregamento padrão em ARM."
    },
    {
      text: "A instrução STR (Store Register) armazena dados do registrador na memória em ARM assembly.",
      answer: true,
      comment: "Certo. STR é a instrução de armazenamento padrão em ARM."
    },
    {
      text: "A instrução B (Branch) é usada para saltos incondicionais em ARM assembly.",
      answer: true,
      comment: "Certo. B é equivalente ao JMP em x86 assembly."
    },
    {
      text: "A instrução BL (Branch and Link) é usada para chamar subrotinas em ARM assembly.",
      answer: true,
      comment: "Certo. BL salva o endereço de retorno e transfere controle."
    },
    {
      text: "A instrução CMP compara valores e define flags em ARM assembly.",
      answer: true,
      comment: "Certo. CMP funciona de forma similar em ARM e x86."
    },
    {
      text: "A instrução BEQ (Branch if Equal) salta se o resultado da comparação for igual em ARM assembly.",
      answer: true,
      comment: "Certo. BEQ é equivalente ao JE em x86 assembly."
    },
    {
      text: "A arquitetura MIPS é comumente usada em sistemas embarcados e educacionais.",
      answer: true,
      comment: "Certo. MIPS é popular em cursos de arquitetura de computadores."
    },
    {
      text: "A instrução LW (Load Word) carrega uma palavra da memória em MIPS assembly.",
      answer: true,
      comment: "Certo. LW é a instrução de carregamento de 32 bits em MIPS."
    },
    {
      text: "A instrução SW (Store Word) armazena uma palavra na memória em MIPS assembly.",
      answer: true,
      comment: "Certo. SW é a instrução de armazenamento de 32 bits em MIPS."
    },
    {
      text: "A instrução J (Jump) é usada para saltos incondicionais em MIPS assembly.",
      answer: true,
      comment: "Certo. J é equivalente ao JMP em x86 e B em ARM."
    },
    {
      text: "A instrução JAL (Jump and Link) é usada para chamar subrotinas em MIPS assembly.",
      answer: true,
      comment: "Certo. JAL salva o endereço de retorno e transfere controle."
    },
    {
      text: "A instrução BEQ (Branch if Equal) salta se dois registradores forem iguais em MIPS assembly.",
      answer: true,
      comment: "Certo. BEQ é uma instrução de salto condicional em MIPS."
    }
  ],
  oop: [
    {
      text: "Uma classe é um modelo ou blueprint que define as propriedades e comportamentos de objetos.",
      answer: true,
      comment: "Certo. Classes são templates que definem estrutura e comportamento de objetos."
    },
    {
      text: "Um objeto é uma instância de uma classe que possui estado e comportamento específicos.",
      answer: true,
      comment: "Certo. Objetos são instâncias concretas criadas a partir de classes."
    },
    {
      text: "Encapsulamento é o princípio que combina dados e métodos que operam sobre esses dados em uma única unidade.",
      answer: true,
      comment: "Certo. Encapsulamento agrupa dados e comportamentos relacionados."
    },
    {
      text: "Herança permite que uma classe herde propriedades e métodos de outra classe.",
      answer: true,
      comment: "Certo. Herança estabelece relacionamento hierárquico entre classes."
    },
    {
      text: "Polimorfismo permite que objetos de diferentes classes respondam de forma diferente à mesma mensagem.",
      answer: true,
      comment: "Certo. Polimorfismo permite múltiplas formas de implementar a mesma interface."
    },
    {
      text: "Sobrecarga de métodos permite que uma classe tenha múltiplos métodos com o mesmo nome mas parâmetros diferentes.",
      answer: true,
      comment: "Certo. Sobrecarga de métodos é uma forma de polimorfismo em tempo de compilação."
    },
    {
      text: "Sobreposição de métodos permite que uma subclasse redefina um método herdado da superclasse.",
      answer: true,
      comment: "Certo. Sobreposição (override) é polimorfismo em tempo de execução."
    },
    {
      text: "Uma classe abstrata não pode ser instanciada diretamente, servindo apenas como base para outras classes.",
      answer: true,
      comment: "Certo. Classes abstratas são templates que não podem ser instanciadas."
    },
    {
      text: "Uma interface define um contrato que especifica quais métodos uma classe deve implementar.",
      answer: true,
      comment: "Certo. Interfaces estabelecem contratos sem implementação."
    },
    {
      text: "Construtores são métodos especiais que inicializam objetos quando são criados.",
      answer: true,
      comment: "Certo. Construtores são chamados automaticamente na criação de objetos."
    },
    {
      text: "Destrutores são métodos que liberam recursos quando um objeto é destruído.",
      answer: true,
      comment: "Certo. Destrutores são responsáveis pela limpeza de recursos."
    },
    {
      text: "Modificadores de acesso controlam a visibilidade de membros de uma classe.",
      answer: true,
      comment: "Certo. Modificadores como public, private, protected controlam acesso."
    },
    {
      text: "Herança múltipla permite que uma classe herde de múltiplas classes base.",
      answer: true,
      comment: "Certo. Herança múltipla é suportada em algumas linguagens como C++."
    },
    {
      text: "Composição é uma alternativa à herança que permite reutilizar código através de delegação.",
      answer: true,
      comment: "Certo. Composição favorece 'has-a' sobre 'is-a'."
    },
    {
      text: "Agregação é um tipo de relacionamento onde um objeto contém outros objetos, mas não os possui.",
      answer: true,
      comment: "Certo. Agregação é um relacionamento mais fraco que composição."
    },
    {
      text: "Associação é um relacionamento entre objetos que permite comunicação entre eles.",
      answer: true,
      comment: "Certo. Associação estabelece conexões entre objetos."
    },
    {
      text: "Coesão mede o grau em que os membros de uma classe estão relacionados entre si.",
      answer: true,
      comment: "Certo. Alta coesão indica que membros trabalham juntos para um propósito comum."
    },
    {
      text: "Acoplamento mede o grau de dependência entre classes.",
      answer: true,
      comment: "Certo. Baixo acoplamento é desejável para manutenibilidade."
    },
    {
      text: "Métodos estáticos pertencem à classe, não às instâncias, e podem ser chamados sem criar objetos.",
      answer: true,
      comment: "Certo. Métodos estáticos são compartilhados por todas as instâncias."
    },
    {
      text: "Variáveis estáticas são compartilhadas por todas as instâncias de uma classe.",
      answer: true,
      comment: "Certo. Variáveis estáticas mantêm o mesmo valor para todas as instâncias."
    },
    {
      text: "Métodos virtuais permitem sobreposição em subclasses através de polimorfismo dinâmico.",
      answer: true,
      comment: "Certo. Métodos virtuais permitem binding dinâmico."
    },
    {
      text: "Classes finais não podem ser herdadas por outras classes.",
      answer: true,
      comment: "Certo. Classes finais (sealed) impedem herança adicional."
    },
    {
      text: "Métodos finais não podem ser sobrepostos em subclasses.",
      answer: true,
      comment: "Certo. Métodos finais impedem sobreposição adicional."
    },
    {
      text: "Construtores de cópia criam novos objetos baseados em objetos existentes.",
      answer: true,
      comment: "Certo. Construtores de cópia facilitam criação de objetos similares."
    },
    {
      text: "Operadores de atribuição podem ser sobrecarregados para definir comportamento personalizado.",
      answer: true,
      comment: "Certo. Sobrecarga de operadores permite sintaxe natural."
    },
    {
      text: "Classes aninhadas são definidas dentro de outras classes e têm acesso aos membros da classe externa.",
      answer: true,
      comment: "Certo. Classes aninhadas estabelecem relacionamento íntimo."
    },
    {
      text: "Métodos abstratos são declarados mas não implementados na classe base.",
      answer: true,
      comment: "Certo. Métodos abstratos devem ser implementados pelas subclasses."
    },
    {
      text: "Interfaces podem herdar de outras interfaces através de herança múltipla.",
      answer: true,
      comment: "Certo. Interfaces podem estender múltiplas outras interfaces."
    },
    {
      text: "Classes genéricas permitem criar classes que trabalham com diferentes tipos de dados.",
      answer: true,
      comment: "Certo. Generics fornecem type safety e reutilização de código."
    },
    {
      text: "Métodos genéricos permitem criar métodos que trabalham com diferentes tipos de dados.",
      answer: true,
      comment: "Certo. Métodos genéricos são flexíveis e type-safe."
    },
    {
      text: "Reflexão permite que um programa examine e modifique sua própria estrutura em tempo de execução.",
      answer: true,
      comment: "Certo. Reflexão permite introspecção e modificação dinâmica."
    },
    {
      text: "Serialização é o processo de converter objetos em formato que pode ser armazenado ou transmitido.",
      answer: true,
      comment: "Certo. Serialização permite persistência e comunicação de objetos."
    },
    {
      text: "Deserialização é o processo de reconstruir objetos a partir de dados serializados.",
      answer: true,
      comment: "Certo. Deserialização restaura objetos de dados persistentes."
    },
    {
      text: "Classes singleton garantem que apenas uma instância da classe existe durante a execução do programa.",
      answer: true,
      comment: "Certo. Singleton controla acesso a recursos compartilhados."
    },
    {
      text: "Classes factory são responsáveis por criar objetos sem especificar suas classes concretas.",
      answer: true,
      comment: "Certo. Factory pattern encapsula lógica de criação de objetos."
    },
    {
      text: "Classes builder facilitam a criação de objetos complexos através de passos sequenciais.",
      answer: true,
      comment: "Certo. Builder pattern melhora legibilidade na criação de objetos."
    },
    {
      text: "Classes observer notificam outros objetos sobre mudanças em seu estado.",
      answer: true,
      comment: "Certo. Observer pattern implementa comunicação loose-coupled."
    },
    {
      text: "Classes decorator adicionam funcionalidades a objetos sem modificar sua estrutura.",
      answer: true,
      comment: "Certo. Decorator pattern permite extensão flexível de funcionalidades."
    },
    {
      text: "Classes adapter permitem que interfaces incompatíveis trabalhem juntas.",
      answer: true,
      comment: "Certo. Adapter pattern resolve incompatibilidades de interface."
    },
    {
      text: "Classes proxy controlam acesso a outros objetos, fornecendo uma interface substituta.",
      answer: true,
      comment: "Certo. Proxy pattern implementa controle de acesso e lazy loading."
    },
    {
      text: "Classes command encapsulam uma solicitação como um objeto.",
      answer: true,
      comment: "Certo. Command pattern permite parametrização de operações."
    },
    {
      text: "Classes strategy permitem que algoritmos sejam intercambiáveis em tempo de execução.",
      answer: true,
      comment: "Certo. Strategy pattern permite seleção dinâmica de algoritmos."
    },
    {
      text: "Classes template method define o esqueleto de um algoritmo, delegando passos específicos às subclasses.",
      answer: true,
      comment: "Certo. Template method permite reutilização de estrutura de algoritmo."
    },
    {
      text: "Classes state permitem que um objeto altere seu comportamento quando seu estado interno muda.",
      answer: true,
      comment: "Certo. State pattern encapsula comportamento dependente de estado."
    },
    {
      text: "Classes chain of responsibility permite que múltiplos objetos processem uma solicitação.",
      answer: true,
      comment: "Certo. Chain of responsibility implementa processamento sequencial."
    },
    {
      text: "Classes iterator fornecem uma maneira de acessar elementos de uma coleção sem expor sua representação interna.",
      answer: true,
      comment: "Certo. Iterator pattern encapsula navegação de estruturas de dados."
    },
    {
      text: "Classes memento permite salvar e restaurar o estado interno de um objeto.",
      answer: true,
      comment: "Certo. Memento pattern implementa funcionalidade de undo/redo."
    },
    {
      text: "Classes mediator centraliza comunicação complexa entre objetos.",
      answer: true,
      comment: "Certo. Mediator pattern reduz acoplamento entre objetos."
    },
    {
      text: "Classes visitor permite adicionar novas operações a uma hierarquia de classes sem modificá-las.",
      answer: true,
      comment: "Certo. Visitor pattern separa algoritmos das estruturas de dados."
    },
    {
      text: "Classes bridge desacopla uma abstração de sua implementação.",
      answer: true,
      comment: "Certo. Bridge pattern permite variação independente de abstração e implementação."
    },
    {
      text: "Classes composite permite tratar objetos individuais e composições de objetos uniformemente.",
      answer: true,
      comment: "Certo. Composite pattern implementa estruturas hierárquicas."
    },
    {
      text: "Classes flyweight permite compartilhar objetos para reduzir uso de memória.",
      answer: true,
      comment: "Certo. Flyweight pattern otimiza uso de memória através de compartilhamento."
    },
    {
      text: "Classes facade fornece uma interface simplificada para um subsistema complexo.",
      answer: true,
      comment: "Certo. Facade pattern simplifica interface com sistemas complexos."
    },
    {
      text: "Classes abstract factory fornece uma interface para criar famílias de objetos relacionados.",
      answer: true,
      comment: "Certo. Abstract factory garante compatibilidade entre objetos relacionados."
    },
    {
      text: "Classes builder pattern permite construção de objetos complexos passo a passo.",
      answer: true,
      comment: "Certo. Builder pattern melhora legibilidade na criação de objetos complexos."
    },
    {
      text: "Classes prototype permite criar novos objetos clonando um protótipo existente.",
      answer: true,
      comment: "Certo. Prototype pattern evita custo de criação de objetos complexos."
    },
    {
      text: "Classes object pool reutiliza objetos caros para melhorar performance.",
      answer: true,
      comment: "Certo. Object pool pattern otimiza alocação e desalocação de objetos."
    },
    {
      text: "Classes dependency injection permite injeção de dependências externas em uma classe.",
      answer: true,
      comment: "Certo. Dependency injection reduz acoplamento e facilita testes."
    },
    {
      text: "Classes lazy initialization cria objetos apenas quando necessário.",
      answer: true,
      comment: "Certo. Lazy initialization melhora performance e uso de memória."
    },
    {
      text: "Classes immutable garante que objetos não podem ser modificados após criação.",
      answer: true,
      comment: "Certo. Objetos imutáveis são thread-safe e previsíveis."
    },
    {
      text: "Classes value object representa um conceito do domínio sem identidade própria.",
      answer: true,
      comment: "Certo. Value objects são definidos por seus atributos, não identidade."
    },
    {
      text: "Classes entity possui identidade própria que persiste através de mudanças de estado.",
      answer: true,
      comment: "Certo. Entities são identificadas por ID único, não por atributos."
    },
    {
      text: "Classes repository encapsula lógica de acesso a dados e fornece interface orientada a objetos.",
      answer: true,
      comment: "Certo. Repository pattern abstrai persistência de dados."
    },
    {
      text: "Classes unit of work coordena transações e mantém consistência de dados.",
      answer: true,
      comment: "Certo. Unit of work pattern gerencia transações e mudanças de estado."
    },
    {
      text: "Classes specification encapsula regras de negócio em objetos reutilizáveis.",
      answer: true,
      comment: "Certo. Specification pattern permite composição de regras de negócio."
    },
    {
      text: "Classes domain service implementa lógica de negócio que não pertence a uma entidade específica.",
      answer: true,
      comment: "Certo. Domain services encapsulam lógica de negócio complexa."
    },
    {
      text: "Classes aggregate root coordena acesso a um conjunto de entidades relacionadas.",
      answer: true,
      comment: "Certo. Aggregate root mantém consistência de dados em agregados."
    },
    {
      text: "Classes domain event representa algo significativo que aconteceu no domínio.",
      answer: true,
      comment: "Certo. Domain events permitem comunicação loose-coupled entre componentes."
    },
    {
      text: "Classes command handler processa comandos e coordena mudanças no domínio.",
      answer: true,
      comment: "Certo. Command handlers implementam lógica de processamento de comandos."
    },
    {
      text: "Classes query handler processa consultas e retorna dados sem modificar estado.",
      answer: true,
      comment: "Certo. Query handlers implementam lógica de leitura de dados."
    },
    {
      text: "Classes event handler responde a eventos de domínio e executa lógica de negócio.",
      answer: true,
      comment: "Certo. Event handlers implementam reações a eventos de domínio."
    },
    {
      text: "Classes saga coordena transações distribuídas através de uma sequência de comandos e compensações.",
      answer: true,
      comment: "Certo. Saga pattern mantém consistência em transações distribuídas."
    },
    {
      text: "Classes cqrs separa operações de leitura e escrita em modelos diferentes.",
      answer: true,
      comment: "Certo. CQRS otimiza performance e escalabilidade de sistemas."
    },
    {
      text: "Classes event sourcing armazena eventos em vez de estado final para reconstruir estado.",
      answer: true,
      comment: "Certo. Event sourcing mantém histórico completo de mudanças."
    },
    {
      text: "Classes microservice representa um serviço independente com responsabilidade específica.",
      answer: true,
      comment: "Certo. Microservices implementam arquitetura distribuída e modular."
    }
  ],
  procedural: [
    {
      text: "Linguagens procedurais são baseadas no conceito de procedimentos ou funções que executam operações específicas.",
      answer: true,
      comment: "Certo. Linguagens procedurais organizam código em procedimentos reutilizáveis."
    },
    {
      text: "Tipos de dados elementares incluem inteiros, números de ponto flutuante, caracteres e booleanos.",
      answer: true,
      comment: "Certo. Tipos elementares são os tipos básicos fornecidos pela linguagem."
    },
    {
      text: "Tipos de dados estruturados incluem arrays, estruturas, uniões e ponteiros.",
      answer: true,
      comment: "Certo. Tipos estruturados são compostos de outros tipos de dados."
    },
    {
      text: "Uma função é um bloco de código que recebe parâmetros, executa operações e retorna um valor.",
      answer: true,
      comment: "Certo. Funções são unidades de código reutilizáveis com entrada e saída."
    },
    {
      text: "Um procedimento é similar a uma função, mas pode não retornar um valor explicitamente.",
      answer: true,
      comment: "Certo. Procedimentos focam na execução de ações em vez de retornar valores."
    },
    {
      text: "Variáveis locais são declaradas dentro de uma função e só existem durante sua execução.",
      answer: true,
      comment: "Certo. Variáveis locais têm escopo limitado à função onde são declaradas."
    },
    {
      text: "Variáveis globais são declaradas fora de funções e podem ser acessadas por qualquer função.",
      answer: true,
      comment: "Certo. Variáveis globais têm escopo global e podem ser acessadas em qualquer lugar."
    },
    {
      text: "Parâmetros por valor criam uma cópia do argumento dentro da função.",
      answer: true,
      comment: "Certo. Passagem por valor protege o argumento original de modificações."
    },
    {
      text: "Parâmetros por referência passam o endereço da variável, permitindo modificação do valor original.",
      answer: true,
      comment: "Certo. Passagem por referência permite que a função modifique o argumento original."
    },
    {
      text: "Arrays são estruturas de dados que armazenam múltiplos elementos do mesmo tipo em posições consecutivas.",
      answer: true,
      comment: "Certo. Arrays permitem acesso indexado a múltiplos elementos."
    },
    {
      text: "Arrays unidimensionais são listas lineares de elementos acessados por um único índice.",
      answer: true,
      comment: "Certo. Arrays unidimensionais são a forma mais simples de array."
    },
    {
      text: "Arrays bidimensionais são tabelas de elementos acessados por dois índices (linha e coluna).",
      answer: true,
      comment: "Certo. Arrays bidimensionais representam dados em formato tabular."
    },
    {
      text: "Strings são sequências de caracteres armazenadas como arrays de caracteres.",
      answer: true,
      comment: "Certo. Strings são tipos de dados compostos de caracteres."
    },
    {
      text: "Estruturas (structs) permitem agrupar dados de tipos diferentes em uma única unidade.",
      answer: true,
      comment: "Certo. Estruturas são tipos compostos definidos pelo programador."
    },
    {
      text: "Uniões permitem que diferentes tipos de dados ocupem o mesmo espaço de memória.",
      answer: true,
      comment: "Certo. Uniões economizam memória permitindo interpretação múltipla dos dados."
    },
    {
      text: "Ponteiros são variáveis que armazenam endereços de memória de outras variáveis.",
      answer: true,
      comment: "Certo. Ponteiros permitem acesso indireto a dados na memória."
    },
    {
      text: "Alocação dinâmica de memória permite reservar espaço em tempo de execução.",
      answer: true,
      comment: "Certo. Alocação dinâmica é controlada pelo programador."
    },
    {
      text: "Desalocação de memória libera espaço previamente alocado dinamicamente.",
      answer: true,
      comment: "Certo. Desalocação previne vazamentos de memória."
    },
    {
      text: "Recursão é uma técnica onde uma função chama a si mesma para resolver problemas.",
      answer: true,
      comment: "Certo. Recursão divide problemas complexos em subproblemas menores."
    },
    {
      text: "Funções recursivas devem ter um caso base para evitar recursão infinita.",
      answer: true,
      comment: "Certo. Caso base é a condição de parada da recursão."
    },
    {
      text: "Passagem de arrays para funções geralmente é feita por referência para eficiência.",
      answer: true,
      comment: "Certo. Arrays grandes são passados por referência para evitar cópia desnecessária."
    },
    {
      text: "Tipos enumerados (enum) permitem definir um conjunto de constantes nomeadas.",
      answer: true,
      comment: "Certo. Enums melhoram legibilidade e type safety."
    },
    {
      text: "Tipos definidos pelo usuário (typedef) permitem criar aliases para tipos existentes.",
      answer: true,
      comment: "Certo. Typedef melhora legibilidade e portabilidade do código."
    },
    {
      text: "Escopo de variáveis determina onde uma variável pode ser acessada no programa.",
      answer: true,
      comment: "Certo. Escopo controla visibilidade e tempo de vida das variáveis."
    },
    {
      text: "Tempo de vida de variáveis determina por quanto tempo uma variável existe na memória.",
      answer: true,
      comment: "Certo. Tempo de vida está relacionado ao escopo e tipo de armazenamento."
    },
    {
      text: "Variáveis estáticas mantêm seu valor entre chamadas de função.",
      answer: true,
      comment: "Certo. Variáveis estáticas preservam estado entre execuções."
    },
    {
      text: "Funções inline são expandidas no local da chamada para melhorar performance.",
      answer: true,
      comment: "Certo. Funções inline eliminam overhead de chamada de função."
    },
    {
      text: "Sobrecarga de funções permite múltiplas funções com o mesmo nome mas parâmetros diferentes.",
      answer: true,
      comment: "Certo. Sobrecarga melhora legibilidade e flexibilidade do código."
    },
    {
      text: "Funções com argumentos padrão permitem chamadas com menos parâmetros que o máximo definido.",
      answer: true,
      comment: "Certo. Argumentos padrão simplificam uso de funções complexas."
    },
    {
      text: "Funções variádicas aceitam número variável de argumentos.",
      answer: true,
      comment: "Certo. Funções variádicas são flexíveis quanto ao número de parâmetros."
    },
    {
      text: "Ponteiros para funções permitem passar funções como argumentos para outras funções.",
      answer: true,
      comment: "Certo. Ponteiros para funções implementam callbacks e funções de ordem superior."
    },
    {
      text: "Arrays de ponteiros permitem armazenar múltiplos endereços de memória.",
      answer: true,
      comment: "Certo. Arrays de ponteiros são úteis para arrays de strings e estruturas complexas."
    },
    {
      text: "Ponteiros para ponteiros permitem múltiplos níveis de indireção.",
      answer: true,
      comment: "Certo. Ponteiros para ponteiros são usados em alocação dinâmica e arrays multidimensionais."
    },
    {
      text: "Estruturas aninhadas permitem estruturas dentro de outras estruturas.",
      answer: true,
      comment: "Certo. Estruturas aninhadas modelam hierarquias complexas de dados."
    },
    {
      text: "Arrays de estruturas permitem armazenar múltiplas instâncias de um tipo composto.",
      answer: true,
      comment: "Certo. Arrays de estruturas são comuns em bancos de dados simples."
    },
    {
      text: "Uniões anônimas permitem acessar membros sem nomear a união.",
      answer: true,
      comment: "Certo. Uniões anônimas simplificam acesso a membros únicos."
    },
    {
      text: "Bit fields permitem especificar tamanho exato de campos em estruturas.",
      answer: true,
      comment: "Certo. Bit fields economizam memória e controlam layout de dados."
    },
    {
      text: "Packing de estruturas controla alinhamento de membros na memória.",
      answer: true,
      comment: "Certo. Packing otimiza uso de memória e compatibilidade com protocolos."
    },
    {
      text: "Funções const permitem declarar que uma função não modifica o estado do objeto.",
      answer: true,
      comment: "Certo. Funções const garantem que membros não são modificados."
    },
    {
      text: "Funções virtuais permitem polimorfismo em linguagens procedurais com suporte a OOP.",
      answer: true,
      comment: "Certo. Funções virtuais implementam binding dinâmico."
    },
    {
      text: "Templates permitem criar funções e estruturas genéricas em C++.",
      answer: true,
      comment: "Certo. Templates fornecem type safety e reutilização de código."
    },
    {
      text: "Namespaces permitem organizar código em grupos lógicos e evitar conflitos de nomes.",
      answer: true,
      comment: "Certo. Namespaces melhoram organização e evitam colisões de nomes."
    },
    {
      text: "Exceções permitem tratamento de erros de forma estruturada.",
      answer: true,
      comment: "Certo. Exceções separam código de tratamento de erro do código normal."
    },
    {
      text: "RAII (Resource Acquisition Is Initialization) garante liberação automática de recursos.",
      answer: true,
      comment: "Certo. RAII previne vazamentos de recursos através de destrutores automáticos."
    },
    {
      text: "Smart pointers gerenciam automaticamente o ciclo de vida de objetos alocados dinamicamente.",
      answer: true,
      comment: "Certo. Smart pointers eliminam necessidade de desalocação manual."
    },
    {
      text: "Move semantics permitem transferência eficiente de recursos sem cópia desnecessária.",
      answer: true,
      comment: "Certo. Move semantics otimizam performance evitando cópias custosas."
    },
    {
      text: "Lambda expressions permitem criar funções anônimas inline.",
      answer: true,
      comment: "Certo. Lambda expressions simplificam código para operações simples."
    },
    {
      text: "Function objects (functors) são objetos que podem ser chamados como funções.",
      answer: true,
      comment: "Certo. Functors mantêm estado entre chamadas e são mais flexíveis que funções."
    },
    {
      text: "Iterators permitem percorrer coleções de dados de forma uniforme.",
      answer: true,
      comment: "Certo. Iterators abstraem detalhes de implementação de estruturas de dados."
    },
    {
      text: "Algoritmos genéricos trabalham com diferentes tipos de dados através de iteradores.",
      answer: true,
      comment: "Certo. Algoritmos genéricos são reutilizáveis e type-safe."
    },
    {
      text: "Containers são estruturas de dados que armazenam e organizam elementos.",
      answer: true,
      comment: "Certo. Containers fornecem interfaces padronizadas para diferentes estruturas."
    },
    {
      text: "Streams permitem entrada e saída de dados de forma uniforme.",
      answer: true,
      comment: "Certo. Streams abstraem detalhes de I/O e fornecem interface consistente."
    },
    {
      text: "File I/O permite leitura e escrita de dados em arquivos.",
      answer: true,
      comment: "Certo. File I/O é fundamental para persistência de dados."
    },
    {
      text: "Serialização permite converter objetos em formato que pode ser armazenado ou transmitido.",
      answer: true,
      comment: "Certo. Serialização é essencial para persistência e comunicação."
    },
    {
      text: "Reflection permite examinar e modificar estrutura do programa em tempo de execução.",
      answer: true,
      comment: "Certo. Reflection permite introspecção e modificação dinâmica."
    },
    {
      text: "Metaprogramming permite gerar código em tempo de compilação.",
      answer: true,
      comment: "Certo. Metaprogramming otimiza código e reduz repetição."
    },
    {
      text: "Concurrency permite execução simultânea de múltiplas tarefas.",
      answer: true,
      comment: "Certo. Concurrency melhora performance e responsividade de aplicações."
    },
    {
      text: "Threading permite execução paralela de código dentro de um processo.",
      answer: true,
      comment: "Certo. Threading implementa concorrência em nível de processo."
    },
    {
      text: "Synchronization coordena acesso a recursos compartilhados entre threads.",
      answer: true,
      comment: "Certo. Synchronization previne race conditions e garante consistência."
    },
    {
      text: "Memory management controla alocação e liberação de memória dinamicamente.",
      answer: true,
      comment: "Certo. Memory management é crucial para performance e estabilidade."
    },
    {
      text: "Garbage collection libera automaticamente memória não utilizada.",
      answer: true,
      comment: "Certo. Garbage collection previne vazamentos de memória automaticamente."
    }
  ],
  controleFluxo: [
    {
      text: "Estruturas de controle de fluxo determinam a ordem de execução das instruções em um programa.",
      answer: true,
      comment: "Certo. Controle de fluxo define como o programa navega através do código."
    },
    {
      text: "Sequência é a estrutura de controle mais básica, onde instruções são executadas em ordem linear.",
      answer: true,
      comment: "Certo. Sequência é o fluxo natural de execução de cima para baixo."
    },
    {
      text: "Seleção permite que o programa escolha entre diferentes caminhos de execução baseado em condições.",
      answer: true,
      comment: "Certo. Seleção implementa tomada de decisão no programa."
    },
    {
      text: "Iteração permite que um bloco de código seja executado múltiplas vezes.",
      answer: true,
      comment: "Certo. Iteração implementa repetição controlada de código."
    },
    {
      text: "A estrutura if permite executar código condicionalmente baseado em uma expressão booleana.",
      answer: true,
      comment: "Certo. If é a estrutura de seleção mais fundamental."
    },
    {
      text: "A estrutura if-else permite executar código alternativo quando a condição é falsa.",
      answer: true,
      comment: "Certo. If-else fornece caminho alternativo de execução."
    },
    {
      text: "A estrutura if-else aninhada permite múltiplas condições em cascata.",
      answer: true,
      comment: "Certo. If-else aninhada implementa decisões múltiplas."
    },
    {
      text: "A estrutura switch permite seleção entre múltiplas opções baseada no valor de uma variável.",
      answer: true,
      comment: "Certo. Switch é mais eficiente que múltiplos if-else para valores discretos."
    },
    {
      text: "O comando break interrompe a execução de um loop ou switch statement.",
      answer: true,
      comment: "Certo. Break permite saída prematura de estruturas de controle."
    },
    {
      text: "O comando continue pula para a próxima iteração de um loop.",
      answer: true,
      comment: "Certo. Continue permite pular iteração atual sem sair do loop."
    },
    {
      text: "A estrutura while executa um bloco de código enquanto uma condição for verdadeira.",
      answer: true,
      comment: "Certo. While é um loop de pré-teste que verifica condição antes da execução."
    },
    {
      text: "A estrutura do-while executa um bloco de código pelo menos uma vez, depois verifica a condição.",
      answer: true,
      comment: "Certo. Do-while é um loop de pós-teste que executa antes de verificar."
    },
    {
      text: "A estrutura for combina inicialização, condição e incremento em uma única linha.",
      answer: true,
      comment: "Certo. For é ideal para loops com contador conhecido."
    },
    {
      text: "A estrutura for-each itera sobre elementos de uma coleção sem usar índices.",
      answer: true,
      comment: "Certo. For-each simplifica iteração sobre arrays e coleções."
    },
    {
      text: "Loops aninhados são loops dentro de outros loops, criando estruturas bidimensionais.",
      answer: true,
      comment: "Certo. Loops aninhados são úteis para processar estruturas multidimensionais."
    },
    {
      text: "A estrutura try-catch permite tratamento de exceções de forma controlada.",
      answer: true,
      comment: "Certo. Try-catch implementa tratamento de erros estruturado."
    },
    {
      text: "O bloco finally é executado sempre, independentemente de exceção ter sido lançada.",
      answer: true,
      comment: "Certo. Finally garante limpeza de recursos mesmo com exceções."
    },
    {
      text: "A estrutura throw permite lançar exceções personalizadas.",
      answer: true,
      comment: "Certo. Throw permite propagação de erros para tratamento adequado."
    },
    {
      text: "A estrutura return termina a execução de uma função e retorna um valor.",
      answer: true,
      comment: "Certo. Return é essencial para funções que produzem resultados."
    },
    {
      text: "A estrutura goto permite saltar para uma label específica no código.",
      answer: true,
      comment: "Certo. Goto permite controle de fluxo não estruturado."
    },
    {
      text: "Labels são identificadores que marcam pontos específicos no código para uso com goto.",
      answer: true,
      comment: "Certo. Labels definem destinos para saltos de goto."
    },
    {
      text: "A estrutura assert verifica se uma condição é verdadeira e falha se for falsa.",
      answer: true,
      comment: "Certo. Assert é útil para verificação de invariantes e debugging."
    },
    {
      text: "A estrutura guard permite saída antecipada de funções baseada em condições.",
      answer: true,
      comment: "Certo. Guard implementa early return para simplificar lógica."
    },
    {
      text: "A estrutura when (em algumas linguagens) é similar ao switch mas mais flexível.",
      answer: true,
      comment: "Certo. When permite pattern matching e condições complexas."
    },
    {
      text: "A estrutura match permite pattern matching em valores complexos.",
      answer: true,
      comment: "Certo. Match é poderosa para desestruturação e matching de padrões."
    },
    {
      text: "A estrutura with permite executar código em contexto de um objeto específico.",
      answer: true,
      comment: "Certo. With simplifica acesso a propriedades de objetos."
    },
    {
      text: "A estrutura using garante que recursos sejam liberados automaticamente.",
      answer: true,
      comment: "Certo. Using implementa RAII para gerenciamento automático de recursos."
    },
    {
      text: "A estrutura lock garante acesso exclusivo a recursos compartilhados.",
      answer: true,
      comment: "Certo. Lock previne race conditions em programação concorrente."
    },
    {
      text: "A estrutura synchronized garante que apenas uma thread execute um bloco de código por vez.",
      answer: true,
      comment: "Certo. Synchronized implementa exclusão mútua."
    },
    {
      text: "A estrutura await permite execução assíncrona sem bloquear a thread principal.",
      answer: true,
      comment: "Certo. Await é fundamental para programação assíncrona."
    },
    {
      text: "A estrutura yield retorna controle temporariamente mantendo estado da função.",
      answer: true,
      comment: "Certo. Yield implementa generators e lazy evaluation."
    },
    {
      text: "A estrutura delegate permite passar funções como parâmetros.",
      answer: true,
      comment: "Certo. Delegate implementa callbacks e funções de ordem superior."
    },
    {
      text: "A estrutura event permite notificação de mudanças de estado para múltiplos listeners.",
      answer: true,
      comment: "Certo. Event implementa padrão observer de forma estruturada."
    },
    {
      text: "A estrutura lambda permite criar funções anônimas inline.",
      answer: true,
      comment: "Certo. Lambda simplifica criação de funções temporárias."
    },
    {
      text: "A estrutura closure captura variáveis do escopo externo.",
      answer: true,
      comment: "Certo. Closure mantém referência a variáveis do escopo pai."
    },
    {
      text: "A estrutura coroutine permite execução cooperativa de múltiplas tarefas.",
      answer: true,
      comment: "Certo. Coroutine implementa multitarefa sem threads."
    },
    {
      text: "A estrutura async permite definição de funções assíncronas.",
      answer: true,
      comment: "Certo. Async marca funções que podem ser pausadas e retomadas."
    },
    {
      text: "A estrutura promise representa resultado futuro de operação assíncrona.",
      answer: true,
      comment: "Certo. Promise encapsula valor que será disponível no futuro."
    },
    {
      text: "A estrutura future representa resultado de computação que pode estar em andamento.",
      answer: true,
      comment: "Certo. Future permite acesso a resultados de computações paralelas."
    },
    {
      text: "A estrutura stream permite processamento sequencial de dados.",
      answer: true,
      comment: "Certo. Stream implementa pipeline de processamento de dados."
    },
    {
      text: "A estrutura iterator permite percorrer coleções de forma uniforme.",
      answer: true,
      comment: "Certo. Iterator abstrai detalhes de navegação em estruturas de dados."
    },
    {
      text: "A estrutura generator produz sequência de valores sob demanda.",
      answer: true,
      comment: "Certo. Generator implementa lazy evaluation para sequências."
    },
    {
      text: "A estrutura filter permite selecionar elementos que atendem a critérios.",
      answer: true,
      comment: "Certo. Filter implementa seleção condicional de elementos."
    },
    {
      text: "A estrutura map aplica transformação a cada elemento de uma coleção.",
      answer: true,
      comment: "Certo. Map implementa transformação uniforme de elementos."
    },
    {
      text: "A estrutura reduce combina elementos de uma coleção em valor único.",
      answer: true,
      comment: "Certo. Reduce implementa agregação de elementos em resultado único."
    },
    {
      text: "A estrutura fold é similar ao reduce mas com valor inicial explícito.",
      answer: true,
      comment: "Certo. Fold permite controle explícito do valor inicial."
    },
    {
      text: "A estrutura flatMap combina map e flatten em operação única.",
      answer: true,
      comment: "Certo. FlatMap é útil para transformações que produzem coleções."
    },
    {
      text: "A estrutura zip combina elementos de múltiplas coleções em pares.",
      answer: true,
      comment: "Certo. Zip permite processamento paralelo de múltiplas coleções."
    },
    {
      text: "A estrutura partition divide coleção em duas baseada em predicado.",
      answer: true,
      comment: "Certo. Partition separa elementos que atendem e não atendem critério."
    },
    {
      text: "A estrutura groupBy agrupa elementos por chave derivada de cada elemento.",
      answer: true,
      comment: "Certo. GroupBy organiza elementos em grupos baseados em propriedades."
    },
    {
      text: "A estrutura sort ordena elementos de coleção baseado em critério.",
      answer: true,
      comment: "Certo. Sort implementa ordenação de elementos."
    },
    {
      text: "A estrutura distinct remove elementos duplicados de coleção.",
      answer: true,
      comment: "Certo. Distinct mantém apenas elementos únicos."
    },
    {
      text: "A estrutura take seleciona primeiros n elementos de coleção.",
      answer: true,
      comment: "Certo. Take implementa limitação de tamanho de coleção."
    },
    {
      text: "A estrutura drop remove primeiros n elementos de coleção.",
      answer: true,
      comment: "Certo. Drop implementa remoção de prefixo de coleção."
    },
    {
      text: "A estrutura window cria janelas deslizantes sobre coleção.",
      answer: true,
      comment: "Certo. Window é útil para análise de séries temporais."
    },
    {
      text: "A estrutura buffer agrupa elementos em lotes de tamanho fixo.",
      answer: true,
      comment: "Certo. Buffer implementa processamento em lotes."
    },
    {
      text: "A estrutura scan aplica função acumulativa produzindo todos os resultados intermediários.",
      answer: true,
      comment: "Certo. Scan é similar ao reduce mas mantém todos os passos."
    },
    {
      text: "A estrutura concat combina múltiplas coleções em sequência única.",
      answer: true,
      comment: "Certo. Concat implementa concatenação de coleções."
    },
    {
      text: "A estrutura interleave alterna elementos de múltiplas coleções.",
      answer: true,
      comment: "Certo. Interleave combina elementos de forma alternada."
    },
    {
      text: "A estrutura cycle repete coleção infinitamente.",
      answer: true,
      comment: "Certo. Cycle é útil para padrões repetitivos."
    },
    {
      text: "A estrutura repeat produz elemento único múltiplas vezes.",
      answer: true,
      comment: "Certo. Repeat cria sequência de elementos idênticos."
    },
    {
      text: "A estrutura range gera sequência de números em intervalo especificado.",
      answer: true,
      comment: "Certo. Range é fundamental para iteração numérica."
    },
    {
      text: "A estrutura enumerate adiciona índices aos elementos de coleção.",
      answer: true,
      comment: "Certo. Enumerate combina índices com elementos originais."
    },
    {
      text: "A estrutura chain conecta múltiplas coleções em sequência única.",
      answer: true,
      comment: "Certo. Chain implementa concatenação lazy de coleções."
    },
    {
      text: "A estrutura tee divide coleção em múltiplas cópias independentes.",
      answer: true,
      comment: "Certo. Tee permite múltiplas passagens sobre mesma coleção."
    },
    {
      text: "A estrutura islice permite seleção de fatia de coleção.",
      answer: true,
      comment: "Certo. Islice implementa slicing lazy de coleções."
    },
    {
      text: "A estrutura combinations gera todas as combinações possíveis de elementos.",
      answer: true,
      comment: "Certo. Combinations é útil para análise combinatória."
    },
    {
      text: "A estrutura permutations gera todas as permutações possíveis de elementos.",
      answer: true,
      comment: "Certo. Permutations implementa análise de todas as ordenações possíveis."
    }
  ],
  compiladores: [
    {
      text: "Um montador (assembler) converte código assembly em código de máquina executável.",
      answer: true,
      comment: "Certo. Montadores traduzem linguagem assembly para linguagem de máquina."
    },
    {
      text: "Um compilador traduz código fonte de uma linguagem de alto nível para código de máquina.",
      answer: true,
      comment: "Certo. Compiladores convertem código fonte em código executável."
    },
    {
      text: "Um interpretador executa código fonte diretamente, traduzindo e executando linha por linha.",
      answer: true,
      comment: "Certo. Interpretadores executam código sem gerar arquivo executável separado."
    },
    {
      text: "Um ligador (linker) combina múltiplos arquivos objeto em um único executável.",
      answer: true,
      comment: "Certo. Ligadores resolvem referências entre arquivos objeto."
    },
    {
      text: "O processo de compilação inclui análise léxica, sintática e semântica.",
      answer: true,
      comment: "Certo. Compilação envolve múltiplas fases de análise do código fonte."
    },
    {
      text: "A análise léxica divide o código fonte em tokens (lexemas).",
      answer: true,
      comment: "Certo. Análise léxica é a primeira fase do processo de compilação."
    },
    {
      text: "A análise sintática verifica se os tokens seguem a gramática da linguagem.",
      answer: true,
      comment: "Certo. Análise sintática constrói árvore sintática abstrata (AST)."
    },
    {
      text: "A análise semântica verifica se o código tem significado válido.",
      answer: true,
      comment: "Certo. Análise semântica valida tipos, escopo e outras regras."
    },
    {
      text: "A geração de código intermediário produz representação independente de máquina.",
      answer: true,
      comment: "Certo. Código intermediário facilita otimizações e portabilidade."
    },
    {
      text: "A otimização de código melhora performance e eficiência do código gerado.",
      answer: true,
      comment: "Certo. Otimização reduz tempo de execução e uso de memória."
    },
    {
      text: "A geração de código final produz código de máquina específico para a arquitetura alvo.",
      answer: true,
      comment: "Certo. Geração final produz código executável para plataforma específica."
    },
    {
      text: "Compiladores de uma passagem analisam o código fonte uma única vez.",
      answer: true,
      comment: "Certo. Compiladores de uma passagem são mais simples mas menos otimizados."
    },
    {
      text: "Compiladores de múltiplas passagens analisam o código fonte várias vezes.",
      answer: true,
      comment: "Certo. Múltiplas passagens permitem otimizações mais avançadas."
    },
    {
      text: "Compiladores cross-platform geram código para arquiteturas diferentes da máquina de compilação.",
      answer: true,
      comment: "Certo. Cross-compilation permite gerar executáveis para outras plataformas."
    },
    {
      text: "Compiladores JIT (Just-In-Time) compilam código durante a execução.",
      answer: true,
      comment: "Certo. JIT combina benefícios de interpretação e compilação."
    },
    {
      text: "Compiladores AOT (Ahead-Of-Time) compilam código antes da execução.",
      answer: true,
      comment: "Certo. AOT gera executáveis nativos antes da execução."
    },
    {
      text: "O GCC (GNU Compiler Collection) é um conjunto de compiladores para múltiplas linguagens.",
      answer: true,
      comment: "Certo. GCC suporta C, C++, Fortran, Ada e outras linguagens."
    },
    {
      text: "O LLVM é uma infraestrutura de compilação que suporta múltiplas linguagens.",
      answer: true,
      comment: "Certo. LLVM fornece componentes reutilizáveis para compiladores."
    },
    {
      text: "O Clang é um compilador baseado em LLVM para C, C++ e Objective-C.",
      answer: true,
      comment: "Certo. Clang oferece mensagens de erro mais claras que GCC."
    },
    {
      text: "O MSVC (Microsoft Visual C++) é o compilador C++ da Microsoft.",
      answer: true,
      comment: "Certo. MSVC é integrado ao Visual Studio e otimizado para Windows."
    },
    {
      text: "O GAS (GNU Assembler) é o montador padrão do GCC.",
      answer: true,
      comment: "Certo. GAS converte assembly para código objeto."
    },
    {
      text: "O NASM (Netwide Assembler) é um montador popular para x86 e x86-64.",
      answer: true,
      comment: "Certo. NASM é conhecido por sua sintaxe clara e portabilidade."
    },
    {
      text: "O YASM é um reescrita do NASM com suporte a múltiplas arquiteturas.",
      answer: true,
      comment: "Certo. YASM mantém compatibilidade com NASM e adiciona recursos."
    },
    {
      text: "O ld (GNU Linker) é o ligador padrão do GCC.",
      answer: true,
      comment: "Certo. ld combina arquivos objeto e resolve símbolos."
    },
    {
      text: "O gold é um ligador mais rápido que o ld para ELF.",
      answer: true,
      comment: "Certo. gold foi projetado para ser mais rápido que ld."
    },
    {
      text: "O lld é o ligador do projeto LLVM.",
      answer: true,
      comment: "Certo. lld é mais rápido e tem melhor suporte a formatos modernos."
    },
    {
      text: "Bibliotecas estáticas são incorporadas ao executável durante a ligação.",
      answer: true,
      comment: "Certo. Bibliotecas estáticas tornam o executável independente."
    },
    {
      text: "Bibliotecas dinâmicas são carregadas em tempo de execução.",
      answer: true,
      comment: "Certo. Bibliotecas dinâmicas economizam memória e permitem atualizações."
    },
    {
      text: "O processo de ligação resolve símbolos não definidos entre arquivos objeto.",
      answer: true,
      comment: "Certo. Ligação conecta referências a definições."
    },
    {
      text: "Relocação ajusta endereços no código para posições finais na memória.",
      answer: true,
      comment: "Certo. Relocação permite que código seja carregado em diferentes posições."
    },
    {
      text: "Símbolos são nomes de funções e variáveis que podem ser referenciados.",
      answer: true,
      comment: "Certo. Símbolos permitem referência entre diferentes partes do código."
    },
    {
      text: "Seções de código (.text) contêm instruções executáveis.",
      answer: true,
      comment: "Certo. Seção .text armazena código de máquina."
    },
    {
      text: "Seções de dados (.data) contêm variáveis inicializadas.",
      answer: true,
      comment: "Certo. Seção .data armazena dados com valores iniciais."
    },
    {
      text: "Seções BSS (.bss) contêm variáveis não inicializadas.",
      answer: true,
      comment: "Certo. Seção .bss armazena dados zerados para economizar espaço."
    },
    {
      text: "Interpretadores Python executam código Python linha por linha.",
      answer: true,
      comment: "Certo. Python usa interpretação para execução flexível."
    },
    {
      text: "Interpretadores JavaScript executam código JavaScript em navegadores.",
      answer: true,
      comment: "Certo. JavaScript é interpretado para execução dinâmica."
    },
    {
      text: "Interpretadores Ruby executam código Ruby com garbage collection automática.",
      answer: true,
      comment: "Certo. Ruby combina interpretação com recursos de alto nível."
    },
    {
      text: "Interpretadores PHP executam código PHP no servidor web.",
      answer: true,
      comment: "Certo. PHP é interpretado para desenvolvimento web dinâmico."
    },
    {
      text: "Interpretadores Perl executam código Perl com forte suporte a texto.",
      answer: true,
      comment: "Certo. Perl é conhecido por suas capacidades de processamento de texto."
    },
    {
      text: "Interpretadores Lua executam código Lua com foco em embutimento.",
      answer: true,
      comment: "Certo. Lua é projetado para ser embutido em aplicações."
    },
    {
      text: "Interpretadores Tcl executam código Tcl com interface gráfica integrada.",
      answer: true,
      comment: "Certo. Tcl combina interpretação com toolkit gráfico."
    },
    {
      text: "Interpretadores Scheme executam código Scheme com avaliação lazy.",
      answer: true,
      comment: "Certo. Scheme implementa programação funcional com interpretação."
    },
    {
      text: "Interpretadores Prolog executam código Prolog com backtracking automático.",
      answer: true,
      comment: "Certo. Prolog usa interpretação para programação lógica."
    },
    {
      text: "Interpretadores BASIC executam código BASIC com sintaxe simples.",
      answer: true,
      comment: "Certo. BASIC foi projetado para ser fácil de aprender e usar."
    },
    {
      text: "Interpretadores R executam código R para análise estatística.",
      answer: true,
      comment: "Certo. R é interpretado para computação estatística e gráficos."
    },
    {
      text: "Interpretadores MATLAB executam código MATLAB para computação numérica.",
      answer: true,
      comment: "Certo. MATLAB é interpretado para análise matemática."
    },
    {
      text: "Interpretadores Julia executam código Julia com compilação JIT.",
      answer: true,
      comment: "Certo. Julia combina interpretação com performance próxima a C."
    },
    {
      text: "Interpretadores Kotlin executam código Kotlin na JVM.",
      answer: true,
      comment: "Certo. Kotlin é compilado para bytecode JVM mas mantém flexibilidade."
    },
    {
      text: "Interpretadores Scala executam código Scala com programação funcional.",
      answer: true,
      comment: "Certo. Scala combina OOP e programação funcional na JVM."
    },
    {
      text: "Interpretadores Groovy executam código Groovy com sintaxe dinâmica.",
      answer: true,
      comment: "Certo. Groovy é uma linguagem dinâmica para a JVM."
    },
    {
      text: "Interpretadores Clojure executam código Clojure com imutabilidade.",
      answer: true,
      comment: "Certo. Clojure é um dialeto Lisp para a JVM."
    },
    {
      text: "Interpretadores Erlang executam código Erlang com concorrência nativa.",
      answer: true,
      comment: "Certo. Erlang é projetado para sistemas distribuídos e tolerantes a falhas."
    },
    {
      text: "Interpretadores Elixir executam código Elixir na BEAM VM.",
      answer: true,
      comment: "Certo. Elixir herda características do Erlang com sintaxe moderna."
    },
    {
      text: "Interpretadores Haskell executam código Haskell com lazy evaluation.",
      answer: true,
      comment: "Certo. Haskell é uma linguagem funcional pura com interpretação."
    },
    {
      text: "Interpretadores OCaml executam código OCaml com type inference.",
      answer: true,
      comment: "Certo. OCaml combina programação funcional com performance."
    },
    {
      text: "Interpretadores F# executam código F# na .NET.",
      answer: true,
      comment: "Certo. F# é uma linguagem funcional para a plataforma .NET."
    },
    {
      text: "Interpretadores Go executam código Go com garbage collection automática.",
      answer: true,
      comment: "Certo. Go é compilado mas tem runtime com garbage collection."
    },
    {
      text: "Interpretadores Rust executam código Rust com memory safety.",
      answer: true,
      comment: "Certo. Rust é compilado mas oferece segurança de memória sem garbage collection."
    },
    {
      text: "Interpretadores Swift executam código Swift na Apple ecosystem.",
      answer: true,
      comment: "Certo. Swift é compilado mas tem runtime dinâmico."
    },
    {
      text: "Interpretadores Dart executam código Dart na Dart VM.",
      answer: true,
      comment: "Certo. Dart pode ser interpretado ou compilado para diferentes alvos."
    },
    {
      text: "Interpretadores TypeScript executam código TypeScript após transpilação.",
      answer: true,
      comment: "Certo. TypeScript é transpilado para JavaScript antes da execução."
    },
    {
      text: "Interpretadores CoffeeScript executam código CoffeeScript após transpilação.",
      answer: true,
      comment: "Certo. CoffeeScript é transpilado para JavaScript."
    },
    {
      text: "Interpretadores Babel executam código JavaScript moderno após transpilação.",
      answer: true,
      comment: "Certo. Babel transpila JavaScript moderno para versões compatíveis."
    }
  ],
  linguagens: [
    {
      text: "A linguagem C é uma linguagem de programação procedural de baixo nível desenvolvida por Dennis Ritchie.",
      answer: true,
      comment: "Certo. C foi criada na Bell Labs para desenvolvimento do sistema Unix."
    },
    {
      text: "C permite controle direto sobre a memória através de ponteiros.",
      answer: true,
      comment: "Certo. Ponteiros são fundamentais em C para manipulação de memória."
    },
    {
      text: "C não possui garbage collection automático, exigindo gerenciamento manual de memória.",
      answer: true,
      comment: "Certo. Programadores C devem alocar e liberar memória manualmente."
    },
    {
      text: "C é uma linguagem compilada que gera código de máquina nativo.",
      answer: true,
      comment: "Certo. Compiladores C geram executáveis otimizados para a arquitetura alvo."
    },
    {
      text: "C suporta programação estruturada com funções e estruturas de controle.",
      answer: true,
      comment: "Certo. C implementa paradigmas de programação estruturada."
    },
    {
      text: "C permite acesso direto ao hardware através de operações de baixo nível.",
      answer: true,
      comment: "Certo. C é usada em sistemas embarcados e drivers de dispositivo."
    },
    {
      text: "C possui tipagem estática que verifica tipos em tempo de compilação.",
      answer: true,
      comment: "Certo. Tipagem estática previne erros de tipo em tempo de execução."
    },
    {
      text: "C suporta programação modular através de arquivos de cabeçalho (.h).",
      answer: true,
      comment: "Certo. Headers permitem declaração de interfaces entre módulos."
    },
    {
      text: "C permite sobrecarga de operadores através de macros e funções.",
      answer: true,
      comment: "Certo. Macros e funções permitem comportamento customizado de operadores."
    },
    {
      text: "C é amplamente usada em desenvolvimento de sistemas operacionais.",
      answer: true,
      comment: "Certo. Unix, Linux, Windows e outros sistemas são escritos em C."
    },
    {
      text: "Java é uma linguagem orientada a objetos desenvolvida pela Sun Microsystems.",
      answer: true,
      comment: "Certo. Java foi criada por James Gosling e sua equipe."
    },
    {
      text: "Java possui garbage collection automático que gerencia memória automaticamente.",
      answer: true,
      comment: "Certo. Garbage collection previne vazamentos de memória em Java."
    },
    {
      text: "Java é compilada para bytecode que é executado pela JVM (Java Virtual Machine).",
      answer: true,
      comment: "Certo. Bytecode permite portabilidade entre diferentes plataformas."
    },
    {
      text: "Java possui tipagem estática forte que verifica tipos em tempo de compilação.",
      answer: true,
      comment: "Certo. Tipagem forte previne conversões implícitas perigosas."
    },
    {
      text: "Java suporta herança única de classes mas múltipla implementação de interfaces.",
      answer: true,
      comment: "Certo. Java evita problemas da herança múltipla através de interfaces."
    },
    {
      text: "Java possui modificadores de acesso: public, private, protected e default.",
      answer: true,
      comment: "Certo. Modificadores controlam visibilidade de membros de classe."
    },
    {
      text: "Java suporta programação funcional através de lambdas e streams.",
      answer: true,
      comment: "Certo. Java 8 introduziu recursos de programação funcional."
    },
    {
      text: "Java possui tratamento de exceções com try-catch-finally.",
      answer: true,
      comment: "Certo. Exceções permitem tratamento estruturado de erros."
    },
    {
      text: "Java suporta multithreading nativo através da classe Thread.",
      answer: true,
      comment: "Certo. Threads permitem execução concorrente em Java."
    },
    {
      text: "Java possui reflection que permite examinar e modificar estrutura em tempo de execução.",
      answer: true,
      comment: "Certo. Reflection é fundamental para frameworks e ferramentas."
    },
    {
      text: "JavaScript é uma linguagem de programação interpretada originalmente desenvolvida para navegadores.",
      answer: true,
      comment: "Certo. JavaScript foi criada por Brendan Eich na Netscape."
    },
    {
      text: "JavaScript possui tipagem dinâmica que permite mudança de tipo em tempo de execução.",
      answer: true,
      comment: "Certo. Variáveis JavaScript podem mudar de tipo dinamicamente."
    },
    {
      text: "JavaScript suporta programação orientada a objetos baseada em protótipos.",
      answer: true,
      comment: "Certo. Protótipos são o mecanismo de herança em JavaScript."
    },
    {
      text: "JavaScript possui closures que capturam variáveis do escopo externo.",
      answer: true,
      comment: "Certo. Closures permitem encapsulamento e data hiding."
    },
    {
      text: "JavaScript suporta programação funcional com funções de primeira classe.",
      answer: true,
      comment: "Certo. Funções podem ser passadas como argumentos e retornadas."
    },
    {
      text: "JavaScript possui hoisting que move declarações para o topo do escopo.",
      answer: true,
      comment: "Certo. Hoisting permite usar variáveis antes de declará-las."
    },
    {
      text: "JavaScript possui event loop que gerencia execução assíncrona.",
      answer: true,
      comment: "Certo. Event loop permite não-bloqueio em operações assíncronas."
    },
    {
      text: "JavaScript suporta callbacks, promises e async/await para programação assíncrona.",
      answer: true,
      comment: "Certo. Múltiplas formas de lidar com operações assíncronas."
    },
    {
      text: "JavaScript possui DOM (Document Object Model) para manipulação de páginas web.",
      answer: true,
      comment: "Certo. DOM permite interação dinâmica com elementos HTML."
    },
    {
      text: "JavaScript possui JSON (JavaScript Object Notation) para serialização de dados.",
      answer: true,
      comment: "Certo. JSON é formato padrão para troca de dados em JavaScript."
    },
    {
      text: "Python é uma linguagem de programação interpretada criada por Guido van Rossum.",
      answer: true,
      comment: "Certo. Python foi projetada para ser legível e fácil de aprender."
    },
    {
      text: "Python possui tipagem dinâmica que infere tipos automaticamente.",
      answer: true,
      comment: "Certo. Tipagem dinâmica simplifica desenvolvimento em Python."
    },
    {
      text: "Python suporta programação orientada a objetos com herança múltipla.",
      answer: true,
      comment: "Certo. Python permite herdar de múltiplas classes."
    },
    {
      text: "Python possui garbage collection automático que gerencia memória.",
      answer: true,
      comment: "Certo. Garbage collection previne vazamentos de memória."
    },
    {
      text: "Python possui indentação obrigatória que define blocos de código.",
      answer: true,
      comment: "Certo. Indentação força estilo de código consistente."
    },
    {
      text: "Python suporta programação funcional com funções de ordem superior.",
      answer: true,
      comment: "Certo. Funções como map, filter, reduce são nativas em Python."
    },
    {
      text: "Python possui list comprehensions para criação concisa de listas.",
      answer: true,
      comment: "Certo. List comprehensions são mais legíveis que loops tradicionais."
    },
    {
      text: "Python possui decorators que modificam comportamento de funções.",
      answer: true,
      comment: "Certo. Decorators implementam padrão decorator de forma elegante."
    },
    {
      text: "Python possui generators que produzem valores sob demanda.",
      answer: true,
      comment: "Certo. Generators implementam lazy evaluation e economizam memória."
    },
    {
      text: "Python possui context managers com with para gerenciamento de recursos.",
      answer: true,
      comment: "Certo. Context managers garantem limpeza automática de recursos."
    },
    {
      text: "Python possui metaprogramming através de metaclasses e decorators.",
      answer: true,
      comment: "Certo. Metaprogramming permite criar código que gera código."
    },
    {
      text: "C permite alocação dinâmica de memória com malloc() e free().",
      answer: true,
      comment: "Certo. malloc() aloca memória e free() libera memória alocada."
    },
    {
      text: "C suporta estruturas (structs) para agrupar dados relacionados.",
      answer: true,
      comment: "Certo. Structs permitem criar tipos de dados compostos."
    },
    {
      text: "C permite união (union) onde diferentes tipos de dados ocupam o mesmo espaço de memória.",
      answer: true,
      comment: "Certo. Unions economizam memória permitindo interpretação múltipla."
    },
    {
      text: "C possui preprocessador que processa diretivas como #include e #define.",
      answer: true,
      comment: "Certo. Preprocessador é executado antes da compilação."
    },
    {
      text: "Java possui autoboxing que converte automaticamente tipos primitivos para wrappers.",
      answer: true,
      comment: "Certo. Autoboxing simplifica uso de tipos primitivos em coleções."
    },
    {
      text: "Java possui generics que fornecem type safety para coleções.",
      answer: true,
      comment: "Certo. Generics previnem erros de tipo em tempo de compilação."
    },
    {
      text: "Java possui annotations que adicionam metadados ao código.",
      answer: true,
      comment: "Certo. Annotations são processadas por frameworks e ferramentas."
    },
    {
      text: "Java possui enums que representam conjuntos fixos de valores.",
      answer: true,
      comment: "Certo. Enums fornecem type safety para constantes nomeadas."
    },
    {
      text: "JavaScript possui var, let e const para declaração de variáveis.",
      answer: true,
      comment: "Certo. let e const introduzem block scoping em JavaScript."
    },
    {
      text: "JavaScript possui arrow functions para sintaxe concisa de funções.",
      answer: true,
      comment: "Certo. Arrow functions são úteis para callbacks e expressões."
    },
    {
      text: "JavaScript possui destructuring para extrair valores de objetos e arrays.",
      answer: true,
      comment: "Certo. Destructuring simplifica acesso a propriedades e elementos."
    },
    {
      text: "JavaScript possui template literals para interpolação de strings.",
      answer: true,
      comment: "Certo. Template literals permitem strings multilinhas e expressões."
    },
    {
      text: "Python possui duck typing onde tipo é determinado pelo comportamento.",
      answer: true,
      comment: "Certo. Duck typing permite flexibilidade e polimorfismo."
    },
    {
      text: "Python possui magic methods (dunder methods) para operadores customizados.",
      answer: true,
      comment: "Certo. Magic methods permitem customizar comportamento de operadores."
    },
    {
      text: "Python possui properties para controle de acesso a atributos.",
      answer: true,
      comment: "Certo. Properties permitem getters e setters transparentes."
    },
    {
      text: "Python possui slots para otimização de memória em classes.",
      answer: true,
      comment: "Certo. Slots reduzem overhead de memória em objetos Python."
    },
    {
      text: "C é usada em desenvolvimento de drivers, sistemas embarcados e kernels.",
      answer: true,
      comment: "Certo. C é ideal para sistemas que requerem controle direto de hardware."
    },
    {
      text: "Java é usada em desenvolvimento empresarial, Android e aplicações web.",
      answer: true,
      comment: "Certo. Java é popular em ambientes corporativos e mobile."
    },
    {
      text: "JavaScript é usada em desenvolvimento web frontend, backend (Node.js) e mobile.",
      answer: true,
      comment: "Certo. JavaScript é onipresente em desenvolvimento web moderno."
    },
    {
      text: "Python é usada em data science, machine learning, web development e automação.",
      answer: true,
      comment: "Certo. Python é versátil e popular em múltiplos domínios."
    }
  ],
  webDev: [
    {
      text: "HTML (HyperText Markup Language) é a linguagem padrão para criação de páginas web.",
      answer: true,
      comment: "Certo. HTML define a estrutura e conteúdo de páginas web."
    },
    {
      text: "HTML5 é a versão mais recente do HTML com novos elementos semânticos.",
      answer: true,
      comment: "Certo. HTML5 introduziu elementos como header, nav, section, article, footer."
    },
    {
      text: "Tags HTML são elementos que definem a estrutura e apresentação do conteúdo.",
      answer: true,
      comment: "Certo. Tags são os blocos fundamentais de construção do HTML."
    },
    {
      text: "Elementos HTML podem ter atributos que fornecem informações adicionais.",
      answer: true,
      comment: "Certo. Atributos modificam comportamento e aparência dos elementos."
    },
    {
      text: "HTML semântico usa elementos que descrevem o significado do conteúdo.",
      answer: true,
      comment: "Certo. HTML semântico melhora acessibilidade e SEO."
    },
    {
      text: "Formulários HTML permitem coleta de dados do usuário através de campos de entrada.",
      answer: true,
      comment: "Certo. Formulários são essenciais para interação com usuários."
    },
    {
      text: "HTML5 introduziu novos tipos de input como email, date, number e range.",
      answer: true,
      comment: "Certo. Novos tipos melhoram experiência do usuário e validação."
    },
    {
      text: "Canvas HTML5 permite desenho e animação gráfica programática.",
      answer: true,
      comment: "Certo. Canvas é usado para gráficos, jogos e visualizações."
    },
    {
      text: "SVG (Scalable Vector Graphics) permite gráficos vetoriais escaláveis em HTML.",
      answer: true,
      comment: "Certo. SVG mantém qualidade em qualquer tamanho."
    },
    {
      text: "Web Storage (localStorage e sessionStorage) permite armazenamento local de dados.",
      answer: true,
      comment: "Certo. Web Storage substitui cookies para dados simples."
    },
    {
      text: "XML (eXtensible Markup Language) é uma linguagem de marcação extensível.",
      answer: true,
      comment: "Certo. XML permite criar linguagens de marcação customizadas."
    },
    {
      text: "XML é usado para troca de dados entre sistemas diferentes.",
      answer: true,
      comment: "Certo. XML é independente de plataforma e legível por humanos."
    },
    {
      text: "XML possui estrutura hierárquica com elementos aninhados.",
      answer: true,
      comment: "Certo. Estrutura hierárquica permite representar dados complexos."
    },
    {
      text: "DTD (Document Type Definition) define a estrutura válida de documentos XML.",
      answer: true,
      comment: "Certo. DTD especifica elementos, atributos e relacionamentos permitidos."
    },
    {
      text: "XSD (XML Schema Definition) é uma alternativa mais poderosa ao DTD.",
      answer: true,
      comment: "Certo. XSD oferece tipagem forte e validação mais robusta."
    },
    {
      text: "XPath permite navegar e consultar documentos XML.",
      answer: true,
      comment: "Certo. XPath é usado para localizar elementos específicos em XML."
    },
    {
      text: "XSLT (eXtensible Stylesheet Language Transformations) transforma documentos XML.",
      answer: true,
      comment: "Certo. XSLT converte XML em outros formatos como HTML ou PDF."
    },
    {
      text: "RSS (Really Simple Syndication) é um formato XML para feeds de conteúdo.",
      answer: true,
      comment: "Certo. RSS permite distribuição de conteúdo atualizado automaticamente."
    },
    {
      text: "SOAP (Simple Object Access Protocol) usa XML para comunicação entre serviços.",
      answer: true,
      comment: "Certo. SOAP é um protocolo para troca de mensagens estruturadas."
    },
    {
      text: "JSON (JavaScript Object Notation) é um formato de troca de dados leve.",
      answer: true,
      comment: "Certo. JSON é baseado em JavaScript mas independente de linguagem."
    },
    {
      text: "JSON suporta tipos de dados: strings, numbers, booleans, null, arrays e objects.",
      answer: true,
      comment: "Certo. JSON tem estrutura de dados simples e universal."
    },
    {
      text: "JSON é mais compacto que XML e mais fácil de processar.",
      answer: true,
      comment: "Certo. JSON tem menos overhead e parsing mais simples."
    },
    {
      text: "JSON Schema define a estrutura e validação de documentos JSON.",
      answer: true,
      comment: "Certo. JSON Schema garante consistência e validação de dados."
    },
    {
      text: "JSON-LD (JSON for Linked Data) adiciona contexto semântico ao JSON.",
      answer: true,
      comment: "Certo. JSON-LD permite dados estruturados para SEO."
    },
    {
      text: "API (Application Programming Interface) define como aplicações se comunicam.",
      answer: true,
      comment: "Certo. APIs permitem integração entre sistemas diferentes."
    },
    {
      text: "REST (Representational State Transfer) é um estilo arquitetural para APIs web.",
      answer: true,
      comment: "Certo. REST usa HTTP para comunicação stateless entre cliente e servidor."
    },
    {
      text: "APIs REST usam métodos HTTP: GET, POST, PUT, DELETE, PATCH.",
      answer: true,
      comment: "Certo. Métodos HTTP mapeiam operações CRUD em recursos."
    },
    {
      text: "Recursos REST são identificados por URIs únicas.",
      answer: true,
      comment: "Certo. URIs fornecem identificação única para recursos."
    },
    {
      text: "REST é stateless, não mantendo estado entre requisições.",
      answer: true,
      comment: "Certo. Cada requisição REST contém toda informação necessária."
    },
    {
      text: "Códigos de status HTTP comunicam resultado de operações REST.",
      answer: true,
      comment: "Certo. Códigos como 200, 201, 400, 404, 500 indicam sucesso ou erro."
    },
    {
      text: "HATEOAS (Hypermedia as the Engine of Application State) é um princípio REST.",
      answer: true,
      comment: "Certo. HATEOAS fornece links para navegação entre recursos."
    },
    {
      text: "JWT (JSON Web Tokens) são usados para autenticação em APIs REST.",
      answer: true,
      comment: "Certo. JWT permite autenticação stateless e segura."
    },
    {
      text: "OAuth 2.0 é um protocolo de autorização para APIs REST.",
      answer: true,
      comment: "Certo. OAuth 2.0 permite acesso delegado a recursos."
    },
    {
      text: "Rate limiting controla número de requisições por cliente em APIs REST.",
      answer: true,
      comment: "Certo. Rate limiting previne abuso e garante performance."
    },
    {
      text: "Versionamento de APIs REST pode ser feito via URL, headers ou content negotiation.",
      answer: true,
      comment: "Certo. Versionamento permite evolução de APIs sem quebrar clientes."
    },
    {
      text: "GraphQL é uma linguagem de consulta e runtime para APIs.",
      answer: true,
      comment: "Certo. GraphQL foi desenvolvido pelo Facebook para APIs flexíveis."
    },
    {
      text: "GraphQL permite que clientes especifiquem exatamente quais dados precisam.",
      answer: true,
      comment: "Certo. GraphQL evita over-fetching e under-fetching de dados."
    },
    {
      text: "Schema GraphQL define tipos, campos e operações disponíveis.",
      answer: true,
      comment: "Certo. Schema é a base contratual entre cliente e servidor GraphQL."
    },
    {
      text: "GraphQL suporta três tipos de operações: queries, mutations e subscriptions.",
      answer: true,
      comment: "Certo. Queries leem dados, mutations modificam, subscriptions recebem atualizações."
    },
    {
      text: "Resolvers GraphQL implementam lógica para buscar dados de cada campo.",
      answer: true,
      comment: "Certo. Resolvers conectam schema GraphQL com fontes de dados."
    },
    {
      text: "GraphQL permite consultas aninhadas em uma única requisição.",
      answer: true,
      comment: "Certo. Consultas aninhadas reduzem número de requisições necessárias."
    },
    {
      text: "Fragmentos GraphQL permitem reutilização de seleções de campos.",
      answer: true,
      comment: "Certo. Fragmentos evitam repetição de código em consultas."
    },
    {
      text: "Variables GraphQL permitem parametrização de consultas.",
      answer: true,
      comment: "Certo. Variables tornam consultas dinâmicas e reutilizáveis."
    },
    {
      text: "Introspection GraphQL permite consultar o schema disponível.",
      answer: true,
      comment: "Certo. Introspection facilita desenvolvimento de ferramentas e documentação."
    },
    {
      text: "GraphQL pode usar HTTP POST para todas as operações.",
      answer: true,
      comment: "Certo. GraphQL não depende de métodos HTTP específicos."
    },
    {
      text: "Apollo Client é uma biblioteca popular para consumir APIs GraphQL.",
      answer: true,
      comment: "Certo. Apollo Client oferece cache, gerenciamento de estado e ferramentas."
    },
    {
      text: "Relay é uma biblioteca GraphQL desenvolvida pelo Facebook.",
      answer: true,
      comment: "Certo. Relay é otimizada para aplicações React complexas."
    },
    {
      text: "GraphQL Playground é uma ferramenta para testar APIs GraphQL.",
      answer: true,
      comment: "Certo. Playground oferece interface interativa para desenvolvimento."
    },
    {
      text: "GraphQL pode ser implementado em qualquer linguagem de programação.",
      answer: true,
      comment: "Certo. GraphQL é independente de linguagem e plataforma."
    },
    {
      text: "REST é mais maduro e tem mais ferramentas disponíveis que GraphQL.",
      answer: true,
      comment: "Certo. REST tem ecossistema mais estabelecido e documentado."
    },
    {
      text: "GraphQL oferece melhor performance para consultas complexas que REST.",
      answer: true,
      comment: "Certo. GraphQL evita múltiplas requisições e over-fetching."
    },
    {
      text: "REST é mais simples de implementar e entender que GraphQL.",
      answer: true,
      comment: "Certo. REST usa conceitos HTTP familiares e tem curva de aprendizado menor."
    },
    {
      text: "GraphQL oferece tipagem forte e validação automática de consultas.",
      answer: true,
      comment: "Certo. Schema GraphQL garante que consultas sejam válidas em tempo de compilação."
    },
    {
      text: "REST é mais adequado para APIs públicas e documentação automática.",
      answer: true,
      comment: "Certo. REST tem ferramentas maduras para documentação como Swagger/OpenAPI."
    },
    {
      text: "GraphQL é mais adequado para aplicações móveis com conexões lentas.",
      answer: true,
      comment: "Certo. GraphQL permite otimizar transferência de dados para diferentes contextos."
    },
    {
      text: "REST segue princípios de cache HTTP nativos.",
      answer: true,
      comment: "Certo. REST pode aproveitar caches HTTP existentes e CDNs."
    },
    {
      text: "GraphQL requer implementação customizada de cache.",
      answer: true,
      comment: "Certo. GraphQL precisa de estratégias de cache específicas devido à flexibilidade."
    },
    {
      text: "REST é mais adequado para microserviços com responsabilidades bem definidas.",
      answer: true,
      comment: "Certo. REST se alinha bem com princípios de microserviços."
    },
    {
      text: "GraphQL pode ser usado como gateway para múltiplos microserviços.",
      answer: true,
      comment: "Certo. GraphQL pode agregar dados de múltiplos serviços backend."
    }
  ],
  sonarqube: [
    {
      text: "O SonarQube é uma ferramenta de análise estática de código fonte que identifica bugs, vulnerabilidades e code smells.",
      answer: true,
      comment: "Certo. O SonarQube realiza análise estática para detectar problemas de qualidade e segurança no código."
    },
    {
      text: "O SonarQube pode ser integrado a pipelines de CI/CD para análise automática do código.",
      answer: true,
      comment: "Certo. A integração com CI/CD permite análise contínua e feedback rápido."
    },
    {
      text: "O SonarQube suporta apenas projetos escritos em Java.",
      answer: false,
      comment: "Errado. O SonarQube suporta diversas linguagens, como Java, C#, JavaScript, Python, entre outras."
    },
    {
      text: "A análise estática realizada pelo SonarQube não executa o código analisado.",
      answer: true,
      comment: "Certo. A análise estática examina o código-fonte sem executá-lo."
    },
    {
      text: "O SonarQube pode identificar vulnerabilidades de segurança conhecidas em bibliotecas externas automaticamente.",
      answer: true,
      comment: "Certo. O SonarQube possui recursos para análise de dependências e detecção de vulnerabilidades conhecidas."
    },
    {
      text: "O conceito de 'code smell' refere-se a problemas de design ou implementação que podem indicar falhas futuras.",
      answer: true,
      comment: "Certo. 'Code smells' são indícios de problemas que podem comprometer a manutenção do código."
    },
    {
      text: "O SonarQube pode ser utilizado para medir a cobertura de testes automatizados.",
      answer: true,
      comment: "Certo. O SonarQube integra-se a ferramentas de cobertura de testes para exibir métricas."
    },
    {
      text: "A métrica 'Technical Debt' no SonarQube representa o tempo estimado para corrigir todos os problemas detectados.",
      answer: true,
      comment: "Certo. 'Technical Debt' estima o esforço necessário para eliminar problemas de qualidade."
    },
    {
      text: "O SonarQube não permite a customização de regras de análise.",
      answer: false,
      comment: "Errado. É possível customizar e criar regras específicas conforme a necessidade do projeto."
    },
    {
      text: "O SonarQube pode ser executado localmente ou em servidores remotos.",
      answer: true,
      comment: "Certo. O SonarQube pode rodar em diferentes ambientes, inclusive em nuvem."
    },
    {
      text: "A análise do SonarQube pode ser acionada manualmente ou automaticamente por hooks de repositório.",
      answer: true,
      comment: "Certo. É possível configurar execuções manuais ou automáticas via integração com VCS."
    },
    {
      text: "O SonarQube fornece relatórios detalhados sobre duplicação de código.",
      answer: true,
      comment: "Certo. A ferramenta identifica e reporta trechos duplicados no código."
    },
    {
      text: "O SonarQube não detecta problemas de complexidade ciclomática.",
      answer: false,
      comment: "Errado. O SonarQube mede e reporta a complexidade ciclomática dos métodos."
    },
    {
      text: "A interface do SonarQube permite navegação por arquivos, classes e métodos analisados.",
      answer: true,
      comment: "Certo. A interface facilita a visualização dos problemas por estrutura do projeto."
    },
    {
      text: "O SonarQube pode ser utilizado em projetos open source e proprietários.",
      answer: true,
      comment: "Certo. A ferramenta é amplamente utilizada em ambos os contextos."
    },
    {
      text: "O SonarQube exige obrigatoriamente licença paga para qualquer uso.",
      answer: false,
      comment: "Errado. Existe uma edição Community gratuita, além de versões pagas com mais recursos."
    },
    {
      text: "O SonarQube pode ser integrado a IDEs para análise local do código.",
      answer: true,
      comment: "Certo. Plugins para IDEs permitem análise rápida durante o desenvolvimento."
    },
    {
      text: "A análise de segurança do SonarQube cobre apenas vulnerabilidades OWASP Top 10.",
      answer: false,
      comment: "Errado. O SonarQube cobre OWASP Top 10 e outras vulnerabilidades conhecidas."
    },
    {
      text: "O SonarQube pode ser configurado para bloquear merges em pull requests com falhas críticas.",
      answer: true,
      comment: "Certo. É possível integrar o SonarQube ao fluxo de pull requests para garantir qualidade."
    },
    {
      text: "O SonarQube não suporta análise incremental de código.",
      answer: false,
      comment: "Errado. O SonarQube pode analisar apenas as alterações recentes, otimizando o processo."
    },
    {
      text: "A análise do SonarQube pode ser personalizada por linguagem de programação.",
      answer: true,
      comment: "Certo. Cada linguagem pode ter regras e perfis de qualidade distintos."
    },
    {
      text: "O SonarQube não gera alertas para problemas de documentação no código.",
      answer: false,
      comment: "Errado. O SonarQube pode alertar sobre ausência ou problemas em comentários e documentação."
    },
    {
      text: "O SonarQube pode ser integrado a sistemas de notificação, como e-mail e Slack.",
      answer: true,
      comment: "Certo. Integrações permitem alertas automáticos sobre falhas detectadas."
    },
    {
      text: "A análise do SonarQube pode ser agendada para horários específicos.",
      answer: true,
      comment: "Certo. É possível configurar execuções periódicas conforme a necessidade."
    },
    {
      text: "O SonarQube não oferece gráficos de evolução da qualidade do código ao longo do tempo.",
      answer: false,
      comment: "Errado. A ferramenta apresenta dashboards e gráficos de evolução."
    },
    {
      text: "O SonarQube pode ser utilizado para monitorar a aderência a padrões de codificação.",
      answer: true,
      comment: "Certo. O SonarQube verifica se o código segue padrões definidos."
    },
    {
      text: "A análise do SonarQube pode ser executada em diferentes etapas do ciclo de vida do software.",
      answer: true,
      comment: "Certo. Pode ser usada desde o desenvolvimento até a produção."
    },
    {
      text: "O SonarQube não permite exportar relatórios de análise.",
      answer: false,
      comment: "Errado. É possível exportar relatórios em diversos formatos."
    },
    {
      text: "O SonarQube pode ser utilizado para identificar hotspots de manutenção no código.",
      answer: true,
      comment: "Certo. Hotspots são áreas do código com alta frequência de mudanças e problemas."
    },
    {
      text: "O SonarQube pode ser integrado a sistemas de controle de versão como Git.",
      answer: true,
      comment: "Certo. A integração com VCS permite análise automática em push e pull requests."
    },
    {
      text: "O SonarQube pode ser utilizado para análise de infraestrutura como código (IaC).",
      answer: true,
      comment: "Certo. O SonarQube possui regras para arquivos de infraestrutura como código, como YAML e Terraform."
    }
  ],
  "estruturas-dados": [
    {
      text: "Uma lista encadeada circular permite que o último nó aponte para o primeiro nó, criando um ciclo.",
      answer: true,
      comment: "Certo. Listas circulares conectam o último elemento ao primeiro, permitindo navegação contínua."
    },
    {
      text: "A complexidade temporal de inserção no início de uma lista duplamente encadeada é O(1), independentemente do tamanho.",
      answer: true,
      comment: "Certo. Listas duplamente encadeadas permitem acesso direto ao início e fim em tempo constante."
    },
    {
      text: "Uma fila implementada com array circular pode ter complexidade O(1) para operações de enqueue e dequeue.",
      answer: true,
      comment: "Certo. Arrays circulares evitam deslocamento de elementos, mantendo operações em tempo constante."
    },
    {
      text: "A altura de uma árvore binária de busca balanceada é sempre log₂(n), onde n é o número de nós.",
      answer: false,
      comment: "Errado. A altura é O(log n), mas pode variar dependendo do balanceamento específico da árvore."
    },
    {
      text: "Uma pilha implementada com lista encadeada tem complexidade O(n) para operações push e pop.",
      answer: false,
      comment: "Errado. Pilhas com listas encadeadas têm complexidade O(1) para push e pop no topo."
    },
    {
      text: "A travessia in-order de uma árvore binária de busca sempre produz os elementos em ordem crescente.",
      answer: true,
      comment: "Certo. In-order visita esquerda, raiz, direita, resultando em ordem crescente em BSTs."
    },
    {
      text: "Uma lista encadeada simples não pode ser implementada de forma recursiva.",
      answer: false,
      comment: "Errado. Listas encadeadas podem ser implementadas recursivamente, usando referências para o próximo nó."
    },
    {
      text: "A complexidade espacial de uma árvore binária completa com n nós é O(n).",
      answer: true,
      comment: "Certo. Cada nó ocupa espaço constante, resultando em complexidade linear total."
    },
    {
      text: "Uma fila de prioridade implementada com heap binário tem complexidade O(log n) para inserção e remoção.",
      answer: true,
      comment: "Certo. Heaps mantêm a propriedade heap através de operações de bubble-up e bubble-down."
    },
    {
      text: "A rotação em árvores AVL é uma operação que pode ser realizada em tempo O(1).",
      answer: true,
      comment: "Certo. Rotações envolvem apenas reconfiguração de ponteiros, sem percorrer toda a árvore."
    },
    {
      text: "Uma lista encadeada com cabeçalho (sentinel node) simplifica operações de inserção e remoção.",
      answer: true,
      comment: "Certo. Nós sentinelas eliminam casos especiais para operações no início da lista."
    },
    {
      text: "A complexidade de busca em uma árvore binária de busca degenerada é O(log n).",
      answer: false,
      comment: "Errado. Árvores degeneradas formam listas encadeadas, resultando em complexidade O(n)."
    },
    {
      text: "Uma pilha pode ser implementada usando duas filas, mantendo complexidade O(1) para operações principais.",
      answer: false,
      comment: "Errado. Implementação com duas filas requer O(n) para pop, pois todos os elementos exceto um devem ser movidos."
    },
    {
      text: "A altura de uma árvore vermelho-preto é sempre menor ou igual a 2*log₂(n+1).",
      answer: true,
      comment: "Certo. Árvores vermelho-preto garantem altura máxima de 2*log₂(n+1) através de suas propriedades."
    },
    {
      text: "Uma lista encadeada ordenada permite busca binária com complexidade O(log n).",
      answer: false,
      comment: "Errado. Listas encadeadas não permitem acesso aleatório, impossibilitando busca binária."
    },
    {
      text: "A complexidade de inserção em uma árvore B+ é O(log n) no pior caso.",
      answer: true,
      comment: "Certo. Árvores B+ mantêm balanceamento através de operações de split e merge em tempo logarítmico."
    },
    {
      text: "Uma fila implementada com heap pode ser usada para ordenação em tempo O(n log n).",
      answer: true,
      comment: "Certo. Heap sort utiliza propriedades do heap para ordenar elementos em tempo O(n log n)."
    },
    {
      text: "A travessia level-order de uma árvore binária pode ser implementada usando uma fila.",
      answer: true,
      comment: "Certo. Level-order (BFS) utiliza fila para processar nós nível por nível."
    },
    {
      text: "Uma lista encadeada com ponteiro para o último elemento permite inserção no final em O(1).",
      answer: true,
      comment: "Certo. Ponteiro para o último elemento elimina necessidade de percorrer toda a lista."
    },
    {
      text: "A complexidade de busca em uma árvore B é O(log n) no pior caso.",
      answer: true,
      comment: "Certo. Árvores B mantêm balanceamento perfeito, garantindo altura logarítmica."
    },
    {
      text: "Uma pilha implementada com array dinâmico tem complexidade amortizada O(1) para push.",
      answer: true,
      comment: "Certo. Redimensionamento ocasional é amortizado pelas operações O(1) subsequentes."
    },
    {
      text: "A remoção de um nó interno em uma árvore binária de busca sempre requer rebalanceamento.",
      answer: false,
      comment: "Errado. Rebalanceamento depende do tipo de árvore (AVL, vermelho-preto) e da altura resultante."
    },
    {
      text: "Uma lista duplamente encadeada permite remoção de um nó conhecido em O(1).",
      answer: true,
      comment: "Certo. Ponteiros anterior e próximo permitem remoção direta sem percorrer a lista."
    },
    {
      text: "A complexidade de inserção em uma árvore splay é O(log n) no pior caso.",
      answer: false,
      comment: "Errado. Splay trees podem ter complexidade O(n) no pior caso, mas oferecem amortização."
    },
    {
      text: "Uma fila de prioridade implementada com lista ordenada tem complexidade O(1) para remoção do máximo.",
      answer: true,
      comment: "Certo. Elemento de maior prioridade está sempre no início da lista ordenada."
    },
    {
      text: "A altura de uma árvore binária completa com n nós é exatamente ⌊log₂(n)⌋.",
      answer: true,
      comment: "Certo. Árvores completas têm altura mínima possível para o número de nós."
    },
    {
      text: "Uma pilha pode ser implementada usando uma única fila com operações de reversão.",
      answer: true,
      comment: "Certo. Uma fila pode simular uma pilha usando operações de enqueue e dequeue com reversão."
    },
    {
      text: "A complexidade de busca em uma árvore de segmentos é O(log n) para consultas de intervalo.",
      answer: true,
      comment: "Certo. Árvores de segmentos dividem intervalos recursivamente, permitindo consultas logarítmicas."
    },
    {
      text: "Uma lista encadeada com ponteiro circular permite implementar uma fila eficientemente.",
      answer: true,
      comment: "Certo. Lista circular permite inserção no final e remoção do início em O(1)."
    },
    {
      text: "A inserção em uma árvore AVL pode requerer até duas rotações para rebalanceamento.",
      answer: true,
      comment: "Certo. AVL pode precisar de rotação simples ou dupla dependendo do caso de desbalanceamento."
    },
    {
      text: "Uma fila implementada com duas pilhas pode ter complexidade O(1) amortizada para enqueue e dequeue.",
      answer: true,
      comment: "Certo. Duas pilhas podem simular uma fila com transferência de elementos quando necessário."
    },
    {
      text: "A complexidade de busca em uma árvore trie é O(m), onde m é o comprimento da string buscada.",
      answer: true,
      comment: "Certo. Tries percorrem um caractere por nível, resultando em complexidade linear no comprimento."
    },
    {
      text: "Uma lista encadeada ordenada permite inserção ordenada em O(1) no melhor caso.",
      answer: true,
      comment: "Certo. Inserção no início de lista ordenada é O(1) quando o novo elemento é o menor."
    },
    {
      text: "A altura de uma árvore vermelho-preto é sempre menor que a altura de uma árvore AVL equivalente.",
      answer: false,
      comment: "Errado. Árvores vermelho-preto podem ter altura maior que AVLs, mas garantem balanceamento mais simples."
    },
    {
      text: "Uma pilha implementada com lista encadeada tem complexidade O(n) para busca de elemento.",
      answer: true,
      comment: "Certo. Busca em pilha requer percorrer todos os elementos até encontrar o desejado."
    },
    {
      text: "A complexidade de inserção em uma árvore B* é O(log n) no pior caso.",
      answer: true,
      comment: "Certo. Árvores B* mantêm balanceamento através de operações de redistribuição e split."
    },
    {
      text: "Uma fila de prioridade implementada com heap binomial tem complexidade O(log n) para união.",
      answer: true,
      comment: "Certo. União de heaps binomiais mantém propriedades do heap através de operações de merge."
    },
    {
      text: "A travessia post-order de uma árvore binária pode ser implementada usando duas pilhas.",
      answer: true,
      comment: "Certo. Post-order pode ser implementada com duas pilhas usando algoritmo iterativo."
    },
    {
      text: "Uma lista encadeada com ponteiro para o meio permite busca binária simulada.",
      answer: false,
      comment: "Errado. Listas encadeadas não permitem acesso aleatório, impossibilitando busca binária real."
    },
    {
      text: "A complexidade de remoção em uma árvore de intervalos é O(log n) para operações de ponto.",
      answer: true,
      comment: "Certo. Árvores de intervalos mantêm balanceamento para operações logarítmicas."
    },
    {
      text: "Uma pilha implementada com array circular tem complexidade O(1) para todas as operações.",
      answer: true,
      comment: "Certo. Arrays circulares permitem push e pop em tempo constante sem deslocamento."
    },
    {
      text: "A altura de uma árvore binária de busca ótima é sempre menor ou igual a log₂(n).",
      answer: false,
      comment: "Errado. Árvores ótimas minimizam custo total, não necessariamente altura."
    },
    {
      text: "Uma fila implementada com lista duplamente encadeada permite inserção no meio em O(1).",
      answer: false,
      comment: "Errado. Inserção no meio requer localização da posição, que é O(n)."
    },
    {
      text: "A complexidade de busca em uma árvore de sufixos é O(m), onde m é o comprimento do padrão.",
      answer: true,
      comment: "Certo. Árvores de sufixos permitem busca de padrões em tempo linear no comprimento."
    },
    {
      text: "Uma lista encadeada com ponteiro para o penúltimo elemento permite inserção no final em O(1).",
      answer: true,
      comment: "Certo. Ponteiro para penúltimo elemento permite acesso direto ao último nó."
    },
    {
      text: "A rotação em árvores vermelho-preto pode alterar a cor dos nós além da estrutura.",
      answer: true,
      comment: "Certo. Rotações em árvores vermelho-preto podem requerer mudanças de cor para manter propriedades."
    },
    {
      text: "Uma pilha pode ser implementada usando uma única fila com operações de reversão parcial.",
      answer: true,
      comment: "Certo. Uma fila pode simular pilha usando reversão de elementos conforme necessário."
    },
    {
      text: "A complexidade de inserção em uma árvore de segmentos persistente é O(log n).",
      answer: true,
      comment: "Certo. Árvores de segmentos persistentes mantêm versões anteriores com complexidade logarítmica."
    },
    {
      text: "Uma fila de prioridade implementada com heap de Fibonacci tem complexidade O(1) amortizada para inserção.",
      answer: true,
      comment: "Certo. Heaps de Fibonacci oferecem inserção O(1) amortizada através de lazy consolidation."
    },
    {
      text: "A travessia morris de uma árvore binária tem complexidade O(n) e espaço O(1).",
      answer: true,
      comment: "Certo. Travessia Morris usa ponteiros temporários para percorrer árvore sem pilha recursiva."
    },
    {
      text: "Uma lista encadeada com ponteiro para o terceiro elemento permite inserção no início em O(1).",
      answer: false,
      comment: "Errado. Inserção no início requer acesso ao primeiro elemento, não ao terceiro."
    },
    {
      text: "A complexidade de busca em uma árvore de segmentos 2D é O(log² n) para consultas de retângulo.",
      answer: true,
      comment: "Certo. Árvores de segmentos 2D requerem busca em duas dimensões, resultando em complexidade quadrática logarítmica."
    },
    {
      text: "Uma pilha implementada com heap pode ser usada para ordenação em tempo O(n log n).",
      answer: true,
      comment: "Certo. Heap sort utiliza propriedades do heap para ordenar elementos eficientemente."
    },
    {
      text: "A altura de uma árvore binária de busca aleatória é O(log n) em média.",
      answer: true,
      comment: "Certo. Árvores aleatórias mantêm balanceamento esperado através de inserções aleatórias."
    },
    {
      text: "Uma fila implementada com array dinâmico tem complexidade O(1) amortizada para enqueue.",
      answer: true,
      comment: "Certo. Arrays dinâmicos oferecem inserção O(1) amortizada através de redimensionamento ocasional."
    },
    {
      text: "A complexidade de busca em uma árvore de segmentos lazy é O(log n) para atualizações de intervalo.",
      answer: true,
      comment: "Certo. Lazy propagation permite atualizações de intervalo em tempo logarítmico."
    },
    {
      text: "Uma lista encadeada com ponteiro para o último elemento permite remoção do último em O(1).",
      answer: false,
      comment: "Errado. Remoção do último elemento requer acesso ao penúltimo elemento para atualizar ponteiros."
    },
    {
      text: "A inserção em uma árvore B+ pode requerer split de nós folha e não-folha.",
      answer: true,
      comment: "Certo. Árvores B+ podem precisar dividir tanto nós internos quanto folhas durante inserção."
    },
    {
      text: "Uma pilha implementada com duas filas tem complexidade O(n) para pop no pior caso.",
      answer: true,
      comment: "Certo. Pop requer mover todos os elementos exceto um entre as filas, resultando em O(n)."
    },
    {
      text: "A complexidade de busca em uma árvore de segmentos com compressão de coordenadas é O(log n).",
      answer: true,
      comment: "Certo. Compressão de coordenadas mantém complexidade logarítmica mesmo com valores discretos."
    },
    {
      text: "Uma fila de prioridade implementada com lista não ordenada tem complexidade O(n) para remoção do máximo.",
      answer: true,
      comment: "Certo. Remoção do máximo requer percorrer toda a lista para encontrar o elemento de maior prioridade."
    },
    {
      text: "A travessia iterativa de uma árvore binária usando pilha tem complexidade O(n) de tempo e O(h) de espaço.",
      answer: true,
      comment: "Certo. Travessia iterativa usa pilha com altura máxima da árvore, resultando em O(h) de espaço."
    }
  ],
  "metodos-estruturas": [
    {
      text: "A busca binária em um array ordenado tem complexidade O(log n) no pior caso.",
      answer: true,
      comment: "Certo. Busca binária divide o espaço de busca pela metade a cada iteração, resultando em complexidade logarítmica."
    },
    {
      text: "O algoritmo de ordenação quicksort tem complexidade O(n²) no pior caso, mas O(n log n) no caso médio.",
      answer: true,
      comment: "Certo. Quicksort pode degenerar para O(n²) com pivôs ruins, mas mantém O(n log n) em média."
    },
    {
      text: "A inserção em uma árvore binária de busca balanceada tem complexidade O(log n) no pior caso.",
      answer: true,
      comment: "Certo. Árvores balanceadas garantem altura logarítmica, resultando em inserção O(log n)."
    },
    {
      text: "O algoritmo de busca linear em uma lista encadeada tem complexidade O(1) no melhor caso.",
      answer: true,
      comment: "Certo. Se o elemento buscado for o primeiro da lista, a busca termina em O(1)."
    },
    {
      text: "O heapsort tem complexidade O(n log n) no pior caso e não requer espaço adicional.",
      answer: true,
      comment: "Certo. Heapsort é um algoritmo in-place com complexidade O(n log n) garantida."
    },
    {
      text: "A busca em uma árvore B+ tem complexidade O(log n) para operações de ponto.",
      answer: true,
      comment: "Certo. Árvores B+ mantêm balanceamento perfeito, garantindo altura logarítmica."
    },
    {
      text: "O algoritmo mergesort tem complexidade O(n log n) no pior caso, mas requer espaço adicional O(n).",
      answer: true,
      comment: "Certo. Mergesort é estável e tem complexidade garantida, mas precisa de espaço extra para merge."
    },
    {
      text: "A inserção em uma lista encadeada ordenada tem complexidade O(n) no pior caso.",
      answer: true,
      comment: "Certo. Inserção ordenada requer localização da posição correta, que pode ser O(n)."
    },
    {
      text: "O algoritmo de busca ternária tem complexidade O(log₃ n) para strings.",
      answer: true,
      comment: "Certo. Busca ternária divide o espaço em três partes, resultando em log₃ n comparações."
    },
    {
      text: "A ordenação por inserção tem complexidade O(n²) no pior caso, mas O(n) no melhor caso.",
      answer: true,
      comment: "Certo. Insertion sort é O(n) quando o array já está ordenado, mas O(n²) quando reverso."
    },
    {
      text: "A busca em uma árvore de segmentos tem complexidade O(log n) para consultas de intervalo.",
      answer: true,
      comment: "Certo. Árvores de segmentos dividem intervalos recursivamente, permitindo consultas logarítmicas."
    },
    {
      text: "O algoritmo de ordenação por contagem (counting sort) tem complexidade O(n + k), onde k é o range dos valores.",
      answer: true,
      comment: "Certo. Counting sort é linear quando k = O(n), mas pode ser O(n²) quando k >> n."
    },
    {
      text: "A inserção em uma árvore AVL pode requerer até duas rotações para rebalanceamento.",
      answer: true,
      comment: "Certo. AVL pode precisar de rotação simples ou dupla dependendo do caso de desbalanceamento."
    },
    {
      text: "O algoritmo de busca em profundidade (DFS) em um grafo tem complexidade O(V + E).",
      answer: true,
      comment: "Certo. DFS visita cada vértice e aresta no máximo uma vez."
    },
    {
      text: "A ordenação por seleção tem complexidade O(n²) no pior caso e é in-place.",
      answer: true,
      comment: "Certo. Selection sort sempre faz O(n²) comparações, independentemente da entrada."
    },
    {
      text: "A busca em uma árvore trie tem complexidade O(m), onde m é o comprimento da string buscada.",
      answer: true,
      comment: "Certo. Tries percorrem um caractere por nível, resultando em complexidade linear no comprimento."
    },
    {
      text: "O algoritmo de ordenação por radix (radix sort) tem complexidade O(d(n + k)), onde d é o número de dígitos.",
      answer: true,
      comment: "Certo. Radix sort aplica counting sort para cada dígito, resultando em complexidade linear quando d é constante."
    },
    {
      text: "A inserção em uma árvore vermelho-preto pode alterar a cor dos nós além da estrutura.",
      answer: true,
      comment: "Certo. Rotações em árvores vermelho-preto podem requerer mudanças de cor para manter propriedades."
    },
    {
      text: "O algoritmo de busca em largura (BFS) em um grafo tem complexidade O(V + E).",
      answer: true,
      comment: "Certo. BFS visita cada vértice e aresta no máximo uma vez, como DFS."
    },
    {
      text: "A ordenação por bolha (bubble sort) tem complexidade O(n²) no pior caso, mas pode ser otimizada para O(n) no melhor caso.",
      answer: true,
      comment: "Certo. Bubble sort otimizado pode detectar quando o array está ordenado e parar prematuramente."
    },
    {
      text: "A busca em uma árvore de sufixos tem complexidade O(m), onde m é o comprimento do padrão.",
      answer: true,
      comment: "Certo. Árvores de sufixos permitem busca de padrões em tempo linear no comprimento."
    },
    {
      text: "O algoritmo de ordenação por shell (shell sort) tem complexidade O(n^(3/2)) no pior caso.",
      answer: true,
      comment: "Certo. Shell sort usa gaps decrescentes, resultando em complexidade melhor que O(n²)."
    },
    {
      text: "A inserção em uma árvore B pode requerer split de nós e redistribuição de chaves.",
      answer: true,
      comment: "Certo. Árvores B mantêm balanceamento através de operações de split e merge."
    },
    {
      text: "O algoritmo de busca binária interativa tem complexidade O(log n) de tempo e O(1) de espaço.",
      answer: true,
      comment: "Certo. Busca binária iterativa usa apenas variáveis de controle, sem pilha recursiva."
    },
    {
      text: "A ordenação por merge in-place tem complexidade O(n log n) mas é mais complexa de implementar.",
      answer: true,
      comment: "Certo. Merge in-place evita espaço extra, mas requer algoritmos mais sofisticados."
    },
    {
      text: "A busca em uma árvore de segmentos 2D tem complexidade O(log² n) para consultas de retângulo.",
      answer: true,
      comment: "Certo. Árvores de segmentos 2D requerem busca em duas dimensões, resultando em complexidade quadrática logarítmica."
    },
    {
      text: "O algoritmo de ordenação por heap (heapsort) é instável.",
      answer: true,
      comment: "Certo. Heapsort pode alterar a ordem relativa de elementos iguais durante as operações de heap."
    },
    {
      text: "A inserção em uma árvore splay move o elemento inserido para a raiz.",
      answer: true,
      comment: "Certo. Splay trees movem elementos acessados para a raiz, otimizando acessos futuros."
    },
    {
      text: "O algoritmo de busca ternária em árvores tem complexidade O(log₃ n) no pior caso.",
      answer: true,
      comment: "Certo. Árvores ternárias dividem o espaço em três partes, resultando em log₃ n comparações."
    },
    {
      text: "A ordenação por bucket (bucket sort) tem complexidade O(n + k) quando os elementos são uniformemente distribuídos.",
      answer: true,
      comment: "Certo. Bucket sort é eficiente quando os elementos estão bem distribuídos entre os buckets."
    },
    {
      text: "A busca em uma árvore de intervalos tem complexidade O(log n) para operações de ponto.",
      answer: true,
      comment: "Certo. Árvores de intervalos mantêm balanceamento para operações logarítmicas."
    },
    {
      text: "O algoritmo de ordenação por comb (comb sort) tem complexidade O(n²) no pior caso.",
      answer: true,
      comment: "Certo. Comb sort é uma variação do bubble sort com gaps variáveis."
    },
    {
      text: "A inserção em uma árvore de segmentos persistente tem complexidade O(log n).",
      answer: true,
      comment: "Certo. Árvores de segmentos persistentes mantêm versões anteriores com complexidade logarítmica."
    },
    {
      text: "O algoritmo de busca exponencial tem complexidade O(log n) quando o elemento está próximo ao início.",
      answer: true,
      comment: "Certo. Busca exponencial é eficiente quando o elemento está nas primeiras posições."
    },
    {
      text: "A ordenação por gnome (gnome sort) tem complexidade O(n²) no pior caso.",
      answer: true,
      comment: "Certo. Gnome sort é similar ao insertion sort, mas com estratégia de movimentação diferente."
    },
    {
      text: "A busca em uma árvore de segmentos lazy tem complexidade O(log n) para atualizações de intervalo.",
      answer: true,
      comment: "Certo. Lazy propagation permite atualizações de intervalo em tempo logarítmico."
    },
    {
      text: "O algoritmo de ordenação por cocktail (cocktail sort) é uma variação do bubble sort que ordena em ambas as direções.",
      answer: true,
      comment: "Certo. Cocktail sort alterna entre direções, melhorando a eficiência em alguns casos."
    },
    {
      text: "A inserção em uma árvore B+ pode requerer split de nós folha e não-folha.",
      answer: true,
      comment: "Certo. Árvores B+ podem precisar dividir tanto nós internos quanto folhas durante inserção."
    },
    {
      text: "O algoritmo de busca por interpolação tem complexidade O(log log n) no melhor caso para dados uniformemente distribuídos.",
      answer: true,
      comment: "Certo. Busca por interpolação é muito eficiente quando os dados estão bem distribuídos."
    },
    {
      text: "A ordenação por tim (tim sort) é um algoritmo híbrido que combina merge sort e insertion sort.",
      answer: true,
      comment: "Certo. Tim sort é usado em Python e Java, otimizando para diferentes tipos de dados."
    },
    {
      text: "A busca em uma árvore de segmentos com compressão de coordenadas tem complexidade O(log n).",
      answer: true,
      comment: "Certo. Compressão de coordenadas mantém complexidade logarítmica mesmo com valores discretos."
    },
    {
      text: "O algoritmo de ordenação por ciclo (cycle sort) tem complexidade O(n²) mas minimiza o número de escritas.",
      answer: true,
      comment: "Certo. Cycle sort é útil quando escritas na memória são custosas."
    },
    {
      text: "A inserção em uma árvore de segmentos 2D tem complexidade O(log² n).",
      answer: true,
      comment: "Certo. Inserção em árvores 2D requer operações em duas dimensões."
    },
    {
      text: "O algoritmo de busca por fibonacci tem complexidade O(log n) e usa números de fibonacci para dividir o array.",
      answer: true,
      comment: "Certo. Busca por fibonacci é uma variação da busca binária que usa divisão baseada em fibonacci."
    },
    {
      text: "A ordenação por pato (pigeonhole sort) tem complexidade O(n + k) onde k é o range dos valores.",
      answer: true,
      comment: "Certo. Pigeonhole sort é eficiente quando o range dos valores é pequeno comparado ao número de elementos."
    },
    {
      text: "A busca em uma árvore de segmentos persistente tem complexidade O(log n) para consultas.",
      answer: true,
      comment: "Certo. Árvores persistentes mantêm complexidade logarítmica para consultas."
    },
    {
      text: "O algoritmo de ordenação por strand (strand sort) tem complexidade O(n²) no pior caso.",
      answer: true,
      comment: "Certo. Strand sort extrai subsequências crescentes e as mescla."
    },
    {
      text: "A inserção em uma árvore de segmentos com lazy propagation pode ser O(log n) amortizada.",
      answer: true,
      comment: "Certo. Lazy propagation permite operações eficientes através de propagação diferida."
    },
    {
      text: "O algoritmo de busca por jump (jump search) tem complexidade O(√n) no pior caso.",
      answer: true,
      comment: "Certo. Jump search faz saltos de tamanho √n, resultando em complexidade O(√n)."
    },
    {
      text: "A ordenação por bogo (bogo sort) tem complexidade O((n+1)!) no pior caso.",
      answer: true,
      comment: "Certo. Bogo sort é um algoritmo de ordenação por tentativa e erro, extremamente ineficiente."
    },
    {
      text: "A busca em uma árvore de segmentos com lazy propagation tem complexidade O(log n) para atualizações.",
      answer: true,
      comment: "Certo. Lazy propagation permite atualizações eficientes em árvores de segmentos."
    },
    {
      text: "O algoritmo de ordenação por pancake (pancake sort) tem complexidade O(n²) no pior caso.",
      answer: true,
      comment: "Certo. Pancake sort ordena através de reversões de prefixos do array."
    },
    {
      text: "A inserção em uma árvore de segmentos com compressão de coordenadas tem complexidade O(log n).",
      answer: true,
      comment: "Certo. Compressão de coordenadas mantém complexidade logarítmica para inserções."
    },
    {
      text: "O algoritmo de busca por bloco (block search) tem complexidade O(√n) no pior caso.",
      answer: true,
      comment: "Certo. Block search divide o array em blocos de tamanho √n para otimizar a busca."
    },
    {
      text: "A ordenação por bogosort tem complexidade esperada O(n × n!) para arrays aleatórios.",
      answer: true,
      comment: "Certo. Bogosort tem complexidade fatorial devido à natureza aleatória do algoritmo."
    },
    {
      text: "A busca em uma árvore de segmentos 2D com lazy propagation tem complexidade O(log² n) para atualizações.",
      answer: true,
      comment: "Certo. Lazy propagation em árvores 2D mantém complexidade quadrática logarítmica."
    },
    {
      text: "O algoritmo de ordenação por sleep (sleep sort) tem complexidade O(max + n), onde max é o maior valor.",
      answer: true,
      comment: "Certo. Sleep sort usa threads para ordenar baseado no tempo de sleep de cada elemento."
    },
    {
      text: "A inserção em uma árvore de segmentos persistente com lazy propagation tem complexidade O(log n).",
      answer: true,
      comment: "Certo. Árvores persistentes com lazy propagation mantêm eficiência logarítmica."
    },
    {
      text: "O algoritmo de busca por sentinela (sentinel search) tem complexidade O(n) no pior caso, mas reduz o número de comparações.",
      answer: true,
      comment: "Certo. Sentinel search usa um valor sentinela para eliminar a verificação de limites."
    },
    {
      text: "A ordenação por bead (bead sort) tem complexidade O(n) para números inteiros pequenos.",
      answer: true,
      comment: "Certo. Bead sort simula o processo físico de contas caindo através de gravidade."
    },
    {
      text: "A busca em uma árvore de segmentos com múltiplas dimensões tem complexidade O(log^d n) para d dimensões.",
      answer: true,
      comment: "Certo. Árvores multidimensionais têm complexidade exponencial no número de dimensões."
    },
    {
      text: "O algoritmo de ordenação por stooge (stooge sort) tem complexidade O(n^(log 3/log 1.5)) ≈ O(n^2.7).",
      answer: true,
      comment: "Certo. Stooge sort é um algoritmo recursivo ineficiente usado principalmente para fins educacionais."
    }
  ],
  "complexidade-algoritmos": [
    {
      text: "A notação Big O representa o limite superior assintótico da complexidade de um algoritmo.",
      answer: true,
      comment: "Certo. Big O representa o pior caso assintótico, indicando o limite superior do crescimento."
    },
    {
      text: "Um algoritmo com complexidade O(n²) sempre executa exatamente n² operações.",
      answer: false,
      comment: "Errado. O(n²) indica que o número de operações é limitado por c.n² para alguma constante c."
    },
    {
      text: "A complexidade espacial de um algoritmo recursivo de Fibonacci é O(n) devido à pilha de recursão.",
      answer: true,
      comment: "Certo. A pilha de recursão pode ter até n frames, resultando em complexidade espacial O(n)."
    },
    {
      text: "Um algoritmo com complexidade O(log n) é sempre mais eficiente que um algoritmo O(n).",
      answer: false,
      comment: "Errado. Para valores pequenos de n, constantes podem fazer O(n) ser mais rápido que O(log n)."
    },
    {
      text: "A complexidade temporal do algoritmo de ordenação por bolha é O(n²) no pior caso.",
      answer: true,
      comment: "Certo. Bubble sort faz n-1 passadas, cada uma com n-i comparações, resultando em O(n²)."
    },
    {
      text: "A notação Big Omega (Ω) representa o limite inferior assintótico da complexidade.",
      answer: true,
      comment: "Certo. Ω representa o melhor caso assintótico, indicando o limite inferior do crescimento."
    },
    {
      text: "Um algoritmo com complexidade O(1) tem tempo de execução constante, independentemente do tamanho da entrada.",
      answer: true,
      comment: "Certo. O(1) indica que o tempo de execução não depende do tamanho da entrada."
    },
    {
      text: "A complexidade espacial de uma busca binária iterativa é O(1).",
      answer: true,
      comment: "Certo. Busca binária iterativa usa apenas variáveis de controle, sem espaço adicional."
    },
    {
      text: "Um algoritmo com complexidade O(n log n) é sempre mais eficiente que um algoritmo O(n²).",
      answer: false,
      comment: "Errado. Para valores pequenos de n, constantes podem fazer O(n²) ser mais rápido."
    },
    {
      text: "A notação Big Theta (Θ) representa um limite assintótico apertado.",
      answer: true,
      comment: "Certo. Θ indica que o algoritmo tem tanto limite superior quanto inferior iguais."
    },
    {
      text: "A complexidade temporal de um algoritmo de busca linear é O(n) no pior caso.",
      answer: true,
      comment: "Certo. Busca linear pode precisar percorrer todos os n elementos para encontrar o alvo."
    },
    {
      text: "Um algoritmo com complexidade O(2ⁿ) é considerado exponencial.",
      answer: true,
      comment: "Certo. Algoritmos exponenciais crescem muito rapidamente e são geralmente intratáveis."
    },
    {
      text: "A complexidade espacial de um algoritmo de ordenação por merge é O(n).",
      answer: true,
      comment: "Certo. Mergesort requer espaço adicional para armazenar os subarrays durante o merge."
    },
    {
      text: "Um algoritmo com complexidade O(n!) é considerado fatorial.",
      answer: true,
      comment: "Certo. Algoritmos fatoriais são extremamente ineficientes e intratáveis."
    },
    {
      text: "A complexidade temporal de um algoritmo de busca binária é O(log n) no pior caso.",
      answer: true,
      comment: "Certo. Busca binária divide o espaço de busca pela metade a cada iteração."
    },
    {
      text: "A notação Little O (o) representa um limite assintótico estrito.",
      answer: true,
      comment: "Certo. Little o indica que o crescimento é estritamente menor que o limite especificado."
    },
    {
      text: "Um algoritmo com complexidade O(n³) é considerado cúbico.",
      answer: true,
      comment: "Certo. Algoritmos cúbicos têm complexidade polinomial de grau 3."
    },
    {
      text: "A complexidade espacial de um algoritmo recursivo de busca binária é O(log n).",
      answer: true,
      comment: "Certo. A pilha de recursão tem altura logarítmica devido à divisão pela metade."
    },
    {
      text: "Um algoritmo com complexidade O(n log n) é considerado quase-linear.",
      answer: true,
      comment: "Certo. Algoritmos quase-lineares são muito eficientes e próximos de O(n)."
    },
    {
      text: "A complexidade temporal de um algoritmo de ordenação por inserção é O(n²) no pior caso.",
      answer: true,
      comment: "Certo. Insertion sort pode precisar mover todos os elementos anteriores para cada inserção."
    },
    {
      text: "A notação Big Omega (Ω) é usada para análise do melhor caso.",
      answer: true,
      comment: "Certo. Ω representa o limite inferior, indicando o melhor desempenho possível."
    },
    {
      text: "Um algoritmo com complexidade O(√n) é considerado sublinear.",
      answer: true,
      comment: "Certo. Algoritmos sublineares crescem mais lentamente que linearmente."
    },
    {
      text: "A complexidade espacial de um algoritmo de ordenação por heap é O(1).",
      answer: true,
      comment: "Certo. Heapsort é um algoritmo in-place que não requer espaço adicional."
    },
    {
      text: "Um algoritmo com complexidade O(n log² n) é considerado polilogarítmico.",
      answer: true,
      comment: "Certo. Algoritmos polilogarítmicos têm complexidade entre linear e quadrática."
    },
    {
      text: "A complexidade temporal de um algoritmo de ordenação por seleção é O(n²) no pior caso.",
      answer: true,
      comment: "Certo. Selection sort sempre faz O(n²) comparações, independentemente da entrada."
    },
    {
      text: "A notação Big Theta (Θ) fornece limites superior e inferior iguais.",
      answer: true,
      comment: "Certo. Θ indica que o algoritmo tem crescimento exato dentro de um fator constante."
    },
    {
      text: "Um algoritmo com complexidade O(n^1.5) é considerado superlinear.",
      answer: true,
      comment: "Certo. Algoritmos superlineares crescem mais rapidamente que linearmente."
    },
    {
      text: "A complexidade espacial de um algoritmo de busca em profundidade (DFS) é O(V) no pior caso.",
      answer: true,
      comment: "Certo. DFS pode precisar armazenar todos os vértices na pilha de recursão."
    },
    {
      text: "Um algoritmo com complexidade O(n log log n) é considerado quase-linear.",
      answer: true,
      comment: "Certo. Algoritmos com log log n são muito próximos de linear."
    },
    {
      text: "A complexidade temporal de um algoritmo de ordenação por quicksort é O(n log n) no caso médio.",
      answer: true,
      comment: "Certo. Quicksort tem complexidade O(n log n) em média, mas O(n²) no pior caso."
    },
    {
      text: "A notação Little Omega (ω) representa um limite inferior estrito.",
      answer: true,
      comment: "Certo. Little omega indica que o crescimento é estritamente maior que o limite especificado."
    },
    {
      text: "Um algoritmo com complexidade O(n^2.5) é considerado polinomial.",
      answer: true,
      comment: "Certo. Algoritmos polinomiais têm complexidade O(n^k) para algum k > 0."
    },
    {
      text: "A complexidade espacial de um algoritmo de busca em largura (BFS) é O(V) no pior caso.",
      answer: true,
      comment: "Certo. BFS pode precisar armazenar todos os vértices na fila."
    },
    {
      text: "Um algoritmo com complexidade O(n log* n) é considerado quase-linear.",
      answer: true,
      comment: "Certo. log* n cresce muito lentamente, resultando em complexidade quase-linear."
    },
    {
      text: "A complexidade temporal de um algoritmo de ordenação por merge é O(n log n) no pior caso.",
      answer: true,
      comment: "Certo. Mergesort sempre divide o array pela metade, garantindo O(n log n)."
    },
    {
      text: "A notação Big O é a mais comumente usada na análise de algoritmos.",
      answer: true,
      comment: "Certo. Big O é preferida porque fornece garantias sobre o pior caso."
    },
    {
      text: "Um algoritmo com complexidade O(n^0.5) é considerado sublinear.",
      answer: true,
      comment: "Certo. Algoritmos com expoente menor que 1 crescem mais lentamente que linearmente."
    },
    {
      text: "A complexidade espacial de um algoritmo recursivo de merge sort é O(log n).",
      answer: true,
      comment: "Certo. A pilha de recursão tem altura logarítmica devido à divisão pela metade."
    },
    {
      text: "Um algoritmo com complexidade O(n log³ n) é considerado polilogarítmico.",
      answer: true,
      comment: "Certo. Algoritmos com múltiplos fatores logarítmicos são polilogarítmicos."
    },
    {
      text: "A complexidade temporal de um algoritmo de ordenação por heap é O(n log n) no pior caso.",
      answer: true,
      comment: "Certo. Heapsort sempre tem complexidade O(n log n), independentemente da entrada."
    },
    {
      text: "A notação Big Theta é mais informativa que Big O para análise de algoritmos.",
      answer: true,
      comment: "Certo. Θ fornece limites superior e inferior iguais, dando informação mais precisa."
    },
    {
      text: "Um algoritmo com complexidade O(n^3.5) é considerado polinomial.",
      answer: true,
      comment: "Certo. Qualquer algoritmo com complexidade O(n^k) para k > 0 é polinomial."
    },
    {
      text: "A complexidade espacial de um algoritmo de ordenação por counting sort é O(n + k).",
      answer: true,
      comment: "Certo. Counting sort requer espaço para o array de contagem e o array de saída."
    },
    {
      text: "Um algoritmo com complexidade O(n log log n) é considerado quase-linear.",
      answer: true,
      comment: "Certo. log log n cresce muito lentamente, resultando em complexidade próxima de linear."
    },
    {
      text: "A complexidade temporal de um algoritmo de ordenação por radix sort é O(d(n + k)).",
      answer: true,
      comment: "Certo. Radix sort aplica counting sort para cada dígito, onde d é o número de dígitos."
    },
    {
      text: "A notação Little O é usada para indicar que um algoritmo é estritamente mais eficiente.",
      answer: true,
      comment: "Certo. Little o indica crescimento estritamente menor que o limite especificado."
    },
    {
      text: "Um algoritmo com complexidade O(n^1.8) é considerado superlinear.",
      answer: true,
      comment: "Certo. Algoritmos com expoente entre 1 e 2 são superlineares."
    },
    {
      text: "A complexidade espacial de um algoritmo de busca ternária é O(log₃ n).",
      answer: true,
      comment: "Certo. Busca ternária divide o espaço em três partes, resultando em pilha logarítmica."
    },
    {
      text: "Um algoritmo com complexidade O(n log⁴ n) é considerado polilogarítmico.",
      answer: true,
      comment: "Certo. Algoritmos com múltiplos fatores logarítmicos elevados são polilogarítmicos."
    },
    {
      text: "A complexidade temporal de um algoritmo de ordenação por shell sort é O(n^(3/2)).",
      answer: true,
      comment: "Certo. Shell sort com gaps específicos tem complexidade O(n^(3/2))."
    },
    {
      text: "A notação Big Omega é útil para provar que um algoritmo é ótimo.",
      answer: true,
      comment: "Certo. Ω pode ser usado para mostrar que nenhum algoritmo pode ser melhor que um limite inferior."
    },
    {
      text: "Um algoritmo com complexidade O(n^2.8) é considerado polinomial.",
      answer: true,
      comment: "Certo. Qualquer algoritmo com complexidade O(n^k) para k > 0 é polinomial."
    },
    {
      text: "A complexidade espacial de um algoritmo de ordenação por bucket sort é O(n + k).",
      answer: true,
      comment: "Certo. Bucket sort requer espaço para os buckets e o array de saída."
    },
    {
      text: "Um algoritmo com complexidade O(n log⁵ n) é considerado polilogarítmico.",
      answer: true,
      comment: "Certo. Algoritmos com múltiplos fatores logarítmicos elevados são polilogarítmicos."
    },
    {
      text: "A complexidade temporal de um algoritmo de ordenação por tim sort é O(n log n) no pior caso.",
      answer: true,
      comment: "Certo. Tim sort combina merge sort e insertion sort, mantendo O(n log n)."
    },
    {
      text: "A notação Big Theta é simétrica: se f(n) = Θ(g(n)), então g(n) = Θ(f(n)).",
      answer: true,
      comment: "Certo. Θ é uma relação de equivalência, sendo simétrica e transitiva."
    },
    {
      text: "Um algoritmo com complexidade O(n^1.2) é considerado superlinear.",
      answer: true,
      comment: "Certo. Algoritmos com expoente entre 1 e 2 são superlineares."
    },
    {
      text: "A complexidade espacial de um algoritmo de ordenação por cycle sort é O(1).",
      answer: true,
      comment: "Certo. Cycle sort é um algoritmo in-place que não requer espaço adicional."
    },
    {
      text: "Um algoritmo com complexidade O(n log⁶ n) é considerado polilogarítmico.",
      answer: true,
      comment: "Certo. Algoritmos com múltiplos fatores logarítmicos elevados são polilogarítmicos."
    },
    {
      text: "A complexidade temporal de um algoritmo de ordenação por bogo sort é O((n+1)!) no pior caso.",
      answer: true,
      comment: "Certo. Bogo sort tem complexidade fatorial devido à natureza aleatória do algoritmo."
    },
    {
      text: "A notação Big O é transitiva: se f(n) = O(g(n)) e g(n) = O(h(n)), então f(n) = O(h(n)).",
      answer: true,
      comment: "Certo. Big O é uma relação transitiva, permitindo encadeamento de limites."
    },
    {
      text: "Um algoritmo com complexidade O(n^4.2) é considerado polinomial.",
      answer: true,
      comment: "Certo. Qualquer algoritmo com complexidade O(n^k) para k > 0 é polinomial."
    },
    {
      text: "A complexidade espacial de um algoritmo de ordenação por strand sort é O(n).",
      answer: true,
      comment: "Certo. Strand sort requer espaço adicional para armazenar as subsequências."
    },
    {
      text: "Um algoritmo com complexidade O(n log⁷ n) é considerado polilogarítmico.",
      answer: true,
      comment: "Certo. Algoritmos com múltiplos fatores logarítmicos elevados são polilogarítmicos."
    },
    {
      text: "A complexidade temporal de um algoritmo de ordenação por stooge sort é O(n^(log 3/log 1.5)) ≈ O(n^2.7).",
      answer: true,
      comment: "Certo. Stooge sort é um algoritmo recursivo ineficiente com complexidade aproximadamente O(n^2.7)."
    }
  ],
  "automatos": [
    {
      text: "Um autômato finito determinístico (DFA) tem exatamente uma transição para cada símbolo de entrada em cada estado.",
      answer: true,
      comment: "Certo. DFAs são determinísticos, garantindo que cada par (estado, símbolo) tenha exatamente uma transição."
    },
    {
      text: "Um autômato finito não-determinístico (NFA) pode ter múltiplas transições para o mesmo símbolo de entrada em um estado.",
      answer: true,
      comment: "Certo. NFAs permitem não-determinismo, com múltiplas transições possíveis para o mesmo símbolo."
    },
    {
      text: "Todo DFA pode ser convertido em um NFA equivalente, mas nem todo NFA pode ser convertido em um DFA.",
      answer: false,
      comment: "Errado. Todo NFA pode ser convertido em um DFA equivalente, mas a conversão pode resultar em exponencialmente mais estados."
    },
    {
      text: "Um autômato finito com ε-transições é sempre não-determinístico.",
      answer: true,
      comment: "Certo. ε-transições introduzem não-determinismo, permitindo transições sem consumir símbolos de entrada."
    },
    {
      text: "A minimização de um DFA sempre resulta em um autômato com o menor número possível de estados.",
      answer: true,
      comment: "Certo. Algoritmos de minimização garantem que o DFA resultante tenha o mínimo de estados equivalente."
    },
    {
      text: "Um NFA com n estados pode ser convertido em um DFA com no máximo 2ⁿ estados.",
      answer: true,
      comment: "Certo. A construção de subconjuntos pode resultar em até 2ⁿ estados, um para cada subconjunto de estados do NFA."
    },
    {
      text: "Um autômato finito aceita uma linguagem regular se e somente se for um DFA ou NFA.",
      answer: true,
      comment: "Certo. DFAs e NFAs são equivalentes em poder computacional e ambos reconhecem exatamente as linguagens regulares."
    },
    {
      text: "A eliminação de ε-transições em um NFA sempre resulta em um NFA sem ε-transições.",
      answer: true,
      comment: "Certo. Algoritmos de eliminação de ε-transições garantem que o NFA resultante não tenha ε-transições."
    },
    {
      text: "Um autômato finito com estados mortos pode ser simplificado removendo esses estados.",
      answer: true,
      comment: "Certo. Estados mortos (que não levam a estados finais) podem ser removidos sem alterar a linguagem aceita."
    },
    {
      text: "A união de duas linguagens regulares é sempre uma linguagem regular.",
      answer: true,
      comment: "Certo. A classe das linguagens regulares é fechada sob união, interseção e complemento."
    },
    {
      text: "Um autômato finito com estados inacessíveis pode ser simplificado removendo esses estados.",
      answer: true,
      comment: "Certo. Estados inacessíveis (que não podem ser alcançados do estado inicial) podem ser removidos."
    },
    {
      text: "A concatenação de duas linguagens regulares é sempre uma linguagem regular.",
      answer: true,
      comment: "Certo. Linguagens regulares são fechadas sob concatenação, permitindo construção de autômatos compostos."
    },
    {
      text: "Um DFA com n estados pode reconhecer uma linguagem com no máximo n strings.",
      answer: false,
      comment: "Errado. Um DFA pode reconhecer infinitas strings, como todas as strings que terminam com 'ab'."
    },
    {
      text: "A interseção de duas linguagens regulares é sempre uma linguagem regular.",
      answer: true,
      comment: "Certo. Linguagens regulares são fechadas sob interseção, usando o produto cartesiano de autômatos."
    },
    {
      text: "Um autômato finito com estados equivalentes pode ser minimizado combinando esses estados.",
      answer: true,
      comment: "Certo. Estados equivalentes (que aceitam as mesmas strings) podem ser combinados na minimização."
    },
    {
      text: "O complemento de uma linguagem regular é sempre uma linguagem regular.",
      answer: true,
      comment: "Certo. Para obter o complemento, basta trocar estados finais por não-finais no DFA."
    },
    {
      text: "Um NFA com ε-transições pode ser convertido em um NFA sem ε-transições.",
      answer: true,
      comment: "Certo. Algoritmos de eliminação de ε-transições garantem conversão para NFA sem ε-transições."
    },
    {
      text: "A estrela de Kleene de uma linguagem regular é sempre uma linguagem regular.",
      answer: true,
      comment: "Certo. Linguagens regulares são fechadas sob estrela de Kleene, permitindo repetição zero ou mais vezes."
    },
    {
      text: "Um autômato finito com estados indistinguíveis pode ser minimizado.",
      answer: true,
      comment: "Certo. Estados indistinguíveis (que não podem ser distinguidos por nenhuma string) podem ser combinados."
    },
    {
      text: "A diferença de duas linguagens regulares é sempre uma linguagem regular.",
      answer: true,
      comment: "Certo. A diferença L1 - L2 pode ser expressa como L1 ∩ L2̅, e linguagens regulares são fechadas sob essas operações."
    },
    {
      text: "Um DFA mínimo é único para uma linguagem regular dada.",
      answer: true,
      comment: "Certo. O DFA mínimo é único a menos de isomorfismo (renomeação de estados)."
    },
    {
      text: "Um NFA com n estados pode ser convertido em um DFA com exatamente 2ⁿ estados.",
      answer: false,
      comment: "Errado. O DFA pode ter no máximo 2ⁿ estados, mas pode ter menos se alguns subconjuntos forem inacessíveis."
    },
    {
      text: "A reversão de uma linguagem regular é sempre uma linguagem regular.",
      answer: true,
      comment: "Certo. Linguagens regulares são fechadas sob reversão, invertendo as transições do autômato."
    },
    {
      text: "Um autômato finito com estados equivalentes tem o mesmo comportamento para todas as strings.",
      answer: true,
      comment: "Certo. Estados equivalentes aceitam exatamente as mesmas strings, tendo comportamento idêntico."
    },
    {
      text: "A união de um número finito de linguagens regulares é sempre uma linguagem regular.",
      answer: true,
      comment: "Certo. Linguagens regulares são fechadas sob união finita, permitindo combinação de múltiplos autômatos."
    },
    {
      text: "Um DFA com estados mortos pode aceitar strings que não deveria aceitar.",
      answer: false,
      comment: "Errado. Estados mortos não afetam a aceitação, apenas podem tornar o autômato menos eficiente."
    },
    {
      text: "A concatenação de um número finito de linguagens regulares é sempre uma linguagem regular.",
      answer: true,
      comment: "Certo. Linguagens regulares são fechadas sob concatenação finita, permitindo composição de autômatos."
    },
    {
      text: "Um autômato finito com estados inacessíveis pode aceitar strings que não deveria aceitar.",
      answer: false,
      comment: "Errado. Estados inacessíveis não afetam a aceitação, apenas podem tornar o autômato menos eficiente."
    },
    {
      text: "A interseção de um número finito de linguagens regulares é sempre uma linguagem regular.",
      answer: true,
      comment: "Certo. Linguagens regulares são fechadas sob interseção finita, usando produto cartesiano de autômatos."
    },
    {
      text: "Um NFA com ε-transições pode ser mais expressivo que um NFA sem ε-transições.",
      answer: false,
      comment: "Errado. NFAs com e sem ε-transições têm o mesmo poder expressivo, sendo equivalentes."
    },
    {
      text: "A estrela de Kleene de um número finito de linguagens regulares é sempre uma linguagem regular.",
      answer: true,
      comment: "Certo. Linguagens regulares são fechadas sob estrela de Kleene finita, permitindo repetição de múltiplas linguagens."
    },
    {
      text: "Um autômato finito com estados equivalentes pode ser simplificado sem alterar a linguagem aceita.",
      answer: true,
      comment: "Certo. Estados equivalentes podem ser combinados sem alterar o comportamento do autômato."
    },
    {
      text: "A diferença simétrica de duas linguagens regulares é sempre uma linguagem regular.",
      answer: true,
      comment: "Certo. A diferença simétrica (L1 ⊕ L2) pode ser expressa como (L1 - L2) ∪ (L2 - L1), e linguagens regulares são fechadas sob essas operações."
    },
    {
      text: "Um DFA mínimo tem o menor número possível de estados para reconhecer sua linguagem.",
      answer: true,
      comment: "Certo. O DFA mínimo é único e tem o mínimo de estados necessário para reconhecer a linguagem."
    },
    {
      text: "Um NFA com n estados pode ser convertido em um DFA com menos de n estados.",
      answer: false,
      comment: "Errado. O DFA resultante sempre tem pelo menos n estados, podendo ter até 2ⁿ estados."
    },
    {
      text: "A reversão de um número finito de linguagens regulares é sempre uma linguagem regular.",
      answer: true,
      comment: "Certo. Linguagens regulares são fechadas sob reversão finita, permitindo reversão de múltiplas linguagens."
    },
    {
      text: "Um autômato finito com estados indistinguíveis pode aceitar strings diferentes.",
      answer: false,
      comment: "Errado. Estados indistinguíveis aceitam exatamente as mesmas strings, não podendo aceitar strings diferentes."
    },
    {
      text: "A união de um número infinito de linguagens regulares pode não ser uma linguagem regular.",
      answer: true,
      comment: "Certo. Linguagens regulares são fechadas apenas sob união finita, não infinita."
    },
    {
      text: "Um DFA com estados mortos pode ser mais eficiente que um DFA sem estados mortos.",
      answer: false,
      comment: "Errado. Estados mortos nunca melhoram a eficiência, apenas podem piorá-la."
    },
    {
      text: "A concatenação de um número infinito de linguagens regulares pode não ser uma linguagem regular.",
      answer: true,
      comment: "Certo. Linguagens regulares são fechadas apenas sob concatenação finita, não infinita."
    },
    {
      text: "Um autômato finito com estados inacessíveis pode ser mais eficiente que um autômato sem estados inacessíveis.",
      answer: false,
      comment: "Errado. Estados inacessíveis nunca melhoram a eficiência, apenas podem piorá-la."
    },
    {
      text: "A interseção de um número infinito de linguagens regulares pode não ser uma linguagem regular.",
      answer: true,
      comment: "Certo. Linguagens regulares são fechadas apenas sob interseção finita, não infinita."
    },
    {
      text: "Um NFA com ε-transições pode ser convertido em um DFA diretamente.",
      answer: false,
      comment: "Errado. Primeiro deve-se eliminar as ε-transições para obter um NFA sem ε-transições, depois converter para DFA."
    },
    {
      text: "A estrela de Kleene de um número infinito de linguagens regulares pode não ser uma linguagem regular.",
      answer: true,
      comment: "Certo. Linguagens regulares são fechadas apenas sob estrela de Kleene finita, não infinita."
    },
    {
      text: "Um autômato finito com estados equivalentes pode ser minimizado sem alterar a linguagem aceita.",
      answer: true,
      comment: "Certo. Estados equivalentes podem ser combinados sem alterar o comportamento do autômato."
    },
    {
      text: "A diferença de um número finito de linguagens regulares é sempre uma linguagem regular.",
      answer: true,
      comment: "Certo. A diferença pode ser expressa usando interseção e complemento, e linguagens regulares são fechadas sob essas operações."
    },
    {
      text: "Um DFA mínimo é único a menos de isomorfismo.",
      answer: true,
      comment: "Certo. O DFA mínimo é único, exceto pela renomeação de estados (isomorfismo)."
    },
    {
      text: "Um NFA com n estados pode ser convertido em um DFA com exatamente n estados.",
      answer: false,
      comment: "Errado. O DFA resultante sempre tem pelo menos n estados, podendo ter até 2ⁿ estados."
    },
    {
      text: "A reversão de uma linguagem regular pode ser computada em tempo polinomial.",
      answer: true,
      comment: "Certo. A reversão de um autômato finito pode ser computada em tempo linear no número de estados."
    },
    {
      text: "Um autômato finito com estados indistinguíveis pode ser minimizado sem alterar a linguagem aceita.",
      answer: true,
      comment: "Certo. Estados indistinguíveis podem ser combinados sem alterar o comportamento do autômato."
    },
    {
      text: "A união de linguagens regulares é uma operação associativa.",
      answer: true,
      comment: "Certo. A união de linguagens regulares é associativa: (L1 ∪ L2) ∪ L3 = L1 ∪ (L2 ∪ L3)."
    },
    {
      text: "Um DFA com estados mortos pode ser simplificado em tempo linear.",
      answer: true,
      comment: "Certo. Estados mortos podem ser identificados e removidos em tempo linear usando busca em profundidade."
    },
    {
      text: "A concatenação de linguagens regulares é uma operação associativa.",
      answer: true,
      comment: "Certo. A concatenação de linguagens regulares é associativa: (L1 · L2) · L3 = L1 · (L2 · L3)."
    },
    {
      text: "Um autômato finito com estados inacessíveis pode ser simplificado em tempo linear.",
      answer: true,
      comment: "Certo. Estados inacessíveis podem ser identificados e removidos em tempo linear usando busca em largura."
    },
    {
      text: "A interseção de linguagens regulares é uma operação associativa.",
      answer: true,
      comment: "Certo. A interseção de linguagens regulares é associativa: (L1 ∩ L2) ∩ L3 = L1 ∩ (L2 ∩ L3)."
    },
    {
      text: "Um NFA com ε-transições pode ser convertido em um NFA sem ε-transições em tempo polinomial.",
      answer: true,
      comment: "Certo. A eliminação de ε-transições pode ser realizada em tempo polinomial usando fecho transitivo."
    },
    {
      text: "A estrela de Kleene de uma linguagem regular é uma operação idempotente.",
      answer: false,
      comment: "Errado. A estrela de Kleene não é idempotente: (L*)* = L*, mas L* ≠ L."
    },
    {
      text: "Um autômato finito com estados equivalentes pode ser minimizado em tempo polinomial.",
      answer: true,
      comment: "Certo. Estados equivalentes podem ser identificados e combinados em tempo polinomial usando algoritmos de particionamento."
    },
    {
      text: "A diferença de linguagens regulares não é uma operação associativa.",
      answer: true,
      comment: "Certo. A diferença não é associativa: (L1 - L2) - L3 ≠ L1 - (L2 - L3)."
    },
    {
      text: "Um DFA mínimo pode ser computado em tempo polinomial.",
      answer: true,
      comment: "Certo. A minimização de um DFA pode ser realizada em tempo polinomial usando algoritmos de particionamento."
    },
    {
      text: "Um NFA com n estados pode ser convertido em um DFA em tempo exponencial no pior caso.",
      answer: true,
      comment: "Certo. A construção de subconjuntos pode resultar em 2ⁿ estados, resultando em tempo exponencial."
    },
    {
      text: "A reversão de uma linguagem regular preserva a regularidade.",
      answer: true,
      comment: "Certo. A reversão de uma linguagem regular sempre resulta em uma linguagem regular."
    },
    {
      text: "Um autômato finito com estados indistinguíveis pode ser minimizado sem alterar a linguagem aceita.",
      answer: true,
      comment: "Certo. Estados indistinguíveis podem ser combinados sem alterar o comportamento do autômato."
    }
  ],
  "redes-computadores": [
    {
      text: "Uma rede em anel (ring) permite que cada nó tenha exatamente dois vizinhos para transmissão de dados.",
      answer: true,
      comment: "Certo. Em topologia em anel, cada nó se conecta diretamente a dois outros nós, formando um circuito fechado."
    },
    {
      text: "A topologia em estrela centraliza o controle de comunicação em um nó central, criando um ponto único de falha.",
      answer: true,
      comment: "Certo. A topologia em estrela depende de um hub/switch central, que se falhar, isola todos os nós conectados."
    },
    {
      text: "Redes LAN (Local Area Network) são caracterizadas por alta velocidade e baixa latência, cobrindo áreas geograficamente limitadas.",
      answer: true,
      comment: "Certo. LANs operam em áreas restritas com alta largura de banda e baixa latência, típicas de ambientes corporativos."
    },
    {
      text: "O protocolo Ethernet utiliza CSMA/CD (Carrier Sense Multiple Access with Collision Detection) para evitar colisões.",
      answer: true,
      comment: "Certo. CSMA/CD permite que múltiplos dispositivos compartilhem o meio, detectando e resolvendo colisões."
    },
    {
      text: "Uma rede em malha (mesh) completa possui n(n-1)/2 conexões diretas entre n nós.",
      answer: true,
      comment: "Certo. Em malha completa, cada nó se conecta a todos os outros, resultando em n(n-1)/2 conexões."
    },
    {
      text: "Redes WAN (Wide Area Network) utilizam tecnologias de baixa velocidade comparadas às LANs.",
      answer: false,
      comment: "Errado. WANs podem ter alta velocidade, mas geralmente apresentam maior latência devido à distância geográfica."
    },
    {
      text: "A topologia em barramento permite comunicação broadcast, onde uma transmissão é recebida por todos os nós.",
      answer: true,
      comment: "Certo. Em topologia em barramento, todos os nós compartilham o mesmo meio de transmissão."
    },
    {
      text: "O protocolo Token Ring utiliza um token que circula pela rede para controlar o acesso ao meio de transmissão.",
      answer: true,
      comment: "Certo. Token Ring usa um token que passa de nó em nó, permitindo transmissão apenas ao possuidor do token."
    },
    {
      text: "Redes MAN (Metropolitan Area Network) cobrem áreas metropolitanas com velocidades intermediárias entre LAN e WAN.",
      answer: true,
      comment: "Certo. MANs conectam múltiplas LANs em uma área metropolitana com velocidades superiores às WANs."
    },
    {
      text: "A topologia em árvore combina características de topologias em estrela e barramento.",
      answer: true,
      comment: "Certo. Topologia em árvore organiza nós hierarquicamente, combinando hubs em estrela conectados por barramentos."
    },
    {
      text: "O protocolo FDDI (Fiber Distributed Data Interface) utiliza fibra óptica em topologia em anel duplo.",
      answer: true,
      comment: "Certo. FDDI usa dois anéis de fibra óptica para redundância e alta velocidade (100 Mbps)."
    },
    {
      text: "Redes PAN (Personal Area Network) são projetadas para comunicação entre dispositivos pessoais em curta distância.",
      answer: true,
      comment: "Certo. PANs conectam dispositivos pessoais como smartphones, laptops e wearables em distâncias de até 10 metros."
    },
    {
      text: "A topologia híbrida combina múltiplas topologias para otimizar performance e confiabilidade.",
      answer: true,
      comment: "Certo. Topologias híbridas misturam diferentes tipos para aproveitar vantagens de cada uma."
    },
    {
      text: "O protocolo ATM (Asynchronous Transfer Mode) utiliza células de tamanho fixo para transmissão de dados.",
      answer: true,
      comment: "Certo. ATM usa células de 53 bytes (5 de cabeçalho, 48 de dados) para transmissão eficiente."
    },
    {
      text: "Redes CAN (Campus Area Network) conectam múltiplas LANs em um campus universitário ou corporativo.",
      answer: true,
      comment: "Certo. CANs são redes de campus que interconectam edifícios próximos com alta velocidade."
    },
    {
      text: "A topologia em malha parcial oferece redundância limitada com menor custo que malha completa.",
      answer: true,
      comment: "Certo. Malha parcial conecta alguns nós diretamente, oferecendo redundância a custo menor."
    },
    {
      text: "O protocolo Wi-Fi utiliza CSMA/CA (Carrier Sense Multiple Access with Collision Avoidance).",
      answer: true,
      comment: "Certo. Wi-Fi usa CSMA/CA para evitar colisões em redes sem fio, diferente do CSMA/CD do Ethernet."
    },
    {
      text: "Redes SAN (Storage Area Network) são dedicadas à interconexão de dispositivos de armazenamento.",
      answer: true,
      comment: "Certo. SANs são redes especializadas para conectar servidores a sistemas de armazenamento com alta performance."
    },
    {
      text: "A topologia em anel com backup oferece redundância através de um anel secundário.",
      answer: true,
      comment: "Certo. Anéis com backup usam anéis primário e secundário para garantir continuidade em caso de falha."
    },
    {
      text: "O protocolo SONET (Synchronous Optical Network) utiliza multiplexação síncrona para transmissão óptica.",
      answer: true,
      comment: "Certo. SONET padroniza transmissão digital síncrona em fibra óptica com múltiplas velocidades."
    },
    {
      text: "Redes WLAN (Wireless Local Area Network) utilizam ondas de rádio para transmissão de dados.",
      answer: true,
      comment: "Certo. WLANs usam espectro de rádio (2.4 GHz, 5 GHz) para comunicação sem fio entre dispositivos."
    },
    {
      text: "A topologia em estrela estendida conecta múltiplas topologias em estrela através de um backbone.",
      answer: true,
      comment: "Certo. Estrela estendida interconecta múltiplos hubs/switches através de um backbone central."
    },
    {
      text: "O protocolo Bluetooth utiliza frequência hopping para evitar interferência em redes PAN.",
      answer: true,
      comment: "Certo. Bluetooth usa frequency hopping spread spectrum (FHSS) para minimizar interferência."
    },
    {
      text: "Redes VPN (Virtual Private Network) criam túneis seguros sobre redes públicas.",
      answer: true,
      comment: "Certo. VPNs estabelecem conexões criptografadas através de redes públicas, simulando redes privadas."
    },
    {
      text: "A topologia em anel token ring oferece controle determinístico de acesso ao meio.",
      answer: true,
      comment: "Certo. Token Ring garante acesso determinístico através do token, evitando colisões."
    },
    {
      text: "O protocolo Frame Relay utiliza comutação de pacotes para transmissão de dados em WANs.",
      answer: true,
      comment: "Certo. Frame Relay é um protocolo de comutação de pacotes para WANs com alta eficiência."
    },
    {
      text: "Redes MANET (Mobile Ad-hoc Network) são redes sem fio auto-organizáveis sem infraestrutura fixa.",
      answer: true,
      comment: "Certo. MANETs são redes móveis ad-hoc onde nós se auto-organizam sem pontos de acesso fixos."
    },
    {
      text: "A topologia em árvore balanceada minimiza o número de saltos entre nós extremos.",
      answer: true,
      comment: "Certo. Árvores balanceadas distribuem carga uniformemente e minimizam profundidade máxima."
    },
    {
      text: "O protocolo ISDN (Integrated Services Digital Network) oferece serviços digitais integrados.",
      answer: true,
      comment: "Certo. ISDN fornece serviços de voz, dados e vídeo através de linhas digitais dedicadas."
    },
    {
      text: "Redes PON (Passive Optical Network) utilizam divisores ópticos passivos para distribuição de sinal.",
      answer: true,
      comment: "Certo. PONs usam divisores ópticos para compartilhar fibra entre múltiplos usuários."
    },
    {
      text: "A topologia em malha com redundância oferece múltiplos caminhos entre nós para alta disponibilidade.",
      answer: true,
      comment: "Certo. Malhas com redundância garantem conectividade mesmo com falhas em múltiplos links."
    },
    {
      text: "O protocolo X.25 utiliza comutação de pacotes com controle de erro em cada hop.",
      answer: true,
      comment: "Certo. X.25 implementa controle de erro em cada nó da rede, garantindo alta confiabilidade."
    },
    {
      text: "Redes SDN (Software-Defined Networking) separam o plano de controle do plano de dados.",
      answer: true,
      comment: "Certo. SDN centraliza controle de rede em software, separando decisões de encaminhamento."
    },
    {
      text: "A topologia em anel com bypass permite contornar nós falhados sem interromper a rede.",
      answer: true,
      comment: "Certo. Anéis com bypass usam switches para isolar nós falhados, mantendo conectividade."
    },
    {
      text: "O protocolo MPLS (Multiprotocol Label Switching) utiliza rótulos para comutação de pacotes.",
      answer: true,
      comment: "Certo. MPLS usa rótulos para comutação rápida de pacotes, independente do protocolo de rede."
    },
    {
      text: "Redes IoT (Internet of Things) conectam dispositivos embutidos com capacidades limitadas.",
      answer: true,
      comment: "Certo. Redes IoT interconectam sensores e atuadores com recursos computacionais limitados."
    },
    {
      text: "A topologia em estrela com redundância utiliza múltiplos hubs para eliminar ponto único de falha.",
      answer: true,
      comment: "Certo. Estrelas redundantes usam múltiplos hubs conectados para eliminar dependência de um único nó."
    },
    {
      text: "O protocolo PPP (Point-to-Point Protocol) oferece autenticação e compressão para links dedicados.",
      answer: true,
      comment: "Certo. PPP fornece autenticação, compressão e controle de erro para conexões ponto-a-ponto."
    },
    {
      text: "Redes 5G utilizam tecnologias de múltiplas antenas (MIMO) para aumentar throughput.",
      answer: true,
      comment: "Certo. 5G usa MIMO massivo e beamforming para aumentar significativamente a capacidade de rede."
    },
    {
      text: "A topologia em anel com monitoramento permite detecção e isolamento de falhas.",
      answer: true,
      comment: "Certo. Anéis com monitoramento usam nós especiais para detectar e isolar problemas na rede."
    },
    {
      text: "O protocolo HDLC (High-Level Data Link Control) oferece controle de fluxo e detecção de erros.",
      answer: true,
      comment: "Certo. HDLC implementa controle de fluxo, detecção de erros e recuperação para links confiáveis."
    },
    {
      text: "Redes LoRaWAN (Long Range Wide Area Network) são otimizadas para IoT de baixo consumo.",
      answer: true,
      comment: "Certo. LoRaWAN oferece comunicação de longo alcance com baixo consumo para aplicações IoT."
    },
    {
      text: "A topologia em malha com QoS (Quality of Service) prioriza diferentes tipos de tráfego.",
      answer: true,
      comment: "Certo. Malhas com QoS implementam mecanismos para priorizar tráfego crítico sobre não-crítico."
    },
    {
      text: "O protocolo SLIP (Serial Line Internet Protocol) é usado para conexões seriais ponto-a-ponto.",
      answer: true,
      comment: "Certo. SLIP encapsula pacotes IP para transmissão sobre links seriais simples."
    },
    {
      text: "Redes WiMAX (Worldwide Interoperability for Microwave Access) oferecem acesso sem fio de longo alcance.",
      answer: true,
      comment: "Certo. WiMAX fornece acesso de banda larga sem fio com alcance de até 50 km."
    },
    {
      text: "A topologia em anel com proteção 1+1 oferece backup completo para cada link.",
      answer: true,
      comment: "Certo. Proteção 1+1 mantém link de backup dedicado para cada link primário."
    },
    {
      text: "O protocolo LAPB (Link Access Procedure Balanced) implementa controle de erro para X.25.",
      answer: true,
      comment: "Certo. LAPB fornece controle de erro e fluxo para protocolo X.25 em redes de comutação de pacotes."
    },
    {
      text: "Redes NB-IoT (Narrowband Internet of Things) utilizam banda estreita para IoT de baixo custo.",
      answer: true,
      comment: "Certo. NB-IoT usa banda estreita (180 kHz) para comunicação IoT de baixo custo e baixo consumo."
    },
    {
      text: "A topologia em estrela com load balancing distribui tráfego entre múltiplos servidores.",
      answer: true,
      comment: "Certo. Estrelas com load balancing usam múltiplos servidores para distribuir carga de trabalho."
    },
    {
      text: "O protocolo LAPD (Link Access Procedure for D-channel) é usado em ISDN para sinalização.",
      answer: true,
      comment: "Certo. LAPD implementa controle de link para canal D (sinalização) em redes ISDN."
    },
    {
      text: "Redes Zigbee utilizam topologia em malha para comunicação de baixa potência.",
      answer: true,
      comment: "Certo. Zigbee implementa malha de baixa potência para redes de sensores e automação."
    },
    {
      text: "A topologia em anel com proteção 1:1 compartilha links de backup entre múltiplos links primários.",
      answer: true,
      comment: "Certo. Proteção 1:1 permite que um link de backup proteja múltiplos links primários."
    },
    {
      text: "O protocolo LAPF (Link Access Procedure for Frame Mode) é usado em Frame Relay.",
      answer: true,
      comment: "Certo. LAPF implementa controle de link para modo frame em redes Frame Relay."
    },
    {
      text: "Redes Sigfox oferecem conectividade IoT de ultra-longa distância com baixo throughput.",
      answer: true,
      comment: "Certo. Sigfox fornece comunicação IoT de até 50 km com throughput de 100 bps."
    },
    {
      text: "A topologia em malha com roteamento adaptativo ajusta rotas baseado em condições da rede.",
      answer: true,
      comment: "Certo. Malhas adaptativas modificam rotas dinamicamente baseado em congestionamento e falhas."
    },
    {
      text: "O protocolo LAPM (Link Access Procedure for Modems) implementa controle de erro para modems.",
      answer: true,
      comment: "Certo. LAPM fornece controle de erro e compressão para comunicação via modem."
    }
  ],
  "comutacao-interconexao": [
    {
      text: "A comutação de circuitos estabelece um caminho dedicado entre origem e destino antes da transmissão de dados.",
      answer: true,
      comment: "Certo. Comutação de circuitos reserva recursos de rede exclusivos para a duração da comunicação."
    },
    {
      text: "A comutação de pacotes permite que múltiplas conexões compartilhem o mesmo meio de transmissão simultaneamente.",
      answer: true,
      comment: "Certo. Pacotes de diferentes conexões podem ser multiplexados no mesmo link, aumentando a eficiência."
    },
    {
      text: "Um hub opera na camada física do modelo OSI, simplesmente repetindo sinais para todos os portos.",
      answer: true,
      comment: "Certo. Hubs são dispositivos da camada 1 que amplificam e retransmitem sinais para todos os portos."
    },
    {
      text: "A comutação de células utiliza unidades de dados de tamanho fixo para transmissão eficiente.",
      answer: true,
      comment: "Certo. Células de tamanho fixo (como ATM com 53 bytes) permitem processamento rápido e previsível."
    },
    {
      text: "Um switch opera na camada de enlace de dados, comutando frames baseado em endereços MAC.",
      answer: true,
      comment: "Certo. Switches da camada 2 tomam decisões de encaminhamento baseadas em endereços MAC de destino."
    },
    {
      text: "A comutação de circuitos oferece garantias de qualidade de serviço (QoS) superiores à comutação de pacotes.",
      answer: true,
      comment: "Certo. Circuitos dedicados garantem largura de banda, latência e jitter previsíveis."
    },
    {
      text: "Um roteador opera na camada de rede, comutando pacotes baseado em endereços IP.",
      answer: true,
      comment: "Certo. Roteadores da camada 3 tomam decisões de encaminhamento baseadas em endereços IP de destino."
    },
    {
      text: "A comutação de pacotes pode resultar em perda de pacotes devido ao congestionamento da rede.",
      answer: true,
      comment: "Certo. Pacotes podem ser descartados quando buffers de roteadores ficam cheios durante congestionamento."
    },
    {
      text: "Um bridge conecta redes que utilizam o mesmo protocolo de enlace de dados.",
      answer: true,
      comment: "Certo. Bridges operam na camada 2, conectando segmentos de rede que usam o mesmo protocolo."
    },
    {
      text: "A comutação de células é utilizada em tecnologias como ATM para garantir QoS em tempo real.",
      answer: true,
      comment: "Certo. ATM usa células de 53 bytes para suportar aplicações de tempo real com QoS garantida."
    },
    {
      text: "Um gateway opera em múltiplas camadas do modelo OSI, convertendo entre diferentes protocolos.",
      answer: true,
      comment: "Certo. Gateways podem operar em qualquer camada, convertendo entre protocolos incompatíveis."
    },
    {
      text: "A comutação de circuitos é ineficiente para tráfego bursty ou intermitente.",
      answer: true,
      comment: "Certo. Circuitos dedicados desperdiçam largura de banda quando não há dados para transmitir."
    },
    {
      text: "Um repetidor amplifica e regenera sinais para estender o alcance de uma rede.",
      answer: true,
      comment: "Certo. Repetidores da camada 1 amplificam sinais para compensar atenuação em cabos longos."
    },
    {
      text: "A comutação de pacotes permite roteamento dinâmico baseado em condições da rede.",
      answer: true,
      comment: "Certo. Pacotes podem ser roteados por caminhos diferentes dependendo do congestionamento."
    },
    {
      text: "Um switch de camada 3 combina funcionalidades de switch e roteador.",
      answer: true,
      comment: "Certo. Switches de camada 3 podem comutar tanto por MAC quanto por IP, oferecendo roteamento interno."
    },
    {
      text: "A comutação de células oferece latência previsível devido ao tamanho fixo das células.",
      answer: true,
      comment: "Certo. Células de tamanho fixo permitem processamento uniforme, resultando em latência previsível."
    },
    {
      text: "Um hub cria um domínio de colisão único, limitando a performance em redes grandes.",
      answer: true,
      comment: "Certo. Hubs compartilham o meio de transmissão, criando um domínio de colisão que limita throughput."
    },
    {
      text: "A comutação de circuitos é adequada para aplicações de tempo real como voz e vídeo.",
      answer: true,
      comment: "Certo. Circuitos dedicados garantem largura de banda constante necessária para aplicações de tempo real."
    },
    {
      text: "Um bridge pode filtrar tráfego baseado em endereços MAC para reduzir congestionamento.",
      answer: true,
      comment: "Certo. Bridges podem encaminhar frames apenas para portos necessários, reduzindo tráfego desnecessário."
    },
    {
      text: "A comutação de pacotes permite multiplexação estatística, aumentando a eficiência da rede.",
      answer: true,
      comment: "Certo. Múltiplas conexões podem compartilhar o mesmo link, aproveitando períodos de silêncio."
    },
    {
      text: "Um roteador pode implementar políticas de QoS baseadas em endereços IP ou portas.",
      answer: true,
      comment: "Certo. Roteadores podem priorizar tráfego baseado em critérios como endereço IP, porta ou protocolo."
    },
    {
      text: "A comutação de células é utilizada em redes SONET/SDH para transmissão síncrona.",
      answer: true,
      comment: "Certo. SONET/SDH usa células de tamanho fixo para transmissão síncrona de alta velocidade."
    },
    {
      text: "Um switch cria domínios de colisão separados, melhorando a performance da rede.",
      answer: true,
      comment: "Certo. Switches isolam colisões por porta, criando domínios de colisão menores e mais eficientes."
    },
    {
      text: "A comutação de circuitos requer estabelecimento de conexão antes da transmissão de dados.",
      answer: true,
      comment: "Certo. Circuitos devem ser estabelecidos através de sinalização antes que dados possam ser transmitidos."
    },
    {
      text: "Um gateway de aplicação pode converter entre diferentes formatos de dados.",
      answer: true,
      comment: "Certo. Gateways de aplicação podem converter entre formatos como ASCII/EBCDIC ou protocolos de email."
    },
    {
      text: "A comutação de pacotes permite que diferentes tipos de tráfego compartilhem a mesma infraestrutura.",
      answer: true,
      comment: "Certo. Voz, dados e vídeo podem compartilhar a mesma rede de pacotes com diferentes prioridades."
    },
    {
      text: "Um repetidor pode conectar segmentos de rede que usam diferentes meios físicos.",
      answer: true,
      comment: "Certo. Repetidores podem converter entre diferentes meios como cobre e fibra óptica."
    },
    {
      text: "A comutação de células oferece melhor controle de congestionamento que comutação de pacotes.",
      answer: true,
      comment: "Certo. Células de tamanho fixo permitem controle mais preciso de congestionamento e QoS."
    },
    {
      text: "Um bridge pode implementar spanning tree protocol para evitar loops na rede.",
      answer: true,
      comment: "Certo. Bridges podem usar STP para criar topologia sem loops, garantindo conectividade sem broadcast storms."
    },
    {
      text: "A comutação de circuitos é utilizada em redes telefônicas tradicionais (PSTN).",
      answer: true,
      comment: "Certo. PSTN usa comutação de circuitos para estabelecer conexões dedicadas entre chamadas telefônicas."
    },
    {
      text: "Um switch pode implementar VLANs para segmentar logicamente a rede.",
      answer: true,
      comment: "Certo. Switches podem criar VLANs para isolar tráfego e melhorar segurança e performance."
    },
    {
      text: "A comutação de pacotes permite que redes heterogêneas se comuniquem através de roteadores.",
      answer: true,
      comment: "Certo. Roteadores podem conectar redes com diferentes tecnologias de enlace de dados."
    },
    {
      text: "Um gateway de protocolo pode converter entre IPv4 e IPv6.",
      answer: true,
      comment: "Certo. Gateways podem traduzir entre diferentes versões do protocolo IP."
    },
    {
      text: "A comutação de células é utilizada em redes ATM para suportar diferentes classes de serviço.",
      answer: true,
      comment: "Certo. ATM define classes de serviço (CBR, VBR, ABR, UBR) para diferentes tipos de aplicação."
    },
    {
      text: "Um hub não pode filtrar tráfego, enviando todos os frames para todos os portos.",
      answer: true,
      comment: "Certo. Hubs são dispositivos simples que retransmitem todos os sinais para todos os portos."
    },
    {
      text: "A comutação de circuitos oferece latência constante durante a transmissão de dados.",
      answer: true,
      comment: "Certo. Circuitos dedicados garantem latência previsível sem variação (jitter) durante a transmissão."
    },
    {
      text: "Um roteador pode implementar NAT (Network Address Translation) para mascarar endereços privados.",
      answer: true,
      comment: "Certo. Roteadores podem traduzir endereços IP privados para endereços públicos válidos."
    },
    {
      text: "A comutação de pacotes permite que redes com diferentes velocidades se comuniquem.",
      answer: true,
      comment: "Certo. Roteadores podem conectar redes com diferentes capacidades de transmissão."
    },
    {
      text: "Um bridge pode aprender endereços MAC automaticamente para otimizar o encaminhamento.",
      answer: true,
      comment: "Certo. Bridges transparentes aprendem endereços MAC observando tráfego e atualizam tabelas de encaminhamento."
    },
    {
      text: "A comutação de células é utilizada em redes de alta velocidade como backbone de operadoras.",
      answer: true,
      comment: "Certo. ATM e SONET são usados em backbones de operadoras para transmissão de alta velocidade."
    },
    {
      text: "Um switch pode implementar port mirroring para monitoramento de tráfego.",
      answer: true,
      comment: "Certo. Switches podem espelhar tráfego de uma porta para outra para análise e monitoramento."
    },
    {
      text: "A comutação de circuitos é adequada para aplicações que requerem largura de banda garantida.",
      answer: true,
      comment: "Certo. Circuitos dedicados garantem largura de banda constante necessária para aplicações críticas."
    },
    {
      text: "Um gateway de segurança pode implementar firewalls para filtrar tráfego malicioso.",
      answer: true,
      comment: "Certo. Gateways podem implementar políticas de segurança para bloquear tráfego não autorizado."
    },
    {
      text: "A comutação de pacotes permite que redes com diferentes topologias se comuniquem.",
      answer: true,
      comment: "Certo. Roteadores podem conectar redes com diferentes topologias (anel, estrela, barramento, etc.)."
    },
    {
      text: "Um repetidor pode regenerar sinais digitais para compensar atenuação e ruído.",
      answer: true,
      comment: "Certo. Repetidores regeneram sinais digitais, eliminando ruído acumulado em cabos longos."
    },
    {
      text: "A comutação de células oferece melhor escalabilidade que comutação de circuitos para dados.",
      answer: true,
      comment: "Certo. Células permitem melhor utilização de recursos compartilhados comparado a circuitos dedicados."
    },
    {
      text: "Um bridge pode implementar filtros para bloquear tráfego baseado em endereços MAC.",
      answer: true,
      comment: "Certo. Bridges podem filtrar frames baseado em endereços MAC de origem ou destino."
    },
    {
      text: "A comutação de circuitos é utilizada em redes ISDN para serviços digitais integrados.",
      answer: true,
      comment: "Certo. ISDN usa comutação de circuitos para estabelecer conexões digitais dedicadas."
    },
    {
      text: "Um switch pode implementar trunking para agregar múltiplos links físicos.",
      answer: true,
      comment: "Certo. Switches podem usar protocolos como LACP para agregar múltiplos links em um link lógico."
    },
    {
      text: "A comutação de pacotes permite que redes com diferentes protocolos se comuniquem.",
      answer: true,
      comment: "Certo. Gateways podem traduzir entre diferentes protocolos de rede."
    },
    {
      text: "Um gateway de email pode converter entre protocolos SMTP, POP3 e IMAP.",
      answer: true,
      comment: "Certo. Gateways de email podem traduzir entre diferentes protocolos de correio eletrônico."
    },
    {
      text: "A comutação de células é utilizada em redes de acesso para garantir QoS em FTTH.",
      answer: true,
      comment: "Certo. Tecnologias como GPON usam células para garantir QoS em redes de fibra até o lar."
    },
    {
      text: "Um hub não pode aprender endereços MAC, limitando sua funcionalidade.",
      answer: true,
      comment: "Certo. Hubs operam apenas na camada física, não processando endereços MAC."
    },
    {
      text: "A comutação de circuitos oferece melhor segurança que comutação de pacotes.",
      answer: true,
      comment: "Certo. Circuitos dedicados oferecem isolamento natural, reduzindo riscos de interceptação."
    },
    {
      text: "Um roteador pode implementar políticas de roteamento baseadas em QoS.",
      answer: true,
      comment: "Certo. Roteadores podem escolher rotas baseado em critérios de QoS como largura de banda ou latência."
    },
    {
      text: "A comutação de pacotes permite que redes com diferentes MTUs se comuniquem.",
      answer: true,
      comment: "Certo. Roteadores podem fragmentar pacotes para acomodar diferentes tamanhos de MTU."
    },
    {
      text: "Um bridge pode implementar load balancing para distribuir tráfego entre múltiplos links.",
      answer: true,
      comment: "Certo. Bridges podem distribuir tráfego entre múltiplos caminhos para otimizar utilização de links."
    },
    {
      text: "A comutação de células é utilizada em redes de transporte para multiplexação eficiente.",
      answer: true,
      comment: "Certo. SONET/SDH usa células para multiplexar múltiplos canais em uma única fibra óptica."
    },
    {
      text: "Um switch pode implementar QoS para priorizar diferentes tipos de tráfego.",
      answer: true,
      comment: "Certo. Switches podem implementar mecanismos como 802.1p para priorizar tráfego crítico."
    },
    {
      text: "A comutação de circuitos é adequada para aplicações que não toleram jitter.",
      answer: true,
      comment: "Certo. Circuitos dedicados garantem latência constante, essencial para aplicações sensíveis a jitter."
    },
    {
      text: "Um gateway de proxy pode cachear conteúdo para reduzir tráfego de rede.",
      answer: true,
      comment: "Certo. Gateways proxy podem armazenar conteúdo frequentemente acessado para reduzir carga na rede."
    },
    {
      text: "A comutação de pacotes permite que redes com diferentes velocidades se adaptem dinamicamente.",
      answer: true,
      comment: "Certo. Protocolos de controle de congestionamento permitem adaptação dinâmica à capacidade da rede."
    },
    {
      text: "Um repetidor pode conectar redes que usam diferentes codificações de sinal.",
      answer: true,
      comment: "Certo. Repetidores podem converter entre diferentes codificações como Manchester e NRZ."
    },
    {
      text: "A comutação de células oferece melhor controle de fluxo que comutação de pacotes.",
      answer: true,
      comment: "Certo. Células de tamanho fixo permitem controle mais granular de fluxo e congestionamento."
    },
    {
      text: "Um bridge pode implementar spanning tree para criar topologia sem loops.",
      answer: true,
      comment: "Certo. Bridges usam STP para calcular árvore de spanning que elimina loops mantendo conectividade."
    },
    {
      text: "A comutação de circuitos é utilizada em redes TDM para multiplexação temporal.",
      answer: true,
      comment: "Certo. TDM usa comutação de circuitos para alocar slots de tempo dedicados para cada conexão."
    },
    {
      text: "Um switch pode implementar port security para controlar acesso baseado em MAC.",
      answer: true,
      comment: "Certo. Switches podem restringir acesso a portas baseado em endereços MAC autorizados."
    },
    {
      text: "A comutação de pacotes permite que redes com diferentes políticas de segurança se comuniquem.",
      answer: true,
      comment: "Certo. Gateways podem implementar políticas de segurança para conectar redes com diferentes requisitos."
    },
    {
      text: "Um gateway de aplicação pode converter entre diferentes formatos de arquivo.",
      answer: true,
      comment: "Certo. Gateways podem traduzir entre formatos como JPEG/PNG ou ASCII/Unicode."
    },
    {
      text: "A comutação de células é utilizada em redes de acesso wireless para garantir QoS.",
      answer: true,
      comment: "Certo. Tecnologias como WiMAX podem usar células para garantir QoS em redes de acesso sem fio."
    },
    {
      text: "Um hub não pode implementar VLANs, limitando a segmentação da rede.",
      answer: true,
      comment: "Certo. Hubs operam apenas na camada física, não suportando funcionalidades de camada 2 como VLANs."
    },
    {
      text: "A comutação de circuitos oferece melhor performance para aplicações de tempo real.",
      answer: true,
      comment: "Certo. Circuitos dedicados garantem latência e jitter mínimos essenciais para aplicações de tempo real."
    },
    {
      text: "Um roteador pode implementar multicast para distribuir tráfego para múltiplos destinos.",
      answer: true,
      comment: "Certo. Roteadores podem encaminhar tráfego multicast para múltiplos destinos simultaneamente."
    },
    {
      text: "A comutação de pacotes permite que redes com diferentes topologias se adaptem dinamicamente.",
      answer: true,
      comment: "Certo. Protocolos de roteamento dinâmico permitem adaptação automática a mudanças na topologia."
    },
    {
      text: "Um bridge pode implementar filtros para bloquear broadcast storms.",
      answer: true,
      comment: "Certo. Bridges podem filtrar frames de broadcast para prevenir storms que degradam performance."
    },
    {
      text: "A comutação de células é utilizada em redes de backbone para multiplexação eficiente.",
      answer: true,
      comment: "Certo. Backbones de operadoras usam células para multiplexar múltiplos serviços em uma única infraestrutura."
    },
    {
      text: "Um switch pode implementar storm control para limitar tráfego de broadcast.",
      answer: true,
      comment: "Certo. Switches podem limitar taxa de broadcast para prevenir storms que degradam performance da rede."
    },
    {
      text: "A comutação de circuitos é adequada para aplicações que requerem sincronização precisa.",
      answer: true,
      comment: "Certo. Circuitos dedicados garantem sincronização precisa necessária para aplicações como sincronização de relógio."
    },
    {
      text: "Um gateway de protocolo pode converter entre diferentes versões de protocolos de roteamento.",
      answer: true,
      comment: "Certo. Gateways podem traduzir entre diferentes versões de protocolos como OSPFv2/OSPFv3."
    },
    {
      text: "A comutação de pacotes permite que redes com diferentes políticas de QoS se comuniquem.",
      answer: true,
      comment: "Certo. Gateways podem mapear diferentes políticas de QoS entre redes heterogêneas."
    },
    {
      text: "Um repetidor pode conectar redes que usam diferentes níveis de tensão de sinal.",
      answer: true,
      comment: "Certo. Repetidores podem converter entre diferentes níveis de tensão como TTL e RS-232."
    },
    {
      text: "A comutação de células oferece melhor controle de congestionamento que comutação de pacotes.",
      answer: true,
      comment: "Certo. Células de tamanho fixo permitem controle mais preciso de congestionamento e prevenção de deadlock."
    },
    {
      text: "Um bridge pode implementar load balancing para distribuir tráfego entre múltiplos caminhos.",
      answer: true,
      comment: "Certo. Bridges podem usar múltiplos caminhos para distribuir carga e melhorar throughput da rede."
    },
    {
      text: "A comutação de circuitos é utilizada em redes de telefonia móvel para estabelecer chamadas.",
      answer: true,
      comment: "Certo. Redes móveis tradicionais usam comutação de circuitos para estabelecer conexões dedicadas para chamadas."
    },
    {
      text: "Um switch pode implementar port aggregation para aumentar largura de banda entre switches.",
      answer: true,
      comment: "Certo. Switches podem agregar múltiplos links físicos em um link lógico de maior capacidade."
    },
    {
      text: "A comutação de pacotes permite que redes com diferentes velocidades se adaptem dinamicamente.",
      answer: true,
      comment: "Certo. Protocolos de controle de fluxo permitem adaptação dinâmica à capacidade disponível."
    },
    {
      text: "Um gateway de segurança pode implementar VPN para criar túneis seguros.",
      answer: true,
      comment: "Certo. Gateways podem estabelecer túneis VPN criptografados para comunicação segura."
    },
    {
      text: "A comutação de células é utilizada em redes de acesso para garantir QoS em FTTC.",
      answer: true,
      comment: "Certo. Tecnologias como VDSL2 podem usar células para garantir QoS em redes de fibra até o cabinet."
    },
    {
      text: "Um hub não pode implementar port mirroring, limitando o monitoramento de tráfego.",
      answer: true,
      comment: "Certo. Hubs operam apenas na camada física, não suportando funcionalidades de monitoramento como port mirroring."
    },
    {
      text: "A comutação de circuitos oferece melhor confiabilidade que comutação de pacotes para aplicações críticas.",
      answer: true,
      comment: "Certo. Circuitos dedicados oferecem garantias de entrega superiores para aplicações críticas."
    },
    {
      text: "Um roteador pode implementar MPLS para comutação de pacotes baseada em rótulos.",
      answer: true,
      comment: "Certo. Roteadores podem usar MPLS para comutação rápida de pacotes baseada em rótulos em vez de endereços IP."
    },
    {
      text: "A comutação de pacotes permite que redes com diferentes políticas de segurança se comuniquem.",
      answer: true,
      comment: "Certo. Gateways podem implementar políticas de segurança para conectar redes com diferentes requisitos de segurança."
    },
    {
      text: "Um bridge pode implementar filtros para bloquear tráfego baseado em protocolos específicos.",
      answer: true,
      comment: "Certo. Bridges podem filtrar frames baseado em campos de protocolo além de endereços MAC."
    },
    {
      text: "A comutação de células é utilizada em redes de transporte para multiplexação estatística.",
      answer: true,
      comment: "Certo. Células permitem multiplexação estatística eficiente em redes de transporte de alta velocidade."
    },
    {
      text: "Um switch pode implementar 802.1x para autenticação baseada em portas.",
      answer: true,
      comment: "Certo. Switches podem usar 802.1x para autenticar dispositivos antes de permitir acesso à rede."
    },
    {
      text: "A comutação de circuitos é adequada para aplicações que requerem largura de banda garantida.",
      answer: true,
      comment: "Certo. Circuitos dedicados garantem largura de banda constante necessária para aplicações que não toleram variação."
    },
    {
      text: "Um gateway de aplicação pode converter entre diferentes codificações de caracteres.",
      answer: true,
      comment: "Certo. Gateways podem traduzir entre codificações como UTF-8, ASCII, EBCDIC para compatibilidade."
    },
    {
      text: "A comutação de pacotes permite que redes com diferentes topologias se adaptem dinamicamente.",
      answer: true,
      comment: "Certo. Protocolos de roteamento dinâmico permitem que redes se adaptem automaticamente a mudanças na topologia."
    },
    {
      text: "Um repetidor pode conectar redes que usam diferentes frequências de clock.",
      answer: true,
      comment: "Certo. Repetidores podem sincronizar sinais entre redes com diferentes frequências de operação."
    },
    {
      text: "A comutação de células oferece melhor escalabilidade que comutação de circuitos para dados.",
      answer: true,
      comment: "Certo. Células permitem melhor utilização de recursos compartilhados comparado a circuitos dedicados."
    },
    {
      text: "Um bridge pode implementar spanning tree para criar topologia sem loops.",
      answer: true,
      comment: "Certo. Bridges usam STP para calcular árvore de spanning que elimina loops mantendo conectividade."
    },
    {
      text: "A comutação de circuitos é utilizada em redes de telefonia IP para estabelecer chamadas.",
      answer: true,
      comment: "Certo. VoIP pode usar comutação de circuitos virtuais para estabelecer conexões dedicadas para chamadas."
    },
    {
      text: "Um switch pode implementar QoS para priorizar diferentes tipos de tráfego.",
      answer: true,
      comment: "Certo. Switches podem implementar mecanismos como 802.1p para priorizar tráfego crítico sobre não-crítico."
    },
    {
      text: "A comutação de pacotes permite que redes com diferentes políticas de QoS se comuniquem.",
      answer: true,
      comment: "Certo. Gateways podem mapear diferentes políticas de QoS entre redes heterogêneas."
    },
    {
      text: "Um gateway de segurança pode implementar IDS/IPS para detectar e prevenir ataques.",
      answer: true,
      comment: "Certo. Gateways podem implementar sistemas de detecção/prevenção de intrusão para proteger a rede."
    },
    {
      text: "A comutação de células é utilizada em redes de acesso para garantir QoS em FTTB.",
      answer: true,
      comment: "Certo. Tecnologias como GPON podem usar células para garantir QoS em redes de fibra até o edifício."
    },
    {
      text: "Um hub não pode implementar VLANs, limitando a segmentação da rede.",
      answer: true,
      comment: "Certo. Hubs operam apenas na camada física, não suportando funcionalidades de camada 2 como VLANs."
    },
    {
      text: "A comutação de circuitos oferece melhor performance para aplicações de tempo real.",
      answer: true,
      comment: "Certo. Circuitos dedicados garantem latência e jitter mínimos essenciais para aplicações de tempo real."
    },
    {
      text: "Um roteador pode implementar multicast para distribuir tráfego para múltiplos destinos.",
      answer: true,
      comment: "Certo. Roteadores podem encaminhar tráfego multicast para múltiplos destinos simultaneamente."
    },
    {
      text: "A comutação de pacotes permite que redes com diferentes topologias se adaptem dinamicamente.",
      answer: true,
      comment: "Certo. Protocolos de roteamento dinâmico permitem adaptação automática a mudanças na topologia."
    },
    {
      text: "Um bridge pode implementar filtros para bloquear broadcast storms.",
      answer: true,
      comment: "Certo. Bridges podem filtrar frames de broadcast para prevenir storms que degradam performance."
    },
    {
      text: "A comutação de células é utilizada em redes de backbone para multiplexação eficiente.",
      answer: true,
      comment: "Certo. Backbones de operadoras usam células para multiplexar múltiplos serviços em uma única infraestrutura."
    },
    {
      text: "Um switch pode implementar storm control para limitar tráfego de broadcast.",
      answer: true,
      comment: "Certo. Switches podem limitar taxa de broadcast para prevenir storms que degradam performance da rede."
    },
    {
      text: "A comutação de circuitos é adequada para aplicações que requerem sincronização precisa.",
      answer: true,
      comment: "Certo. Circuitos dedicados garantem sincronização precisa necessária para aplicações como sincronização de relógio."
    },
    {
      text: "Um gateway de protocolo pode converter entre diferentes versões de protocolos de roteamento.",
      answer: true,
      comment: "Certo. Gateways podem traduzir entre diferentes versões de protocolos como OSPFv2/OSPFv3."
    },
    {
      text: "A comutação de pacotes permite que redes com diferentes políticas de QoS se comuniquem.",
      answer: true,
      comment: "Certo. Gateways podem mapear diferentes políticas de QoS entre redes heterogêneas."
    },
    {
      text: "Um repetidor pode conectar redes que usam diferentes níveis de tensão de sinal.",
      answer: true,
      comment: "Certo. Repetidores podem converter entre diferentes níveis de tensão como TTL e RS-232."
    },
    {
      text: "A comutação de células oferece melhor controle de congestionamento que comutação de pacotes.",
      answer: true,
      comment: "Certo. Células de tamanho fixo permitem controle mais preciso de congestionamento e prevenção de deadlock."
    },
    {
      text: "Um bridge pode implementar load balancing para distribuir tráfego entre múltiplos caminhos.",
      answer: true,
      comment: "Certo. Bridges podem usar múltiplos caminhos para distribuir carga e melhorar throughput da rede."
    },
    {
      text: "A comutação de circuitos é utilizada em redes de telefonia móvel para estabelecer chamadas.",
      answer: true,
      comment: "Certo. Redes móveis tradicionais usam comutação de circuitos para estabelecer conexões dedicadas para chamadas."
    },
    {
      text: "Um switch pode implementar port aggregation para aumentar largura de banda entre switches.",
      answer: true,
      comment: "Certo. Switches podem agregar múltiplos links físicos em um link lógico de maior capacidade."
    },
    {
      text: "A comutação de pacotes permite que redes com diferentes velocidades se adaptem dinamicamente.",
      answer: true,
      comment: "Certo. Protocolos de controle de fluxo permitem adaptação dinâmica à capacidade disponível."
    },
    {
      text: "Um gateway de segurança pode implementar VPN para criar túneis seguros.",
      answer: true,
      comment: "Certo. Gateways podem estabelecer túneis VPN criptografados para comunicação segura."
    },
    {
      text: "A comutação de células é utilizada em redes de acesso para garantir QoS em FTTC.",
      answer: true,
      comment: "Certo. Tecnologias como VDSL2 podem usar células para garantir QoS em redes de fibra até o cabinet."
    },
    {
      text: "Um hub não pode implementar port mirroring, limitando o monitoramento de tráfego.",
      answer: true,
      comment: "Certo. Hubs operam apenas na camada física, não suportando funcionalidades de monitoramento como port mirroring."
    },
    {
      text: "A comutação de circuitos oferece melhor confiabilidade que comutação de pacotes para aplicações críticas.",
      answer: true,
      comment: "Certo. Circuitos dedicados oferecem garantias de entrega superiores para aplicações críticas."
    },
    {
      text: "Um roteador pode implementar MPLS para comutação de pacotes baseada em rótulos.",
      answer: true,
      comment: "Certo. Roteadores podem usar MPLS para comutação rápida de pacotes baseada em rótulos em vez de endereços IP."
    },
    {
      text: "A comutação de pacotes permite que redes com diferentes políticas de segurança se comuniquem.",
      answer: true,
      comment: "Certo. Gateways podem implementar políticas de segurança para conectar redes com diferentes requisitos de segurança."
    },
    {
      text: "Um bridge pode implementar filtros para bloquear tráfego baseado em protocolos específicos.",
      answer: true,
      comment: "Certo. Bridges podem filtrar frames baseado em campos de protocolo além de endereços MAC."
    },
    {
      text: "A comutação de células é utilizada em redes de transporte para multiplexação estatística.",
      answer: true,
      comment: "Certo. Células permitem multiplexação estatística eficiente em redes de transporte de alta velocidade."
    },
    {
      text: "Um switch pode implementar 802.1x para autenticação baseada em portas.",
      answer: true,
      comment: "Certo. Switches podem usar 802.1x para autenticar dispositivos antes de permitir acesso à rede."
    },
    {
      text: "A comutação de circuitos é adequada para aplicações que requerem largura de banda garantida.",
      answer: true,
      comment: "Certo. Circuitos dedicados garantem largura de banda constante necessária para aplicações que não toleram variação."
    },
    {
      text: "Um gateway de aplicação pode converter entre diferentes codificações de caracteres.",
      answer: true,
      comment: "Certo. Gateways podem traduzir entre codificações como UTF-8, ASCII, EBCDIC para compatibilidade."
    },
    {
      text: "A comutação de pacotes permite que redes com diferentes topologias se adaptem dinamicamente.",
      answer: true,
      comment: "Certo. Protocolos de roteamento dinâmico permitem que redes se adaptem automaticamente a mudanças na topologia."
    },
    {
      text: "Um repetidor pode conectar redes que usam diferentes frequências de clock.",
      answer: true,
      comment: "Certo. Repetidores podem sincronizar sinais entre redes com diferentes frequências de operação."
    },
    {
      text: "A comutação de células oferece melhor escalabilidade que comutação de circuitos para dados.",
      answer: true,
      comment: "Certo. Células permitem melhor utilização de recursos compartilhados comparado a circuitos dedicados."
    },
    {
      text: "Um bridge pode implementar spanning tree para criar topologia sem loops.",
      answer: true,
      comment: "Certo. Bridges usam STP para calcular árvore de spanning que elimina loops mantendo conectividade."
    },
    {
      text: "A comutação de circuitos é utilizada em redes de telefonia IP para estabelecer chamadas.",
      answer: true,
      comment: "Certo. VoIP pode usar comutação de circuitos virtuais para estabelecer conexões dedicadas para chamadas."
    },
    {
      text: "Um switch pode implementar QoS para priorizar diferentes tipos de tráfego.",
      answer: true,
      comment: "Certo. Switches podem implementar mecanismos como 802.1p para priorizar tráfego crítico sobre não-crítico."
    },
    {
      text: "A comutação de pacotes permite que redes com diferentes políticas de QoS se comuniquem.",
      answer: true,
      comment: "Certo. Gateways podem mapear diferentes políticas de QoS entre redes heterogêneas."
    },
    {
      text: "Um gateway de segurança pode implementar IDS/IPS para detectar e prevenir ataques.",
      answer: true,
      comment: "Certo. Gateways podem implementar sistemas de detecção/prevenção de intrusão para proteger a rede."
    },
    {
      text: "A comutação de células é utilizada em redes de acesso para garantir QoS em FTTB.",
      answer: true,
      comment: "Certo. Tecnologias como GPON podem usar células para garantir QoS em redes de fibra até o edifício."
    }
  ],
  "iso27001-27002": [
    {
      text: "A ISO/IEC 27001:2022 define requisitos para um Sistema de Gestão de Segurança da Informação (SGSI).",
      answer: true,
      comment: "Certo. A norma especifica requisitos para estabelecer, implementar, manter e melhorar continuamente um SGSI."
    },
    {
      text: "A ISO/IEC 27002:2022 é uma norma obrigatória para todas as organizações brasileiras.",
      answer: false,
      comment: "Errado. A ISO/IEC 27002:2022 é uma norma de diretrizes, não obrigatória. A certificação é voluntária."
    },
    {
      text: "A abordagem baseada em risco é central para a implementação da ISO/IEC 27001:2022.",
      answer: true,
      comment: "Certo. A identificação, avaliação e tratamento de riscos são fundamentais para o SGSI."
    },
    {
      text: "A ISO/IEC 27001:2022 exige que apenas o gerente de TI seja responsável pela segurança da informação.",
      answer: false,
      comment: "Errado. A norma exige o comprometimento da alta direção e envolvimento de toda a organização."
    },
    {
      text: "A ISO/IEC 27002:2022 organiza os controles de segurança em temas como organizacional, pessoas, físicos e tecnológicos.",
      answer: true,
      comment: "Certo. A 27002 agrupa controles em domínios temáticos para facilitar a implementação."
    },
    {
      text: "A certificação ISO/IEC 27001:2022 é válida permanentemente após a primeira auditoria.",
      answer: false,
      comment: "Errado. A certificação tem validade limitada e requer auditorias de acompanhamento e recertificação."
    },
    {
      text: "A ISO/IEC 27001:2022 prevê a realização de auditorias internas periódicas do SGSI.",
      answer: true,
      comment: "Certo. Auditorias internas são exigidas para avaliar a conformidade e eficácia do SGSI."
    },
    {
      text: "A ISO/IEC 27002:2022 não aborda controles para segurança em ambientes de trabalho remoto.",
      answer: false,
      comment: "Errado. A norma inclui controles para proteção de informações em ambientes de trabalho remoto."
    },
    {
      text: "A ISO/IEC 27002:2022 recomenda o uso de criptografia para proteção de informações sensíveis.",
      answer: true,
      comment: "Certo. O uso de criptografia é um dos controles sugeridos para proteção de dados."
    },
    {
      text: "A ISO/IEC 27001:2022 exige que todos os incidentes de segurança sejam comunicados imediatamente à autoridade nacional.",
      answer: false,
      comment: "Errado. A norma exige comunicação interna e tratamento dos incidentes, mas não obriga notificação à autoridade nacional, exceto se houver exigência legal."
    },
    {
      text: "A ISO/IEC 27001:2022 exige a definição de uma política de segurança da informação.",
      answer: true,
      comment: "Certo. A política de segurança é um requisito fundamental da norma."
    },
    {
      text: "A ISO/IEC 27002:2022 é uma norma de certificação obrigatória para empresas de tecnologia.",
      answer: false,
      comment: "Errado. A 27002 é uma norma de diretrizes, não de certificação obrigatória."
    },
    {
      text: "A ISO/IEC 27001:2022 prevê a realização de análise de riscos de segurança da informação.",
      answer: true,
      comment: "Certo. A análise de riscos é um processo fundamental do SGSI."
    },
    {
      text: "A ISO/IEC 27002:2022 não aborda controles para proteção contra malware.",
      answer: false,
      comment: "Errado. A norma inclui controles específicos para proteção contra malware."
    },
    {
      text: "A ISO/IEC 27001:2022 exige a definição de objetivos de segurança da informação.",
      answer: true,
      comment: "Certo. A definição de objetivos é parte do planejamento do SGSI."
    },
    {
      text: "A certificação ISO/IEC 27001:2022 pode ser obtida apenas por organizações do setor público.",
      answer: false,
      comment: "Errado. A certificação está disponível para organizações de qualquer setor ou porte."
    },
    {
      text: "A ISO/IEC 27002:2022 inclui controles para gestão de acesso lógico.",
      answer: true,
      comment: "Certo. A gestão de acesso lógico é um dos controles abordados pela norma."
    },
    {
      text: "A ISO/IEC 27001:2022 não exige treinamento de funcionários em segurança da informação.",
      answer: false,
      comment: "Errado. A conscientização e treinamento são requisitos da norma."
    },
    {
      text: "A ISO/IEC 27002:2022 recomenda a implementação de controles de backup e recuperação.",
      answer: true,
      comment: "Certo. A proteção de dados inclui controles de backup e recuperação."
    },
    {
      text: "A ISO/IEC 27001:2022 exige que apenas o departamento de TI seja responsável pela segurança.",
      answer: false,
      comment: "Errado. A segurança da informação é responsabilidade de toda a organização."
    },
    {
      text: "A ISO/IEC 27002:2022 aborda controles para segurança em desenvolvimento de software.",
      answer: true,
      comment: "Certo. A norma inclui controles para desenvolvimento seguro de aplicações."
    },
    {
      text: "A ISO/IEC 27001:2022 não prevê a realização de revisões de gestão do SGSI.",
      answer: false,
      comment: "Errado. A revisão de gestão é um requisito da norma para avaliar o SGSI."
    },
    {
      text: "A ISO/IEC 27002:2022 inclui controles para proteção física de ativos de informação.",
      answer: true,
      comment: "Certo. A proteção física é um dos domínios de controle da norma."
    },
    {
      text: "A ISO/IEC 27001:2022 exige que todos os incidentes sejam reportados à polícia federal.",
      answer: false,
      comment: "Errado. A norma exige tratamento interno de incidentes, não notificação obrigatória à polícia."
    },
    {
      text: "A ISO/IEC 27002:2022 recomenda a implementação de controles de criptografia.",
      answer: true,
      comment: "Certo. A criptografia é um dos controles de proteção recomendados."
    },
    {
      text: "A ISO/IEC 27001:2022 é aplicável apenas a organizações com mais de 100 funcionários.",
      answer: false,
      comment: "Errado. A norma é aplicável a organizações de qualquer porte."
    },
    {
      text: "A ISO/IEC 27002:2022 aborda controles para gestão de fornecedores e terceiros.",
      answer: true,
      comment: "Certo. A gestão de relacionamentos com fornecedores é um controle da norma."
    },
    {
      text: "A ISO/IEC 27001:2022 não exige a definição de responsabilidades para segurança da informação.",
      answer: false,
      comment: "Errado. A definição de responsabilidades é um requisito da norma."
    },
    {
      text: "A ISO/IEC 27002:2022 inclui controles para proteção contra ataques de engenharia social.",
      answer: true,
      comment: "Certo. A conscientização e treinamento incluem proteção contra engenharia social."
    },
    {
      text: "A ISO/IEC 27001:2022 exige que todos os sistemas sejam auditados diariamente.",
      answer: false,
      comment: "Errado. A frequência de auditorias é definida pela organização baseada no risco."
    },
    {
      text: "A ISO/IEC 27002:2022 aborda controles para gestão de vulnerabilidades técnicas.",
      answer: true,
      comment: "Certo. A gestão de vulnerabilidades é um controle importante da norma."
    },
    {
      text: "A ISO/IEC 27001:2022 não prevê a realização de testes de penetração.",
      answer: false,
      comment: "Errado. Testes de segurança, incluindo testes de penetração, são recomendados."
    },
    {
      text: "A ISO/IEC 27002:2022 inclui controles para proteção de dados pessoais.",
      answer: true,
      comment: "Certo. A proteção de dados pessoais é abordada pelos controles da norma."
    },
    {
      text: "A ISO/IEC 27001:2022 exige que apenas executivos tenham acesso a informações confidenciais.",
      answer: false,
      comment: "Errado. O acesso é baseado na necessidade de trabalho, não na hierarquia."
    },
    {
      text: "A ISO/IEC 27002:2022 aborda controles para segurança em redes sem fio.",
      answer: true,
      comment: "Certo. A segurança de redes, incluindo sem fio, é um controle da norma."
    },
    {
      text: "A ISO/IEC 27001:2022 não exige a documentação de procedimentos de segurança.",
      answer: false,
      comment: "Errado. A documentação é um requisito fundamental da norma."
    },
    {
      text: "A ISO/IEC 27002:2022 inclui controles para gestão de configuração de sistemas.",
      answer: true,
      comment: "Certo. A gestão de configuração é um controle para proteção de ativos."
    },
    {
      text: "A ISO/IEC 27001:2022 exige que todos os funcionários sejam especialistas em segurança.",
      answer: false,
      comment: "Errado. A norma exige conscientização, não especialização técnica de todos."
    },
    {
      text: "A ISO/IEC 27002:2022 aborda controles para proteção contra ataques de negação de serviço.",
      answer: true,
      comment: "Certo. A proteção contra ataques é um dos controles de segurança da informação."
    },
    {
      text: "A ISO/IEC 27001:2022 não prevê a realização de exercícios de resposta a incidentes.",
      answer: false,
      comment: "Errado. A preparação e teste de planos de resposta a incidentes são recomendados."
    }
  ],
  "desenvolvimento-seguro": [
    {
      text: "O SDL (Security Development Lifecycle) é um processo que integra práticas de segurança em todas as fases do desenvolvimento de software.",
      answer: true,
      comment: "Certo. O SDL visa incorporar segurança desde o planejamento até a manutenção do software."
    },
    {
      text: "O CLASP é um processo de segurança aplicável apenas a aplicações web críticas.",
      answer: false,
      comment: "Errado. O CLASP pode ser aplicado a qualquer tipo de aplicação, não apenas web."
    },
    {
      text: "O OWASP Top 10 é atualizado anualmente para refletir as principais vulnerabilidades de segurança em aplicações web.",
      answer: true,
      comment: "Certo. O OWASP Top 10 é revisado periodicamente para manter relevância."
    },
    {
      text: "A injeção de SQL (SQL Injection) permanece como uma das principais vulnerabilidades do OWASP Top 10.",
      answer: true,
      comment: "Certo. SQL Injection continua sendo um risco crítico e recorrente."
    },
    {
      text: "O SDL não prevê a realização de análise de ameaças durante o desenvolvimento.",
      answer: false,
      comment: "Errado. Threat modeling é uma etapa fundamental do SDL."
    },
    {
      text: "O CLASP define papéis específicos como arquiteto de segurança e desenvolvedor seguro.",
      answer: true,
      comment: "Certo. O CLASP sugere papéis claros para garantir responsabilidade sobre segurança."
    },
    {
      text: "Cross-Site Scripting (XSS) é uma vulnerabilidade que permite execução de código malicioso no navegador do usuário.",
      answer: true,
      comment: "Certo. XSS permite injeção de scripts maliciosos em páginas web."
    },
    {
      text: "O OWASP Top 10 não inclui vulnerabilidades relacionadas a configurações inseguras.",
      answer: false,
      comment: "Errado. Security Misconfiguration é uma categoria do OWASP Top 10."
    },
    {
      text: "O SDL recomenda a realização de testes de segurança antes da liberação do software.",
      answer: true,
      comment: "Certo. Testes de segurança são parte fundamental do SDL."
    },
    {
      text: "O CLASP é aplicável apenas a organizações com equipes de segurança dedicadas.",
      answer: false,
      comment: "Errado. O CLASP pode ser adaptado a organizações de diferentes portes."
    }
  ],
  "seguranca-conteineres": [
    {
      text: "Contêineres Docker compartilham o kernel do sistema operacional hospedeiro.",
      answer: true,
      comment: "Certo. Contêineres Docker compartilham o kernel do host, diferentemente de VMs que têm kernel próprio."
    },
    {
      text: "O Docker não oferece isolamento completo entre contêineres, criando riscos de segurança.",
      answer: true,
      comment: "Certo. O isolamento do Docker não é tão robusto quanto VMs, criando vetores de ataque."
    },
    {
      text: "Contêineres rodam como root por padrão no Docker, aumentando riscos de segurança.",
      answer: true,
      comment: "Certo. Contêineres Docker rodam como root por padrão, criando privilégios excessivos."
    },
    {
      text: "O Kubernetes não oferece recursos nativos de segurança para contêineres.",
      answer: false,
      comment: "Errado. Kubernetes oferece Network Policies, RBAC, Pod Security Standards e outros recursos de segurança."
    },
    {
      text: "Runtime security monitoring é essencial para detectar ameaças em contêineres em execução.",
      answer: true,
      comment: "Certo. Monitoramento em tempo real é crucial para detectar comportamentos maliciosos em contêineres."
    },
    {
      text: "Contêineres podem ser comprometidos através de vulnerabilidades no kernel compartilhado.",
      answer: true,
      comment: "Certo. Vulnerabilidades no kernel podem afetar todos os contêineres que o compartilham."
    },
    {
      text: "O Docker não suporta execução de contêineres em modo não privilegiado.",
      answer: false,
      comment: "Errado. Docker suporta execução em modo não privilegiado com a flag --user."
    },
    {
      text: "Kubernetes Pod Security Standards definem políticas de segurança para pods.",
      answer: true,
      comment: "Certo. Pod Security Standards estabelecem níveis de segurança (Privileged, Baseline, Restricted)."
    },
    {
      text: "Contêineres podem ser comprometidos através de imagens maliciosas do Docker Hub.",
      answer: true,
      comment: "Certo. Imagens de fontes não confiáveis podem conter malware ou vulnerabilidades."
    },
    {
      text: "O Docker não oferece recursos de criptografia para dados em repouso.",
      answer: false,
      comment: "Errado. Docker oferece recursos de criptografia através de plugins e configurações."
    }
  ],
  "autenticacao-autorizacao": [
    {
      text: "Autenticação é o processo de verificar a identidade de um usuário ou sistema.",
      answer: true,
      comment: "Certo. Autenticação confirma 'quem você é' através de credenciais."
    },
    {
      text: "Autorização é o processo de determinar quais recursos um usuário pode acessar.",
      answer: true,
      comment: "Certo. Autorização define 'o que você pode fazer' após autenticação."
    },
    {
      text: "Autenticação e autorização são processos independentes que não se relacionam.",
      answer: false,
      comment: "Errado. Autorização depende da autenticação prévia - primeiro verifica identidade, depois define permissões."
    },
    {
      text: "Autenticação multifator (MFA) requer múltiplos métodos de verificação de identidade.",
      answer: true,
      comment: "Certo. MFA combina diferentes fatores como senha, token, biometria."
    },
    {
      text: "OAuth 2.0 é um protocolo de autorização, não de autenticação.",
      answer: true,
      comment: "Certo. OAuth 2.0 é para autorização de acesso a recursos, não autenticação."
    },
    {
      text: "JWT (JSON Web Tokens) podem conter informações de autenticação e autorização.",
      answer: true,
      comment: "Certo. JWT podem transportar claims de identidade e permissões."
    },
    {
      text: "Autenticação baseada em certificados digitais é mais segura que senhas.",
      answer: true,
      comment: "Certo. Certificados digitais oferecem criptografia assimétrica e são mais difíceis de comprometer."
    },
    {
      text: "RBAC (Role-Based Access Control) é baseado em papéis, não em identidades individuais.",
      answer: true,
      comment: "Certo. RBAC atribui permissões a papéis, e usuários recebem papéis."
    },
    {
      text: "Autenticação biométrica é infalível e não pode ser contornada.",
      answer: false,
      comment: "Errado. Biometria pode ser falsificada e tem limitações de precisão."
    },
    {
      text: "SAML (Security Assertion Markup Language) é usado para autenticação federada.",
      answer: true,
      comment: "Certo. SAML permite autenticação entre domínios diferentes."
    }
  ],
  "sso-saml-oauth-oidc": [
    {
      text: "Single Sign-On (SSO) aumenta a segurança ao exigir que o usuário se autentique separadamente em cada aplicação que acessa.",
      answer: false,
      comment: "Errado. SSO melhora a experiência do usuário e pode aumentar a segurança ao centralizar a autenticação, permitindo que o usuário se autentique uma única vez para acessar múltiplas aplicações."
    },
    {
      text: "Em uma implementação de SSO, o Provedor de Identidade (IdP) é responsável por autenticar o usuário e fornecer uma asserção de identidade.",
      answer: true,
      comment: "Certo. O IdP é a autoridade central que gerencia as identidades e credenciais dos usuários, emitindo asserções para os Provedores de Serviço (SPs)."
    },
    {
      text: "O principal benefício do SSO para as organizações é a redução da complexidade de gerenciamento de senhas e do número de chamados de suporte relacionados a senhas esquecidas.",
      answer: true,
      comment: "Certo. A centralização da autenticação simplifica o gerenciamento de identidades e reduz a carga sobre as equipes de TI e help desk."
    },
    {
      text: "Kerberos é um exemplo de protocolo que pode ser utilizado para implementar SSO em redes corporativas.",
      answer: true,
      comment: "Certo. Kerberos é um protocolo de autenticação de rede amplamente utilizado que fornece um mecanismo de SSO seguro para serviços em uma rede."
    },
    {
      text: "A implementação de SSO elimina completamente a necessidade de outras medidas de segurança, como a autenticação multifator (MFA).",
      answer: false,
      comment: "Errado. SSO é frequentemente combinado com MFA para fortalecer a segurança do ponto único de autenticação, protegendo contra o comprometimento de credenciais."
    },
    {
      text: "SAML (Security Assertion Markup Language) é um padrão baseado em JSON para troca de dados de autenticação e autorização entre um Provedor de Identidade (IdP) e um Provedor de Serviço (SP).",
      answer: false,
      comment: "Errado. SAML é um padrão baseado em XML, não em JSON. JSON é mais associado a protocolos como OAuth 2.0 e OpenID Connect."
    },
    {
      text: "Uma asserção SAML é um documento XML que contém declarações sobre o usuário, como seu identificador, atributos e decisões de autorização.",
      answer: true,
      comment: "Certo. A asserção SAML é o núcleo do protocolo, carregando as informações de identidade e segurança sobre o sujeito autenticado."
    },
    {
      text: "No fluxo SAML iniciado pelo IdP (IdP-initiated flow), o usuário acessa primeiro o Provedor de Serviço (SP), que o redireciona para o Provedor de Identidade (IdP) para autenticação.",
      answer: false,
      comment: "Errado. No fluxo iniciado pelo IdP, o usuário acessa primeiro o IdP, se autentica e depois é redirecionado para o SP com uma asserção SAML."
    },
    {
      text: "A assinatura digital em uma asserção SAML garante a integridade e a autenticidade da asserção, confirmando que ela foi emitida por um IdP confiável e não foi alterada em trânsito.",
      answer: true,
      comment: "Certo. A assinatura digital é um mecanismo de segurança crucial no SAML para prevenir a falsificação e a manipulação de asserções."
    },
    {
      text: "O protocolo SAML não suporta o conceito de logout único (Single Logout - SLO), exigindo que o usuário encerre a sessão em cada Provedor de Serviço individualmente.",
      answer: false,
      comment: "Errado. SAML suporta Single Logout (SLO), que permite ao usuário encerrar a sessão em todos os SPs e no IdP com uma única ação."
    },
    {
      text: "OAuth 2.0 é um protocolo de autenticação projetado para permitir que um usuário faça login em aplicações de terceiros usando suas credenciais existentes.",
      answer: false,
      comment: "Errado. OAuth 2.0 é um framework de autorização, não de autenticação. Ele permite que uma aplicação obtenha acesso limitado a recursos em nome do usuário. A autenticação é tratada por protocolos como o OpenID Connect."
    },
    {
      text: "No fluxo OAuth 2.0, o 'access token' é uma credencial de curta duração que concede à aplicação cliente permissão para acessar recursos específicos do usuário.",
      answer: true,
      comment: "Certo. O 'access token' é a chave que a aplicação cliente usa para fazer requisições à API do servidor de recursos em nome do usuário."
    },
    {
      text: "O 'Authorization Code Grant' é o fluxo mais seguro do OAuth 2.0, ideal para aplicações web de servidor (server-side) e aplicações móveis, pois o 'access token' não é exposto diretamente ao navegador do usuário.",
      answer: true,
      comment: "Certo. Este fluxo envolve uma troca de um código de autorização por um 'access token' diretamente entre o cliente e o servidor de autorização, o que o torna mais seguro."
    },
    {
      text: "O 'Implicit Grant' do OAuth 2.0 é recomendado para aplicações modernas de página única (SPAs) por ser mais seguro que o 'Authorization Code Grant with PKCE'.",
      answer: false,
      comment: "Errado. O 'Implicit Grant' é considerado menos seguro e obsoleto para SPAs. O 'Authorization Code Grant with PKCE' é a prática recomendada atualmente por ser mais resistente a ataques."
    },
    {
      text: "O 'refresh token' é uma credencial opcional que pode ser usada pela aplicação cliente para obter um novo 'access token' sem a necessidade de interação do usuário, após o 'access token' original expirar.",
      answer: true,
      comment: "Certo. O 'refresh token' melhora a experiência do usuário ao permitir que a sessão permaneça ativa por mais tempo, sem exigir que o usuário se autentique repetidamente."
    },
    {
      text: "OpenID Connect (OIDC) é uma camada de identidade construída sobre o protocolo SAML para fornecer funcionalidades de autenticação.",
      answer: false,
      comment: "Errado. OIDC é uma camada de identidade construída sobre o framework de autorização OAuth 2.0, não sobre o SAML."
    },
    {
      text: "O 'ID Token' no OIDC é um JSON Web Token (JWT) que contém informações (claims) sobre o usuário autenticado, como seu identificador único (sub), e sobre o evento de autenticação.",
      answer: true,
      comment: "Certo. O 'ID Token' é a principal extensão que o OIDC adiciona ao OAuth 2.0, fornecendo um artefato padronizado para a identidade do usuário."
    },
    {
      text: "No fluxo OIDC, a aplicação cliente (Relying Party) deve sempre validar a assinatura do 'ID Token' para garantir sua autenticidade e integridade antes de confiar nas informações contidas nele.",
      answer: true,
      comment: "Certo. A validação da assinatura do JWT é um passo de segurança essencial para garantir que o 'ID Token' foi emitido pelo Provedor OpenID (OP) correto e não foi adulterado."
    },
    {
      text: "O 'UserInfo Endpoint' é um recurso protegido do OIDC que, quando acessado com um 'access token' válido, retorna informações adicionais sobre o usuário que não estão presentes no 'ID Token'.",
      answer: true,
      comment: "Certo. O 'UserInfo Endpoint' permite que a aplicação cliente obtenha um conjunto mais rico de atributos do usuário, mantendo o 'ID Token' mais leve e focado no evento de autenticação."
    },
    {
      text: "O escopo (scope) 'openid' é opcional em uma requisição de autenticação OIDC.",
      answer: false,
      comment: "Errado. O escopo 'openid' é obrigatório em qualquer requisição OIDC, pois sinaliza ao servidor de autorização que o cliente deseja realizar uma autenticação OpenID Connect e receber um 'ID Token'."
    },
    {
      text: "SAML é mais adequado para cenários de SSO em aplicações web tradicionais e ambientes corporativos, enquanto OAuth 2.0/OIDC são predominantes em aplicações móveis e APIs RESTful.",
      answer: true,
      comment: "Certo. Embora haja sobreposição, SAML tem uma forte presença em SSO empresarial, enquanto OIDC/OAuth 2.0 são o padrão de fato para APIs modernas e aplicações de consumo."
    },
    {
      text: "O fluxo 'Client Credentials' do OAuth 2.0 é utilizado quando uma aplicação precisa acessar seus próprios recursos em uma API, sem a presença ou contexto de um usuário final.",
      answer: true,
      comment: "Certo. Este fluxo é ideal para comunicação máquina-a-máquina (M2M), onde a aplicação se autentica diretamente para acessar recursos que ela possui."
    },
    {
      text: "PKCE (Proof Key for Code Exchange) é uma extensão de segurança para o fluxo 'Implicit' do OAuth 2.0, projetada para mitigar ataques de interceptação de 'access token'.",
      answer: false,
      comment: "Errado. PKCE é uma extensão de segurança para o fluxo 'Authorization Code', não para o fluxo 'Implicit'. Ele foi projetado para proteger clientes públicos, como aplicações móveis e SPAs."
    },
    {
      text: "Um JSON Web Token (JWT) consiste em três partes separadas por pontos: o Cabeçalho (Header), a Carga Útil (Payload) e a Assinatura (Signature).",
      answer: true,
      comment: "Certo. A estrutura de um JWT é composta por \`header.payload.signature\`, onde o header e o payload são codificados em Base64Url."
    },
    {
      text: "As informações (claims) dentro da Carga Útil (Payload) de um JWT são sempre criptografadas para garantir a confidencialidade dos dados.",
      answer: false,
      comment: "Errado. Por padrão, as claims em um JWT são apenas codificadas em Base64Url, não criptografadas. Elas são publicamente visíveis. Para confidencialidade, deve-se usar JWE (JSON Web Encryption)."
    },
    {
      text: "No fluxo SAML, o 'binding' HTTP POST é utilizado para enviar a asserção SAML do IdP para o SP através do navegador do usuário, em um formulário HTML auto-submetido.",
      answer: true,
      comment: "Certo. O HTTP POST Binding é um método comum para transmitir a asserção SAML, que é embutida como um parâmetro codificado em Base64 dentro de um formulário."
    },
    {
      text: "O 'Resource Owner Password Credentials Grant' do OAuth 2.0 é um fluxo altamente recomendado, pois permite que a aplicação cliente colete diretamente o nome de usuário e a senha do usuário.",
      answer: false,
      comment: "Errado. Este fluxo é desaconselhado e considerado legado, pois quebra o princípio de delegação do OAuth 2.0 ao expor as credenciais do usuário diretamente à aplicação cliente."
    },
    {
      text: "O 'state' é um parâmetro utilizado em fluxos OAuth 2.0 e OIDC para mitigar ataques de Cross-Site Request Forgery (CSRF).",
      answer: true,
      comment: "Certo. O cliente gera um valor aleatório no início do fluxo e o valida no retorno, garantindo que a resposta de autorização corresponde à requisição original."
    },
    {
      text: "O 'nonce' é um parâmetro utilizado em fluxos OIDC para mitigar ataques de repetição (replay attacks), garantindo que um 'ID Token' não possa ser reutilizado maliciosamente.",
      answer: true,
      comment: "Certo. O cliente envia um valor 'nonce' na requisição e verifica se o mesmo valor está presente na claim 'nonce' do 'ID Token' recebido, associando o token à sessão atual."
    },
    {
      text: "O padrão SCIM (System for Cross-domain Identity Management) é utilizado para automatizar o provisionamento e desprovisionamento de identidades de usuários entre domínios, como entre um IdP e um SP.",
      answer: true,
      comment: "Certo. SCIM é um protocolo baseado em API REST para gerenciar o ciclo de vida das identidades de usuários em múltiplos sistemas, complementando protocolos de SSO como SAML e OIDC."
    },
    {
      text: "Em um fluxo OAuth 2.0, o 'scope' define o nível de acesso que a aplicação cliente está solicitando aos recursos do usuário.",
      answer: true,
      comment: "Certo. O escopo permite a implementação do princípio do menor privilégio, onde a aplicação solicita apenas as permissões estritamente necessárias para sua funcionalidade."
    },
    {
      text: "O endpoint de 'discovery' do OpenID Connect (geralmente em \`.well-known/openid-configuration\`) permite que clientes obtenham dinamicamente a configuração do Provedor OpenID, como os URLs dos endpoints e as chaves públicas suportadas.",
      answer: true,
      comment: "Certo. O endpoint de descoberta simplifica a configuração do cliente, permitindo que ele se adapte automaticamente às configurações do provedor."
    },
    {
      text: "A principal diferença entre SAML e OAuth 2.0 é que SAML é focado em autorização, enquanto OAuth 2.0 é focado em autenticação.",
      answer: false,
      comment: "Errado. A situação é o oposto: SAML é primariamente um protocolo de autenticação (e autorização), enquanto OAuth 2.0 é um framework de autorização. OIDC adiciona a camada de autenticação ao OAuth 2.0."
    },
    {
      text: "O 'Assertion Consumer Service (ACS) URL' é o endpoint no Provedor de Identidade (IdP) que recebe e processa as requisições de autenticação SAML.",
      answer: false,
      comment: "Errado. O ACS URL é o endpoint no Provedor de Serviço (SP), não no IdP. Ele é responsável por receber e processar a asserção SAML enviada pelo IdP."
    },
    {
      text: "O 'audience' (aud) claim em um JWT ou asserção SAML especifica para qual Provedor de Serviço (SP) ou Recurso a asserção se destina, prevenindo que ela seja usada em um contexto diferente.",
      answer: true,
      comment: "Certo. A verificação do 'audience' é uma medida de segurança crítica para garantir que uma asserção só seja aceita pelo destinatário pretendido."
    },
    {
      text: "A federação de identidade permite que usuários de uma organização (domínio de segurança) acessem serviços em outra organização, estabelecendo uma relação de confiança entre os Provedores de Identidade de ambas.",
      answer: true,
      comment: "Certo. A federação estende o conceito de SSO através dos limites organizacionais, usando padrões como SAML ou OIDC para estabelecer confiança."
    },
    {
      text: "O 'ID Token' do OIDC deve ser usado pela aplicação cliente para se autenticar em APIs protegidas.",
      answer: false,
      comment: "Errado. O 'ID Token' é para o cliente; ele contém informações de identidade e não deve ser usado para acessar APIs. O 'access token' é a credencial correta para ser enviada a APIs protegidas."
    },
    {
      text: "O fluxo 'Device Authorization Grant' do OAuth 2.0 é projetado para dispositivos com capacidade de entrada limitada, como smart TVs, onde o usuário autoriza o dispositivo usando um segundo dispositivo, como um smartphone.",
      answer: true,
      comment: "Certo. Este fluxo desacopla a autenticação do dispositivo, permitindo uma experiência de usuário mais fluida em dispositivos com restrições de interface."
    },
    {
      text: "O 'subject' (sub) claim em um JWT ou asserção SAML representa o identificador único do recurso que está sendo acessado.",
      answer: false,
      comment: "Errado. O 'subject' representa o principal (geralmente o usuário final) sobre o qual a asserção está fazendo declarações. É o identificador do usuário, não do recurso."
    },
    {
      text: "O padrão JWS (JSON Web Signature) define como assinar digitalmente um conteúdo usando JSON e Base64Url, sendo a base para a assinatura de 'ID Tokens' e 'access tokens' em formato JWT.",
      answer: true,
      comment: "Certo. JWS especifica a estrutura e as regras para criar a parte da assinatura de um JWT, garantindo a integridade e autenticidade do token."
    },
    {
      text: "Em um fluxo OIDC, o 'ID Token' pode ser retornado tanto pelo Authorization Endpoint quanto pelo Token Endpoint, dependendo do tipo de fluxo (response_type).",
      answer: true,
      comment: "Certo. Em fluxos implícitos e híbridos, o 'ID Token' pode ser retornado diretamente do Authorization Endpoint. No fluxo de código de autorização, ele é retornado pelo Token Endpoint."
    },
    {
      text: "O SAML 2.0 Metadata é um documento XML que descreve as capacidades e configurações de um IdP ou SP, como endpoints, certificados e formatos suportados, facilitando a configuração da confiança entre as partes.",
      answer: true,
      comment: "Certo. O intercâmbio de metadados é um passo fundamental para estabelecer uma federação SAML, automatizando grande parte da configuração manual."
    },
    {
      text: "O 'iat' (issued at) claim em um JWT indica o momento em que o token foi emitido, e pode ser usado para determinar a idade do token.",
      answer: true,
      comment: "Certo. Juntamente com o 'exp' (expiration time), o 'iat' é crucial para gerenciar o ciclo de vida e a validade de um token."
    },
    {
      text: "O 'binding' HTTP-Redirect no SAML é usado para enviar a asserção SAML do IdP para o SP, codificando-a diretamente na URL.",
      answer: false,
      comment: "Errado. O HTTP-Redirect é usado para enviar a requisição de autenticação (AuthnRequest) do SP para o IdP. Devido às limitações de tamanho da URL, ele não é adequado para enviar a asserção SAML, que geralmente é maior e enviada via HTTP-POST."
    },
    {
      text: "O 'prompt=none' é um parâmetro na requisição de autenticação OIDC que permite tentar uma autenticação silenciosa, sem exibir qualquer interface de usuário. Se o usuário não estiver logado, o IdP retornará um erro.",
      answer: true,
      comment: "Certo. Isso é útil para verificar o status da sessão de um usuário de forma não intrusiva, renovar tokens ou implementar SSO de forma transparente."
    },
    {
      text: "O padrão JWT define um conjunto de algoritmos de criptografia obrigatórios que todos os Provedores OpenID devem suportar para garantir a interoperabilidade.",
      answer: false,
      comment: "Errado. O padrão JWT (e OIDC) especifica vários algoritmos, mas não torna um conjunto específico de criptografia obrigatório, embora 'RS256' (RSA com SHA-256) seja amplamente recomendado e utilizado."
    },
    {
      text: "O 'session index' em uma asserção SAML é um atributo que correlaciona a sessão do usuário no IdP com sua sessão no SP, sendo essencial para a implementação do Single Logout (SLO).",
      answer: true,
      comment: "Certo. Durante o SLO, o IdP usa o 'session index' para identificar quais sessões de SP precisam ser invalidadas para aquele usuário específico."
    },
    {
      text: "O 'token introspection' (RFC 7662) é um endpoint padrão do OAuth 2.0 que permite a um Provedor de Recursos (Resource Server) verificar a validade e obter metadados de um 'access token' junto ao Servidor de Autorização.",
      answer: true,
      comment: "Certo. A introspecção é crucial para tokens opacos (que não são JWTs) e permite que o Provedor de Recursos valide tokens de forma centralizada e segura."
    },
    {
      text: "A principal motivação para a criação do OpenID Connect foi simplificar a federação de identidade para clientes não baseados em navegador, como aplicações móveis, algo que era complexo com SAML.",
      answer: true,
      comment: "Certo. OIDC foi projetado com a simplicidade e a compatibilidade com APIs REST/JSON em mente, tornando-o uma escolha natural para o ecossistema de aplicações modernas."
    }
  ],
  "biometria": [
    {
      text: "A biometria comportamental analisa padrões de ações de um indivíduo, como a dinâmica de digitação ou a forma de andar, para verificar sua identidade.",
      answer: true,
      comment: "Certo. A biometria comportamental foca em características aprendidas ou desenvolvidas, em vez de traços físicos inatos."
    },
    {
      text: "O reconhecimento facial é um método de biometria fisiológica que funciona exclusivamente através da análise da estrutura óssea do rosto, ignorando características como a textura da pele.",
      answer: false,
      comment: "Errado. O reconhecimento facial moderno analisa múltiplos pontos de dados (nodal points), incluindo a distância entre os olhos, a forma do nariz e a textura da pele para criar um 'mapa' facial único."
    },
    {
      text: "A análise de íris é considerada um dos métodos biométricos mais seguros e precisos porque o padrão da íris é único para cada indivíduo e permanece estável ao longo da vida.",
      answer: true,
      comment: "Certo. Os padrões da íris são extremamente complexos e aleatórios, tornando a duplicação quase impossível e oferecendo alta precisão."
    },
    {
      text: "O reconhecimento de voz (ou verificação de locutor) identifica uma pessoa com base no que ela diz, não em como ela diz.",
      answer: false,
      comment: "Errado. O reconhecimento de voz analisa as características únicas da voz de uma pessoa (o 'voiceprint'), como frequência, tom e cadência, que são independentes do conteúdo falado."
    },
    {
      text: "A biometria por impressão digital baseia-se na análise de padrões de vales e cristas na ponta dos dedos, que são formados durante o desenvolvimento fetal e são únicos para cada pessoa.",
      answer: true,
      comment: "Certo. As impressões digitais são formadas por minúcias (pontos onde as cristas terminam ou se bifurcam), e o padrão dessas minúcias é único."
    },
    {
      text: "A biometria comportamental, como a dinâmica de digitação, é imune a ataques de repetição (replay attacks), pois o comportamento é sempre idêntico.",
      answer: false,
      comment: "Errado. Embora variável, o comportamento pode ser gravado e reproduzido. Sistemas robustos analisam a variabilidade e usam detecção de vivacidade para mitigar esses ataques."
    },
    {
      text: "O reconhecimento facial pode ser facilmente enganado usando uma fotografia de alta qualidade da pessoa autorizada.",
      answer: false,
      comment: "Errado. Sistemas de reconhecimento facial modernos empregam técnicas de 'detecção de vivacidade' (liveness detection) para distinguir entre um rosto real e uma imagem, analisando movimentos sutis, piscar de olhos ou texturas 3D."
    },
    {
      text: "A taxa de falsa aceitação (FAR) mede a probabilidade de um sistema biométrico rejeitar incorretamente um usuário autorizado.",
      answer: false,
      comment: "Errado. Isso descreve a Taxa de Falsa Rejeição (FRR). A Taxa de Falsa Aceitação (FAR) mede a probabilidade de o sistema aceitar incorretamente um usuário não autorizado (impostor)."
    },
    {
      text: "A biometria multimodal combina duas ou mais modalidades biométricas (por exemplo, impressão digital e reconhecimento facial) para aumentar a precisão e a segurança do sistema.",
      answer: true,
      comment: "Certo. A abordagem multimodal torna o sistema mais robusto, pois um invasor precisaria fraudar múltiplos identificadores biométricos simultaneamente."
    },
    {
      text: "A análise da geometria da mão é um método biométrico que captura uma imagem tridimensional detalhada da estrutura óssea da mão.",
      answer: false,
      comment: "Errado. A geometria da mão é um método mais simples que mede características como o comprimento e a largura dos dedos e da palma, geralmente em 2D, não sendo tão detalhado quanto uma análise 3D da estrutura óssea."
    },
    {
      text: "O reconhecimento de voz é ideal para ambientes ruidosos, pois os algoritmos são capazes de isolar perfeitamente a voz do usuário do ruído de fundo.",
      answer: false,
      comment: "Errado. O ruído de fundo é um desafio significativo para os sistemas de reconhecimento de voz e pode degradar severamente a precisão da verificação."
    },
    {
      text: "A principal vantagem da biometria comportamental sobre a fisiológica é que os traços comportamentais não podem ser roubados ou copiados.",
      answer: false,
      comment: "Errado. Padrões comportamentais podem ser observados, gravados e, em alguns casos, imitados. A vantagem é que eles podem ser alterados se comprometidos (por exemplo, mudando uma senha baseada em ritmo), ao contrário de traços fisiológicos."
    },
    {
      text: "A análise de íris requer que o usuário esteja em contato físico direto com o scanner.",
      answer: false,
      comment: "Errado. A captura da imagem da íris é um processo sem contato (contactless), realizado por uma câmera de alta resolução a uma curta distância."
    },
    {
      text: "A 'Equal Error Rate' (EER) ou Taxa de Erro Igual é o ponto em que a Taxa de Falsa Aceitação (FAR) é igual à Taxa de Falsa Rejeição (FRR). Um EER mais baixo indica um sistema mais preciso.",
      answer: true,
      comment: "Certo. O EER é uma métrica comum para avaliar o desempenho geral de um sistema biométrico, representando o ponto de equilíbrio ideal entre segurança e conveniência."
    },
    {
      text: "A assinatura dinâmica é um tipo de biometria comportamental que analisa não apenas a aparência final da assinatura, mas também a velocidade, a pressão e o ritmo da escrita.",
      answer: true,
      comment: "Certo. Isso a torna muito mais segura do que uma assinatura estática (visual), que pode ser facilmente forjada."
    },
    {
      text: "O padrão de veias na palma da mão ou no dedo é um método biométrico que não pode ser capturado sem o consentimento do indivíduo, pois requer iluminação infravermelha para visualizar o padrão sob a pele.",
      answer: true,
      comment: "Certo. O reconhecimento de veias é considerado altamente seguro porque o padrão é interno, invisível a olho nu e difícil de ser copiado ou roubado."
    },
    {
      text: "A biometria de impressão digital é infalível e não é afetada por condições como cortes, sujeira ou desgaste da pele nos dedos.",
      answer: false,
      comment: "Errado. Fatores físicos como cortes, queimaduras, sujeira e o envelhecimento podem alterar temporária ou permanentemente as impressões digitais, afetando a precisão do scanner."
    },
    {
      text: "O 'template' biométrico armazenado em um sistema é a imagem original completa da característica biométrica (ex: a foto do rosto ou a imagem da impressão digital).",
      answer: false,
      comment: "Errado. Por razões de segurança e privacidade, os sistemas armazenam um 'template', que é uma representação matemática dos pontos característicos extraídos da amostra biométrica, e não a imagem original."
    },
    {
      text: "O reconhecimento de retina, que analisa o padrão de vasos sanguíneos na parte de trás do olho, é mais invasivo que o reconhecimento de íris.",
      answer: true,
      comment: "Certo. O reconhecimento de retina requer que o usuário olhe fixamente para um ponto de luz e esteja muito próximo do dispositivo, sendo considerado mais invasivo e menos amigável que a análise de íris."
    },
    {
      text: "A análise da marcha (gait analysis) é um tipo de biometria comportamental que pode ser usada para identificação à distância, sem a cooperação ou o conhecimento do indivíduo.",
      answer: true,
      comment: "Certo. A forma como uma pessoa anda é um traço distintivo que pode ser capturado por câmeras de vigilância para fins de monitoramento e identificação."
    },
    {
      text: "A universalidade é uma característica desejável de um identificador biométrico, significando que a grande maioria da população possui aquele traço.",
      answer: true,
      comment: "Certo. Outras características desejáveis incluem unicidade (ser único para cada indivíduo), permanência (não mudar com o tempo) e coletabilidade (ser fácil de medir)."
    },
    {
      text: "O reconhecimento facial 3D é menos suscetível a ataques de falsificação com fotografias do que o reconhecimento 2D.",
      answer: true,
      comment: "Certo. O reconhecimento 3D analisa a profundidade e a forma do rosto, tornando muito mais difícil enganá-lo com uma imagem plana."
    },
    {
      text: "A biometria de voz e a de fala são termos intercambiáveis que se referem ao mesmo processo de identificação.",
      answer: false,
      comment: "Errado. A biometria de voz (verificação do locutor) identifica 'quem' está falando, enquanto o reconhecimento de fala (speech recognition) identifica 'o que' está sendo dito, convertendo a fala em texto."
    },
    {
      text: "O armazenamento do 'template' biométrico no lado do cliente (por exemplo, no chip de segurança de um smartphone) é geralmente mais seguro do que o armazenamento centralizado em um servidor.",
      answer: true,
      comment: "Certo. O armazenamento no dispositivo (on-device) evita a criação de um grande banco de dados centralizado que, se violado, poderia comprometer os dados biométricos de milhões de usuários."
    },
    {
      text: "A análise de DNA é um método biométrico ideal para autenticação em tempo real em sistemas de controle de acesso físico.",
      answer: false,
      comment: "Errado. Embora extremamente preciso para identificação, o processo de análise de DNA é lento, caro e invasivo, tornando-o impraticável para aplicações de autenticação em tempo real."
    },
    {
      text: "A biometria 'cancelável' (cancelable biometrics) permite que um 'template' biométrico comprometido seja revogado e substituído por um novo, da mesma forma que uma senha.",
      answer: true,
      comment: "Certo. Isso é feito aplicando uma transformação matemática ao 'template' original. Se a versão transformada for roubada, ela pode ser 'cancelada' e uma nova transformação pode ser aplicada para criar um novo 'template'."
    },
    {
      text: "O reconhecimento de íris funciona perfeitamente com óculos de sol ou lentes de contato coloridas.",
      answer: false,
      comment: "Errado. Óculos (especialmente de sol) e lentes de contato coloridas ou com padrões podem obstruir a visão da íris e interferir significativamente na precisão do scanner."
    },
    {
      text: "A biometria fisiológica baseia-se em características físicas e geralmente é mais estável ao longo do tempo do que a biometria comportamental.",
      answer: true,
      comment: "Certo. Traços como impressões digitais e padrões de íris são fixos, enquanto o comportamento (como digitação ou assinatura) pode variar com o humor, a saúde ou o tempo."
    },
    {
      text: "Um sistema de identificação biométrica responde à pergunta 'Você é quem você diz ser?'.",
      answer: false,
      comment: "Errado. Essa pergunta é respondida por um sistema de verificação (1:1). Um sistema de identificação responde à pergunta 'Quem é você?', comparando a amostra biométrica com todos os 'templates' no banco de dados (1:N)."
    },
    {
      text: "A termografia facial, que analisa os padrões de calor emitidos pelo rosto, é um método biométrico que pode ser enganado por uma máscara ou disfarce.",
      answer: false,
      comment: "Errado. O padrão de calor facial é gerado pelos vasos sanguíneos sob a pele e é único para cada indivíduo, não sendo afetado por máscaras ou cosméticos, tornando-o resistente a disfarces."
    }
  ],
  "fido2-webauthn": [
    {
      text: "FIDO2 é um padrão de autenticação único, desenvolvido exclusivamente pela Google para seus produtos.",
      answer: false,
      comment: "Errado. FIDO2 é um conjunto de padrões abertos da FIDO Alliance, que inclui empresas como Microsoft, Google e Yubico. Ele é composto pelo protocolo CTAP e pela API WebAuthn."
    },
    {
      text: "WebAuthn (Web Authentication) é uma API de navegador que permite que aplicações web utilizem autenticadores FIDO2 para realizar autenticação segura e sem senha.",
      answer: true,
      comment: "Certo. WebAuthn é o componente do FIDO2 que padroniza a interface entre a aplicação web (Relying Party) e o navegador, permitindo a comunicação com os autenticadores."
    },
    {
      text: "A principal vantagem do FIDO2/WebAuthn é que ele elimina o risco de phishing, pois as credenciais são vinculadas ao domínio da aplicação e não podem ser usadas em um site falso.",
      answer: true,
      comment: "Certo. A autenticação FIDO2 é resistente a phishing por design. A chave privada nunca sai do autenticador e está criptograficamente ligada à origem (domínio) onde foi registrada."
    },
    {
      text: "Durante o registro com WebAuthn, uma chave pública é enviada e armazenada no servidor da aplicação, enquanto a chave privada correspondente é armazenada na senha do usuário.",
      answer: false,
      comment: "Errado. A chave privada nunca deixa o autenticador do usuário (seja um dispositivo de segurança físico ou um autenticador de plataforma como Windows Hello/Touch ID). Apenas a chave pública é armazenada no servidor."
    },
    {
      text: "CTAP (Client to Authenticator Protocol) permite a comunicação entre um navegador em um computador e um autenticador externo, como uma chave de segurança USB ou NFC.",
      answer: true,
      comment: "Certo. CTAP é o protocolo que permite que o cliente (navegador/SO) se comunique com autenticadores externos (roaming authenticators) para realizar operações FIDO."
    },
    {
      text: "A autenticação FIDO2 requer sempre um dispositivo de hardware externo (chave de segurança).",
      answer: false,
      comment: "Errado. FIDO2 suporta tanto autenticadores externos (roaming) quanto autenticadores de plataforma (platform), como leitores de impressão digital e câmeras de reconhecimento facial integrados a notebooks e smartphones."
    },
    {
      text: "Em um fluxo FIDO2, o servidor armazena um segredo compartilhado (como uma senha) para verificar a identidade do usuário.",
      answer: false,
      comment: "Errado. Este é o princípio da autenticação sem senha. O servidor armazena apenas a chave pública do usuário. A autenticação é feita através de um desafio assinado pela chave privada, que só o usuário possui."
    },
    {
      text: "WebAuthn é um substituto direto para o OAuth 2.0, oferecendo funcionalidades tanto de autenticação quanto de autorização delegada.",
      answer: false,
      comment: "Errado. WebAuthn é estritamente um protocolo de autenticação. Ele é frequentemente usado em conjunto com protocolos como OAuth 2.0 e OpenID Connect, mas não os substitui."
    },
    {
      text: "A 'attestation' no WebAuthn é um processo opcional onde o autenticador fornece ao servidor informações sobre si mesmo, como fabricante e modelo, para verificação de sua autenticidade.",
      answer: true,
      comment: "Certo. A atestação permite que a aplicação (Relying Party) verifique a procedência e as características do autenticador, adicionando uma camada de confiança ao processo de registro."
    },
    {
      text: "As credenciais criadas com WebAuthn são chamadas de 'discoverable credentials' (ou 'resident keys') quando a chave privada é armazenada no autenticador e pode ser encontrada sem um nome de usuário.",
      answer: true,
      comment: "Certo. Credenciais detectáveis permitem um login verdadeiramente sem nome de usuário, onde o usuário simplesmente ativa o autenticador e o servidor identifica o usuário com base na credencial apresentada."
    },
    {
      text: "FIDO2 foi projetado para ser imune a ataques de man-in-the-middle (MitM), pois a comunicação é sempre criptografada de ponta a ponta entre o autenticador e o servidor final.",
      answer: false,
      comment: "Errado. Embora a criptografia de chave pública ofereça forte proteção, a segurança contra MitM é garantida pela vinculação da credencial à origem (domínio) e pelo uso de TLS. A criptografia FIDO em si não é de ponta a ponta do autenticador ao servidor."
    },
    {
      text: "O 'user handle' é um identificador fornecido pelo servidor durante o registro que associa a chave pública criada à conta do usuário no sistema.",
      answer: true,
      comment: "Certo. O 'user handle' é um ID estável e não publicamente identificável que permite ao servidor localizar a credencial correta para um determinado usuário durante a autenticação."
    },
    {
      text: "A 'verificação do usuário' (user verification) em FIDO2, como o uso de um PIN ou biometria no autenticador, é obrigatória para todas as operações de autenticação.",
      answer: false,
      comment: "Errado. A aplicação (Relying Party) pode especificar se a verificação do usuário é necessária ('required'), preferida ('preferred') ou não necessária ('discouraged'). Isso permite flexibilidade entre segurança e conveniência."
    },
    {
      text: "O padrão U2F (Universal 2nd Factor) da FIDO Alliance é o predecessor do FIDO2 e funciona apenas como um segundo fator de autenticação, não suportando login sem senha.",
      answer: true,
      comment: "Certo. U2F foi o primeiro padrão FIDO e exigia um nome de usuário e senha primeiro. FIDO2 evoluiu para permitir uma experiência totalmente sem senha, além de continuar a suportar o caso de uso de segundo fator."
    },
    {
      text: "WebAuthn só pode ser usado em navegadores web e não tem aplicação em aplicativos móveis nativos.",
      answer: false,
      comment: "Errado. Embora o nome sugira 'Web', as APIs FIDO2 estão sendo cada vez mais integradas em sistemas operacionais móveis (Android e iOS), permitindo que aplicativos nativos usem a mesma infraestrutura de autenticação segura."
    },
    {
      text: "O 'challenge' enviado pelo servidor durante uma tentativa de autenticação é um dado aleatório que o autenticador deve assinar com a chave privada para provar a posse da credencial.",
      answer: true,
      comment: "Certo. O desafio garante que a autenticação é nova e única para aquela sessão, prevenindo ataques de repetição (replay attacks)."
    },
    {
      text: "Se um usuário perder seu autenticador FIDO2, ele perde permanentemente o acesso à sua conta, pois não há método de recuperação.",
      answer: false,
      comment: "Errado. As aplicações devem implementar métodos de recuperação de conta, como o registro de múltiplos autenticadores, códigos de recuperação ou um processo de verificação de identidade alternativo."
    },
    {
      text: "O 'Relying Party ID' (RP ID) especificado durante o registro deve ser sempre um subdomínio do domínio da aplicação para garantir a segurança.",
      answer: false,
      comment: "Errado. O RP ID pode ser um sufixo do domínio atual. Por exemplo, uma aplicação em 'login.exemplo.com' pode usar 'exemplo.com' como RP ID, permitindo que a mesma credencial seja usada em múltiplos subdomínios."
    },
    {
      text: "Passkeys são a implementação da marca de consumo para credenciais FIDO, sincronizadas entre dispositivos de um mesmo ecossistema (Apple, Google, Microsoft), permitindo uma experiência de login mais fluida.",
      answer: true,
      comment: "Certo. Passkeys são essencialmente 'discoverable credentials' do FIDO2 que são sincronizadas na nuvem, eliminando a necessidade de registrar cada dispositivo individualmente."
    },
    {
      text: "A API WebAuthn usa JSON para todas as estruturas de dados trocadas entre o navegador e a aplicação web.",
      answer: false,
      comment: "Errado. Embora a interface para o desenvolvedor JavaScript use objetos semelhantes a JSON, os dados binários (como IDs de credencial e chaves públicas) são transmitidos usando ArrayBuffers, que são codificados em Base64Url para transporte."
    },
    {
      text: "A 'cerimônia de autenticação' no WebAuthn refere-se ao processo de registro de um novo autenticador.",
      answer: false,
      comment: "Errado. A cerimônia de autenticação refere-se ao processo de login (ou verificação). O processo de registro é chamado de 'cerimônia de registro'."
    },
    {
      text: "O FIDO2 protege a privacidade do usuário ao não permitir que um mesmo autenticador seja rastreado em diferentes sites, pois ele gera um par de chaves único para cada serviço online.",
      answer: true,
      comment: "Certo. Isso previne que grandes empresas rastreiem a atividade de um usuário pela internet usando o identificador do autenticador. A credencial é única por origem (site)."
    },
    {
      text: "O 'timeout' em uma requisição WebAuthn define o tempo máximo que o usuário tem para interagir com o autenticador antes que a operação falhe.",
      answer: true,
      comment: "Certo. É uma medida de segurança e usabilidade para garantir que a solicitação de autenticação não permaneça aberta indefinidamente."
    },
    {
      text: "O 'Authenticator Attachment' especifica se a aplicação prefere um autenticador de plataforma ('platform') ou um externo ('cross-platform').",
      answer: true,
      comment: "Certo. Isso permite que a aplicação sugira o tipo de autenticador, por exemplo, solicitando um autenticador de plataforma para uma experiência de login mais integrada ou um externo para maior segurança."
    },
    {
      text: "A assinatura digital criada pelo autenticador FIDO2 inclui um contador que o servidor verifica para detectar a clonagem de autenticadores.",
      answer: true,
      comment: "Certo. O contador de assinatura (signature counter) incrementa a cada autenticação. Se o servidor receber um valor de contador menor ou igual ao último visto, isso pode indicar um problema, como um autenticador clonado."
    },
    {
      text: "WebAuthn funciona em todos os navegadores modernos sem a necessidade de plugins ou extensões.",
      answer: true,
      comment: "Certo. WebAuthn é um padrão da W3C e é suportado nativamente pela maioria dos navegadores atuais, como Chrome, Firefox, Safari e Edge."
    },
    {
      text: "Para usar FIDO2, o servidor da aplicação precisa de um hardware de segurança especial (HSM) para armazenar as chaves públicas dos usuários.",
      answer: false,
      comment: "Errado. As chaves públicas não são segredos e podem ser armazenadas em um banco de dados padrão. Não há requisito de hardware especial no lado do servidor para implementar FIDO2."
    },
    {
      text: "O 'Credential ID' é um identificador globalmente único que permite ao servidor identificar qual chave pública usar para verificar a assinatura de um usuário.",
      answer: true,
      comment: "Certo. Durante a autenticação, o autenticador fornece o Credential ID para que o servidor possa procurar a chave pública correspondente em seu banco de dados."
    },
    {
      text: "A experiência do usuário com FIDO2 é sempre a mesma, independentemente do autenticador, navegador ou sistema operacional utilizado.",
      answer: false,
      comment: "Errado. A experiência do usuário pode variar significativamente. A interação com uma chave de segurança USB é diferente de usar o reconhecimento facial do Windows Hello ou o Touch ID em um MacBook, pois a interface é mediada pelo navegador e pelo sistema operacional."
    },
    {
      text: "O objetivo principal do FIDO2 é substituir completamente as senhas, tornando a autenticação mais segura e mais fácil para os usuários.",
      answer: true,
      comment: "Certo. A visão da FIDO Alliance é mover a indústria para além das senhas, que são inerentemente vulneráveis a phishing, roubo e reutilização, através de um padrão aberto e seguro."
    }
  ],
  "mfa": [
    {
      text: "MFA (Multi-Factor Authentication) e 2FA (Two-Factor Authentication) são conceitos fundamentalmente diferentes.",
      answer: false,
      comment: "Errado. 2FA é um subconjunto de MFA. MFA refere-se ao uso de dois ou mais fatores de autenticação, enquanto 2FA refere-se especificamente ao uso de exatamente dois fatores."
    },
    {
      text: "Os três principais tipos de fatores de autenticação são: algo que você sabe, algo que você tem e algo que você é.",
      answer: true,
      comment: "Certo. Estes são os três pilares da autenticação: conhecimento (senha, PIN), posse (token, celular) e inerência (biometria)."
    },
    {
      text: "Usar uma senha e um PIN no mesmo login é um exemplo de MFA robusto.",
      answer: false,
      comment: "Errado. Senha e PIN são ambos fatores de 'conhecimento'. Para ser considerado MFA, os fatores devem ser de categorias diferentes (ex: senha + token)."
    },
    {
      text: "TOTP (Time-based One-Time Password) é um tipo de senha de uso único que é válida por um curto período de tempo, geralmente 30 ou 60 segundos.",
      answer: true,
      comment: "Certo. Aplicativos como Google Authenticator e Authy usam o algoritmo TOTP para gerar códigos que mudam com o tempo, baseados em um segredo compartilhado e na hora atual."
    },
    {
      text: "A autenticação por SMS é considerada o método de MFA mais seguro porque os celulares são dispositivos pessoais e sempre estão com o usuário.",
      answer: false,
      comment: "Errado. A autenticação por SMS é vulnerável a ataques de 'SIM swapping' (clonagem de chip) e interceptação de mensagens, sendo considerada menos segura que aplicativos autenticadores ou chaves de segurança."
    },
    {
      text: "Uma chave de segurança de hardware (como uma YubiKey) que requer um toque para autenticar é um exemplo do fator 'algo que você tem'.",
      answer: true,
      comment: "Certo. A posse física da chave é o fator de autenticação. Se ela também exigir uma impressão digital, combina os fatores 'algo que você tem' e 'algo que você é'."
    },
    {
      text: "A autenticação adaptativa (ou baseada em risco) é uma forma de MFA que ajusta a necessidade de fatores adicionais com base no contexto do login, como localização, dispositivo ou horário.",
      answer: true,
      comment: "Certo. Se o risco for baixo (ex: usuário na rede corporativa em seu dispositivo usual), apenas a senha pode ser exigida. Se o risco for alto (ex: login de um país diferente), um segundo fator é solicitado."
    },
    {
      text: "HOTP (HMAC-based One-Time Password) gera senhas de uso único baseadas em um contador que é incrementado a cada nova solicitação de código.",
      answer: true,
      comment: "Certo. Diferente do TOTP (baseado em tempo), o HOTP é baseado em eventos (o contador). O código só muda quando um novo é solicitado."
    },
    {
      text: "Implementar MFA elimina completamente a necessidade de os usuários terem senhas fortes.",
      answer: false,
      comment: "Errado. Embora o MFA adicione uma camada de segurança crucial, a senha continua sendo o primeiro fator e um ponto de entrada potencial. Senhas fracas ainda representam um risco e devem ser evitadas."
    },
    {
      text: "Notificações push enviadas para um aplicativo no smartphone do usuário, que exigem aprovação, são um exemplo de fator de posse.",
      answer: true,
      comment: "Certo. Este método confirma a posse do dispositivo registrado. É considerado mais seguro e mais amigável que os códigos SMS."
    },
    {
      text: "O principal objetivo do MFA é proteger contra o acesso não autorizado resultante do comprometimento de uma única credencial, como uma senha roubada.",
      answer: true,
      comment: "Certo. Mesmo que um invasor obtenha a senha do usuário, ele ainda precisará do segundo fator (que ele não possui) para obter acesso."
    },
    {
      text: "A biometria, como a impressão digital ou o reconhecimento facial, representa o fator de autenticação 'algo que você sabe'.",
      answer: false,
      comment: "Errado. A biometria representa o fator 'algo que você é' (inerência), pois é uma característica intrínseca do indivíduo."
    },
    {
      text: "Um grid de autenticação (cartão com códigos impressos) é um exemplo de fator de conhecimento.",
      answer: false,
      comment: "Errado. O grid de autenticação é um exemplo de fator de posse ('algo que você tem'), pois o usuário precisa possuir o cartão físico para consultar os códigos."
    },
    {
      text: "Ataques de 'MFA fatigue' ou 'prompt bombing' ocorrem quando um invasor, já de posse da senha, envia repetidas solicitações de MFA ao usuário na esperança de que ele aprove uma por engano ou cansaço.",
      answer: true,
      comment: "Certo. Esta é uma técnica de engenharia social que explora a interação humana com sistemas de MFA baseados em notificações push."
    },
    {
      text: "O uso de perguntas de segurança (ex: 'Qual o nome do seu primeiro animal de estimação?') é considerado um forte segundo fator de autenticação.",
      answer: false,
      comment: "Errado. As perguntas de segurança são consideradas um fator de conhecimento fraco, pois as respostas podem ser adivinhadas ou encontradas através de pesquisa online (OSINT)."
    },
    {
      text: "O padrão FIDO2/WebAuthn pode ser usado para implementar MFA, combinando um autenticador (posse) com um gesto biométrico ou PIN (inerência ou conhecimento).",
      answer: true,
      comment: "Certo. FIDO2 é inerentemente multifator, pois geralmente requer a posse do dispositivo e uma ação do usuário (toque, PIN, biometria) para desbloqueá-lo."
    },
    {
      text: "A localização geográfica (geofencing) pode ser usada como um fator de autenticação contextual.",
      answer: true,
      comment: "Certo. A localização é um atributo contextual que pode aumentar ou diminuir o risco de uma tentativa de login, influenciando a necessidade de fatores de autenticação adicionais."
    },
    {
      text: "O segredo compartilhado usado para configurar um autenticador TOTP (geralmente exibido como um QR code) pode ser reutilizado para configurar o mesmo token em múltiplos dispositivos.",
      answer: true,
      comment: "Certo. É possível e, às vezes, útil ter o mesmo token TOTP em um celular e em um tablet, por exemplo. No entanto, isso aumenta a superfície de ataque, pois o comprometimento de qualquer um dos dispositivos compromete o token."
    },
    {
      text: "A autenticação por e-mail, onde um link ou código é enviado para o endereço de e-mail do usuário, é um exemplo de fator de posse.",
      answer: true,
      comment: "Certo. Assume-se que o usuário tem a posse (acesso) à sua conta de e-mail, que funciona como o segundo fator."
    },
    {
      text: "MFA protege contra todos os tipos de ataques, incluindo malware que rouba cookies de sessão.",
      answer: false,
      comment: "Errado. Se um invasor conseguir roubar um cookie de uma sessão já autenticada (após o MFA ter sido concluído), ele pode ser capaz de sequestrar a sessão sem precisar se autenticar. Isso é conhecido como ataque 'pass-the-cookie'."
    },
    {
      text: "A 'correspondência de número' (number matching) em notificações push de MFA é uma contramedida para ataques de 'MFA fatigue'.",
      answer: true,
      comment: "Certo. Ao exigir que o usuário digite um número exibido na tela de login no prompt do aplicativo, garante-se que o usuário está ativamente envolvido no processo de login, tornando mais difícil a aprovação acidental."
    },
    {
      text: "Um certificado digital armazenado em um smart card é um exemplo do fator 'algo que você tem'.",
      answer: true,
      comment: "Certo. O smart card é o objeto físico (posse), e o certificado digital contido nele é a credencial usada para a autenticação."
    },
    {
      text: "A usabilidade é um desafio significativo na implementação de MFA, pois a segurança adicional pode criar atrito para o usuário.",
      answer: true,
      comment: "Certo. Encontrar o equilíbrio certo entre segurança e uma experiência de usuário fluida é um dos principais desafios ao projetar e implementar soluções de MFA."
    },
    {
      text: "O fator de autenticação 'em algum lugar que você está' (geolocalização) é um dos três tipos clássicos de fatores.",
      answer: false,
      comment: "Errado. Os três tipos clássicos são conhecimento, posse e inerência. A localização é considerada um fator contextual ou um quarto tipo emergente, mas não um dos três tradicionais."
    },
    {
      text: "O padrão OATH (Initiative for Open Authentication) é a base para os algoritmos TOTP e HOTP.",
      answer: true,
      comment: "Certo. OATH é a organização que desenvolveu e padronizou os algoritmos de senhas de uso único que são amplamente utilizados em aplicativos autenticadores."
    },
    {
      text: "A autenticação de dois fatores (2FA) e a verificação em duas etapas (2SV) são a mesma coisa.",
      answer: true,
      comment: "Certo. Embora os termos sejam ligeiramente diferentes, na prática, eles são usados de forma intercambiável para descrever o processo de usar dois fatores para verificar a identidade de um usuário."
    },
    {
      text: "Para ser considerado MFA, os múltiplos fatores devem ser verificados em um único passo durante o login.",
      answer: false,
      comment: "Errado. Os fatores são geralmente verificados em etapas sequenciais. Por exemplo, primeiro a senha (conhecimento) e, em seguida, o código do aplicativo (posse)."
    },
    {
      text: "A eficácia do MFA depende da independência dos fatores. Se um invasor pode comprometer um fator, ele não deve conseguir comprometer o outro facilmente.",
      answer: true,
      comment: "Certo. Por exemplo, se um malware em um celular pode roubar a senha digitada E interceptar o código de um aplicativo autenticador no mesmo dispositivo, a independência dos fatores é enfraquecida."
    },
    {
      text: "A opção 'confiar neste dispositivo' reduz a frequência com que um usuário precisa fornecer um segundo fator, diminuindo o atrito sem eliminar completamente o MFA.",
      answer: true,
      comment: "Certo. Esta é uma abordagem baseada em risco que melhora a usabilidade, tratando um dispositivo conhecido e confiável como um fator de autenticação implícito para logins futuros."
    },
    {
      text: "O MFA é uma exigência em muitas regulamentações de conformidade, como PCI DSS e HIPAA, para proteger o acesso a dados sensíveis.",
      answer: true,
      comment: "Certo. Devido à sua eficácia na prevenção de acessos não autorizados, o MFA tornou-se um requisito padrão em muitas estruturas de segurança e conformidade da indústria."
    }
  ],
  "malware-7-5": [
    {
      text: "Um vírus de computador é um programa autônomo que pode se replicar e se espalhar por uma rede sem qualquer intervenção humana.",
      answer: false,
      comment: "Errado. Essa é a definição de um worm. Um vírus precisa de um arquivo hospedeiro (como um executável) e da ação do usuário (como executar o arquivo) para se propagar."
    },
    {
      text: "Um keylogger é um tipo de spyware projetado especificamente para registrar as teclas digitadas por um usuário, geralmente para roubar senhas e outras informações confidenciais.",
      answer: true,
      comment: "Certo. Keyloggers são ferramentas de espionagem focadas na captura de tudo o que é digitado no teclado."
    },
    {
      text: "Um Trojan (Cavalo de Troia) se disfarça de software legítimo e útil para enganar o usuário a instalá-lo, mas não se replica para outros computadores por conta própria.",
      answer: true,
      comment: "Certo. A principal característica de um Trojan é o engano. Diferente de vírus e worms, ele não possui capacidade de autorreplicação."
    },
    {
      text: "Spyware é um tipo de malware cuja única função é exibir anúncios indesejados no computador do usuário.",
      answer: false,
      comment: "Errado. Essa é a definição de adware. Spyware é projetado para espionar o usuário, coletando informações como hábitos de navegação, senhas e dados pessoais sem consentimento."
    },
    {
      text: "Um backdoor é um método secreto para contornar a autenticação normal de um sistema, permitindo acesso remoto não autorizado.",
      answer: true,
      comment: "Certo. Backdoors criam uma 'porta dos fundos' que pode ser explorada por invasores para ganhar ou manter acesso a um sistema comprometido."
    },
    {
      text: "Worms necessitam de um arquivo hospedeiro para se anexar e se propagar, da mesma forma que os vírus.",
      answer: false,
      comment: "Errado. Worms são malwares autônomos que exploram vulnerabilidades de rede para se espalhar. Eles não precisam se anexar a outros arquivos."
    },
    {
      text: "Um rootkit é um tipo de malware projetado para obter controle de nível de administrador sobre um sistema de computador e esconder sua presença e a de outros malwares.",
      answer: true,
      comment: "Certo. A principal função de um rootkit é a furtividade e a obtenção de privilégios elevados, tornando a detecção e remoção extremamente difíceis."
    },
    {
      text: "Adware é sempre malicioso e prejudicial ao sistema operacional.",
      answer: false,
      comment: "Errado. Embora seja invasivo e indesejado, o adware nem sempre é malicioso. Alguns softwares legítimos usam adware como forma de financiamento. No entanto, ele pode ser um vetor para malwares mais perigosos."
    },
    {
      text: "Malware 'fileless' (sem arquivo) reside exclusivamente na memória RAM do computador, sem gravar arquivos em disco, para evitar a detecção por antivírus tradicionais.",
      answer: true,
      comment: "Certo. Este tipo de malware utiliza ferramentas legítimas do sistema (como PowerShell ou WMI) para executar suas ações diretamente na memória, tornando-o muito mais difícil de detectar."
    },
    {
      text: "Ransomware é um malware que rouba informações bancárias do usuário.",
      answer: false,
      comment: "Errado. Ransomware é um malware que criptografa os arquivos do usuário (ou bloqueia o acesso ao sistema) e exige o pagamento de um resgate para restaurar o acesso. O roubo de dados bancários é mais característico de um Trojan-Banker."
    },
    {
      text: "Um vírus de boot infecta o setor de inicialização de um disco rígido ou a Master Boot Record (MBR).",
      answer: true,
      comment: "Certo. Esse tipo de vírus é carregado na memória antes mesmo do sistema operacional iniciar, o que o torna particularmente difícil de remover."
    },
    {
      text: "Um Trojan-Banker é um tipo de cavalo de troia projetado especificamente para roubar credenciais de acesso a serviços de internet banking.",
      answer: true,
      comment: "Certo. Ele monitora a atividade do usuário e, quando detecta o acesso a um site bancário, tenta capturar as informações de login e senha."
    },
    {
      text: "A principal diferença entre um vírus e um worm é que o vírus se replica automaticamente pela rede, enquanto o worm precisa de um hospedeiro.",
      answer: false,
      comment: "Errado. É o oposto. O worm se replica automaticamente pela rede, enquanto o vírus precisa de um arquivo hospedeiro para se anexar e da intervenção do usuário para se propagar."
    },
    {
      text: "Rootkits que operam no modo kernel (nível 0) são mais poderosos e mais difíceis de detectar do que os rootkits que operam no modo usuário.",
      answer: true,
      comment: "Certo. Rootkits de kernel podem modificar o próprio núcleo do sistema operacional, dando-lhes controle total e a capacidade de se esconderem de forma muito eficaz."
    },
    {
      text: "O pagamento do resgate a um ataque de ransomware garante a devolução segura e completa de todos os arquivos criptografados.",
      answer: false,
      comment: "Errado. Não há garantia alguma. Os criminosos podem não fornecer a chave de descriptografia, fornecer uma chave que não funciona ou exigir mais dinheiro. A recomendação geral é não pagar."
    },
    {
      text: "Um keylogger de hardware é um dispositivo físico conectado entre o teclado e o computador, sendo indetectável por software antivírus.",
      answer: true,
      comment: "Certo. Por ser um componente de hardware, ele opera fora do sistema operacional, tornando-se invisível para as ferramentas de segurança baseadas em software."
    },
    {
      text: "Spyware é instalado em um sistema sempre com o consentimento explícito do usuário.",
      answer: false,
      comment: "Errado. A característica definidora do spyware é a falta de consentimento. Ele é projetado para se instalar e operar de forma secreta."
    },
    {
      text: "Um backdoor pode ser uma parte legítima de um programa, deixada por desenvolvedores para facilitar a manutenção, mas que pode ser explorada por invasores.",
      answer: true,
      comment: "Certo. Embora muitos backdoors sejam instalados por malware, alguns são criados intencionalmente por desenvolvedores e, se não forem devidamente protegidos, representam uma grave vulnerabilidade de segurança."
    },
    {
      text: "O worm Stuxnet foi notável por ter como alvo sistemas de controle industrial (SCADA) e causar danos físicos a equipamentos.",
      answer: true,
      comment: "Certo. O Stuxnet é um exemplo famoso de um ciberarma, projetado para sabotar o programa nuclear iraniano, demonstrando que malware pode causar danos no mundo físico."
    },
    {
      text: "Vírus de macro infectam documentos (como .doc ou .xls) e são escritos em linguagens de macro, como o VBA (Visual Basic for Applications).",
      answer: true,
      comment: "Certo. Eles se incorporam em macros de documentos e são executados quando o documento é aberto e as macros são habilitadas."
    },
    {
      text: "Malware 'fileless' é impossível de ser detectado, pois não utiliza o sistema de arquivos.",
      answer: false,
      comment: "Errado. Embora seja mais difícil de detectar, ele pode ser identificado por meio de análise de comportamento, monitoramento de memória, logs de sistema (como PowerShell) e ferramentas de segurança avançadas (EDR)."
    },
    {
      text: "Ransomware do tipo 'locker' impede o acesso aos arquivos criptografando-os, enquanto o ransomware 'crypto' bloqueia o acesso à interface do sistema.",
      answer: false,
      comment: "Errado. É o contrário. Ransomware 'crypto' criptografa os arquivos. Ransomware 'locker' bloqueia o acesso ao sistema (ex: exibe uma tela de resgate em tela cheia) sem necessariamente criptografar os arquivos individuais."
    },
    {
      text: "Um Trojan-Downloader é um tipo de Trojan cuja função principal é baixar e instalar outros malwares no sistema infectado.",
      answer: true,
      comment: "Certo. Ele age como um primeiro estágio de infecção, abrindo as portas para a instalação de mais software malicioso, como spywares ou ransomwares."
    },
    {
      text: "A engenharia social é um método comum para a disseminação de Trojans, convencendo o usuário a executar um arquivo que parece ser legítimo.",
      answer: true,
      comment: "Certo. A eficácia dos Trojans depende diretamente da capacidade de enganar o usuário, e a engenharia social (phishing, iscas) é a principal técnica para isso."
    },
    {
      text: "Um worm sempre precisa de um programa de e-mail para se propagar.",
      answer: false,
      comment: "Errado. Embora worms de e-mail existam (como o ILOVEYOU), os worms modernos geralmente exploram vulnerabilidades em serviços de rede diretamente, sem depender de e-mail."
    },
    {
      text: "A detecção de um rootkit é trivial e pode ser feita com qualquer programa antivírus padrão.",
      answer: false,
      comment: "Errado. A detecção de rootkits é extremamente difícil, pois eles são projetados para se esconderem e subverterem as ferramentas de segurança. Muitas vezes, são necessárias ferramentas especializadas e verificação offline."
    },
    {
      text: "Adware, ao coletar dados de navegação para direcionar anúncios, pode ser considerado uma forma de spyware.",
      answer: true,
      comment: "Certo. A linha entre adware e spyware pode ser tênue. Quando o adware coleta dados do usuário sem consentimento claro para fins de publicidade, ele exibe comportamento de spyware."
    },
    {
      text: "O ransomware WannaCry se espalhou explorando uma vulnerabilidade no protocolo SMB do Windows, conhecida como EternalBlue, agindo como um worm.",
      answer: true,
      comment: "Certo. O WannaCry combinou as características de ransomware (criptografia de arquivos) e worm (autopropagação em rede), o que permitiu sua disseminação global em poucas horas."
    },
    {
      text: "Um vírus polimórfico é um vírus que pode infectar múltiplos tipos de arquivos, como executáveis e documentos.",
      answer: false,
      comment: "Errado. Um vírus polimórfico é aquele que altera seu próprio código (sua 'assinatura') a cada nova infecção para evitar a detecção por antivírus baseados em assinaturas. Um vírus que infecta múltiplos tipos de arquivo é chamado de vírus multipartite."
    },
    {
      text: "Um RAT (Remote Access Trojan) é um tipo de Trojan que cria um backdoor para fornecer controle administrativo remoto sobre o sistema infectado.",
      answer: true,
      comment: "Certo. RATs são ferramentas poderosas para invasores, permitindo que eles executem comandos, espionem o usuário, gerenciem arquivos e usem o computador infectado para outros ataques."
    },
    {
      text: "A principal motivação por trás do adware é a sabotagem de sistemas.",
      answer: false,
      comment: "Errado. A principal motivação do adware é financeira, gerando receita para seus criadores através da exibição de anúncios."
    },
    {
      text: "Malware 'fileless' pode persistir no sistema após uma reinicialização, utilizando chaves de registro do Windows ou tarefas agendadas.",
      answer: true,
      comment: "Certo. Embora opere na memória, o malware 'fileless' pode usar técnicas de persistência que não envolvem a criação de um arquivo executável tradicional, mas sim a inscrição em locais de inicialização automática do sistema."
    },
    {
      text: "A 'dupla extorsão' em ataques de ransomware envolve criptografar os dados e, em seguida, deletar os backups.",
      answer: false,
      comment: "Errado. A dupla extorsão consiste em primeiro roubar (exfiltrar) uma cópia dos dados confidenciais da vítima e, em seguida, criptografar os dados originais. O invasor então ameaça vazar os dados roubados publicamente se o resgate não for pago."
    },
    {
      text: "A análise de sandbox é uma técnica de segurança onde um arquivo suspeito é executado em um ambiente isolado e monitorado para observar seu comportamento sem arriscar o sistema principal.",
      answer: true,
      comment: "Certo. Sandboxing é uma técnica fundamental para analisar malwares de forma segura e identificar suas ações, como modificações no registro, criação de arquivos e comunicação em rede."
    },
    {
      text: "Um worm não pode carregar um 'payload' (carga útil), sua única função é se replicar.",
      answer: false,
      comment: "Errado. Muitos worms carregam payloads maliciosos, que podem ser qualquer tipo de malware, como um backdoor, um rootkit ou um ransomware, que é executado após o worm infectar um novo sistema."
    },
    {
      text: "Todos os keyloggers são maliciosos e ilegais.",
      answer: false,
      comment: "Errado. Existem usos legítimos para keyloggers, como monitoramento de funcionários por empresas (com consentimento) ou controle parental. No entanto, seu uso sem autorização é ilegal."
    },
    {
      text: "Um rootkit de bootloader (bootkit) é ainda mais perigoso que um rootkit de kernel, pois ele modifica o processo de inicialização antes mesmo do kernel do sistema operacional ser carregado.",
      answer: true,
      comment: "Certo. Bootkits comprometem o Master Boot Record (MBR) ou o Volume Boot Record (VBR), garantindo sua execução no início do processo de boot e tornando-os extremamente persistentes e furtivos."
    },
    {
      text: "Spyware pode capturar capturas de tela, gravar áudio e vídeo usando o microfone e a webcam do dispositivo infectado.",
      answer: true,
      comment: "Certo. Spywares avançados possuem uma vasta gama de capacidades de vigilância para monitorar completamente a atividade do usuário e seu ambiente."
    },
    {
      text: "A principal defesa contra ransomware é um software antivírus atualizado.",
      answer: false,
      comment: "Errado. Embora um antivírus seja importante, a principal e mais eficaz defesa contra ransomware é a manutenção de backups regulares, atualizados e armazenados offline ou em um local isolado."
    },
    {
      text: "Um backdoor de hardware é uma modificação em um componente físico (como um chip) que permite acesso não autorizado, sendo praticamente impossível de detectar por software.",
      answer: true,
      comment: "Certo. Backdoors de hardware são uma ameaça de alto nível, geralmente associada a ataques de cadeia de suprimentos ou espionagem estatal, e são extremamente difíceis de identificar."
    },
    {
      text: "Um Trojan não pode conter um vírus.",
      answer: false,
      comment: "Errado. Um Trojan pode ser projetado para, uma vez executado, liberar e ativar outros tipos de malware, incluindo vírus, worms ou spyware, agindo como um 'pacote de entrega'."
    },
    {
      text: "O termo 'malware' é uma abreviação de 'malicious hardware'.",
      answer: false,
      comment: "Errado. 'Malware' é uma abreviação de 'malicious software' (software malicioso)."
    },
    {
      text: "A heurística é uma técnica usada por antivírus para detectar malwares novos ou desconhecidos, analisando características suspeitas no código ou no comportamento do programa.",
      answer: true,
      comment: "Certo. Diferente da detecção por assinatura (que busca malwares conhecidos), a análise heurística procura por padrões de comportamento típicos de malware, permitindo a identificação de ameaças de dia zero."
    },
    {
      text: "Um worm precisa de interação do usuário para se propagar de um computador para outro.",
      answer: false,
      comment: "Errado. A capacidade de se propagar automaticamente, sem intervenção humana, é a característica que define um worm e o diferencia de um vírus."
    },
    {
      text: "A remoção de um rootkit geralmente requer a formatação completa do sistema e a reinstalação do sistema operacional.",
      answer: true,
      comment: "Certo. Devido ao seu profundo nível de integração com o sistema operacional, é muito difícil garantir a remoção completa de um rootkit. A formatação é frequentemente a única solução 100% segura."
    },
    {
      text: "Adware é distribuído principalmente através de vulnerabilidades de rede.",
      answer: false,
      comment: "Errado. Adware é mais comumente distribuído empacotado (bundled) com software gratuito. O usuário o instala sem perceber, ao aceitar os termos de uso sem ler os detalhes."
    },
    {
      text: "O ransomware Ryuk é conhecido por seus ataques direcionados a grandes corporações, exigindo resgates de alto valor, uma tática conhecida como 'big game hunting'.",
      answer: true,
      comment: "Certo. Diferente de ransomwares que se espalham em massa, o Ryuk e outros semelhantes são usados em ataques cirúrgicos contra alvos de alto valor, como hospitais e grandes empresas."
    },
    {
      text: "Malware 'fileless' não pode ser usado para roubar credenciais.",
      answer: false,
      comment: "Errado. Ferramentas como o Mimikatz podem ser injetadas diretamente na memória usando técnicas 'fileless' (como via PowerShell) para extrair senhas e hashes de credenciais da memória do sistema."
    },
    {
      text: "Um vírus de script é escrito em linguagens como JavaScript ou VBScript e pode ser incorporado em páginas da web ou arquivos HTML.",
      answer: true,
      comment: "Certo. Eles podem ser executados quando um usuário visita uma página maliciosa ou abre um anexo de e-mail em HTML, explorando vulnerabilidades no navegador ou cliente de e-mail."
    },
    {
      text: "Um backdoor e um RAT (Remote Access Trojan) são a mesma coisa.",
      answer: false,
      comment: "Errado. Um backdoor é o ponto de acesso secreto. Um RAT é o software completo que utiliza esse backdoor para fornecer uma interface de controle remoto ao invasor. O RAT implementa e usa o backdoor."
    }
  ],
  "osint": [
    {
      text: "OSINT (Open Source Intelligence) refere-se à coleta de informações de fontes publicamente disponíveis.",
      answer: true,
      comment: "Certo. A definição de OSINT é a inteligência produzida a partir de dados e informações disponíveis publicamente."
    },
    {
      text: "O uso de OSINT é sempre ilegal, pois envolve espionagem.",
      answer: false,
      comment: "Errado. OSINT baseia-se em fontes abertas e legais. A ilegalidade depende de como os dados são usados, mas a coleta em si, de fontes públicas, é legal."
    },
    {
      text: "Google Dorking é uma técnica de OSINT que usa operadores de busca avançada do Google para encontrar informações específicas que não são facilmente encontradas com buscas normais.",
      answer: true,
      comment: "Certo. Operadores como 'site:', 'filetype:' e 'inurl:' são usados para refinar buscas e encontrar dados específicos, uma técnica fundamental em OSINT."
    },
    {
      text: "Redes sociais como Facebook, Twitter e LinkedIn são consideradas fontes inúteis para investigações OSINT.",
      answer: false,
      comment: "Errado. Redes sociais são uma das fontes mais ricas para OSINT, fornecendo informações sobre indivíduos, redes de contatos, interesses e atividades."
    },
    {
      text: "Metadados EXIF em imagens podem revelar informações como a data, hora e, às vezes, a localização GPS de onde a foto foi tirada.",
      answer: true,
      comment: "Certo. Os metadados EXIF (Exchangeable Image File Format) incorporados em arquivos de imagem são uma fonte valiosa de informações em investigações."
    },
    {
      text: "O site Shodan é um motor de busca para dispositivos conectados à internet (IoT) e pode ser usado em OSINT para encontrar servidores, webcams e outros sistemas vulneráveis.",
      answer: true,
      comment: "Certo. Shodan é frequentemente chamado de 'Google para hackers' e é uma ferramenta poderosa para mapear a superfície de ataque de uma organização ou encontrar dispositivos específicos."
    },
    {
      text: "A análise de perfis em redes sociais para entender as conexões de uma pessoa é uma técnica de OSINT conhecida como análise de links.",
      answer: true,
      comment: "Certo. A análise de links (ou análise de redes sociais) é usada para mapear relacionamentos e hierarquias entre entidades."
    },
    {
      text: "OSINT se limita apenas a fontes online, não incluindo fontes offline como jornais, livros e registros públicos.",
      answer: false,
      comment: "Errado. OSINT abrange todas as fontes publicamente disponíveis, sejam elas online ou offline, incluindo publicações acadêmicas, registros governamentais, jornais e livros."
    },
    {
      text: "O 'ciclo de inteligência' (planejamento, coleta, processamento, análise, disseminação) não se aplica a OSINT.",
      answer: false,
      comment: "Errado. O ciclo de inteligência é um framework fundamental que se aplica a todas as disciplinas de inteligência, incluindo OSINT, para garantir um processo estruturado e eficaz."
    },
    {
      text: "Ferramentas como Maltego são usadas para visualizar graficamente as relações e conexões entre diferentes pontos de dados coletados durante uma investigação OSINT.",
      answer: true,
      comment: "Certo. Maltego é uma ferramenta popular para análise de links que ajuda a transformar dados brutos em gráficos de inteligência, tornando as conexões mais fáceis de visualizar."
    },
    {
      text: "O arquivo 'robots.txt' de um site lista todas as páginas secretas e confidenciais que um administrador não quer que ninguém veja.",
      answer: false,
      comment: "Errado. O 'robots.txt' é uma diretiva para robôs de busca (como o Googlebot), sugerindo quais páginas não devem ser indexadas. Ele não oferece segurança e, paradoxalmente, pode até revelar a localização de diretórios que o administrador considera sensíveis."
    },
    {
      text: "O WHOIS é um protocolo usado para consultar informações sobre o registro de um nome de domínio ou endereço IP, como o proprietário e a data de criação.",
      answer: true,
      comment: "Certo. Consultas WHOIS são uma das primeiras etapas em OSINT para obter informações sobre a propriedade e administração de um domínio na internet."
    },
    {
      text: "A fase de 'weaponization' (armamentização) é uma parte padrão do ciclo de OSINT.",
      answer: false,
      comment: "Errado. 'Weaponization' faz parte da 'Cyber Kill Chain', um modelo para descrever ataques cibernéticos. O ciclo de OSINT termina com a disseminação da inteligência produzida."
    },
    {
      text: "A 'Inteligência de Imagens' (IMINT) em OSINT pode envolver a análise de imagens de satélite de fontes públicas como o Google Maps.",
      answer: true,
      comment: "Certo. IMINT a partir de fontes abertas é uma disciplina de OSINT que analisa imagens de satélite, fotos e vídeos para extrair inteligência."
    },
    {
      text: "A principal vantagem do OSINT é que as informações coletadas são sempre 100% precisas e verificadas.",
      answer: false,
      comment: "Errado. Uma das maiores desvantagens do OSINT é a necessidade de verificar e validar as informações, que podem ser imprecisas, desatualizadas ou deliberadamente enganosas."
    },
    {
      text: "O site 'Wayback Machine' (archive.org) permite visualizar versões antigas de sites, o que pode ser útil para encontrar informações que foram removidas.",
      answer: true,
      comment: "Certo. O Internet Archive é uma ferramenta essencial em OSINT para análise histórica de websites."
    },
    {
      text: "A 'Inteligência Humana' (HUMINT) é um subconjunto de OSINT.",
      answer: false,
      comment: "Errado. HUMINT (inteligência de fontes humanas, como espiões) e OSINT são disciplinas de inteligência distintas. OSINT baseia-se em fontes abertas, enquanto HUMINT baseia-se em fontes humanas, muitas vezes secretas."
    },
    {
      text: "A análise de 'code repositories' públicos como o GitHub pode revelar chaves de API, senhas ou vulnerabilidades acidentalmente expostas por desenvolvedores.",
      answer: true,
      comment: "Certo. Repositórios de código são minas de ouro para OSINT, pois erros de configuração e vazamentos de credenciais são comuns."
    },
    {
      text: "OSINT é usado exclusivamente por agências de inteligência governamentais.",
      answer: false,
      comment: "Errado. OSINT é usado por uma vasta gama de profissionais, incluindo jornalistas, pesquisadores, detetives particulares, recrutadores, analistas de segurança e criminosos."
    },
    {
      text: "A técnica de 'footprinting' (levantamento de informações) é uma etapa inicial em testes de invasão e depende fortemente de OSINT.",
      answer: true,
      comment: "Certo. Footprinting, ou reconhecimento, é a fase em que um invasor ético (ou malicioso) coleta o máximo de informações possível sobre um alvo, utilizando principalmente técnicas de OSINT."
    },
    {
      text: "Para realizar OSINT, é necessário ter acesso a ferramentas caras e licenciadas.",
      answer: false,
      comment: "Errado. Embora existam ferramentas pagas, uma grande parte do trabalho de OSINT pode ser realizada com ferramentas gratuitas e a própria capacidade de pesquisa e análise do investigador."
    },
    {
      text: "A análise de ofertas de emprego pode revelar informações sobre as tecnologias e a infraestrutura que uma empresa utiliza.",
      answer: true,
      comment: "Certo. Anúncios de vagas frequentemente listam requisitos técnicos específicos (ex: 'experiência com firewall Palo Alto'), revelando detalhes sobre o ambiente tecnológico da organização."
    },
    {
      text: "O 'doxing', a prática de pesquisar e publicar informações privadas sobre um indivíduo, é um uso ético e legal de OSINT.",
      answer: false,
      comment: "Errado. Doxing é o uso malicioso de técnicas de OSINT para assediar e intimidar, sendo antiético e, em muitas jurisdições, ilegal."
    },
    {
      text: "A 'Inteligência de Sinais' (SIGINT), que envolve a interceptação de comunicações, é um tipo de OSINT.",
      answer: false,
      comment: "Errado. SIGINT é uma disciplina de inteligência separada que lida com fontes fechadas ou interceptadas, não fontes publicamente disponíveis."
    },
    {
      text: "Ferramentas como 'theHarvester' são usadas para coletar e-mails, subdomínios, hosts e nomes de funcionários de fontes públicas.",
      answer: true,
      comment: "Certo. 'theHarvester' é uma ferramenta clássica de OSINT para a fase de reconhecimento, agregando dados de várias fontes públicas."
    },
    {
      text: "A verificação cruzada de informações de múltiplas fontes é crucial em OSINT para avaliar a credibilidade e precisão dos dados.",
      answer: true,
      comment: "Certo. Como as fontes abertas podem ser não confiáveis, a validação através de múltiplas fontes independentes é um princípio fundamental da análise de OSINT."
    },
    {
      text: "O principal desafio do OSINT não é a falta de dados, mas sim o excesso de informações (sobrecarga de dados) e a dificuldade em filtrar o que é relevante.",
      answer: true,
      comment: "Certo. Analistas de OSINT precisam ser proficientes em filtrar 'sinal' do 'ruído' para encontrar a informação acionável em meio a um mar de dados."
    },
    {
      text: "A análise de metadados de documentos (PDF, DOCX) pode revelar nomes de usuário, software utilizado e histórico de edições.",
      answer: true,
      comment: "Certo. Ferramentas de extração de metadados podem encontrar informações valiosas deixadas para trás nos arquivos, que podem ser usadas em ataques de engenharia social ou para mapear a rede interna."
    },
    {
      text: "O 'sock puppeting' é a criação de perfis online falsos para interagir com um alvo e extrair informações sem revelar a identidade real do investigador.",
      answer: true,
      comment: "Certo. Esta é uma técnica de OSINT ativo, mas que levanta questões éticas e legais, pois pode envolver engano e representação falsa."
    },
    {
      text: "A estrutura de OSINT divide as fontes em seis categorias principais: Mídia, Internet, Dados Públicos Governamentais, Publicações Profissionais/Acadêmicas, Dados Comerciais e Literatura Cinzenta.",
      answer: true,
      comment: "Certo. Esta é uma classificação comum das fontes de OSINT, mostrando a amplitude de dados disponíveis publicamente."
    }
  ],
  "esteganografia": [
    {
      text: "Esteganografia é a arte e ciência de escrever mensagens ocultas de tal forma que ninguém, além do remetente e do destinatário, suspeite da existência da mensagem.",
      answer: true,
      comment: "Certo. Diferente da criptografia (que torna a mensagem ilegível), a esteganografia oculta a própria existência da comunicação."
    },
    {
      text: "Esteganografia e criptografia são a mesma coisa.",
      answer: false,
      comment: "Errado. Criptografia protege o conteúdo de uma mensagem, enquanto a esteganografia protege a existência da mensagem. Elas podem ser usadas juntas."
    },
    {
      text: "A técnica LSB (Least Significant Bit) é um método comum de esteganografia em imagens, onde a informação secreta é inserida no bit menos significativo dos dados de cada pixel.",
      answer: true,
      comment: "Certo. A alteração do LSB de um pixel causa uma mudança de cor tão sutil que é imperceptível ao olho humano, mas permite armazenar dados."
    },
    {
      text: "Qualquer tipo de arquivo pode ser usado como um 'recipiente' (cover file) para esteganografia, incluindo imagens, áudio, vídeo e até protocolos de rede.",
      answer: true,
      comment: "Certo. Desde que o formato do arquivo tenha redundância ou espaço que possa ser modificado sem corromper o arquivo, ele pode ser usado para ocultar dados."
    },
    {
      text: "A esteganálise é o processo de criar mensagens esteganográficas.",
      answer: false,
      comment: "Errado. A esteganálise é a arte e ciência de detectar mensagens esteganográficas. É o equivalente da criptoanálise para a esteganografia."
    },
    {
      text: "Ocultar uma mensagem em um arquivo de imagem sempre aumenta significativamente o tamanho do arquivo, tornando a detecção fácil.",
      answer: false,
      comment: "Errado. Muitas técnicas, como a LSB, modificam os dados existentes sem alterar o tamanho do arquivo, tornando a detecção mais difícil."
    },
    {
      text: "A esteganografia de rede envolve ocultar dados nos cabeçalhos ou payloads de pacotes de rede, como TCP/IP.",
      answer: true,
      comment: "Certo. Campos não utilizados ou de preenchimento em protocolos de rede podem ser usados para transportar dados ocultos, criando um canal de comunicação secreto."
    },
    {
      text: "A principal fraqueza da esteganografia é que, uma vez detectada a existência da mensagem oculta, ela é imediatamente legível.",
      answer: false,
      comment: "Errado. Por essa razão, a esteganografia é frequentemente combinada com a criptografia. Mesmo que a mensagem oculta seja detectada e extraída, ela ainda estará criptografada e ilegível."
    },
    {
      text: "A esteganografia de áudio pode ocultar informações alterando levemente as amostras de som de uma forma que seja inaudível para o ouvido humano.",
      answer: true,
      comment: "Certo. Técnicas como 'echo hiding' ou 'phase coding' podem incorporar dados em arquivos de áudio sem distorção perceptível."
    },
    {
      text: "Usar tinta invisível para escrever uma mensagem secreta é um exemplo histórico de esteganografia.",
      answer: true,
      comment: "Certo. Este é um exemplo clássico de esteganografia física, onde a mensagem está oculta à vista de todos até que um método de revelação (como calor ou luz UV) seja aplicado."
    },
    {
      text: "A relação sinal-ruído (SNR) de um arquivo de mídia não é afetada pela inserção de dados esteganográficos.",
      answer: false,
      comment: "Errado. A inserção de dados sempre introduz algum tipo de ruído ou alteração no sinal original. Ferramentas de esteganálise podem procurar por essas anomalias estatísticas."
    },
    {
      text: "A esteganografia linguística oculta mensagens na estrutura ou na escolha de palavras de um texto de aparência normal.",
      answer: true,
      comment: "Certo. Isso pode ser feito através de acrósticos, erros gramaticais intencionais ou padrões na escolha de sinônimos."
    },
    {
      text: "Um arquivo que contém dados esteganográficos é chamado de 'stego-object' ou 'stego-file'.",
      answer: true,
      comment: "Certo. O arquivo original é o 'cover-object', e após a inserção da mensagem secreta, ele se torna o 'stego-object'."
    },
    {
      text: "A compressão de um arquivo de imagem com perdas (como JPEG) antes de aplicar esteganografia LSB é uma boa prática.",
      answer: false,
      comment: "Errado. A compressão com perdas pode destruir ou corromper os dados ocultos nos bits menos significativos. A esteganografia LSB deve ser aplicada em formatos sem perdas (como PNG ou BMP) ou antes da compressão final."
    },
    {
      text: "A esteganografia é usada exclusivamente para fins maliciosos, como comunicação entre terroristas ou exfiltração de dados por malware.",
      answer: false,
      comment: "Errado. Ela tem usos legítimos, como marca d'água digital para proteção de direitos autorais ou para garantir a privacidade de comunicações em regimes opressivos."
    },
    {
      text: "A capacidade de carga (payload capacity) de um arquivo recipiente refere-se à quantidade máxima de dados que pode ser ocultada dentro dele sem ser detectada.",
      answer: true,
      comment: "Certo. Existe um trade-off entre a capacidade de carga e a robustez/imperceptibilidade da mensagem oculta."
    },
    {
      text: "A técnica de 'espalhamento de espectro' (spread spectrum) em esteganografia de áudio oculta a mensagem codificando-a em uma faixa de frequência muito estreita.",
      answer: false,
      comment: "Errado. A técnica de espalhamento de espectro espalha a mensagem por uma ampla faixa de frequências, tornando-a semelhante ao ruído de fundo e mais difícil de detectar."
    },
    {
      text: "A análise de histograma de cores de uma imagem pode revelar anomalias causadas por esteganografia LSB simples.",
      answer: true,
      comment: "Certo. A inserção de dados LSB pode criar padrões estatísticos incomuns no histograma de cores, que podem ser detectados por ferramentas de esteganálise."
    },
    {
      text: "A esteganografia de vídeo pode ocultar dados em quadros individuais (frames) ou entre os quadros, explorando a redundância temporal.",
      answer: true,
      comment: "Certo. Vídeos têm uma capacidade de carga muito alta devido ao grande número de quadros e à quantidade de dados em cada um."
    },
    {
      text: "Se uma mensagem oculta sobrevive a modificações no arquivo recipiente (como redimensionamento ou compressão), o método esteganográfico é considerado robusto.",
      answer: true,
      comment: "Certo. A robustez é uma propriedade importante, especialmente para aplicações como marca d'água digital."
    },
    {
      text: "Ocultar um arquivo ZIP dentro de um arquivo JPEG simplesmente concatenando os dois arquivos é um exemplo de esteganografia.",
      answer: true,
      comment: "Certo. Esta é uma forma simples de esteganografia por concatenação. Muitos visualizadores de imagem ignorarão os dados extras no final do arquivo, enquanto um descompactador pode encontrá-los."
    },
    {
      text: "A esteganografia requer chaves secretas, assim como a criptografia.",
      answer: true,
      comment: "Certo. Muitos sistemas esteganográficos usam uma chave (stego-key) para determinar como e onde os dados são ocultados, adicionando uma camada extra de segurança."
    },
    {
      text: "A termografia (análise de temperatura de componentes) pode ser usada como uma forma de esteganografia física para exfiltrar dados de sistemas 'air-gapped'.",
      answer: true,
      comment: "Certo. Pesquisas demonstraram que é possível modular a carga de trabalho da CPU para gerar flutuações de calor que podem ser lidas por uma câmera térmica próxima, transmitindo dados sem uma conexão de rede."
    },
    {
      text: "A esteganografia de partição de disco oculta dados em áreas não utilizadas ou 'folgas' do sistema de arquivos.",
      answer: true,
      comment: "Certo. Ferramentas podem criar partições ocultas ou usar o espaço não alocado no disco para armazenar dados de forma invisível para o sistema operacional."
    },
    {
      text: "A presença de esteganografia em uma rede é sempre uma indicação de atividade maliciosa.",
      answer: false,
      comment: "Errado. Embora possa ser usada para exfiltração de dados, também pode ter usos benignos ou ser parte de protocolos de rede específicos. O contexto é crucial."
    },
    {
      text: "A técnica de 'paleta de cores' para esteganografia em imagens GIF envolve a modificação da ordem das cores na paleta da imagem para codificar informações.",
      answer: true,
      comment: "Certo. Como a ordem das cores na paleta geralmente não importa para a renderização da imagem, ela pode ser usada para ocultar uma mensagem secreta."
    },
    {
      text: "A esteganografia de neve (snow) oculta dados em espaços em branco e tabulações no final das linhas de um arquivo de texto ASCII.",
      answer: true,
      comment: "Certo. Esses caracteres são invisíveis para um leitor humano, mas podem ser lidos por um programa para extrair a mensagem oculta."
    },
    {
      text: "É impossível detectar esteganografia se o método exato e a chave forem desconhecidos.",
      answer: false,
      comment: "Errado. A esteganálise estatística (blind steganalysis) tenta detectar a presença de dados ocultos sem qualquer conhecimento do método utilizado, procurando por anomalias nos arquivos."
    },
    {
      text: "A esteganografia pode ser usada para contornar firewalls e sistemas de prevenção de perda de dados (DLP).",
      answer: true,
      comment: "Certo. Ao ocultar dados sensíveis em tráfego de aparência benigna (como imagens em redes sociais), um invasor pode exfiltrar informações sem acionar os alarmes de segurança."
    },
    {
      text: "O objetivo da esteganografia é garantir a integridade da mensagem.",
      answer: false,
      comment: "Errado. O objetivo da esteganografia é a confidencialidade através da obscuridade. A integridade da mensagem (garantir que ela não foi alterada) é um objetivo da criptografia, geralmente alcançado com hashes ou MACs."
    }
  ],
  "recuperacao-dados": [
    {
      text: "A recuperação de dados é o processo de resgatar dados inacessíveis, perdidos, corrompidos ou formatados de mídias de armazenamento digital.",
      answer: true,
      comment: "Certo. Esta é a definição central da recuperação de dados, que pode ser aplicada a discos rígidos, SSDs, pen drives, etc."
    },
    {
      text: "Quando um arquivo é 'deletado' em sistemas operacionais como Windows ou macOS, ele é imediatamente apagado fisicamente do disco.",
      answer: false,
      comment: "Errado. Normalmente, apenas a referência ao arquivo na tabela de alocação de arquivos (como MFT ou FAT) é removida. Os dados reais permanecem no disco até serem sobrescritos por novos dados."
    },
    {
      text: "A formatação de um disco sempre apaga todos os dados de forma irrecuperável.",
      answer: false,
      comment: "Errado. Uma 'formatação rápida' apenas recria o sistema de arquivos, deixando a maioria dos dados originais intacta e recuperável. Uma 'formatação completa' (ou de baixo nível) é mais destrutiva, mas ainda pode deixar vestígios."
    },
    {
      text: "A recuperação de dados de um SSD (Solid-State Drive) é geralmente mais fácil do que de um HDD (Hard Disk Drive) tradicional.",
      answer: false,
      comment: "Errado. É significativamente mais difícil. Comandos como o TRIM e o Garbage Collection em SSDs apagam ativamente os blocos de dados não utilizados para manter o desempenho, tornando a recuperação de arquivos deletados quase impossível sem acesso especializado ao controlador."
    },
    {
      text: "O 'carving' de arquivos é uma técnica de recuperação de dados que busca por cabeçalhos e rodapés de tipos de arquivo conhecidos (como JPEG, PDF) para reconstruir arquivos quando a informação do sistema de arquivos está ausente ou corrompida.",
      answer: true,
      comment: "Certo. O 'carving' (ou escultura) ignora o sistema de arquivos e lê o disco sequencialmente para 'esculpir' arquivos a partir dos dados brutos."
    },
    {
      text: "Danos físicos a um HDD, como uma falha na cabeça de leitura/gravação, podem ser resolvidos usando software de recuperação de dados.",
      answer: false,
      comment: "Errado. Danos físicos requerem intervenção em um ambiente controlado ('sala limpa') para substituir os componentes danificados antes que qualquer tentativa de recuperação de software possa ser feita."
    },
    {
      text: "Uma 'imagem de disco' é uma cópia bit a bit de um dispositivo de armazenamento. É uma prática recomendada criar uma imagem antes de tentar a recuperação de dados para evitar mais danos ao dispositivo original.",
      answer: true,
      comment: "Certo. Trabalhar em uma imagem preserva o estado original da mídia e permite múltiplas tentativas de recuperação sem arriscar a fonte original."
    },
    {
      text: "A recuperação de dados de um celular criptografado sem o código de acesso do usuário é um processo trivial com as ferramentas certas.",
      answer: false,
      comment: "Errado. A criptografia moderna em dispositivos móveis (como no iOS e Android) torna a recuperação de dados sem a chave de descriptografia (derivada da senha do usuário) extremamente difícil ou impossível."
    },
    {
      text: "A técnica de 'chip-off' envolve a remoção física do chip de memória de um dispositivo (como um celular ou pen drive) para lê-lo em um leitor de chip externo.",
      answer: true,
      comment: "Certo. Esta é uma técnica avançada de recuperação de dados usada quando a placa de circuito do dispositivo está danificada, mas o chip de memória está intacto."
    },
    {
      text: "Se um disco rígido está fazendo barulhos de clique ('click of death'), a melhor ação é continuar tentando ligá-lo até que ele funcione.",
      answer: false,
      comment: "Errado. Ruídos de clique indicam uma falha mecânica grave, provavelmente nas cabeças de leitura. Continuar a ligar o disco pode causar danos permanentes aos pratos magnéticos, tornando a recuperação impossível. O dispositivo deve ser desligado imediatamente."
    },
    {
      text: "A recuperação de dados de fitas magnéticas (backup em fita) é impossível uma vez que a fita está danificada.",
      answer: false,
      comment: "Errado. Embora desafiador, existem técnicas especializadas para limpar, reparar e reler fitas danificadas para recuperar os dados."
    },
    {
      text: "O comando TRIM em SSDs melhora o desempenho de escrita, mas é um obstáculo para a recuperação de dados.",
      answer: true,
      comment: "Certo. O TRIM informa ao SSD quais blocos de dados não estão mais em uso, permitindo que o drive os apague internamente, o que torna os dados irrecuperáveis por métodos de software padrão."
    },
    {
      text: "A recuperação de dados de um sistema RAID falho é sempre simples, pois o RAID foi projetado para redundância.",
      answer: false,
      comment: "Errado. A recuperação de RAID pode ser extremamente complexa, especialmente com falhas múltiplas de disco, falha do controlador, reconfiguração incorreta ou quando a paridade está corrompida."
    },
    {
      text: "A 'recuperação lógica' lida com cenários onde o hardware está funcionando corretamente, mas os dados estão inacessíveis devido a erros de software, como exclusão acidental, formatação ou corrupção do sistema de arquivos.",
      answer: true,
      comment: "Certo. Isso se contrapõe à 'recuperação física', que lida com falhas de hardware."
    },
    {
      text: "A desfragmentação de um disco rígido torna a recuperação de arquivos deletados mais fácil.",
      answer: false,
      comment: "Errado. A desfragmentação move os arquivos para serem contíguos. Isso pode sobrescrever o espaço livre onde os arquivos deletados residiam, tornando a recuperação mais difícil ou impossível."
    },
    {
      text: "Em um ataque de ransomware, os arquivos não são realmente criptografados, apenas renomeados para assustar o usuário.",
      answer: false,
      comment: "Errado. Ransomwares modernos usam algoritmos de criptografia fortes (como AES e RSA) para tornar os arquivos genuinamente inacessíveis sem a chave de descriptografia correta."
    },
    {
      text: "A recuperação de dados de um HD que sofreu danos por água deve começar com a secagem do disco usando um secador de cabelo.",
      answer: false,
      comment: "Errado. Tentar secar um HD pode causar mais corrosão e deixar resíduos nos pratos. A abordagem correta é não secá-lo, selá-lo em um saco antiestático e enviá-lo imediatamente a um profissional, que o abrirá em uma sala limpa."
    },
    {
      text: "A 'entropia' de um arquivo pode ser usada para determinar se ele está criptografado ou comprimido.",
      answer: true,
      comment: "Certo. Dados com alta entropia parecem aleatórios. Como a criptografia e a compressão aumentam a entropia dos dados, uma alta entropia sugere que o arquivo está em um desses estados, tornando a recuperação de conteúdo mais complexa."
    },
    {
      text: "A técnica JTAG (Joint Test Action Group) pode ser usada em perícia móvel para contornar a segurança e extrair uma imagem completa da memória de um dispositivo.",
      answer: true,
      comment: "Certo. JTAG fornece acesso de baixo nível ao hardware, o que pode permitir a extração de dados mesmo de dispositivos bloqueados ou danificados."
    },
    {
      text: "A recuperação de dados de máquinas virtuais (VMs) é idêntica à de máquinas físicas.",
      answer: false,
      comment: "Errado. A recuperação de VMs adiciona camadas de complexidade, como o sistema de arquivos do host, o formato do disco virtual (VMDK, VHDX) e snapshots, que devem ser considerados."
    },
    {
      text: "A 'estagnação de dados' (data rot) refere-se à degradação gradual de mídias de armazenamento ao longo do tempo, que pode levar à corrupção de dados mesmo que o dispositivo não seja usado.",
      answer: true,
      comment: "Certo. Mídias magnéticas (HDDs, fitas) e ópticas (CDs, DVDs) são suscetíveis à degradação ao longo de muitos anos, tornando os dados ilegíveis."
    },
    {
      text: "A recuperação de dados de um banco de dados corrompido envolve apenas a restauração do último backup.",
      answer: false,
      comment: "Errado. Se o backup não estiver disponível ou atualizado, a recuperação pode envolver a tentativa de reparar as tabelas corrompidas, extrair dados de arquivos de log de transações ou usar ferramentas especializadas para reconstruir o banco de dados."
    },
    {
      text: "A 'cadeia de custódia' é um conceito crucial na recuperação de dados para fins forenses, documentando o manuseio da evidência digital para garantir sua integridade e admissibilidade em tribunal.",
      answer: true,
      comment: "Certo. A falha em manter uma cadeia de custódia adequada pode invalidar a evidência digital."
    },
    {
      text: "É possível recuperar dados de um CD ou DVD que foi fisicamente quebrado em pedaços.",
      answer: false,
      comment: "Errado. A camada de dados em mídias ópticas é extremamente fina. Uma vez que o disco é quebrado, a integridade dos dados é destruída e a recuperação não é viável."
    },
    {
      text: "O 'slack space' (espaço de folga) é o espaço não utilizado em um cluster de disco entre o final de um arquivo e o final do cluster, e pode conter restos de dados de arquivos anteriores.",
      answer: true,
      comment: "Certo. Analisar o slack space é uma técnica de perícia forense para encontrar dados residuais que não foram completamente sobrescritos."
    },
    {
      text: "A recuperação de dados de um sistema de arquivos criptografado (como BitLocker ou FileVault) é possível sem a chave de recuperação ou senha.",
      answer: false,
      comment: "Errado. A criptografia de disco completo é projetada para tornar os dados inacessíveis sem a chave. A recuperação só é possível se a chave for conhecida ou se houver uma vulnerabilidade explorável no algoritmo (o que é extremamente raro)."
    },
    {
      text: "A substituição da placa controladora (PCB) de um disco rígido danificado por uma placa idêntica de outro disco sempre resolve o problema.",
      answer: false,
      comment: "Errado. Em HDDs modernos, a placa controladora contém firmware adaptativo exclusivo para aquele drive específico. A simples troca de placas não funciona e requer a transferência de um chip ROM/NVRAM da placa original para a placa doadora."
    },
    {
      text: "O processo de 'degaussing' (desmagnetização) usa um campo magnético forte para apagar dados de mídias magnéticas de forma segura e irrecuperável.",
      answer: true,
      comment: "Certo. Degaussing é um método de sanitização de dados que destrói os dados em nível magnético, sendo muito mais seguro que a simples exclusão ou formatação."
    },
    {
      text: "A recuperação de dados de um smartphone que foi redefinido para as configurações de fábrica é geralmente bem-sucedida.",
      answer: false,
      comment: "Errado. Em smartphones modernos, a redefinição de fábrica geralmente aciona um apagamento criptográfico (crypto-erase), onde a chave de criptografia do dispositivo é destruída, tornando todos os dados do usuário permanentemente inacessíveis."
    },
    {
      text: "Se você derramar líquido em um laptop, a primeira etapa para a recuperação de dados é ligá-lo para ver se ainda funciona.",
      answer: false,
      comment: "Errado. Ligar um dispositivo eletrônico molhado pode causar curtos-circuitos e danos irreparáveis. A primeira etapa é desligar a energia imediatamente, remover a bateria (se possível) e iniciar o processo de secagem ou procurar ajuda profissional."
    }
  ],
  "recuperacao-arquivos": [
    {
      text: "A técnica de 'file carving' permite recuperar arquivos baseando-se em seus cabeçalhos e rodapés (headers/footers), mesmo sem metadados do sistema de arquivos.",
      answer: true,
      comment: "Certo. File carving é essencial para recuperar arquivos de mídias formatadas ou quando a estrutura do sistema de arquivos está corrompida, pois ignora os metadados e busca por assinaturas de arquivos conhecidas."
    },
    {
      text: "Quando um arquivo é 'deletado' em sistemas como NTFS ou EXT4, seus dados são imediatamente apagados do disco.",
      answer: false,
      comment: "Errado. Apenas a referência ao arquivo no sistema de arquivos (MFT no NTFS, inode no EXT4) é marcada como deletada. Os dados permanecem no disco até serem sobrescritos por novos dados."
    },
    {
      text: "A recuperação de arquivos em SSDs é geralmente mais fácil do que em HDDs devido à sua velocidade.",
      answer: false,
      comment: "Errado. É muito mais difícil devido ao comando TRIM, que instrui o SSD a apagar permanentemente os blocos de dados não utilizados para otimizar o desempenho, tornando a recuperação por software quase impossível."
    },
    {
      text: "O 'journal' de sistemas de arquivos como EXT4 ou NTFS pode ser usado para ajudar a recuperar metadados de arquivos deletados recentemente.",
      answer: true,
      comment: "Certo. O journal registra as alterações que serão feitas no sistema de arquivos. Em alguns casos, pode conter informações sobre arquivos e diretórios recém-deletados, auxiliando na sua recuperação."
    },
    {
      text: "Ferramentas como o PhotoRec são eficazes apenas para recuperar fotos.",
      answer: false,
      comment: "Errado. Apesar do nome, o PhotoRec é uma ferramenta de file carving que pode recuperar centenas de tipos de arquivos diferentes (documentos, vídeos, arquivos compactados, etc.), não apenas imagens."
    },
    {
      text: "Formatar um disco rígido (formatação rápida) apaga todos os dados de forma irrecuperável.",
      answer: false,
      comment: "Errado. A formatação rápida apenas recria a estrutura do sistema de arquivos, deixando a maior parte dos dados originais intacta e recuperável por software especializado até que seja sobrescrita."
    },
    {
      text: "O 'slack space' (espaço de folga) nunca contém informações úteis para a recuperação de dados.",
      answer: false,
      comment: "Errado. O slack space, o espaço entre o final de um arquivo e o final do cluster, pode conter fragmentos de dados de arquivos que foram deletados anteriormente, sendo uma fonte valiosa em investigações forenses."
    },
    {
      text: "A recuperação de arquivos de um sistema de arquivos criptografado (EFS, BitLocker) é impossível sem a chave de criptografia.",
      answer: true,
      comment: "Certo. A criptografia é projetada para proteger os dados. Sem a chave, senha ou token de recuperação correto, os dados recuperados serão apenas um conjunto de bytes embaralhados e inúteis."
    },
    {
      text: "A 'Master File Table' (MFT) no sistema de arquivos NTFS contém registros para todos os arquivos e diretórios, e sua análise é crucial para a recuperação de arquivos.",
      answer: true,
      comment: "Certo. A MFT é o coração do NTFS. Mesmo após a exclusão de um arquivo, seu registro na MFT pode permanecer por um tempo, contendo informações vitais para a recuperação."
    },
    {
      text: "O uso contínuo de um computador após a exclusão acidental de um arquivo diminui as chances de recuperação.",
      answer: true,
      comment: "Certo. O uso contínuo gera novos arquivos (temporários, cache, etc.) que podem sobrescrever os blocos de dados do arquivo deletado, tornando a recuperação impossível."
    }
  ],
  "ambientes-nuvem": [
    {
      text: "No Modelo de Responsabilidade Compartilhada da AWS, a Amazon é responsável por proteger o sistema operacional das instâncias EC2 do cliente.",
      answer: false,
      comment: "Errado. A AWS é responsável pela segurança 'da' nuvem (infraestrutura), mas o cliente é responsável pela segurança 'na' nuvem, o que inclui o SO, patches, configuração de firewall (security groups) e dados."
    },
    {
      text: "O versionamento de objetos em um bucket S3 da AWS pode ajudar a recuperar arquivos deletados ou sobrescritos acidentalmente.",
      answer: true,
      comment: "Certo. Com o versionamento ativado, cada modificação ou exclusão de um objeto cria uma nova versão, permitindo que as versões anteriores sejam restauradas facilmente."
    },
    {
      text: "Snapshots de volumes EBS (Elastic Block Store) na AWS são cópias de segurança pontuais que podem ser usadas para restaurar um volume ou criar um novo.",
      answer: true,
      comment: "Certo. Snapshots são o principal mecanismo para backup e recuperação de dados de volumes EBS, que funcionam como os discos rígidos das instâncias EC2."
    },
    {
      text: "O Azure Site Recovery é uma ferramenta usada exclusivamente para migrar máquinas virtuais para o Azure, sem funcionalidades de recuperação de desastres.",
      answer: false,
      comment: "Errado. O Azure Site Recovery é uma solução robusta de DRaaS (Disaster Recovery as a Service) que orquestra a replicação, o failover e o failback de máquinas virtuais para um local secundário, seja on-premises ou outra região do Azure."
    },
    {
      text: "No Google Cloud Platform (GCP), os snapshots de Persistent Disks são sempre completos, ocupando o mesmo espaço que o disco original.",
      answer: false,
      comment: "Errado. Os snapshots no GCP são incrementais. Após o primeiro snapshot (que é completo), os snapshots subsequentes armazenam apenas os blocos que foram alterados desde o snapshot anterior, economizando custos de armazenamento."
    },
    {
      text: "O AWS CloudTrail registra todas as chamadas de API feitas em uma conta AWS, sendo uma ferramenta essencial para auditoria de segurança e investigação forense.",
      answer: true,
      comment: "Certo. O CloudTrail fornece um histórico detalhado de eventos, incluindo quem fez a chamada, de qual endereço IP, quando e quais recursos foram afetados, o que é crucial para entender um incidente de segurança."
    },
    {
      text: "O 'Object Lock' no Amazon S3 pode ser usado para implementar um modelo WORM (Write-Once-Read-Many), impedindo que objetos sejam deletados ou modificados por um período fixo.",
      answer: true,
      comment: "Certo. O Object Lock é uma ferramenta de conformidade que ajuda a prevenir a exclusão acidental ou maliciosa de dados críticos, aplicando políticas de retenção imutáveis."
    },
    {
      text: "No Azure, a 'exclusão reversível' (soft delete) para blobs de armazenamento, quando ativada, permite recuperar blobs que foram deletados.",
      answer: true,
      comment: "Certo. A exclusão reversível funciona como uma lixeira, mantendo os blobs deletados por um período de retenção configurável, protegendo contra exclusões acidentais ou maliciosas."
    },
    {
      text: "A responsabilidade pela criptografia de dados em repouso (at-rest) na nuvem é sempre e unicamente do provedor de nuvem.",
      answer: false,
      comment: "Errado. Embora os provedores ofereçam criptografia padrão, o cliente tem a responsabilidade e a opção de gerenciar suas próprias chaves (CMK - Customer-Managed Keys) ou usar criptografia do lado do cliente para um controle mais granular."
    },
    {
      text: "A análise forense em um ambiente de nuvem é mais simples do que em um ambiente on-premises, pois o provedor de nuvem fornece acesso total ao hardware físico.",
      answer: false,
      comment: "Errado. A análise forense na nuvem é mais complexa. O acesso ao hardware físico é impossível, e os investigadores dependem dos logs e das APIs fornecidas pelo provedor, o que apresenta desafios únicos de jurisdição, coleta e preservação de evidências."
    }
  ]
,
  "seguranca-redes": [
    {
      text: "Um firewall stateless inspeciona o estado de conexões ativas para tomar decisões, tornando-o mais seguro que um firewall stateful.",
      answer: false,
      comment: "Errado. É o firewall stateful que mantém o controle do estado das conexões. Firewalls stateless analisam pacotes isoladamente, o que os torna menos seguros e menos contextuais."
    },
    {
      text: "Um Web Application Firewall (WAF) opera na Camada 7 (Aplicação) do modelo OSI para proteger contra ataques como SQL Injection e XSS.",
      answer: true,
      comment: "Certo. WAFs são especializados em proteger aplicações web, analisando o tráfego HTTP/HTTPS para bloquear ameaças específicas dessa camada."
    },
    {
      text: "A regra de 'implicit deny' em uma configuração de firewall significa que todo tráfego que não é explicitamente permitido é bloqueado por padrão.",
      answer: true,
      comment: "Certo. Esta é uma prática de segurança fundamental (princípio do privilégio mínimo) que garante que apenas o tráfego conhecido e aprovado possa passar."
    },
    {
      text: "Um Intrusion Detection System (IDS) é projetado para detectar e bloquear ativamente ameaças de rede em tempo real.",
      answer: false,
      comment: "Errado. Um IDS apenas detecta e alerta sobre possíveis ameaças. O Intrusion Prevention System (IPS) é a tecnologia que pode bloquear ativamente o tráfego malicioso."
    },
    {
      text: "Um Intrusion Prevention System (IPS) é normalmente posicionado 'inline' (em linha) no tráfego de rede para poder descartar pacotes maliciosos.",
      answer: true,
      comment: "Certo. Para poder prevenir ativamente, o IPS deve estar no caminho do tráfego para inspecioná-lo e bloqueá-lo antes que atinja o alvo."
    },
    {
      text: "A detecção baseada em assinaturas em um IDS/IPS é altamente eficaz contra ataques de dia zero (zero-day).",
      answer: false,
      comment: "Errado. A detecção por assinatura depende de padrões de ataques já conhecidos. É a detecção baseada em anomalia ou heurística que tem maior chance de identificar ataques de dia zero."
    },
    {
      text: "Um antivírus tradicional foca principalmente na detecção de malware através de assinaturas de arquivos conhecidos.",
      answer: true,
      comment: "Certo. O método primário de antivírus legados é comparar arquivos com um banco de dados de assinaturas de malware conhecido, sendo menos eficaz contra ameaças novas ou polimórficas."
    },
    {
      text: "EDR (Endpoint Detection and Response) oferece mais visibilidade do que um antivírus tradicional, coletando telemetria detalhada sobre processos, conexões de rede e alterações no registro em um endpoint.",
      answer: true,
      comment: "Certo. O EDR vai além da simples detecção de arquivos, focando no comportamento do endpoint para identificar atividades maliciosas e fornecer ferramentas para investigação e resposta."
    },
    {
      text: "XDR (Extended Detection and Response) integra e correlaciona dados de múltiplas fontes de segurança, como endpoints, redes, nuvem e e-mail, para fornecer uma visão unificada da ameaça.",
      answer: true,
      comment: "Certo. XDR é uma evolução do EDR, quebrando os silos de segurança e permitindo uma detecção e resposta mais abrangente e contextualizada em todo o ambiente de TI."
    },
    {
      text: "SOAR (Security Orchestration, Automation, and Response) é uma ferramenta que apenas coleta e agrega logs de segurança.",
      answer: false,
      comment: "Errado. Essa é a definição de um SIEM. Uma plataforma SOAR foca em automatizar e orquestrar as ações de resposta a incidentes, usando 'playbooks' para executar tarefas repetitivas."
    },
    {
      text: "Um SIEM (Security Information and Event Management) tem como principal função a correlação de eventos de segurança de diversas fontes para identificar incidentes e anomalias.",
      answer: true,
      comment: "Certo. A força de um SIEM está em sua capacidade de agregar dados de logs de firewalls, servidores, IDS, etc., e aplicar regras de correlação para gerar alertas de segurança significativos."
    },
    {
      text: "NAT (Network Address Translation) é um mecanismo de segurança projetado para criptografar o tráfego de rede.",
      answer: false,
      comment: "Errado. NAT é usado para traduzir endereços IP privados em um ou mais endereços IP públicos, conservando o espaço de endereçamento IPv4. Embora oculte a estrutura da rede interna, sua principal função não é a criptografia (que é feita por tecnologias como VPNs)."
    },
    {
      text: "O PAT (Port Address Translation), um tipo de NAT dinâmico, permite que múltiplos dispositivos em uma rede local compartilhem um único endereço IP público, usando números de porta diferentes para distinguir as conexões.",
      answer: true,
      comment: "Certo. PAT, também conhecido como NAT Overload, é a forma mais comum de NAT usada em redes domésticas e corporativas para permitir o acesso à internet para múltiplos dispositivos."
    },
    {
      text: "Um proxy reverso é colocado na frente dos servidores web para receber requisições dos clientes, podendo oferecer balanceamento de carga, cache e terminação SSL.",
      answer: true,
      comment: "Certo. Diferente de um proxy direto (que atua em nome do cliente), o proxy reverso atua em nome do servidor, protegendo e otimizando o acesso aos serviços de back-end."
    },
    {
      text: "Um proxy transparente intercepta o tráfego de rede sem exigir qualquer configuração especial no dispositivo do cliente.",
      answer: true,
      comment: "Certo. O proxy transparente (também chamado de inline ou forçado) é configurado no gateway da rede, tornando seu uso obrigatório e invisível para o usuário final."
    },
    {
      text: "VPN (Virtual Private Network) garante a confidencialidade dos dados ao criar um 'túnel' criptografado sobre uma rede pública, como a internet.",
      answer: true,
      comment: "Certo. A principal função de uma VPN é proteger os dados em trânsito, garantindo que, mesmo que o tráfego seja interceptado, ele não possa ser lido."
    },
    {
      text: "O protocolo IPsec, usado em VPNs, opera exclusivamente na Camada 7 (Aplicação) do modelo OSI.",
      answer: false,
      comment: "Errado. O IPsec opera na Camada 3 (Rede) do modelo OSI, o que lhe permite proteger todo o tráfego IP, independentemente da aplicação que o gerou."
    },
    {
      text: "Uma VPN 'split-tunnel' envia todo o tráfego do usuário, tanto para a internet quanto para a rede corporativa, através do túnel VPN.",
      answer: false,
      comment: "Errado. Uma VPN split-tunnel envia apenas o tráfego destinado à rede corporativa pelo túnel VPN, enquanto o tráfego geral da internet sai diretamente pela rede local do usuário. O 'full-tunnel' é que envia todo o tráfego pela VPN."
    },
    {
      text: "Um firewall de próxima geração (NGFW) integra funcionalidades de um firewall tradicional com sistemas de prevenção de intrusão (IPS) e controle de aplicações.",
      answer: true,
      comment: "Certo. NGFWs oferecem uma inspeção mais profunda e contextualizada do tráfego, indo além de simples regras de porta/IP para entender quais aplicações estão sendo usadas."
    },
    {
      text: "A principal desvantagem de um IDS baseado em anomalias é a alta taxa de falsos positivos.",
      answer: true,
      comment: "Certo. Como o sistema alerta sobre qualquer desvio do 'normal', atividades legítimas, mas incomuns, podem gerar alertas falsos, exigindo um ajuste fino constante da linha de base."
    },
    {
      text: "A tecnologia por trás do EDR é inútil contra ataques 'fileless' (sem arquivo), que operam apenas na memória.",
      answer: false,
      comment: "Errado. O EDR é particularmente eficaz contra ataques fileless, pois monitora o comportamento de processos (como PowerShell ou WMI) na memória, detectando atividades maliciosas que um antivírus tradicional, focado em arquivos, não veria."
    },
    {
      text: "A automação em uma plataforma SOAR pode reduzir o 'tempo de permanência' (dwell time) de um invasor na rede.",
      answer: true,
      comment: "Certo. Ao automatizar as etapas de investigação e resposta (como isolar um host ou bloquear um IP), o SOAR acelera a contenção de ameaças, reduzindo a janela de oportunidade para o invasor."
    },
    {
      text: "A normalização de dados em um SIEM é o processo de converter logs de formatos diferentes e proprietários em um formato comum e consistente.",
      answer: true,
      comment: "Certo. A normalização é uma etapa crucial que permite que o SIEM correlacione eventos de fontes heterogêneas (ex: um log da Cisco com um log do Windows) de forma eficaz."
    },
    {
      text: "O NAT estático (Static NAT) mapeia um endereço IP privado para um endereço IP público de forma permanente, em uma relação de um para um.",
      answer: true,
      comment: "Certo. O NAT estático é frequentemente usado para permitir que um servidor interno (como um servidor web) seja acessível a partir da internet em um endereço IP público fixo."
    },
    {
      text: "Um proxy de cache pode acelerar o acesso a recursos da web, armazenando cópias locais de conteúdos frequentemente solicitados.",
      answer: true,
      comment: "Certo. Ao servir o conteúdo do cache local, o proxy reduz a latência e o consumo de largura de banda da internet, melhorando a experiência do usuário."
    },
    {
      text: "O protocolo SSL/TLS, usado em muitas VPNs, é considerado mais seguro que o IPsec para conexões site-to-site.",
      answer: false,
      comment: "Errado. O IPsec é geralmente o padrão preferido para VPNs site-to-site (conectando duas redes), enquanto o SSL/TLS é mais comum em VPNs de acesso remoto (conectando um usuário a uma rede). Ambos são seguros, mas projetados para casos de uso diferentes."
    },
    {
      text: "Um firewall pessoal, instalado em um laptop, protege o dispositivo mesmo quando ele está conectado a redes Wi-Fi públicas e não confiáveis.",
      answer: true,
      comment: "Certo. Essa é uma de suas principais funções: fornecer uma camada de proteção individual que viaja com o dispositivo, independentemente da segurança da rede à qual ele se conecta."
    },
    {
      text: "Um HIDS (Host-based IDS) monitora o tráfego de rede que entra e sai de um único host, enquanto um NIDS (Network-based IDS) monitora o tráfego que flui por um segmento de rede inteiro.",
      answer: true,
      comment: "Certo. HIDS foca em eventos internos de um host (logs, integridade de arquivos), enquanto NIDS tem uma visão ampla do tráfego da rede, mas sem visibilidade interna dos hosts."
    },
    {
      text: "A principal proposta de valor do XDR é reduzir a complexidade e o 'alerta de fadiga' (alert fatigue) para as equipes de segurança.",
      answer: true,
      comment: "Certo. Ao correlacionar alertas de múltiplas fontes em um único incidente de alta fidelidade, o XDR ajuda as equipes a se concentrarem nas ameaças que realmente importam, em vez de perseguir inúmeros alertas isolados."
    },
    {
      text: "Um playbook em uma plataforma SOAR é um conjunto de regras de correlação para detectar ameaças.",
      answer: false,
      comment: "Errado. Um playbook é um fluxo de trabalho automatizado que define as etapas de resposta a um determinado tipo de alerta ou incidente. As regras de correlação são uma característica do SIEM."
    },
    {
      text: "O enriquecimento de dados em um SIEM ou SOAR envolve adicionar contexto a um alerta, como informações de geolocalização de um IP ou a reputação de um hash de arquivo.",
      answer: true,
      comment: "Certo. O enriquecimento ajuda os analistas a tomar decisões mais rápidas e informadas, fornecendo contexto adicional que não estava presente no log original."
    },
    {
      text: "Usar NAT elimina a necessidade de firewalls, pois os hosts internos não são diretamente acessíveis pela internet.",
      answer: false,
      comment: "Errado. Embora o NAT forneça um nível de ocultação, ele não é um substituto para um firewall. Um firewall oferece inspeção de pacotes, controle de acesso e proteção contra uma vasta gama de ameaças que o NAT não aborda."
    },
    {
      text: "Um proxy pode ser usado para aplicar políticas de uso da web, como bloquear o acesso a redes sociais ou sites de conteúdo adulto.",
      answer: true,
      comment: "Certo. O filtragem de URL e conteúdo é uma das funções mais comuns de um proxy em ambientes corporativos, permitindo o controle sobre a navegação dos usuários."
    },
    {
      text: "O protocolo L2TP (Layer 2 Tunneling Protocol) por si só fornece criptografia forte para o tráfego da VPN.",
      answer: false,
      comment: "Errado. O L2TP é um protocolo de tunelamento que não possui criptografia nativa. Ele é quase sempre usado em conjunto com o IPsec (L2TP/IPsec) para fornecer a confidencialidade e a integridade dos dados."
    },
    {
      text: "Um firewall de Camada 4 (Transporte) pode tomar decisões com base no conteúdo de uma página web.",
      answer: false,
      comment: "Errado. Um firewall de Camada 4 opera com base em informações de cabeçalho TCP/UDP, como portas de origem e destino. A inspeção do conteúdo de uma página web (HTTP) requer um firewall de Camada 7 (Aplicação) ou um WAF."
    },
    {
      text: "A principal diferença entre um IDS e um IPS é que o IDS é passivo (detecta e alerta), enquanto o IPS é ativo (detecta e previne).",
      answer: true,
      comment: "Certo. Esta é a distinção fundamental. IDS é como uma câmera de segurança que grava e alerta; IPS é como um segurança que vê uma ameaça e age para impedi-la."
    },
    {
      text: "Heurística em antivírus tenta identificar malware com base em características e comportamentos suspeitos, em vez de uma assinatura exata.",
      answer: true,
      comment: "Certo. A análise heurística é uma abordagem proativa que permite a detecção de variantes de malware novas ou desconhecidas que ainda não têm uma assinatura definida."
    },
    {
      text: "A resposta a incidentes em uma solução EDR é sempre totalmente automatizada, não exigindo intervenção humana.",
      answer: false,
      comment: "Errado. Embora o EDR possa automatizar algumas ações de resposta, ele também fornece ferramentas para que analistas humanos realizem investigações aprofundadas e tomem decisões de contenção e erradicação."
    },
    {
      text: "A integração entre SIEM e SOAR permite que os alertas gerados pelo SIEM acionem automaticamente os playbooks de resposta no SOAR.",
      answer: true,
      comment: "Certo. Esta é uma integração poderosa que combina a detecção e correlação do SIEM com a automação e orquestração do SOAR, acelerando significativamente o ciclo de vida da resposta a incidentes."
    },
    {
      text: "O NAT de Destino (Destination NAT ou DNAT) é usado para redirecionar o tráfego que chega a um endereço IP público para um endereço IP privado específico na rede interna.",
      answer: true,
      comment: "Certo. DNAT, muitas vezes chamado de 'port forwarding', é comumente usado para expor um serviço interno (como um servidor de jogos ou web) para a internet."
    },
    {
      text: "Um proxy anônimo oculta o endereço IP do cliente, mas ainda informa ao servidor de destino que a requisição está vindo de um proxy.",
      answer: true,
      comment: "Certo. Proxies anônimos normalmente adicionam ou modificam cabeçalhos HTTP (como 'X-Forwarded-For') que, embora não revelem o IP original, indicam o uso de um proxy. Proxies de alta anonimidade (elite) tentam ocultar até mesmo esse fato."
    },
    {
      text: "O protocolo OpenVPN usa uma infraestrutura de segurança personalizada e não depende de bibliotecas de criptografia padrão como o OpenSSL.",
      answer: false,
      comment: "Errado. O OpenVPN depende fortemente da biblioteca OpenSSL para fornecer a criptografia e a autenticação. Ele utiliza os protocolos SSL/TLS para estabelecer uma conexão segura."
    },
    {
      text: "Um firewall de zona (Zone-Based Firewall) agrupa interfaces de rede em zonas de segurança e aplica políticas ao tráfego que se move entre essas zonas.",
      answer: true,
      comment: "Certo. Esta é uma abordagem mais flexível e escalável do que aplicar regras a interfaces individuais. Por exemplo, pode-se criar zonas 'trust', 'untrust' e 'dmz' e controlar o fluxo de tráfego entre elas."
    },
    {
      text: "Um falso negativo em um sistema IDS/IPS é quando o sistema não consegue detectar um ataque real.",
      answer: true,
      comment: "Certo. Um falso negativo é uma falha de detecção e é o tipo de erro mais perigoso, pois permite que um ataque passe despercebido. Um falso positivo é quando o sistema alerta sobre tráfego legítimo."
    },
    {
      text: "O conceito de 'Threat Hunting' (caça a ameaças) em uma plataforma EDR/XDR é um processo passivo que depende apenas de alertas automáticos.",
      answer: false,
      comment: "Errado. Threat Hunting é um processo proativo e iterativo onde analistas de segurança pesquisam ativamente por ameaças não detectadas (adversários que podem ter contornado as defesas automáticas) nos dados coletados pela plataforma."
    },
    {
      text: "A principal função de uma plataforma SOAR é a análise de vulnerabilidades de rede.",
      answer: false,
      comment: "Errado. A análise de vulnerabilidades é feita por scanners de vulnerabilidade. O SOAR foca na automação e orquestração da resposta a incidentes de segurança, não na sua descoberta inicial via scanning."
    },
    {
      text: "O processo de agregação de logs em um SIEM envolve a coleta de dados de eventos de inúmeras fontes de rede e segurança em um repositório centralizado.",
      answer: true,
      comment: "Certo. A agregação é o primeiro passo e um dos mais fundamentais de um SIEM, criando um único ponto de visibilidade e análise para todos os eventos de segurança da organização."
    },
    {
      text: "O NAT64 é um mecanismo que permite que clientes somente IPv6 se comuniquem com servidores somente IPv4.",
      answer: true,
      comment: "Certo. O NAT64 é uma tecnologia de transição crucial que sintetiza endereços IPv4 em endereços IPv6, permitindo a comunicação entre as duas redes durante o período de coexistência de IPv4 e IPv6."
    },
    {
      text: "Um proxy SOCKS opera na Camada 7 (Aplicação) e pode interpretar protocolos como HTTP e FTP.",
      answer: false,
      comment: "Errado. Um proxy SOCKS opera na Camada 5 (Sessão) e é agnóstico ao protocolo da camada de aplicação. Ele simplesmente encaminha pacotes sem interpretar o conteúdo, tornando-o mais versátil, mas com menos recursos de filtragem de conteúdo que um proxy HTTP."
    },
    {
      text: "Uma VPN 'Always-On' é configurada para estabelecer automaticamente uma conexão VPN assim que o dispositivo detecta uma conexão com a internet, garantindo proteção contínua.",
      answer: true,
      comment: "Certo. Esta abordagem é usada para garantir que os dispositivos, especialmente os móveis, estejam sempre em conformidade com as políticas de segurança da empresa, impedindo conexões desprotegidas."
    },
    {
      text: "A inspeção de tráfego SSL/TLS por um NGFW ou proxy envolve a interceptação e descriptografia do tráfego para análise, um processo também conhecido como 'Man-in-the-Middle' legítimo.",
      answer: true,
      comment: "Certo. Para inspecionar o conteúdo do tráfego criptografado, o dispositivo de segurança precisa se apresentar como o servidor de destino para o cliente e como o cliente para o servidor, descriptografando e re-criptografando o tráfego."
    },
    {
      text: "A análise de fluxo de rede (NetFlow/sFlow) por um IDS/IPS fornece o conteúdo completo de cada pacote para análise forense.",
      answer: false,
      comment: "Errado. A análise de fluxo fornece metadados sobre as conversas de rede (quem falou com quem, quando, por quanto tempo, usando qual protocolo), mas não o conteúdo completo (payload) dos pacotes. A captura completa de pacotes (PCAP) é que fornece o conteúdo."
    },
    {
      text: "A sandbox em um EDR ou antivírus de próxima geração é um ambiente isolado usado para executar arquivos suspeitos e observar seu comportamento sem arriscar o sistema hospedeiro.",
      answer: true,
      comment: "Certo. A análise em sandbox é uma técnica poderosa para detectar malware desconhecido, observando se ele tenta realizar ações maliciosas, como modificar o registro, se conectar a C2s ou criptografar arquivos."
    },
    {
      text: "O UEBA (User and Entity Behavior Analytics) é uma capacidade frequentemente integrada a SIEMs modernos para detectar ameaças internas ou contas comprometidas, focando em desvios do comportamento normal de usuários e dispositivos.",
      answer: true,
      comment: "Certo. O UEBA modela o comportamento padrão e usa aprendizado de máquina para identificar anomalias, como um usuário fazendo login em um horário incomum ou acessando dados que nunca acessou antes."
    },
    {
      text: "Um proxy direto (forward proxy) é usado principalmente para proteger servidores, enquanto um proxy reverso é usado para proteger clientes.",
      answer: false,
      comment: "Errado. É o oposto. Um proxy direto atua em nome dos clientes (controlando o acesso à internet), enquanto um proxy reverso atua em nome dos servidores (recebendo requisições da internet)."
    },
    {
      text: "O protocolo WireGuard é um protocolo de VPN mais antigo e complexo que o IPsec e o OpenVPN.",
      answer: false,
      comment: "Errado. O WireGuard é um protocolo de VPN moderno, conhecido por sua simplicidade, alta performance e base de código muito menor, o que o torna mais fácil de auditar e potencialmente mais seguro que alternativas mais antigas."
    },
    {
      text: "A principal função do SOAR é orquestrar ferramentas de segurança distintas, fazendo com que elas trabalhem juntas de forma automatizada.",
      answer: true,
      comment: "Certo. A orquestração é um pilar do SOAR. Por exemplo, um playbook pode pegar um IP de um alerta do SIEM, consultar sua reputação em uma ferramenta de Threat Intelligence e, se for malicioso, instruir o firewall a bloqueá-lo, tudo automaticamente."
    },
    {
      text: "Um EDR (Endpoint Detection and Response) é focado exclusivamente na prevenção de malware, sem capacidades de investigação.",
      answer: false,
      comment: "Errado. A capacidade de 'Resposta' (Response) e investigação é um diferencial chave do EDR. Ele fornece aos analistas as ferramentas para entender o escopo de um ataque, isolar sistemas e remediar a ameaça."
    }
  ]
,
  "protocolos-seguranca": [
    {
      text: "O IPsec (Internet Protocol Security) opera na Camada 7 (Aplicação) do modelo OSI para proteger os dados.",
      answer: false,
      comment: "Errado. O IPsec opera na Camada 3 (Rede), o que lhe permite proteger todo o tráfego IP, independentemente da aplicação."
    },
    {
      text: "Os dois principais protocolos do IPsec são o Authentication Header (AH) e o Encapsulating Security Payload (ESP).",
      answer: true,
      comment: "Certo. AH fornece autenticidade e integridade, enquanto ESP pode fornecer autenticidade, integridade e confidencialidade (criptografia)."
    },
    {
      text: "O Authentication Header (AH) do IPsec fornece confidencialidade ao criptografar o payload do pacote.",
      answer: false,
      comment: "Errado. AH não fornece criptografia. Ele garante a integridade e a autenticidade da origem dos dados, mas não a sua confidencialidade."
    },
    {
      text: "O modo Túnel do IPsec encapsula o pacote IP original inteiro dentro de um novo pacote IP.",
      answer: true,
      comment: "Certo. O modo Túnel é usado principalmente para criar VPNs site-to-site, protegendo todo o tráfego entre duas redes."
    },
    {
      text: "No modo Transporte do IPsec, apenas o payload do pacote IP é protegido, e o cabeçalho IP original é mantido.",
      answer: true,
      comment: "Certo. O modo Transporte é geralmente usado para proteger a comunicação entre dois hosts finais (end-to-end)."
    },
    {
      text: "O Internet Key Exchange (IKE) é um protocolo usado para negociar manualmente as chaves de criptografia do IPsec.",
      answer: false,
      comment: "Errado. O IKE é usado para negociar e estabelecer automaticamente as Security Associations (SAs) e as chaves para o IPsec."
    },
      {
      text: "Uma Security Association (SA) no IPsec é uma conexão bidirecional que define os parâmetros de segurança.",
      answer: false,
      comment: "Errado. Uma SA é unidirecional (simplex). Para uma comunicação bidirecional segura, são necessárias duas SAs, uma para cada direção."
    },
    {
      text: "O IPsec pode ser usado para proteger o tráfego entre servidores dentro da mesma rede local (LAN).",
      answer: true,
      comment: "Certo. Embora seja famoso por VPNs, o IPsec pode ser usado para proteger qualquer comunicação baseada em IP, inclusive dentro de uma LAN."
    },
    {
      text: "O protocolo ESP (Encapsulating Security Payload) do IPsec só pode fornecer criptografia, mas não autenticação.",
      answer: false,
      comment: "Errado. O ESP é flexível e pode fornecer apenas criptografia, apenas autenticação, ou ambas simultaneamente."
    },
    {
      text: "O modo Transporte do IPsec é mais adequado para a criação de VPNs que conectam duas redes inteiras.",
      answer: false,
      comment: "Errado. O modo Túnel é o mais adequado para VPNs site-to-site (rede a rede). O modo Transporte é para comunicação host a host."
    },
    {
      text: "O DNSSEC (DNS Security Extensions) foi projetado para garantir a confidencialidade das consultas DNS, criptografando-as.",
      answer: false,
      comment: "Errado. O DNSSEC garante a autenticidade e a integridade dos dados DNS. Ele não criptografa a consulta. A confidencialidade é abordada por tecnologias como DNS over TLS (DoT) ou DNS over HTTPS (DoH)."
    },
    {
      text: "O DNSSEC protege contra ataques de envenenamento de cache DNS (DNS cache poisoning) ao validar que a resposta DNS veio da fonte autoritativa e não foi modificada.",
      answer: true,
      comment: "Certo. Ao usar assinaturas digitais, o DNSSEC permite que um resolvedor verifique a autenticidade de uma resposta, frustrando tentativas de envenenamento de cache."
    },
    {
      text: "Para que o DNSSEC funcione, apenas o servidor DNS autoritativo precisa suportá-lo; o resolvedor do cliente não precisa de nenhuma configuração especial.",
      answer: false,
      comment: "Errado. A validação do DNSSEC deve ocorrer no resolvedor recursivo que o cliente usa. A cadeia de confiança precisa ser validada ponta a ponta."
    },
    {
      text: "Os registros RRSIG e DNSKEY são tipos de registros DNS introduzidos pelo DNSSEC.",
      answer: true,
      comment: "Certo. O DNSKEY contém a chave pública usada para verificar as assinaturas, e o RRSIG contém a assinatura digital de um conjunto de registros."
    },
    {
      text: "O registro DS (Delegation Signer) é usado na zona filha para apontar para a chave de assinatura na zona pai.",
      answer: false,
      comment: "Errado. É o oposto. O registro DS é colocado na zona pai para criar a cadeia de confiança para a zona filha."
    },
    {
      text: "O DNSSEC impede ataques de negação de serviço (DDoS) contra servidores DNS.",
      answer: false,
      comment: "Errado. O DNSSEC não foi projetado para mitigar ataques de DDoS. Na verdade, ele pode ser explorado em ataques de amplificação de DDoS devido ao tamanho maior de suas respostas."
    },
    {
      text: "O registro NSEC (Next Secure) é usado pelo DNSSEC para fornecer uma 'negação de existência' autenticada para um domínio que não existe.",
      answer: true,
      comment: "Certo. O NSEC prova criptograficamente que um nome de domínio não existe, evitando que um invasor redirecione o tráfego para um domínio malicioso com uma resposta falsa."
    },
    {
      text: "A 'cadeia de confiança' do DNSSEC começa em uma autoridade de certificação (CA) e termina no servidor autoritativo da zona.",
      answer: false,
      comment: "Errado. A cadeia de confiança do DNSSEC começa na zona raiz (.), que é a âncora de confiança, e desce através das delegações (registros DS) até a zona em questão."
    },
    {
      text: "O NSEC3 é uma alternativa ao NSEC que evita a 'enumeração de zona' (zone walking), que permitia a um invasor listar todos os domínios em uma zona DNSSEC.",
      answer: true,
      comment: "Certo. O NSEC3 usa hashes dos nomes de domínio, o que impede que um invasor percorra a zona para descobrir todos os registros existentes."
    },
    {
      text: "A implementação do DNSSEC não adiciona nenhuma sobrecarga ao processo de resolução de DNS.",
      answer: false,
      comment: "Errado. O DNSSEC adiciona sobrecarga devido ao aumento no tamanho das respostas DNS (por causa das assinaturas) e ao processamento computacional necessário para a validação criptográfica."
    },
    {
      text: "SPF (Sender Policy Framework) é um protocolo que permite ao servidor de e-mail receptor verificar se um e-mail vindo de um domínio foi realmente enviado por um servidor autorizado por esse domínio.",
      answer: true,
      comment: "Certo. O SPF ajuda a combater a falsificação de e-mail (spoofing) ao definir, em um registro DNS (TXT), quais endereços IP têm permissão para enviar e-mails em nome de um domínio."
    },
    {
      text: "Um registro SPF é um tipo de registro DNS específico chamado 'SPF'.",
      answer: false,
      comment: "Errado. Embora tenha existido um tipo de registro SPF (código 99), ele foi preterido. O padrão atual é publicar a política SPF dentro de um registro DNS do tipo TXT."
    },
    {
      text: "A política '-all' (Fail) em um registro SPF instrui o servidor receptor a rejeitar e-mails de remetentes não autorizados.",
      answer: true,
      comment: "Certo. O qualificador '-' (Fail) é uma instrução explícita para rejeitar a mensagem. '~all' (SoftFail) sugere marcar como suspeito, mas aceitar."
    },
    {
      text: "O SPF valida o endereço no cabeçalho 'From:' do e-mail.",
      answer: false,
      comment: "Errado. O SPF valida o domínio encontrado no comando 'MAIL FROM' da sessão SMTP (o envelope), que pode ser diferente do cabeçalho 'From:' exibido ao usuário. Essa é uma de suas limitações."
    },
    {
      text: "O mecanismo 'include' em um registro SPF permite que um domínio incorpore as políticas SPF de outro domínio.",
      answer: true,
      comment: "Certo. Isso é muito usado quando se utilizam serviços de terceiros (como Mailchimp, Google Workspace) para enviar e-mails, permitindo incluir os servidores deles na política."
    },
    {
      text: "DKIM (DomainKeys Identified Mail) adiciona uma assinatura digital ao cabeçalho de um e-mail, garantindo a integridade da mensagem.",
      answer: true,
      comment: "Certo. O DKIM assina partes do e-mail (cabeçalhos e corpo). O servidor receptor usa uma chave pública no DNS do domínio do remetente para verificar essa assinatura, garantindo que o e-mail não foi alterado no caminho."
    },
    {
      text: "A chave pública do DKIM é publicada em um registro DNS do tipo CNAME.",
      answer: false,
      comment: "Errado. A chave pública do DKIM é publicada em um registro DNS do tipo TXT, em um subdomínio específico formado pelo 'seletor' e '_domainkey'."
    },
    {
      text: "O DKIM, por si só, impede a falsificação do endereço 'From:' visível para o usuário.",
      answer: false,
      comment: "Errado. O DKIM garante que o e-mail foi assinado por um domínio (d=) e que não foi alterado, mas não exige que o domínio da assinatura corresponda ao domínio do cabeçalho 'From:'. Essa verificação de alinhamento é feita pelo DMARC."
    },
    {
      text: "O 'seletor' no DKIM permite que um domínio tenha múltiplas chaves públicas publicadas, facilitando a rotação de chaves.",
      answer: true,
      comment: "Certo. O seletor (tag 's=') no cabeçalho da assinatura DKIM diz ao servidor receptor qual chave pública específica ele deve procurar no DNS para validar a mensagem."
    },
    {
      text: "A assinatura DKIM cobre todos os cabeçalhos do e-mail.",
      answer: false,
      comment: "Errado. A assinatura DKIM cobre apenas os cabeçalhos listados na tag 'h=' de seu próprio cabeçalho. Cabeçalhos que podem ser alterados em trânsito (como 'Return-Path') geralmente não são assinados."
    },
    {
      text: "DMARC (Domain-based Message Authentication, Reporting, and Conformance) é uma política que diz aos servidores de e-mail o que fazer se um e-mail falhar nas verificações SPF e/ou DKIM.",
      answer: true,
      comment: "Certo. O DMARC unifica o SPF e o DKIM e permite que o dono do domínio especifique uma política (p=none, p=quarantine, p=reject) e receba relatórios sobre o uso de seu domínio."
    },
    {
      text: "Para o DMARC passar, o domínio no cabeçalho 'From:' deve estar 'alinhado' com o domínio validado pelo SPF ou pelo DKIM.",
      answer: true,
      comment: "Certo. Este é o principal benefício do DMARC. Ele combate a falsificação do cabeçalho 'From:' ao exigir que o domínio que o usuário vê corresponda ao domínio autenticado pelos mecanismos subjacentes."
    },
    {
      text: "Uma política DMARC de 'p=none' instrui os servidores receptores a não tomar nenhuma ação contra e-mails que falham na verificação, apenas a enviar relatórios.",
      answer: true,
      comment: "Certo. 'p=none' (modo de monitoramento) é o primeiro passo recomendado ao implementar o DMARC, pois permite coletar dados e identificar problemas sem impactar a entrega de e-mails."
    },
    {
      text: "O registro DMARC é publicado como um registro DNS do tipo MX.",
      answer: false,
      comment: "Errado. O registro DMARC é publicado como um registro DNS do tipo TXT no subdomínio '_dmarc.seudominio.com'."
    },
    {
      text: "A tag 'rua' em um registro DMARC especifica o endereço de e-mail para onde os relatórios forenses (de falha) devem ser enviados.",
      answer: false,
      comment: "Errado. A tag 'rua' é para relatórios agregados (Aggregate Reports). A tag para relatórios forenses (Forensic/Failure Reports) é 'ruf'."
    },
    {
      text: "SPF, DKIM e DMARC juntos fornecem uma defesa completa contra phishing.",
      answer: false,
      comment: "Errado. Eles fornecem uma defesa robusta contra a falsificação de domínio (um tipo de phishing), mas não protegem contra outras táticas, como o uso de domínios parecidos (typosquatting) ou engenharia social que não envolve falsificação."
    },
    {
      text: "O alinhamento do SPF no DMARC é considerado 'strict' (estrito) se o domínio do 'MAIL FROM' corresponder exatamente ao domínio do cabeçalho 'From:'.",
      answer: true,
      comment: "Certo. O modo 'relaxed' (relaxado) permite que subdomínios também passem na verificação, enquanto o modo 'strict' exige uma correspondência exata."
    },
    {
      text: "Se um e-mail passar no DKIM, mas falhar no SPF, ele ainda passará na verificação DMARC.",
      answer: true,
      comment: "Certo. O DMARC requer que apenas um dos dois (SPF ou DKIM) passe E esteja alinhado com o domínio do 'From:'."
    },
    {
      text: "A política 'p=quarantine' do DMARC sugere que os servidores de e-mail movam as mensagens que falham para a pasta de spam.",
      answer: true,
      comment: "Certo. 'quarantine' é uma ação menos agressiva que 'reject', instruindo o receptor a aceitar a mensagem, mas colocá-la sob escrutínio adicional (geralmente, na caixa de spam)."
    },
    {
      text: "É uma boa prática implementar o DMARC diretamente com uma política de 'p=reject' para máxima segurança desde o início.",
      answer: false,
      comment: "Errado. Esta é uma prática perigosa que pode levar ao bloqueio de e-mails legítimos. A abordagem recomendada é começar com 'p=none', analisar os relatórios e, gradualmente, passar para 'p=quarantine' e depois 'p=reject'."
    },
    {
      text: "O SPF resolve o problema de e-mails encaminhados que quebram a autenticação.",
      answer: false,
      comment: "Errado. O encaminhamento de e-mail é um problema clássico para o SPF, pois o servidor de encaminhamento não estará na lista de IPs autorizados do domínio original. O DKIM não sofre desse problema, pois a assinatura viaja com a mensagem."
    },
    {
      text: "O DKIM protege contra a modificação do corpo do e-mail, mas não do assunto (Subject).",
      answer: false,
      comment: "Errado. O cabeçalho 'Subject' é um dos cabeçalhos que geralmente é incluído na assinatura DKIM (listado na tag 'h='), portanto, sua integridade também é protegida."
    },
    {
      text: "A tag 'pct' no registro DMARC permite aplicar a política (quarantine ou reject) a apenas uma porcentagem do e-mail que falha.",
      answer: true,
      comment: "Certo. Isso permite uma implementação gradual e mais segura da política, começando com uma porcentagem baixa (ex: pct=5) e aumentando-a à medida que se ganha confiança na configuração."
    },
    {
      text: "O DMARC funciona de forma independente, sem precisar de SPF ou DKIM configurados.",
      answer: false,
      comment: "Errado. O DMARC depende inteiramente dos resultados do SPF e do DKIM. Sem eles, o DMARC não tem informações para basear suas decisões de política."
    },
    {
      text: "O alinhamento do DKIM no DMARC verifica se o valor da tag 'd=' (domínio) na assinatura DKIM corresponde ao domínio do cabeçalho 'From:'.",
      answer: true,
      comment: "Certo. Assim como no SPF, o DMARC verifica se o domínio que assinou a mensagem está alinhado com o domínio que o remetente afirma ser."
    },
    {
      text: "Um e-mail pode ter múltiplas assinaturas DKIM.",
      answer: true,
      comment: "Certo. Isso é comum quando um e-mail passa por múltiplos sistemas (como um provedor de e-mail e um serviço de mailing list), e cada um adiciona sua própria assinatura."
    },
    {
      text: "O limite de 10 buscas DNS em um registro SPF é uma recomendação, mas não é tecnicamente imposto.",
      answer: false,
      comment: "Errado. O limite de 10 buscas DNS (incluindo 'include', 'a', 'mx', 'ptr' e 'exists') é uma restrição técnica para evitar ataques de negação de serviço contra servidores DNS. Registros que excedem esse limite podem resultar em erro de validação (PermError)."
    },
    {
      text: "A implementação do DMARC, mesmo em modo 'p=none', pode ajudar a melhorar a reputação de um domínio e a entregabilidade de e-mails.",
      answer: true,
      comment: "Certo. Grandes provedores de e-mail (como Gmail e Outlook) valorizam domínios que publicam registros DMARC, pois isso demonstra uma postura de segurança proativa, o que pode influenciar positivamente a reputação."
    },
    {
      text: "O SPF, DKIM e DMARC são protocolos que operam no servidor de envio de e-mail e não requerem nenhuma ação por parte do servidor receptor.",
      answer: false,
      comment: "Errado. Eles são uma combinação de ações. O remetente publica as políticas no DNS, e o servidor receptor é responsável por realizar as verificações e aplicar as políticas."
    },
    {
      text: "Se um domínio não tiver um registro DMARC, o servidor receptor tomará sua própria decisão sobre como tratar e-mails que falham no SPF ou DKIM.",
      answer: true,
      comment: "Certo. Na ausência de uma política DMARC, cada sistema de e-mail receptor usa suas próprias regras e heurísticas internas para decidir se uma mensagem é spam ou maliciosa."
    }
  ]
,
  "monitoramento-trafego": [
    {
      text: "Um sniffer de rede, como o Wireshark, opera colocando a placa de rede em modo promíscuo para capturar todos os pacotes que passam pelo segmento de rede, não apenas os destinados a ele.",
      answer: true,
      comment: "Certo. O modo promíscuo permite que a placa de rede capture todo o tráfego, o que é essencial para a análise de rede e a solução de problemas."
    },
    {
      text: "Em uma rede comutada (switched network) moderna, um sniffer pode capturar facilmente todo o tráfego da rede sem nenhuma técnica adicional.",
      answer: false,
      comment: "Errado. Switches direcionam o tráfego apenas para a porta de destino, então um sniffer em uma porta normal só verá pacotes de broadcast e pacotes para seu próprio host. Técnicas como port mirroring (SPAN) ou ARP poisoning são necessárias para capturar mais tráfego."
    },
    {
      text: "A principal finalidade do traffic shaping (modelagem de tráfego) é bloquear completamente o tráfego indesejado, como um firewall.",
      answer: false,
      comment: "Errado. O traffic shaping não bloqueia, mas sim gerencia e prioriza o tráfego. Sua finalidade é garantir a Qualidade de Serviço (QoS), atrasando pacotes de menor prioridade para dar preferência a aplicações críticas (como VoIP)."
    },
    {
      text: "Traffic policing e traffic shaping são a mesma coisa: ambos descartam pacotes que excedem uma taxa de tráfego definida.",
      answer: false,
      comment: "Errado. Traffic policing descarta pacotes que excedem a taxa (hard limit). Traffic shaping os armazena em um buffer (fila) para enviá-los mais tarde, suavizando os picos de tráfego."
    },
    {
      text: "A ferramenta 'tcpdump' é um sniffer de linha de comando amplamente utilizado em sistemas baseados em Unix/Linux.",
      answer: true,
      comment: "Certo. tcpdump é uma ferramenta poderosa e leve para captura e análise de pacotes diretamente do terminal, sendo uma das ferramentas fundamentais para administradores de rede."
    },
    {
      text: "O uso de um sniffer de rede é sempre legal e ético, independentemente do contexto.",
      answer: false,
      comment: "Errado. O uso não autorizado de um sniffer para capturar tráfego em uma rede que não lhe pertence é ilegal (viola leis de interceptação de comunicações) e antiético."
    },
    {
      text: "O traffic shaping é usado para garantir que aplicações sensíveis à latência, como chamadas de vídeo e VoIP, tenham prioridade sobre downloads de arquivos grandes.",
      answer: true,
      comment: "Certo. Esta é uma das principais aplicações do QoS e do traffic shaping: garantir uma boa experiência do usuário para serviços interativos, mesmo quando a rede está congestionada."
    },
    {
      text: "A técnica de Port Mirroring ou SPAN (Switched Port Analyzer) em um switch de rede copia o tráfego de uma ou mais portas para uma porta de destino específica, onde um sniffer pode ser conectado.",
      answer: true,
      comment: "Certo. SPAN é a forma legítima e mais comum de permitir que um analisador de rede veja o tráfego de outras portas em uma rede comutada."
    },
    {
      text: "A análise de fluxo (Flow Analysis), como o NetFlow, captura o conteúdo completo de cada pacote para uma análise profunda.",
      answer: false,
      comment: "Errado. A análise de fluxo captura metadados sobre as conversas de rede (IPs de origem/destino, portas, volume de dados), mas não o conteúdo (payload) dos pacotes. A captura completa de pacotes (PCAP) é que captura o conteúdo."
    },
    {
      text: "O algoritmo de enfileiramento FIFO (First-In, First-Out) é o mais eficaz para priorizar tráfego em uma política de QoS.",
      answer: false,
      comment: "Errado. FIFO é o mais simples, mas não oferece priorização; ele trata todo o tráfego da mesma forma. Algoritmos como Priority Queuing (PQ) ou Weighted Fair Queuing (WFQ) são usados para priorização."
    },
    {
      text: "A criptografia (como HTTPS ou WPA2) torna os sniffers inúteis, pois eles não conseguem capturar nenhum dado.",
      answer: false,
      comment: "Errado. O sniffer ainda captura os pacotes criptografados. Ele não pode ler o conteúdo (payload), mas ainda pode ver os metadados (IPs, portas, volume de tráfego), que podem ser úteis para análise."
    },
    {
      text: "O ataque de MAC flooding tenta sobrecarregar a tabela de endereços MAC de um switch, fazendo com que ele se comporte como um hub e envie todos os pacotes para todas as portas.",
      answer: true,
      comment: "Certo. Este é um ataque projetado para derrotar a segmentação de um switch e permitir que um sniffer em qualquer porta veja o tráfego de toda a rede."
    },
    {
      text: "O traffic shaping só pode ser aplicado no tráfego de saída (egress) de uma interface de rede.",
      answer: true,
      comment: "Certo. O shaping funciona através do enfileiramento (buffering), e você só pode controlar a taxa com que os pacotes saem de uma interface que você controla. Não é possível controlar a taxa com que os pacotes chegam (ingress)."
    },
    {
      text: "Um filtro de captura em um sniffer (ex: no Wireshark) é aplicado durante a captura para salvar apenas os pacotes que correspondem ao filtro, economizando espaço em disco.",
      answer: true,
      comment: "Certo. Um filtro de captura (capture filter) é mais eficiente para capturas longas, enquanto um filtro de exibição (display filter) é aplicado após a captura para analisar os dados já coletados."
    },
    {
      text: "O principal objetivo do traffic shaping é aumentar a largura de banda total de uma conexão de internet.",
      answer: false,
      comment: "Errado. O traffic shaping não aumenta a largura de banda; ele gerencia a largura de banda existente de forma mais inteligente, garantindo que ela seja alocada de acordo com as prioridades definidas."
    },
    {
      text: "O envenenamento de ARP (ARP poisoning) é uma técnica onde um invasor envia mensagens ARP falsificadas para associar seu endereço MAC ao endereço IP de outro host (como o gateway), redirecionando o tráfego através do seu computador.",
      answer: true,
      comment: "Certo. Este é um ataque Man-in-the-Middle clássico que permite a um invasor interceptar (sniffar) e modificar o tráfego em uma rede local."
    },
    {
      text: "A Qualidade de Serviço (QoS) refere-se exclusivamente à velocidade da rede.",
      answer: false,
      comment: "Errado. QoS é um conceito mais amplo que inclui múltiplos fatores, como largura de banda (velocidade), latência (atraso), jitter (variação no atraso) e perda de pacotes."
    },
    {
      text: "O formato de arquivo PCAP (Packet Capture) é um padrão amplamente utilizado para salvar dados de captura de pacotes, compatível com ferramentas como Wireshark e tcpdump.",
      answer: true,
      comment: "Certo. PCAP e seu sucessor, PCAPng, são os formatos padrão da indústria para o intercâmbio de arquivos de captura de tráfego de rede."
    },
    {
      text: "O traffic policing é geralmente considerado 'mais suave' com o tráfego do que o traffic shaping.",
      answer: false,
      comment: "Errado. O policing é mais 'duro', pois simplesmente descarta o tráfego excedente. O shaping é mais 'suave', pois tenta acomodar picos de tráfego, atrasando os pacotes em vez de descartá-los."
    },
    {
      text: "Um sniffer pode ser usado por um administrador de rede para diagnosticar problemas de conectividade, como um 'black hole' na rede.",
      answer: true,
      comment: "Certo. Ao analisar o tráfego, um administrador pode ver onde as conversas de rede estão falhando e identificar o dispositivo que está descartando os pacotes incorretamente."
    },
    {
      text: "A marcação de pacotes (packet marking), como o DSCP (Differentiated Services Code Point), é uma técnica usada para que os dispositivos de rede (roteadores, switches) saibam qual a prioridade de um pacote.",
      answer: true,
      comment: "Certo. Os pacotes são 'marcados' na origem com um valor de prioridade, e os dispositivos no caminho usam essa marcação para aplicar as políticas de QoS corretas (como colocá-los em uma fila de alta prioridade)."
    },
    {
      text: "Um sniffer só pode capturar tráfego de redes cabeadas (Ethernet), não de redes sem fio (Wi-Fi).",
      answer: false,
      comment: "Errado. Sniffers são amplamente utilizados em redes Wi-Fi. A placa de rede sem fio é colocada em 'modo de monitoramento' para capturar todos os quadros 802.11 no ar, não apenas aqueles destinados ao host."
    },
    {
      text: "O Weighted Fair Queuing (WFQ) aloca a largura de banda de forma desigual, dando todo o recurso para a fila de maior prioridade e deixando as outras sem serviço.",
      answer: false,
      comment: "Errado. Isso descreve o Priority Queuing (PQ). O WFQ aloca a largura de banda de forma 'justa' entre os diferentes fluxos, dando mais peso (mais largura de banda) aos fluxos de maior prioridade, mas sem deixar os de menor prioridade morrerem de inanição."
    },
    {
      text: "A análise de tráfego pode ser usada para detectar atividades maliciosas, como uma máquina infectada se comunicando com um servidor de Comando e Controle (C2).",
      answer: true,
      comment: "Certo. O monitoramento de padrões de tráfego incomuns, como conexões persistentes para um IP desconhecido ou o uso de portas não padrão, é uma técnica chave na detecção de ameaças."
    },
    {
      text: "O traffic shaping é implementado principalmente nos computadores dos usuários finais.",
      answer: false,
      comment: "Errado. O traffic shaping é tipicamente implementado em dispositivos de borda da rede, como roteadores e firewalls, onde há um ponto de controle sobre todo o tráfego que entra ou sai da rede."
    },
    {
      text: "O Wireshark pode descriptografar tráfego HTTPS se você possuir a chave de sessão privada do servidor.",
      answer: true,
      comment: "Certo. Se a chave privada do servidor for importada para o Wireshark, ele pode descriptografar o tráfego SSL/TLS (desde que não se use um conjunto de cifras com Perfect Forward Secrecy)."
    },
    {
      text: "Limitar a largura de banda para serviços de streaming de vídeo durante o horário de trabalho em uma rede corporativa é um exemplo de traffic shaping.",
      answer: true,
      comment: "Certo. Isso é um exemplo de aplicação de uma política para garantir que o tráfego não essencial não prejudique o desempenho de aplicações de negócios críticas."
    },
    {
      text: "A análise de pacotes (sniffing) é uma técnica puramente passiva que nunca envia pacotes para a rede.",
      answer: false,
      comment: "Errado. Embora a escuta seja passiva, muitas ferramentas de análise de rede também têm capacidades ativas, como o envio de pacotes para realizar testes (ex: ping, traceroute) ou ataques (ex: ARP poisoning)."
    },
    {
      text: "O jitter é a variação no atraso (latência) dos pacotes recebidos e é uma métrica de QoS especialmente importante para áudio e vídeo em tempo real.",
      answer: true,
      comment: "Certo. Um alto jitter pode fazer com que uma chamada de VoIP soe 'picotada' ou um vídeo congele, mesmo que a largura de banda média seja suficiente."
    },
    {
      text: "Um hub de rede, por sua natureza, envia todos os pacotes recebidos para todas as suas portas, tornando o sniffing trivial.",
      answer: true,
      comment: "Certo. Hubs são dispositivos de Camada 1 que operam como repetidores. Eles não têm a inteligência de um switch para direcionar o tráfego, por isso são inseguros e raramente usados hoje em dia."
    },
    {
      text: "O traffic shaping pode ser usado por Provedores de Serviço de Internet (ISPs) para limitar a velocidade de conexões de usuários que usam muito tráfego P2P (throttling).",
      answer: true,
      comment: "Certo. Esta é uma aplicação comum (e às vezes controversa) do traffic shaping, onde os ISPs gerenciam o congestionamento da rede limitando o tráfego considerado de baixa prioridade ou que consome muita banda."
    },
    {
      text: "A ferramenta 'ping' é um tipo de sniffer de rede.",
      answer: false,
      comment: "Errado. 'ping' é uma ferramenta de diagnóstico que envia pacotes ICMP Echo Request para testar a conectividade e medir a latência. Ela não captura nem analisa o tráfego de outros hosts."
    },
    {
      text: "O Leaky Bucket é um algoritmo usado em traffic shaping que suaviza o fluxo de saída de dados, permitindo uma taxa constante, independentemente de quão 'explosivo' seja o tráfego de entrada.",
      answer: true,
      comment: "Certo. O Leaky Bucket (balde furado) é uma analogia clássica: não importa o quão rápido você encha o balde, a água sai pelo furo a uma taxa constante. Isso modela como o shaping cria um fluxo de tráfego previsível."
    },
    {
      text: "É impossível detectar a presença de um sniffer em uma rede.",
      answer: false,
      comment: "Errado. Embora seja difícil, é possível. Técnicas de detecção podem envolver o envio de pacotes com endereços MAC/IP falsos e observar se há respostas (indicando que uma máquina está escutando em modo promíscuo) ou medir a latência da rede."
    },
    {
      text: "A principal motivação para a análise de fluxo (como NetFlow) em vez da captura completa de pacotes é a economia de armazenamento e processamento.",
      answer: true,
      comment: "Certo. Capturar e armazenar o tráfego completo de uma rede de alta velocidade é extremamente caro. A análise de fluxo oferece um resumo muito mais leve e gerenciável, ideal para monitoramento de longo prazo."
    },
    {
      text: "O Token Bucket é um algoritmo de traffic policing que permite 'explosões' (bursts) de tráfego até um certo limite.",
      answer: true,
      comment: "Certo. O Token Bucket permite que o tráfego passe enquanto houver 'tokens' no balde. Tokens se acumulam a uma taxa constante, permitindo que um host economize tokens durante períodos de inatividade para usar em uma rajada de tráfego posterior."
    },
    {
      text: "A análise de tráfego pode revelar quais sistemas operacionais estão em uso em uma rede através da análise de 'fingerprints' de TCP/IP.",
      answer: true,
      comment: "Certo. Diferentes sistemas operacionais implementam a pilha TCP/IP com pequenas variações (como o valor inicial de TTL ou o tamanho da janela), que podem ser usadas para identificá-los passivamente."
    },
    {
      text: "O traffic shaping é útil apenas para redes lentas; em redes de alta velocidade (gigabit), ele não tem aplicação.",
      answer: false,
      comment: "Errado. Mesmo em redes de alta velocidade, pode haver congestionamento e a necessidade de priorizar o tráfego. Por exemplo, em um data center, o tráfego de armazenamento pode precisar de prioridade sobre o tráfego de gerenciamento."
    },
    {
      text: "O Wireshark pode seguir um fluxo TCP para remontar os dados de uma conversa entre cliente e servidor.",
      answer: true,
      comment: "Certo. A funcionalidade 'Follow TCP Stream' é uma das mais úteis do Wireshark, pois permite ver os dados da camada de aplicação (como uma requisição HTTP) de forma legível, em vez de analisar pacotes individuais."
    },
    {
      text: "A modelagem de tráfego (traffic shaping) e a Qualidade de Serviço (QoS) são conceitos que se aplicam apenas a redes cabeadas, não a redes Wi-Fi.",
      answer: false,
      comment: "Errado. QoS é extremamente importante em redes Wi-Fi, que são um meio compartilhado e suscetível a interferências. Padrões como o 802.11e (WMM - Wi-Fi Multimedia) foram criados especificamente para priorizar tráfego de voz e vídeo em redes sem fio."
    }
  ]
,
  "seguranca-sem-fio": [
    {
      text: "O protocolo WEP (Wired Equivalent Privacy) é considerado seguro para uso em redes Wi-Fi modernas.",
      answer: false,
      comment: "Errado. O WEP é extremamente inseguro devido a falhas criptográficas graves, como o uso de um vetor de inicialização (IV) pequeno e estático, e pode ser quebrado em minutos."
    },
    {
      text: "WPA (Wi-Fi Protected Access) foi criado como uma solução intermediária para substituir o WEP, usando o mesmo hardware, mas com criptografia mais forte através do TKIP.",
      answer: true,
      comment: "Certo. O WPA foi projetado para ser uma atualização de firmware para o hardware WEP, introduzindo o TKIP (Temporal Key Integrity Protocol) para corrigir as vulnerabilidades do WEP."
    },
    {
      text: "WPA2, usando criptografia AES-CCMP, é o padrão de segurança que substituiu completamente as vulnerabilidades do WPA.",
      answer: true,
      comment: "Certo. WPA2 implementou o AES-CCMP, um padrão de criptografia muito mais robusto, e se tornou o padrão de segurança obrigatório por muitos anos, oferecendo proteção significativamente maior que WEP e WPA."
    },
    {
      text: "O protocolo 802.1X é um padrão de controle de acesso à rede baseado em porta, que pode ser usado tanto em redes cabeadas quanto sem fio.",
      answer: true,
      comment: "Certo. O 802.1X fornece um mecanismo de autenticação para dispositivos que desejam se conectar a uma LAN ou WLAN. Ele define as funções de Suplicante, Autenticador e Servidor de Autenticação."
    },
    {
      text: "EAP (Extensible Authentication Protocol) é um protocolo de criptografia como o AES.",
      answer: false,
      comment: "Errado. EAP não é um protocolo de criptografia, mas sim um framework de autenticação. Ele define como as mensagens de autenticação são trocadas, mas os métodos de autenticação específicos (como EAP-TLS ou PEAP) são definidos separadamente."
    },
    {
      text: "No 802.1X, o Ponto de Acesso (AP) sem fio atua como o Servidor de Autenticação.",
      answer: false,
      comment: "Errado. O Ponto de Acesso atua como o Autenticador (Authenticator), que funciona como um intermediário entre o cliente (Suplicante) e o Servidor de Autenticação (geralmente um servidor RADIUS)."
    },
    {
      text: "WPA3 é o padrão de segurança mais recente e introduz o SAE (Simultaneous Authentication of Equals) para substituir o PSK (Pre-Shared Key), tornando-o mais resistente a ataques de dicionário offline.",
      answer: true,
      comment: "Certo. O SAE, também conhecido como Dragonfly, fornece uma autenticação mais segura, mesmo com senhas fracas, pois a troca de autenticação é única a cada vez, impedindo ataques de dicionário offline."
    },
    {
      text: "Um ataque 'Evil Twin' consiste em um invasor quebrando a senha da rede Wi-Fi.",
      answer: false,
      comment: "Errado. Um ataque Evil Twin envolve a criação de um Ponto de Acesso falso com o mesmo nome (SSID) da rede legítima para enganar os usuários a se conectarem a ele e, assim, interceptar seu tráfego."
    },
    {
      text: "EAP-TLS oferece a mais alta segurança entre os métodos EAP, pois requer certificados digitais tanto no cliente quanto no servidor para autenticação mútua.",
      answer: true,
      comment: "Certo. EAP-TLS é considerado o padrão-ouro para segurança 802.1X, pois a autenticação mútua baseada em certificados impede ataques de phishing e Man-in-the-Middle."
    },
    {
      text: "O protocolo WEP usa o algoritmo de criptografia RC4, que se mostrou vulnerável a ataques de chave relacionada.",
      answer: true,
      comment: "Certo. A implementação do RC4 no WEP, combinada com o pequeno e reutilizado vetor de inicialização (IV), é a principal razão de sua fraqueza criptográfica."
    },
    {
      text: "WPS (Wi-Fi Protected Setup) é um recurso de segurança recomendado para ser ativado em todos os roteadores, pois simplifica a conexão sem comprometer a segurança.",
      answer: false,
      comment: "Errado. O WPS, especialmente a implementação via PIN, possui uma falha de design grave que permite que um invasor descubra o PIN por força bruta em questão de horas, comprometendo a senha WPA/WPA2. É recomendado desativá-lo."
    },
    {
      text: "A autenticação baseada em contexto (Context-Based Authentication) para redes sem fio considera apenas o nome de usuário e a senha.",
      answer: false,
      comment: "Errado. A autenticação baseada em contexto vai além, considerando fatores adicionais como a localização geográfica do usuário, o horário do dia, o tipo de dispositivo e a 'saúde' do dispositivo (postura) para tomar uma decisão de acesso."
    },
    {
      text: "O ataque KRACK (Key Reinstallation Attack) explora uma vulnerabilidade no próprio algoritmo de criptografia AES.",
      answer: false,
      comment: "Errado. O KRACK não ataca o AES, mas sim uma vulnerabilidade no handshake de 4 vias do WPA2, permitindo que um invasor force a reutilização de uma chave de sessão e, potencialmente, descriptografe o tráfego."
    },
    {
      text: "WPA3-Enterprise oferece criptografia de 192 bits para ambientes que exigem segurança mais alta, como governamentais e industriais.",
      answer: true,
      comment: "Certo. WPA3-Enterprise tem um modo opcional de 192 bits (CNSA - Commercial National Security Algorithm suite) que alinha a segurança Wi-Fi com padrões de alta segurança exigidos por certas organizações."
    },
    {
      text: "PEAP (Protected EAP) cria um túnel TLS criptografado entre o cliente e o servidor de autenticação antes de enviar as credenciais do usuário.",
      answer: true,
      comment: "Certo. O PEAP protege as credenciais (como nome de usuário e senha, usados no MS-CHAPv2 interno) de serem capturadas na rede sem fio, pois elas viajam dentro do túnel seguro."
    },
    {
      text: "Ocultar o SSID (nome da rede) é uma medida de segurança eficaz para impedir que invasores encontrem e ataquem uma rede sem fio.",
      answer: false,
      comment: "Errado. Ocultar o SSID é 'segurança por obscuridade'. O SSID ainda é transmitido em vários tipos de quadros de gerenciamento e pode ser facilmente descoberto por qualquer sniffer de rede. Não oferece proteção real."
    },
    {
      text: "A filtragem de endereços MAC é um método de controle de acesso forte, pois os endereços MAC não podem ser falsificados (spoofed).",
      answer: false,
      comment: "Errado. A filtragem de MAC é fraca porque um invasor pode facilmente capturar o endereço MAC de um cliente autorizado e falsificar o seu próprio para contornar o filtro."
    },
    {
      text: "Um ataque de desautenticação (Deauthentication Attack) força os clientes conectados a se desconectarem de um Ponto de Acesso, podendo ser usado para negação de serviço ou para capturar o handshake de 4 vias.",
      answer: true,
      comment: "Certo. O invasor envia quadros de desautenticação falsificados, forçando a desconexão. Quando o cliente se reconecta, o invasor pode capturar o handshake WPA2 para tentar um ataque de força bruta offline."
    },
    {
      text: "WPA3 exige o uso de Protected Management Frames (PMF), ou 802.11w, para proteger contra ataques de desautenticação e desassociação.",
      answer: true,
      comment: "Certo. Em WPA3, o PMF é obrigatório, protegendo os quadros de gerenciamento e tornando ataques como o de desautenticação muito mais difíceis de executar."
    },
    {
      text: "EAP-TTLS (Tunneled TLS) é semelhante ao PEAP, mas é mais flexível, pois pode usar métodos de autenticação internos mais antigos, como PAP ou CHAP, dentro do túnel TLS.",
      answer: true,
      comment: "Certo. Enquanto o PEAP foi desenvolvido principalmente pela Microsoft e Cisco e geralmente usa MS-CHAPv2, o EAP-TTLS é mais aberto e pode encapsular vários protocolos de autenticação legados."
    },
    {
      text: "Em uma configuração 802.1X, o servidor RADIUS é responsável por tomar a decisão final de autorizar ou negar o acesso à rede.",
      answer: true,
      comment: "Certo. O servidor RADIUS (Servidor de Autenticação) verifica as credenciais do suplicante e informa ao autenticador (o AP ou switch) se o acesso deve ser concedido."
    },
    {
      text: "A principal diferença entre WPA e WPA2 é que o WPA usa criptografia TKIP enquanto o WPA2 usa AES-CCMP.",
      answer: true,
      comment: "Certo. Esta é a distinção fundamental. O TKIP foi uma solução temporária, enquanto o AES-CCMP é um padrão de criptografia robusto e de longo prazo."
    },
    {
      text: "A autenticação baseada em contexto pode aumentar a segurança ao negar o acesso a um usuário com credenciais válidas se ele estiver tentando se conectar de um país desconhecido.",
      answer: true,
      comment: "Certo. Este é um exemplo perfeito de autenticação baseada em contexto, onde o 'contexto' (localização geográfica) é usado como um fator de risco para a decisão de acesso."
    },
    {
      text: "O modo 'WPA2-Personal' usa um servidor RADIUS para autenticar cada usuário individualmente.",
      answer: false,
      comment: "Errado. WPA2-Personal usa uma Pre-Shared Key (PSK), uma senha única compartilhada entre todos os usuários. O modo que usa um servidor RADIUS é o 'WPA2-Enterprise'."
    },
    {
      text: "O protocolo TKIP, usado no WPA, ainda era baseado no RC4 e, com o tempo, vulnerabilidades foram descobertas nele também.",
      answer: true,
      comment: "Certo. Embora o TKIP tenha corrigido as falhas mais gritantes do WEP, ele ainda era uma 'colcha de retalhos' baseada no RC4 e acabou sendo considerado inseguro e obsoleto."
    },
    {
      text: "O handshake de 4 vias do WPA2 é usado para gerar e trocar as chaves de criptografia que protegerão o tráfego de dados.",
      answer: true,
      comment: "Certo. O propósito do handshake é autenticar mutuamente o cliente e o AP (usando a PSK ou credenciais 802.1X) e derivar uma chave de sessão única (PTK) para criptografar a comunicação."
    },
    {
      text: "Wi-Fi Easy Connect, introduzido com o WPA3, permite que dispositivos sem tela (como IoT) sejam configurados na rede de forma segura usando um código QR.",
      answer: true,
      comment: "Certo. O Easy Connect simplifica o processo de onboarding de dispositivos IoT, substituindo métodos inseguros como o WPS."
    },
    {
      text: "Um servidor RADIUS lida apenas com autenticação, mas não com autorização ou contabilização (accounting).",
      answer: false,
      comment: "Errado. RADIUS é um protocolo AAA, que significa Authentication, Authorization, and Accounting. Ele pode autenticar quem você é, autorizar o que você pode fazer e registrar o que você fez."
    },
    {
      text: "O ataque de 'dicionário' contra WPA/WPA2-PSK funciona tentando adivinhar a senha em tempo real, conectando-se à rede milhares de vezes.",
      answer: false,
      comment: "Errado. O ataque é feito offline. O invasor primeiro captura o handshake de 4 vias e, em seguida, tenta adivinhar a senha em seu próprio computador, sem interagir mais com a rede, o que o torna rápido e indetectável."
    },
    {
      text: "O WPA3-Personal e o WPA3-Enterprise usam o mesmo método de autenticação.",
      answer: false,
      comment: "Errado. WPA3-Personal usa SAE (Simultaneous Authentication of Equals). WPA3-Enterprise continua a usar o framework 802.1X com EAP, assim como o WPA2-Enterprise, mas com segurança aprimorada."
    },
    {
      text: "O EAP-FAST (Flexible Authentication via Secure Tunneling) da Cisco é semelhante ao PEAP, mas usa PACs (Protected Access Credentials) para estabelecer o túnel rapidamente em reconexões.",
      answer: true,
      comment: "Certo. O PAC funciona como um 'token' de autenticação que permite ao cliente restabelecer rapidamente um túnel seguro sem passar por um processo de autenticação completo a cada vez."
    },
    {
      text: "A segmentação de rede, como a criação de uma rede Wi-Fi para convidados separada da rede interna, é um controle de segurança importante.",
      answer: true,
      comment: "Certo. Isolar o tráfego de convidados em uma VLAN e com regras de firewall impede que visitantes ou dispositivos comprometidos acessem recursos críticos da rede corporativa."
    },
    {
      text: "O WPA3 soluciona completamente o problema de ataques 'Evil Twin'.",
      answer: false,
      comment: "Errado. Embora o WPA3 torne mais difícil interceptar credenciais, ele não impede a criação de um AP falso. A vigilância do usuário e outras tecnologias, como a detecção de APs não autorizados (rogue APs), ainda são necessárias."
    },
    {
      text: "O suplicante (supplicant) no contexto 802.1X é o software no dispositivo cliente (como um laptop) que se comunica com o autenticador.",
      answer: true,
      comment: "Certo. O suplicante é o cliente que está solicitando acesso à rede. O Windows, macOS e Linux têm suplicantes 802.1X integrados."
    },
    {
      text: "A tecnologia 'Opportunistic Wireless Encryption' (OWE) no WPA3 fornece criptografia para redes Wi-Fi públicas e abertas.",
      answer: true,
      comment: "Certo. OWE (também conhecido como Wi-Fi Enhanced Open) criptografa o tráfego entre cada cliente e o AP em uma rede aberta, protegendo contra a escuta passiva, mesmo sem uma senha."
    },
    {
      text: "Um ataque de 'replay' contra o TKIP foi uma das razões pelas quais ele foi preterido em favor do AES-CCMP.",
      answer: true,
      comment: "Certo. O TKIP incluía um contador de sequência para se proteger contra ataques de replay, mas foram encontradas falhas que permitiam a um invasor injetar um número limitado de pacotes maliciosos."
    },
    {
      text: "A autenticação baseada em contexto é um exemplo de implementação do princípio de 'Zero Trust'.",
      answer: true,
      comment: "Certo. Em vez de confiar implicitamente em um usuário após a autenticação inicial, o Zero Trust e a autenticação baseada em contexto reavaliam continuamente a confiança com base em múltiplos fatores."
    },
    {
      text: "O protocolo 802.11i é o padrão IEEE que define as melhorias de segurança implementadas pelo WPA2.",
      answer: true,
      comment: "Certo. WPA2 é o nome comercial da certificação da Wi-Fi Alliance para produtos que implementam o padrão de segurança 802.11i."
    },
    {
      text: "Em EAP-TLS, o servidor envia seu certificado para o cliente, mas o cliente não precisa enviar um certificado para o servidor.",
      answer: false,
      comment: "Errado. A força do EAP-TLS está na autenticação mútua. O servidor se autentica para o cliente com um certificado, e o cliente se autentica para o servidor com seu próprio certificado."
    },
    {
      text: "A 'postura do dispositivo' (device posture) refere-se à localização física do dispositivo.",
      answer: false,
      comment: "Errado. A postura do dispositivo refere-se ao seu estado de segurança: se o antivírus está atualizado, se o firewall está ativado, se o sistema operacional possui os patches mais recentes, etc."
    },
    {
      text: "O WPA3 é totalmente retrocompatível com dispositivos que só suportam WPA2.",
      answer: false,
      comment: "Errado. O WPA3 não é diretamente retrocompatível. No entanto, existe um 'modo de transição' (WPA3-Transition Mode) que permite que um AP aceite conexões WPA2 e WPA3 simultaneamente no mesmo SSID, mas isso reduz a segurança geral."
    },
    {
      text: "O objetivo do 'group key handshake' em WPA2 é para distribuir a chave usada para criptografar o tráfego de broadcast e multicast.",
      answer: true,
      comment: "Certo. Enquanto o tráfego unicast usa a chave PTK, o tráfego de broadcast/multicast usa uma chave compartilhada por todos os clientes, a GTK (Group Temporal Key), que é distribuída de forma segura."
    },
    {
      text: "A autenticação 802.1X ocorre antes que o dispositivo cliente obtenha um endereço IP via DHCP.",
      answer: true,
      comment: "Certo. A porta do autenticador (switch ou AP) permanece em um estado bloqueado, permitindo apenas o tráfego EAP. Somente após a autenticação bem-sucedida a porta é aberta para o tráfego normal, como DHCP e IP."
    },
    {
      text: "O uso de uma VPN sobre uma rede Wi-Fi pública e insegura anula a necessidade de segurança na camada Wi-Fi (como WPA2).",
      answer: false,
      comment: "Errado. Uma VPN criptografa o tráfego do seu dispositivo para o servidor VPN, mas não protege o dispositivo de ataques na rede local (como ARP spoofing ou outros ataques de Camada 2). A segurança em camadas (defesa em profundidade) é sempre a melhor abordagem."
    },
    {
      text: "O WPA3 usa um 'Perfect Forward Secrecy' (PFS), o que significa que, mesmo que a senha da rede seja comprometida, o tráfego passado que foi capturado não pode ser descriptografado.",
      answer: true,
      comment: "Certo. O protocolo SAE do WPA3 gera chaves de sessão únicas que não são derivadas diretamente da senha. Comprometer a senha não compromete as chaves de sessão passadas, ao contrário do WPA2-PSK."
    },
    {
      text: "O protocolo LEAP (Lightweight EAP) da Cisco é considerado um dos métodos EAP mais seguros atualmente.",
      answer: false,
      comment: "Errado. O LEAP é um protocolo antigo e proprietário da Cisco que foi considerado inseguro há muitos anos devido a vulnerabilidades em seu método de desafio-resposta MS-CHAP. Ele foi substituído pelo PEAP e EAP-FAST."
    },
    {
      text: "A análise de tráfego de rádio frequência (RF) pode ser usada para detectar a presença de Pontos de Acesso não autorizados (rogue APs).",
      answer: true,
      comment: "Certo. Sistemas de prevenção de intrusão sem fio (WIPS) monitoram o espectro de RF para identificar APs que não fazem parte da rede gerenciada e podem representar um risco de segurança."
    },
    {
      text: "O WPA2-Enterprise é mais vulnerável a ataques de dicionário do que o WPA2-Personal.",
      answer: false,
      comment: "Errado. O WPA2-Enterprise, usando 802.1X, autentica usuários individualmente com credenciais únicas, eliminando o problema de uma única senha compartilhada que pode ser atacada offline. É muito mais seguro."
    },
    {
      text: "O 'roaming' seguro entre Pontos de Acesso em uma rede 802.1X é um processo simples que não requer considerações especiais.",
      answer: false,
      comment: "Errado. O roaming rápido e seguro é complexo. Protocolos como 802.11k, 802.11r (Fast BSS Transition) e 802.11v são necessários para permitir que um cliente mude de AP sem passar por uma reautenticação 802.1X completa, o que interromperia a conectividade."
    },
    {
      text: "A autenticação baseada em contexto pode usar um certificado de dispositivo como um dos fatores para permitir o acesso à rede.",
      answer: true,
      comment: "Certo. Verificar a presença de um certificado emitido pela empresa no dispositivo é uma ótima maneira de garantir que apenas dispositivos gerenciados e confiáveis possam se conectar, adicionando um forte fator de contexto."
    }
  ]
,
  "ataques-redes": [
    {
      text: "Um ataque de Negação de Serviço (DoS) e um de Negação de Serviço Distribuída (DDoS) são a mesma coisa, apenas com nomes diferentes.",
      answer: false,
      comment: "Errado. Um ataque DoS se origina de uma única fonte, enquanto um DDoS usa múltiplas fontes (geralmente uma botnet) para sobrecarregar o alvo, tornando-o muito mais poderoso e difícil de mitigar."
    },
    {
      text: "O objetivo principal de um ataque de phishing é instalar um ransomware no computador da vítima.",
      answer: false,
      comment: "Errado. O objetivo principal do phishing é enganar a vítima para que ela revele informações sensíveis, como credenciais de login, números de cartão de crédito ou informações pessoais. Embora possa ser um vetor para malware, seu foco é o roubo de informações."
    },
    {
      text: "Um exploit de 'dia zero' (zero-day) se refere a um ataque que explora uma vulnerabilidade de software que ainda não é conhecida pelo fornecedor ou pelo público.",
      answer: true,
      comment: "Certo. É chamado de 'dia zero' porque o fornecedor tem zero dias para criar uma correção (patch) antes que a vulnerabilidade possa ser explorada por invasores."
    },
    {
      text: "O ataque 'Ping da Morte' (Ping of Death) ainda é uma ameaça significativa para os sistemas operacionais modernos.",
      answer: false,
      comment: "Errado. O Ping da Morte explorava uma falha em pilhas TCP/IP antigas, enviando um pacote ICMP maior que o permitido, causando um buffer overflow. Sistemas modernos são imunes a este ataque específico há muitos anos."
    },
    {
      text: "Um ataque de UDP Flood sobrecarrega o alvo enviando um grande número de pacotes UDP para portas aleatórias, forçando o servidor a verificar se há uma aplicação escutando e a responder com um erro ICMP.",
      answer: true,
      comment: "Certo. O esforço de verificar a porta e gerar a resposta ICMP 'Destination Unreachable' para milhares de pacotes consome os recursos do servidor, levando à negação de serviço."
    },
    {
      text: "O ataque de MAC Flooding visa sobrecarregar a tabela de endereços MAC de um switch, fazendo com que ele se comporte como um hub e transmita todos os pacotes para todas as portas.",
      answer: true,
      comment: "Certo. Ao entrar no modo 'fail-open', o switch permite que um invasor na mesma rede capture (sniffe) o tráfego que normalmente não veria."
    },
    {
      text: "IP Spoofing é o ato de criar pacotes IP com um endereço IP de origem falsificado para ocultar a identidade do remetente ou se passar por outro sistema.",
      answer: true,
      comment: "Certo. O IP Spoofing é um componente chave em muitos ataques DoS e em ataques que exploram relações de confiança entre sistemas."
    },
    {
      text: "O envenenamento de ARP (ARP Spoofing) é um ataque eficaz em redes globais, como a Internet.",
      answer: false,
      comment: "Errado. O ARP Spoofing só funciona em redes locais (LANs), pois o protocolo ARP é usado para mapear endereços IP para endereços MAC dentro do mesmo segmento de rede e não é roteável pela Internet."
    },
    {
      text: "Um ataque de Buffer Overflow ocorre quando um programa tenta escrever mais dados em um buffer (um bloco de memória de tamanho fixo) do que ele pode conter, sobrescrevendo a memória adjacente.",
      answer: true,
      comment: "Certo. Isso pode levar a comportamento errático, travamentos ou, pior, permitir que um invasor execute código arbitrário no sistema vulnerável."
    },
    {
      text: "A Injeção de SQL (SQL Injection) é uma vulnerabilidade que afeta apenas o front-end de uma aplicação web.",
      answer: false,
      comment: "Errado. A SQL Injection é uma vulnerabilidade de back-end. O ataque é inserido através do front-end (ex: um formulário), mas explora a forma como a aplicação constrói consultas SQL para interagir com o banco de dados."
    },
    {
      text: "Cross-Site Scripting (XSS) é um ataque onde o invasor injeta scripts maliciosos em páginas web vistas por outros usuários.",
      answer: true,
      comment: "Certo. O script malicioso é executado no navegador da vítima e pode ser usado para roubar cookies de sessão, sequestrar contas de usuário ou redirecionar para sites maliciosos."
    },
    {
      text: "O envenenamento de cache DNS (DNS Poisoning) altera os registros DNS em um servidor para redirecionar o tráfego de um site legítimo para um site malicioso controlado pelo invasor.",
      answer: true,
      comment: "Certo. Ao envenenar o cache de um servidor DNS, o invasor pode fazer com que os usuários que consultam esse servidor sejam enviados para um endereço IP falso ao tentar acessar um site como 'banco.com'."
    },
    {
      text: "Uma botnet é uma rede de computadores infectados (zumbis) controlados remotamente por um invasor (o 'botmaster').",
      answer: true,
      comment: "Certo. Botnets são a principal ferramenta para realizar ataques DDoS em larga escala, mas também podem ser usadas para enviar spam, minerar criptomoedas ou roubar dados."
    },
    {
      text: "Um ataque de DoS de 'amplificação', como o DNS Amplification, envolve o envio de pequenas requisições a um servidor de terceiros que geram respostas muito maiores direcionadas à vítima.",
      answer: true,
      comment: "Certo. O invasor falsifica o IP de origem para ser o da vítima. Assim, os servidores DNS (ou NTP, etc.) enviam respostas grandes para a vítima, multiplicando o poder do ataque."
    },
    {
      text: "O XSS Refletido (Reflected XSS) é o tipo mais perigoso de XSS, pois o script malicioso fica permanentemente armazenado no servidor.",
      answer: false,
      comment: "Errado. Isso descreve o XSS Armazenado (Stored XSS). O XSS Refletido ocorre quando o script malicioso é 'refletido' do servidor para a vítima através de um link ou formulário, não sendo armazenado permanentemente."
    },
    {
      text: "A principal defesa contra SQL Injection é usar 'prepared statements' (declarações preparadas) ou consultas parametrizadas.",
      answer: true,
      comment: "Certo. Com prepared statements, os dados do usuário são enviados ao banco de dados separadamente da consulta SQL, garantindo que a entrada do usuário seja tratada como dados e não como código executável."
    },
    {
      text: "Um ataque de ARP Spoofing é um tipo de ataque Man-in-the-Middle (MitM).",
      answer: true,
      comment: "Certo. Ao redirecionar o tráfego através de sua máquina, o invasor se posiciona 'no meio' da comunicação, permitindo que ele intercepte, leia e modifique os dados trocados entre a vítima e o gateway."
    },
    {
      text: "Um ataque de força bruta tenta adivinhar uma senha tentando todas as combinações possíveis de caracteres.",
      answer: true,
      comment: "Certo. É um método exaustivo e lento, mas pode ser eficaz contra senhas curtas ou fracas. Ataques de dicionário são uma variação mais eficiente que tenta apenas palavras comuns e senhas vazadas."
    },
    {
      text: "O Phishing que visa especificamente um indivíduo ou organização de alto valor é chamado de 'Whaling'.",
      answer: true,
      comment: "Certo. 'Whaling' (caça à baleia) é um tipo de 'Spear Phishing' (pesca com lança) focado em executivos seniores (as 'baleias') para roubar informações confidenciais da empresa ou realizar fraudes financeiras."
    },
    {
      text: "A técnica de 'sandboxing' ajuda a prevenir ataques de buffer overflow, isolando o processo em um ambiente restrito.",
      answer: true,
      comment: "Certo. Mesmo que um buffer overflow ocorra, o sandboxing limita o dano que o código malicioso pode causar, pois ele não terá acesso ao sistema operacional principal ou a outros processos."
    },
    {
      text: "Um ataque de SYN Flood explora o handshake de três vias do TCP, enviando um grande número de pacotes SYN, mas nunca completando o handshake com o pacote ACK final.",
      answer: true,
      comment: "Certo. Isso deixa o servidor com um grande número de conexões semiabertas, consumindo seus recursos até que ele não possa mais aceitar conexões legítimas."
    },
    {
      text: "A validação de entrada do lado do cliente (com JavaScript) é suficiente para prevenir ataques de XSS e SQL Injection.",
      answer: false,
      comment: "Errado. A validação do lado do cliente pode ser facilmente contornada por um invasor. A validação e a sanitização de todas as entradas devem ser sempre realizadas no lado do servidor."
    },
    {
      text: "DNSSEC (DNS Security Extensions) é uma tecnologia projetada para proteger contra ataques de envenenamento de cache DNS, garantindo a autenticidade e a integridade das respostas DNS.",
      answer: true,
      comment: "Certo. O DNSSEC usa assinaturas digitais para criar uma cadeia de confiança, permitindo que um resolvedor verifique se a resposta DNS que recebeu é legítima e não foi modificada."
    },
    {
      text: "Um ataque de 'Session Hijacking' (sequestro de sessão) ocorre quando um invasor rouba o cookie de sessão de um usuário e o utiliza para se passar por esse usuário.",
      answer: true,
      comment: "Certo. O XSS é um método comum para roubar cookies de sessão. Uma vez que o invasor tem o cookie, ele pode acessar a aplicação web com os mesmos privilégios do usuário legítimo."
    },
    {
      text: "O ataque 'Slowloris' derruba um servidor web mantendo muitas conexões HTTP abertas pelo maior tempo possível, enviando dados muito lentamente, mas sem nunca completar a requisição.",
      answer: true,
      comment: "Certo. Este é um ataque de DoS de baixa largura de banda, pois não requer muito tráfego. Ele explora a forma como os servidores gerenciam conexões concorrentes, esgotando o pool de threads disponíveis."
    },
    {
      text: "A proteção ASLR (Address Space Layout Randomization) mitiga ataques de buffer overflow, tornando mais difícil para o invasor prever o endereço de memória do código que ele deseja executar.",
      answer: true,
      comment: "Certo. O ASLR carrega partes importantes de um programa (como a pilha, a heap e as bibliotecas) em locais aleatórios na memória a cada execução, frustrando os exploits que dependem de endereços fixos."
    },
    {
      text: "Um ataque de 'Directory Traversal' (ou 'Path Traversal') permite que um invasor acesse arquivos e diretórios armazenados fora do diretório raiz da web.",
      answer: true,
      comment: "Certo. Ao manipular variáveis com sequências como '../', um invasor pode 'voltar' na estrutura de diretórios e acessar arquivos sensíveis, como '/etc/passwd'."
    },
    {
      text: "Um ataque de DDoS de reflexão (Reflection Attack) é quando o invasor usa os próprios servidores da vítima para se atacarem.",
      answer: false,
      comment: "Errado. Um ataque de reflexão usa servidores de terceiros (refletores) que não estão relacionados à vítima. O invasor envia requisições a esses servidores com o endereço IP de origem falsificado para ser o da vítima."
    },
    {
      text: "O Cross-Site Request Forgery (CSRF ou XSRF) é um ataque que força um usuário final a executar ações indesejadas em uma aplicação web na qual ele está autenticado.",
      answer: true,
      comment: "Certo. Por exemplo, um invasor pode criar um link em um site malicioso que, quando clicado por uma vítima logada em seu banco, transfere dinheiro para a conta do invasor sem o conhecimento da vítima."
    },
    {
      text: "A principal diferença entre phishing e pharming é que o phishing usa iscas (e-mails, mensagens) enquanto o pharming compromete a resolução de nomes (DNS) para redirecionar usuários.",
      answer: true,
      comment: "Certo. Phishing requer que a vítima clique em algo. Pharming é mais passivo; a vítima tenta ir para um site legítimo, mas é redirecionada para um falso devido ao envenenamento de DNS ou modificação de arquivos de hosts."
    },
    {
      text: "Um ataque de 'Man-in-the-Browser' (MitB) é realizado por um Trojan que infecta o navegador da web de uma vítima para interceptar e manipular dados entre o usuário e um site.",
      answer: true,
      comment: "Certo. Diferente do MitM tradicional, o MitB opera dentro do próprio computador da vítima, o que lhe permite manipular transações (ex: alterar o número da conta de destino em uma transferência bancária) de forma invisível para o usuário."
    },
    {
      text: "Ataques de injeção de comando (Command Injection) exploram vulnerabilidades que permitem a um invasor executar comandos arbitrários no sistema operacional do servidor.",
      answer: true,
      comment: "Certo. Isso geralmente ocorre quando uma aplicação passa entradas do usuário não sanitizadas para uma shell do sistema. É extremamente perigoso, pois pode dar ao invasor controle total sobre o servidor."
    },
    {
      text: "Um ataque de 'Clickjacking' engana um usuário para que ele clique em algo diferente do que ele percebe, sobrepondo uma página ou botão invisível sobre um visível.",
      answer: true,
      comment: "Certo. Por exemplo, um usuário pode pensar que está clicando em um botão 'Ganhe um prêmio', mas na verdade está clicando em um botão 'Curtir' do Facebook em um iframe invisível."
    },
    {
      text: "O 'IP spoofing' é facilmente detectado e bloqueado por firewalls de borda.",
      answer: false,
      comment: "Errado. Embora firewalls possam usar filtragem de ingresso (ingress filtering) para bloquear pacotes que chegam de fora com um endereço IP de origem interno, detectar pacotes com IPs de origem externos falsificados é muito mais difícil."
    },
    {
      text: "Um ataque de 'teardrop' fragmenta pacotes IP de forma maliciosa e sobreposta, fazendo com que o sistema operacional receptor trave ao tentar remontá-los.",
      answer: true,
      comment: "Certo. Semelhante ao Ping da Morte, este é um ataque antigo que explorava falhas na lógica de remontagem de fragmentos IP. Sistemas modernos são imunes a ele."
    },
    {
      text: "Ataques de XSS podem ser mitigados usando o cabeçalho HTTP 'Content-Security-Policy' (CSP).",
      answer: true,
      comment: "Certo. O CSP permite que um administrador de site especifique de quais domínios o navegador deve ter permissão para carregar recursos (como scripts), o que pode bloquear a execução de scripts maliciosos injetados."
    },
    {
      text: "Um ataque de 'Birthday Attack' explora a matemática por trás das probabilidades de colisão em funções de hash.",
      answer: true,
      comment: "Certo. Baseia-se no paradoxo do aniversário: a probabilidade de duas pessoas em um grupo terem o mesmo aniversário é surpreendentemente alta. Da mesma forma, é mais fácil encontrar duas entradas que produzem o mesmo hash (uma colisão) do que encontrar uma entrada para um hash específico."
    },
    {
      text: "O 'SQL injection' cego (Blind SQLi) é um tipo de injeção de SQL onde o invasor não recebe nenhuma resposta ou erro do banco de dados.",
      answer: true,
      comment: "Certo. Em vez disso, o invasor infere os dados fazendo uma série de perguntas de verdadeiro/falso ou baseadas em tempo, observando o comportamento da aplicação para extrair informações lentamente."
    },
    {
      text: "Um ataque de 'watering hole' (bebedouro) compromete um site que é frequentemente visitado por um grupo específico de alvos (ex: funcionários de uma empresa) e espera que eles se infectem.",
      answer: true,
      comment: "Certo. Em vez de atacar os alvos diretamente, o invasor envenena um 'bebedouro' digital que sabe que seus alvos visitarão, tornando o ataque mais eficiente e direcionado."
    },
    {
      text: "Ataques de DoS na camada de aplicação (Camada 7) são mais fáceis de detectar do que ataques na camada de rede (Camada 3/4), pois geram um volume de tráfego muito maior.",
      answer: false,
      comment: "Errado. Ataques de Camada 7 (ex: HTTP flood) podem ser muito eficazes com baixo volume de tráfego, pois consomem recursos do servidor (CPU, memória) em vez de largura de banda. Isso os torna mais difíceis de distinguir do tráfego legítimo."
    },
    {
      text: "A mitigação primária para ataques de MAC flooding é habilitar a segurança de porta (port security) nos switches de rede.",
      answer: true,
      comment: "Certo. A segurança de porta pode limitar o número de endereços MAC permitidos em uma porta ou vincular portas a endereços MAC específicos, impedindo que a tabela CAM do switch seja inundada."
    },
    {
      text: "Um ataque de 'pass-the-hash' permite que um invasor se autentique em um servidor ou serviço remoto sem precisar saber a senha em texto claro da vítima.",
      answer: true,
      comment: "Certo. O invasor rouba o hash da senha da memória de um sistema comprometido e o reutiliza para se autenticar em outros sistemas que usam o mesmo protocolo de autenticação (comum em ambientes Windows com NTLM)."
    },
    {
      text: "Ataques de buffer overflow só podem ocorrer em linguagens de programação de baixo nível como C e C++.",
      answer: true,
      comment: "Certo. Linguagens modernas como Java, Python e C# gerenciam a memória automaticamente e incluem verificação de limites (bounds checking), o que previne esse tipo de vulnerabilidade."
    },
    {
      text: "Um ataque de 'race condition' explora a janela de tempo entre a verificação de uma condição de segurança e a execução da ação correspondente.",
      answer: true,
      comment: "Certo. O invasor tenta alterar a condição após ela ter sido verificada, mas antes que a ação seja concluída, para contornar o controle de segurança. É um ataque Time-of-Check-to-Time-of-Use (TOCTOU)."
    },
    {
      text: "O 'smishing' é uma variação do phishing que usa chamadas de voz (VoIP) para enganar as vítimas.",
      answer: false,
      comment: "Errado. Smishing é phishing via SMS (mensagens de texto). Phishing por voz é chamado de 'vishing'."
    },
    {
      text: "Um ataque de 'credential stuffing' usa listas de nomes de usuário e senhas vazadas de uma violação de dados para tentar fazer login em muitos outros sites.",
      answer: true,
      comment: "Certo. Este ataque explora o fato de que muitas pessoas reutilizam as mesmas senhas em vários serviços. É um ataque de força bruta altamente eficiente."
    },
    {
      text: "O objetivo de um ataque de 'DNS tunneling' é criptografar o tráfego de rede.",
      answer: false,
      comment: "Errado. O objetivo do DNS tunneling é exfiltrar dados ou criar um canal de comando e controle (C2) encapsulando o tráfego em consultas DNS, que muitas vezes não são inspecionadas por firewalls."
    },
    {
      text: "Ataques de XSS baseados em DOM ocorrem quando o script do lado do cliente manipula o DOM com dados fornecidos pelo usuário de uma forma insegura.",
      answer: true,
      comment: "Certo. A vulnerabilidade está inteiramente no código JavaScript do lado do cliente, e o payload malicioso pode nunca ser enviado ao servidor, tornando-o difícil de detectar por WAFs tradicionais."
    },
    {
      text: "Um ataque de 'replay' consiste em um invasor interceptar e retransmitir uma mensagem de comunicação válida para se passar por um usuário ou repetir uma ação.",
      answer: true,
      comment: "Certo. Para prevenir isso, os protocolos de comunicação devem usar nonces (números usados uma vez) ou timestamps para garantir que cada mensagem seja única e não possa ser reutilizada."
    },
    {
      text: "Usar HTTPS previne completamente ataques de SQL Injection.",
      answer: false,
      comment: "Errado. HTTPS criptografa o tráfego entre o cliente e o servidor, protegendo contra a interceptação (sniffing). No entanto, não faz nada para validar ou sanitizar os dados enviados, então um payload de SQL Injection passará pelo túnel criptografado e atingirá a aplicação vulnerável."
    },
    {
      text: "Um ataque de 'brute force reverso' tenta adivinhar o nome de usuário para uma única senha comum (como '123456').",
      answer: true,
      comment: "Certo. Em vez de tentar muitas senhas para um usuário, o invasor tenta muitos usuários para uma senha, o que pode contornar políticas de bloqueio de conta que se ativam após várias tentativas de senha falhas para um mesmo usuário."
    },
    {
      text: "Ataques de 'session fixation' ocorrem quando um invasor força o navegador de uma vítima a usar um ID de sessão que ele já conhece.",
      answer: true,
      comment: "Certo. Depois que a vítima faz login usando esse ID de sessão 'fixado', o invasor pode usar o mesmo ID para sequestrar a sessão autenticada."
    },
    {
      text: "O 'ping da morte' e o 'UDP flood' são exemplos de ataques de negação de serviço na camada de aplicação.",
      answer: false,
      comment: "Errado. Ambos são ataques na camada de rede (Camada 3) ou de transporte (Camada 4), pois exploram os protocolos IP, ICMP e UDP, e não protocolos de aplicação como HTTP."
    },
    {
      text: "A principal defesa contra Cross-Site Request Forgery (CSRF) é o uso de tokens anti-CSRF.",
      answer: true,
      comment: "Certo. A aplicação gera um token único e imprevisível para cada sessão de usuário e exige que esse token seja incluído em todas as requisições que alteram o estado, garantindo que a requisição venha da própria aplicação e não de um site de terceiros."
    },
    {
      text: "Um ataque de 'Cryptojacking' usa o computador de uma vítima para minerar criptomoedas sem o seu consentimento.",
      answer: true,
      comment: "Certo. Isso pode ser feito através de malware instalado na máquina ou por scripts que rodam em uma página da web enquanto o usuário a visita, consumindo recursos de CPU da vítima."
    },
    {
      text: "Um ataque de 'Typo-squatting' registra nomes de domínio que são erros de digitação comuns de sites populares para enganar os usuários.",
      answer: true,
      comment: "Certo. Por exemplo, registrar 'gogle.com' ou 'gooogle.com' para capturar usuários que digitam o endereço do Google incorretamente. Esses sites podem ser usados para phishing ou para distribuir malware."
    },
    {
      text: "O 'IP spoofing' é impossível em redes que implementam o protocolo BGP.",
      answer: false,
      comment: "Errado. O BGP (Border Gateway Protocol) lida com o roteamento entre sistemas autônomos na internet, mas não valida intrinsecamente o endereço IP de origem dos pacotes. Técnicas como a filtragem uRPF (Unicast Reverse Path Forwarding) são necessárias para combater o spoofing."
    },
    {
      text: "Um ataque de 'XML External Entity' (XXE) explora parsers XML mal configurados para acessar recursos internos do servidor ou executar código.",
      answer: true,
      comment: "Certo. Ao injetar uma entidade externa em um documento XML, um invasor pode forçar o parser a ler arquivos locais, fazer requisições de rede internas ou até mesmo causar negação de serviço."
    },
    {
      text: "Um ataque de 'zero-day' só pode ser executado por agências governamentais.",
      answer: false,
      comment: "Errado. Embora governos sejam grandes compradores e desenvolvedores de exploits de dia zero, eles também são descobertos e usados por pesquisadores de segurança, cibercriminosos e grupos de hacktivistas."
    },
    {
      text: "A detecção de anomalias é uma técnica eficaz para identificar ataques de DDoS, comparando o tráfego atual com uma linha de base (baseline) do tráfego normal.",
      answer: true,
      comment: "Certo. Quando o volume ou o tipo de tráfego desvia significativamente da norma estabelecida, o sistema pode acionar um alerta ou iniciar a mitigação automática."
    }
  ]
,
  "frameworks-seguranca": [
    {
      text: "O MITRE ATT&CK é um framework de controles de segurança prescritivos que as organizações devem implementar.",
      answer: false,
      comment: "Errado. O ATT&CK é uma base de conhecimento globalmente acessível de táticas e técnicas de adversários baseada em observações do mundo real, não uma lista de controles de segurança a serem implementados."
    },
    {
      text: "No framework ATT&CK, 'Táticas' representam o objetivo técnico de um adversário, como 'Acesso Inicial' ou 'Execução'.",
      answer: true,
      comment: "Certo. As Táticas representam o 'porquê' de uma ação do adversário, enquanto as 'Técnicas' representam o 'como' essa ação é realizada."
    },
    {
      text: "O NIST Cybersecurity Framework (CSF) é obrigatório para todas as empresas privadas nos Estados Unidos.",
      answer: false,
      comment: "Errado. O NIST CSF é um framework voluntário, projetado para ser flexível e adaptável a diferentes organizações, setores e perfis de risco."
    },
    {
      text: "As cinco funções principais do NIST CSF são: Identificar, Proteger, Detectar, Responder e Recuperar.",
      answer: true,
      comment: "Certo. Essas cinco funções fornecem uma visão de alto nível do ciclo de vida do gerenciamento de riscos de segurança cibernética."
    },
    {
      text: "Os CIS Controls são uma lista de mais de 100 controles de segurança complexos, todos com a mesma prioridade.",
      answer: false,
      comment: "Errado. Os CIS Controls (atualmente 18 na v8) são uma lista priorizada de ações de defesa. Eles são divididos em Grupos de Implementação (IGs) para ajudar as organizações a se concentrarem nos controles mais críticos primeiro."
    },
    {
      text: "O Grupo de Implementação 1 (IG1) dos CIS Controls representa a higiene cibernética básica e é o ponto de partida recomendado para todas as empresas.",
      answer: true,
      comment: "Certo. O IG1 define um conjunto mínimo de defesas que todas as organizações devem implementar para se protegerem contra os ataques mais comuns."
    },
    {
      text: "A matriz ATT&CK for Enterprise cobre táticas e técnicas usadas contra redes corporativas Windows, macOS e Linux.",
      answer: true,
      comment: "Certo. A matriz Enterprise é a mais conhecida e abrange o comportamento de adversários em ambientes de TI corporativos tradicionais."
    },
    {
      text: "Os 'Perfis' (Profiles) no NIST CSF são usados para descrever o nível de maturidade de uma organização, variando de Parcial a Adaptativo.",
      answer: false,
      comment: "Errado. Isso descreve os 'Níveis de Implementação' (Tiers). Os Perfis são usados para alinhar as Funções, Categorias e Subcategorias com os requisitos de negócios, tolerâncias a risco e recursos de uma organização."
    },
    {
      text: "O CIS Control 1 é 'Inventário e Controle de Ativos de Hardware'.",
      answer: true,
      comment: "Certo. O princípio fundamental é que você não pode proteger o que não sabe que tem. Manter um inventário de hardware é o primeiro passo crítico."
    },
    {
      text: "O MITRE ATT&CK foca principalmente em vulnerabilidades (CVEs) e não em comportamento pós-exploração.",
      answer: false,
      comment: "Errado. O ATT&CK foca no comportamento do adversário (Táticas, Técnicas e Procedimentos - TTPs) após a exploração inicial. Ele descreve o que os invasores fazem, não as vulnerabilidades que exploram."
    },
    {
      text: "A função 'Identificar' do NIST CSF se concentra em desenvolver a compreensão organizacional para gerenciar riscos de segurança cibernética para sistemas, pessoas, ativos, dados e capacidades.",
      answer: true,
      comment: "Certo. Esta função inclui atividades como gerenciamento de ativos, avaliação de riscos e governança."
    },
    {
      text: "Os CIS Controls e os CIS Benchmarks são a mesma coisa.",
      answer: false,
      comment: "Errado. Os CIS Controls são ações de defesa (o 'quê'). Os CIS Benchmarks são guias de configuração segura para tecnologias específicas (o 'como'), como sistemas operacionais e servidores web."
    },
    {
      text: "A tática 'Comando e Controle' (C2) no ATT&CK descreve como os adversários se comunicam com os sistemas comprometidos sob seu controle.",
      answer: true,
      comment: "Certo. Isso inclui técnicas como o uso de protocolos de aplicação, encapsulamento de dados e canais de comunicação não padrão para manter o controle sobre os sistemas infectados."
    },
    {
      text: "Os Níveis de Implementação (Tiers) do NIST CSF medem o rigor das práticas de gerenciamento de risco de uma organização e vão do Nível 1 (Parcial) ao Nível 4 (Adaptativo).",
      answer: true,
      comment: "Certo. Os Tiers ajudam a organização a entender sua abordagem ao risco, desde reativa (Parcial) até proativa e preditiva (Adaptativo)."
    },
    {
      text: "O Grupo de Implementação 3 (IG3) dos CIS Controls é projetado para organizações com pessoal especializado em segurança cibernética e que lidam com dados ou sistemas críticos.",
      answer: true,
      comment: "Certo. O IG3 inclui controles que são mais complexos e exigem mais recursos, mas que ajudam a se defender contra adversários sofisticados."
    },
    {
      text: "O MITRE ATT&CK Navigator é uma ferramenta usada para automatizar a correção de vulnerabilidades de segurança.",
      answer: false,
      comment: "Errado. O ATT&CK Navigator é uma ferramenta de visualização e exploração das matrizes ATT&CK. É usado para planejamento, análise de cobertura e comunicação, não para correção automática."
    },
    {
      text: "A função 'Recuperar' do NIST CSF se concentra no desenvolvimento e implementação de atividades para restaurar capacidades ou serviços que foram prejudicados devido a um incidente.",
      answer: true,
      comment: "Certo. Esta função é crucial para a resiliência dos negócios e inclui planejamento de recuperação, melhorias e comunicações."
    },
    {
      text: "O CIS Control 7, 'Proteção de Dados', foca exclusivamente em criptografia.",
      answer: false,
      comment: "Errado. Embora a criptografia seja uma parte importante, o CIS Control 7 (na v8, é o Controle 3) abrange um processo mais amplo de desenvolver e manter um inventário de dados sensíveis, gerenciamento de acesso e prevenção de exfiltração."
    },
    {
      text: "A tática 'Persistência' no ATT&CK consiste em técnicas que os adversários usam para manter o acesso a um sistema através de reinicializações, alterações de credenciais e outras interrupções.",
      answer: true,
      comment: "Certo. Exemplos incluem adicionar uma conta de usuário, criar um novo serviço ou modificar o registro do sistema para executar código malicioso na inicialização."
    },
    {
      text: "O NIST CSF foi criado principalmente para agências governamentais federais dos EUA.",
      answer: false,
      comment: "Errado. Embora tenha sido desenvolvido em resposta a uma ordem executiva para proteger a infraestrutura crítica, ele foi projetado desde o início para ser usado por qualquer organização, pública ou privada, de qualquer tamanho ou setor."
    },
    {
      text: "Os CIS Controls são desenvolvidos por um pequeno grupo de especialistas do governo dos EUA.",
      answer: false,
      comment: "Errado. Os CIS Controls são desenvolvidos e mantidos por uma comunidade global de voluntários, incluindo especialistas de empresas, governo e academia, usando um processo de consenso."
    },
    {
      text: "A tática 'Exfiltração' no ATT&CK descreve as técnicas que os adversários usam para roubar dados de uma rede.",
      answer: true,
      comment: "Certo. Isso pode envolver a compactação de dados, a criptografia do tráfego e o uso de um canal de comando e controle ou outro protocolo para transferir os dados para fora da rede."
    },
    {
      text: "Um 'Perfil Alvo' (Target Profile) no NIST CSF descreve o estado de segurança cibernética desejado por uma organização.",
      answer: true,
      comment: "Certo. As organizações criam um 'Perfil Atual' para entender onde estão e um 'Perfil Alvo' para onde querem chegar. A lacuna entre os dois informa o plano de ação."
    },
    {
      text: "O CIS Control 4, 'Configuração Segura de Ativos e Software Corporativos', promove o uso de benchmarks de configuração como os CIS Benchmarks.",
      answer: true,
      comment: "Certo. Este controle foca em estabelecer e manter a configuração segura de sistemas, o que inclui a remoção de software desnecessário e a aplicação de guias de 'hardening'."
    },
    {
      text: "O MITRE ATT&CK é mais útil para equipes de 'Blue Team' (defensores) do que para equipes de 'Red Team' (atacantes).",
      answer: false,
      comment: "Errado. O ATT&CK é extremamente valioso para ambos. O Blue Team o usa para priorizar defesas e criar detecções. O Red Team o usa para emular adversários e planejar engajamentos, garantindo que estão testando as defesas contra TTPs do mundo real."
    },
    {
      text: "A função 'Proteger' do NIST CSF foca em desenvolver e implementar as salvaguardas apropriadas para garantir a entrega de serviços de infraestrutura crítica.",
      answer: true,
      comment: "Certo. Esta é a função de 'implementação' e inclui categorias como gerenciamento de identidade e acesso, segurança de dados e tecnologias de proteção."
    },
    {
      text: "Os CIS Controls são atualizados a cada cinco anos.",
      answer: false,
      comment: "Errado. Os CIS Controls são atualizados conforme necessário com base em novas ameaças e dados de ataques. A transição da versão 7 para a 8, por exemplo, levou cerca de três anos."
    },
    {
      text: "A tática 'Movimentação Lateral' no ATT&CK descreve como os adversários se movem através de uma rede após obterem acesso inicial.",
      answer: true,
      comment: "Certo. O objetivo é explorar e controlar sistemas remotos na rede. Técnicas comuns incluem o uso de credenciais roubadas com ferramentas como PsExec ou Windows Remote Management."
    },
    {
      text: "O NIST CSF não fornece referências para outros padrões como ISO 27001 ou COBIT.",
      answer: false,
      comment: "Errado. O Core do NIST CSF inclui 'Referências Informativas' que mapeiam as Subcategorias para controles específicos em outros padrões, como ISO 27001, COBIT, e os próprios CIS Controls."
    },
    {
      text: "O CIS Control 18, 'Segurança de Aplicações de Software', foi adicionado na versão 7.1 dos controles.",
      answer: false,
      comment: "Errado. O controle focado em segurança de software era o 16 na v7.1. Na v8, a segurança de software é abordada no Controle 16, 'Gerenciamento de Segurança de Aplicações'. O Controle 18 na v8 é 'Proteção de Dados'."
    },
    {
      text: "O MITRE Shield é um framework complementar ao ATT&CK que foca em técnicas de defesa ativas.",
      answer: true,
      comment: "Certo. Enquanto o ATT&CK descreve o que os adversários fazem, o Shield é uma base de conhecimento de técnicas de defesa que as organizações podem usar para se engajar e conter adversários em suas redes."
    },
    {
      text: "A função 'Detectar' do NIST CSF se concentra em desenvolver e implementar atividades para identificar a ocorrência de um evento de segurança cibernética.",
      answer: true,
      comment: "Certo. Isso permite a descoberta oportuna de eventos e inclui categorias como 'Anomalias e Eventos', 'Monitoramento Contínuo de Segurança' e 'Processos de Detecção'."
    },
    {
      text: "Os CIS Controls são focados principalmente em ameaças internas.",
      answer: false,
      comment: "Errado. Os CIS Controls são projetados para proteger contra uma ampla gama de ameaças, com uma forte ênfase nas ameaças externas mais comuns e perigosas observadas na internet."
    },
    {
      text: "A tática 'Coleta' no ATT&CK descreve as técnicas usadas pelos adversários para reunir informações de interesse para seu objetivo final.",
      answer: true,
      comment: "Certo. Antes da exfiltração, os adversários precisam encontrar os dados. Técnicas incluem a captura de tela, a entrada do teclado (keylogging) e a busca em arquivos locais."
    },
    {
      text: "A implementação do NIST CSF sempre resulta em uma certificação formal.",
      answer: false,
      comment: "Errado. O NIST não oferece um programa de certificação para o CSF. A conformidade é autoavaliada. Algumas empresas terceirizadas podem oferecer avaliações, mas não é uma certificação oficial do NIST."
    },
    {
      text: "O CIS Control 2 é 'Inventário e Controle de Ativos de Software'.",
      answer: true,
      comment: "Certo. Assim como o hardware, é crucial saber qual software está instalado na rede para poder gerenciá-lo, remover software não autorizado e corrigir vulnerabilidades."
    },
    {
      text: "O MITRE ATT&CK para ICS (Sistemas de Controle Industrial) descreve as ações que um adversário pode tomar ao operar em um ambiente de tecnologia operacional (OT).",
      answer: true,
      comment: "Certo. Esta matriz é específica para os domínios de ICS/OT e inclui táticas como 'Inibir Resposta de Processo' e 'Prejudicar Controle de Processo', que não existem na matriz Enterprise."
    },
    {
      text: "A função 'Responder' do NIST CSF inclui a análise de incidentes para garantir que o incidente seja efetivamente contido.",
      answer: true,
      comment: "Certo. A categoria 'Análise' dentro da função Responder lida com a investigação do incidente, forense e compreensão do impacto para orientar as atividades de resposta."
    },
    {
      text: "A priorização dos CIS Controls é baseada puramente em teoria acadêmica.",
      answer: false,
      comment: "Errado. A priorização é baseada em dados de ataques reais e na experiência de especialistas da comunidade, focando nas defesas que neutralizam a maior parte das técnicas de ataque mais prevalentes."
    },
    {
      text: "A tática 'Impacto' no ATT&CK descreve as técnicas usadas para interromper a disponibilidade ou comprometer a integridade dos sistemas e dados.",
      answer: true,
      comment: "Certo. Este é o objetivo final de muitos adversários. Técnicas incluem a destruição de dados, criptografia de dados (ransomware) e negação de serviço."
    },
    {
      text: "Os 'Níveis de Implementação' (Tiers) do NIST CSF são uma medida direta da maturidade de segurança de uma organização.",
      answer: false,
      comment: "Errado. O NIST adverte que os Tiers não devem ser vistos como níveis de maturidade. A escolha de um Tier deve ser uma decisão de negócios baseada nos objetivos da organização, no ambiente de ameaças e nos requisitos regulatórios."
    },
    {
      text: "O CIS Control 8, 'Gerenciamento de Logs de Auditoria', é sobre coletar, revisar e reter logs de eventos.",
      answer: true,
      comment: "Certo. (Na v8, é o Controle 8). Os logs são essenciais para detectar, entender e se recuperar de ataques."
    },
    {
      text: "O MITRE ATT&CK não inclui informações sobre mitigação de técnicas.",
      answer: false,
      comment: "Errado. Para cada técnica na base de conhecimento, o ATT&CK fornece uma lista de 'Mitigações' que descrevem os tipos de controles de segurança que podem ser usados para prevenir ou detectar essa técnica."
    },
    {
      text: "O NIST CSF é um substituto direto para um programa de gerenciamento de riscos de segurança da informação.",
      answer: false,
      comment: "Errado. O CSF é uma ferramenta para organizar e melhorar um programa de gerenciamento de riscos, não para substituí-lo. Ele fornece uma linguagem comum e uma estrutura, mas não substitui a necessidade de um programa de risco abrangente."
    },
    {
      text: "O CIS Control 6, 'Gerenciamento de Contas', foca em garantir que apenas usuários autorizados tenham acesso aos sistemas.",
      answer: true,
      comment: "Certo. (Na v8, é o Controle 5). Isso envolve o uso de processos para criar, gerenciar e desativar contas, além de controlar o uso de privilégios administrativos."
    },
    {
      text: "O MITRE ATT&CK usa um sistema de pontuação para classificar o risco de cada técnica.",
      answer: false,
      comment: "Errado. O ATT&CK é uma base de conhecimento descritiva e não atribui pontuações de risco ou severidade às técnicas. A relevância de uma técnica depende do ambiente e do perfil de ameaça de cada organização."
    },
    {
      text: "A estrutura do NIST CSF Core é composta por Funções, Categorias e Subcategorias.",
      answer: true,
      comment: "Certo. As Funções são o nível mais alto, as Categorias são subdivisões das funções e as Subcategorias são os resultados de segurança específicos (controles)."
    },
    {
      text: "Os CIS Controls são projetados para serem implementados em uma ordem estrita, de 1 a 18.",
      answer: false,
      comment: "Errado. Embora numerados, a ordem de implementação deve ser guiada pelos Grupos de Implementação (IGs). As organizações devem focar em implementar todos os controles do IG1 antes de passar para o IG2."
    },
    {
      text: "A tática 'Acesso a Credenciais' no ATT&CK descreve técnicas para roubar nomes de usuário e senhas.",
      answer: true,
      comment: "Certo. Isso inclui técnicas como 'dumping' de hashes de senha da memória (ex: Mimikatz), keylogging e busca por senhas em arquivos e registros."
    },
    {
      text: "O NIST CSF é aplicável apenas à infraestrutura de TI e não a sistemas de controle industrial (ICS).",
      answer: false,
      comment: "Errado. O NIST desenvolveu perfis e guias específicos, como o 'NIST CSF Profile for Manufacturing', para ajudar a aplicar o framework a ambientes de ICS/OT."
    },
    {
      text: "O CIS Control 3, 'Proteção de Dados', é considerado um dos controles mais fundamentais para todas as organizações.",
      answer: true,
      comment: "Certo. Entender onde estão os dados sensíveis e como protegê-los é um pilar central da segurança da informação e está incluído no IG1."
    },
    {
      text: "O MITRE ATT&CK é atualizado anualmente em uma data fixa.",
      answer: false,
      comment: "Errado. A base de conhecimento do ATT&CK é atualizada várias vezes por ano, à medida que novas informações sobre o comportamento de adversários se tornam disponíveis pela comunidade de inteligência de ameaças."
    },
    {
      text: "O 'Framework Core' do NIST CSF é um conjunto de atividades de segurança cibernética, resultados desejados e referências aplicáveis que são comuns a todos os setores de infraestrutura crítica.",
      answer: true,
      comment: "Certo. O Core é a parte central e mais detalhada do framework, fornecendo o vocabulário e a estrutura para gerenciar riscos."
    },
    {
      text: "O CIS Control 17, 'Resposta a Incidentes e Gerenciamento', estabelece a necessidade de uma organização ter um plano para responder a ataques.",
      answer: true,
      comment: "Certo. (Na v8, é o Controle 17). Este controle descreve a importância de desenvolver e testar um programa de resposta a incidentes para se preparar, detectar, analisar, conter, erradicar e recuperar de ataques."
    },
    {
      text: "O MITRE ATT&CK pode ser usado para mapear as capacidades de defesa de uma organização contra técnicas de ataque específicas.",
      answer: true,
      comment: "Certo. Isso é conhecido como 'análise de cobertura' (coverage analysis) e ajuda as organizações a identificar lacunas em sua visibilidade e em seus controles de segurança."
    },
    {
      text: "O NIST CSF foi projetado para substituir completamente a necessidade de outros padrões como o ISO 27001.",
      answer: false,
      comment: "Errado. O CSF foi projetado para ser compatível e complementar a outros padrões. Ele fornece um ponto de entrada e uma linguagem comum, e suas Referências Informativas mapeiam diretamente para controles em padrões como o ISO 27001."
    },
    {
      text: "Os CIS Controls são gratuitos e estão disponíveis publicamente para qualquer pessoa usar.",
      answer: true,
      comment: "Certo. Tanto os CIS Controls quanto os CIS Benchmarks estão disponíveis gratuitamente para download e uso, como parte da missão do Center for Internet Security de tornar o mundo conectado um lugar mais seguro."
    },
    {
      text: "A tática 'Defesa Evasiva' no ATT&CK descreve como os adversários evitam ser detectados.",
      answer: true,
      comment: "Certo. Isso inclui uma ampla gama de técnicas, como mascaramento, ofuscação de arquivos ou informações, desinstalação de software de segurança e modificação de registros."
    },
    {
      text: "A adoção do NIST CSF garante 100% de segurança contra todos os tipos de ataques cibernéticos.",
      answer: false,
      comment: "Errado. Nenhum framework ou conjunto de controles pode garantir 100% de segurança. O objetivo do CSF é gerenciar o risco de segurança cibernética de forma eficaz, não eliminá-lo completamente, o que é impossível."
    }
  ]
,
  "apt": [
    {
      text: "Uma Ameaça Persistente Avançada (APT) é um ataque de curto prazo com o objetivo de causar interrupção imediata.",
      answer: false,
      comment: "Errado. APTs são campanhas de longo prazo, furtivas e sofisticadas, com o objetivo de manter acesso a uma rede para exfiltrar dados ou espionar, em vez de causar interrupção imediata."
    },
    {
      text: "O termo 'Persistente' em APT refere-se ao fato de que o ator da ameaça mantém acesso à rede alvo por um longo período.",
      answer: true,
      comment: "Certo. A persistência é uma característica chave, onde o invasor usa várias técnicas para garantir que seu acesso sobreviva a reinicializações, alterações de credenciais e outras contramedidas."
    },
    {
      text: "Qualquer hacker habilidoso pode ser considerado um ator de APT.",
      answer: false,
      comment: "Errado. Atores de APT são tipicamente grupos bem organizados, bem financiados e muitas vezes patrocinados por estados-nação. Eles possuem recursos e objetivos que vão além dos de hackers individuais."
    },
    {
      text: "O objetivo principal de um ataque APT é quase sempre o ganho financeiro direto, como o ransomware.",
      answer: false,
      comment: "Errado. Embora o ganho financeiro possa ser um objetivo, os principais motivadores para APTs são espionagem (governamental ou corporativa), roubo de propriedade intelectual, sabotagem e objetivos políticos."
    },
    {
      text: "A fase de 'Acesso Inicial' de um ciclo de vida de APT geralmente envolve o uso de exploits de dia zero ou spear phishing altamente direcionado.",
      answer: true,
      comment: "Certo. Atores de APT usam métodos sofisticados e personalizados para obter o primeiro ponto de entrada na rede alvo, evitando a detecção por defesas genéricas."
    },
    {
      text: "Uma vez dentro da rede, os atores de APT tentam exfiltrar dados o mais rápido possível.",
      answer: false,
      comment: "Errado. Após o acesso inicial, APTs operam de forma lenta e metódica ('low and slow'). Eles realizam reconhecimento interno, movimentação lateral e escalonamento de privilégios para entender a rede e encontrar os dados de maior valor antes de tentar a exfiltração."
    },
    {
      text: "O uso de malware personalizado (custom malware) é uma marca registrada dos grupos APT.",
      answer: true,
      comment: "Certo. Para evitar a detecção por assinaturas de antivírus, os grupos APT frequentemente desenvolvem suas próprias ferramentas e malware, ou modificam ferramentas existentes para serem únicas."
    },
    {
      text: "A fase de 'Movimentação Lateral' descreve o processo pelo qual um ator de APT se move de um sistema comprometido para outro dentro da mesma rede.",
      answer: true,
      comment: "Certo. O objetivo é expandir o acesso, encontrar dados valiosos e localizar sistemas críticos dentro da rede alvo."
    },
    {
      text: "Atores de APT sempre apagam seus rastros e removem todas as ferramentas da rede comprometida após atingirem seu objetivo.",
      answer: false,
      comment: "Errado. Devido ao objetivo de 'persistência', os atores de APT muitas vezes deixam backdoors e outros mecanismos para garantir que possam retornar à rede no futuro, se necessário."
    },
    {
      text: "O ciclo de vida de um ataque APT é frequentemente mapeado usando o framework MITRE ATT&CK.",
      answer: true,
      comment: "Certo. O framework ATT&CK é uma ferramenta ideal para descrever e analisar as Táticas, Técnicas e Procedimentos (TTPs) usados por grupos APT em cada estágio de um ataque."
    },
    {
      text: "A defesa contra APTs depende principalmente de firewalls e software antivírus tradicionais.",
      answer: false,
      comment: "Errado. Embora importantes, as defesas tradicionais são muitas vezes insuficientes. A defesa eficaz contra APTs requer uma abordagem de 'defesa em profundidade', incluindo EDR (Endpoint Detection and Response), monitoramento de rede, inteligência de ameaças e caça a ameaças (threat hunting)."
    },
    {
      text: "O 'Spear Phishing' é uma técnica comum de acesso inicial para APTs, pois envolve o envio de e-mails altamente personalizados e convincentes para alvos específicos.",
      answer: true,
      comment: "Certo. Diferente do phishing em massa, o spear phishing é pesquisado e criado para enganar um indivíduo ou um pequeno grupo de indivíduos específicos."
    },
    {
      text: "Um 'Watering Hole Attack' é uma tática de APT onde o invasor compromete um site que sabe que seus alvos frequentam.",
      answer: true,
      comment: "Certo. Em vez de atacar os alvos diretamente, o ator de APT envenena um 'bebedouro' digital, esperando que os alvos visitem o site e sejam infectados."
    },
    {
      text: "A exfiltração de dados em um ataque APT geralmente ocorre em um único grande upload para evitar a detecção.",
      answer: false,
      comment: "Errado. A exfiltração de dados é tipicamente feita em pequenos pedaços, ao longo de um longo período, e muitas vezes escondida em tráfego de aparência normal (como consultas DNS ou tráfego HTTPS) para evitar acionar alertas."
    },
    {
      text: "A atribuição de um ataque APT a um grupo ou nação específica é um processo simples e direto.",
      answer: false,
      comment: "Errado. A atribuição é extremamente difícil. Atores de APT usam técnicas de ofuscação, bandeiras falsas (false flags) e atacam através de infraestrutura em vários países para esconder sua verdadeira identidade."
    },
    {
      text: "O termo 'Advanced' em APT refere-se ao uso exclusivo de tecnologia de ponta que ninguém mais possui.",
      answer: false,
      comment: "Errado. 'Avançado' refere-se à sofisticação das táticas, técnicas e procedimentos (TTPs) e à capacidade do grupo de atingir seus objetivos, não necessariamente ao uso de tecnologia exclusiva. Eles podem usar ferramentas simples de forma muito eficaz."
    },
    {
      text: "A caça a ameaças (Threat Hunting) é uma abordagem proativa onde os analistas de segurança procuram ativamente por sinais de comprometimento por APTs, em vez de esperar por alertas.",
      answer: true,
      comment: "Certo. Como as APTs são projetadas para evitar defesas automatizadas, a caça proativa baseada em hipóteses é uma estratégia crucial para encontrá-las."
    },
    {
      text: "Grupos APT visam apenas grandes corporações e agências governamentais.",
      answer: false,
      comment: "Errado. Embora sejam alvos comuns, APTs também podem visar organizações menores que fazem parte da cadeia de suprimentos (supply chain) de um alvo maior, ou que possuem propriedade intelectual valiosa."
    },
    {
      text: "Um Indicador de Comprometimento (IoC), como um hash de arquivo malicioso ou um endereço IP de C2, é suficiente para detectar um grupo APT.",
      answer: false,
      comment: "Errado. Atores de APT mudam sua infraestrutura e ferramentas constantemente, tornando os IoCs rapidamente obsoletos. A detecção moderna foca em Indicadores de Ataque (IoAs), que são os comportamentos e técnicas (TTPs) que são mais difíceis de mudar."
    },
    {
      text: "A fase de 'Comando e Controle' (C2) é como os atores de APT mantêm a comunicação com o malware implantado na rede alvo.",
      answer: true,
      comment: "Certo. O canal de C2 é usado para enviar comandos para o malware e receber dados de volta. Atores de APT muitas vezes escondem esse tráfego em protocolos comuns como HTTP, HTTPS ou DNS."
    },
    {
      text: "A segmentação de rede é uma contramedida ineficaz contra APTs.",
      answer: false,
      comment: "Errado. A segmentação de rede é uma contramedida muito eficaz. Ela pode limitar ou impedir a movimentação lateral de um ator de APT, contendo o comprometimento em um segmento menor da rede."
    },
    {
      text: "O objetivo de um ataque APT é sempre destrutivo.",
      answer: false,
      comment: "Errado. A maioria dos ataques APT é focada em espionagem e roubo de informações. A destruição (como no caso do Stuxnet) é um objetivo menos comum, mas altamente impactante."
    },
    {
      text: "Atores de APT frequentemente exploram a confiança implícita dentro do perímetro de uma rede.",
      answer: true,
      comment: "Certo. Uma vez que estão dentro da rede, eles exploram o fato de que muitos sistemas internos confiam uns nos outros, facilitando a movimentação lateral e o acesso a recursos."
    },
    {
      text: "A análise de logs de DNS e de tráfego de rede é fundamental para detectar atividades de APT.",
      answer: true,
      comment: "Certo. Anomalias no tráfego de DNS (ex: DNS tunneling) e padrões de comunicação de rede incomuns podem ser fortes indicadores de um canal de C2 ou de exfiltração de dados."
    },
    {
      text: "Um ataque de 'supply chain' (cadeia de suprimentos) é uma tática de APT onde o invasor compromete um fornecedor de software para distribuir malware para os clientes desse fornecedor.",
      answer: true,
      comment: "Certo. O ataque à SolarWinds é um exemplo famoso, onde o ator da APT comprometeu o processo de atualização de software para distribuir um backdoor para milhares de clientes."
    },
    {
      text: "Atores de APT nunca reutilizam ferramentas ou infraestrutura.",
      answer: false,
      comment: "Errado. Embora prefiram ferramentas personalizadas, a reutilização de TTPs, ferramentas e até infraestrutura é comum e é uma das principais maneiras pelas quais os pesquisadores de segurança os rastreiam e agrupam."
    },
    {
      text: "O conceito de 'dwell time' (tempo de permanência) refere-se ao tempo que um ator de APT permanece sem ser detectado em uma rede alvo.",
      answer: true,
      comment: "Certo. O dwell time para APTs pode ser de meses ou até anos. Reduzir esse tempo é um dos principais objetivos de uma equipe de segurança."
    },
    {
      text: "A autenticação multifator (MFA) pode ajudar a prevenir o acesso inicial de uma APT.",
      answer: true,
      comment: "Certo. Mesmo que um ator de APT roube credenciais, a MFA pode impedir que eles as usem para obter acesso inicial a sistemas expostos à internet, como VPNs ou e-mail."
    },
    {
      text: "Uma vez que um grupo APT é expulso de uma rede, não há necessidade de mais monitoramento.",
      answer: false,
      comment: "Errado. Devido à sua natureza persistente, é crucial continuar o monitoramento e a caça a ameaças, pois o grupo pode ter deixado backdoors ou outros meios de reentrar na rede."
    },
    {
      text: "O termo 'living off the land' descreve a tática de APT de usar ferramentas e processos legítimos já existentes no sistema alvo para realizar suas ações.",
      answer: true,
      comment: "Certo. Usar ferramentas como PowerShell, WMI ou PsExec torna a detecção muito mais difícil, pois a atividade maliciosa se mistura com a atividade administrativa normal."
    },
    {
      text: "A inteligência de ameaças (Threat Intelligence) sobre os TTPs de grupos APT é inútil para a defesa.",
      answer: false,
      comment: "Errado. A inteligência de ameaças é vital. Ela permite que as equipes de segurança entendam contra quem estão se defendendo, quais técnicas eles usam e como criar detecções e defesas proativas contra eles."
    },
    {
      text: "APTs são um problema exclusivo de nações ocidentais.",
      answer: false,
      comment: "Errado. Grupos APT são operados por e visam nações em todo o mundo, incluindo China, Rússia, Irã, Coreia do Norte, EUA e muitos outros."
    },
    {
      text: "O escalonamento de privilégios é uma fase desnecessária se o ator da APT já comprometeu uma conta de usuário.",
      answer: false,
      comment: "Errado. A conta de usuário inicial raramente tem os privilégios necessários para acessar os dados mais valiosos. O escalonamento para privilégios de administrador de domínio ou de sistema é quase sempre um passo crítico."
    },
    {
      text: "Atores de APT são conhecidos por sua paciência e planejamento meticuloso.",
      answer: true,
      comment: "Certo. Eles podem passar meses em reconhecimento e planejamento antes mesmo de tentar o acesso inicial, garantindo que o ataque tenha a maior chance de sucesso sem ser detectado."
    },
    {
      text: "A resposta a um incidente de APT é idêntica à resposta a um incidente de malware comum.",
      answer: false,
      comment: "Errado. A resposta a incidentes de APT é muito mais complexa. Requer uma investigação profunda para entender toda a extensão do comprometimento (todos os sistemas afetados, todos os backdoors) antes de tentar a erradicação, para evitar que o ator simplesmente use um de seus outros pontos de acesso."
    },
    {
      text: "O uso de senhas fortes e únicas é uma defesa fundamental contra a movimentação lateral de APTs.",
      answer: true,
      comment: "Certo. Se as contas (especialmente as de administrador local) usarem senhas diferentes em cada máquina, um ator de APT que compromete uma senha não poderá reutilizá-la para se mover facilmente para outros sistemas."
    },
    {
      text: "Atores de APT evitam interagir com humanos e dependem apenas de automação.",
      answer: false,
      comment: "Errado. Muitas táticas de APT, especialmente o spear phishing e a engenharia social, dependem fortemente da interação humana. Além disso, a fase pós-acesso geralmente envolve operadores humanos tomando decisões ativas."
    },
    {
      text: "O modelo 'Cyber Kill Chain' da Lockheed Martin pode ser usado para descrever as etapas de um ataque APT.",
      answer: true,
      comment: "Certo. A Cyber Kill Chain (Reconhecimento, Armamento, Entrega, Exploração, Instalação, Comando e Controle, Ações nos Objetivos) é um modelo de alto nível que descreve as fases de uma intrusão, muito aplicável a APTs."
    },
    {
      text: "Um ataque APT sempre começa com a exploração de uma vulnerabilidade de software.",
      answer: false,
      comment: "Errado. Embora a exploração de vulnerabilidades seja comum, muitos ataques APT começam com o comprometimento de credenciais (por exemplo, através de phishing ou força bruta), que não envolve a exploração de uma falha de software."
    },
    {
      text: "A detecção de um único TTP de um grupo APT conhecido confirma que esse grupo específico é o responsável pelo ataque.",
      answer: false,
      comment: "Errado. Grupos APT podem emprestar técnicas uns dos outros, e os pesquisadores podem agrupar TTPs incorretamente. A atribuição de alta confiança requer a correlação de múltiplos TTPs, infraestrutura, malware e contexto geopolítico."
    }
  ]
,
  "criptografia": [
    {
      text: "Na criptografia simétrica, a mesma chave é usada tanto para criptografar quanto para descriptografar os dados.",
      answer: true,
      comment: "Certo. Essa é a característica fundamental da criptografia simétrica, também conhecida como criptografia de chave secreta. Exemplos incluem AES e DES."
    },
    {
      text: "A criptografia assimétrica utiliza duas chaves diferentes: uma pública para criptografar e uma privada para descriptografar.",
      answer: true,
      comment: "Certo. A chave pública pode ser compartilhada livremente, enquanto a chave privada deve ser mantida em segredo pelo proprietário. Isso resolve o problema da distribuição segura de chaves."
    },
    {
      text: "O principal problema da criptografia simétrica é a sua lentidão em comparação com a assimétrica.",
      answer: false,
      comment: "Errado. A criptografia simétrica é significativamente mais rápida que a assimétrica. Seu principal desafio é a distribuição segura da chave secreta entre as partes."
    },
    {
      text: "O algoritmo RSA é um exemplo de criptografia simétrica.",
      answer: false,
      comment: "Errado. RSA (Rivest-Shamir-Adleman) é o algoritmo de criptografia assimétrica mais conhecido e utilizado."
    },
    {
      text: "Um certificado digital serve para comprovar a identidade do proprietário de uma chave pública.",
      answer: true,
      comment: "Certo. Um certificado digital, emitido por uma Autoridade Certificadora (AC), vincula uma identidade a uma chave pública, garantindo sua autenticidade."
    },
    {
      text: "O padrão X.509 define o formato dos certificados digitais de chave pública.",
      answer: true,
      comment: "Certo. X.509 é o padrão mais utilizado para certificados digitais, especificando campos como nome do titular, chave pública, período de validade e assinatura da AC."
    },
    {
      text: "Qualquer pessoa pode emitir um certificado digital confiável.",
      answer: false,
      comment: "Errado. Para ser confiável, um certificado digital deve ser emitido por uma Autoridade Certificadora (AC) reconhecida, cuja chave pública já esteja presente nos navegadores e sistemas operacionais."
    },
    {
      text: "A criptografia assimétrica é usada para assinar digitalmente um documento, garantindo autenticidade e não repúdio.",
      answer: true,
      comment: "Certo. Para assinar, o remetente criptografa um hash do documento com sua chave privada. O destinatário pode verificar a assinatura usando a chave pública do remetente."
    },
    {
      text: "O modo de operação de cifras ECB (Electronic Codebook) é o mais seguro porque cada bloco é criptografado de forma independente.",
      answer: false,
      comment: "Errado. O ECB é o modo de operação mais inseguro. Como blocos de texto claro idênticos resultam em blocos de texto cifrado idênticos, ele vaza padrões de dados. Não deve ser usado em protocolos modernos."
    },
    {
      text: "No modo de operação CBC (Cipher Block Chaining), a criptografia de cada bloco depende do bloco de texto cifrado anterior.",
      answer: true,
      comment: "Certo. No modo CBC, cada bloco de texto claro é combinado (XOR) com o texto cifrado do bloco anterior antes de ser criptografado. Isso garante que blocos idênticos de texto claro resultem em textos cifrados diferentes."
    },
    {
      text: "Um Vetor de Inicialização (IV) é usado no modo CBC para garantir que a criptografia da mesma mensagem com a mesma chave resulte em textos cifrados diferentes.",
      answer: true,
      comment: "Certo. O IV é um bloco de dados aleatório combinado com o primeiro bloco de texto claro. Ele deve ser único para cada mensagem criptografada com a mesma chave."
    },
    {
      text: "A principal vantagem da criptografia assimétrica sobre a simétrica é a velocidade.",
      answer: false,
      comment: "Errado. A principal vantagem é a gestão de chaves. A criptografia assimétrica resolve o problema de como compartilhar uma chave secreta de forma segura, mas é computacionalmente mais lenta."
    },
    {
      text: "AES (Advanced Encryption Standard) é um algoritmo de criptografia assimétrica.",
      answer: false,
      comment: "Errado. AES é o padrão atual para criptografia simétrica, substituindo o DES."
    },
    {
      text: "Uma Autoridade Certificadora (AC) é responsável por emitir e revogar certificados digitais.",
      answer: true,
      comment: "Certo. A AC atua como um terceiro de confiança, validando a identidade dos solicitantes antes de emitir um certificado e mantendo uma Lista de Certificados Revogados (CRL)."
    },
    {
      text: "A Lista de Certificados Revogados (CRL) é uma lista de certificados que ainda são válidos.",
      answer: false,
      comment: "Errado. A CRL contém certificados que foram revogados pela AC antes de sua data de expiração, por exemplo, porque a chave privada foi comprometida."
    },
    {
      text: "O modo de operação GCM (Galois/Counter Mode) fornece tanto confidencialidade quanto autenticação.",
      answer: true,
      comment: "Certo. GCM é um modo de criptografia autenticada (AEAD - Authenticated Encryption with Associated Data). Ele criptografa os dados e também gera uma tag de autenticação para verificar sua integridade e autenticidade."
    },
    {
      text: "A troca de chaves Diffie-Hellman é um método para duas partes estabelecerem uma chave secreta compartilhada sobre um canal inseguro, sem nunca terem se comunicado antes.",
      answer: true,
      comment: "Certo. É um dos primeiros exemplos práticos de troca de chaves de chave pública e é fundamental para muitos protocolos, como o TLS."
    },
    {
      text: "Em uma assinatura digital, o remetente criptografa a mensagem inteira com sua chave privada.",
      answer: false,
      comment: "Errado. Criptografar a mensagem inteira seria muito lento. Em vez disso, o remetente cria um hash da mensagem e criptografa apenas o hash com sua chave privada."
    },
    {
      text: "A criptografia de curva elíptica (ECC) é um tipo de criptografia simétrica.",
      answer: false,
      comment: "Errado. ECC é uma abordagem de criptografia assimétrica (de chave pública) que pode fornecer a mesma força de segurança que o RSA com chaves muito menores."
    },
    {
      text: "O modo CTR (Counter Mode) transforma uma cifra de bloco em uma cifra de fluxo.",
      answer: true,
      comment: "Certo. No modo CTR, a cifra de bloco é usada para criptografar os valores sucessivos de um 'contador'. O resultado é combinado (XOR) com o texto claro, simulando uma cifra de fluxo."
    },
    {
      text: "A principal vantagem do modo CTR é que a criptografia e a descriptografia podem ser feitas em paralelo.",
      answer: true,
      comment: "Certo. Como cada bloco é processado independentemente dos outros (dependendo apenas do contador e da chave), as operações podem ser paralelizadas para alto desempenho."
    },
    {
      text: "Um certificado autoassinado é tão seguro quanto um emitido por uma AC pública.",
      answer: false,
      comment: "Errado. Um certificado autoassinado não é confiável por padrão, pois não há um terceiro de confiança (AC) para validar a identidade do proprietário. Navegadores e sistemas emitem alertas sobre eles."
    },
    {
      text: "O protocolo OCSP (Online Certificate Status Protocol) é uma alternativa mais eficiente à CRL para verificar o status de revogação de um certificado.",
      answer: true,
      comment: "Certo. Em vez de baixar uma lista potencialmente grande (CRL), o cliente pode consultar um servidor OCSP sobre o status de um único certificado, recebendo uma resposta em tempo real."
    },
    {
      text: "A força de um algoritmo criptográfico simétrico depende exclusivamente do tamanho da sua chave.",
      answer: false,
      comment: "Errado. Embora o tamanho da chave seja crucial (resistência a ataques de força bruta), a força também depende do design do próprio algoritmo e de sua resistência a ataques criptoanalíticos."
    },
    {
      text: "O 'não repúdio' é a garantia de que o remetente de uma mensagem não pode negar posteriormente que a enviou.",
      answer: true,
      comment: "Certo. As assinaturas digitais, que usam a chave privada do remetente, fornecem a propriedade de não repúdio."
    },
    {
      text: "O preenchimento (padding) é usado em cifras de bloco para garantir que o texto claro seja um múltiplo exato do tamanho do bloco.",
      answer: true,
      comment: "Certo. Como as cifras de bloco operam em blocos de tamanho fixo (ex: 128 bits para AES), o último bloco de uma mensagem que não preenche o tamanho completo deve ser preenchido."
    },
    {
      text: "O modo CFB (Cipher Feedback) permite que uma cifra de bloco seja usada como uma cifra de fluxo.",
      answer: true,
      comment: "Certo. Semelhante ao OFB, o modo CFB usa o texto cifrado do bloco anterior como entrada para o algoritmo de criptografia para gerar o próximo keystream, que é combinado com o texto claro."
    },
    {
      text: "A confidencialidade direta (Forward Secrecy) garante que, se a chave privada de longo prazo de um servidor for comprometida, as sessões passadas não poderão ser descriptografadas.",
      answer: true,
      comment: "Certo. Isso é alcançado usando chaves de sessão efêmeras (temporárias) para cada sessão, como no Diffie-Hellman Efêmero (DHE/ECDHE). O comprometimento da chave privada do servidor não compromete as chaves de sessão passadas."
    },
    {
      text: "A Infraestrutura de Chave Pública (PKI) é o conjunto de hardware, software, políticas e procedimentos necessários para criar, gerenciar, distribuir, usar, armazenar e revogar certificados digitais.",
      answer: true,
      comment: "Certo. A PKI é o framework completo que permite o uso de criptografia de chave pública em larga escala."
    },
    {
      text: "A esteganografia é um tipo de criptografia.",
      answer: false,
      comment: "Errado. Esteganografia é a arte de esconder uma mensagem dentro de outra mensagem ou arquivo (como uma imagem ou áudio), enquanto a criptografia é a arte de tornar uma mensagem ininteligível. Elas podem ser usadas juntas."
    },
    {
      text: "O algoritmo 3DES (Triple DES) é mais seguro e mais rápido que o AES.",
      answer: false,
      comment: "Errado. O 3DES é significativamente mais lento que o AES e é considerado menos seguro. O AES é o padrão recomendado."
    },
    {
      text: "Uma função de hash criptográfico, como SHA-256, é reversível.",
      answer: false,
      comment: "Errado. As funções de hash criptográfico são projetadas para serem unidirecionais (one-way). É computacionalmente inviável encontrar a entrada original a partir de sua saída de hash."
    },
    {
      text: "No modo CBC, um erro de bit em um bloco de texto cifrado afeta a descriptografia apenas desse bloco e do bloco seguinte.",
      answer: true,
      comment: "Certo. O bloco correspondente ao erro será completamente corrompido, e o bloco seguinte terá um erro de bit na mesma posição, devido à operação XOR. Os blocos subsequentes serão descriptografados corretamente."
    },
    {
      text: "A cadeia de confiança de um certificado digital refere-se à validação do certificado por meio de uma hierarquia de Autoridades Certificadoras, terminando em uma AC raiz confiável.",
      answer: true,
      comment: "Certo. Um certificado de entidade final é assinado por uma AC intermediária, que por sua vez é assinada por uma AC raiz. A confiança na raiz se estende por toda a cadeia."
    },
    {
      text: "O modo OFB (Output Feedback) tem a vantagem de que erros de bit no texto cifrado não se propagam.",
      answer: true,
      comment: "Certo. Como o keystream é gerado independentemente do texto claro e do texto cifrado, um erro de bit no texto cifrado causa apenas um erro de bit no mesmo local no texto claro descriptografado."
    },
    {
      text: "A criptografia híbrida usa criptografia assimétrica para criptografar a mensagem real e simétrica para trocar a chave.",
      answer: false,
      comment: "Errado. É o contrário. A criptografia híbrida usa a criptografia assimétrica (mais lenta) para trocar de forma segura uma chave de sessão, e então usa essa chave com um algoritmo simétrico (mais rápido) para criptografar a mensagem real."
    },
    {
      text: "Um ataque de colisão em uma função de hash ocorre quando duas entradas diferentes produzem a mesma saída de hash.",
      answer: true,
      comment: "Certo. A resistência à colisão é uma propriedade de segurança crucial para funções de hash usadas em assinaturas digitais."
    },
    {
      text: "A validade de um certificado digital é perpétua, a menos que seja revogado.",
      answer: false,
      comment: "Errado. Todo certificado digital tem um período de validade definido (um campo 'not before' e 'not after'). Ele expira automaticamente após a data final."
    },
    {
      text: "O sal (salt) é um valor aleatório adicionado a uma senha antes de aplicar o hash, para mitigar ataques de tabela arco-íris (rainbow table).",
      answer: true,
      comment: "Certo. O sal garante que senhas idênticas resultem em hashes diferentes, tornando as tabelas pré-calculadas ineficazes."
    },
    {
      text: "O modo de operação XTS-AES é projetado especificamente para a criptografia de dados em repouso em dispositivos de armazenamento em bloco, como discos rígidos.",
      answer: true,
      comment: "Certo. XTS é um modo avançado que lida com setores de disco e previne certos tipos de ataques de manipulação de dados específicos para armazenamento."
    },
    {
      text: "A criptografia quântica já tornou todos os algoritmos de criptografia assimétrica atuais obsoletos.",
      answer: false,
      comment: "Errado. Embora computadores quânticos em grande escala (se construídos) possam quebrar algoritmos como RSA e ECC, eles ainda não existem. A criptografia pós-quântica (PQC) está sendo desenvolvida para resistir a esses futuros ataques."
    },
    {
      text: "A chave privada em um sistema assimétrico deve ser compartilhada com todas as partes com quem você deseja se comunicar.",
      answer: false,
      comment: "Errado. A chave privada nunca deve ser compartilhada. É a chave pública que é distribuída para que outros possam criptografar mensagens para você ou verificar suas assinaturas."
    },
    {
      text: "HMAC (Hash-based Message Authentication Code) usa uma função de hash e uma chave secreta para fornecer autenticação e integridade de mensagens.",
      answer: true,
      comment: "Certo. HMAC é um tipo de MAC que combina uma chave secreta com os dados da mensagem antes de aplicar o hash, provando que a mensagem não foi alterada e que foi criada por alguém que conhece a chave."
    },
    {
      text: "O 'padding oracle' é um tipo de ataque que explora mensagens de erro de preenchimento em implementações de criptografia para descriptografar dados.",
      answer: true,
      comment: "Certo. É um ataque de canal lateral contra o modo CBC. Ao observar se um preenchimento é válido ou não, um invasor pode descriptografar o texto cifrado, bloco por bloco."
    },
    {
      text: "A criptografia garante a disponibilidade dos dados.",
      answer: false,
      comment: "Errado. A criptografia fornece confidencialidade, integridade, autenticidade e não repúdio. A disponibilidade (garantir que os dados estejam acessíveis quando necessário) é gerenciada por outras medidas, como backups e redundância."
    },
    {
      text: "O tamanho da chave do DES é de 56 bits, o que o torna vulnerável a ataques de força bruta com hardware moderno.",
      answer: true,
      comment: "Certo. A chave de 56 bits do DES é considerada insegura hoje, pois pode ser quebrada em um tempo relativamente curto."
    },
    {
      text: "Um certificado de validação estendida (EV) oferece um nível mais alto de garantia de identidade do que um certificado de validação de domínio (DV).",
      answer: true,
      comment: "Certo. Para emitir um certificado EV, a AC realiza um processo de verificação muito mais rigoroso da organização solicitante, em comparação com o DV, que apenas verifica o controle sobre o nome de domínio."
    },
    {
      text: "A cifra de Vernam (one-time pad) é teoricamente inquebrável se usada corretamente.",
      answer: true,
      comment: "Certo. Se a chave for verdadeiramente aleatória, usada apenas uma vez, e for pelo menos tão longa quanto a mensagem, a cifra é perfeitamente segura. No entanto, a gestão e distribuição da chave tornam-na impraticável para a maioria das aplicações."
    },
    {
      text: "A propagação de erro no modo CFB é semelhante à do modo CBC.",
      answer: true,
      comment: "Certo. Em ambos os modos, um erro de bit em um bloco de texto cifrado afeta a descriptografia do bloco correspondente e do bloco seguinte."
    }
  ]
,
  "algoritmos-criptograficos": [
    {
      text: "O RSA é um algoritmo de criptografia simétrica cuja segurança se baseia na dificuldade de fatorar números primos grandes.",
      answer: false,
      comment: "Errado. O RSA é um algoritmo de criptografia assimétrica. Sua segurança se baseia na dificuldade de fatorar o produto de dois números primos grandes."
    },
    {
      text: "O AES (Advanced Encryption Standard) é o padrão atual para criptografia de chave simétrica e opera em blocos de 128 bits.",
      answer: true,
      comment: "Certo. O AES é o padrão adotado pelo governo dos EUA e amplamente utilizado em todo o mundo. Ele opera em blocos de tamanho fixo de 128 bits e suporta chaves de 128, 192 e 256 bits."
    },
    {
      text: "A Criptografia de Curva Elíptica (ECC) oferece o mesmo nível de segurança que o RSA, mas com chaves de tamanho significativamente menor.",
      answer: true,
      comment: "Certo. Essa é a principal vantagem do ECC. Por exemplo, uma chave ECC de 256 bits é considerada equivalente em força a uma chave RSA de 3072 bits, tornando-a ideal para ambientes com recursos limitados, como dispositivos móveis."
    },
    {
      text: "O 3DES (Triple DES) é uma melhoria do DES que é mais rápida e mais segura que o AES.",
      answer: false,
      comment: "Errado. O 3DES é muito mais lento que o AES e é considerado menos seguro. Ele foi uma solução temporária para o pequeno tamanho da chave do DES, mas foi amplamente substituído pelo AES."
    },
    {
      text: "O RC4 é uma cifra de bloco segura, amplamente recomendada para uso em novos protocolos de segurança.",
      answer: false,
      comment: "Errado. O RC4 é uma cifra de fluxo (não de bloco) e possui várias vulnerabilidades conhecidas. Seu uso é desaconselhado e foi proibido em versões mais recentes do TLS."
    },
    {
      text: "Blowfish é um algoritmo de criptografia simétrica com um tamanho de bloco de 64 bits e um tamanho de chave variável.",
      answer: true,
      comment: "Certo. Projetado por Bruce Schneier, o Blowfish é rápido e não patenteado, mas seu tamanho de bloco de 64 bits o torna vulnerável a certos ataques (como o Sweet32) quando usado para criptografar grandes volumes de dados."
    },
    {
      text: "Twofish foi um dos finalistas na competição para selecionar o AES.",
      answer: true,
      comment: "Certo. Twofish, também co-projetado por Bruce Schneier, foi um dos cinco finalistas do processo de seleção do AES. Ele é considerado muito seguro, mas o Rijndael (que se tornou o AES) foi escolhido no final."
    },
    {
      text: "O IDEA (International Data Encryption Algorithm) é um algoritmo de chave assimétrica usado no PGP.",
      answer: false,
      comment: "Errado. O IDEA é um algoritmo de chave simétrica. Ele foi usado nas primeiras versões do PGP (Pretty Good Privacy), mas sua adoção foi limitada por patentes que já expiraram."
    },
    {
      text: "A segurança do RSA depende de um problema matemático diferente daquele do ECC.",
      answer: true,
      comment: "Certo. A segurança do RSA baseia-se na dificuldade da fatoração de inteiros, enquanto a segurança do ECC se baseia na dificuldade do problema do logaritmo discreto em curvas elípticas."
    },
    {
      text: "O AES usa uma estrutura de rede de substituição-permutação.",
      answer: true,
      comment: "Certo. O AES processa os dados em rodadas, e cada rodada consiste em várias etapas, incluindo substituição de bytes (SubBytes), permutação de linhas (ShiftRows) e mistura de colunas (MixColumns)."
    },
    {
      text: "O RC4 é conhecido por ter um viés (bias) em seu fluxo de chaves de saída, o que pode ser explorado por atacantes.",
      answer: true,
      comment: "Certo. Várias vulnerabilidades no RC4, como o viés nos primeiros bytes do keystream, foram descobertas, tornando-o inseguro para a maioria das aplicações modernas."
    },
    {
      text: "O tamanho do bloco do 3DES é de 192 bits (3 * 64).",
      answer: false,
      comment: "Errado. O 3DES aplica o algoritmo DES três vezes, mas o tamanho do bloco de dados permanece o mesmo do DES original, que é de 64 bits."
    },
    {
      text: "O Twofish tem um tamanho de bloco de 128 bits, o que o torna mais resistente a ataques como o Sweet32 do que o Blowfish.",
      answer: true,
      comment: "Certo. O Twofish foi projetado com um tamanho de bloco de 128 bits, o mesmo do AES, corrigindo a principal fraqueza do seu predecessor, o Blowfish."
    },
    {
      text: "O RSA pode ser usado tanto para criptografia de dados quanto para assinaturas digitais.",
      answer: true,
      comment: "Certo. Para criptografar, usa-se a chave pública do destinatário. Para assinar, usa-se a própria chave privada."
    },
    {
      text: "O ECC não pode ser usado para assinaturas digitais, apenas para criptografia.",
      answer: false,
      comment: "Errado. O ECC é amplamente usado para assinaturas digitais através do algoritmo ECDSA (Elliptic Curve Digital Signature Algorithm)."
    },
    {
      text: "O AES permite chaves de 128, 192 ou 256 bits.",
      answer: true,
      comment: "Certo. O número de rodadas no algoritmo AES varia dependendo do tamanho da chave: 10 rodadas para 128 bits, 12 para 192 bits e 14 para 256 bits."
    },
    {
      text: "Blowfish foi projetado para ser muito rápido em processadores de 32 bits.",
      answer: true,
      comment: "Certo. Uma das metas de design do Blowfish era a velocidade em software, especialmente nos processadores comuns da época."
    },
    {
      text: "O algoritmo IDEA opera em blocos de 64 bits e usa uma chave de 128 bits.",
      answer: true,
      comment: "Certo. Essas são as especificações do IDEA, que foi considerado um algoritmo muito forte na época de sua criação."
    },
    {
      text: "O 3DES com três chaves diferentes tem uma força de chave efetiva de 168 bits (3 * 56).",
      answer: true,
      comment: "Certo. No entanto, existe uma variante com duas chaves que oferece 112 bits de segurança. Mesmo com 168 bits, é mais lento e menos eficiente que o AES-128."
    },
    {
      text: "O RC4 é uma cifra de fluxo síncrona, o que significa que o fluxo de chaves é gerado independentemente do texto claro e do texto cifrado.",
      answer: true,
      comment: "Certo. O keystream no RC4 depende apenas da chave secreta. Esse keystream é então combinado (XOR) com o texto claro para produzir o texto cifrado."
    },
    {
      text: "O Twofish permite uma gama muito flexível de tamanhos de chave, de 128 a 256 bits.",
      answer: true,
      comment: "Certo. O Twofish suporta chaves de 128, 192 e 256 bits, assim como o AES."
    },
    {
      text: "A principal desvantagem do RSA em comparação com o ECC é a necessidade de chaves maiores para o mesmo nível de segurança.",
      answer: true,
      comment: "Certo. O crescimento do tamanho da chave RSA necessário para manter a segurança é mais rápido do que no ECC, levando a chaves maiores, mais lentas e que consomem mais energia."
    },
    {
      text: "O AES foi selecionado pelo NIST (National Institute of Standards and Technology) através de um processo de competição pública.",
      answer: true,
      comment: "Certo. O processo de seleção do AES durou vários anos e envolveu a análise de muitos algoritmos candidatos de todo o mundo."
    },
    {
      text: "O algoritmo Blowfish usa S-boxes que são dependentes da chave.",
      answer: true,
      comment: "Certo. As S-boxes (tabelas de substituição) no Blowfish são geradas a partir da chave do usuário. Isso torna a criptoanálise mais difícil, mas também significa que a configuração da chave é mais lenta."
    },
    {
      text: "O 3DES é simplesmente o algoritmo DES executado três vezes com a mesma chave.",
      answer: false,
      comment: "Errado. Isso seria inútil e equivalente a usar o DES uma vez. O 3DES usa duas ou três chaves diferentes no formato Criptografar-Descriptografar-Criptografar (EDE)."
    },
    {
      text: "O RC4 foi usado no protocolo de segurança WEP para redes Wi-Fi, o que contribuiu para a insegurança do WEP.",
      answer: true,
      comment: "Certo. A maneira como o WEP usava o RC4 (especialmente a reutilização de IVs) expôs vulnerabilidades críticas que permitiam que o tráfego fosse descriptografado."
    },
    {
      text: "O IDEA foi criado como um substituto para o DES e não possui patentes.",
      answer: false,
      comment: "Errado. O IDEA foi patenteado por muitos anos, o que limitou sua adoção em software de código aberto. Essas patentes já expiraram."
    },
    {
      text: "O Twofish usa uma estrutura de cifra de Feistel, semelhante ao DES.",
      answer: true,
      comment: "Certo. O Twofish, assim como o Blowfish e o DES, é baseado em uma rede de Feistel, onde os dados são divididos em duas metades e processados em rodadas."
    },
    {
      text: "O ECC é imune a ataques de computadores quânticos.",
      answer: false,
      comment: "Errado. Assim como o RSA, o ECC é vulnerável a ataques de computadores quânticos em grande escala usando o algoritmo de Shor. A criptografia pós-quântica está sendo desenvolvida para resistir a esses ataques."
    },
    {
      text: "O AES é uma cifra de Feistel.",
      answer: false,
      comment: "Errado. Diferente do DES e do Twofish, o AES não é uma cifra de Feistel. Ele usa uma estrutura de rede de substituição-permutação, onde todo o bloco de dados é processado em cada rodada."
    },
    {
      text: "O RSA é mais rápido que o AES para criptografar grandes volumes de dados.",
      answer: false,
      comment: "Errado. O RSA (assimétrico) é ordens de magnitude mais lento que o AES (simétrico). É por isso que sistemas híbridos usam RSA para trocar uma chave AES e, em seguida, usam AES para criptografar os dados."
    },
    {
      text: "O Blowfish permite um tamanho de chave de até 448 bits.",
      answer: true,
      comment: "Certo. O Blowfish é conhecido por seu tamanho de chave altamente variável, que pode ir de 32 bits a 448 bits."
    },
    {
      text: "O 3DES é vulnerável ao ataque Sweet32 devido ao seu tamanho de bloco de 64 bits.",
      answer: true,
      comment: "Certo. O ataque Sweet32 explora colisões em cifras com blocos de 64 bits quando uma grande quantidade de dados é criptografada com a mesma chave. Isso afeta o 3DES e o Blowfish."
    },
    {
      text: "O RC4 não requer um Vetor de Inicialização (IV).",
      answer: false,
      comment: "Errado. Como cifra de fluxo, para usar a mesma chave para criptografar mensagens diferentes de forma segura, o RC4 precisa de um IV para criar um estado inicial único. A má gestão do IV foi a principal falha do WEP."
    },
    {
      text: "O algoritmo Rijndael foi o que se tornou o padrão AES.",
      answer: true,
      comment: "Certo. Rijndael foi o nome do algoritmo submetido à competição do NIST por seus inventores belgas, Vincent Rijmen e Joan Daemen. Ele foi selecionado e padronizado como AES."
    },
    {
      text: "O IDEA é considerado mais seguro que o AES.",
      answer: false,
      comment: "Errado. O AES passou por um processo de escrutínio público muito mais intenso e é o padrão global recomendado. O IDEA é considerado seguro, mas o AES é o padrão de fato."
    },
    {
      text: "A principal operação matemática no RSA é a exponenciação modular.",
      answer: true,
      comment: "Certo. Tanto a criptografia quanto a descriptografia no RSA envolvem a elevação de um número a uma potência e o cálculo do resto da divisão por um grande número (o módulo)."
    },
    {
      text: "O Twofish usa S-boxes pré-computadas e fixas, ao contrário do Blowfish.",
      answer: false,
      comment: "Errado. Assim como o Blowfish, o Twofish também usa S-boxes que são dependentes da chave, o que aumenta sua segurança contra certos tipos de criptoanálise."
    },
    {
      text: "O ECC é mais adequado para sistemas com baixa capacidade de processamento e pouca memória.",
      answer: true,
      comment: "Certo. Devido às suas chaves e assinaturas menores, o ECC requer menos armazenamento, menos largura de banda e menos poder de computação, tornando-o ideal para dispositivos IoT e cartões inteligentes."
    },
    {
      text: "O AES-256 oferece mais que o dobro da segurança do AES-128.",
      answer: false,
      comment: "Errado. A segurança não escala linearmente. Aumentar a chave de 128 para 256 bits aumenta a complexidade de um ataque de força bruta por um fator de 2^128, um número astronomicamente grande. Ambos são considerados inquebráveis por força bruta."
    },
    {
      text: "O RC4 foi projetado por Ron Rivest, o 'R' do RSA.",
      answer: true,
      comment: "Certo. RC4 significa 'Rivest Cipher 4'. Foi projetado por Ron Rivest para a RSA Security."
    },
    {
      text: "O 3DES usa o mesmo algoritmo do DES, mas com uma chave maior.",
      answer: false,
      comment: "Errado. O 3DES não usa uma chave maior no algoritmo DES. Ele aplica o algoritmo DES padrão três vezes, usando chaves diferentes para cada aplicação."
    },
    {
      text: "O Blowfish é mais recente que o Twofish.",
      answer: false,
      comment: "Errado. O Blowfish foi projetado primeiro. O Twofish foi seu sucessor, projetado para a competição AES com melhorias como um bloco de 128 bits."
    },
    {
      text: "A velocidade de configuração da chave do Blowfish é uma de suas desvantagens.",
      answer: true,
      comment: "Certo. Como as S-boxes do Blowfish são geradas a partir da chave, o processo de mudança de chave é relativamente lento, tornando-o menos ideal para ambientes onde as chaves mudam com muita frequência."
    },
    {
      text: "O RSA é uma cifra de bloco.",
      answer: false,
      comment: "Errado. O RSA é um algoritmo de chave pública que opera em números inteiros. Embora possa criptografar blocos de dados (representados como números), não é classificado como uma cifra de bloco da mesma forma que o AES ou o DES."
    },
    {
      text: "O ECDSA (Elliptic Curve Digital Signature Algorithm) é a contraparte do RSA para assinaturas digitais no mundo do ECC.",
      answer: true,
      comment: "Certo. O ECDSA é o algoritmo padrão para criar assinaturas digitais usando criptografia de curva elíptica."
    },
    {
      text: "O AES pode ser implementado de forma eficiente tanto em hardware quanto em software.",
      answer: true,
      comment: "Certo. Uma das razões pelas quais o Rijndael foi escolhido como AES foi seu excelente desempenho em uma ampla variedade de plataformas, desde servidores potentes até pequenos dispositivos de hardware."
    },
    {
      text: "O IDEA usa uma mistura de operações de diferentes grupos algébricos para fornecer segurança.",
      answer: true,
      comment: "Certo. O IDEA baseia sua segurança na utilização de operações incompatíveis: XOR, adição módulo 2^16 e multiplicação módulo 2^16 + 1, o que o torna resistente à criptoanálise diferencial."
    },
    {
      text: "O Twofish foi projetado para ser tão rápido quanto o AES.",
      answer: false,
      comment: "Errado. Geralmente, o AES é considerado mais rápido que o Twofish na maioria das plataformas, o que foi um dos fatores na sua seleção."
    },
    {
      text: "Todos os algoritmos listados (RSA, AES, ECC, etc.) são considerados seguros para uso hoje.",
      answer: false,
      comment: "Errado. O RC4 e o DES (e, em menor grau, o 3DES e o Blowfish devido ao seu bloco de 64 bits) não são mais considerados seguros para a maioria das aplicações e devem ser evitados em novos sistemas."
    }
  ]
,
  "diffie-hellman-hashes": [
    {
      text: "O protocolo Diffie-Hellman é usado para criptografar mensagens.",
      answer: false,
      comment: "Errado. Diffie-Hellman não criptografa dados. É um protocolo de acordo de chave (key agreement) usado para que duas partes estabeleçam uma chave secreta compartilhada sobre um canal de comunicação inseguro."
    },
    {
      text: "A segurança do Diffie-Hellman baseia-se na dificuldade de calcular logaritmos discretos.",
      answer: true,
      comment: "Certo. Um observador pode ver os números trocados publicamente, mas derivar a chave secreta compartilhada a partir deles é computacionalmente inviável, pois requer a solução do problema do logaritmo discreto."
    },
    {
      text: "No protocolo Diffie-Hellman, as duas partes trocam suas chaves privadas.",
      answer: false,
      comment: "Errado. As chaves privadas nunca são trocadas. Cada parte gera um par de chaves (pública e privada), troca as chaves públicas e, em seguida, usa sua própria chave privada e a chave pública da outra parte para calcular independentemente a mesma chave secreta compartilhada."
    },
    {
      text: "O protocolo Diffie-Hellman, por si só, é imune a ataques Man-in-the-Middle (MitM).",
      answer: false,
      comment: "Errado. A versão básica do Diffie-Hellman é vulnerável a ataques MitM porque não autentica as partes. Um invasor pode se posicionar no meio, estabelecer uma chave separada com cada parte e retransmitir as mensagens, lendo-as e modificando-as."
    },
    {
      text: "O uso de assinaturas digitais (como RSA ou ECDSA) pode proteger o Diffie-Hellman contra ataques MitM.",
      answer: true,
      comment: "Certo. Ao assinar os parâmetros de Diffie-Hellman trocados, as partes podem autenticar umas às outras, garantindo que estão se comunicando com o interlocutor pretendido e não com um invasor."
    },
    {
      text: "Uma função de hash criptográfico produz uma saída de tamanho variável dependendo do tamanho da entrada.",
      answer: false,
      comment: "Errado. Uma propriedade fundamental de uma função de hash criptográfico é que ela produz uma saída de tamanho fixo (ex: 256 bits para SHA-256), independentemente do tamanho da entrada."
    },
    {
      text: "MD5 é um algoritmo de hash seguro e recomendado para uso em novas aplicações.",
      answer: false,
      comment: "Errado. O MD5 é considerado quebrado e completamente inseguro. Colisões podem ser geradas em segundos, tornando-o inadequado para qualquer finalidade de segurança, como assinaturas digitais ou armazenamento de senhas."
    },
    {
      text: "SHA-1 é considerado seguro e pode ser usado onde o SHA-2 não está disponível.",
      answer: false,
      comment: "Errado. O SHA-1 também é considerado quebrado. Ataques de colisão práticos foram demonstrados, e seu uso foi preterido por todos os principais navegadores e autoridades de certificação."
    },
    {
      text: "SHA-2 é uma família de funções de hash que inclui SHA-224, SHA-256, SHA-384 e SHA-512.",
      answer: true,
      comment: "Certo. SHA-2 é o nome da família. As variantes diferem principalmente no tamanho da saída do hash e em algumas constantes internas."
    },
    {
      text: "SHA-3 foi desenvolvido para substituir o SHA-2 porque foram encontradas falhas graves no SHA-2.",
      answer: false,
      comment: "Errado. O SHA-3 não foi criado devido a uma falha no SHA-2. O NIST iniciou a competição para o SHA-3 como uma medida proativa para ter um padrão alternativo e dissimilar, caso alguma fraqueza fosse encontrada no SHA-2 no futuro."
    },
    {
      text: "Uma colisão de hash ocorre quando duas entradas diferentes produzem a mesma saída de hash.",
      answer: true,
      comment: "Certo. A resistência à colisão é uma propriedade de segurança crítica para uma função de hash. Encontrar colisões em algoritmos como MD5 e SHA-1 os torna inseguros."
    },
    {
      text: "A propriedade de 'resistência à pré-imagem' significa que, dado um hash, é difícil encontrar a entrada original.",
      answer: true,
      comment: "Certo. Isso também é conhecido como a propriedade 'one-way' (mão única). É o que permite que hashes sejam usados para armazenar senhas de forma segura."
    },
    {
      text: "O algoritmo SHA-3 é baseado em uma estrutura fundamentalmente diferente do SHA-2.",
      answer: true,
      comment: "Certo. O SHA-2 é baseado na construção Merkle-Damgård, como MD5 e SHA-1. O SHA-3 é baseado na construção 'sponge' (esponja), representada pelo algoritmo Keccak."
    },
    {
      text: "Diffie-Hellman Efêmero (DHE) usa um novo par de chaves privadas/públicas para cada sessão.",
      answer: true,
      comment: "Certo. Isso fornece 'Forward Secrecy' (Confidencialidade Direta). Se a chave privada de longo prazo de um servidor for comprometida, as chaves de sessão passadas não poderão ser descobertas, pois foram geradas a partir de chaves DHE temporárias."
    },
    {
      text: "O resultado de uma função de hash é determinístico.",
      answer: true,
      comment: "Certo. A mesma entrada sempre produzirá a mesma saída de hash. Se não fosse assim, seria impossível verificar a integridade dos dados."
    },
    {
      text: "O MD5 produz uma saída de hash de 160 bits.",
      answer: false,
      comment: "Errado. O MD5 produz uma saída de 128 bits."
    },
    {
      text: "O SHA-1 produz uma saída de hash de 160 bits.",
      answer: true,
      comment: "Certo. O tamanho da saída do SHA-1 é de 160 bits."
    },
    {
      text: "O ataque de aniversário (birthday attack) torna a busca por colisões mais fácil do que a busca por pré-imagens.",
      answer: true,
      comment: "Certo. Devido ao paradoxo do aniversário, encontrar duas entradas quaisquer que colidam é muito mais rápido do que encontrar uma entrada que corresponda a um hash específico. Para uma segurança de N bits, a resistência à colisão é de aproximadamente 2^(N/2)."
    },
    {
      text: "ECDHE significa 'Elliptic Curve Diffie-Hellman Ephemeral' e é geralmente mais rápido que o DHE para o mesmo nível de segurança.",
      answer: true,
      comment: "Certo. A versão de curva elíptica do DHE requer chaves menores e menos computação para atingir a mesma força de segurança, tornando-a mais eficiente."
    },
    {
      text: "É seguro usar MD5 para verificar a integridade de arquivos baixados da internet.",
      answer: false,
      comment: "Errado. Como colisões podem ser criadas para o MD5, um invasor poderia criar um arquivo malicioso que tenha o mesmo hash MD5 de um arquivo legítimo, enganando a verificação de integridade."
    },
    {
      text: "O SHA-256 e o SHA-512 diferem apenas no tamanho da saída.",
      answer: false,
      comment: "Errado. Eles também operam com tamanhos de palavra diferentes (32 bits para SHA-256, 64 bits para SHA-512) e usam constantes diferentes. O SHA-512 é mais rápido em arquiteturas de 64 bits."
    },
    {
      text: "O algoritmo Keccak foi o vencedor da competição de hash do NIST e foi padronizado como SHA-3.",
      answer: true,
      comment: "Certo. Keccak foi o algoritmo vencedor, embora o NIST tenha feito pequenas alterações nos parâmetros ao padronizá-lo como SHA-3."
    },
    {
      text: "O protocolo Diffie-Hellman foi projetado para ser um sistema de criptografia de chave pública completo.",
      answer: false,
      comment: "Errado. Diffie-Hellman é um protocolo de acordo de chave, não um sistema de criptografia completo como o RSA, que pode ser usado para criptografia e assinaturas digitais."
    },
    {
      text: "A 'resistência à segunda pré-imagem' significa que, dada uma entrada M1, é difícil encontrar outra entrada M2 tal que hash(M1) = hash(M2).",
      answer: true,
      comment: "Certo. Esta propriedade é crucial para impedir que um invasor substitua um documento assinado por outro sem invalidar a assinatura."
    },
    {
      text: "O uso de 'sal' (salt) ao armazenar senhas com hash ajuda a mitigar ataques de dicionário e de rainbow table.",
      answer: true,
      comment: "Certo. Um sal único para cada usuário garante que senhas idênticas resultem em hashes diferentes, tornando ineficazes as tabelas pré-calculadas."
    },
    {
      text: "O SHA-3 é internamente muito semelhante ao SHA-2.",
      answer: false,
      comment: "Errado. Eles são intencionalmente muito diferentes. O SHA-2 usa a construção Merkle-Damgård, enquanto o SHA-3 usa a construção de esponja, oferecendo diversidade de design."
    },
    {
      text: "A troca de chaves Diffie-Hellman pode ser feita com qualquer grupo matemático, desde que o problema do logaritmo discreto seja difícil nesse grupo.",
      answer: true,
      comment: "Certo. Embora comumente feito com grupos multiplicativos de inteiros módulo um primo ou com grupos de curva elíptica, qualquer grupo cíclico adequado pode ser usado."
    },
    {
      text: "Um hash pode ser usado para garantir a confidencialidade dos dados.",
      answer: false,
      comment: "Errado. Hashes garantem a integridade e autenticidade (quando usados em um HMAC), mas não a confidencialidade. O hash é um processo de mão única; ele não pode ser revertido para recuperar os dados originais."
    },
    {
      text: "O comprimento do hash do SHA-512 é de 512 bits.",
      answer: true,
      comment: "Certo. O número no nome dos algoritmos da família SHA-2 (e SHA-1) geralmente indica o comprimento da saída do hash em bits."
    },
    {
      text: "Ataques de colisão para SHA-1 são apenas teóricos e não representam uma ameaça real.",
      answer: false,
      comment: "Errado. Em 2017, o Google e o CWI anunciaram o primeiro ataque de colisão prático contra o SHA-1 (chamado SHAttered), criando dois arquivos PDF diferentes com o mesmo hash SHA-1."
    },
    {
      text: "O HMAC é um método para criar um hash que também depende de uma chave secreta.",
      answer: true,
      comment: "Certo. HMAC (Hash-based Message Authentication Code) combina uma chave secreta com a mensagem antes de aplicar o hash, fornecendo autenticação de mensagem – uma prova de que o hash foi criado por alguém que possui a chave."
    },
    {
      text: "O protocolo Diffie-Hellman requer que as duas partes confiem em uma autoridade central.",
      answer: false,
      comment: "Errado. O protocolo em si não requer uma autoridade central. No entanto, para se proteger contra ataques MitM, ele é frequentemente usado em conjunto com um sistema de confiança, como uma PKI com certificados digitais."
    },
    {
      text: "Truncar a saída de um hash SHA-256 para 128 bits o torna tão inseguro quanto o MD5.",
      answer: false,
      comment: "Errado. Embora truncar o hash reduza sua resistência à colisão (para 2^64), o algoritmo subjacente (SHA-256) não possui as falhas estruturais do MD5. Ainda é muito mais seguro que o MD5."
    },
    {
      text: "A construção de esponja do SHA-3 pode produzir saídas de hash de qualquer comprimento desejado.",
      answer: true,
      comment: "Certo. Uma das características flexíveis da construção de esponja é que, após a fase de 'absorção' dos dados de entrada, ela pode ser 'espremida' para produzir uma saída do tamanho que for necessário."
    },
    {
      text: "O uso de parâmetros Diffie-Hellman fracos ou comumente usados pode tornar as conexões vulneráveis (ataque Logjam).",
      answer: true,
      comment: "Certo. O ataque Logjam mostrou que se muitos servidores usam o mesmo grupo primo de 1024 bits, um invasor pode fazer um grande pré-cálculo para quebrar as trocas de chaves DHE de forma relativamente rápida."
    },
    {
      text: "MD5 e SHA-1 são baseados na construção Merkle-Damgård.",
      answer: true,
      comment: "Certo. Essa construção processa mensagens em blocos e foi usada em muitas funções de hash mais antigas. O SHA-2 também a utiliza."
    },
    {
      text: "A principal função de um hash em uma assinatura digital é reduzir o tamanho dos dados a serem assinados.",
      answer: true,
      comment: "Certo. Assinar a mensagem inteira com um algoritmo de chave pública como o RSA seria extremamente lento. Em vez disso, um hash rápido da mensagem é criado, e apenas esse hash de tamanho fixo é assinado."
    },
    {
      text: "Se hash(M1) = hash(M2), então é garantido que M1 = M2.",
      answer: false,
      comment: "Errado. Devido ao princípio da casa dos pombos (há mais entradas possíveis do que saídas), colisões devem existir. A segurança de um hash reside na dificuldade computacional de encontrar tais colisões."
    },
    {
      text: "O SHA-3 foi projetado para ser mais rápido que o SHA-2 em implementações de software.",
      answer: false,
      comment: "Errado. Em geral, em implementações de software em CPUs modernas, o SHA-2 (especialmente o SHA-256) costuma ser mais rápido que o SHA-3. O SHA-3, no entanto, pode ser extremamente eficiente em implementações de hardware."
    },
    {
      text: "A troca de chaves Diffie-Hellman revela a chave secreta compartilhada para qualquer um que esteja ouvindo o canal.",
      answer: false,
      comment: "Errado. A beleza do protocolo é que a chave secreta compartilhada é calculada por cada parte, mas nunca é transmitida pelo canal. Um observador não pode calculá-la facilmente a partir dos valores públicos trocados."
    },
    {
      text: "O SHAKE (Secure Hash Algorithm and Keccak) é uma função de saída extensível (XOF) da família SHA-3.",
      answer: true,
      comment: "Certo. Funções como SHAKE128 e SHAKE256 podem produzir saídas de qualquer comprimento, o que é útil para aplicações que precisam de mais material de chave do que um hash de tamanho fixo pode fornecer."
    },
    {
      text: "Um ataque de pré-imagem consiste em encontrar uma mensagem que corresponda a um determinado hash.",
      answer: true,
      comment: "Certo. Isso é exatamente o que um invasor tentaria fazer para substituir uma senha se ele obtivesse o hash da senha."
    },
    {
      text: "O uso de Diffie-Hellman garante a confidencialidade direta (Forward Secrecy).",
      answer: false,
      comment: "Errado. Apenas a versão efêmera (DHE/ECDHE) garante a confidencialidade direta. Se as partes usarem chaves Diffie-Hellman estáticas e de longo prazo, o comprometimento dessas chaves comprometeria todas as sessões passadas e futuras."
    },
    {
      text: "A família SHA-2 é vulnerável aos mesmos ataques de extensão de comprimento que o SHA-1 e o MD5.",
      answer: true,
      comment: "Certo. Devido à sua construção Merkle-Damgård, o SHA-2 é vulnerável a ataques de extensão de comprimento. O SHA-3, com sua construção de esponja, não é."
    },
    {
      text: "O algoritmo MD5 foi projetado por Ron Rivest.",
      answer: true,
      comment: "Certo. O MD5 (Message Digest 5) foi projetado por Ron Rivest (o 'R' do RSA) em 1991 como um substituto para o MD4."
    },
    {
      text: "É impossível encontrar uma colisão para o SHA-256.",
      answer: false,
      comment: "Errado. Embora colisões devam existir teoricamente, encontrar uma é considerado computacionalmente inviável com a tecnologia atual. A segurança do SHA-256 reside nessa inviabilidade prática."
    },
    {
      text: "O protocolo Diffie-Hellman pode ser usado para criar uma assinatura digital.",
      answer: false,
      comment: "Errado. Diffie-Hellman é estritamente um protocolo de acordo de chave. Algoritmos como RSA, DSA e ECDSA são usados para assinaturas digitais."
    },
    {
      text: "O principal objetivo do SHA-3 era ser mais seguro e mais rápido que o SHA-2.",
      answer: false,
      comment: "Errado. O principal objetivo era a diversidade de design. Ter um padrão de hash seguro que é estruturalmente diferente do SHA-2 é uma proteção importante caso uma falha fundamental seja descoberta na construção Merkle-Damgård."
    },
    {
      text: "A saída de um hash é, para todos os efeitos práticos, aleatória.",
      answer: true,
      comment: "Certo. Uma pequena mudança na entrada (como um único bit) deve causar uma mudança drástica e imprevisível na saída (efeito avalanche), fazendo com que a saída pareça aleatória."
    }
  ]
,
  "tecnicas-ataque-cripto": [
    {
      text: "Um ataque de força bruta tenta todas as chaves possíveis até encontrar a correta.",
      answer: true,
      comment: "Certo. É a forma mais básica de ataque, testando sistematicamente cada chave possível. Sua viabilidade depende do tamanho do espaço de chaves e do tempo disponível."
    },
    {
      text: "Criptoanálise é o processo de projetar algoritmos criptográficos seguros.",
      answer: false,
      comment: "Errado. Criptoanálise é a arte e ciência de analisar e quebrar sistemas criptográficos. O projeto de algoritmos é o campo da criptografia."
    },
    {
      text: "Um ataque de canal lateral (side-channel attack) explora falhas no algoritmo matemático da cifra.",
      answer: false,
      comment: "Errado. Um ataque de canal lateral não explora fraquezas teóricas do algoritmo, mas sim informações obtidas da sua implementação física (ex: tempo de processamento, consumo de energia, emissões eletromagnéticas)."
    },
    {
      text: "Em um ataque de texto conhecido (known-plaintext attack), o atacante possui pares de texto cifrado e o texto plano correspondente.",
      answer: true,
      comment: "Certo. O objetivo é usar esses pares para deduzir informações sobre a chave de criptografia ou o algoritmo, a fim de decifrar outras mensagens."
    },
    {
      text: "Um ataque Man-in-the-Middle (MITM) só é possível em redes com fio.",
      answer: false,
      comment: "Errado. Ataques MITM são muito comuns em redes sem fio (Wi-Fi), onde um invasor pode criar um ponto de acesso falso para interceptar o tráfego das vítimas."
    },
    {
      text: "Aumentar o comprimento da chave é a única defesa contra ataques de força bruta.",
      answer: false,
      comment: "Errado. Embora seja a defesa primária, outras medidas como limitar o número de tentativas de login (rate limiting) e bloquear contas após falhas repetidas também são defesas eficazes, especialmente em sistemas online."
    },
      {
      text: "A criptoanálise diferencial explora como as diferenças nas entradas afetam as diferenças nas saídas para derivar a chave.",
      answer: true,
      comment: "Certo. É uma forma de ataque de texto escolhido que analisa pares de textos planos com diferenças específicas e observa o efeito no texto cifrado para encontrar padrões que revelem a chave."
    },
    {
      text: "Um ataque de timing (tempo) é um tipo de ataque de canal lateral.",
      answer: true,
      comment: "Certo. O atacante mede o tempo que leva para o sistema executar operações criptográficas. Variações no tempo podem vazar informações sobre a chave secreta."
    },
    {
      text: "Em um ataque de texto cifrado escolhido (chosen-ciphertext attack), o atacante pode obter a decriptação de textos cifrados de sua escolha.",
      answer: true,
      comment: "Certo. Este é um modelo de ataque muito poderoso, onde o atacante pode alimentar uma 'caixa preta' de decriptação com textos cifrados e usar as saídas para deduzir a chave. Cifras modernas devem ser resistentes a este ataque (segurança CCA2)."
    },
    {
      text: "O uso de HTTPS (SSL/TLS) elimina completamente o risco de ataques Man-in-the-Middle.",
      answer: false,
      comment: "Errado. Embora o HTTPS criptografe o tráfego, um ataque MITM ainda é possível se o atacante conseguir que a vítima aceite um certificado digital falso ou explore implementações de TLS vulneráveis."
    },
    {
      text: "A criptoanálise linear é mais eficaz contra cifras de fluxo do que contra cifras de bloco.",
      answer: false,
      comment: "Errado. A criptoanálise linear é uma técnica desenvolvida primariamente para atacar cifras de bloco, encontrando aproximações lineares para a ação da cifra."
    },
    {
      text: "Um ataque de análise de consumo de energia (power analysis) mede as emissões de rádio de um dispositivo.",
      answer: false,
      comment: "Errado. Ele mede as variações no consumo de energia elétrica do dispositivo durante as operações criptográficas. Variações no consumo podem estar correlacionadas com os dados sendo processados ou com a chave."
    },
    {
      text: "Um ataque de texto plano escolhido (chosen-plaintext attack - CPA) é mais fraco que um ataque de texto conhecido.",
      answer: false,
      comment: "Errado. Um ataque CPA é mais forte, pois o atacante tem a liberdade de escolher quais textos planos serão criptografados, permitindo-lhe investigar a cifra de forma mais direcionada do que se estivesse limitado a textos planos já existentes."
    },
    {
      text: "Ataques de força bruta são sempre impraticáveis contra cifras modernas como o AES-256.",
      answer: true,
      comment: "Certo. O número de chaves possíveis em AES-256 (2^256) é tão astronomicamente grande que um ataque de força bruta levaria mais tempo do que a idade do universo com a tecnologia computacional atual e futura previsível."
    },
    {
      text: "Ataques de dicionário são uma forma de ataque de força bruta otimizado para senhas.",
      answer: true,
      comment: "Certo. Em vez de tentar todas as combinações de caracteres, um ataque de dicionário tenta palavras comuns, frases e senhas vazadas, o que é muito mais eficiente contra senhas criadas por humanos."
    },
    {
      text: "Ataques de canal lateral não requerem acesso físico ao dispositivo-alvo.",
      answer: false,
      comment: "Errado. A maioria dos ataques de canal lateral, como análise de energia ou tempo, requer proximidade física ou acesso ao hardware para fazer as medições necessárias. No entanto, alguns ataques de timing podem ser realizados remotamente em redes."
    },
    {
      text: "Um ataque 'somente texto cifrado' (ciphertext-only attack) é o cenário mais difícil para um criptoanalista.",
      answer: true,
      comment: "Certo. Neste cenário, o atacante possui apenas uma coleção de textos cifrados e não tem nenhuma informação sobre o texto plano correspondente. Um sistema criptográfico seguro deve resistir a este tipo de ataque."
    },
    {
      text: "Ataques de repetição (replay attacks) são um tipo de ataque Man-in-the-Middle.",
      answer: true,
      comment: "Certo. Em um ataque de repetição, o atacante intercepta uma transmissão (como uma autenticação) e a retransmite mais tarde para se passar pela vítima. É uma forma de manipulação de dados em um ataque MITM."
    },
    {
      text: "A criptoanálise diferencial não pode ser aplicada a cifras de chave pública.",
      answer: true,
      comment: "Certo. A criptoanálise diferencial e linear são técnicas projetadas para explorar a estrutura interna de cifras de bloco simétricas e não são aplicáveis a algoritmos de chave pública como o RSA."
    },
    {
      text: "Um ataque de falha (fault attack) envolve induzir erros no hardware para que ele produza resultados incorretos que vazem informações.",
      answer: true,
      comment: "Certo. Ao causar falhas (usando lasers, picos de tensão, etc.) em momentos precisos durante o cálculo, um atacante pode obter informações sobre o estado interno secreto do dispositivo."
    },
    {
      text: "O objetivo principal de um ataque MITM é sempre roubar a chave de criptografia.",
      answer: false,
      comment: "Errado. O objetivo pode ser simplesmente ler a comunicação, modificá-la em tempo real (ex: alterar o valor de uma transação bancária) ou injetar dados maliciosos, sem necessariamente precisar roubar a chave de longo prazo."
    },
    {
      text: "Ataques de texto conhecido são inúteis se a cifra usar um nonce ou vetor de inicialização (IV).",
      answer: false,
      comment: "Errado. Embora nonces e IVs previnam que textos planos idênticos resultem em textos cifrados idênticos, um atacante com pares de texto plano/cifrado ainda pode tentar encontrar fraquezas no algoritmo subjacente."
    },
    {
      text: "A 'entropia' de uma chave refere-se à sua aleatoriedade e imprevisibilidade.",
      answer: true,
      comment: "Certo. Chaves com baixa entropia (ex: geradas a partir de senhas fracas) são muito mais vulneráveis a ataques de força bruta e de dicionário."
    },
    {
      text: "Um ataque de canal lateral acústico analisa o som produzido por um computador durante a criptografia.",
      answer: true,
      comment: "Certo. É uma forma de ataque de canal lateral onde os sons de alta frequência emitidos pelos capacitores e indutores na placa-mãe podem vazar informações sobre as operações que estão sendo executadas."
    },
    {
      text: "Ataques de força bruta reversa tentam encontrar o texto plano a partir de uma chave conhecida e um texto cifrado.",
      answer: false,
      comment: "Errado. Isso é simplesmente decriptação. Um ataque de força bruta reversa (ou de identidade) tenta encontrar uma identidade/usuário que corresponda a uma senha conhecida."
    },
    {
      text: "Ataques de texto escolhido são sempre práticos no mundo real.",
      answer: false,
      comment: "Errado. Embora seja um modelo de ameaça importante, obter a capacidade de criptografar uma grande quantidade de textos planos escolhidos pode ser difícil de alcançar em muitos cenários do mundo real."
    },
    {
      text: "O uso de preenchimento (padding) em cifras de bloco pode levar a ataques de 'padding oracle'.",
      answer: true,
      comment: "Certo. Se um servidor vaza informações sobre se o preenchimento de um texto cifrado está correto ou não (ex: através de mensagens de erro diferentes), um atacante pode usar esse 'oráculo' para decifrar textos cifrados bloco por bloco."
    },
    {
      text: "A melhor defesa contra ataques de canal lateral é usar algoritmos matematicamente mais fortes.",
      answer: false,
      comment: "Errado. A defesa contra ataques de canal lateral está na implementação, não no algoritmo. Envolve técnicas como 'blinding' (randomização de cálculos), uso de operações de tempo constante e blindagem física do hardware."
    },
    {
      text: "Ataques Man-in-the-Browser (MITB) são um tipo de ataque Man-in-the-Middle.",
      answer: true,
      comment: "Certo. Em um ataque MITB, um malware no computador da vítima intercepta e modifica as informações entre o usuário e o navegador, permitindo, por exemplo, alterar transações bancárias antes que sejam criptografadas pelo HTTPS."
    },
    {
      text: "A criptoanálise é uma ameaça apenas para cifras antigas e fracas.",
      answer: false,
      comment: "Errado. A criptoanálise é um campo de pesquisa ativo e contínuo. Novas técnicas são constantemente desenvolvidas e testadas contra cifras modernas para garantir sua segurança contínua."
    },
    {
      text: "Um ataque de força bruta pode ser paralelizado para acelerar a busca pela chave.",
      answer: true,
      comment: "Certo. A busca por chaves é um problema 'embaraçosamente paralelo', o que significa que pode ser facilmente dividido entre múltiplos processadores ou computadores para acelerar drasticamente o processo."
    },
    {
      text: "Um ataque de texto cifrado escolhido é considerado o modelo de ameaça mais forte para cifras simétricas.",
      answer: true,
      comment: "Certo. Se uma cifra é segura contra ataques de texto cifrado escolhido adaptativos (CCA2), ela é considerada muito robusta."
    },
    {
      text: "Ataques de canal lateral só funcionam em implementações de hardware.",
      answer: false,
      comment: "Errado. Ataques de canal lateral baseados em software também existem. Por exemplo, um processo malicioso pode monitorar como os dados que ele compartilha na cache da CPU são afetados por um processo de criptografia em execução, vazando informações."
    },
    {
      text: "A prevenção de ataques MITM depende apenas do cliente verificar o certificado do servidor.",
      answer: false,
      comment: "Errado. Embora a verificação do certificado seja crucial, a segurança também depende do servidor estar configurado corretamente (usando protocolos e cifras fortes) e de não haver malware no cliente que possa subverter a verificação."
    },
    {
      text: "Ataques de colisão em funções de hash são um tipo de ataque de força bruta.",
      answer: false,
      comment: "Errado. Embora a força bruta possa ser usada para encontrar colisões, ataques de colisão eficazes (como os contra MD5 e SHA-1) exploram fraquezas matemáticas específicas no algoritmo para encontrar colisões muito mais rápido do que a força bruta."
    },
    {
      text: "Ataques de análise de tráfego, que observam padrões de comunicação, não são considerados criptoanálise.",
      answer: true,
      comment: "Certo. A análise de tráfego não tenta quebrar a criptografia em si, mas extrai metadados (quem está falando com quem, quando, por quanto tempo) que podem ser muito valiosos, mesmo que o conteúdo da comunicação permaneça secreto."
    },
    {
      text: "Em um ataque de texto conhecido, o atacante precisa conhecer todo o texto plano.",
      answer: false,
      comment: "Errado. O atacante só precisa de alguns pares de texto plano/cifrado. Quanto mais pares ele tiver, mais fácil o ataque se torna, mas não é necessário ter todo o texto plano."
    },
    {
      text: "O uso de um gerador de números aleatórios fraco pode comprometer um sistema criptográfico seguro.",
      answer: true,
      comment: "Certo. Se as chaves, nonces ou IVs forem previsíveis, um atacante pode quebrar o sistema facilmente, independentemente da força do algoritmo de criptografia. A geração de números aleatórios é um pilar da segurança criptográfica."
    },
    {
      text: "Ataques de força bruta são ineficazes contra sistemas de chave pública como o RSA.",
      answer: true,
      comment: "Certo. A segurança do RSA não se baseia no tamanho da chave para resistir à força bruta, mas na dificuldade de fatorar números grandes. Tentar fatorar a chave pública é muito mais eficiente do que tentar adivinhar a chave privada por força bruta."
    },
    {
      text: "Ataques de canal lateral são uma preocupação maior para dispositivos embarcados (como smart cards) do que para servidores em data centers.",
      answer: true,
      comment: "Certo. Dispositivos embarcados estão frequentemente nas mãos de potenciais atacantes, tornando as medições físicas (energia, tempo) muito mais fáceis. Servidores em data centers são fisicamente seguros, tornando esses ataques muito mais difíceis."
    },
    {
      text: "Um ataque de texto cifrado conhecido (known-ciphertext) é o mesmo que um ataque somente texto cifrado (ciphertext-only).",
      answer: true,
      comment: "Certo. Ambos os termos se referem ao cenário onde o atacante tem acesso apenas a textos cifrados e tenta derivar o texto plano ou a chave."
    },
    {
      text: "A técnica de 'salting' de senhas ajuda a proteger contra ataques de canal lateral.",
      answer: false,
      comment: "Errado. O 'salting' é uma defesa contra ataques de dicionário e rainbow tables em hashes de senha. Não tem relação com ataques de canal lateral, que exploram a implementação física da criptografia."
    },
      {
      text: "Ataques de injeção de falhas são passivos, ou seja, o atacante apenas observa o dispositivo.",
      answer: false,
      comment: "Errado. Ataques de injeção de falhas são ativos. O atacante interfere deliberadamente no funcionamento do dispositivo (com lasers, voltagem, etc.) para induzir erros."
    },
    {
      text: "O objetivo da criptoanálise é sempre encontrar a chave secreta.",
      answer: false,
      comment: "Errado. Uma quebra pode ter vários níveis. O objetivo pode ser encontrar a chave, decifrar uma única mensagem, encontrar uma maneira de distinguir a saída da cifra de dados aleatórios, ou forjar uma assinatura, entre outros."
    },
    {
      text: "Em um ataque Man-in-the-Middle, o atacante deve estar fisicamente entre as duas vítimas.",
      answer: false,
      comment: "Errado. O 'meio' é lógico, não necessariamente físico. O atacante precisa controlar um ponto na rota de comunicação, como um roteador comprometido, um servidor DNS malicioso ou um ponto de acesso Wi-Fi falso."
    },
    {
      text: "Um ataque de texto escolhido adaptativo é aquele em que o atacante pode escolher os textos planos a serem criptografados em tempo real, baseando suas escolhas nas criptografias anteriores.",
      answer: true,
      comment: "Certo. É uma forma mais forte de ataque de texto escolhido, onde o atacante pode interagir dinamicamente com o sistema de criptografia."
    },
    {
      text: "A segurança de um sistema criptográfico é determinada apenas pela força de seu algoritmo.",
      answer: false,
      comment: "Errado. A segurança de um sistema depende de toda a cadeia: a força do algoritmo, o comprimento da chave, a qualidade da implementação, a geração segura de números aleatórios e o protocolo em que é usado."
    },
    {
      text: "Ataques de força bruta são mais eficazes contra chaves de 128 bits do que contra chaves de 56 bits.",
      answer: false,
      comment: "Errado. É o contrário. Uma chave de 128 bits tem um espaço de chaves 2^72 vezes maior que uma chave de 56 bits, tornando-a exponencialmente mais difícil de ser quebrada por força bruta."
    },
    {
      text: "Ataques de 'watering hole' são uma forma de preparar um ataque de texto conhecido.",
      answer: true,
      comment: "Certo. Em um ataque de 'watering hole', um atacante pode comprometer um site que a vítima visita e injetar um script que criptografa um texto conhecido com a chave da vítima, enviando o resultado para o atacante. Isso fornece ao atacante um par de texto plano/cifrado."
    }
  ]
,
  "signal-blockchain-cripto": [
    {
      text: "O Protocolo Signal usa criptografia de ponta a ponta (E2EE) por padrão para todas as comunicações.",
      answer: true,
      comment: "Certo. O Signal é conhecido por sua implementação robusta de E2EE, garantindo que apenas o remetente e o destinatário possam ler as mensagens."
    },
    {
      text: "O algoritmo Double Ratchet, usado pelo Signal, fornece apenas confidencialidade futura (forward secrecy).",
      answer: false,
      comment: "Errado. Ele fornece tanto confidencialidade futura (forward secrecy) quanto segurança pós-comprometimento (post-compromise security), o que significa que o sistema se recupera automaticamente mesmo que uma chave de sessão seja comprometida."
    },
    {
      text: "O WhatsApp e o Skype usam o Protocolo Signal para sua criptografia de ponta a ponta.",
      answer: true,
      comment: "Certo. O Protocolo Signal foi adotado por vários outros aplicativos de mensagens, incluindo WhatsApp, Facebook Messenger e Skype, para proteger as comunicações de bilhões de usuários."
    },
    {
      text: "O Protocolo Signal armazena metadados (quem falou com quem e quando) em texto plano em seus servidores.",
      answer: false,
      comment: "Errado. O Signal implementa técnicas como 'Sealed Sender' para ocultar metadados, minimizando as informações que seus próprios servidores podem ver."
    },
    {
      text: "Blockchain é um banco de dados centralizado mantido por uma única autoridade, como um banco.",
      answer: false,
      comment: "Errado. Blockchain é um livro-razão distribuído e descentralizado. Os dados são mantidos em uma rede de computadores (nós), sem a necessidade de uma autoridade central."
    },
    {
      text: "Uma vez que um bloco é adicionado à blockchain, ele não pode ser alterado ou removido.",
      answer: true,
      comment: "Certo. Essa propriedade é chamada de imutabilidade. Alterar um bloco exigiria a alteração de todos os blocos subsequentes e o controle da maior parte da rede, o que é computacionalmente inviável."
    },
    {
      text: "O mecanismo de consenso 'Proof of Work' (PoW) exige que os mineradores resolvam um problema matemático complexo para adicionar um novo bloco.",
      answer: true,
      comment: "Certo. O PoW é o mecanismo usado pelo Bitcoin. Ele garante a segurança da rede, tornando caro e difícil adicionar blocos, mas fácil para outros verificarem a solução."
    },
    {
      text: "'Proof of Stake' (PoS) é um mecanismo de consenso mais eficiente em termos de energia do que o 'Proof of Work'.",
      answer: true,
      comment: "Certo. No PoS, os validadores são escolhidos para criar novos blocos com base no número de moedas que possuem e estão dispostos a 'apostar' como garantia, eliminando a necessidade de computação intensiva."
    },
    {
      text: "Todas as blockchains são públicas e qualquer pessoa pode participar.",
      answer: false,
      comment: "Errado. Existem blockchains privadas e de consórcio (permissioned), onde apenas participantes autorizados podem visualizar ou adicionar transações. Elas são frequentemente usadas em ambientes corporativos."
    },
    {
      text: "'Smart Contracts' são programas de computador que são executados automaticamente quando condições pré-definidas são atendidas.",
      answer: true,
      comment: "Certo. Popularizados pela blockchain Ethereum, os 'smart contracts' (contratos inteligentes) permitem a automação de acordos e processos de forma transparente e sem intermediários."
    },
    {
      text: "Criptomoedas são moedas digitais emitidas e controladas por bancos centrais.",
      answer: false,
      comment: "Errado. A maioria das criptomoedas, como o Bitcoin, é descentralizada e não é controlada por nenhuma entidade única, como um banco ou governo."
    },
    {
      text: "A chave privada em criptomoedas é usada para assinar transações e provar a posse dos fundos.",
      answer: true,
      comment: "Certo. A chave privada deve ser mantida em segredo absoluto. Qualquer pessoa que a possua tem controle total sobre as moedas associadas a ela."
    },
    {
      text: "É seguro compartilhar sua chave privada de criptomoeda com amigos ou em fóruns online.",
      answer: false,
      comment: "Errado. Compartilhar sua chave privada é o equivalente a entregar o dinheiro ou os ativos. Ela nunca deve ser compartilhada com ninguém."
    },
    {
      text: "Uma 'cold wallet' (carteira fria) é uma carteira de criptomoedas que está conectada à internet.",
      answer: false,
      comment: "Errado. Uma carteira fria é mantida offline (ex: hardware wallet, paper wallet) para máxima segurança. Uma carteira conectada à internet é chamada de 'hot wallet' (carteira quente)."
    },
    {
      text: "As transações de Bitcoin são completamente anônimas.",
      answer: false,
      comment: "Errado. As transações de Bitcoin são pseudônimas. Todas as transações são públicas na blockchain. Embora os endereços não estejam diretamente ligados a identidades, a análise da blockchain pode, eventualmente, revelar a identidade dos usuários."
    },
    {
      text: "O algoritmo X3DH (Extended Triple Diffie-Hellman) é usado pelo Signal para o acordo inicial de chaves de forma assíncrona.",
      answer: true,
      comment: "Certo. O X3DH permite que um cliente estabeleça uma chave compartilhada com um servidor sem que o destinatário precise estar online no momento."
    },
    {
      text: "O 'hash' de um bloco na blockchain é calculado apenas com base nas transações dentro daquele bloco.",
      answer: false,
      comment: "Errado. O hash de um bloco inclui o hash do bloco anterior, criando assim uma cadeia interligada que garante a integridade e a ordem cronológica da blockchain."
    },
    {
      text: "Um ataque de 51% ocorre quando um único ator ou grupo controla mais de 51% do poder de mineração da rede.",
      answer: true,
      comment: "Certo. Com esse controle, um atacante poderia impedir novas transações, parar pagamentos entre alguns usuários e até mesmo reverter suas próprias transações (gasto duplo), comprometendo a integridade da blockchain."
    },
    {
      text: "Ethereum foi a primeira criptomoeda a ser criada.",
      answer: false,
      comment: "Errado. O Bitcoin foi a primeira criptomoeda descentralizada, criada em 2009. O Ethereum foi lançado em 2015."
    },
    {
      text: "O Protocolo Signal é de código fechado para proteger seus segredos criptográficos.",
      answer: false,
      comment: "Errado. Tanto os aplicativos cliente do Signal quanto o protocolo são de código aberto, permitindo que especialistas em segurança auditem e verifiquem sua segurança."
    },
    {
      text: "A dificuldade de mineração no Bitcoin se ajusta periodicamente para manter o tempo médio de criação de um bloco em cerca de 10 minutos.",
      answer: true,
      comment: "Certo. A cada 2016 blocos (aproximadamente duas semanas), a dificuldade é reajustada com base no poder computacional da rede para manter a emissão de novos bitcoins estável."
    },
    {
      text: "'Gas' no Ethereum refere-se à eletricidade consumida pelos mineradores.",
      answer: false,
      comment: "Errado. 'Gas' é uma unidade que mede a quantidade de trabalho computacional necessária para executar transações ou 'smart contracts' na rede Ethereum. Os usuários pagam taxas de 'gas' para que suas transações sejam processadas."
    },
    {
      text: "A segurança do Protocolo Signal depende da confiança nos servidores do Signal.",
      answer: false,
      comment: "Errado. O design do Signal é baseado no princípio de 'confiança zero' (zero-trust). A segurança é garantida pela criptografia de ponta a ponta, e os servidores não podem acessar o conteúdo das mensagens, mesmo que quisessem."
    },
    {
      text: "Uma blockchain pode ser usada para outras aplicações além de criptomoedas, como rastreamento de cadeia de suprimentos e votação.",
      answer: true,
      comment: "Certo. A natureza imutável e transparente da blockchain a torna útil para qualquer aplicação que exija um registro seguro e auditável de transações ou dados."
    },
    {
      text: "A chave pública em criptomoedas é derivada da chave privada.",
      answer: true,
      comment: "Certo. Através de algoritmos de curva elíptica, a chave pública é gerada a partir da chave privada. No entanto, é computacionalmente impossível derivar a chave privada a partir da chave pública."
    },
    {
      text: "O Double Ratchet do Signal combina um ratchet de Diffie-Hellman e um ratchet de hash.",
      answer: true,
      comment: "Certo. O ratchet de DH é usado para gerar novas chaves de sessão, enquanto o ratchet de hash (baseado em KDF) é usado para gerar chaves de mensagem para cada envio e recebimento, garantindo a segurança."
    },
    {
      text: "O 'gasto duplo' (double-spending) é o risco de uma mesma unidade de criptomoeda ser gasta mais de uma vez.",
      answer: true,
      comment: "Certo. A blockchain resolve o problema do gasto duplo em sistemas digitais descentralizados, garantindo que todas as transações sejam registradas em um livro-razão público e ordenado."
    },
    {
      text: "'Mineração' de criptomoedas é o processo de criar novas moedas do nada.",
      answer: false,
      comment: "Errado. A mineração é o processo de validar transações e adicioná-las à blockchain. Como recompensa por esse trabalho, os mineradores recebem novas moedas e taxas de transação."
    },
    {
      text: "O Protocolo Signal oferece criptografia para chamadas de voz e vídeo.",
      answer: true,
      comment: "Certo. Assim como as mensagens de texto, as chamadas de voz e vídeo no Signal são protegidas com a mesma criptografia de ponta a ponta."
    },
    {
      text: "Um 'bloco gênese' é o último bloco de uma blockchain.",
      answer: false,
      comment: "Errado. O bloco gênese é o primeiro bloco de uma blockchain. É o único bloco que não tem um bloco anterior para referenciar."
    },
    {
      text: "Uma 'seed phrase' ou 'frase de recuperação' é um backup da sua chave privada.",
      answer: true,
      comment: "Certo. A maioria das carteiras gera uma frase de 12 a 24 palavras que pode ser usada para restaurar o acesso aos seus fundos se você perder o dispositivo da carteira. Ela deve ser guardada com a mesma segurança que a chave privada."
    },
    {
      text: "A criptografia do Signal é enfraquecida se um governo exigir acesso de 'backdoor'.",
      answer: true,
      comment: "Certo. Qualquer 'backdoor' intencionalmente inserido no código comprometeria a integridade de todo o sistema de criptografia de ponta a ponta para todos os usuários, não apenas para o alvo."
    },
    {
      text: "A tecnologia Blockchain foi inventada por uma pessoa ou grupo sob o pseudônimo de Satoshi Nakamoto.",
      answer: true,
      comment: "Certo. Satoshi Nakamoto publicou o whitepaper do Bitcoin em 2008, que introduziu a primeira implementação prática de uma blockchain."
    },
    {
      text: "'Altcoins' são todas as criptomoedas que não são o Bitcoin.",
      answer: true,
      comment: "Certo. O termo 'altcoin' é uma abreviação de 'alternative coin' e se refere a qualquer criptomoeda que foi lançada após o sucesso do Bitcoin."
    },
    {
      text: "O Protocolo Signal garante que a identidade de um usuário é sempre anônima.",
      answer: false,
      comment: "Errado. O Signal requer um número de telefone para registro, que pode ser vinculado à identidade de uma pessoa. O protocolo protege o conteúdo da comunicação, não necessariamente o anonimato da identidade."
    },
    {
      text: "Um 'fork' na blockchain ocorre quando a rede se divide em duas versões diferentes do histórico de transações.",
      answer: true,
      comment: "Certo. Forks podem ser 'soft' (compatíveis com versões anteriores) ou 'hard' (incompatíveis), geralmente ocorrendo quando há uma mudança nas regras do protocolo da rede."
    },
    {
      text: "O valor de uma criptomoeda é sempre estável e lastreado em um ativo físico como o ouro.",
      answer: false,
      comment: "Errado. A maioria das criptomoedas é altamente volátil e seu valor é determinado pela oferta e demanda do mercado. Existem 'stablecoins' que tentam atrelar seu valor a ativos externos, mas não é o caso geral."
    },
    {
      text: "A segurança do Signal depende do algoritmo AES-256 para criptografar as mensagens.",
      answer: true,
      comment: "Certo. O Signal usa uma combinação de criptografia de curva elíptica (Curve25519) para o acordo de chaves e AES-256 para a criptografia simétrica das mensagens."
    },
    {
      text: "A descentralização da blockchain a torna imune a qualquer tipo de censura.",
      answer: true,
      comment: "Certo. Como não há um ponto central de controle, é extremamente difícil para qualquer governo ou entidade impedir que transações sejam adicionadas à rede, desde que o usuário tenha acesso à internet."
    },
    {
      text: "A posse de criptomoedas é registrada em um banco de dados associado ao seu nome e CPF.",
      answer: false,
      comment: "Errado. A posse é determinada pela posse da chave privada correspondente a um endereço na blockchain. Não há um registro central de identidade."
    },
    {
      text: "O algoritmo de consenso de uma blockchain serve para garantir que todos os participantes da rede concordem com o estado do livro-razão.",
      answer: true,
      comment: "Certo. Seja por PoW, PoS ou outro método, o objetivo do consenso é garantir que todos tenham uma cópia idêntica e válida da blockchain, prevenindo fraudes."
    },
    {
      text: "Uma vez que você envia uma transação de criptomoeda, ela pode ser facilmente cancelada ou revertida.",
      answer: false,
      comment: "Errado. Devido à imutabilidade da blockchain, as transações são, na prática, irreversíveis uma vez que são confirmadas e adicionadas a um bloco."
    },
    {
      text: "O Protocolo Signal pode proteger contra capturas de tela (screenshots) feitas pelo destinatário.",
      answer: false,
      comment: "Errado. A criptografia de ponta a ponta protege os dados em trânsito. Ela não pode controlar o que o destinatário faz com a mensagem uma vez que ela é decifrada em seu dispositivo."
    },
    {
      text: "'DeFi' significa 'Finanças Descentralizadas' e refere-se a serviços financeiros construídos em blockchains.",
      answer: true,
      comment: "Certo. DeFi busca recriar sistemas financeiros tradicionais (empréstimos, negociações, etc.) de forma aberta e descentralizada, sem a necessidade de intermediários como bancos."
    },
    {
      text: "O suprimento total de Bitcoin é ilimitado.",
      answer: false,
      comment: "Errado. O protocolo do Bitcoin estabelece um suprimento máximo de 21 milhões de moedas, que nunca poderá ser alterado."
    },
    {
      text: "O uso de 'mixers' ou 'tumblers' de criptomoedas pode aumentar o anonimato das transações.",
      answer: true,
      comment: "Certo. Esses serviços misturam fundos de vários usuários para ofuscar o rastro das transações na blockchain, tornando mais difícil a análise e a vinculação de endereços a identidades."
    },
    {
      text: "O Signal armazena backups de suas conversas na nuvem (Google Drive/iCloud) por padrão.",
      answer: false,
      comment: "Errado. O Signal não oferece backups automáticos na nuvem para maximizar a privacidade. Os usuários podem criar backups locais criptografados, mas é um processo manual."
    },
    {
      text: "NFTs (Tokens Não Fungíveis) são um tipo de criptomoeda onde cada token é idêntico e intercambiável.",
      answer: false,
      comment: "Errado. NFTs são únicos e não intercambiáveis. Cada token representa a propriedade de um item específico (digital ou físico), ao contrário de criptomoedas como o Bitcoin, que são fungíveis."
    },
    {
      text: "Qualquer pessoa pode criar sua própria criptomoeda.",
      answer: true,
      comment: "Certo. Com plataformas como Ethereum (padrão ERC-20) e outras, é tecnicamente possível para qualquer pessoa com conhecimento de programação criar e lançar seu próprio token ou criptomoeda."
    }
  ]
,
  "windows-gerenciamento": [
    {
      text: "O Windows 11 é uma atualização gratuita para todos os computadores que rodam o Windows 10.",
      answer: false,
      comment: "Errado. Embora seja uma atualização gratuita, o Windows 11 tem requisitos de hardware específicos (como TPM 2.0 e Secure Boot) que muitos computadores mais antigos com Windows 10 não atendem."
    },
    {
      text: "O Windows Server 2022 é baseado no mesmo kernel que o Windows 10.",
      answer: false,
      comment: "Errado. O Windows Server 2022 compartilha seu núcleo com o Windows 11. O Windows Server 2019 é que é baseado no mesmo núcleo do Windows 10 (versão 1809)."
    },
    {
      text: "A conta 'Administrador' interna do Windows não pode ser excluída, mas pode ser renomeada e desativada.",
      answer: true,
      comment: "Certo. Por razões de segurança, a conta de Administrador interna é protegida contra exclusão, mas é uma prática recomendada desativá-la e renomeá-la para dificultar ataques."
    },
    {
      text: "Permissões NTFS são aplicadas apenas a arquivos e pastas acessados pela rede.",
      answer: false,
      comment: "Errado. As permissões NTFS (New Technology File System) são aplicadas tanto para acessos locais (usuários logados diretamente na máquina) quanto para acessos via rede."
    },
    {
      text: "Um usuário no grupo 'Usuários' (Users) pode instalar qualquer software no Windows 10/11.",
      answer: false,
      comment: "Errado. Usuários padrão têm permissões limitadas e não podem instalar a maioria dos softwares que requerem acesso a nível de sistema ou modificam diretórios protegidos, como Program Files. Eles precisariam de elevação de privilégios (UAC)."
    },
    {
      text: "O Controle de Conta de Usuário (UAC) foi introduzido no Windows 10.",
      answer: false,
      comment: "Errado. O UAC (User Account Control) foi introduzido no Windows Vista e tem sido uma parte fundamental da segurança do Windows desde então."
    },
    {
      text: "As permissões de compartilhamento (Share Permissions) são mais granulares que as permissões NTFS.",
      answer: false,
      comment: "Errado. As permissões de compartilhamento são mais simples (Controle Total, Alterar, Leitura). As permissões NTFS são muito mais granulares, com opções como Modificar, Ler e Executar, Listar Conteúdo da Pasta, etc."
    },
    {
      text: "Quando as permissões de compartilhamento e NTFS são combinadas, a permissão mais restritiva é aplicada.",
      answer: true,
      comment: "Certo. Se uma pasta compartilhada dá a um usuário permissão de 'Leitura' e as permissões NTFS dão 'Controle Total', o usuário terá apenas permissão de 'Leitura' ao acessar pela rede."
    },
    {
      text: "O Windows Server 2019/2022 na modalidade 'Server Core' não possui interface gráfica de usuário (GUI).",
      answer: true,
      comment: "Certo. A instalação Server Core é uma versão mínima gerenciada por linha de comando (PowerShell, CMD), o que reduz a superfície de ataque e o consumo de recursos."
    },
    {
      text: "O Active Directory é um recurso disponível em todas as edições do Windows 10 e 11.",
      answer: false,
      comment: "Errado. O Active Directory Domain Services (AD DS) é uma função (role) do Windows Server. As edições Pro e Enterprise do Windows 10/11 podem ingressar em um domínio do Active Directory, mas não podem atuar como um controlador de domínio."
    },
    {
      text: "O grupo 'Administradores' tem controle total sobre o sistema operacional.",
      answer: true,
      comment: "Certo. Membros do grupo Administradores têm privilégios irrestritos, podendo alterar configurações do sistema, instalar software e acessar todos os arquivos."
    },
    {
      text: "A herança de permissões significa que um arquivo ou subpasta herda as permissões da pasta que o contém.",
      answer: true,
      comment: "Certo. Por padrão, as permissões são herdadas da pasta pai. A herança pode ser desativada para definir permissões explícitas em um objeto filho."
    },
    {
      text: "A permissão NTFS 'Modificar' permite que um usuário exclua arquivos e pastas, mas não permite que ele se aproprie deles.",
      answer: true,
      comment: "Certo. A permissão 'Modificar' inclui a capacidade de ler, escrever, executar e excluir. A apropriação (Take Ownership) é uma permissão especial contida no 'Controle Total'."
    },
    {
      text: "Windows Server 2019 e 2022 usam o mesmo modelo de licenciamento baseado em núcleos (cores).",
      answer: true,
      comment: "Certo. Ambos os sistemas operacionais de servidor são licenciados com base no número de núcleos de processador do servidor, com um mínimo exigido por servidor e por processador."
    },
    {
      text: "Um perfil de usuário no Windows armazena apenas o papel de parede e os ícones da área de trabalho.",
      answer: false,
      comment: "Errado. Um perfil de usuário armazena uma vasta gama de configurações pessoais, incluindo dados de aplicativos (na pasta AppData), configurações do Registro (no arquivo NTUSER.DAT), documentos, downloads e muito mais."
    },
    {
      text: "A ferramenta 'lusrmgr.msc' é usada para gerenciar usuários e grupos locais em um controlador de domínio.",
      answer: false,
      comment: "Errado. Em um controlador de domínio, as contas de usuário e grupo do domínio são gerenciadas através da ferramenta 'Usuários e Computadores do Active Directory' (dsa.msc). 'lusrmgr.msc' é para máquinas autônomas ou servidores membros."
    },
    {
      text: "As permissões Deny (Negar) sempre se sobrepõem às permissões Allow (Permitir).",
      answer: true,
      comment: "Certo. Uma permissão de negação explícita para um usuário ou grupo sempre prevalecerá sobre qualquer permissão de permissão que eles possam ter, mesmo que a permissão venha de outro grupo."
    },
    {
      text: "O Windows 11 removeu completamente o suporte para aplicativos de 32 bits.",
      answer: false,
      comment: "Errado. O Windows 11 (em arquitetura de 64 bits) mantém a compatibilidade com aplicativos de 32 bits através da camada de emulação WOW64 (Windows 32-on-Windows 64)."
    },
    {
      text: "O Windows Admin Center é uma ferramenta baseada em navegador para gerenciar o Windows Server.",
      answer: true,
      comment: "Certo. O Windows Admin Center é uma plataforma de gerenciamento moderna que centraliza a administração de servidores, clusters e infraestrutura hiperconvergente a partir de um navegador web."
    },
    {
      text: "A permissão de 'Controle Total' (Full Control) é a mesma para permissões de compartilhamento e NTFS.",
      answer: false,
      comment: "Errado. Embora tenham o mesmo nome, o 'Controle Total' NTFS é muito mais abrangente, incluindo a capacidade de alterar permissões e se apropriar de arquivos, o que o 'Controle Total' de compartilhamento não permite."
    },
    {
      text: "A conta 'Convidado' (Guest) vem ativada por padrão em instalações recentes do Windows 10/11.",
      answer: false,
      comment: "Errado. Por motivos de segurança, a conta Convidado vem desativada por padrão em todas as versões modernas do Windows."
    },
    {
      text: "Um usuário pode ser membro de vários grupos ao mesmo tempo.",
      answer: true,
      comment: "Certo. As permissões de um usuário são cumulativas, baseadas na soma das permissões de todos os grupos aos quais ele pertence (a menos que haja uma permissão de negação explícita)."
    },
    {
      text: "O Windows Server Essentials é uma edição destinada a grandes corporações com milhares de usuários.",
      answer: false,
      comment: "Errado. A edição Essentials é projetada para pequenas empresas, geralmente com um limite de 25 usuários e 50 dispositivos."
    },
    {
      text: "A permissão NTFS 'Gravar' (Write) permite criar novos arquivos, mas não permite modificar arquivos existentes.",
      answer: false,
      comment: "Errado. A permissão 'Gravar' permite tanto a criação de novos arquivos/pastas quanto a modificação de dados em arquivos existentes."
    },
    {
      text: "O SID (Security Identifier) é um valor único usado para identificar um usuário, grupo ou conta de computador.",
      answer: true,
      comment: "Certo. Mesmo que o nome de uma conta seja alterado, seu SID permanece o mesmo, garantindo que as permissões associadas a ela sejam mantidas."
    },
    {
      text: "O Windows Defender é apenas um antivírus e não oferece outras funcionalidades de segurança.",
      answer: false,
      comment: "Errado. O Microsoft Defender Antivirus é parte de uma suíte de segurança maior, a Segurança do Windows, que inclui firewall, proteção de rede, controle de aplicativos e navegador, e muito mais."
    },
    {
      text: "A permissão especial 'Apropriar-se' (Take Ownership) permite que um usuário se torne o proprietário de um arquivo ou pasta, mesmo sem ter outras permissões.",
      answer: true,
      comment: "Certo. Um administrador pode se apropriar de um objeto para então poder alterar suas permissões e obter acesso."
    },
    {
      text: "O Windows Server 2022 oferece o recurso 'Secured-core server' para proteção avançada contra ameaças.",
      answer: true,
      comment: "Certo. O 'Secured-core' combina proteções de hardware, firmware e sistema operacional para fornecer segurança contra ameaças avançadas e de firmware."
    },
    {
      text: "A permissão 'Ler e Executar' permite que um usuário execute um script, mas não permite que ele veja o conteúdo do script.",
      answer: false,
      comment: "Errado. A permissão 'Ler e Executar' inclui a permissão de 'Leitura'. Portanto, o usuário pode tanto ler o conteúdo do arquivo quanto executá-lo."
    },
    {
      text: "Um usuário padrão pode alterar o endereço IP do computador.",
      answer: false,
      comment: "Errado. A alteração das configurações de rede, como o endereço IP, é uma tarefa administrativa e requer elevação de privilégios."
    },
    {
      text: "As Políticas de Grupo (Group Policies - GPO) só podem ser aplicadas a usuários, não a computadores.",
      answer: false,
      comment: "Errado. As Políticas de Grupo têm duas seções principais: Configuração do Computador e Configuração do Usuário. Elas podem ser aplicadas a ambos para impor configurações de segurança e operacionais."
    },
    {
      text: "O Windows 10/11 Home Edition pode ingressar em um domínio do Active Directory.",
      answer: false,
      comment: "Errado. Apenas as edições Pro, Enterprise e Education do Windows podem ingressar em um domínio. A edição Home é destinada a uso doméstico e não possui essa funcionalidade."
    },
    {
      text: "A herança de permissões está sempre ativada e não pode ser desabilitada.",
      answer: false,
      comment: "Errado. A herança pode ser desativada em qualquer pasta ou arquivo, permitindo a criação de um conjunto de permissões explícitas que não são afetadas pelas permissões da pasta pai."
    },
    {
      text: "O grupo 'Operadores de Backup' (Backup Operators) pode fazer backup e restaurar arquivos no sistema, independentemente das permissões NTFS desses arquivos.",
      answer: true,
      comment: "Certo. Este grupo tem o privilégio de contornar as permissões de arquivos e pastas com o propósito específico de realizar operações de backup e restauração."
    },
    {
      text: "O Windows Server Datacenter Edition permite a execução de um número ilimitado de máquinas virtuais.",
      answer: true,
      comment: "Certo. Enquanto a edição Standard permite um número limitado de VMs (normalmente duas), a edição Datacenter é ideal para ambientes altamente virtualizados, oferecendo direitos de virtualização ilimitados."
    },
    {
      text: "Mover um arquivo para uma pasta diferente no mesmo volume (partição) NTFS mantém suas permissões originais.",
      answer: true,
      comment: "Certo. Mover um arquivo dentro do mesmo volume é apenas uma atualização do ponteiro do sistema de arquivos, então o arquivo retém suas permissões explícitas. Copiar o arquivo faria com que ele herdasse as permissões da pasta de destino."
    },
    {
      text: "Copiar um arquivo para uma pasta em um volume NTFS diferente faz com que ele herde as permissões da pasta de destino.",
      answer: true,
      comment: "Certo. Ao copiar um arquivo para um novo local (seja no mesmo volume ou em um diferente), o arquivo é tratado como um novo arquivo nesse local e, portanto, herda as permissões da pasta de destino."
    },
    {
      text: "O grupo 'Usuários Avançados' (Power Users) no Windows 10/11 tem os mesmos privilégios que tinha no Windows XP.",
      answer: false,
      comment: "Errado. No Windows 10/11, o grupo Power Users existe apenas por questões de compatibilidade com versões anteriores e tem os mesmos privilégios limitados que o grupo Usuários padrão."
    },
    {
      text: "É possível atribuir permissões NTFS a endereços de e-mail.",
      answer: false,
      comment: "Errado. As permissões são atribuídas a contas de usuário, grupos ou computadores, que são representados por SIDs, não a endereços de e-mail."
    },
    {
      text: "O Windows Server 2022 removeu completamente o Internet Explorer.",
      answer: true,
      comment: "Certo. O Microsoft Edge é agora o navegador padrão no Windows Server 2022, e o Internet Explorer foi removido."
    },
    {
      text: "Um usuário precisa da permissão de 'Leitura' para poder executar um programa.",
      answer: false,
      comment: "Errado. Para executar um programa, o usuário precisa da permissão 'Ler e Executar'. A permissão de 'Leitura' por si só não é suficiente."
    },
    {
      text: "O proprietário de um arquivo ou pasta sempre pode alterar as permissões desse objeto, mesmo que não tenha permissões explícitas para isso.",
      answer: true,
      comment: "Certo. A propriedade de um objeto concede o direito implícito de ler e alterar suas permissões."
    },
    {
      text: "O Windows To Go é um recurso do Windows 11 que permite executar o sistema operacional a partir de um pen drive.",
      answer: false,
      comment: "Errado. O Windows To Go foi um recurso do Windows 8 e 10 Enterprise que foi descontinuado e não está presente no Windows 11."
    },
    {
      text: "As permissões efetivas de um usuário são a soma de suas permissões de usuário e de todos os grupos a que pertence.",
      answer: true,
      comment: "Certo. A guia 'Acesso Efetivo' (Effective Access) nas propriedades de segurança avançada de um arquivo/pasta pode ser usada para calcular e exibir as permissões resultantes para um usuário específico."
    },
    {
      text: "O BitLocker é uma ferramenta de criptografia de disco disponível em todas as edições do Windows.",
      answer: false,
      comment: "Errado. O BitLocker está disponível apenas nas edições Pro, Enterprise e Education do Windows e em todas as edições do Windows Server. A edição Home possui um recurso mais simples chamado 'Criptografia do Dispositivo'."
    },
    {
      text: "A conta SYSTEM é uma conta de usuário usada por administradores para tarefas de manutenção.",
      answer: false,
      comment: "Errado. A conta SYSTEM é uma conta interna usada pelo sistema operacional e por serviços que rodam no Windows. Ela tem um nível de privilégio ainda maior que o de um Administrador."
    },
    {
      text: "O Windows Hello permite o login usando biometria, como reconhecimento facial ou impressão digital.",
      answer: true,
      comment: "Certo. Disponível no Windows 10 e 11, o Windows Hello oferece uma forma mais segura e pessoal de login, substituindo senhas por biometria ou PIN."
    },
    {
      text: "Alterar as permissões de uma pasta com muitos arquivos é uma operação instantânea.",
      answer: false,
      comment: "Errado. Quando você altera as permissões de uma pasta e opta por propagar essas alterações para todos os arquivos e subpastas, o sistema precisa aplicar as novas permissões a cada objeto individualmente, o que pode levar muito tempo."
    },
    {
      text: "O grupo 'Usuários da Área de Trabalho Remota' permite que seus membros se conectem ao computador via RDP.",
      answer: true,
      comment: "Certo. Por padrão, apenas administradores podem se conectar remotamente. Para permitir que usuários padrão se conectem, eles devem ser adicionados a este grupo."
    }
  ]
,
  "windows-logs-registro": [
    {
      text: "O Visualizador de Eventos (Event Viewer) do Windows contém apenas logs de erros do sistema.",
      answer: false,
      comment: "Errado. Ele contém vários tipos de logs, incluindo Aplicação, Segurança, Instalação, Sistema e Eventos Encaminhados, que registram informações, avisos, erros e auditorias."
    },
    {
      text: "O log de Segurança (Security) registra eventos de logon bem-sucedidos e malsucedidos.",
      answer: true,
      comment: "Certo. O log de Segurança é crucial para auditoria, registrando eventos como tentativas de logon, acesso a objetos, alterações de política e uso de privilégios, mas precisa ser configurado via política de auditoria."
    },
    {
      text: "O ID de Evento 4624 no log de Segurança indica uma falha de logon.",
      answer: false,
      comment: "Errado. O ID 4624 indica um logon bem-sucedido. A falha de logon é geralmente registrada com o ID 4625."
    },
    {
      text: "O Registro do Windows é um banco de dados hierárquico que armazena configurações de baixo nível para o sistema operacional e para aplicativos.",
      answer: true,
      comment: "Certo. Ele contém informações, configurações, opções e outros valores para o hardware, software, usuários e preferências no Windows."
    },
    {
      text: "A estrutura do Registro do Windows é composta por arquivos chamados 'hives'.",
      answer: true,
      comment: "Certo. Os hives são arquivos no disco que contêm uma parte da árvore do Registro, como SAM, SECURITY, SOFTWARE, SYSTEM e DEFAULT."
    },
    {
      text: "HKEY_CURRENT_USER (HKCU) é uma colmeia (hive) independente que armazena as configurações do usuário logado atualmente.",
      answer: false,
      comment: "Errado. HKCU não é uma colmeia independente; é um link simbólico ou um ponteiro para a subchave do usuário atualmente logado dentro da colmeia HKEY_USERS (HKU)."
    },
    {
      text: "É seguro excluir chaves aleatórias do Registro para 'limpar' e acelerar o computador.",
      answer: false,
      comment: "Errado. Excluir chaves incorretas do Registro pode causar instabilidade no sistema, impedir que aplicativos funcionem ou até mesmo fazer com que o Windows não inicie mais. A edição do Registro deve ser feita com extremo cuidado."
    },
    {
      text: "O log de Sistema (System) contém eventos registrados pelos componentes do sistema operacional, como falhas de drivers.",
      answer: true,
      comment: "Certo. O log de Sistema é o local principal para diagnosticar problemas de hardware e drivers do Windows."
    },
    {
      text: "O comando 'regedit.exe' abre o Editor do Registro do Windows.",
      answer: true,
      comment: "Certo. 'regedit.exe' é o executável padrão para visualizar e editar o Registro do Windows."
    },
    {
      text: "A colmeia HKEY_LOCAL_MACHINE (HKLM) contém configurações específicas do computador, que se aplicam a todos os usuários.",
      answer: true,
      comment: "Certo. HKLM armazena informações sobre o hardware, software e outras configurações do sistema que são globais para a máquina."
    },
    {
      text: "Os logs de eventos do Windows são armazenados em arquivos de texto simples (.txt) para fácil visualização.",
      answer: false,
      comment: "Errado. Os logs de eventos são armazenados em um formato binário proprietário com a extensão .evtx (em versões modernas do Windows)."
    },
    {
      text: "O tipo de dados REG_SZ no Registro é usado para armazenar um número inteiro de 32 bits.",
      answer: false,
      comment: "Errado. REG_SZ é usado para armazenar uma string de texto de comprimento fixo. O tipo para um número inteiro de 32 bits é REG_DWORD."
    },
    {
      text: "A política de auditoria do Windows deve ser habilitada para que eventos detalhados de segurança sejam registrados.",
      answer: true,
      comment: "Certo. Por padrão, a auditoria de segurança pode não registrar todos os eventos desejados. Um administrador precisa configurar a Política de Auditoria (local ou via GPO) para capturar eventos específicos."
    },
    {
      text: "A chave do Registro 'Run' (localizada em HKCU e HKLM) é usada para especificar programas que devem ser executados na inicialização do Windows.",
      answer: true,
      comment: "Certo. Programas adicionados a HKEY_CURRENT_USER\\Software\\Microsoft\\Windows\\CurrentVersion\\Run iniciarão para o usuário atual, enquanto os de HKEY_LOCAL_MACHINE iniciarão para todos os usuários."
    },
    {
      text: "O log de Aplicação (Application) contém eventos registrados exclusivamente por aplicativos da Microsoft.",
      answer: false,
      comment: "Errado. O log de Aplicação contém eventos registrados por qualquer aplicativo (de terceiros ou da Microsoft) que foi programado para registrar eventos usando a API de log de eventos do Windows."
    },
    {
      text: "Fazer um backup do Registro antes de editá-lo é uma prática recomendada.",
      answer: true,
      comment: "Certo. O Editor do Registro permite exportar chaves ou o Registro inteiro para um arquivo .reg, que pode ser usado para restaurar as configurações em caso de problemas."
    },
    {
      text: "O nível de evento 'Crítico' (Critical) indica um problema mais grave que um 'Erro' (Error).",
      answer: true,
      comment: "Certo. A hierarquia de gravidade é geralmente: Informação < Aviso < Erro < Crítico. Eventos críticos indicam problemas graves que podem levar a uma falha do sistema ou aplicativo."
    },
    {
      text: "A colmeia HKEY_CLASSES_ROOT (HKCR) armazena informações sobre associações de arquivos e objetos OLE.",
      answer: true,
      comment: "Certo. HKCR garante que o programa correto seja aberto quando você abre um arquivo pelo Windows Explorer. Assim como HKCU, é uma visão combinada de chaves de HKLM e HKCU."
    },
    {
      text: "É possível visualizar os logs de eventos de um computador remoto usando o Visualizador de Eventos.",
      answer: true,
      comment: "Certo. Desde que você tenha as permissões necessárias e as regras de firewall permitam, o Visualizador de Eventos pode se conectar a outro computador na rede para gerenciar seus logs."
    },
    {
      text: "O arquivo NTUSER.DAT em um perfil de usuário contém a colmeia HKEY_LOCAL_MACHINE para aquele usuário.",
      answer: false,
      comment: "Errado. O arquivo NTUSER.DAT contém a colmeia HKEY_CURRENT_USER (HKCU) para um perfil de usuário específico."
    },
    {
      text: "O tamanho máximo dos arquivos de log de eventos é ilimitado por padrão.",
      answer: false,
      comment: "Errado. Cada log de eventos tem um tamanho máximo configurável. Quando o limite é atingido, o Windows pode substituir os eventos mais antigos, arquivar o log ou parar de registrar novos eventos, dependendo da configuração."
    },
    {
      text: "O tipo de dados REG_BINARY é usado para armazenar dados de string.",
      answer: false,
      comment: "Errado. REG_BINARY é usado para armazenar dados binários brutos. Strings são armazenadas em REG_SZ ou REG_EXPAND_SZ."
    },
    {
      text: "A filtragem de logs no Visualizador de Eventos permite encontrar eventos específicos com base em critérios como nível, data, ID do evento ou palavras-chave.",
      answer: true,
      comment: "Certo. A capacidade de filtrar é essencial para a análise de logs, pois permite isolar rapidamente os eventos relevantes em meio a milhares de entradas."
    },
    {
      text: "A chave do Registro Last Known Good Configuration (Última Configuração Válida) é uma cópia de segurança de todo o Registro.",
      answer: false,
      comment: "Errado. Ela é uma cópia de segurança apenas da chave HKLM\\SYSTEM\\CurrentControlSet, que contém dados de drivers e serviços. Era usada para recuperação em caso de problemas de inicialização, mas foi preterida em versões mais recentes do Windows."
    },
    {
      text: "O log de eventos de Segurança só pode ser limpo por um membro do grupo Administradores.",
      answer: true,
      comment: "Certo. Devido à sua natureza sensível para auditoria, limpar o log de Segurança é um privilégio restrito a administradores para evitar que intrusos apaguem seus rastros facilmente."
    },
    {
      text: "O valor de uma chave do Registro é o mesmo que a própria chave.",
      answer: false,
      comment: "Errado. Uma chave é como uma pasta, enquanto um valor é como um arquivo dentro dessa pasta. Uma chave pode conter múltiplos valores (com nome, tipo e dados) e outras subchaves."
    },
    {
      text: "O Windows PowerShell pode ser usado para consultar e gerenciar tanto os logs de eventos quanto o Registro.",
      answer: true,
      comment: "Certo. O PowerShell oferece cmdlets poderosos como Get-WinEvent para logs e um provedor de unidade (ex: HKLM:) para navegar e manipular o Registro, permitindo automação de tarefas."
    },
    {
      text: "A colmeia SAM (Security Account Manager) armazena as senhas dos usuários locais em texto plano.",
      answer: false,
      comment: "Errado. A colmeia SAM armazena hashes das senhas dos usuários locais, não as senhas em texto plano. O acesso a esta colmeia é altamente restrito."
    },
    {
      text: "A criação de uma 'Exibição Personalizada' (Custom View) no Visualizador de Eventos permite salvar um filtro complexo para reutilização.",
      answer: true,
      comment: "Certo. Exibições personalizadas são muito úteis para monitorar tipos específicos de eventos de múltiplos logs em um único local."
    },
    {
      text: "O Registro do Windows é um único arquivo monolítico localizado em C:\Windows\System32.",
      answer: false,
      comment: "Errado. O Registro é composto por múltiplos arquivos (as colmeias), localizados principalmente em C:\Windows\System32\config e nos perfis de usuário."
    },
    {
      text: "O ID de Evento 4720 no log de Segurança indica que uma conta de usuário foi criada.",
      answer: true,
      comment: "Certo. Monitorar o Evento 4720 é uma boa prática de segurança para detectar a criação de contas não autorizadas."
    },
    {
      text: "O tipo de dados REG_EXPAND_SZ é uma string que pode conter variáveis de ambiente (como %SystemRoot%) que são expandidas quando o valor é lido.",
      answer: true,
      comment: "Certo. Isso permite que os caminhos sejam dinâmicos e não fixos, adaptando-se a diferentes configurações de sistema."
    },
    {
      text: "Os logs de eventos não podem ser encaminhados de um computador para um coletor central.",
      answer: false,
      comment: "Errado. O Encaminhamento de Eventos do Windows (Windows Event Forwarding - WEF) é um recurso poderoso que permite que computadores (fontes) enviem cópias de seus eventos para um servidor central (coletor), facilitando o monitoramento centralizado."
    },
    {
      text: "A virtualização do Registro redireciona tentativas de escrita em áreas protegidas (como HKLM\\Software) para um local por usuário.",
      answer: true,
      comment: "Certo. Esse é um mecanismo de compatibilidade para aplicativos mais antigos que não foram projetados para o UAC, permitindo que eles funcionem sem exigir privilégios de administrador."
    },
    {
      text: "Limpar um log de eventos apaga todos os seus registros, mas um evento indicando que o log foi limpo é sempre gerado.",
      answer: true,
      comment: "Certo. Por exemplo, no log de Segurança, o Evento 1102 é registrado quando o log é limpo, o que é uma pista importante em uma investigação forense."
    },
    {
      text: "A colmeia HKEY_CURRENT_CONFIG contém informações sobre o perfil de hardware atual.",
      answer: true,
      comment: "Certo. É um ponteiro para HKEY_LOCAL_MACHINE\\SYSTEM\\CurrentControlSet\\Hardware Profiles\\Current e é usado por aplicativos para se adaptarem a diferentes configurações de hardware."
    },
    {
      text: "O log 'Forwarded Events' (Eventos Encaminhados) só existe em computadores configurados como coletores de eventos.",
      answer: true,
      comment: "Certo. Este log especial é o destino para eventos que foram encaminhados de outros computadores na rede usando o serviço WEF."
    },
    {
      text: "As permissões do Registro funcionam de forma semelhante às permissões de arquivos NTFS, com controle de acesso para usuários e grupos.",
      answer: true,
      comment: "Certo. É possível definir permissões de Leitura, Controle Total, etc., para chaves do Registro, controlando quem pode visualizar ou modificar as configurações."
    },
    {
      text: "O ID de Evento 7036 no log de Sistema indica que um serviço foi iniciado ou interrompido.",
      answer: true,
      comment: "Certo. Este evento é muito útil para rastrear o estado dos serviços do Windows e diagnosticar problemas relacionados a eles."
    },
    {
      text: "O arquivo .reg é um formato binário para fazer backup do Registro.",
      answer: false,
      comment: "Errado. Um arquivo .reg é um arquivo de texto que contém as alterações do Registro em um formato legível. Ele pode ser aberto em um editor de texto."
    },
    {
      text: "A chave 'WOW6432Node' no Registro é usada para armazenar configurações de aplicativos de 64 bits em um sistema operacional de 32 bits.",
      answer: false,
      comment: "Errado. É o oposto. Em um sistema operacional de 64 bits, a chave WOW6432Node é usada por aplicativos de 32 bits para armazenar suas configurações, redirecionando-os de HKLM\\Software."
    },
    {
      text: "O log de 'Setup' (Instalação) contém eventos relacionados à instalação e remoção de aplicativos e atualizações do Windows.",
      answer: true,
      comment: "Certo. É um log útil para solucionar problemas de instalação de software, patches do Windows Update ou drivers."
    },
    {
      text: "A ferramenta 'System Configuration' (msconfig.exe) pode ser usada para editar diretamente o Registro.",
      answer: false,
      comment: "Errado. O msconfig permite gerenciar serviços e itens de inicialização, mas ele modifica o Registro indiretamente. A ferramenta para edição direta é o 'regedit.exe'."
    },
    {
      text: "O 'Valor Padrão' de uma chave do Registro sempre está vazio.",
      answer: false,
      comment: "Errado. O valor '(Padrão)' de uma chave pode conter dados, assim como qualquer outro valor. Muitas vezes ele está vazio ('valor não definido'), mas não sempre."
    },
    {
      text: "O log de Segurança é o único log que registra informações sobre alterações no próprio Registro.",
      answer: false,
      comment: "Errado. A auditoria de acesso a objetos pode ser habilitada para chaves do Registro, e os eventos resultantes são registrados no log de Segurança, mas outros logs também podem registrar eventos relacionados indiretamente."
    },
    {
      text: "A colmeia HKEY_USERS (HKU) contém os perfis de todos os usuários que já fizeram logon no computador.",
      answer: false,
      comment: "Errado. HKU contém a subchave .DEFAULT e as subchaves apenas para os usuários atualmente carregados (ou seja, o usuário logado e contas de serviço). Os perfis de outros usuários estão inativos no disco."
    },
    {
      text: "O ID de Evento 6005 no log de Sistema indica que o serviço de Log de Eventos foi iniciado.",
      answer: true,
      comment: "Certo. Este evento é um bom indicador de que o sistema foi inicializado corretamente. O evento 6006 indica que o serviço foi interrompido (desligamento)."
    },
    {
      text: "É possível restaurar o Registro para um estado anterior usando um Ponto de Restauração do Sistema.",
      answer: true,
      comment: "Certo. A Restauração do Sistema faz backup de arquivos de sistema e do Registro. Usar um ponto de restauração é uma maneira eficaz de reverter alterações prejudiciais ao Registro."
    },
    {
      text: "Malware frequentemente cria entradas no Registro para garantir sua persistência após a reinicialização.",
      answer: true,
      comment: "Certo. As chaves de inicialização (Run, RunOnce), serviços e outras áreas do Registro são alvos comuns para malware que busca se manter ativo no sistema."
    }
  ]
,
  "linux-caracteristicas-permissoes": [
    {
      text: "O Linux é um sistema operacional, assim como o Windows e o macOS.",
      answer: false,
      comment: "Errado. Tecnicamente, Linux é o kernel (o núcleo do sistema). As 'distribuições Linux' (como Ubuntu, Fedora, Debian) são os sistemas operacionais completos, que combinam o kernel Linux com software e ferramentas."
    },
    {
      text: "No Linux, tudo é tratado como um arquivo, incluindo hardware como discos e impressoras.",
      answer: true,
      comment: "Certo. Este é um princípio fundamental do design do Unix/Linux. Dispositivos são representados por arquivos especiais, geralmente no diretório /dev, o que permite que sejam manipulados com as mesmas ferramentas usadas para arquivos comuns."
    },
    {
      text: "O usuário 'root' é um usuário padrão com permissões limitadas para segurança.",
      answer: false,
      comment: "Errado. O 'root' é o superusuário (superuser) e tem acesso irrestrito a todos os arquivos e comandos do sistema. Operar como root é arriscado e deve ser evitado para tarefas rotineiras."
    },
    {
      text: "O comando 'chmod 777' em um arquivo concede permissões de leitura, escrita e execução para todos: proprietário, grupo e outros.",
      answer: true,
      comment: "Certo. Na notação octal, 7 (binário 111) representa leitura (4) + escrita (2) + execução (1). Portanto, 777 concede permissões totais a todos os níveis."
    },
    {
      text: "O arquivo /etc/passwd armazena os hashes das senhas dos usuários.",
      answer: false,
      comment: "Errado. Em sistemas modernos, /etc/passwd contém informações do usuário (como nome, UID, GID, diretório home), mas os hashes das senhas são armazenados no arquivo /etc/shadow, que tem acesso mais restrito."
    },
    {
      text: "O Linux é um sistema multiusuário e multitarefa por natureza.",
      answer: true,
      comment: "Certo. Ele foi projetado desde o início para permitir que múltiplos usuários trabalhem simultaneamente e que múltiplos processos rodem ao mesmo tempo de forma eficiente."
    },
    {
      text: "O comando 'chown' é usado para alterar as permissões de um arquivo.",
      answer: false,
      comment: "Errado. 'chown' (change owner) é usado para alterar o proprietário (usuário e/ou grupo) de um arquivo. Para alterar as permissões, usa-se o comando 'chmod' (change mode)."
    },
    {
      text: "O diretório /bin contém arquivos binários essenciais para o funcionamento do sistema, disponíveis para todos os usuários.",
      answer: true,
      comment: "Certo. De acordo com o FHS (Filesystem Hierarchy Standard), /bin armazena comandos essenciais como ls, cp, mv, que são necessários mesmo em modo de usuário único."
    },
    {
      text: "O bit SUID (Set User ID) em um executável faz com que ele seja executado com as permissões do usuário que o está executando.",
      answer: false,
      comment: "Errado. O bit SUID faz com que o programa seja executado com as permissões do proprietário do arquivo, não do usuário que o chamou. Isso é usado para permitir que usuários comuns executem tarefas privilegiadas (ex: o comando 'passwd')."
    },
    {
      text: "O shell padrão na maioria das distribuições Linux modernas é o Bash (Bourne Again SHell).",
      answer: true,
      comment: "Certo. O Bash é um interpretador de comandos poderoso e onipresente no mundo Linux, conhecido por seus recursos de script e interatividade."
    },
    {
      text: "O UID (User ID) 0 é reservado para o usuário root.",
      answer: true,
      comment: "Certo. O sistema identifica o superusuário pelo UID 0, independentemente do nome da conta (que é 'root' por convenção)."
    },
    {
      text: "A permissão de 'escrita' (write) em um diretório permite que um usuário crie novos arquivos nesse diretório.",
      answer: true,
      comment: "Certo. A permissão de escrita em um diretório é necessária para criar, excluir, renomear ou mover arquivos dentro dele, independentemente das permissões dos arquivos em si."
    },
    {
      text: "O comando 'sudo' (superuser do) permite que um usuário execute um comando como outro usuário, geralmente o root.",
      answer: true,
      comment: "Certo. 'sudo' é a maneira preferida de executar comandos com privilégios elevados, pois é configurável, registrável (auditoria) e não exige o compartilhamento da senha do root."
    },
    {
      text: "O diretório /etc contém os arquivos de configuração do sistema e dos aplicativos.",
      answer: true,
      comment: "Certo. É o local central para todos os arquivos de configuração do sistema, como configurações de rede, usuários, serviços e software instalado."
    },
    {
      text: "O bit SGID (Set Group ID) em um diretório faz com que qualquer novo arquivo criado nele herde o grupo do usuário que o criou.",
      answer: false,
      comment: "Errado. O bit SGID em um diretório faz com que qualquer novo arquivo ou subdiretório criado nele herde o grupo do diretório pai, não do usuário criador. Isso é útil para pastas de projetos compartilhados."
    },
    {
      text: "O Linux não diferencia maiúsculas de minúsculas nos nomes de arquivos (case-insensitive).",
      answer: false,
      comment: "Errado. A maioria dos sistemas de arquivos Linux (como ext4, XFS) é case-sensitive, o que significa que 'Arquivo.txt', 'arquivo.txt' e 'ARQUIVO.TXT' são três arquivos distintos."
    },
    {
      text: "O arquivo /etc/group define os grupos de usuários do sistema.",
      answer: true,
      comment: "Certo. Este arquivo contém o nome do grupo, o GID (Group ID) e a lista de membros de cada grupo."
    },
    {
      text: "A permissão de 'execução' (execute) em um diretório é necessária para poder entrar nele com o comando 'cd'.",
      answer: true,
      comment: "Certo. Sem a permissão de execução em um diretório, você não pode acessá-lo ou listar seu conteúdo, mesmo que tenha permissão de leitura."
    },
    {
      text: "O comando 'useradd' é usado para adicionar um novo usuário ao sistema.",
      answer: true,
      comment: "Certo. O comando 'useradd' (ou 'adduser' em algumas distribuições) cria uma nova conta de usuário, atualizando os arquivos /etc/passwd, /etc/shadow e /etc/group conforme necessário."
    },
    {
      text: "O diretório /home é onde os diretórios pessoais dos usuários são armazenados.",
      answer: true,
      comment: "Certo. Por convenção, cada usuário tem seu próprio diretório em /home (ex: /home/usuario1), onde pode armazenar seus arquivos pessoais."
    },
    {
      text: "O 'sticky bit' em um diretório permite que qualquer usuário exclua qualquer arquivo dentro dele.",
      answer: false,
      comment: "Errado. O 'sticky bit' (como no diretório /tmp) faz o oposto: ele permite que um arquivo seja excluído apenas pelo proprietário do arquivo, pelo proprietário do diretório ou pelo root, mesmo que outros tenham permissão de escrita no diretório."
    },
    {
      text: "O kernel Linux foi criado por Richard Stallman.",
      answer: false,
      comment: "Errado. O kernel Linux foi criado por Linus Torvalds em 1991. Richard Stallman iniciou o projeto GNU, que forneceu muitas das ferramentas e softwares que rodam sobre o kernel Linux."
    },
    {
      text: "Um usuário pode pertencer a apenas um grupo por vez.",
      answer: false,
      comment: "Errado. Um usuário tem um grupo primário (definido em /etc/passwd), mas pode ser membro de múltiplos grupos secundários (listados em /etc/group)."
    },
    {
      text: "O comando 'chmod u+x arquivo' adiciona a permissão de execução para o proprietário do arquivo.",
      answer: true,
      comment: "Certo. Esta é a notação simbólica: 'u' para usuário (proprietário), '+' para adicionar, e 'x' para execução."
    },
    {
      text: "O diretório /var é usado para armazenar arquivos estáticos que nunca mudam, como bibliotecas.",
      answer: false,
      comment: "Errado. /var (de variável) é usado para armazenar arquivos que mudam de tamanho e conteúdo, como logs (/var/log), e-mails, bancos de dados e arquivos de cache."
    },
    {
      text: "O comando 'su' (substitute user) permite que você troque para a conta root sem precisar da senha do root.",
      answer: false,
      comment: "Errado. Para se tornar root usando 'su', você precisa fornecer a senha da conta root. O comando 'sudo -i' ou 'sudo su' permite se tornar root usando a sua própria senha (se você estiver no arquivo sudoers)."
    },
    {
      text: "As permissões de um arquivo são determinadas por três conjuntos: usuário (proprietário), grupo e outros.",
      answer: true,
      comment: "Certo. Cada conjunto pode ter permissões de leitura (r), escrita (w) e execução (x), formando a base do modelo de permissões do Linux."
    },
    {
      text: "O diretório /tmp é um local para armazenamento permanente de arquivos importantes.",
      answer: false,
      comment: "Errado. O diretório /tmp é para arquivos temporários e seu conteúdo é geralmente apagado durante a reinicialização do sistema."
    },
    {
      text: "O comando 'ls -l' exibe as permissões de um arquivo em formato octal.",
      answer: false,
      comment: "Errado. 'ls -l' exibe as permissões em formato simbólico (ex: -rwxr-xr--). Para ver em formato octal, você pode usar o comando 'stat -c \"%a\" nome_do_arquivo'."
    },
    {
      text: "O Linux é um software proprietário e seu código-fonte não é publicamente acessível.",
      answer: false,
      comment: "Errado. O kernel Linux é o exemplo mais famoso de software de código aberto e livre (FOSS). Seu código-fonte está disponível para qualquer pessoa ver, modificar e distribuir, sob a licença GPLv2."
    },
    {
      text: "O comando 'usermod' pode ser usado para modificar atributos de uma conta de usuário existente, como seu grupo primário ou diretório home.",
      answer: true,
      comment: "Certo. 'usermod' é a ferramenta de linha de comando para alterar as propriedades de um usuário que já foi criado."
    },
    {
      text: "O diretório /proc é um sistema de arquivos virtual que contém informações sobre os processos e o sistema.",
      answer: true,
      comment: "Certo. Os 'arquivos' em /proc não existem no disco; eles são gerados pelo kernel em tempo real e fornecem uma interface para visualizar e alterar parâmetros do sistema e dos processos."
    },
    {
      text: "A máscara 'umask' define as permissões padrão que são removidas de novos arquivos e diretórios.",
      answer: true,
      comment: "Certo. Se o umask é 022, as permissões de escrita para grupo e outros são removidas. Um novo arquivo (base 666) seria criado com 644, e um diretório (base 777) com 755."
    },
    {
      text: "O comando 'groupadd' cria um novo grupo e automaticamente adiciona todos os usuários existentes a ele.",
      answer: false,
      comment: "Errado. 'groupadd' apenas cria um novo grupo vazio. Os usuários precisam ser adicionados explicitamente ao grupo usando o comando 'usermod' ou 'gpasswd'."
    },
    {
      text: "O sistema de arquivos padrão na maioria das distribuições Linux modernas é o NTFS.",
      answer: false,
      comment: "Errado. O NTFS é o sistema de arquivos padrão do Windows. O sistema de arquivos mais comum no Linux é o ext4, com outros como XFS e Btrfs também sendo populares."
    },
    {
      text: "O comando 'chgrp' é um atalho para alterar tanto o proprietário quanto o grupo de um arquivo.",
      answer: false,
      comment: "Errado. 'chgrp' (change group) altera apenas o grupo proprietário de um arquivo. Para alterar ambos, você pode usar 'chown usuario:grupo arquivo'."
    },
    {
      text: "O arquivo .bashrc no diretório home de um usuário é executado toda vez que uma nova sessão de terminal interativa é iniciada.",
      answer: true,
      comment: "Certo. É o local comum para definir aliases, variáveis de ambiente e outras personalizações para o shell do usuário."
    },
    {
      text: "A permissão de leitura (read) em um arquivo permite que você o execute como um programa.",
      answer: false,
      comment: "Errado. Para executar um arquivo (seja um script ou um binário), você precisa da permissão de execução (execute). A permissão de leitura apenas permite visualizar seu conteúdo."
    },
    {
      text: "O diretório /root é o diretório home para todos os usuários do sistema.",
      answer: false,
      comment: "Errado. /root é o diretório home exclusivo para o superusuário (root). Os diretórios home dos usuários padrão ficam em /home."
    },
    {
      text: "O comando 'passwd' sem argumentos permite que um usuário altere sua própria senha.",
      answer: true,
      comment: "Certo. Quando executado por um usuário normal, 'passwd' inicia o processo para que ele altere sua própria senha. O root pode usar 'passwd nome_de_usuario' para alterar a senha de qualquer usuário."
    },
    {
      text: "O Linux não possui um registro central como o Registro do Windows.",
      answer: true,
      comment: "Certo. A configuração no Linux é descentralizada e baseada em arquivos de texto simples, localizados principalmente no diretório /etc."
    },
    {
      text: "O comando 'chmod 644 arquivo' define permissões de leitura/escrita para o proprietário e leitura para todos os outros.",
      answer: true,
      comment: "Certo. 6 (rw-) para o proprietário, 4 (r--) para o grupo, e 4 (r--) para outros. Esta é uma permissão muito comum para arquivos de dados."
    },
    {
      text: "O GID (Group ID) 0 é reservado para o grupo 'users'.",
      answer: false,
      comment: "Errado. O GID 0 é reservado para o grupo 'root', o grupo primário do superusuário."
    },
    {
      text: "O comando 'userdel' exclui um usuário, mas mantém seu diretório home por padrão.",
      answer: true,
      comment: "Certo. Para excluir também o diretório home e o spool de e-mail do usuário, você deve usar a opção -r ('userdel -r nome_de_usuario')."
    },
    {
      text: "O diretório /boot contém os arquivos necessários para a inicialização do sistema, incluindo o kernel Linux.",
      answer: true,
      comment: "Certo. É um diretório crítico que armazena o kernel, o initramfs e os arquivos de configuração do gerenciador de inicialização (como o GRUB)."
    },
    {
      text: "O comando 'id' mostra as informações de UID, GID e grupos de um usuário.",
      answer: true,
      comment: "Certo. Executar 'id' ou 'id nome_de_usuario' é uma maneira rápida de verificar a identidade e as afiliações de grupo de um usuário."
    },
    {
      text: "O Linux é imune a vírus e malware.",
      answer: false,
      comment: "Errado. Embora seja menos visado e tenha uma arquitetura de permissões mais segura que outros sistemas, o Linux não é imune. Malware para Linux existe, especialmente para servidores."
    },
    {
      text: "O arquivo /etc/sudoers define quais usuários podem usar o comando 'sudo' e quais comandos eles podem executar.",
      answer: true,
      comment: "Certo. Este arquivo contém as regras que governam o acesso do sudo. Ele deve ser editado com a ferramenta 'visudo' para garantir que a sintaxe esteja correta."
    },
    {
      text: "Qualquer usuário pode montar e desmontar sistemas de arquivos.",
      answer: false,
      comment: "Errado. Montar e desmontar sistemas de arquivos (comandos 'mount' e 'umount') são operações privilegiadas que geralmente exigem permissões de root."
    }
  ]
,
  "linux-servicos-shell": [
    {
      text: "O comando 'systemctl start apache2' é usado para iniciar o servidor web Apache em sistemas que usam systemd.",
      answer: true,
      comment: "Certo. 'systemctl' é a ferramenta primária para gerenciar serviços em sistemas Linux modernos como Debian, Ubuntu, CentOS 7+ e Fedora. 'start', 'stop', 'restart', 'status' e 'enable' são subcomandos comuns."
    },
    {
      text: "O arquivo de configuração principal do servidor web Nginx é geralmente o httpd.conf.",
      answer: false,
      comment: "Errado. httpd.conf é o arquivo de configuração tradicional do Apache. O arquivo de configuração principal do Nginx é tipicamente /etc/nginx/nginx.conf."
    },
    {
      text: "O comando 'grep' é usado exclusivamente para contar o número de arquivos em um diretório.",
      answer: false,
      comment: "Errado. 'grep' (Global Regular Expression Print) é uma ferramenta poderosa para buscar padrões de texto dentro de arquivos. Para contar arquivos, comandos como 'ls | wc -l' são mais apropriados."
    },
    {
      text: "Samba é um serviço que permite compartilhar arquivos e impressoras com computadores Windows em uma rede.",
      answer: true,
      comment: "Certo. O Samba implementa o protocolo SMB/CIFS, permitindo que um servidor Linux atue como um servidor de arquivos e domínio em redes Windows."
    },
    {
      text: "O comando 'tail -f /var/log/syslog' exibe o final do arquivo de log e para.",
      answer: false,
      comment: "Errado. A opção '-f' (follow) faz com que o 'tail' continue monitorando o arquivo e exiba novas linhas à medida que são adicionadas, sendo ideal para visualização de logs em tempo real."
    },
    {
      text: "O Postfix é um servidor de proxy reverso.",
      answer: false,
      comment: "Errado. Postfix é um MTA (Mail Transfer Agent), ou seja, um servidor de correio eletrônico. Exemplos de proxy reverso são Nginx e HAProxy."
    },
    {
      text: "O comando 'find / -name '*.log'' procura por todos os arquivos com a extensão .log a partir do diretório raiz.",
      answer: true,
      comment: "Certo. O comando 'find' é usado para localizar arquivos e diretórios com base em critérios como nome, tamanho, data de modificação e permissões."
    },
    {
      text: "O 'journald' é o sistema de gerenciamento de logs introduzido pelo systemd, e seus logs são armazenados em formato de texto plano em /var/log.",
      answer: false,
      comment: "Errado. Embora o journald gerencie os logs, ele os armazena em um formato binário indexado, geralmente em /var/log/journal. O comando 'journalctl' é usado para consultá-los."
    },
    {
      text: "O comando 'awk' é uma linguagem de programação projetada para processamento de texto e manipulação de dados baseada em colunas.",
      answer: true,
      comment: "Certo. 'awk' é extremamente útil para extrair e formatar dados de arquivos de texto ou da saída de outros comandos, como logs e relatórios."
    },
    {
      text: "NFS (Network File System) é um protocolo desenvolvido pela Microsoft para compartilhamento de arquivos em rede.",
      answer: false,
      comment: "Errado. O NFS foi desenvolvido pela Sun Microsystems e é o padrão tradicional para compartilhamento de arquivos em redes Unix/Linux."
    },
    {
      text: "O comando 'sed' (Stream Editor) é usado para filtrar e transformar texto de forma interativa em um editor visual.",
      answer: false,
      comment: "Errado. 'sed' é um editor de fluxo não interativo. Ele opera em fluxos de texto (arquivos ou pipes) e aplica um script de comandos de edição, sendo poderoso para substituições em lote."
    },
    {
      text: "O servidor proxy Squid pode ser usado para filtrar conteúdo web e fazer cache de requisições para melhorar o desempenho.",
      answer: true,
      comment: "Certo. O Squid é um proxy de cache muito popular que pode ser configurado para controle de acesso, filtragem de URLs e economia de banda através do armazenamento de conteúdo acessado frequentemente."
    },
    {
      text: "O comando 'ps aux' lista todos os processos em execução no sistema.",
      answer: true,
      comment: "Certo. 'ps' (process status) com as opções 'aux' (sintaxe BSD) mostra todos os processos ('a'), incluindo os sem terminal ('x'), com detalhes do usuário ('u')."
    },
    {
      text: "O arquivo /etc/exports é usado para configurar os compartilhamentos do Samba.",
      answer: false,
      comment: "Errado. O arquivo /etc/exports é usado para configurar os compartilhamentos do NFS. A configuração do Samba fica no arquivo /etc/samba/smb.conf."
    },
    {
      text: "Um pipe '|' no shell é usado para redirecionar a saída padrão de um comando para a entrada padrão de outro.",
      answer: true,
      comment: "Certo. Este é um dos recursos mais poderosos do shell, permitindo encadear comandos simples para realizar tarefas complexas. Ex: 'ls -l | grep .txt'."
    },
    {
      text: "O Apache é um servidor web conhecido por sua arquitetura orientada a eventos e baixo consumo de memória, ideal para muitas conexões simultâneas.",
      answer: false,
      comment: "Errado. Essa descrição se encaixa melhor no Nginx. O Apache tradicionalmente usa um modelo baseado em processos ou threads, que pode consumir mais recursos sob alta carga."
    },
    {
      text: "O comando 'journalctl -u nginx' mostra os logs específicos do serviço (unit) nginx.",
      answer: true,
      comment: "Certo. Usar a opção '-u' com 'journalctl' é a maneira correta de filtrar os logs para ver as entradas de um serviço systemd específico."
    },
    {
      text: "O arquivo de configuração principal do Sendmail, um servidor de e-mail, é conhecido por sua simplicidade e fácil leitura.",
      answer: false,
      comment: "Errado. O arquivo sendmail.cf é notoriamente complexo e críptico. Servidores como Postfix foram criados como alternativas mais seguras e fáceis de configurar."
    },
    {
      text: "O comando 'kill -9 PID' envia um sinal SIGKILL para um processo, que pode ser ignorado pelo processo para um desligamento seguro.",
      answer: false,
      comment: "Errado. O sinal 9 (SIGKILL) é um sinal especial que não pode ser capturado ou ignorado pelo processo. Ele força o término imediato do processo pelo kernel, o que pode levar à corrupção de dados."
    },
    {
      text: "O redirecionador '>>' anexa a saída de um comando ao final de um arquivo, sem apagar seu conteúdo existente.",
      answer: true,
      comment: "Certo. Enquanto um único '>' sobrescreve o arquivo, '>>' é usado para anexar (append), o que é útil para criar arquivos de log, por exemplo."
    },
    {
      text: "O Zsh (Z Shell) é um shell alternativo ao Bash que oferece recursos avançados como autocompletar aprimorado e temas.",
      answer: true,
      comment: "Certo. O Zsh, especialmente quando combinado com frameworks como 'Oh My Zsh', é muito popular por sua extensibilidade e recursos que melhoram a produtividade na linha de comando."
    },
    {
      text: "O arquivo /etc/resolv.conf especifica os servidores proxy que o sistema deve usar.",
      answer: false,
      comment: "Errado. O arquivo /etc/resolv.conf é usado para configurar os servidores DNS (Domain Name System) que o sistema utiliza para resolver nomes de domínio."
    },
    {
      text: "O comando 'top' fornece uma visão estática dos processos do sistema, tirada no momento em que o comando é executado.",
      answer: false,
      comment: "Errado. 'top' (e seu sucessor 'htop') fornece uma visão dinâmica e em tempo real dos processos, atualizando a lista a cada poucos segundos para mostrar o uso de CPU, memória e outras métricas."
    },
    {
      text: "Em um servidor web Apache, os arquivos de log de acesso e de erro são comumente encontrados em /var/log/apache2/.",
      answer: true,
      comment: "Certo. Em distribuições baseadas em Debian/Ubuntu, este é o diretório padrão. Os arquivos access.log (quem acessou o quê) e error.log (erros do servidor) são cruciais para a administração."
    },
    {
      text: "O comando 'curl' é uma ferramenta de linha de comando para transferir dados de ou para um servidor, usando vários protocolos, incluindo HTTP e FTP.",
      answer: true,
      comment: "Certo. 'curl' é uma ferramenta de rede extremamente versátil, usada para testar APIs, baixar arquivos e automatizar interações com serviços web."
    },
    {
      text: "O serviço 'cron' é responsável por gerenciar conexões de rede de entrada.",
      answer: false,
      comment: "Errado. 'cron' é um daemon para agendar a execução de tarefas (scripts e comandos) em horários ou intervalos específicos. O firewall (ex: iptables, firewalld) gerencia conexões de entrada."
    },
    {
      text: "O comando 'chmod +x script.sh' torna o arquivo 'script.sh' executável.",
      answer: true,
      comment: "Certo. A opção '+x' adiciona a permissão de execução para o proprietário, grupo e outros, permitindo que o arquivo seja executado como um programa."
    },
    {
      text: "O servidor de correio Dovecot é um MTA (Mail Transfer Agent) completo, responsável por enviar e receber e-mails da internet.",
      answer: false,
      comment: "Errado. Dovecot é um MDA (Mail Delivery Agent), especializado em servir como servidor IMAP e POP3, permitindo que os clientes de e-mail acessem suas caixas de correio. Ele trabalha em conjunto com um MTA como o Postfix."
    },
    {
      text: "O comando 'df -h' mostra o espaço livre em disco dos sistemas de arquivos montados em formato legível por humanos (human-readable).",
      answer: true,
      comment: "Certo. 'df' (disk free) mostra o uso do disco, e a opção '-h' converte os valores de bytes para Kilobytes (K), Megabytes (M) e Gigabytes (G), facilitando a leitura."
    },
    {
      text: "O arquivo .htaccess fornece uma maneira de fazer alterações de configuração em todo o servidor Apache.",
      answer: false,
      comment: "Errado. O arquivo .htaccess permite fazer alterações de configuração por diretório. As configurações globais do servidor estão no arquivo principal, como o apache2.conf ou httpd.conf."
    },
    {
      text: "O comando 'ssh user@host' inicia uma conexão de shell seguro com o servidor 'host' como o usuário 'user'.",
      answer: true,
      comment: "Certo. SSH (Secure Shell) é o protocolo padrão para acesso remoto seguro e administração de servidores Linux."
    },
    {
      text: "O rsyslog é uma versão mais antiga e menos capaz do syslog, sendo raramente usado hoje.",
      answer: false,
      comment: "Errado. O rsyslog é uma implementação aprimorada e muito poderosa do syslog ('rocket-fast system for log processing'), com recursos avançados como filtragem, envio de logs pela rede (TCP) e armazenamento em banco de dados."
    },
    {
      text: "O comando 'tar -czvf arquivo.tar.gz /diretorio' cria um arquivo compactado com gzip a partir de um diretório.",
      answer: true,
      comment: "Certo. 'tar' é o utilitário de arquivamento. As opções significam: 'c' (create), 'z' (gzip), 'v' (verbose, mostra os arquivos) e 'f' (file, especifica o nome do arquivo de saída)."
    },
    {
      text: "Um Virtual Host em Nginx ou Apache permite hospedar múltiplos sites (domínios) em um único servidor com um único endereço IP.",
      answer: true,
      comment: "Certo. Esta é uma funcionalidade essencial para a hospedagem web, permitindo que o servidor identifique qual site servir com base no nome do host na requisição HTTP."
    },
    {
      text: "O comando 'ln -s /caminho/original /caminho/link' cria um link físico (hard link).",
      answer: false,
      comment: "Errado. A opção '-s' cria um link simbólico (symbolic link ou symlink), que é um ponteiro para o caminho do arquivo original. Um link físico, criado sem a opção '-s', aponta diretamente para o inode do arquivo."
    },
    {
      text: "O logrotate é um utilitário usado para rotacionar, compactar e excluir arquivos de log automaticamente para evitar que eles consumam todo o espaço em disco.",
      answer: true,
      comment: "Certo. O logrotate é essencial para a administração de sistemas, gerenciando o ciclo de vida dos arquivos de log gerados por serviços e pelo sistema."
    },
    {
      text: "O comando 'wget' é usado para editar arquivos de texto na linha de comando.",
      answer: false,
      comment: "Errado. 'wget' é um utilitário não-interativo para baixar arquivos da web. Para editar arquivos de texto, são usados editores como 'nano', 'vim' ou 'emacs'."
    },
    {
      text: "O servidor de arquivos NFS não possui mecanismos de segurança e permite que qualquer máquina na rede acesse os compartilhamentos.",
      answer: false,
      comment: "Errado. Embora as versões mais antigas do NFS tivessem segurança limitada, as versões modernas (NFSv4) suportam mecanismos de autenticação fortes como Kerberos e ACLs (Access Control Lists) para controle de acesso granular."
    },
    {
      text: "O comando 'history' exibe uma lista dos comandos executados anteriormente na sessão atual do shell.",
      answer: true,
      comment: "Certo. O shell mantém um histórico de comandos, que pode ser visualizado com 'history' e acessado com as setas do teclado ou com atalhos como '!!' (último comando)."
    },
    {
      text: "O arquivo /etc/hosts é um mapa local de endereços IP para nomes de host, que é consultado antes de uma requisição DNS ser feita.",
      answer: true,
      comment: "Certo. Este arquivo pode ser usado para forçar a resolução de um nome de domínio para um IP específico, útil para testes de desenvolvimento ou para bloquear acesso a certos sites."
    },
    {
      text: "O comando 'systemctl enable sshd' inicia o serviço sshd imediatamente.",
      answer: false,
      comment: "Errado. 'systemctl enable' configura o serviço para ser iniciado automaticamente durante o boot do sistema. Para iniciá-lo imediatamente, usa-se 'systemctl start sshd'."
    },
    {
      text: "O servidor de correio Exim é outro exemplo de MTA (Mail Transfer Agent), assim como Postfix e Sendmail.",
      answer: true,
      comment: "Certo. Exim é um MTA flexível e popular, usado por muitos provedores de hospedagem e sistemas de e-mail."
    },
    {
      text: "O comando 'du -sh /diretorio' calcula e exibe o tamanho total do diretório em formato legível por humanos.",
      answer: true,
      comment: "Certo. 'du' (disk usage) calcula o espaço usado por arquivos e diretórios. A opção '-s' (summarize) mostra apenas o total, e '-h' (human-readable) formata o resultado."
    },
    {
      text: "Um servidor proxy transparente intercepta o tráfego da rede sem que o cliente precise de qualquer configuração especial.",
      answer: true,
      comment: "Certo. O roteador ou gateway da rede redireciona o tráfego para o proxy de forma transparente, sendo uma forma comum de implementar filtragem de conteúdo em redes corporativas ou de provedores."
    },
    {
      text: "O comando 'alias ll='ls -l'' cria um atalho permanente 'll' que funcionará em todas as futuras sessões do terminal.",
      answer: false,
      comment: "Errado. Um alias definido diretamente na linha de comando é válido apenas para a sessão atual. Para torná-lo permanente, a definição deve ser adicionada a um arquivo de inicialização do shell, como o ~/.bashrc."
    },
    {
      text: "O arquivo de log /var/log/auth.log (ou /var/log/secure em sistemas Red Hat) registra eventos de autenticação de usuários, como logins e uso do sudo.",
      answer: true,
      comment: "Certo. Este é um dos logs mais importantes para a segurança do sistema, pois permite auditar tentativas de acesso, bem-sucedidas ou não."
    },
    {
      text: "O comando 'diff arquivo1 arquivo2' mostra as diferenças entre os dois arquivos.",
      answer: true,
      comment: "Certo. 'diff' é um utilitário fundamental para comparar arquivos linha por linha e é a base para muitas ferramentas de controle de versão, como o Git."
    },
    {
      text: "O servidor web Lighttpd é conhecido por ser pesado e consumir muitos recursos, sendo adequado para grandes aplicações empresariais.",
      answer: false,
      comment: "Errado. Lighttpd ('lighty') é conhecido pelo oposto: é um servidor web extremamente leve, rápido e com baixo consumo de recursos, otimizado para ambientes com restrição de memória e alta performance."
    },
    {
      text: "O comando 'crontab -e' permite editar o arquivo de tarefas agendadas do usuário atual.",
      answer: true,
      comment: "Certo. Este comando abre o arquivo crontab do usuário no editor de texto padrão, permitindo adicionar, remover ou modificar as tarefas agendadas pelo cron."
    }
  ]
,
  "mobile-so-seguranca": [
    {
      text: "A arquitetura do Android é baseada no kernel do Windows.",
      answer: false,
      comment: "Errado. A arquitetura do Android é baseada em um kernel Linux modificado, que gerencia os drivers, a energia, a memória e os processos."
    },
    {
      text: "No iOS, todos os aplicativos rodam em um ambiente 'sandboxed', o que significa que eles têm acesso limitado aos arquivos de outros aplicativos e ao sistema operacional.",
      answer: true,
      comment: "Certo. O sandboxing é um pilar da segurança do iOS. Cada aplicativo tem seu próprio contêiner, restringindo o acesso a dados e recursos do sistema, minimizando o dano que um app malicioso pode causar."
    },
    {
      text: "O Android utiliza a Dalvik Virtual Machine (DVM) em suas versões mais recentes para executar aplicativos.",
      answer: false,
      comment: "Errado. A DVM foi usada em versões mais antigas. A partir do Android 5.0 (Lollipop), ela foi substituída pelo Android Runtime (ART), que usa compilação Ahead-Of-Time (AOT) para melhor desempenho."
    },
    {
      text: "O iOS permite que os usuários instalem aplicativos de qualquer fonte (sideloading) sem restrições, assim como o Android.",
      answer: false,
      comment: "Errado. Por padrão, o iOS só permite a instalação de aplicativos através da App Store oficial. O sideloading é restrito e geralmente requer uma conta de desenvolvedor ou o uso de ferramentas específicas, ao contrário do Android, que permite a instalação de APKs de fontes desconhecidas com uma simples permissão do usuário."
    },
    {
      text: "No Android, as permissões são concedidas em tempo de instalação e não podem ser alteradas posteriormente.",
      answer: false,
      comment: "Errado. Desde o Android 6.0 (Marshmallow), o sistema adotou um modelo de permissões em tempo de execução (runtime permissions), onde os aplicativos solicitam permissões conforme precisam delas, e o usuário pode conceder ou negar cada uma individualmente a qualquer momento nas configurações."
    },
    {
      text: "A criptografia de dados em repouso (data-at-rest) é habilitada por padrão em todos os dispositivos iOS modernos.",
      answer: true,
      comment: "Certo. O iOS implementa a criptografia em nível de arquivo (File Data Protection) em todos os dispositivos com o Secure Enclave, protegendo os dados do usuário mesmo que o dispositivo seja fisicamente comprometido."
    },
    {
      text: "O gerenciamento de processos no iOS permite que os aplicativos continuem rodando em segundo plano com funcionalidade total por tempo indeterminado.",
      answer: false,
      comment: "Errado. O iOS é muito restritivo com a execução em segundo plano para economizar bateria. Os aplicativos são geralmente suspensos, com exceção de tarefas específicas como reprodução de áudio, serviços de localização ou downloads, que têm APIs dedicadas e tempo limitado."
    },
    {
      text: "A camada de Hardware Abstraction Layer (HAL) no Android serve para que o código de nível superior seja agnóstico em relação à implementação dos drivers de hardware.",
      answer: true,
      comment: "Certo. A HAL fornece uma interface padrão para os componentes de hardware (como câmera e Bluetooth), permitindo que o Android funcione em diferentes dispositivos sem precisar conhecer os detalhes de baixo nível de cada um."
    },
    {
      text: "O Secure Enclave no iOS é uma área na memória principal usada para armazenar dados de aplicativos de forma segura.",
      answer: false,
      comment: "Errado. O Secure Enclave é um coprocessador de segurança dedicado, fisicamente isolado do processador principal. Ele gerencia as chaves de criptografia e protege dados sensíveis, como informações biométricas, mesmo que o kernel do sistema seja comprometido."
    },
    {
      text: "No Android, um processo de aplicativo pode ser encerrado pelo sistema a qualquer momento se houver pouca memória, mesmo que esteja em primeiro plano.",
      answer: false,
      comment: "Errado. O sistema Android prioriza os processos. Um processo em primeiro plano (foreground) tem a prioridade mais alta e é o último a ser encerrado em uma situação de pouca memória. Processos em cache ou vazios são os primeiros a serem eliminados."
    },
    {
      text: "O framework Cocoa Touch é a camada de desenvolvimento de aplicativos para o Android.",
      answer: false,
      comment: "Errado. Cocoa Touch é o framework de UI para o iOS, contendo componentes como UIKit. O framework de UI para o Android é o Android UI Toolkit, que inclui componentes como Views e Widgets."
    },
    {
      text: "O Android utiliza um sistema de 'Intents' para permitir a comunicação e a solicitação de ações entre diferentes componentes de aplicativos.",
      answer: true,
      comment: "Certo. Intents são objetos de mensagem que podem ser usados para solicitar uma ação de outro componente do aplicativo, como iniciar uma Activity, um Service ou um Broadcast Receiver, facilitando a interoperação."
    },
    {
      text: "O Gatekeeper no iOS é o responsável por verificar se os aplicativos têm assinaturas de desenvolvedor válidas antes de serem executados.",
      answer: true,
      comment: "Certo. Embora mais associado ao macOS, o conceito é central no iOS: o sistema verifica a assinatura criptográfica de cada aplicativo para garantir que ele venha de um desenvolvedor aprovado pela Apple e não tenha sido modificado."
    },
    {
      text: "O gerenciamento de memória no Android depende de um Garbage Collector (GC) para liberar automaticamente a memória não utilizada pelos aplicativos.",
      answer: true,
      comment: "Certo. Tanto a DVM quanto o ART usam coleta de lixo para gerenciar a memória, simplificando o desenvolvimento, mas podendo causar pequenas pausas na execução do aplicativo durante o ciclo de coleta."
    },
    {
      text: "O iOS usa um sistema de contagem de referências (Automatic Reference Counting - ARC) para gerenciamento de memória, em vez de um garbage collector tradicional.",
      answer: true,
      comment: "Certo. O ARC, usado com as linguagens Swift e Objective-C, insere automaticamente o código de gerenciamento de memória em tempo de compilação. Ele libera os objetos quando não há mais referências a eles, oferecendo um desempenho mais previsível que o garbage collection."
    },
    {
      text: "A permissão 'WRITE_EXTERNAL_STORAGE' no Android dá a um aplicativo acesso irrestrito a todos os arquivos do sistema.",
      answer: false,
      comment: "Errado. Essa permissão (agora legada) dava acesso ao armazenamento externo compartilhado, mas não aos diretórios de sistema ou aos dados privados de outros aplicativos. Com o Scoped Storage, o acesso foi ainda mais restringido."
    },
    {
      text: "A arquitetura do iOS possui uma camada chamada 'Core OS' que contém recursos de baixo nível, como o kernel XNU e drivers de dispositivo.",
      answer: true,
      comment: "Certo. A camada Core OS é a base do iOS, localizada diretamente sobre o hardware do dispositivo. Ela gerencia a memória, o sistema de arquivos, a rede e outras operações fundamentais."
    },
    {
      text: "O 'sandboxing' no Android é implementado atribuindo um User ID (UID) único para cada aplicativo no momento da instalação.",
      answer: true,
      comment: "Certo. O kernel Linux usa esse UID para isolar os aplicativos em nível de processo. Cada aplicativo roda como um usuário diferente, e as permissões de arquivo do Linux impedem que um aplicativo acesse os dados de outro."
    },
    {
      text: "Um processo 'zumbi' no Android é um processo que consome grandes quantidades de CPU em segundo plano.",
      answer: false,
      comment: "Errado. Um processo zumbi (um conceito do Unix/Linux) é um processo que terminou sua execução, mas sua entrada ainda permanece na tabela de processos, geralmente porque o processo pai ainda não leu seu status de saída. Ele não consome CPU ou memória."
    },
    {
      text: "O iOS utiliza um sistema de arquivos chamado APFS (Apple File System), que é otimizado para armazenamento flash e inclui recursos como criptografia forte.",
      answer: true,
      comment: "Certo. O APFS substituiu o HFS+ e foi projetado para escalabilidade e segurança, oferecendo recursos como snapshots, clonagem e criptografia multi-chave."
    },
    {
      text: "No Android, as 'Activities' são responsáveis por desenhar a interface do usuário e lidar com a interação do usuário.",
      answer: true,
      comment: "Certo. Uma Activity representa uma única tela com uma interface de usuário. Um aplicativo é geralmente composto por múltiplas activities."
    },
    {
      text: "A criptografia de dados em trânsito no iOS é garantida pela funcionalidade 'App Transport Security' (ATS), que exige o uso de HTTPS.",
      answer: true,
      comment: "Certo. A ATS impõe práticas recomendadas de conexão segura, exigindo que as comunicações de rede dos aplicativos usem o protocolo HTTPS com cifras fortes, bloqueando conexões inseguras por padrão."
    },
    {
      text: "O kernel do iOS, conhecido como XNU, é um kernel monolítico como o Linux.",
      answer: false,
      comment: "Errado. O XNU é um kernel híbrido, combinando partes de um kernel monolítico (como o Mach) e de um kernel do tipo BSD. Isso permite uma arquitetura modular e flexível."
    },
    {
      text: "O Google Play Protect é um serviço que verifica os aplicativos instalados no dispositivo Android em busca de comportamento malicioso.",
      answer: true,
      comment: "Certo. O Google Play Protect é a defesa contra malware integrada do Android. Ele escaneia aplicativos da Play Store antes do download e verifica periodicamente os aplicativos no dispositivo."
    },
    {
      text: "No iOS, um aplicativo pode solicitar acesso a todos os contatos do usuário sem que o usuário seja notificado.",
      answer: false,
      comment: "Errado. O acesso a dados sensíveis como contatos, localização, fotos e microfone é protegido por um modelo de permissão explícita. O iOS sempre exibirá um pop-up de consentimento para o usuário aprovar ou negar a solicitação."
    },
    {
      text: "O gerenciamento de memória no Android usa um mecanismo chamado 'Low Memory Killer' (LMK) para encerrar processos quando a memória está baixa.",
      answer: true,
      comment: "Certo. O LMK é um processo do kernel que monitora o estado da memória e encerra processos com base em sua prioridade (oom_score_adj) para liberar recursos e manter o sistema responsivo."
    },
    {
      text: "A arquitetura do Android inclui uma camada de 'Application Framework' que fornece APIs de alto nível para os desenvolvedores, como o Gerenciador de Atividades e de Notificações.",
      answer: true,
      comment: "Certo. Esta camada permite que os desenvolvedores acessem os recursos do sistema de forma padronizada, sem precisar interagir diretamente com as camadas inferiores, como o kernel."
    },
    {
      text: "O 'jailbreaking' em um dispositivo iOS remove as restrições de software impostas pela Apple, permitindo a instalação de aplicativos não oficiais e modificações no sistema.",
      answer: true,
      comment: "Certo. O jailbreaking explora vulnerabilidades para obter acesso root ao sistema operacional, desativando mecanismos de segurança como o sandboxing e a verificação de assinatura de código."
    },
    {
      text: "O Android sempre usou criptografia baseada em arquivo (File-Based Encryption - FBE).",
      answer: false,
      comment: "Errado. Versões mais antigas do Android usavam criptografia de disco completo (Full-Disk Encryption - FDE). A FBE foi introduzida no Android 7.0, permitindo que diferentes arquivos sejam criptografados com chaves diferentes e que funcionalidades básicas do telefone (como alarmes e chamadas) funcionem antes do usuário digitar a senha."
    },
    {
      text: "No iOS, os processos em segundo plano são gerenciados pelo daemon 'dasd' (Duet Activity Scheduler), que usa inteligência para decidir quando executá-los para otimizar a bateria.",
      answer: true,
      comment: "Certo. O Duet Activity Scheduler analisa os padrões de uso do usuário para agendar atividades em segundo plano (como atualizações e downloads) em momentos oportunos, como quando o dispositivo está conectado à energia e ao Wi-Fi."
    },
    {
      text: "Fazer 'root' em um dispositivo Android é o processo de obter privilégios de superusuário (root), semelhante ao jailbreaking no iOS.",
      answer: true,
      comment: "Certo. O 'rooting' permite ao usuário controle total sobre o sistema, possibilitando a modificação de arquivos de sistema, a remoção de aplicativos pré-instalados e a instalação de software que requer acesso profundo."
    },
    {
      text: "O iOS não possui um mecanismo de 'garbage collection' porque sua linguagem nativa, Swift, gerencia a memória de forma manual.",
      answer: false,
      comment: "Errado. Embora não use um garbage collector tradicional, o gerenciamento de memória não é puramente manual. O Swift usa o ARC (Automatic Reference Counting), que automatiza grande parte do processo em tempo de compilação, sendo mais eficiente e previsível."
    },
    {
      text: "O SELinux (Security-Enhanced Linux) no Android é usado para aplicar políticas de controle de acesso obrigatório (MAC), reforçando o sandboxing de aplicativos.",
      answer: true,
      comment: "Certo. O SELinux opera em modo 'enforcing' em versões recentes do Android, definindo regras estritas sobre o que cada processo (incluindo aplicativos e serviços do sistema) pode fazer, mesmo que tenha privilégios de root, limitando o potencial de exploração de vulnerabilidades."
    },
    {
      text: "A arquitetura do iOS é dividida em quatro camadas principais: Core OS, Core Services, Media e Cocoa Touch.",
      answer: true,
      comment: "Certo. Esta é a estrutura de alto nível da arquitetura do iOS, indo da camada mais próxima do hardware (Core OS) até a camada de interface com o usuário e desenvolvimento de aplicativos (Cocoa Touch)."
    },
    {
      text: "No Android, um 'Service' é um componente de aplicativo que pode realizar operações de longa duração em segundo plano, sem fornecer uma interface de usuário.",
      answer: true,
      comment: "Certo. Services são usados para tarefas como tocar música, fazer downloads ou sincronizar dados, e podem continuar rodando mesmo quando o usuário muda para outro aplicativo."
    },
    {
      text: "A App Store da Apple revisa todos os aplicativos manualmente antes de serem publicados, uma medida de segurança para filtrar malware e apps de baixa qualidade.",
      answer: true,
      comment: "Certo. O processo de revisão da App Store é uma das principais defesas do ecossistema iOS, analisando os aplicativos em busca de violações de políticas, problemas de segurança e bugs antes que cheguem aos usuários."
    },
    {
      text: "O Zygote no Android é o processo responsável por gerenciar as conexões de rede.",
      answer: false,
      comment: "Errado. O Zygote é um processo fundamental do sistema Android que é iniciado no boot. Ele pré-carrega as bibliotecas e classes comuns e, em seguida, cria novos processos de aplicativos (forks) a partir de si mesmo, o que acelera o tempo de inicialização dos apps."
    },
    {
      text: "O modelo de permissões do iOS é 'tudo ou nada', ou seja, um aplicativo deve receber todas as permissões que solicita ou não pode ser instalado.",
      answer: false,
      comment: "Errado. Assim como o Android moderno, o iOS usa um modelo de permissões granulares em tempo de execução. O usuário pode conceder ou negar cada permissão individualmente (câmera, localização, etc.) quando o aplicativo a solicita."
    },
    {
      text: "O gerenciamento de processos no Android é baseado em um ciclo de vida de componentes (como Activities e Services), que podem estar em diferentes estados (ativo, pausado, parado).",
      answer: true,
      comment: "Certo. O sistema gerencia os processos com base no estado dos componentes que eles contêm. O conhecimento desse ciclo de vida é crucial para desenvolver aplicativos robustos e eficientes."
    },
    {
      text: "A criptografia do sistema de arquivos no Android (FBE) protege os dados mesmo que um invasor consiga obter acesso root ao dispositivo ligado e desbloqueado.",
      answer: false,
      comment: "Errado. A criptografia protege os dados em repouso (quando o dispositivo está desligado ou bloqueado). Se um invasor obtiver acesso root em um dispositivo desbloqueado, ele poderá, em teoria, acessar os dados descriptografados dos aplicativos."
    },
    {
      text: "O iOS permite que aplicativos de navegador de terceiros, como Chrome e Firefox, usem seus próprios motores de renderização web para maior desempenho.",
      answer: false,
      comment: "Errado. A Apple exige que todos os navegadores de terceiros na App Store usem o WebKit, o mesmo motor de renderização do Safari. Isso garante consistência e segurança, mas limita a diferenciação de desempenho e recursos."
    },
    {
      text: "O 'Verified Boot' no Android é um processo que garante criptograficamente que o software sendo carregado (do bootloader ao sistema operacional) não foi adulterado.",
      answer: true,
      comment: "Certo. O Verified Boot cria uma cadeia de confiança desde o hardware até o sistema, verificando a assinatura de cada estágio de inicialização. Se uma modificação não autorizada for detectada, ele pode alertar o usuário ou se recusar a inicializar."
    },
    {
      text: "No iOS, quando um aplicativo é colocado em segundo plano, o sistema operacional tira um 'snapshot' de sua interface para usar na tela de multitarefa.",
      answer: true,
      comment: "Certo. O sistema captura a última tela do aplicativo para dar a ilusão de que ele ainda está rodando no seletor de aplicativos, enquanto na realidade o processo pode estar suspenso ou terminado para economizar recursos."
    },
    {
      text: "A arquitetura de segurança do Android não inclui a randomização do layout do espaço de endereço (ASLR).",
      answer: false,
      comment: "Errado. O Android implementa o ASLR para randomizar as posições da stack, heap e bibliotecas na memória. Isso torna muito mais difícil para um invasor prever o endereço de funções ou dados para explorar vulnerabilidades de corrupção de memória."
    },
    {
      text: "O 'Data Protection' no iOS é a API que permite aos aplicativos especificarem um nível de acessibilidade para seus arquivos, determinando se podem ser lidos quando o dispositivo está bloqueado.",
      answer: true,
      comment: "Certo. Os desenvolvedores podem atribuir classes de proteção aos arquivos (por exemplo, 'proteção completa até a primeira autenticação do usuário'), dando um controle granular sobre a segurança dos dados."
    },
    {
      text: "Um 'Content Provider' no Android gerencia um conjunto compartilhado de dados de aplicativos, permitindo que outros aplicativos os consultem ou modifiquem (com as devidas permissões).",
      answer: true,
      comment: "Certo. O aplicativo de Contatos, por exemplo, expõe seus dados através de um Content Provider, permitindo que outros aplicativos acessem a lista de contatos de forma segura e estruturada."
    },
    {
      text: "O iOS não usa partições de sistema separadas; todo o sistema operacional e os dados do usuário residem em uma única partição.",
      answer: false,
      comment: "Errado. O iOS, assim como outros sistemas operacionais modernos, usa um volume de sistema assinado e somente leitura para o sistema operacional, separado do volume de dados do usuário. Isso impede a modificação dos arquivos do sistema, mesmo por malware."
    },
    {
      text: "O Android permite que os aplicativos se registrem para serem iniciados automaticamente quando o dispositivo é ligado (boot).",
      answer: true,
      comment: "Certo. Usando a permissão RECEIVE_BOOT_COMPLETED e um Broadcast Receiver, um aplicativo pode executar código assim que o dispositivo termina de inicializar, útil para serviços que precisam estar sempre ativos."
    },
    {
      text: "A segurança do iOS depende inteiramente do hardware, sem camadas de segurança de software.",
      answer: false,
      comment: "Errado. A segurança do iOS é uma abordagem de defesa em profundidade, combinando segurança de hardware (como o Secure Enclave), segurança de software (como sandboxing, ASLR, e verificação de código) e segurança de serviços (como a revisão da App Store)."
    }
  ]
,
  "mobile-so-arquivos": [
    {
      text: "O sistema de arquivos padrão para dispositivos iOS modernos é o APFS (Apple File System).",
      answer: true,
      comment: "Certo. O APFS foi introduzido com o iOS 10.3 e é otimizado para armazenamento flash/SSD, oferecendo recursos como criptografia forte, snapshots e compartilhamento de espaço."
    },
    {
      text: "No Android, os usuários têm acesso irrestrito ao diretório raiz (/) do sistema de arquivos, mesmo em dispositivos não-roteados.",
      answer: false,
      comment: "Errado. Em dispositivos não-roteados, o acesso ao sistema de arquivos é altamente restrito. Os usuários e aplicativos geralmente interagem apenas com o armazenamento interno compartilhado e o armazenamento externo, não com o diretório raiz do sistema."
    },
    {
      text: "O iOS utiliza o mesmo sistema de arquivos ext4 que é comum em muitas distribuições Linux.",
      answer: false,
      comment: "Errado. O iOS usava o HFS+ e agora usa o APFS. O ext4 é um sistema de arquivos comum no Android e no Linux, mas não no iOS."
    },
    {
      text: "O 'Scoped Storage' (Armazenamento com Escopo), introduzido no Android 10, limita o acesso de um aplicativo ao armazenamento externo, dando a ele por padrão acesso apenas ao seu próprio diretório e a tipos de mídia específicos.",
      answer: true,
      comment: "Certo. O Scoped Storage é uma grande mudança de privacidade e segurança que restringe o acesso amplo e irrestrito que os aplicativos tinham ao armazenamento compartilhado, melhorando o controle do usuário sobre seus dados."
    },
    {
      text: "No iOS, todos os aplicativos armazenam seus dados em um único diretório compartilhado, /data/apps, para facilitar o backup.",
      answer: false,
      comment: "Errado. Devido ao sandboxing, cada aplicativo no iOS tem seu próprio contêiner de diretório privado. Ele não pode acessar os dados de outros aplicativos diretamente. A estrutura é isolada para cada app."
    },
    {
      text: "O sistema de arquivos F2FS (Flash-Friendly File System) foi desenvolvido pela Apple para uso em iPhones.",
      answer: false,
      comment: "Errado. O F2FS foi desenvolvido pela Samsung, com contribuições do Google, e foi projetado para armazenamento baseado em flash (NAND). É uma opção usada em alguns dispositivos Android, mas não no iOS."
    },
    {
      text: "O aplicativo 'Arquivos' (Files) no iOS fornece uma visão completa e sem filtros de toda a estrutura de diretórios do sistema, incluindo os arquivos de sistema.",
      answer: false,
      comment: "Errado. O aplicativo 'Arquivos' oferece uma visão abstraída e segura do sistema de arquivos, mostrando apenas locais permitidos, como o iCloud Drive, o armazenamento local do dispositivo ('No Meu iPhone') e os diretórios de documentos de alguns aplicativos, mas oculta a complexidade e os arquivos de sistema."
    },
    {
      text: "No Android, o diretório /data/data/[nome.do.pacote]/ contém os dados privados de um aplicativo, como bancos de dados, preferências e arquivos de cache.",
      answer: true,
      comment: "Certo. Este é o local padrão para o armazenamento interno privado de um aplicativo, que é protegido pelas permissões do sistema de arquivos do Linux e inacessível para outros aplicativos."
    },
    {
      text: "O APFS no iOS não suporta snapshots do sistema de arquivos.",
      answer: false,
      comment: "Errado. Uma das principais características do APFS é o suporte a snapshots eficientes e de baixo custo. O iOS usa snapshots para criar um volume de sistema somente leitura e para garantir que as atualizações do sistema sejam seguras e possam ser revertidas."
    },
    {
      text: "O conceito de 'armazenamento externo' no Android sempre se refere a um cartão SD físico inserido no dispositivo.",
      answer: false,
      comment: "Errado. O 'armazenamento externo' no Android pode ser um cartão SD físico (removível) ou uma partição interna no dispositivo que é emulada para se comportar como armazenamento externo (armazenamento compartilhado)."
    },
    {
      text: "No iOS, o sistema operacional reside em um volume de sistema assinado e somente leitura para protegê-lo contra modificações.",
      answer: true,
      comment: "Certo. Desde o iOS 15, o sistema operacional está em um 'Signed System Volume' (SSV) que é criptograficamente verificado no boot. Isso o torna imutável, mesmo para o próprio sistema, aumentando a segurança contra malware e corrupção."
    },
    {
      text: "Antes do Scoped Storage, a permissão 'READ_EXTERNAL_STORAGE' no Android dava a um aplicativo a capacidade de ler todos os arquivos no armazenamento externo compartilhado.",
      answer: true,
      comment: "Certo. Esse modelo de permissão 'tudo ou nada' era um risco de privacidade, pois um aplicativo simples poderia ter acesso a todas as fotos, documentos e downloads do usuário. O Scoped Storage corrigiu isso."
    },
    {
      text: "O sistema de arquivos do iOS é case-sensitive (diferencia maiúsculas de minúsculas) por padrão.",
      answer: true,
      comment: "Certo. O APFS, como usado no iOS, é case-sensitive. Isso significa que 'Arquivo.txt' e 'arquivo.txt' são considerados dois arquivos diferentes. No macOS, o APFS geralmente é configurado como case-insensitive por padrão para compatibilidade."
    },
    {
      text: "No Android, o diretório 'DCIM' (Digital Camera Images) é o local padronizado para o armazenamento de fotos e vídeos feitos pela câmera.",
      answer: true,
      comment: "Certo. Esta é uma convenção padrão da indústria de câmeras digitais que o Android segue, facilitando para aplicativos de galeria e para usuários encontrarem suas fotos no armazenamento compartilhado."
    },
    {
      text: "O compartilhamento de espaço (Space Sharing) no APFS permite que múltiplos volumes em um contêiner compartilhem o espaço livre disponível, eliminando a necessidade de particionar o disco rigidamente.",
      answer: true,
      comment: "Certo. Esta é uma vantagem chave do APFS. Por exemplo, o volume do sistema e o volume de dados podem crescer e encolher dinamicamente dentro do mesmo contêiner, usando o espaço total disponível de forma muito mais eficiente."
    },
    {
      text: "O Android usa o MediaStore API para indexar e fornecer acesso a coleções de mídia (como áudio, vídeo e imagens) no armazenamento compartilhado.",
      answer: true,
      comment: "Certo. Em vez de escanear o sistema de arquivos diretamente, os aplicativos podem (e com o Scoped Storage, devem) usar o MediaStore para consultar e acessar arquivos de mídia de forma eficiente e segura."
    },
    {
      text: "A exclusão de um aplicativo no iOS sempre apaga todos os seus dados, incluindo os arquivos armazenados no iCloud Drive.",
      answer: false,
      comment: "Errado. Quando um aplicativo é excluído, seus dados no dispositivo (seu contêiner sandbox) são removidos. No entanto, os dados que o aplicativo salvou no iCloud Drive do usuário permanecem, pois pertencem ao usuário, não ao aplicativo."
    },
    {
      text: "O sistema de arquivos do Android não possui um mecanismo de journaling, tornando-o mais suscetível à corrupção em caso de falha de energia.",
      answer: false,
      comment: "Errado. Sistemas de arquivos modernos usados no Android, como o ext4 e o F2FS, são sistemas de arquivos com journaling. O journaling ajuda a garantir a integridade do sistema de arquivos, registrando as alterações antes que sejam feitas."
    },
    {
      text: "No iOS, não existe um conceito de 'gerenciador de arquivos' visível para o usuário da mesma forma que no Android ou em desktops.",
      answer: false,
      comment: "Errado. Embora historicamente fosse verdade, a Apple introduziu o aplicativo 'Arquivos' (Files) no iOS 11, que funciona como um gerenciador de arquivos, embora de forma mais controlada e abstraída do que em outros sistemas."
    },
    {
      text: "O diretório /system no Android contém os arquivos do sistema operacional e é montado como somente leitura (read-only) por segurança.",
      answer: true,
      comment: "Certo. Esta partição contém o núcleo do sistema operacional Android e é montada como somente leitura para impedir que aplicativos ou usuários a modifiquem acidentalmente ou maliciosamente, garantindo a integridade do sistema."
    },
    {
      text: "A clonagem de arquivos no APFS permite criar uma cópia de um arquivo ou diretório instantaneamente, sem usar espaço de armazenamento adicional até que a cópia seja modificada.",
      answer: true,
      comment: "Certo. A clonagem usa a tecnologia copy-on-write (COW), o que a torna extremamente rápida e eficiente em termos de espaço. É uma das otimizações importantes do APFS para armazenamento flash."
    },
    {
      text: "No Android, o arquivo OBB (Opaque Binary Blob) é usado para distribuir grandes recursos de aplicativos, como gráficos e arquivos de mídia, separadamente do APK.",
      answer: true,
      comment: "Certo. A Google Play Store pode entregar arquivos de expansão (OBB) junto com o APK. Isso é útil para jogos e aplicativos grandes, permitindo que o APK principal seja menor e os recursos pesados sejam baixados depois."
    },
    {
      text: "O sistema de arquivos do iOS não suporta compressão de arquivos nativamente.",
      answer: false,
      comment: "Errado. O APFS suporta compressão transparente, embora o iOS a utilize de forma mais seletiva do que o macOS. Ele pode comprimir arquivos menos usados para economizar espaço."
    },
    {
      text: "O Storage Access Framework (SAF) no Android fornece uma interface de usuário padrão para que os usuários possam procurar e abrir documentos, imagens e outros arquivos em todos os seus provedores de armazenamento de documentos.",
      answer: true,
      comment: "Certo. O SAF é uma forma de o usuário conceder a um aplicativo acesso a um arquivo ou diretório específico de forma temporária e segura, sem dar ao aplicativo uma permissão ampla de armazenamento."
    },
    {
      text: "Todos os dados em um dispositivo iOS são criptografados com uma única chave, que é desbloqueada pela senha do usuário.",
      answer: false,
      comment: "Errado. A segurança do iOS usa uma hierarquia complexa de chaves. Cada arquivo é criptografado com uma chave por arquivo, que por sua vez é protegida por outras chaves de classe, que são finalmente protegidas por uma chave de hardware (UID) e a senha do usuário. Isso permite um controle de acesso muito granular."
    },
    {
      text: "A estrutura de diretórios do Android é padronizada em todos os fabricantes (Samsung, Google, Xiaomi, etc.).",
      answer: false,
      comment: "Errado. Embora a estrutura principal definida pelo AOSP (Android Open Source Project) seja a mesma (ex: /system, /data), os fabricantes frequentemente adicionam suas próprias partições, diretórios e modificações para seus recursos específicos."
    },
    {
      text: "No iOS, um aplicativo pode declarar suporte para tipos de arquivo específicos (UTIs - Uniform Type Identifiers), permitindo que ele apareça na opção 'Abrir com...' para esses arquivos.",
      answer: true,
      comment: "Certo. É assim que o iOS gerencia as associações de arquivos. Um aplicativo de edição de PDF, por exemplo, se registra para o UTI 'com.adobe.pdf' para poder abrir arquivos PDF de outros locais, como do Mail ou do Arquivos."
    },
    {
      text: "O Android não possui um sistema de arquivos em cluster, como o NTFS ou o HFS+.",
      answer: true,
      comment: "Certo. Os sistemas de arquivos usados no Android, como ext4 e F2FS, são baseados em inodes, uma abordagem diferente dos sistemas de arquivos baseados em cluster como NTFS e o antigo HFS+."
    },
    {
      text: "A limpeza de cache no iOS é um processo totalmente manual que requer que o usuário entre nas configurações de cada aplicativo individualmente.",
      answer: false,
      comment: "Errado. O iOS gerencia o cache de forma automática e agressiva. Se o sistema estiver com pouco espaço, ele começará a limpar dados 'purgáveis', como caches de aplicativos, para liberar espaço sem a intervenção do usuário."
    },
    {
      text: "O diretório /sdcard no Android é sempre um link simbólico para o armazenamento externo, seja ele físico ou emulado.",
      answer: true,
      comment: "Certo. Para manter a compatibilidade com aplicativos mais antigos, o Android usa /sdcard como um caminho simbólico que aponta para o local real do armazenamento primário compartilhado, que geralmente é /storage/emulated/0."
    },
    {
      text: "O APFS foi projetado primariamente para discos rígidos mecânicos (HDDs) e depois adaptado para SSDs.",
      answer: false,
      comment: "Errado. O APFS foi projetado desde o início com o armazenamento flash (SSDs) em mente. Suas características, como copy-on-write e otimização para baixa latência, são ideais para a tecnologia flash."
    },
    {
      text: "Com o Scoped Storage, para um aplicativo acessar um arquivo fora de seu diretório específico, ele deve usar um seletor de arquivos (picker) e obter a permissão do usuário para aquele arquivo específico.",
      answer: true,
      comment: "Certo. Esta é a essência do modelo. Em vez de pedir permissão para ler tudo, o aplicativo pede ao usuário para escolher um arquivo, e o sistema concede acesso temporário apenas àquele arquivo."
    },
    {
      text: "No iOS, o backup do iTunes ou do iCloud salva uma cópia exata, bit a bit, de todo o sistema de arquivos do dispositivo.",
      answer: false,
      comment: "Errado. Os backups do iOS são seletivos. Eles salvam configurações, dados de aplicativos, fotos, etc., mas não incluem o sistema operacional em si nem os arquivos temporários e de cache, para economizar espaço e tempo. O SO é reinstalado durante a restauração."
    },
    {
      text: "O Android permite que os aplicativos solicitem a permissão 'MANAGE_EXTERNAL_STORAGE', que concede acesso amplo ao armazenamento externo, agindo como uma exceção ao Scoped Storage para casos de uso específicos (como gerenciadores de arquivos).",
      answer: true,
      comment: "Certo. O Google reconheceu que alguns aplicativos precisam de acesso mais amplo. No entanto, a solicitação dessa permissão é rigorosamente revisada na Google Play Store, e só é concedida a aplicativos cujas funcionalidades principais dependem dela."
    },
    {
      text: "A estrutura de diretórios de um aplicativo no sandbox do iOS inclui diretórios como 'Documents', 'Library' e 'tmp'.",
      answer: true,
      comment: "Certo. Cada aplicativo tem seu próprio contêiner com uma estrutura padrão: 'Documents' para arquivos gerados pelo usuário, 'Library' para arquivos não expostos ao usuário, e 'tmp' para arquivos temporários que podem ser apagados a qualquer momento."
    },
    {
      text: "O sistema de arquivos do Android é montado com a opção 'noexec' em certas partições, o que impede a execução de binários a partir delas.",
      answer: true,
      comment: "Certo. Partições que armazenam dados, como o armazenamento externo, são frequentemente montadas com a flag 'noexec' como uma medida de segurança para impedir que um arquivo baixado seja executado como um programa malicioso."
    },
    {
      text: "O APFS no iOS permite que dois volumes (sistema e dados) compartilhem o mesmo espaço, mas não permite a criação de volumes adicionais pelo usuário.",
      answer: true,
      comment: "Certo. No iOS, a estrutura de volumes do APFS é gerenciada inteiramente pelo sistema. Ao contrário do macOS, o usuário não pode criar, redimensionar ou excluir volumes APFS."
    },
    {
      text: "O diretório 'Downloads' no Android é um diretório privado do aplicativo de navegador que o criou.",
      answer: false,
      comment: "Errado. O diretório 'Downloads' é uma coleção pública padrão no armazenamento compartilhado, acessível (com as devidas permissões ou via MediaStore/SAF) por múltiplos aplicativos."
    },
    {
      text: "No iOS, os arquivos no diretório 'Documents' de um aplicativo são sempre incluídos nos backups do iCloud/iTunes.",
      answer: true,
      comment: "Certo. Este diretório é destinado a conteúdo crítico gerado pelo usuário que deve ser preservado. Os desenvolvedores devem usar outros diretórios (como 'Library/Caches') para dados que podem ser recriados e não precisam de backup."
    },
    {
      text: "O Android não usa links simbólicos em seu sistema de arquivos.",
      answer: false,
      comment: "Errado. O Android faz uso extensivo de links simbólicos para compatibilidade e organização, como o já mencionado /sdcard -> /storage/emulated/0."
    },
    {
      text: "A criptografia do APFS no iOS é integrada ao sistema de arquivos e não pode ser desativada.",
      answer: true,
      comment: "Certo. A criptografia é uma característica fundamental e não opcional do APFS no iOS, garantindo que todos os dados do usuário no volume de dados sejam sempre criptografados em repouso."
    },
    {
      text: "A fragmentação do sistema de arquivos é um problema sério no Android que requer desfragmentação regular pelo usuário.",
      answer: false,
      comment: "Errado. Em armazenamento baseado em flash (SSD/eMMC), a fragmentação tem um impacto de desempenho insignificante em comparação com os HDDs. Além disso, sistemas de arquivos como ext4 e F2FS e o próprio Android possuem mecanismos para mitigar isso. A desfragmentação não é necessária."
    },
    {
      text: "O 'File Sharing' do iTunes/Finder permite que os usuários acessem o sistema de arquivos completo de um dispositivo iOS.",
      answer: false,
      comment: "Errado. O compartilhamento de arquivos do iTunes/Finder só dá acesso a um diretório específico dentro do sandbox de um aplicativo: o diretório 'Documents'. O aplicativo deve habilitar explicitamente esse recurso."
    },
    {
      text: "O Android usa um sistema de permissões de arquivo padrão do Unix (proprietário, grupo, outros) como base para o sandboxing de aplicativos.",
      answer: true,
      comment: "Certo. O kernel Linux atribui a cada aplicativo um ID de usuário (UID) exclusivo. As permissões de arquivo do Unix são então usadas para garantir que o processo de um aplicativo (rodando com seu UID) não possa ler ou escrever nos arquivos de outro aplicativo (que tem um UID diferente)."
    },
    {
      text: "No iOS, o sistema de arquivos raiz é idêntico entre todos os modelos de iPhone e iPad que rodam a mesma versão do iOS.",
      answer: true,
      comment: "Certo. Devido ao volume de sistema assinado e somente leitura (SSV), a parte do sistema operacional do sistema de arquivos é idêntica e criptograficamente verificada, garantindo a integridade e consistência em todos os dispositivos."
    },
    {
      text: "O Android sempre usou o sistema de arquivos ext4 para a partição de dados.",
      answer: false,
      comment: "Errado. Versões muito antigas do Android usavam sistemas de arquivos como YAFFS. O ext4 se tornou o padrão por muito tempo, mas dispositivos mais recentes (especialmente os do Google) estão adotando o F2FS por seu melhor desempenho em armazenamento flash."
    },
    {
      text: "Ao 'descarregar' (offload) um aplicativo no iOS, o sistema operacional exclui o aplicativo, mas mantém seus documentos e dados.",
      answer: true,
      comment: "Certo. Este é um recurso de economia de espaço. O ícone do aplicativo permanece na tela inicial, e ao tocá-lo, o aplicativo é reinstalado da App Store, e seus dados salvos são reassociados a ele."
    },
    {
      text: "O Android não tem um local central para arquivos temporários; cada aplicativo gerencia seus próprios arquivos temporários em seu diretório privado.",
      answer: true,
      comment: "Certo. Cada aplicativo tem um diretório de cache (acessível via getCacheDir()) dentro de seu sandbox. O sistema pode limpar esses arquivos de cache se precisar de espaço, mas não há um único diretório /tmp para todo o sistema como no Linux de desktop."
    },
    {
      text: "A tecnologia 'copy-on-write' (COW) do APFS significa que, quando um arquivo é modificado, o sistema primeiro copia o bloco de dados a ser alterado para um novo local e depois o modifica, melhorando a resiliência a falhas.",
      answer: true,
      comment: "Certo. Isso garante que o estado original dos dados permaneça intacto até que a nova escrita seja concluída com sucesso, o que ajuda a prevenir a corrupção do sistema de arquivos em caso de uma queda de energia durante a escrita."
    }
  ]
,
  "gov-ti-itil": [
    {
      text: "O ITIL 4 introduziu o Sistema de Valor de Serviço (SVS) como um componente central, substituindo o Ciclo de Vida de Serviço do ITIL v3.",
      answer: true,
      comment: "Certo. O SVS do ITIL 4 descreve como os componentes e atividades de uma organização trabalham juntos para facilitar a criação de valor através de serviços habilitados por TI."
    },
    {
      text: "O ITIL 4 é focado exclusivamente em processos, mantendo a mesma estrutura de 26 processos do ITIL v3.",
      answer: false,
      comment: "Errado. O ITIL 4 mudou o foco de 'processos' para 34 'práticas', que são um conjunto de recursos organizacionais projetados para realizar um trabalho ou atingir um objetivo. As práticas são mais flexíveis e abrangentes que os processos do v3."
    },
    {
      text: "As Quatro Dimensões do Gerenciamento de Serviços no ITIL 4 são: Organizações e Pessoas, Informação e Tecnologia, Parceiros e Fornecedores, e Processos e Fluxos de Valor.",
      answer: false,
      comment: "Errado. A última dimensão é 'Fluxos de Valor e Processos', e não 'Processos e Fluxos de Valor'. A ordem é importante para refletir a ênfase na criação de valor."
    },
    {
      text: "'Foco no Valor' é um dos sete Princípios Orientadores do ITIL 4.",
      answer: true,
      comment: "Certo. Este princípio destaca que tudo o que a organização faz deve estar mapeado, direta ou indiretamente, para o valor para as partes interessadas (stakeholders)."
    },
    {
      text: "A Cadeia de Valor de Serviço do ITIL 4 contém seis atividades: Planejar, Engajar, Entregar, Suportar, Obter/Construir e Melhorar.",
      answer: false,
      comment: "Errado. As seis atividades da Cadeia de Valor de Serviço são: Planejar (Plan), Melhorar (Improve), Engajar (Engage), Design e Transição (Design & Transition), Obter/Construir (Obtain/Build) e Entregar e Suportar (Deliver & Support)."
    },
    {
      text: "O ITIL 4 promove uma abordagem de gerenciamento em silos, onde cada departamento de TI opera de forma independente para maximizar a eficiência local.",
      answer: false,
      comment: "Errado. O ITIL 4 enfatiza a colaboração e a quebra de silos. O princípio 'Pensar e trabalhar holisticamente' é fundamental para garantir que os serviços sejam gerenciados de ponta a ponta, em vez de em partes isoladas."
    },
    {
      text: "A 'Governança' é o componente central do Sistema de Valor de Serviço (SVS) do ITIL 4.",
      answer: false,
      comment: "Errado. O componente central do SVS é a 'Cadeia de Valor de Serviço'. A Governança é um componente importante que habilita e direciona o SVS, mas não é o seu centro."
    },
    {
      text: "O princípio 'Progredir iterativamente com feedback' do ITIL 4 desencoraja a implementação de grandes projetos de melhoria de uma só vez.",
      answer: true,
      comment: "Certo. Este princípio incentiva a divisão do trabalho em partes menores e gerenciáveis que podem ser executadas e concluídas em tempo hábil, usando o feedback de cada iteração para garantir que as ações sejam focadas e relevantes."
    },
    {
      text: "No ITIL 4, a 'co-criação de valor' é um conceito chave, significando que o valor é criado apenas pelo provedor de serviço e entregue ao consumidor.",
      answer: false,
      comment: "Errado. A co-criação de valor significa que o valor é criado através de uma colaboração ativa entre o provedor de serviços, os consumidores e outras partes interessadas. O consumidor tem um papel ativo na definição do valor."
    },
    {
      text: "As práticas do ITIL 4 são agrupadas em três categorias: Práticas de Gerenciamento Geral, Práticas de Gerenciamento de Serviço e Práticas de Gerenciamento Técnico.",
      answer: true,
      comment: "Certo. Esta é a forma como as 34 práticas são organizadas, ajudando as organizações a entenderem seu propósito e como elas se encaixam na estrutura geral de gerenciamento."
    },
    {
      text: "A atividade 'Engajar' da Cadeia de Valor de Serviço se concentra apenas na interação inicial com o cliente para levantar requisitos.",
      answer: false,
      comment: "Errado. A atividade 'Engajar' abrange todas as interações com as partes interessadas, incluindo clientes, usuários e fornecedores, desde o levantamento de requisitos até o suporte contínuo e a comunicação."
    },
    {
      text: "O princípio 'Manter simples e prático' do ITIL 4 sugere que se deve sempre escolher a solução mais complexa para cobrir todos os cenários possíveis.",
      answer: false,
      comment: "Errado. Este princípio orientador sugere o uso do número mínimo de etapas necessárias para atingir um objetivo. Deve-se buscar soluções diretas e evitar complexidade desnecessária."
    },
    {
      text: "O Sistema de Valor de Serviço (SVS) do ITIL 4 inclui 'Oportunidade/Demanda' como entrada e 'Valor' como saída.",
      answer: true,
      comment: "Certo. O SVS é acionado pela oportunidade ou demanda e seu objetivo é sempre a criação de valor para as partes interessadas."
    },
    {
      text: "A dimensão 'Informação e Tecnologia' se refere apenas ao hardware e software utilizados para entregar os serviços.",
      answer: false,
      comment: "Errado. Esta dimensão inclui não apenas as tecnologias, mas também a informação gerenciada pelo serviço, incluindo sua segurança, arquitetura e os conhecimentos necessários para gerenciá-la."
    },
    {
      text: "O ITIL 4 é uma estrutura prescritiva que dita exatamente como cada organização deve implementar suas práticas.",
      answer: false,
      comment: "Errado. O ITIL 4 é uma estrutura flexível e não prescritiva. Ele fornece orientação e recomendações (boas práticas), mas cada organização deve adaptá-las à sua própria cultura e circunstâncias específicas."
    },
    {
      text: "A atividade 'Obter/Construir' da Cadeia de Valor de Serviço é responsável por garantir que os componentes de serviço estejam disponíveis quando e onde forem necessários e que atendam às especificações acordadas.",
      answer: true,
      comment: "Certo. Esta atividade foca na aquisição de componentes de terceiros (obter) ou no desenvolvimento e construção de componentes internamente."
    },
    {
      text: "O princípio 'Otimizar e Automatizar' sugere que a automação deve ser aplicada a qualquer custo, mesmo que o processo subjacente não esteja otimizado.",
      answer: false,
      comment: "Errado. A otimização deve vir antes da automação. Automatizar um processo ineficiente apenas o torna mais rápido em ser ineficiente. O princípio enfatiza a maximização do valor do trabalho humano e técnico."
    },
    {
      text: "Fluxos de valor de serviço são combinações específicas das atividades da Cadeia de Valor de Serviço para responder a cenários específicos.",
      answer: true,
      comment: "Certo. Um fluxo de valor é um caminho específico através da Cadeia de Valor para criar um produto ou serviço. Por exemplo, o fluxo de valor para resolver um incidente será diferente do fluxo de valor para criar um novo serviço."
    },
    {
      text: "O ITIL 4 abandonou completamente o conceito de Melhoria Contínua.",
      answer: false,
      comment: "Errado. A Melhoria Contínua continua sendo um componente fundamental do ITIL 4. Existe uma prática dedicada de 'Melhoria Contínua' e uma atividade 'Melhorar' na Cadeia de Valor de Serviço."
    },
    {
      text: "A dimensão 'Parceiros e Fornecedores' abrange os relacionamentos de uma organização com outras empresas envolvidas no design, desenvolvimento, entrega e suporte de serviços.",
      answer: true,
      comment: "Certo. Esta dimensão reconhece que os serviços modernos dependem de uma rede complexa de fornecedores e parceiros, e o gerenciamento desses relacionamentos é crucial para o sucesso."
    }
  ]
,
  "gov-ti-contratacoes": [
    {
      text: "A Lei nº 14.133/2021 (Nova Lei de Licitações) revogou imediatamente a Lei nº 8.666/1993 assim que foi publicada.",
      answer: false,
      comment: "Errado. Houve um período de transição de dois anos, até abril de 2023, durante o qual a Administração Pública pôde optar por qual lei utilizar. A revogação completa só se efetivou após esse período."
    },
    {
      text: "A Instrução Normativa SGD/ME nº 94/2022 aplica-se a todos os órgãos e entidades da Administração Pública Federal, Estadual e Municipal.",
      answer: false,
      comment: "Errado. A IN SGD/ME nº 94/2022 aplica-se aos órgãos e entidades integrantes do Sistema de Administração dos Recursos de Tecnologia da Informação (SISP) no âmbito da Administração Pública Federal direta, autárquica e fundacional."
    },
    {
      text: "O Estudo Técnico Preliminar (ETP) é um documento obrigatório em todas as contratações de TI, independentemente do valor ou modalidade.",
      answer: false,
      comment: "Errado. A elaboração do ETP é obrigatória, mas a própria lei e a IN 94/2022 preveem casos de dispensa, como em contratações de baixo valor ou situações de emergência, desde que devidamente justificado."
    },
    {
      text: "O Plano de Contratações Anual (PCA) é o documento que consolida todas as demandas que o órgão ou entidade planeja contratar no exercício subsequente.",
      answer: true,
      comment: "Certo. O PCA, previsto na Lei 14.133/2021, é um instrumento de governança que alinha as contratações ao planejamento estratégico do órgão."
    },
    {
      text: "A fase preparatória da licitação, segundo a Lei 14.133/2021, é caracterizada pelo planejamento e deve ser compatível com o Plano de Contratações Anual.",
      answer: true,
      comment: "Certo. Esta fase envolve a elaboração do ETP, Termo de Referência, análise de riscos, e outros documentos que fundamentam a contratação, alinhados ao PCA."
    },
    {
      text: "A IN 94/2022 estabelece que o Termo de Referência (TR) deve ser elaborado antes do Estudo Técnico Preliminar (ETP).",
      answer: false,
      comment: "Errado. O fluxo correto é: Documento de Formalização da Demanda (DFD) -> Estudo Técnico Preliminar (ETP) -> Termo de Referência (TR). O ETP fundamenta a viabilidade da contratação, e o TR detalha o objeto a ser contratado."
    },
    {
      text: "O critério de julgamento 'técnica e preço' só pode ser utilizado para serviços de natureza predominantemente intelectual.",
      answer: true,
      comment: "Certo. A Lei 14.133/2021 restringe o uso de 'técnica e preço' a bens e serviços especiais, como os de natureza intelectual, de alta complexidade ou inovadores."
    },
    {
      text: "A Equipe de Planejamento da Contratação, segundo a IN 94/2022, deve ser composta por, no mínimo, um integrante da área de TI e um da área de negócios.",
      answer: false,
      comment: "Errado. A IN 94/2022 define que a equipe deve ser composta pela Área Demandante, Área Técnica e Área Administrativa. A composição exata pode variar, mas deve contemplar essas três áreas de competência."
    },
    {
      text: "O Gerenciamento de Riscos na fase de planejamento da contratação é opcional para soluções de TI de baixo valor.",
      answer: false,
      comment: "Errado. A análise de riscos é um elemento obrigatório da fase preparatória, conforme a Lei 14.133/2021 e detalhado na IN 94/2022. Ela deve abranger as fases de planejamento, seleção do fornecedor e gestão do contrato."
    },
    {
      text: "A modalidade de licitação 'diálogo competitivo' foi introduzida pela Lei 14.133/2021 e é aplicável a contratações complexas que a Administração não consegue descrever com precisão no início do processo.",
      answer: true,
      comment: "Certo. O diálogo competitivo é uma nova modalidade para situações em que a Administração precisa dialogar com os licitantes para desenvolver uma ou mais soluções capazes de atender às suas necessidades."
    },
    {
      text: "A IN 94/2022 proíbe a contratação de soluções de TI de forma parcelada.",
      answer: false,
      comment: "Errado. A IN 94/2022, alinhada à Lei 14.133/2021, estabelece que o parcelamento do objeto é a regra, sempre que for técnica e economicamente viável, para ampliar a competitividade."
    },
    {
      text: "O Documento de Formalização da Demanda (DFD) é o primeiro artefato do processo de contratação de TI e é de responsabilidade exclusiva da área de TI.",
      answer: false,
      comment: "Errado. O DFD é de responsabilidade da área demandante da solução, ou seja, a área de negócio que necessita da solução de TI."
    },
    {
      text: "A Lei 14.133/2021 extinguiu as modalidades 'tomada de preços' e 'convite'.",
      answer: true,
      comment: "Certo. A nova lei extinguiu essas duas modalidades, mantendo concorrência, concurso, leilão, pregão e introduzindo o diálogo competitivo."
    },
    {
      text: "O Termo de Referência pode definir marcas ou características exclusivas, desde que seja tecnicamente justificado no Estudo Técnico Preliminar.",
      answer: true,
      comment: "Certo. A indicação de marca é excepcional e deve ser devidamente fundamentada no ETP, demonstrando que é a única opção que atende às necessidades da Administração ou que a padronização é vantajosa."
    },
    {
      text: "A pesquisa de preços, segundo a IN 94/2022, deve ser feita consultando apenas o Painel de Preços do Governo Federal.",
      answer: false,
      comment: "Errado. A IN 73/2022 (que rege a pesquisa de preços) estabelece uma cesta de parâmetros, como o Painel de Preços, contratações similares de outros órgãos, pesquisa com fornecedores e pesquisa em mídia especializada. Deve-se usar múltiplos parâmetros."
    },
    {
      text: "O fiscal técnico do contrato de TI é responsável por verificar o cumprimento das obrigações trabalhistas e previdenciárias da contratada.",
      answer: false,
      comment: "Errado. Essa é a responsabilidade do fiscal administrativo do contrato. O fiscal técnico foca no acompanhamento da execução do objeto, verificando se a solução atende aos requisitos técnicos e de qualidade especificados."
    },
    {
      text: "A IN 94/2022 define que a Equipe de Fiscalização do Contrato é composta obrigatoriamente pelo Gestor do Contrato, Fiscal Técnico, Fiscal Administrativo e Fiscal Requisitante.",
      answer: false,
      comment: "Errado. A IN 94/2022 prevê esses papéis, mas a composição da equipe pode variar. O fiscal requisitante, por exemplo, é o representante da área de negócio e pode não ser necessário em todos os contratos."
    },
    {
      text: "A vigência dos contratos de serviços e fornecimentos contínuos, sob a Lei 14.133/2021, pode chegar a até 10 anos.",
      answer: true,
      comment: "Certo. A lei permite uma vigência inicial de até 5 anos, prorrogável por sucessivos períodos até o limite máximo de 10 anos, desde que demonstrada a vantagem econômica."
    },
    {
      text: "O Portal Nacional de Contratações Públicas (PNCP) centraliza os atos das licitações de todos os entes federativos (União, Estados, DF e Municípios).",
      answer: true,
      comment: "Certo. O PNCP foi criado pela Lei 14.133/2021 para ser o sítio eletrônico oficial de divulgação centralizada e obrigatória dos atos exigidos pela lei."
    },
    {
      text: "A contratação de serviços de computação em nuvem deve ser sempre classificada como compra de software.",
      answer: false,
      comment: "Errado. A IN 94/2022 orienta que a contratação de serviços em nuvem (IaaS, PaaS, SaaS) deve ser classificada como contratação de serviço de TI, e não como aquisição de bem ou licença de software."
    },
    {
      text: "O Plano de Gerenciamento de Riscos deve ser atualizado apenas no início da contratação.",
      answer: false,
      comment: "Errado. O gerenciamento de riscos é um processo contínuo. O mapa de riscos deve ser atualizado e monitorado durante todas as fases da contratação, incluindo a gestão contratual."
    },
    {
      text: "A Lei 14.133/2021 permite a inexigibilidade de licitação para a contratação de objetos que devam ou possam ser contratados por meio de credenciamento.",
      answer: true,
      comment: "Certo. O credenciamento é uma hipótese de inexigibilidade de licitação para a contratação de serviços em que a competição entre os contratados é inviável, permitindo a contratação de todos que atendam aos requisitos."
    },
    {
      text: "O Catálogo Eletrônico de Padronização é um instrumento da Lei 14.133/2021 que permite a contratação direta de itens padronizados.",
      answer: true,
      comment: "Certo. O catálogo, disponível no PNCP, permite que órgãos padronizem itens e realizem contratações mais ágeis, por dispensa de licitação, para esses itens."
    },
    {
      text: "A IN 94/2022 exige que o Estudo Técnico Preliminar (ETP) seja assinado apenas pelo chefe da área de TI.",
      answer: false,
      comment: "Errado. O ETP deve ser elaborado e assinado por todos os membros da Equipe de Planejamento da Contratação, que inclui representantes das áreas demandante, técnica e administrativa."
    },
    {
      text: "O critério de julgamento 'maior retorno econômico' é utilizado para a celebração de contratos de eficiência.",
      answer: true,
      comment: "Certo. Nos contratos de eficiência, o licitante oferece um percentual de economia sobre as despesas correntes do órgão, e a remuneração é baseada nessa economia. O critério de julgamento é o maior retorno econômico para a Administração."
    },
    {
      text: "A fase de seleção do fornecedor na IN 94/2022 se inicia com a publicação do edital e termina com a homologação da licitação.",
      answer: true,
      comment: "Certo. Esta fase compreende a divulgação do edital, o recebimento das propostas, a fase de lances (se houver), o julgamento, a habilitação, a fase recursal e, por fim, a adjudicação do objeto e a homologação do resultado."
    },
    {
      text: "A Lei 14.133/2021 proíbe a participação em licitação de empresas que tenham sofrido sanções em outras esferas da Administração Pública.",
      answer: true,
      comment: "Certo. A lei prevê impedimentos para licitar com a Administração Pública para empresas que tenham sofrido sanções como declaração de inidoneidade, que tem efeitos em todas as esferas de governo."
    },
    {
      text: "O Termo de Referência, segundo a IN 94/2022, não precisa conter o Modelo de Gestão do Contrato.",
      answer: false,
      comment: "Errado. O Modelo de Gestão do Contrato, que descreve como a execução do objeto será acompanhada e fiscalizada, é um elemento obrigatório do Termo de Referência."
    },
    {
      text: "A dispensa de licitação em razão do valor, para contratação de serviços de TI, tem o mesmo limite que a contratação de obras de engenharia.",
      answer: false,
      comment: "Errado. A Lei 14.133/2021 estabelece limites de valor diferentes para dispensa. Para obras e serviços de engenharia, o limite é maior do que para outros serviços e compras em geral."
    },
    {
      text: "A Matriz de Alocação de Riscos é um documento que define a responsabilidade (quem assume o risco) entre a contratante e a contratada.",
      answer: true,
      comment: "Certo. A matriz de riscos, obrigatória em certos tipos de contrato, estabelece de forma clara as responsabilidades de cada parte em relação aos riscos identificados, o que é fundamental para a segurança jurídica do contrato."
    },
    {
      text: "A IN 94/2022 veda a subcontratação de qualquer parte do objeto em contratos de TI.",
      answer: false,
      comment: "Errado. A subcontratação pode ser permitida, desde que prevista e disciplinada no edital e no contrato, e que não se refira à parcela de maior relevância técnica do objeto."
    },
    {
      text: "O gestor do contrato de TI é a única pessoa autorizada a interagir com a empresa contratada.",
      answer: false,
      comment: "Errado. O gestor do contrato coordena a fiscalização, mas os fiscais (técnico, administrativo, requisitante) têm papéis específicos e interagem com a contratada dentro de suas áreas de competência."
    },
    {
      text: "A Lei 14.133/2021 introduziu a figura do agente de contratação, que é responsável por conduzir a licitação e tomar decisões na fase externa.",
      answer: true,
      comment: "Certo. O agente de contratação é o servidor designado para conduzir o processo licitatório, sendo o principal responsável pela fase de seleção do fornecedor."
    },
    {
      text: "O Estudo Técnico Preliminar Digital (ETP Digital) é uma ferramenta do sistema Compras.gov.br que auxilia na elaboração do ETP.",
      answer: true,
      comment: "Certo. O ETP Digital é um sistema que guia a equipe de planejamento na elaboração do documento, garantindo que todos os elementos exigidos pela legislação sejam preenchidos."
    },
    {
      text: "A pesquisa de preços para uma contratação de TI pode se basear em uma única cotação de um fornecedor.",
      answer: false,
      comment: "Errado. A pesquisa de preços deve se basear em uma 'cesta' de fontes. A utilização de uma única fonte é excepcional e deve ser muito bem justificada, demonstrando a impossibilidade de obter outras cotações."
    },
    {
      text: "O princípio do desenvolvimento nacional sustentável, na Lei 14.133/2021, permite a concessão de margem de preferência para empresas brasileiras.",
      answer: true,
      comment: "Certo. A lei prevê a possibilidade de estabelecer margens de preferência para bens e serviços nacionais que atendam a normas técnicas brasileiras, como forma de incentivar a indústria local."
    },
    {
      text: "O Termo de Recebimento Provisório atesta o recebimento definitivo do objeto do contrato.",
      answer: false,
      comment: "Errado. O recebimento provisório é feito pelo fiscal para uma verificação inicial. O recebimento definitivo ocorre após um período de observação ou testes, atestando que o objeto está em conformidade com o contrato."
    },
    {
      text: "A IN 94/2022 classifica as soluções de TI em categorias como 'Manutenção de software' e 'Desenvolvimento de sistemas', mas não 'Infraestrutura de TI'.",
      answer: false,
      comment: "Errado. A IN 94/2022 apresenta um catálogo de categorias de soluções de TI, que inclui infraestrutura, desenvolvimento, manutenção, comunicação, segurança, entre outras, para padronizar a classificação."
    },
    {
      text: "A Lei 14.133/2021 exige que os editais de licitação sejam publicados exclusivamente no Diário Oficial da União.",
      answer: false,
      comment: "Errado. A publicação obrigatória e centralizada dos editais e seus anexos deve ser feita no Portal Nacional de Contratações Públicas (PNCP), sem prejuízo da publicação em diário oficial."
    },
    {
      text: "O Plano de Inserção, que detalha como uma nova solução será implantada no ambiente do órgão, é um artefato da fase de planejamento da contratação.",
      answer: true,
      comment: "Certo. O Plano de Inserção, parte do Termo de Referência, descreve as atividades necessárias para a implantação da solução, como migração de dados, treinamento e configuração, e é crucial para o sucesso da contratação."
    },
    {
      text: "A modalidade pregão é preferencial para a contratação de bens e serviços comuns, incluindo os de TI.",
      answer: true,
      comment: "Certo. A Lei 14.133/2021 mantém o pregão como modalidade obrigatória para bens e serviços comuns, cujo padrão de desempenho e qualidade pode ser objetivamente definido no edital."
    },
    {
      text: "A IN 94/2022 determina que o pagamento pelo serviço só pode ocorrer após a emissão do Termo de Recebimento Definitivo.",
      answer: true,
      comment: "Certo. A liquidação da despesa e o consequente pagamento estão condicionados ao recebimento definitivo do serviço ou bem, atestando que a contratada cumpriu sua obrigação."
    },
    {
      text: "A Lei 14.133/2021 permite o uso de 'orçamento sigiloso' na licitação, onde o valor estimado não é divulgado aos licitantes.",
      answer: true,
      comment: "Certo. O orçamento pode ser sigiloso, desde que justificado. Nesse caso, ele só é revelado ao final da fase de lances, mas sempre será público após o encerramento da licitação."
    },
    {
      text: "O fiscal técnico do contrato deve ser, obrigatoriamente, um servidor efetivo do quadro do órgão.",
      answer: true,
      comment: "Certo. A Lei 14.133/2021 exige que a fiscalização seja exercida por um ou mais servidores do quadro permanente do órgão, admitindo-se a contratação de terceiros apenas para assisti-los e subsidiá-los com informações."
    },
    {
      text: "A IN 94/2022 não se aplica à contratação de softwares e serviços de computação em nuvem.",
      answer: false,
      comment: "Errado. A IN 94/2022 é a norma principal que rege o processo de contratação de soluções de Tecnologia da Informação e Comunicação (TIC), incluindo software, hardware, serviços de desenvolvimento, nuvem, etc."
    },
    {
      text: "O critério de julgamento 'menor preço' é o único aplicável na modalidade pregão.",
      answer: false,
      comment: "Errado. Na modalidade pregão, pode-se usar o critério de 'menor preço' ou o de 'maior desconto'."
    },
    {
      text: "A fase de Gerenciamento do Contrato, segundo a IN 94/2022, inicia-se com a assinatura do contrato e encerra-se com o recebimento definitivo do objeto.",
      answer: true,
      comment: "Certo. Esta fase abrange todo o acompanhamento da execução do contrato, incluindo a fiscalização, gestão de mudanças, aplicação de sanções e pagamentos, até a sua conclusão formal."
    },
    {
      text: "A Lei 14.133/2021 proíbe a adesão a Atas de Registro de Preços (carona) por órgãos não participantes.",
      answer: false,
      comment: "Errado. A lei permite a adesão, mas estabelece regras mais rígidas, como a necessidade de justificativa da vantagem, a anuência do órgão gerenciador e do fornecedor, e limites quantitativos."
    },
    {
      text: "O Termo de Referência deve conter os Critérios de Aceitação do Objeto, que são os parâmetros objetivos para verificar a qualidade e o atendimento aos requisitos.",
      answer: true,
      comment: "Certo. Os critérios de aceitação são fundamentais para a fiscalização do contrato, pois definem de forma clara e mensurável o que será considerado como um serviço ou bem entregue corretamente."
    },
    {
      text: "A IN 94/2022 estabelece um prazo máximo de 30 dias para a elaboração do Estudo Técnico Preliminar.",
      answer: false,
      comment: "Errado. A IN 94/2022 não estabelece um prazo fixo. O tempo de elaboração dependerá da complexidade da solução de TI a ser contratada, devendo seguir o cronograma definido no DFD."
    },
    {
      text: "A Lei 14.133/2021 tornou obrigatória a implementação de um programa de integridade (compliance) para empresas que celebram contratos de grande vulto.",
      answer: true,
      comment: "Certo. Para contratações de grande vulto (obras, serviços e fornecimentos acima de um determinado valor), a lei exige que o licitante comprove a implementação de um programa de integridade."
    },
    {
      text: "A garantia da proposta é um requisito obrigatório em todas as licitações da Lei 14.133/2021.",
      answer: false,
      comment: "Errado. A garantia da proposta é facultativa e só pode ser exigida em casos específicos, a critério da Administração. A garantia de execução do contrato, por outro lado, é mais comum."
    },
    {
      text: "A IN 94/2022 define 'solução de TI' como um conjunto de bens e/ou serviços que se integram para o alcance de um resultado.",
      answer: true,
      comment: "Certo. Essa definição é importante pois orienta a Administração a contratar a solução completa para seu problema de negócio, em vez de comprar componentes de TI de forma isolada."
    },
    {
      text: "A Lei 14.133/2021 permite que a Administração realize uma sessão pública para a negociação de preços com o primeiro colocado, mesmo no pregão.",
      answer: true,
      comment: "Certo. Após a fase de lances, o agente de contratação deverá negociar com o primeiro colocado para tentar obter condições mais vantajosas para a Administração."
    },
    {
      text: "O Plano de Sustentação define como a solução de TI será mantida e suportada após o término da garantia ou do contrato inicial.",
      answer: true,
      comment: "Certo. Este plano, parte do planejamento, é crucial para garantir a continuidade operacional da solução a longo prazo, prevendo custos e estratégias de manutenção e suporte."
    },
    {
      text: "A IN 94/2022 proíbe a contratação de serviços de desenvolvimento de software por horas de serviço (body shop).",
      answer: false,
      comment: "Errado. A IN 94/2022 permite a contratação por Unidade de Serviço Técnico (UST) ou Pontos de Função, mas não proíbe totalmente a alocação de postos de trabalho, desde que não caracterize subordinação direta ou pessoalidade, e seja devidamente justificada."
    },
    {
      text: "A Lei 14.133/2021 estabelece que o prazo de validade das propostas será de, no mínimo, 90 dias.",
      answer: false,
      comment: "Errado. O prazo de validade da proposta será de 60 dias, salvo se o edital dispuser de forma diferente."
    },
    {
      text: "O Termo de Ocorrências é o documento onde os fiscais do contrato registram todos os fatos relevantes ocorridos durante a execução contratual.",
      answer: true,
      comment: "Certo. Este documento é o principal instrumento de registro da fiscalização, servindo como histórico para a tomada de decisões, aplicação de sanções e avaliação do desempenho da contratada."
    },
    {
      text: "A Lei 14.133/2021 permite a prorrogação automática de contratos de TI.",
      answer: false,
      comment: "Errado. A prorrogação de contratos nunca é automática. Ela deve ser justificada, precedida de uma análise de vantajosidade, autorizada pela autoridade competente e formalizada por meio de um termo aditivo."
    }
  ],
  "gov-ti-marco-civil": [
    {
      text: "O Marco Civil da Internet (Lei nº 12.965/2014) estabelece a neutralidade de rede como um de seus princípios fundamentais.",
      answer: true,
      comment: "Certo. A neutralidade de rede, garantida no Art. 9º, é um dos pilares do Marco Civil, determinando que o responsável pela transmissão, comutação ou roteamento tem o dever de tratar de forma isonômica quaisquer pacotes de dados, sem distinção por conteúdo, origem e destino, serviço, terminal ou aplicação."
    },
    {
      text: "A neutralidade de rede permite que provedores de conexão tratem pacotes de dados de forma diferente com base no conteúdo, origem, destino ou serviço.",
      answer: false,
      comment: "Errado. O princípio da neutralidade de rede proíbe essa diferenciação. As únicas exceções são discriminações ou degradações decorrentes de requisitos técnicos indispensáveis à prestação adequada dos serviços ou para priorização de serviços de emergência."
    },
    {
      text: "O Marco Civil da Internet é aplicável apenas a empresas de tecnologia com sede no Brasil.",
      answer: false,
      comment: "Errado. O Art. 11 estabelece que a legislação brasileira se aplica a qualquer operação de coleta, armazenamento, guarda e tratamento de registros, de dados pessoais ou de comunicações por provedores de conexão e de aplicações de internet, desde que pelo menos um desses atos ocorra em território nacional."
    },
    {
      text: "A lei garante o direito à privacidade e à liberdade de expressão nas comunicações na internet.",
      answer: true,
      comment: "Certo. O Art. 3º lista como princípios a garantia da liberdade de expressão, comunicação e manifestação de pensamento, e a proteção da privacidade e dos dados pessoais, na forma da lei."
    },
    {
      text: "Provedores de conexão à internet são obrigados a guardar os registros de conexão de seus usuários pelo prazo mínimo de um ano.",
      answer: true,
      comment: "Certo. Conforme o Art. 13, o provedor de conexão tem a obrigação de manter os registros de conexão, sob sigilo, em ambiente controlado e de segurança, pelo prazo de 1 (um) ano."
    },
    {
      text: "Provedores de aplicações (como redes sociais) são obrigados a guardar os registros de acesso a aplicações pelo prazo mínimo de seis meses.",
      answer: true,
      comment: "Certo. De acordo com o Art. 15, o provedor de aplicações de internet constituído na forma de pessoa jurídica e que exerça essa atividade de forma organizada, profissionalmente e com fins econômicos deverá manter os respectivos registros de acesso a aplicações de internet, sob sigilo, em ambiente controlado e de segurança, pelo prazo de 6 (seis) meses."
    },
    {
      text: "A guarda de registros de conexão e acesso é opcional para os provedores.",
      answer: false,
      comment: "Errado. A guarda dos registros nos prazos definidos pela lei (1 ano para conexão, 6 meses para aplicações) é uma obrigação legal para os respectivos provedores."
    },
    {
      text: "A responsabilidade dos provedores de conexão por danos decorrentes de conteúdo gerado por terceiros é direta e imediata.",
      answer: false,
      comment: "Errado. O Art. 18 isenta o provedor de conexão à internet de responsabilidade civil por danos decorrentes de conteúdo gerado por terceiros."
    },
    {
      text: "Provedores de conexão só podem ser responsabilizados civilmente por conteúdo de terceiros se descumprirem ordem judicial específica.",
      answer: true,
      comment: "Certo. A responsabilidade do provedor de conexão só surge se ele não cumprir uma ordem judicial que determine a remoção de um conteúdo, o que é uma situação rara, pois a ordem geralmente é direcionada ao provedor de aplicação."
    },
    {
      text: "Provedores de aplicações (redes sociais, blogs) são sempre responsáveis pelo conteúdo postado por seus usuários.",
      answer: false,
      comment: "Errado. O Art. 19 estabelece que o provedor de aplicações de internet somente poderá ser responsabilizado civilmente por danos decorrentes de conteúdo gerado por terceiros se, após ordem judicial específica, não tomar as providências para, no âmbito e nos limites técnicos do seu serviço e dentro do prazo assinalado, tornar indisponível o conteúdo apontado como infringente."
    },
    {
      text: "A divulgação de 'nudes' sem consentimento pode levar à responsabilização do provedor de aplicação mesmo sem ordem judicial.",
      answer: true,
      comment: "Certo. O Art. 21 é uma exceção à regra da ordem judicial. Para casos de divulgação não autorizada de imagens, vídeos ou outros materiais contendo cenas de nudez ou de atos sexuais de caráter privado, o provedor que não tornar o conteúdo indisponível após notificação do participante ou seu representante legal pode ser responsabilizado."
    },
    {
      text: "O Marco Civil da Internet proíbe o monitoramento do conteúdo das comunicações privadas dos usuários pelos provedores.",
      answer: true,
      comment: "Certo. A lei assegura a inviolabilidade e o sigilo do fluxo de suas comunicações pela internet e das suas comunicações privadas armazenadas, salvo por ordem judicial."
    },
    {
      text: "Qualquer autoridade policial pode solicitar diretamente aos provedores os dados cadastrais de um usuário.",
      answer: false,
      comment: "Errado. Apenas autoridades judiciais podem requisitar os dados cadastrais que informem qualificação pessoal, filiação e endereço. A autoridade policial ou administrativa competente pode requisitar, mas a lei dá margem para a necessidade de ordem judicial em muitos casos, especialmente para dados mais sensíveis."
    },
    {
      text: "A requisição de registros de conexão e acesso por autoridades administrativas depende de autorização judicial prévia.",
      answer: true,
      comment: "Certo. O Art. 10, § 1º, e o Art. 22 estabelecem que a disponibilização dos registros de conexão e de acesso a aplicações, bem como de dados pessoais e do conteúdo de comunicações privadas, requer ordem judicial."
    },
    {
      text: "O Marco Civil da Internet não trata sobre a proteção de dados pessoais, deixando o tema exclusivamente para a LGPD.",
      answer: false,
      comment: "Errado. O Marco Civil foi um precursor na proteção de dados no Brasil, estabelecendo princípios como finalidade, consentimento expresso e proteção da privacidade, que foram posteriormente detalhados e ampliados pela Lei Geral de Proteção de Dados (LGPD)."
    },
    {
      text: "O consentimento do usuário para coleta e uso de seus dados pessoais deve ser livre, expresso e informado.",
      answer: true,
      comment: "Certo. O Art. 7º, VII, estabelece o consentimento expresso sobre coleta, uso, armazenamento e tratamento de dados pessoais como um direito do usuário, que deverá ocorrer de forma destacada das demais cláusulas contratuais."
    },
    {
      text: "Os provedores podem vender os registros de conexão e acesso de seus usuários para empresas de publicidade.",
      answer: false,
      comment: "Errado. A lei proíbe a comercialização desses registros e estabelece que eles devem ser mantidos sob sigilo, em ambiente controlado e de segurança."
    },
    {
      text: "A interrupção da conexão à internet por falta de pagamento é permitida, mesmo que o usuário tenha pago por outros serviços do mesmo provedor.",
      answer: true,
      comment: "Certo. O Marco Civil garante o direito à não suspensão da conexão, salvo por débito diretamente decorrente de sua utilização. Dívidas de outros serviços (TV a cabo, telefone fixo) não podem justificar o corte da internet."
    },
    {
      text: "A lei exige que os contratos de prestação de serviços na internet sejam claros e informem sobre as práticas de gerenciamento de rede.",
      answer: true,
      comment: "Certo. O Art. 7º, VI, assegura o direito a informações claras e completas nos contratos de prestação de serviços, com detalhamento sobre o regime de proteção aos registros de conexão e de acesso a aplicações, bem como sobre as práticas de gerenciamento da rede que possam afetar sua qualidade."
    },
    {
      text: "A 'retaliação' por conteúdo (diminuir a velocidade da conexão de um usuário que acessa muito um serviço concorrente) é uma prática permitida.",
      answer: false,
      comment: "Errado. Isso seria uma violação direta do princípio da neutralidade de rede, que proíbe a discriminação de pacotes de dados com base no serviço ou aplicação."
    },
    {
      text: "O prazo de guarda de logs de acesso a aplicações pode ser estendido por requisição da autoridade policial ou do Ministério Público.",
      answer: true,
      comment: "Certo. O Art. 15, § 1º, permite que a autoridade policial, administrativa ou o Ministério Público requeiram ao provedor de aplicações que os registros sejam guardados por prazo superior a 6 meses, antes mesmo de uma ordem judicial."
    },
    {
      text: "A responsabilidade por violação de direitos autorais online é tratada de forma idêntica à de outros conteúdos ilícitos.",
      answer: false,
      comment: "Errado. O Art. 19, § 2º, estabelece que a regra de responsabilidade mediante ordem judicial para outros conteúdos não se aplica aos casos de violação de direitos autorais ou conexos, que possuem legislação específica."
    },
    {
      text: "O Marco Civil da Internet tem como um de seus objetivos a promoção da inclusão digital.",
      answer: true,
      comment: "Certo. O Art. 4º estabelece que a disciplina do uso da internet no Brasil tem por objetivo a promoção do direito de acesso à internet a todos."
    },
    {
      text: "Um provedor de aplicação pode ser um blog, uma rede social, um serviço de e-mail ou uma loja virtual.",
      answer: true,
      comment: "Certo. A lei define provedor de aplicação como o conjunto de funcionalidades que podem ser acessadas por meio de um terminal conectado à internet, o que abrange uma vasta gama de serviços online."
    },
    {
      text: "A guarda dos registros de conexão inclui a data e hora de início e término da conexão, sua duração e o endereço IP utilizado.",
      answer: true,
      comment: "Certo. Essas são as informações que compõem o registro de conexão, conforme o Art. 13, e são essenciais para identificar a autoria de um ato ilícito na rede."
    },
    {
      text: "O conteúdo das comunicações (o corpo de um e-mail, por exemplo) faz parte dos registros de conexão ou acesso.",
      answer: false,
      comment: "Errado. Os registros de conexão e acesso são metadados (quem, quando, onde), não o conteúdo da comunicação em si. O acesso ao conteúdo exige uma ordem judicial específica para interceptação de comunicações."
    },
    {
      text: "O Marco Civil da Internet estabelece sanções como advertência, multa e suspensão das atividades para provedores que descumprirem a lei.",
      answer: true,
      comment: "Certo. O Art. 12 prevê um rol de sanções que podem ser aplicadas em caso de infração às normas de proteção de dados e privacidade, que vão desde advertência até a proibição do exercício das atividades."
    },
    {
      text: "A lei obriga que os data centers de empresas que atuam no Brasil estejam localizados fisicamente em território nacional.",
      answer: false,
      comment: "Errado. Essa proposta existiu durante a tramitação da lei, mas foi retirada. A lei exige que a legislação brasileira seja aplicada, independentemente de onde os data centers estejam localizados."
    },
    {
      text: "A exclusão definitiva de dados pessoais de um usuário após o término da relação contratual é um direito garantido pela lei.",
      answer: true,
      comment: "Certo. O Art. 7º, X, garante o direito à exclusão definitiva dos dados pessoais que tiver fornecido a determinada aplicação de internet, a seu requerimento, ao término da relação entre as partes, ressalvadas as hipóteses de guarda obrigatória de registros."
    },
    {
      text: "A 'portabilidade' de dados de um provedor para outro não é mencionada no Marco Civil da Internet.",
      answer: true,
      comment: "Certo. O direito à portabilidade de dados foi introduzido posteriormente, de forma explícita, pela Lei Geral de Proteção de Dados (LGPD). O Marco Civil não trata desse tema."
    },
    {
      text: "O princípio da finalidade, no contexto do Marco Civil, significa que os dados coletados só podem ser usados para os fins que justificaram a sua coleta.",
      answer: true,
      comment: "Certo. O Art. 3º, III, estabelece a responsabilização dos agentes de acordo com suas atividades, nos termos da lei. Isso está atrelado ao princípio da finalidade, que impede o uso indiscriminado dos dados dos usuários."
    },
    {
      text: "A quebra do sigilo de comunicações privadas para fins de investigação criminal pode ser determinada por um delegado de polícia.",
      answer: false,
      comment: "Errado. A quebra de sigilo de comunicações privadas, por ser uma exceção à garantia constitucional da inviolabilidade, só pode ser determinada por ordem judicial fundamentada."
    },
    {
      text: "O Marco Civil da Internet se aplica a todas as fases do uso da internet, desde a infraestrutura até as aplicações.",
      answer: true,
      comment: "Certo. A lei foi projetada para ser um 'guarda-chuva' regulatório, estabelecendo princípios e regras para provedores de conexão (infraestrutura) e provedores de aplicações (serviços)."
    },
    {
      text: "A venda casada de serviços de conexão com outros serviços é proibida pelo Marco Civil da Internet.",
      answer: false,
      comment: "Errado. Embora a venda casada seja uma prática abusiva combatida pelo Código de Defesa do Consumidor, não há uma proibição explícita sobre isso no texto do Marco Civil. A lei foca na não suspensão da conexão por débitos de outros serviços."
    },
    {
      text: "A lei prevê a possibilidade de o Poder Executivo regulamentar as exceções à neutralidade de rede.",
      answer: true,
      comment: "Certo. O Art. 9º, § 1º, estabelece que a discriminação ou degradação do tráfego será regulamentada por Decreto Presidencial, ouvidos o Comitê Gestor da Internet e a Anatel."
    },
    {
      text: "O Comitê Gestor da Internet no Brasil (CGI.br) tem um papel consultivo na regulamentação do Marco Civil.",
      answer: true,
      comment: "Certo. O CGI.br, por sua natureza multissetorial, é uma instância importante e deve ser consultado em diversas matérias relativas à regulamentação da lei, como a neutralidade de rede."
    },
    {
      text: "Um provedor de Wi-Fi em um café é considerado um provedor de conexão e deve guardar os logs por 1 ano.",
      answer: true,
      comment: "Certo. Ao fornecer acesso à internet a terceiros, mesmo que gratuitamente, o estabelecimento se enquadra como provedor de conexão e assume as obrigações legais, incluindo a guarda de registros de conexão."
    },
    {
      text: "A anonimização de dados é uma técnica que torna a identificação do usuário impossível, mesmo com ordem judicial.",
      answer: false,
      comment: "Errado. A guarda de logs (como o endereço IP) serve justamente para permitir a identificação de um usuário mediante ordem judicial. O anonimato na internet não é absoluto."
    },
    {
      text: "A lei define 'internet' como o sistema constituído pelo conjunto de protocolos lógicos, estruturado em escala mundial para uso público e irrestrito.",
      answer: true,
      comment: "Certo. Esta é a definição técnica de internet que consta no Art. 5º, I, da lei."
    },
    {
      text: "O endereço IP é definido pela lei como o código atribuído a um terminal de uma rede para permitir sua identificação.",
      answer: true,
      comment: "Certo. A definição de endereço de protocolo de internet (IP) está no Art. 5º, III, e é fundamental para a identificação de usuários na rede."
    },
    {
      text: "A responsabilidade do provedor de aplicação por conteúdo de terceiros é subjetiva.",
      answer: true,
      comment: "Certo. É subjetiva porque depende da comprovação de uma 'culpa' do provedor, que se caracteriza pela sua inércia após ser notificado por uma ordem judicial específica."
    },
    {
      text: "O Marco Civil da Internet revogou todas as leis anteriores que tratavam de crimes na internet.",
      answer: false,
      comment: "Errado. O Marco Civil é uma lei de natureza civil, não penal. Leis como a Lei nº 12.737/2012 (Lei Carolina Dieckmann), que tipifica crimes informáticos, continuam em vigor e coexistem com o Marco Civil."
    },
    {
      text: "A guarda de registros de acesso a aplicações inclui o conjunto de informações referentes à data e hora de uso de uma determinada aplicação a partir de um determinado endereço IP.",
      answer: true,
      comment: "Certo. Esta é exatamente a definição de registro de acesso a aplicações, conforme o Art. 15 da lei."
    },
    {
      text: "A lei permite que os provedores de aplicação monitorem o tráfego dos usuários para fins de publicidade direcionada, sem necessidade de consentimento.",
      answer: false,
      comment: "Errado. Qualquer tratamento de dados para fins de publicidade depende do consentimento livre, expresso e informado do usuário, conforme os direitos e garantias previstos no Art. 7º."
    },
    {
      text: "A 'requisição judicial de registros' deve, obrigatoriamente, conter os indícios da ocorrência do ilícito e a justificativa da utilidade dos registros solicitados.",
      answer: true,
      comment: "Certo. O Art. 22 estabelece os requisitos para o pedido judicial, que deve ser fundamentado e indicar o período ao qual se referem os registros, para evitar pedidos genéricos ou desproporcionais ('fishing expedition')."
    },
    {
      text: "Um provedor de e-mail pode ler o conteúdo das mensagens de seus usuários para filtrar spam, sem que isso viole o sigilo das comunicações.",
      answer: true,
      comment: "Certo. A filtragem de spam por meio de sistemas automatizados é geralmente entendida como uma medida de segurança inerente ao serviço, não se configurando como quebra de sigilo para fins de devassa do conteúdo por um humano."
    },
    {
      text: "O Marco Civil da Internet proíbe o uso de 'deep packet inspection' (DPI) em qualquer circunstância.",
      answer: false,
      comment: "Errado. O DPI não é proibido em si, mas seu uso é restrito. Ele não pode ser usado para fins de violação da neutralidade de rede (discriminar pacotes) ou da privacidade. Pode ser usado para gerenciamento técnico da rede ou segurança."
    },
    {
      text: "A lei se aplica apenas a comunicações realizadas por meio de computadores, excluindo smartphones e outros dispositivos móveis.",
      answer: false,
      comment: "Errado. A lei se aplica a qualquer 'terminal', definido como um computador ou qualquer dispositivo que se conecte à internet, o que inclui smartphones, tablets, etc."
    },
    {
      text: "A remoção de conteúdo por um provedor de aplicação, sem ordem judicial, é permitida se o conteúdo violar os termos de uso da plataforma.",
      answer: true,
      comment: "Certo. Os provedores podem moderar o conteúdo com base em seus próprios termos de serviço. A lei regula a responsabilidade civil por conteúdo de terceiros, mas não impede a moderação proativa baseada em regras contratuais."
    },
    {
      text: "O direito ao esquecimento não está previsto no Marco Civil da Internet.",
      answer: true,
      comment: "Certo. O direito ao esquecimento é uma construção jurisprudencial e foi mais detalhado na LGPD. O Marco Civil garante o direito à exclusão de dados ao final da relação contratual, o que é diferente."
    },
    {
      text: "A guarda de logs de conexão por mais de um ano pode ser determinada por ordem judicial.",
      answer: true,
      comment: "Certo. Embora o prazo mínimo seja de um ano, a autoridade judicial pode determinar que os registros sejam guardados por um período superior, conforme a necessidade da investigação ou instrução processual."
    },
    {
      text: "A responsabilidade por conteúdo infringente em casos de vingança pornográfica é atribuída ao provedor de aplicação imediatamente após a notificação extrajudicial.",
      answer: true,
      comment: "Certo. Conforme o Art. 21, a responsabilidade do provedor se torna solidária com a do autor da postagem se ele não remover o conteúdo após ser notificado pela vítima ou seu representante."
    },
    {
      text: "A lei estabelece que o acesso à internet é essencial ao exercício da cidadania.",
      answer: true,
      comment: "Certo. O Art. 7º abre a seção de direitos e garantias dos usuários afirmando que o acesso à internet é essencial ao exercício da cidadania."
    },
    {
      text: "O Marco Civil da Internet foi a primeira lei no mundo a estabelecer o princípio da neutralidade de rede.",
      answer: false,
      comment: "Errado. Embora o Brasil tenha sido pioneiro em aprovar uma lei abrangente com força de lei federal sobre o tema, países como o Chile já possuíam legislações sobre neutralidade de rede antes de 2014."
    },
    {
      text: "A Anatel é a agência responsável por fiscalizar e aplicar as sanções previstas no Marco Civil da Internet.",
      answer: false,
      comment: "Errado. A fiscalização e aplicação das sanções relativas à proteção de dados e privacidade, conforme o Art. 12, cabem à Autoridade Nacional de Proteção de Dados (ANPD), criada pela LGPD. A Anatel fiscaliza aspectos técnicos da prestação do serviço de conexão."
    },
    {
      text: "O provedor de aplicação deve fornecer mecanismos para que o usuário possa excluir sua conta e os dados associados a ela.",
      answer: true,
      comment: "Certo. Isso decorre diretamente do direito à exclusão dos dados pessoais previsto no Art. 7º, X, da lei."
    },
    {
      text: "O Marco Civil da Internet não se aplica a redes corporativas internas (intranets) que não têm conexão com a internet pública.",
      answer: true,
      comment: "Certo. A lei regula o uso da 'internet', definida como a rede mundial de computadores. Intranets que são isoladas da internet pública não estão sob o escopo direto da lei."
    },
    {
      text: "A obrigação de guarda de logs se aplica tanto a provedores de conexão onerosos quanto aos gratuitos.",
      answer: true,
      comment: "Certo. A lei não faz distinção quanto à onerosidade do serviço. Se um estabelecimento oferece acesso à internet, ele se torna um provedor de conexão para os fins da lei e deve cumprir a obrigação de guarda de registros."
    },
    {
      text: "A ordem judicial para remoção de conteúdo deve conter a identificação clara e específica do conteúdo, permitindo sua localização inequívoca.",
      answer: true,
      comment: "Certo. O Art. 19, § 1º, exige a identificação via URL (Uniform Resource Locator) para que a ordem seja considerada válida e o provedor possa cumprir a determinação."
    }
  ],
  "ia-aprendizado-maquina": [
    {
      text: "No aprendizado supervisionado, o algoritmo aprende a partir de um conjunto de dados rotulados, onde cada exemplo de entrada possui uma saída correta correspondente.",
      answer: true,
      comment: "Certo. O objetivo do aprendizado supervisionado é aprender uma função que mapeia entradas para saídas com base em exemplos de pares entrada-saída."
    },
    {
      text: "Regressão e classificação são dois tipos de problemas resolvidos pelo aprendizado não supervisionado.",
      answer: false,
      comment: "Errado. Regressão (prever um valor contínuo) e classificação (prever uma categoria) são as duas principais tarefas do aprendizado supervisionado."
    },
    {
      text: "O aprendizado não supervisionado utiliza dados que não possuem rótulos ou saídas pré-definidas.",
      answer: true,
      comment: "Certo. O objetivo do aprendizado não supervisionado é encontrar padrões, estruturas ou agrupamentos (clusters) nos próprios dados de entrada."
    },
    {
      text: "Clustering (agrupamento) é uma tarefa típica de aprendizado supervisionado.",
      answer: false,
      comment: "Errado. Clustering é a tarefa mais comum de aprendizado não supervisionado, onde o objetivo é agrupar dados semelhantes sem conhecimento prévio das categorias."
    },
    {
      text: "O aprendizado por reforço envolve um agente que aprende a tomar decisões interagindo com um ambiente para maximizar uma recompensa cumulativa.",
      answer: true,
      comment: "Certo. O aprendizado por reforço é baseado em um sistema de recompensas e punições, onde o agente aprende por tentativa e erro."
    },
    {
      text: "No aprendizado por reforço, o algoritmo recebe um conjunto de dados de treinamento completo e rotulado no início do processo.",
      answer: false,
      comment: "Errado. O aprendizado por reforço não usa um conjunto de dados estático. O agente gera seus próprios dados de experiência ao interagir com o ambiente."
    },
    {
      text: "O aprendizado semi-supervisionado utiliza uma grande quantidade de dados rotulados e uma pequena quantidade de dados não rotulados.",
      answer: false,
      comment: "Errado. É o oposto. O aprendizado semi-supervisionado é útil quando há uma pequena quantidade de dados rotulados e uma grande quantidade de dados não rotulados, buscando aproveitar a estrutura dos dados não rotulados para melhorar a precisão."
    },
    {
      text: "Análise preditiva é o processo de usar dados, algoritmos estatísticos e técnicas de aprendizado de máquina para identificar a probabilidade de resultados futuros com base em dados históricos.",
      answer: true,
      comment: "Certo. O foco da análise preditiva é fazer previsões sobre eventos desconhecidos, sendo uma aplicação prática de muitas técnicas de aprendizado de máquina."
    },
    {
      text: "O algoritmo K-Means é um exemplo de algoritmo de classificação supervisionada.",
      answer: false,
      comment: "Errado. K-Means é um dos algoritmos de clustering (agrupamento) mais conhecidos, sendo, portanto, uma técnica de aprendizado não supervisionado."
    },
    {
      text: "Uma árvore de decisão pode ser usada tanto para problemas de classificação quanto de regressão.",
      answer: true,
      comment: "Certo. Árvores de decisão são modelos versáteis que podem prever categorias (classificação) ou valores contínuos (regressão), dependendo de como são construídas."
    },
    {
      text: "O objetivo do aprendizado não supervisionado é sempre reduzir a dimensionalidade dos dados.",
      answer: false,
      comment: "Errado. A redução de dimensionalidade (como o PCA) é uma tarefa de aprendizado não supervisionado, mas não é a única. Clustering (agrupamento) e detecção de anomalias são outras tarefas importantes."
    },
    {
      text: "O aprendizado por reforço é ideal para problemas onde a sequência de decisões é importante, como em jogos ou robótica.",
      answer: true,
      comment: "Certo. A natureza sequencial e a dependência do estado atual para tomar a próxima ação tornam o aprendizado por reforço adequado para esses domínios."
    },
    {
      text: "Overfitting (sobreajuste) ocorre quando um modelo de aprendizado de máquina se ajusta demais aos dados de treinamento, perdendo a capacidade de generalizar para novos dados.",
      answer: true,
      comment: "Certo. O overfitting é um problema comum em que o modelo aprende o ruído dos dados de treinamento em vez do sinal subjacente, resultando em baixo desempenho em dados não vistos."
    },
    {
      text: "Underfitting (subajuste) ocorre quando o modelo é muito complexo e captura o ruído dos dados de treinamento.",
      answer: false,
      comment: "Errado. Underfitting ocorre quando o modelo é muito simples para capturar a estrutura subjacente dos dados, resultando em baixo desempenho tanto nos dados de treinamento quanto nos de teste."
    },
    {
      text: "A validação cruzada (cross-validation) é uma técnica usada para evitar o underfitting.",
      answer: false,
      comment: "Errado. A validação cruzada é uma técnica robusta para avaliar o desempenho de um modelo e ajuda a detectar e evitar o overfitting, fornecendo uma estimativa mais precisa de como o modelo se comportará com novos dados."
    },
    {
      text: "No aprendizado supervisionado, o conjunto de dados é tipicamente dividido em conjuntos de treinamento, validação e teste.",
      answer: true,
      comment: "Certo. O conjunto de treinamento é usado para treinar o modelo, o de validação para ajustar hiperparâmetros e o de teste para avaliar o desempenho final do modelo em dados não vistos."
    },
    {
      text: "O algoritmo de 'Máquinas de Vetores de Suporte' (SVM) é usado exclusivamente para problemas de regressão.",
      answer: false,
      comment: "Errado. SVMs são primariamente algoritmos de classificação, mas podem ser adaptados para realizar tarefas de regressão (SVR - Support Vector Regression)."
    },
    {
      text: "A função de um agente no aprendizado por reforço é mapear estados para ações.",
      answer: true,
      comment: "Certo. A política (policy) do agente é essencialmente uma função que, dado um estado do ambiente, decide qual ação tomar."
    },
    {
      text: "O aprendizado semi-supervisionado é mais caro que o supervisionado porque requer a rotulagem de todos os dados.",
      answer: false,
      comment: "Errado. O aprendizado semi-supervisionado é geralmente mais barato porque a rotulagem manual de dados é um processo caro e demorado, e essa abordagem requer apenas uma pequena fração de dados rotulados."
    },
    {
      text: "A análise de componentes principais (PCA) é uma técnica de aprendizado supervisionado para classificação.",
      answer: false,
      comment: "Errado. PCA é uma técnica de aprendizado não supervisionado usada para redução de dimensionalidade, encontrando as direções de maior variância nos dados."
    },
    {
      text: "A análise preditiva não pode ser usada para prever o comportamento do cliente, como a probabilidade de churn (cancelamento).",
      answer: false,
      comment: "Errado. A previsão de churn é um caso de uso clássico de análise preditiva (e classificação supervisionada), onde o modelo aprende com dados históricos de clientes para prever quais clientes atuais têm maior probabilidade de sair."
    },
    {
      text: "Em aprendizado por reforço, a 'recompensa' é um sinal numérico que indica o quão boa foi uma ação tomada em um determinado estado.",
      answer: true,
      comment: "Certo. A recompensa é o feedback imediato que o ambiente fornece ao agente, e o objetivo do agente é maximizar a soma total de recompensas ao longo do tempo."
    },
    {
      text: "Um modelo de regressão linear é um exemplo de aprendizado não supervisionado.",
      answer: false,
      comment: "Errado. A regressão linear é um método de aprendizado supervisionado, pois tenta prever uma variável de saída contínua com base em variáveis de entrada rotuladas."
    },
    {
      text: "A detecção de anomalias (outlier detection) é geralmente considerada uma tarefa de aprendizado não supervisionado.",
      answer: true,
      comment: "Certo. Na maioria dos casos, a detecção de anomalias é feita de forma não supervisionada, onde o algoritmo aprende o que é um comportamento 'normal' a partir dos dados e identifica pontos que se desviam desse padrão."
    },
    {
      text: "O 'ambiente' no aprendizado por reforço é o mundo externo com o qual o agente interage.",
      answer: true,
      comment: "Certo. O ambiente representa tudo o que está fora do agente. Ele recebe as ações do agente, muda de estado e fornece uma recompensa em troca."
    },
    {
      text: "O aprendizado supervisionado requer que os dados de entrada sejam sempre numéricos.",
      answer: false,
      comment: "Errado. Os dados de entrada podem ser de vários tipos, como texto, imagens ou dados categóricos. No entanto, eles geralmente precisam ser convertidos para um formato numérico (um processo chamado de 'feature engineering') antes de serem usados pelo modelo."
    },
    {
      text: "A principal vantagem do aprendizado semi-supervisionado é sua capacidade de aprender com dados parcialmente rotulados, o que é comum no mundo real.",
      answer: true,
      comment: "Certo. Essa abordagem é muito prática para cenários onde obter dados rotulados é difícil ou caro, mas dados brutos são abundantes."
    },
    {
      text: "Análise preditiva e análise descritiva são a mesma coisa.",
      answer: false,
      comment: "Errado. A análise descritiva resume dados históricos para entender o que aconteceu no passado, enquanto a análise preditiva usa esses dados para prever o que acontecerá no futuro."
    },
    {
      text: "O algoritmo Apriori é usado para tarefas de classificação em aprendizado supervisionado.",
      answer: false,
      comment: "Errado. O algoritmo Apriori é usado para mineração de regras de associação, uma tarefa de aprendizado não supervisionado que encontra relações entre variáveis em grandes bancos de dados."
    },
    {
      text: "No aprendizado por reforço, a exploração (exploration) refere-se a tomar ações já conhecidas para maximizar a recompensa imediata.",
      answer: false,
      comment: "Errado. Isso é explotação (exploitation). A exploração refere-se a experimentar novas ações para descobrir se elas podem levar a recompensas maiores no futuro."
    },
    {
      text: "O equilíbrio entre exploração e explotação é um desafio central no aprendizado por reforço.",
      answer: true,
      comment: "Certo. O agente deve equilibrar a necessidade de explorar novas ações para encontrar melhores estratégias com a necessidade de explorar as ações que já sabe que são boas."
    },
    {
      text: "Um classificador Naive Bayes é um algoritmo de aprendizado supervisionado baseado no teorema de Bayes.",
      answer: true,
      comment: "Certo. É um algoritmo de classificação probabilístico que assume (de forma 'ingênua') independência entre as características (features) dos dados."
    },
    {
      text: "A análise de sentimentos, que classifica um texto como positivo, negativo ou neutro, é um exemplo de aprendizado não supervisionado.",
      answer: false,
      comment: "Errado. A análise de sentimentos é um problema clássico de classificação de texto, que é uma tarefa de aprendizado supervisionado."
    },
    {
      text: "O objetivo da análise preditiva é sempre prever uma categoria discreta.",
      answer: false,
      comment: "Errado. A análise preditiva pode tanto prever categorias (classificação), como 'fraude' ou 'não fraude', quanto prever valores contínuos (regressão), como o preço de uma casa ou a temperatura de amanhã."
    },
    {
      text: "O aprendizado semi-supervisionado não pode ser aplicado a problemas de classificação.",
      answer: false,
      comment: "Errado. O aprendizado semi-supervisionado é frequentemente usado em problemas de classificação, onde os dados não rotulados ajudam a definir melhor as fronteiras de decisão entre as classes."
    },
    {
      text: "A política (policy) em aprendizado por reforço define o comportamento do agente.",
      answer: true,
      comment: "Certo. A política é a estratégia que o agente usa para determinar a próxima ação com base no estado atual."
    },
    {
      text: "O aprendizado por transferência (transfer learning) envolve treinar um modelo para uma tarefa e depois reutilizá-lo como ponto de partida para outra tarefa relacionada.",
      answer: true,
      comment: "Certo. Essa técnica é muito comum em deep learning e pode economizar tempo e recursos computacionais, aproveitando o conhecimento adquirido em uma tarefa para acelerar o aprendizado em outra."
    },
    {
      text: "A engenharia de características (feature engineering) é o processo de criar novas características a partir das existentes para melhorar o desempenho do modelo, e é exclusiva do aprendizado supervisionado.",
      answer: false,
      comment: "Errado. Embora seja crucial no aprendizado supervisionado, a engenharia de características também é importante no aprendizado não supervisionado para ajudar os algoritmos a encontrar padrões mais significativos."
    },
    {
      text: "O K-Nearest Neighbors (KNN) é um algoritmo de aprendizado não supervisionado.",
      answer: false,
      comment: "Errado. KNN é um algoritmo de aprendizado supervisionado usado para classificação e regressão. Ele classifica um novo ponto de dados com base na maioria dos rótulos de seus 'k' vizinhos mais próximos no conjunto de treinamento."
    },
    {
      text: "A redução de dimensionalidade sempre resulta em perda de informação.",
      answer: true,
      comment: "Certo. Técnicas como o PCA tentam minimizar essa perda, mantendo as direções de maior variância, mas alguma informação é inevitavelmente perdida ao projetar os dados em um espaço de menor dimensão."
    },
    {
      text: "O aprendizado por reforço profundo (Deep Reinforcement Learning) combina aprendizado por reforço com redes neurais profundas.",
      answer: true,
      comment: "Certo. Nessa abordagem, uma rede neural é usada para aproximar a política do agente ou a função de valor, permitindo que o aprendizado por reforço seja aplicado a problemas com espaços de estado muito grandes, como o jogo de Go."
    },
    {
      text: "A análise preditiva requer que os dados históricos estejam perfeitamente limpos e sem valores ausentes.",
      answer: false,
      comment: "Errado. Dados do mundo real raramente são perfeitos. Uma parte importante do processo de análise preditiva é a limpeza e o pré-processamento dos dados, que inclui o tratamento de valores ausentes, outliers e inconsistências."
    },
    {
      text: "No aprendizado supervisionado, o erro do modelo é calculado comparando suas previsões com os rótulos verdadeiros.",
      answer: true,
      comment: "Certo. Uma função de perda (loss function) ou de custo (cost function) quantifica a diferença entre os valores previstos e os valores reais, e o objetivo do treinamento é minimizar esse erro."
    },
    {
      text: "O aprendizado não supervisionado é ideal para encontrar grupos de clientes com comportamentos de compra semelhantes (segmentação de mercado).",
      answer: true,
      comment: "Certo. A segmentação de mercado é um caso de uso clássico de clustering (agrupamento), uma técnica de aprendizado não supervisionado."
    },
    {
      text: "O aprendizado semi-supervisionado é uma subcategoria do aprendizado por reforço.",
      answer: false,
      comment: "Errado. Aprendizado semi-supervisionado é uma categoria intermediária entre o supervisionado e o não supervisionado. Não tem relação direta com o aprendizado por reforço."
    },
    {
      text: "A análise de regressão, um pilar da análise preditiva, pode ser usada para prever o preço de ações.",
      answer: true,
      comment: "Certo. A previsão de séries temporais, como o preço de ações, é uma aplicação comum da análise de regressão, embora seja uma tarefa notoriamente difícil devido à alta volatilidade e complexidade do mercado."
    },
    {
      text: "Um sistema de recomendação como o da Netflix, que sugere filmes com base no que você já assistiu, utiliza principalmente técnicas de aprendizado supervisionado.",
      answer: false,
      comment: "Errado. Embora possam ter componentes supervisionados, os sistemas de recomendação são frequentemente baseados em técnicas de aprendizado não supervisionado (como filtragem colaborativa e clustering) para encontrar usuários ou itens semelhantes."
    },
    {
      text: "A 'maldição da dimensionalidade' refere-se ao fato de que os algoritmos de aprendizado de máquina se tornam mais eficientes à medida que o número de características (dimensões) aumenta.",
      answer: false,
      comment: "Errado. A maldição da dimensionalidade descreve como os dados se tornam esparsos em espaços de alta dimensão, tornando mais difícil para os algoritmos encontrarem padrões e exigindo exponencialmente mais dados para funcionar bem."
    },
    {
      text: "O aprendizado por reforço não requer um ambiente simulado e pode ser sempre aplicado diretamente no mundo real.",
      answer: false,
      comment: "Errado. A fase de exploração do aprendizado por reforço pode levar a ações ruins ou perigosas. Por isso, é frequentemente treinado em um ambiente simulado seguro antes de ser implantado no mundo real."
    },
    {
      text: "A acurácia é sempre a melhor métrica para avaliar um modelo de classificação.",
      answer: false,
      comment: "Errado. Em conjuntos de dados desbalanceados (onde uma classe é muito mais frequente que a outra), a acurácia pode ser enganosa. Métricas como precisão, recall e F1-score são frequentemente mais informativas nesses casos."
    },
    {
      text: "O processo de 'labeling' (rotulagem) de dados é a principal atividade no aprendizado não supervisionado.",
      answer: false,
      comment: "Errado. A rotulagem de dados é a base do aprendizado supervisionado. O aprendizado não supervisionado, por definição, trabalha com dados não rotulados."
    },
    {
      text: "A análise preditiva pode ajudar uma empresa a otimizar seu inventário prevendo a demanda futura por produtos.",
      answer: true,
      comment: "Certo. A previsão de demanda é uma aplicação clássica de análise preditiva (especificamente, regressão de séries temporais) que ajuda as empresas a tomar decisões mais informadas sobre estoque."
    },
    {
      text: "O aprendizado semi-supervisionado só pode ser usado quando os dados não rotulados são completamente aleatórios.",
      answer: false,
      comment: "Errado. A eficácia do aprendizado semi-supervisionado depende da suposição de que os dados não rotulados têm uma estrutura que está relacionada com a tarefa de predição (por exemplo, pontos da mesma classe formam um cluster)."
    },
    {
      text: "No aprendizado por reforço, o 'estado' representa uma descrição completa da situação atual do ambiente.",
      answer: true,
      comment: "Certo. O estado contém todas as informações necessárias para o agente tomar uma decisão informada sobre a próxima ação."
    },
    {
      text: "O algoritmo de 'Random Forest' (floresta aleatória) é um exemplo de aprendizado não supervisionado.",
      answer: false,
      comment: "Errado. Random Forest é um algoritmo de aprendizado supervisionado do tipo 'ensemble' (conjunto), que constrói múltiplas árvores de decisão durante o treinamento para melhorar a precisão e controlar o overfitting."
    },
    {
      text: "A principal tarefa do aprendizado não supervisionado é mapear entradas para saídas conhecidas.",
      answer: false,
      comment: "Errado. Essa é a definição de aprendizado supervisionado. O aprendizado não supervisionado busca descobrir a estrutura oculta em dados não rotulados."
    },
    {
      text: "O aprendizado por reforço é um tipo de aprendizado supervisionado onde a 'supervisão' vem na forma de um sinal de recompensa.",
      answer: false,
      comment: "Errado. Embora a recompensa seja um tipo de feedback, o aprendizado por reforço é considerado uma terceira categoria distinta de aprendizado de máquina, pois o feedback é muitas vezes esparso e atrasado, e não há um 'rótulo correto' para cada ação."
    },
    {
      text: "O uso de um conjunto de validação é crucial para evitar que informações do conjunto de teste 'vazem' para o processo de treinamento do modelo.",
      answer: true,
      comment: "Certo. O conjunto de validação é usado para ajustar os hiperparâmetros do modelo. O conjunto de teste deve ser usado apenas uma vez, no final, para obter uma avaliação imparcial do desempenho do modelo."
    },
    {
      text: "A análise de cluster (agrupamento) pode ser usada para identificar padrões de fraude em transações financeiras.",
      answer: true,
      comment: "Certo. Ao agrupar transações, as fraudulentas podem aparecer como pequenos clusters distintos ou como outliers (anomalias) que não se encaixam nos clusters de transações legítimas."
    }
  ],
  "ia-redes-neurais-llm": [
    {
      text: "Uma rede neural artificial é inspirada na estrutura e funcionamento do cérebro humano, consistindo em neurônios (nós) interconectados em camadas.",
      answer: true,
      comment: "Certo. As redes neurais são modelos computacionais que tentam simular a forma como os neurônios biológicos processam sinais."
    },
    {
      text: "Deep Learning refere-se a redes neurais com apenas uma camada oculta.",
      answer: false,
      comment: "Errado. Deep Learning (Aprendizagem Profunda) caracteriza-se pelo uso de redes neurais com múltiplas camadas ocultas (geralmente dezenas ou centenas), permitindo aprender hierarquias complexas de características."
    },
    {
      text: "A função de ativação em um neurônio determina se ele deve ser ativado ou não, com base na soma ponderada das entradas.",
      answer: true,
      comment: "Certo. Funções como ReLU, Sigmoid e Tanh introduzem não-linearidade no modelo, permitindo que a rede aprenda padrões complexos."
    },
    {
      text: "Backpropagation (retropropagação) é o algoritmo usado para treinar redes neurais, ajustando os pesos com base no erro calculado na saída.",
      answer: true,
      comment: "Certo. A retropropagação calcula o gradiente da função de perda em relação aos pesos da rede, permitindo que eles sejam atualizados iterativamente para minimizar o erro."
    },
    {
      text: "Redes Neurais Convolucionais (CNNs) são especialmente eficazes para processamento de dados sequenciais, como texto.",
      answer: false,
      comment: "Errado. CNNs são especializadas no processamento de dados com grade, como imagens. Para dados sequenciais, as Redes Neurais Recorrentes (RNNs) e Transformers são mais adequadas."
    },
    {
      text: "Redes Neurais Recorrentes (RNNs) possuem 'memória', pois as saídas de um passo de tempo são usadas como entrada para o próximo, permitindo processar sequências.",
      answer: true,
      comment: "Certo. Essa estrutura de loop permite que as RNNs mantenham informações sobre os elementos anteriores de uma sequência, tornando-as ideais para tarefas de Processamento de Linguagem Natural (PLN)."
    },
    {
      text: "O problema do 'desvanecimento de gradiente' (vanishing gradient) afeta principalmente as CNNs em tarefas de imagem.",
      answer: false,
      comment: "Errado. O desvanecimento de gradiente é um problema notório em RNNs profundas, onde o gradiente se torna tão pequeno que os pesos das camadas iniciais não são atualizados. Arquiteturas como LSTM e GRU foram criadas para mitigar isso."
    },
    {
      text: "Processamento de Linguagem Natural (PLN) é uma área da IA focada em permitir que computadores entendam, interpretem e gerem linguagem humana.",
      answer: true,
      comment: "Certo. PLN engloba tarefas como tradução, resumo de texto, análise de sentimentos e resposta a perguntas."
    },
    {
      text: "LLMs (Large Language Models) são modelos de Deep Learning com bilhões de parâmetros, pré-treinados em vastas quantidades de texto.",
      answer: true,
      comment: "Certo. Modelos como GPT, BERT e LLaMA são exemplos de LLMs que alcançaram desempenho de ponta em várias tarefas de PLN."
    },
    {
      text: "A arquitetura 'Transformer', base dos LLMs modernos, depende de loops recorrentes para processar sequências de texto.",
      answer: false,
      comment: "Errado. A principal inovação da arquitetura Transformer foi eliminar a recorrência e usar mecanismos de 'atenção' para processar todas as palavras de uma sequência simultaneamente, permitindo paralelização e captura de dependências de longa distância."
    },
    {
      text: "O mecanismo de 'atenção' (attention) permite que um modelo pese a importância de diferentes palavras na sequência de entrada ao processar uma palavra específica.",
      answer: true,
      comment: "Certo. A atenção é crucial para o sucesso dos Transformers, pois permite que o modelo foque nas partes mais relevantes da entrada para tomar decisões."
    },
    {
      text: "'Tokenização' em PLN é o processo de treinar o modelo.",
      answer: false,
      comment: "Errado. Tokenização é o processo de dividir um texto em unidades menores, chamadas tokens (que podem ser palavras, sub-palavras ou caracteres), para que possam ser processadas pelo modelo."
    },
    {
      text: "'Word Embeddings' (como Word2Vec e GloVe) representam palavras como vetores numéricos densos, capturando relações semânticas entre elas.",
      answer: true,
      comment: "Certo. Por exemplo, no espaço vetorial, o vetor para 'Rei' menos o vetor para 'Homem' mais o vetor para 'Mulher' resulta em um vetor próximo ao de 'Rainha'."
    },
    {
      text: "Inteligência Artificial Generativa é um tipo de IA que pode criar conteúdo novo e original, como imagens, texto, música ou código.",
      answer: true,
      comment: "Certo. Modelos generativos aprendem os padrões dos dados de treinamento e os usam para gerar novas amostras que se assemelham aos dados originais."
    },
    {
      text: "Modelos de difusão (Diffusion Models) são o tipo mais comum de IA generativa para tarefas de classificação.",
      answer: false,
      comment: "Errado. Modelos de difusão são modelos generativos, especialmente populares para a geração de imagens de alta qualidade (como no DALL-E 2 e Stable Diffusion). Eles não são usados para classificação."
    },
    {
      text: "GANs (Generative Adversarial Networks) consistem em duas redes neurais, um Gerador e um Discriminador, que competem entre si durante o treinamento.",
      answer: true,
      comment: "Certo. O Gerador tenta criar dados falsos realistas, e o Discriminador tenta distinguir os dados falsos dos reais. Essa competição aprimora ambos os modelos."
    },
    {
      text: "Deepfake refere-se a qualquer imagem gerada por computador.",
      answer: false,
      comment: "Errado. Deepfake refere-se especificamente a mídia sintética (vídeos ou áudios) onde uma pessoa em uma imagem ou vídeo existente é substituída pelo rosto ou voz de outra pessoa, de forma muito realista, usando técnicas de Deep Learning."
    },
    {
      text: "A tecnologia por trás dos deepfakes é frequentemente baseada em GANs e autoencoders.",
      answer: true,
      comment: "Certo. Autoencoders são treinados para codificar o rosto de uma pessoa em um espaço latente e depois decodificá-lo. Trocando os decodificadores, é possível colocar o rosto de uma pessoa no corpo de outra."
    },
    {
      text: "A principal aplicação dos deepfakes é na indústria cinematográfica para efeitos visuais.",
      answer: false,
      comment: "Errado. Embora tenha aplicações legítimas, a tecnologia de deepfake é mais conhecida por seu uso malicioso em desinformação, pornografia não consensual e fraude."
    },
    {
      text: "Detectar deepfakes é uma tarefa fácil, pois eles sempre contêm artefatos visuais óbvios, como piscar de olhos inconsistente.",
      answer: false,
      comment: "Errado. Embora os primeiros deepfakes tivessem falhas (como a falta de piscar), os modelos mais recentes estão se tornando cada vez mais sofisticados e difíceis de detectar a olho nu, exigindo ferramentas de análise forense digital."
    },
    {
      text: "A função de perda (loss function) em uma rede neural mede o quão bem o modelo está performando.",
      answer: true,
      comment: "Certo. A função de perda quantifica a diferença entre a saída prevista pelo modelo e o valor real. O objetivo do treinamento é minimizar essa função."
    },
    {
      text: "O 'fine-tuning' (ajuste fino) de um LLM envolve treinar o modelo do zero em um conjunto de dados específico.",
      answer: false,
      comment: "Errado. O ajuste fino pega um LLM pré-treinado e continua seu treinamento em um conjunto de dados menor e específico da tarefa, adaptando o modelo para essa tarefa sem o custo de treinar do zero."
    },
    {
      text: "O BERT (Bidirectional Encoder Representations from Transformers) é um modelo de linguagem que processa o texto apenas da esquerda para a direita.",
      answer: false,
      comment: "Errado. A principal característica do BERT é sua bidirecionalidade. Ele considera o contexto tanto da esquerda quanto da direita de uma palavra simultaneamente para criar representações de linguagem mais ricas."
    },
    {
      text: "IA Generativa e IA Discriminativa são a mesma coisa.",
      answer: false,
      comment: "Errado. Modelos generativos (como GANs) aprendem a distribuição dos dados para gerar novas amostras. Modelos discriminativos (como um classificador de imagem) aprendem a fronteira de decisão entre as classes."
    },
    {
      text: "Um dos riscos dos LLMs é a geração de 'alucinações', que são informações factualmente incorretas ou sem sentido, mas apresentadas de forma confiante.",
      answer: true,
      comment: "Certo. Como os LLMs são treinados para prever a próxima palavra, eles podem gerar textos plausíveis, mas que não são baseados na realidade, um problema significativo para aplicações que exigem precisão factual."
    },
    {
      text: "A arquitetura LSTM (Long Short-Term Memory) é uma melhoria das RNNs projetada para resolver o problema de explosão de gradiente.",
      answer: false,
      comment: "Errado. LSTMs e GRUs foram projetadas principalmente para mitigar o problema do desvanecimento de gradiente (vanishing gradient), permitindo que a rede se lembre de informações por períodos mais longos."
    },
    {
      text: "O Prompt Engineering (Engenharia de Prompt) é a prática de projetar entradas (prompts) para LLMs a fim de obter as saídas desejadas.",
      answer: true,
      comment: "Certo. A forma como uma pergunta ou instrução é formulada pode impactar drasticamente a qualidade e a relevância da resposta de um LLM."
    },
    {
      text: "Deepfakes de áudio, também conhecidos como 'clonagem de voz', são impossíveis com a tecnologia atual.",
      answer: false,
      comment: "Errado. A clonagem de voz é uma realidade e requer apenas alguns segundos de áudio de uma pessoa para criar um modelo de voz sintética que pode dizer qualquer coisa, representando um sério risco para fraudes e desinformação."
    },
    {
      text: "O número de camadas e neurônios em uma rede neural são 'hiperparâmetros' que são definidos antes do início do treinamento.",
      answer: true,
      comment: "Certo. Hiperparâmetros, como a taxa de aprendizado, o número de camadas e o tamanho do lote (batch size), definem a arquitetura do modelo e o processo de treinamento, e não são aprendidos durante o treinamento."
    },
    {
      text: "O GPT-3 e modelos sucessores são exemplos de modelos generativos baseados na arquitetura Transformer.",
      answer: true,
      comment: "Certo. A família de modelos GPT (Generative Pre-trained Transformer) utiliza a parte do decodificador da arquitetura Transformer para gerar texto de forma sequencial."
    },
    {
      text: "O principal objetivo de uma CNN é aprender filtros (ou kernels) que detectam características específicas em uma imagem, como bordas, texturas e formas.",
      answer: true,
      comment: "Certo. As camadas convolucionais aplicam esses filtros à imagem de entrada, criando mapas de características que destacam a presença de padrões específicos."
    },
    {
      text: "A IA Generativa não pode ser usada para criar código de programação.",
      answer: false,
      comment: "Errado. Modelos como o GitHub Copilot e o AlphaCode são exemplos de IA generativa treinada em grandes volumes de código-fonte para ajudar desenvolvedores a escrever, completar e depurar código."
    },
    {
      text: "O viés (bias) nos dados de treinamento é um dos maiores desafios éticos das redes neurais e LLMs.",
      answer: true,
      comment: "Certo. Se um modelo é treinado com dados que contêm vieses sociais (racismo, sexismo), ele aprenderá e poderá amplificar esses vieses em suas previsões e gerações, levando a resultados injustos e discriminatórios."
    },
    {
      text: "A camada de 'pooling' em uma CNN serve para aumentar a resolução da imagem.",
      answer: false,
      comment: "Errado. A camada de pooling (como max pooling) serve para reduzir a dimensionalidade espacial dos mapas de características, tornando a representação mais robusta a pequenas translações e diminuindo a carga computacional."
    },
    {
      text: "O PLN moderno abandonou completamente as abordagens baseadas em regras e estatísticas em favor do Deep Learning.",
      answer: false,
      comment: "Errado. Embora o Deep Learning domine a pesquisa de ponta, abordagens baseadas em regras e estatísticas ainda são úteis para tarefas específicas, especialmente quando os dados são escassos ou a interpretabilidade é crucial."
    },
    {
      text: "Um LLM pode ser usado para tarefas de 'zero-shot' (sem exemplos) ou 'few-shot' (com poucos exemplos), onde ele realiza tarefas para as quais não foi explicitamente treinado, apenas com base na descrição da tarefa no prompt.",
      answer: true,
      comment: "Certo. Essa é uma das capacidades mais poderosas dos LLMs, demonstrando uma forma de generalização a partir do vasto conhecimento adquirido durante o pré-treinamento."
    },
    {
      text: "A criação de deepfakes é um processo legal e não regulamentado em todos os países.",
      answer: false,
      comment: "Errado. Muitos países e jurisdições estão começando a introduzir leis para criminalizar a criação e distribuição de deepfakes maliciosos, especialmente os de natureza pornográfica ou difamatória."
    },
    {
      text: "O conceito de 'IA Explicável' (XAI) busca desenvolver técnicas para que as decisões de modelos complexos como redes neurais possam ser entendidas por humanos.",
      answer: true,
      comment: "Certo. A natureza de 'caixa-preta' de muitos modelos de Deep Learning é um problema em áreas críticas como medicina e finanças, e a XAI visa aumentar a transparência e a confiança nesses sistemas."
    },
    {
      text: "O modelo DALL-E é um exemplo de IA que gera texto a partir de imagens.",
      answer: false,
      comment: "Errado. DALL-E e outros modelos text-to-image fazem o oposto: eles geram imagens a partir de descrições em texto (prompts)."
    },
    {
      text: "A camada 'softmax' é frequentemente usada na camada de saída de uma rede neural de classificação para converter as saídas em uma distribuição de probabilidade.",
      answer: true,
      comment: "Certo. A função softmax garante que a soma das saídas seja 1, permitindo que cada saída seja interpretada como a probabilidade de a entrada pertencer a uma determinada classe."
    },
    {
      text: "O 'alinhamento' de LLMs refere-se ao processo de garantir que o comportamento do modelo esteja de acordo com os valores e intenções humanas.",
      answer: true,
      comment: "Certo. O alinhamento é um campo de pesquisa crucial que busca tornar os LLMs mais úteis, honestos e inofensivos, usando técnicas como o RLHF (Reinforcement Learning from Human Feedback)."
    },
    {
      text: "A principal vantagem das GANs é a estabilidade de seu treinamento.",
      answer: false,
      comment: "Errado. O treinamento de GANs é notoriamente instável e difícil. Problemas como o colapso de modo (mode collapse), onde o gerador produz apenas uma pequena variedade de amostras, são comuns."
    },
    {
      text: "Deepfakes só podem ser criados para substituir rostos, não para alterar expressões faciais ou sincronizar movimentos labiais.",
      answer: false,
      comment: "Errado. A tecnologia de deepfake pode ser usada para uma variedade de manipulações, incluindo alterar expressões, reanimar rostos em fotos estáticas e sincronizar os lábios de uma pessoa com um áudio diferente."
    },
    {
      text: "A regularização (ex: L1, L2, Dropout) é uma técnica usada em redes neurais para combater o overfitting (sobreajuste).",
      answer: true,
      comment: "Certo. A regularização adiciona uma penalidade à complexidade do modelo, desencorajando-o a aprender padrões de ruído nos dados de treinamento e melhorando sua capacidade de generalização."
    },
    {
      text: "O processamento de linguagem natural não inclui a tarefa de reconhecimento de fala.",
      answer: false,
      comment: "Errado. O reconhecimento de fala (Speech-to-Text) e a síntese de fala (Text-to-Speech) são componentes importantes do PLN, atuando como a ponte entre a linguagem falada e a escrita."
    },
    {
      text: "IA Generativa pode ser usada para tarefas de 'data augmentation', que é a criação de novos dados de treinamento sintéticos para aumentar um conjunto de dados existente.",
      answer: true,
      comment: "Certo. Gerar dados sintéticos é uma maneira eficaz de aumentar a diversidade do conjunto de treinamento, o que pode melhorar a robustez e o desempenho do modelo, especialmente quando os dados reais são escassos."
    },
    {
      text: "A verificação da proveniência da mídia, usando técnicas como assinaturas digitais ou marcas d'água, é uma abordagem para combater deepfakes.",
      answer: true,
      comment: "Certo. Iniciativas como a C2PA (Coalition for Content Provenance and Authenticity) buscam criar um padrão técnico para certificar a origem e o histórico de um conteúdo digital, tornando mais fácil identificar manipulações."
    },
    {
      text: "Uma rede neural com mais camadas sempre terá um desempenho melhor do que uma com menos camadas.",
      answer: false,
      comment: "Errado. Adicionar mais camadas pode levar ao overfitting e ao problema do gradiente descendente. A arquitetura ideal depende da complexidade do problema e da quantidade de dados disponíveis. Às vezes, uma rede mais simples e bem regularizada é melhor."
    },
    {
      text: "O 'RLHF' (Reinforcement Learning from Human Feedback) é um método usado para treinar GANs.",
      answer: false,
      comment: "Errado. RLHF é uma técnica chave para alinhar LLMs. Ela usa feedback humano (por exemplo, humanos classificando a qualidade de diferentes respostas do modelo) para treinar um modelo de recompensa, que é então usado para ajustar o LLM com aprendizado por reforço."
    },
    {
      text: "O Turing Test avalia se uma máquina pode gerar imagens indistinguíveis das de um humano.",
      answer: false,
      comment: "Errado. O Teste de Turing avalia a capacidade de uma máquina exibir comportamento inteligente equivalente ou indistinguível do de um humano, especificamente em uma conversa por texto."
    },
    {
      text: "A IA Generativa tem o potencial de democratizar a criação de conteúdo, permitindo que pessoas sem habilidades técnicas especializadas criem arte, música e vídeos.",
      answer: true,
      comment: "Certo. Ferramentas baseadas em IA generativa podem reduzir significativamente a barreira de entrada para a criação de conteúdo digital de alta qualidade."
    },
    {
      text: "A detecção de deepfakes baseia-se apenas na análise de frames de vídeo individuais, sem considerar a consistência temporal.",
      answer: false,
      comment: "Errado. Inconsistências temporais (como um piscar de olhos irregular ou movimentos não naturais ao longo do tempo) são pistas importantes que os detectores de deepfake procuram, além de artefatos em frames individuais."
    },
    {
      text: "A arquitetura de um 'Autoencoder' consiste em um codificador que comprime os dados e um decodificador que os reconstrói, sendo usada para redução de dimensionalidade e detecção de anomalias.",
      answer: true,
      comment: "Certo. Ao forçar os dados a passar por um 'gargalo' de baixa dimensão, o autoencoder aprende uma representação compacta dos dados. A qualidade da reconstrução pode indicar se uma nova amostra é normal ou anômala."
    },
    {
      text: "LLMs são inerentemente imunes a ataques de 'injeção de prompt', onde um usuário malicioso insere instruções para subverter as regras de segurança do modelo.",
      answer: false,
      comment: "Errado. A injeção de prompt é uma vulnerabilidade séria dos LLMs, onde os atacantes podem enganar o modelo para que ele ignore suas instruções originais e execute tarefas maliciosas, como revelar informações confidenciais."
    },
    {
      text: "O conceito de 'ética da IA' se preocupa apenas com a prevenção de deepfakes.",
      answer: false,
      comment: "Errado. A ética da IA é um campo amplo que aborda muitas questões, incluindo viés e justiça, privacidade, responsabilidade, transparência, segurança e o impacto social e econômico da automação."
    },
    {
      text: "Modelos de difusão geram imagens adicionando ruído a uma imagem real e, em seguida, treinando uma rede para remover esse ruído.",
      answer: true,
      comment: "Certo. O processo de geração reverte esse processo: começando com ruído puro, o modelo treinado remove iterativamente o ruído para 'esculpir' uma imagem coerente que corresponda a um prompt de texto."
    },
    {
      text: "A qualidade de um LLM depende apenas do tamanho do modelo (número de parâmetros).",
      answer: false,
      comment: "Errado. Embora o tamanho seja importante, a qualidade e a diversidade dos dados de treinamento, a arquitetura do modelo e as técnicas de alinhamento também são fatores cruciais para o desempenho de um LLM."
    },
    {
      text: "A tecnologia deepfake não pode ser usada para fins positivos.",
      answer: false,
      comment: "Errado. Existem usos positivos, como dublar filmes em diferentes idiomas com sincronia labial perfeita, criar avatares realistas para atendimento ao cliente ou recriar figuras históricas para fins educacionais."
    },
    {
      text: "Uma Rede Neural Convolucional (CNN) aprende características hierárquicas, onde as primeiras camadas detectam características simples (bordas) e as camadas mais profundas combinam essas características para detectar padrões complexos (olhos, rostos).",
      answer: true,
      comment: "Certo. Essa aprendizagem hierárquica de características é o que torna as CNNs tão poderosas para tarefas de visão computacional."
    }
  ],
  "forense-principios-crimes": [
    {
      text: "O primeiro princípio da computação forense é sempre realizar a análise diretamente na mídia original para garantir a autenticidade dos dados.",
      answer: false,
      comment: "Errado. Um princípio fundamental é nunca trabalhar diretamente na evidência original. Deve-se criar uma cópia bit a bit (imagem forense) e realizar a análise nessa cópia para preservar a integridade do original."
    },
    {
      text: "A cadeia de custódia é o registro cronológico que documenta quem manuseou a evidência digital, quando, onde e por qual motivo, desde a coleta até a apresentação em tribunal.",
      answer: true,
      comment: "Certo. A manutenção de uma cadeia de custódia rigorosa é crucial para garantir a admissibilidade da evidência em um processo legal."
    },
    {
      text: "Vestígios digitais são apenas os arquivos criados pelo usuário, como documentos e imagens.",
      answer: false,
      comment: "Errado. Vestígios digitais incluem uma vasta gama de dados, como logs de sistema, metadados de arquivos, dados de cache, histórico de navegação, e-mails, arquivos deletados e tráfego de rede."
    },
    {
      text: "A volatilidade dos dados refere-se à tendência de certos dados digitais, como o conteúdo da memória RAM, serem perdidos quando a energia do dispositivo é desligada.",
      answer: true,
      comment: "Certo. Por isso, a coleta de dados voláteis (como da RAM) é prioritária em uma investigação forense de um sistema ligado."
    },
    {
      text: "Hashing (como SHA-256) é usado em computação forense para criptografar a evidência e impedir o acesso não autorizado.",
      answer: false,
      comment: "Errado. Hashing é usado para verificar a integridade da evidência. Um hash da mídia original é calculado e comparado com o hash da imagem forense para provar que a cópia é exata e não foi alterada."
    },
    {
      text: "Phishing é um crime cibernético onde um atacante obtém informações sensíveis, como nomes de usuário e senhas, disfarçando-se de uma entidade confiável em uma comunicação eletrônica.",
      answer: true,
      comment: "Certo. E-mails e sites falsos são os vetores mais comuns de ataques de phishing, e os vestígios podem incluir cabeçalhos de e-mail e logs de servidores web."
    },
    {
      text: "Os metadados de um arquivo (como data de criação, modificação e autor) não são considerados vestígios relevantes em uma investigação forense.",
      answer: false,
      comment: "Errado. Metadados (dados sobre dados) são fontes cruciais de informação, podendo estabelecer cronologias, autoria e a proveniência de um arquivo."
    },
    {
      text: "Um ataque de negação de serviço (DoS) tem como principal objetivo roubar dados do sistema alvo.",
      answer: false,
      comment: "Errado. O objetivo de um ataque DoS (ou DDoS) é tornar um serviço ou recurso de rede indisponível para seus usuários legítimos, sobrecarregando-o com tráfego ou requisições."
    },
    {
      text: "A documentação detalhada de cada passo do processo forense é um princípio fundamental para garantir que o processo seja repetível e defensável em tribunal.",
      answer: true,
      comment: "Certo. A documentação deve incluir as ferramentas utilizadas, os procedimentos seguidos, as descobertas feitas e as conclusões do perito."
    },
    {
      text: "Arquivos deletados por um usuário são permanentemente irrecuperáveis de um disco rígido magnético.",
      answer: false,
      comment: "Errado. Quando um arquivo é 'deletado', o sistema operacional geralmente apenas marca o espaço que ele ocupava como disponível. Os dados permanecem no disco até serem sobrescritos, podendo ser recuperados com ferramentas forenses."
    },
    {
      text: "Ransomware é um tipo de malware que criptografa os arquivos da vítima e exige um pagamento (resgate) para restaurar o acesso a eles.",
      answer: true,
      comment: "Certo. Vestígios de um ataque de ransomware incluem o próprio malware, notas de resgate, arquivos criptografados e comunicações de rede com o servidor de comando e controle."
    },
    {
      text: "A análise de 'slack space' (espaço ocioso) refere-se à investigação de áreas não utilizadas em um cluster de disco, que podem conter fragmentos de arquivos deletados anteriormente.",
      answer: true,
      comment: "Certo. O slack space é o espaço entre o final de um arquivo e o final do cluster alocado para ele, e pode conter dados residuais valiosos."
    },
    {
      text: "O princípio da imparcialidade exige que o perito forense conduza a investigação buscando apenas evidências que confirmem a hipótese da acusação.",
      answer: false,
      comment: "Errado. O perito deve ser imparcial e objetivo, buscando tanto evidências que incriminem quanto as que inocentem um suspeito, relatando os fatos como os encontrou."
    },
    {
      text: "Logs de firewall são vestígios importantes para investigar tentativas de acesso não autorizado a uma rede.",
      answer: true,
      comment: "Certo. Logs de firewall registram o tráfego de rede que é permitido ou bloqueado, podendo revelar endereços IP de origem, portas de destino e horários de tentativas de invasão."
    },
    {
      text: "A esteganografia é a prática de criptografar uma mensagem para que ela não possa ser lida.",
      answer: false,
      comment: "Errado. Isso é criptografia. A esteganografia é a técnica de esconder uma mensagem ou arquivo dentro de outro arquivo (como uma imagem ou áudio) de forma que sua existência não seja percebida."
    },
    {
      text: "Em um crime de fraude de identidade, os vestígios podem ser encontrados em e-mails, bancos de dados de sites, logs de transações e redes sociais.",
      answer: true,
      comment: "Certo. O roubo e uso de informações de identificação pessoal deixam um rastro digital em múltiplos sistemas que o criminoso acessou ou utilizou."
    },
    {
      text: "A análise da memória RAM (análise de memória volátil) não pode revelar senhas ou chaves de criptografia.",
      answer: false,
      comment: "Errado. A memória RAM pode conter uma riqueza de informações voláteis, incluindo senhas em texto claro, chaves de criptografia, processos em execução, conexões de rede ativas e comandos digitados."
    },
    {
      text: "A coleta forense de dados na nuvem (Cloud Forensics) é mais simples que a coleta em mídias físicas devido à centralização dos dados.",
      answer: false,
      comment: "Errado. A forense na nuvem apresenta desafios únicos, como questões de jurisdição (onde os dados estão fisicamente armazenados), acesso legal aos dados e a natureza multi-inquilino do ambiente."
    },
    {
      text: "Spyware é um tipo de malware projetado para se espalhar para o maior número possível de computadores, como um vírus.",
      answer: false,
      comment: "Errado. Spyware é um malware que se instala secretamente em um computador para coletar informações sobre o usuário, suas atividades e seus dados sem o seu consentimento."
    },
    {
      text: "O registro do Windows é um banco de dados hierárquico que armazena configurações de baixo nível para o sistema operacional e para aplicativos, sendo uma fonte rica de vestígios.",
      answer: true,
      comment: "Certo. O registro pode conter informações sobre programas instalados, dispositivos USB conectados, arquivos abertos recentemente e atividades do usuário."
    },
    {
      text: "A análise de tráfego de rede (Network Forensics) só pode ser realizada em tempo real e não a partir de dados capturados.",
      answer: false,
      comment: "Errado. A análise pode ser feita em tempo real ou, mais comumente, a partir de capturas de pacotes (arquivos PCAP) que registram o tráfego de rede para análise posterior."
    },
    {
      text: "Um ataque de 'Man-in-the-Middle' (MITM) ocorre quando um atacante intercepta secretamente a comunicação entre duas partes para espionar ou alterar os dados.",
      answer: true,
      comment: "Certo. Vestígios de um ataque MITM podem incluir certificados digitais falsos, logs de ARP poisoning e anomalias no tráfego de rede."
    },
    {
      text: "A fase de 'identificação' no processo forense envolve a localização de potenciais fontes de evidência digital.",
      answer: true,
      comment: "Certo. Antes da coleta, o perito deve identificar todos os dispositivos e locais relevantes que possam conter vestígios, como computadores, smartphones, servidores e contas na nuvem."
    },
    {
      text: "A formatação de um disco rígido apaga todos os dados de forma segura e permanente, impedindo qualquer tipo de recuperação forense.",
      answer: false,
      comment: "Errado. Uma formatação rápida (padrão) apenas recria o sistema de arquivos, deixando a maior parte dos dados originais intacta e recuperável até ser sobrescrita. Apenas métodos de sanitização específicos (como sobregravação múltipla) são eficazes."
    },
    {
      text: "Os 'Prefetch files' no Windows são vestígios que indicam quais programas foram executados em um sistema, quando e com que frequência.",
      answer: true,
      comment: "Certo. O sistema operacional cria esses arquivos para acelerar o carregamento de aplicativos, mas eles se tornam um valioso artefato forense para rastrear a execução de programas."
    },
    {
      text: "Um crime cibernético sempre envolve o uso de malware.",
      answer: false,
      comment: "Errado. Muitos crimes cibernéticos, como cyberbullying, assédio, phishing e fraudes, podem ser cometidos usando técnicas de engenharia social e o funcionamento normal de plataformas online, sem a necessidade de malware."
    },
    {
      text: "A análise de 'timestamps' (datas e horários) de arquivos, como MAC times (Modified, Accessed, Created), é fundamental para reconstruir a linha do tempo de um incidente.",
      answer: true,
      comment: "Certo. A correlação de timestamps de diferentes arquivos e logs do sistema ajuda a estabelecer a sequência de eventos durante um crime cibernético."
    },
    {
      text: "A computação forense se aplica apenas a computadores desktop e servidores, não a dispositivos móveis como smartphones.",
      answer: false,
      comment: "Errado. A forense de dispositivos móveis (Mobile Forensics) é um campo especializado e crucial, pois smartphones contêm uma vasta quantidade de dados pessoais, como registros de chamadas, mensagens, dados de localização e informações de aplicativos."
    },
    {
      text: "Um 'write blocker' (bloqueador de escrita) é um dispositivo de hardware ou software que permite a aquisição de dados de uma mídia sem o risco de alterar seu conteúdo.",
      answer: true,
      comment: "Certo. O uso de bloqueadores de escrita é um procedimento padrão para garantir que a evidência original não seja contaminada durante o processo de criação da imagem forense."
    },
    {
      text: "Ataques de 'SQL Injection' exploram vulnerabilidades em aplicações web para executar comandos SQL maliciosos no banco de dados do servidor.",
      answer: true,
      comment: "Certo. Vestígios de um ataque de injeção de SQL podem ser encontrados nos logs do servidor web (nas requisições HTTP) e nos logs do próprio banco de dados."
    },
    {
      text: "A análise forense de um sistema deve sempre começar pela análise do disco rígido, ignorando a memória RAM.",
      answer: false,
      comment: "Errado. De acordo com a ordem de volatilidade, a coleta deve começar pelos dados mais voláteis (registradores da CPU, cache, RAM) e depois seguir para os menos voláteis (disco rígido, backups)."
    },
    {
      text: "A atribuição de um ataque cibernético (identificar o autor) é uma tarefa simples e direta na computação forense.",
      answer: false,
      comment: "Errado. A atribuição é uma das tarefas mais difíceis, pois os criminosos frequentemente usam técnicas para ofuscar sua identidade, como o uso de proxies, VPNs, redes de bots (botnets) e computadores comprometidos."
    },
    {
      text: "Os logs de um servidor proxy podem ser usados para rastrear a atividade de navegação na web de usuários de uma rede interna.",
      answer: true,
      comment: "Certo. Servidores proxy registram as requisições web feitas pelos clientes, incluindo os sites visitados, horários e endereços IP, sendo um vestígio valioso."
    },
    {
      text: "A análise de artefatos do sistema de arquivos, como a Master File Table (MFT) no NTFS, pode revelar informações sobre arquivos que já foram deletados.",
      answer: true,
      comment: "Certo. A MFT contém um registro para cada arquivo e diretório no volume. As entradas de arquivos deletados muitas vezes não são removidas imediatamente, preservando seus metadados."
    },
    {
      text: "Um ataque de 'Cross-Site Scripting' (XSS) compromete o servidor, permitindo que o atacante execute scripts no banco de dados.",
      answer: false,
      comment: "Errado. O XSS é um ataque que injeta scripts maliciosos em sites visualizados por outros usuários. O script é executado no navegador da vítima, não no servidor, e pode ser usado para roubar cookies de sessão ou realizar outras ações em nome da vítima."
    },
    {
      text: "A fase de 'apresentação' no processo forense envolve a comunicação das descobertas de forma clara e concisa, seja em um relatório escrito ou em um testemunho oral.",
      answer: true,
      comment: "Certo. A apresentação deve ser compreensível para um público não técnico, como advogados, juízes e jurados."
    },
    {
      text: "A análise de cabeçalhos de e-mail pode revelar o caminho que o e-mail percorreu na internet, incluindo os servidores de e-mail intermediários e o endereço IP do remetente original.",
      answer: true,
      comment: "Certo. Os cabeçalhos completos de um e-mail contêm informações de roteamento detalhadas que são cruciais para rastrear a origem de e-mails maliciosos ou de phishing."
    },
    {
      text: "A computação forense lida apenas com a recuperação de dados, não com a análise de malware.",
      answer: false,
      comment: "Errado. A análise de malware (Malware Forensics) é uma subdisciplina da computação forense que se concentra em dissecar software malicioso para entender seu comportamento, origem e impacto."
    },
    {
      text: "O 'carving' de arquivos é uma técnica usada para recuperar arquivos de um meio de armazenamento com base em seus cabeçalhos e rodapés (assinaturas de arquivo), mesmo que as informações do sistema de arquivos tenham sido perdidas.",
      answer: true,
      comment: "Certo. O carving é especialmente útil para recuperar arquivos de mídias formatadas ou corrompidas, procurando por padrões de bytes conhecidos que marcam o início e o fim de tipos de arquivos específicos (como JPEG, PDF, etc.)."
    },
    {
      text: "A legislação de um país não tem impacto sobre os procedimentos de computação forense.",
      answer: false,
      comment: "Errado. Os procedimentos forenses devem estar em estrita conformidade com as leis locais e nacionais sobre privacidade, coleta de dados e admissibilidade de evidências para que os resultados sejam legalmente válidos."
    },
    {
      text: "Um 'keylogger' é um tipo de spyware que registra as teclas digitadas por um usuário, sendo um método comum para roubar senhas e outras informações confidenciais.",
      answer: true,
      comment: "Certo. Os vestígios de um keylogger podem ser o próprio software malicioso ou os arquivos de log onde ele armazena as teclas capturadas."
    },
    {
      text: "A análise forense de dados na nuvem é idêntica à análise de um disco rígido local.",
      answer: false,
      comment: "Errado. A forense na nuvem envolve desafios únicos, como a dependência do provedor de nuvem para obter acesso aos dados, a volatilidade dos dados em ambientes virtualizados e questões de jurisdição internacional."
    },
    {
      text: "O 'spoofing' de endereço IP é uma técnica onde um atacante falsifica o endereço IP de origem em um pacote de rede para esconder sua identidade ou para se passar por outro sistema.",
      answer: true,
      comment: "Certo. O spoofing é frequentemente usado em ataques de negação de serviço (DDoS) para dificultar o rastreamento da origem do ataque."
    },
    {
      text: "A análise de 'link files' (.lnk) no Windows pode revelar que um usuário abriu um arquivo específico, mesmo que o arquivo original tenha sido deletado.",
      answer: true,
      comment: "Certo. O Windows cria arquivos de atalho (.lnk) quando um usuário acessa um arquivo, e esses atalhos contêm metadados sobre o arquivo original, como seu caminho e timestamps, que persistem mesmo após a exclusão do alvo."
    },
    {
      text: "A principal preocupação da computação forense é punir os criminosos.",
      answer: false,
      comment: "Errado. A principal preocupação da computação forense é a coleta, preservação, análise e apresentação de evidências digitais de forma objetiva e defensável. A punição é uma decisão do sistema judicial, baseada nas evidências apresentadas."
    },
    {
      text: "Os dados do 'Volume Shadow Copy' no Windows podem conter versões anteriores de arquivos, fornecendo um 'snapshot' do sistema em um ponto anterior no tempo, o que é útil para análise forense.",
      answer: true,
      comment: "Certo. Mesmo que um arquivo tenha sido modificado ou deletado, versões mais antigas podem ser recuperadas a partir das cópias de sombra, se estiverem habilitadas."
    },
    {
      text: "Um ataque de 'força bruta' a uma senha envolve explorar uma vulnerabilidade de software para contornar a autenticação.",
      answer: false,
      comment: "Errado. Um ataque de força bruta consiste em tentar sistematicamente todas as combinações possíveis de senhas até encontrar a correta. Vestígios incluem um grande número de tentativas de login falhas nos logs de autenticação."
    },
    {
      text: "A análise forense de um navegador de internet pode revelar o histórico de sites visitados, cookies, cache e senhas salvas.",
      answer: true,
      comment: "Certo. Os navegadores armazenam uma grande quantidade de dados sobre a atividade do usuário que são extremamente valiosos em uma investigação."
    },
    {
      text: "A triagem forense (triage) é o processo de examinar rapidamente um grande volume de dados ou dispositivos para identificar as fontes de evidência mais promissoras e priorizar a análise.",
      answer: true,
      comment: "Certo. A triagem é essencial em investigações com múltiplos dispositivos para otimizar o tempo e os recursos, focando nos itens mais relevantes primeiro."
    },
    {
      text: "A 'engenharia social' é um tipo de ataque que explora vulnerabilidades de hardware.",
      answer: false,
      comment: "Errado. A engenharia social explora a psicologia humana, manipulando pessoas para que elas realizem ações ou divulguem informações confidenciais. Phishing é um exemplo clássico."
    },
    {
      text: "A análise do 'pagefile.sys' ou do arquivo de troca (swap) no Windows pode revelar fragmentos de dados que estiveram na memória RAM.",
      answer: true,
      comment: "Certo. O sistema operacional move páginas de memória da RAM para o disco quando a RAM está cheia. Esses arquivos de troca podem conter vestígios valiosos que sobreviveram a um desligamento do sistema."
    },
    {
      text: "O uso de ferramentas forenses de código aberto (open source) não é permitido em investigações oficiais.",
      answer: false,
      comment: "Errado. Ferramentas open source, como Autopsy e The Sleuth Kit, são amplamente utilizadas e aceitas na comunidade forense, desde que sejam devidamente validadas e seu uso seja bem documentado."
    },
    {
      text: "A 'Internet das Coisas' (IoT) não gera vestígios digitais relevantes para a computação forense.",
      answer: false,
      comment: "Errado. Dispositivos IoT (câmeras, assistentes de voz, smartwatches) são fontes crescentes de vestígios digitais, registrando dados de localização, áudio, vídeo e padrões de uso que podem ser cruciais para uma investigação."
    },
    {
      text: "Um 'botnet' é uma rede de computadores privados infectados com software malicioso e controlados como um grupo por um atacante para fins como o envio de spam ou ataques DDoS.",
      answer: true,
      comment: "Certo. A análise de um computador pode revelar se ele faz parte de um botnet, procurando por software de comando e controle (C&C) e tráfego de rede suspeito."
    },
    {
      text: "A validação de ferramentas forenses é o processo de garantir que uma ferramenta funciona de forma correta e confiável, produzindo resultados precisos e repetíveis.",
      answer: true,
      comment: "Certo. É um princípio fundamental que o perito seja capaz de provar que as ferramentas utilizadas são confiáveis e não alteram a evidência."
    },
    {
      text: "O 'dump' de memória é o processo de copiar o conteúdo do disco rígido.",
      answer: false,
      comment: "Errado. O 'dump' de memória é o processo de copiar o conteúdo da memória RAM volátil para um arquivo para análise posterior."
    },
    {
      text: "A análise de logs de um servidor web pode ajudar a identificar um ataque de injeção de SQL.",
      answer: true,
      comment: "Certo. As requisições HTTP maliciosas contendo comandos SQL geralmente ficam registradas nos logs de acesso do servidor web, sendo um vestígio claro do ataque."
    },
    {
      text: "A computação forense é um processo puramente técnico que não envolve considerações legais ou éticas.",
      answer: false,
      comment: "Errado. A computação forense está intrinsecamente ligada a questões legais e éticas, incluindo o direito à privacidade, a legalidade da busca e apreensão de dados e a necessidade de manter a objetividade."
    },
    {
      text: "Os 'pontos de restauração' do sistema Windows podem conter cópias de arquivos de sistema e do registro, úteis para analisar o estado do sistema antes de um incidente.",
      answer: true,
      comment: "Certo. Assim como as Volume Shadow Copies, os pontos de restauração podem preservar evidências que foram alteradas ou deletadas pelo malware ou pelo invasor."
    },
    {
      text: "A análise de arquivos de log é inútil se os relógios dos sistemas envolvidos não estiverem sincronizados.",
      answer: false,
      comment: "Errado. Embora a falta de sincronização (usando NTP, por exemplo) torne a correlação de eventos mais difícil, a análise ainda é possível e valiosa. O perito deve documentar e tentar compensar as diferenças de horário."
    }
  ],
  "forense-coleta-exames": [
    {
      text: "A identificação de vestígios cibernéticos se restringe a localizar arquivos em um disco rígido.",
      answer: false,
      comment: "Errado. A identificação abrange todas as fontes potenciais de evidência digital, incluindo dispositivos móveis, servidores, contas na nuvem, dispositivos de rede, mídias removíveis e dispositivos IoT."
    },
    {
      text: "Isolar um dispositivo da rede (desconectando o cabo ou desativando o Wi-Fi) é um passo crucial para impedir a contaminação remota da evidência ou a destruição de dados por um invasor.",
      answer: true,
      comment: "Certo. O isolamento previne que o dispositivo envie ou receba dados, preservando seu estado no momento da apreensão."
    },
    {
      text: "Uma 'imagem forense' ou 'cópia bit a bit' é um arquivo que contém uma cópia exata, setor por setor, de uma mídia de armazenamento, incluindo arquivos deletados e espaço não alocado.",
      answer: true,
      comment: "Certo. Criar uma imagem forense é o principal método de preservação, permitindo que a análise seja feita na cópia sem alterar a evidência original."
    },
    {
      text: "A coleta de dados de um sistema ligado deve seguir a 'Ordem de Volatilidade', começando pelos dados menos voláteis, como os de um disco rígido.",
      answer: false,
      comment: "Errado. A coleta deve começar pelos dados MAIS voláteis, que são perdidos mais facilmente. A ordem típica é: registradores/cache da CPU, RAM, arquivos de troca (swap), disco rígido, mídias de backup."
    },
    {
      text: "O exame de análise de timeline (linha do tempo) consiste em organizar eventos de múltiplas fontes de dados (logs, timestamps de arquivos) em ordem cronológica para reconstruir a sequência de atividades.",
      answer: true,
      comment: "Certo. A análise de timeline é um dos exames mais fundamentais para entender como um incidente de segurança ocorreu."
    },
    {
      text: "Um saco de Faraday é usado para armazenar evidências porque é transparente, facilitando a visualização do dispositivo.",
      answer: false,
      comment: "Errado. Um saco de Faraday é uma gaiola de Faraday portátil, usada para isolar dispositivos móveis (smartphones, tablets) de redes sem fio (Celular, Wi-Fi, Bluetooth, GPS), impedindo a comunicação remota e a alteração de dados."
    },
    {
      text: "A preservação de vestígios cibernéticos termina assim que a coleta de dados é concluída.",
      answer: false,
      comment: "Errado. A preservação é um processo contínuo que inclui a manutenção da cadeia de custódia, o armazenamento seguro da evidência original e de suas cópias, e a documentação de todo o manuseio até a conclusão do caso."
    },
    {
      text: "O exame de 'carving' de arquivos é usado para recuperar arquivos baseando-se nas informações do sistema de arquivos.",
      answer: false,
      comment: "Errado. O file carving é usado quando as informações do sistema de arquivos estão ausentes ou corrompidas. Ele funciona procurando por assinaturas de arquivo (cabeçalhos e rodapés) diretamente nos dados brutos do disco."
    },
    {
      text: "A coleta de dados da memória RAM de um computador ligado é chamada de 'memory dump' ou 'live acquisition'.",
      answer: true,
      comment: "Certo. Este é um exame crucial, pois a RAM contém dados voláteis como processos em execução, conexões de rede, senhas e chaves de criptografia que seriam perdidos se o computador fosse desligado."
    },
    {
      text: "O exame do registro do Windows é útil para encontrar informações sobre o hardware do sistema, mas não sobre a atividade do usuário.",
      answer: false,
      comment: "Errado. O registro do Windows é uma mina de ouro de vestígios sobre a atividade do usuário, incluindo programas executados (MRUs - Most Recently Used), arquivos abertos, dispositivos USB conectados, redes Wi-Fi e muito mais."
    },
    {
      text: "Ao coletar um computador, a primeira ação deve ser sempre desligá-lo pelo botão de energia para garantir que todos os dados sejam salvos.",
      answer: false,
      comment: "Errado. Desligar um computador de forma inadequada pode destruir dados voláteis cruciais na RAM. Se o sistema estiver ligado, a prioridade é a coleta de memória volátil antes de qualquer desligamento (que, se necessário, deve ser feito 'puxando o cabo' para evitar processos de shutdown que alteram o disco)."
    },
    {
      text: "A análise de logs de servidores web é um exame fundamental para investigar ataques a aplicações web, como SQL Injection e Cross-Site Scripting (XSS).",
      answer: true,
      comment: "Certo. Os logs de acesso e erro registram as requisições recebidas pelo servidor, podendo conter os próprios payloads dos ataques, IPs de origem e a identidade do atacante."
    },
    {
      text: "A identificação de vestígios em ambientes de nuvem é mais fácil do que em sistemas locais, pois todos os logs estão em um único lugar.",
      answer: false,
      comment: "Errado. A identificação na nuvem é complexa. Os dados podem estar distribuídos geograficamente, e o acesso aos logs depende da cooperação do provedor de nuvem e dos serviços contratados pelo cliente. A natureza efêmera de recursos na nuvem também é um desafio."
    },
    {
      text: "A análise estática de malware envolve executar o código malicioso em um ambiente controlado (sandbox) para observar seu comportamento.",
      answer: false,
      comment: "Errado. Isso descreve a análise dinâmica. A análise estática examina o código do malware sem executá-lo, procurando por strings, chamadas de API, informações do cabeçalho do arquivo e desmontando o código para entender sua funcionalidade."
    },
    {
      text: "O uso de um 'write blocker' (bloqueador de escrita) durante a coleta de dados de um disco rígido é essencial para a preservação da evidência.",
      answer: true,
      comment: "Certo. O bloqueador de escrita (hardware ou software) impede que o sistema operacional do perito faça qualquer alteração na mídia original durante a criação da imagem forense."
    },
    {
      text: "O exame de metadados de arquivos pode revelar informações como o autor do documento, datas de criação/modificação e, às vezes, até coordenadas de GPS (em fotos de smartphones).",
      answer: true,
      comment: "Certo. Metadados EXIF em imagens, por exemplo, são uma fonte valiosa de informações sobre quando, onde e com que dispositivo uma foto foi tirada."
    },
    {
      text: "O isolamento de um smartphone em um saco de Faraday impede que o dispositivo seja remotamente apagado pelo proprietário ou por um invasor.",
      answer: true,
      comment: "Certo. Ao bloquear todos os sinais sem fio, o saco de Faraday garante que o dispositivo não possa receber um comando de 'remote wipe', preservando os dados para a coleta."
    },
    {
      text: "A análise de tráfego de rede (Network Forensics) examina o conteúdo de arquivos armazenados em um disco.",
      answer: false,
      comment: "Errado. A análise de tráfego de rede examina os pacotes de dados que trafegam por uma rede. Ela busca identificar comunicações maliciosas, exfiltração de dados e a origem de ataques, geralmente analisando arquivos de captura de pacotes (PCAP)."
    },
    {
      text: "A coleta de dados em um ambiente virtualizado (VM) é idêntica à de uma máquina física.",
      answer: false,
      comment: "Errado. A coleta em VMs apresenta oportunidades e desafios. É possível coletar 'snapshots' da VM, que incluem o estado da memória e do disco. No entanto, a análise deve considerar a camada de virtualização (hypervisor) e os artefatos específicos do ambiente."
    },
    {
      text: "O exame de artefatos de navegadores web (histórico, cache, cookies) pode reconstruir a atividade online de um suspeito.",
      answer: true,
      comment: "Certo. Esses artefatos mostram quais sites foram visitados, quais pesquisas foram feitas, e os cookies podem conter informações de sessão que ligam o usuário a contas online."
    },
    {
      text: "A fase de identificação do processo forense deve ser documentada, mas não é tão importante quanto a fase de coleta.",
      answer: false,
      comment: "Errado. A identificação é crucial. Falhar em identificar uma fonte de evidência relevante (como um backup na nuvem ou um dispositivo USB escondido) pode comprometer toda a investigação."
    },
    {
      text: "A análise da Master File Table (MFT) em um sistema de arquivos NTFS é um exame que pode revelar a existência de arquivos que foram deletados.",
      answer: true,
      comment: "Certo. A MFT contém uma entrada para cada arquivo no volume. Quando um arquivo é deletado, sua entrada na MFT é marcada como não utilizada, mas os metadados do arquivo frequentemente permanecem até que a entrada seja reutilizada."
    },
    {
      text: "A preservação da cadeia de custódia é uma formalidade burocrática com pouca importância prática.",
      answer: false,
      comment: "Errado. A cadeia de custódia é um requisito legal fundamental. Uma falha em sua manutenção pode tornar a evidência digital inadmissível em um tribunal, independentemente de quão incriminadora ela seja."
    },
    {
      text: "A análise dinâmica de malware é mais segura que a análise estática, pois o malware não é executado.",
      answer: false,
      comment: "Errado. A análise dinâmica é inerentemente mais arriscada, pois envolve a execução do malware. Ela deve ser feita em um ambiente isolado e seguro (sandbox) para evitar que o malware infecte o sistema do analista ou se espalhe pela rede."
    },
    {
      text: "Durante a coleta de dados, é uma boa prática usar ferramentas que foram validadas para garantir que elas funcionem como esperado e não alterem a evidência.",
      answer: true,
      comment: "Certo. A validação de ferramentas é um princípio chave da computação forense, garantindo que os resultados sejam confiáveis e defensáveis."
    },
    {
      text: "O exame de arquivos de log do sistema (como o Event Viewer no Windows) pode mostrar horários de login/logout, falhas de autenticação e instalação de software.",
      answer: true,
      comment: "Certo. Os logs do sistema são uma fonte primária de informações para rastrear as atividades que ocorreram em um computador."
    },
    {
      text: "A coleta de dados de dispositivos IoT (Internet das Coisas) é sempre direta, pois eles usam sistemas de arquivos padrão.",
      answer: false,
      comment: "Errado. A coleta em dispositivos IoT é um grande desafio. Muitos usam sistemas de arquivos proprietários, armazenamento não padrão (como memória flash soldada) e podem não ter interfaces de acesso fáceis, exigindo técnicas especializadas."
    },
    {
      text: "A esteganálise é o exame realizado para detectar a presença de esteganografia, ou seja, a ocultação de dados dentro de outros arquivos.",
      answer: true,
      comment: "Certo. Enquanto a esteganografia esconde os dados, a esteganálise é o processo de descobrir esses dados ocultos, muitas vezes procurando por anomalias estatísticas no arquivo portador."
    },
    {
      text: "A coleta de dados de um smartphone deve ser feita com o aparelho no 'modo avião' para isolá-lo de redes.",
      answer: true,
      comment: "Certo. Colocar o dispositivo em modo avião (se possível) é uma alternativa ao saco de Faraday para realizar o isolamento de redes sem fio durante a coleta."
    },
    {
      text: "A análise de 'slack space' (espaço ocioso) é um exame que investiga o espaço não utilizado no final de um arquivo, que pode conter dados de arquivos deletados anteriormente.",
      answer: true,
      comment: "Certo. Como os arquivos são alocados em blocos (clusters) de tamanho fixo, o espaço entre o final real do arquivo e o final do bloco pode conter informações residuais importantes."
    },
    {
      text: "A identificação de todos os dispositivos de armazenamento conectados a um computador pode ser feita examinando o registro do Windows, especificamente as chaves relacionadas a dispositivos USB.",
      answer: true,
      comment: "Certo. A chave 'USBSTOR' no registro, por exemplo, armazena informações sobre os dispositivos de armazenamento USB que foram conectados ao sistema, incluindo marca, modelo e número de série."
    },
    {
      text: "O exame de e-mails se concentra apenas no conteúdo do corpo da mensagem.",
      answer: false,
      comment: "Errado. A análise forense de e-mails examina intensivamente os cabeçalhos (headers) para rastrear a rota do e-mail, os servidores por onde passou e o IP de origem, além de analisar anexos em busca de malware ou outros vestígios."
    },
    {
      text: "A coleta de dados em um data center corporativo durante uma investigação requer apenas a permissão do gerente de TI.",
      answer: false,
      comment: "Errado. A coleta em um ambiente corporativo geralmente requer autorização legal (como um mandado) ou, no mínimo, autorização formal da alta gestão e do departamento jurídico da empresa, para evitar violações de privacidade e outras questões legais."
    },
    {
      text: "A análise de 'prefetch files' no Windows é um exame que pode determinar quais aplicativos foram executados recentemente no sistema.",
      answer: true,
      comment: "Certo. O sistema operacional cria esses arquivos para acelerar o carregamento de programas, mas eles se tornam um artefato forense valioso para rastrear a execução de software."
    },
    {
      text: "A preservação de evidências voláteis, como o conteúdo da RAM, não é importante se o disco rígido for copiado corretamente.",
      answer: false,
      comment: "Errado. A evidência volátil é extremamente importante, pois contém informações sobre o estado do sistema em tempo de execução que não existem no disco rígido, como processos ativos, conexões de rede e chaves de criptografia em memória."
    },
    {
      text: "A análise de 'shellbags' no registro do Windows é um exame que pode revelar quais pastas um usuário acessou no Windows Explorer.",
      answer: true,
      comment: "Certo. As 'shellbags' armazenam as preferências de visualização de pastas (tamanho, posição do ícone, etc.), e esses vestígios persistem mesmo que as pastas tenham sido deletadas, provando que o usuário navegou por elas."
    },
    {
      text: "A coleta de dados de um serviço de nuvem como o Google Drive pode ser feita simplesmente conectando o disco rígido do Google ao computador do perito.",
      answer: false,
      comment: "Errado. Isso é impossível. A coleta de dados na nuvem requer interação com a API do provedor ou cooperação legal com a empresa. Os dados estão em uma infraestrutura massiva e distribuída, não em um único disco acessível."
    },
    {
      text: "A análise de 'Volume Shadow Copies' (cópias de sombra) no Windows pode permitir a recuperação de versões anteriores de arquivos que foram modificados ou deletados.",
      answer: true,
      comment: "Certo. Este é um exame crucial, pois pode frustrar as tentativas de um invasor de apagar seus rastros, permitindo ao perito ver o estado dos arquivos antes da alteração."
    },
    {
      text: "O isolamento físico de um servidor em um data center é sempre a primeira etapa da coleta.",
      answer: false,
      comment: "Errado. Desligar ou isolar um servidor de produção pode ter um impacto operacional imenso. Em muitos casos, a coleta é feita com o sistema online (live acquisition), de forma coordenada, para minimizar a interrupção do serviço, a menos que a gravidade do incidente exija o desligamento imediato."
    },
    {
      text: "A análise de 'link files' (.LNK) no Windows é um exame que pode mostrar que um usuário acessou um arquivo, mesmo que o arquivo original não exista mais.",
      answer: true,
      comment: "Certo. Os arquivos .LNK são atalhos que o Windows cria. Eles contêm metadados sobre o arquivo de destino, como seu caminho original e timestamps, que permanecem mesmo após a exclusão do arquivo alvo."
    },
    {
      text: "A coleta de dados de um celular pode ser feita usando ferramentas especializadas como Cellebrite UFED ou Magnet AXIOM.",
      answer: true,
      comment: "Certo. Essas são suítes de software forense líderes de mercado, projetadas para extrair dados de uma vasta gama de dispositivos móveis, contornando senhas e recuperando dados deletados."
    },
    {
      text: "O exame de 'hiberfil.sys' (arquivo de hibernação) no Windows pode ser considerado um 'dump' da memória RAM em um determinado momento.",
      answer: true,
      comment: "Certo. Quando um sistema hiberna, ele salva o conteúdo da RAM no arquivo hiberfil.sys. A análise desse arquivo pode revelar o mesmo tipo de informação de um dump de memória, como processos e dados que estavam ativos."
    },
    {
      text: "A identificação de vestígios em um ataque de ransomware envolve procurar apenas pelos arquivos criptografados.",
      answer: false,
      comment: "Errado. A investigação deve procurar também pela nota de resgate, o executável do malware, chaves de registro criadas por ele, logs de rede mostrando a comunicação com o servidor do atacante e o ponto de entrada da infecção."
    },
    {
      text: "A análise de 'pagefile.sys' (arquivo de paginação) pode revelar fragmentos de dados que foram movidos da RAM para o disco pelo sistema operacional.",
      answer: true,
      comment: "Certo. Similar ao arquivo de hibernação, o arquivo de paginação é usado como uma extensão da RAM e pode conter vestígios valiosos que sobreviveram a um reinício do sistema."
    },
    {
      text: "A coleta de dados de um smartwatch é impossível, pois ele não armazena dados.",
      answer: false,
      comment: "Errado. Smartwatches são dispositivos IoT que armazenam e geram uma grande quantidade de vestígios, como dados de GPS, frequência cardíaca, mensagens e registros de atividade, que podem ser coletados e analisados."
    },
    {
      text: "O exame de logs de um firewall é fundamental para identificar tentativas de acesso não autorizado a uma rede e as regras que permitiram ou bloquearam o tráfego.",
      answer: true,
      comment: "Certo. Os logs de firewall são uma das primeiras fontes a serem examinadas ao investigar uma intrusão na rede, mostrando IPs de origem/destino, portas e protocolos."
    },
    {
      text: "A coleta de um vestígio deve ser feita o mais rápido possível, mesmo que isso signifique não documentar o processo.",
      answer: false,
      comment: "Errado. A documentação meticulosa de cada passo da coleta é tão importante quanto a própria coleta. Uma evidência coletada sem a devida documentação e cadeia de custódia pode ser inútil em tribunal."
    },
    {
      text: "A análise de memória volátil é um exame que pode ajudar a encontrar malware que opera apenas na memória ('fileless malware') e não deixa rastros no disco rígido.",
      answer: true,
      comment: "Certo. Malware sem arquivo é uma técnica avançada onde o código malicioso reside apenas na RAM para evitar a detecção por antivírus baseados em arquivos. A análise de memória é a principal forma de detectá-lo."
    },
    {
      text: "A preservação de um vestígio digital significa apenas guardá-lo em um local seguro.",
      answer: false,
      comment: "Errado. A preservação envolve um conjunto de processos: garantir a integridade através de hashing, manter uma cadeia de custódia completa, proteger contra degradação física e eletromagnética, e documentar todo o ciclo de vida da evidência."
    },
    {
      text: "O exame do sistema de arquivos de um celular pode revelar aplicativos instalados, registros de chamadas, contatos, mensagens de texto e dados de aplicativos de terceiros.",
      answer: true,
      comment: "Certo. A extração do sistema de arquivos de um dispositivo móvel dá acesso a um vasto repositório de dados sobre a vida e as atividades do usuário."
    },
    {
      text: "A identificação de vestígios em um caso de assédio online (cyberbullying) se concentra na análise de hardware.",
      answer: false,
      comment: "Errado. Nesse tipo de caso, os vestígios mais importantes são as próprias comunicações: postagens em redes sociais, mensagens instantâneas, e-mails e comentários. A análise se concentra em plataformas online e nos dispositivos usados para acessá-las."
    },
    {
      text: "A análise de logs de um servidor de autenticação (como um Domain Controller) é um exame chave para investigar acessos não autorizados e ataques de força bruta.",
      answer: true,
      comment: "Certo. Esses logs registram todas as tentativas de login, bem-sucedidas e falhas, na rede, tornando-os essenciais para rastrear o movimento lateral de um invasor."
    },
    {
      text: "A coleta de dados de um drone não tem valor forense.",
      answer: false,
      comment: "Errado. Drones e seus controladores são fontes ricas de vestígios, incluindo dados de telemetria (rotas de voo, altitude, velocidade), coordenadas de GPS, fotos e vídeos, que podem ser cruciais em investigações criminais ou de acidentes."
    },
    {
      text: "O exame de 'jump lists' no Windows é um artefato que mostra os arquivos e aplicativos que um usuário acessou recentemente.",
      answer: true,
      comment: "Certo. As jump lists, associadas à barra de tarefas e ao menu Iniciar, fornecem uma linha do tempo da atividade recente do usuário, sendo um valioso exame forense."
    },
    {
      text: "A coleta de dados de um sistema em produção deve sempre priorizar a integridade da evidência em detrimento da continuidade do negócio.",
      answer: false,
      comment: "Errado. Em um ambiente corporativo, há um equilíbrio delicado. A resposta a incidentes geralmente envolve uma abordagem em fases para coletar evidências críticas enquanto se trabalha para restaurar o serviço e minimizar o impacto nos negócios. A decisão depende da gravidade do incidente."
    },
    {
      text: "A análise de logs de um servidor DNS pode revelar quais domínios um computador da rede interna tentou resolver, ajudando a identificar a comunicação com servidores de malware.",
      answer: true,
      comment: "Certo. Malware frequentemente se comunica com um servidor de Comando e Controle (C&C) usando um nome de domínio. Os logs de DNS podem mostrar essas tentativas de resolução de nome, mesmo que a comunicação tenha sido bloqueada."
    },
    {
      text: "A única forma de coletar dados de um disco rígido é removendo-o fisicamente do computador.",
      answer: false,
      comment: "Errado. Embora a remoção física seja comum, a coleta também pode ser feita através da rede (usando ferramentas como o 'dd' sobre 'netcat') ou inicializando o computador suspeito com um sistema operacional forense a partir de um pendrive (Live USB)."
    },
    {
      text: "A análise de fragmentos de arquivos recuperados através do 'carving' é sempre fácil, pois os arquivos são recuperados inteiros.",
      answer: false,
      comment: "Errado. O file carving muitas vezes recupera apenas fragmentos de arquivos, que podem estar corrompidos ou incompletos, exigindo um trabalho manual significativo do perito para reconstruir informações úteis a partir deles."
    },
    {
      text: "O exame final em uma investigação forense é sempre a análise de malware.",
      answer: false,
      comment: "Errado. Não existe uma ordem fixa de exames que se aplique a todos os casos. A sequência de exames depende da natureza do incidente. Em muitos casos, como fraude ou assédio, a análise de malware pode nem ser necessária."
    }
  ]
};

let questions = [];
let current = 0;
let score = 0;
let wrong = 0;
let answered = false;

const questionArea = document.getElementById('question-area');
const feedback = document.getElementById('feedback');
const progress = document.getElementById('progress');
const trueBtn = document.getElementById('true-btn');
const falseBtn = document.getElementById('false-btn');
const nextBtn = document.getElementById('next-btn');
const scoreCorrect = document.getElementById('score-correct');
const scoreWrong = document.getElementById('score-wrong');
const topicSelect = document.getElementById('topic-select');
const startQuizBtn = document.getElementById('start-quiz');
const themeToggle = document.getElementById('theme-toggle');
const themeToggleIcon = document.getElementById('theme-toggle-icon');

function loadQuestions() {
  const selectedTopic = topicSelect.value;
  if (selectedTopic === 'all') {
    questions = [];
    Object.values(questionsByTopic).forEach(topicQuestions => {
      questions.push(...topicQuestions);
    });
  } else {
    questions = [...questionsByTopic[selectedTopic]];
  }
  current = 0;
  score = 0;
  wrong = 0;
  answered = false;
  showQuestion();
}

function updateFooter() {
  const totalAnswered = score + wrong;
  const percentCorrect = totalAnswered > 0 ? Math.round((score / totalAnswered) * 100) : 0;
  scoreCorrect.textContent = `Acertos: ${score} (${percentCorrect}%)`;
  scoreWrong.textContent = `Erros: ${wrong}`;
}

function showQuestion() {
  if (questions.length === 0) {
    questionArea.textContent = 'Selecione um tópico para começar o quiz.';
    return;
  }
  const q = questions[current];
  questionArea.textContent = `Q${current + 1}: ${q.text}`;
  feedback.textContent = '';
  trueBtn.disabled = false;
  falseBtn.disabled = false;
  nextBtn.style.display = 'none';
  answered = false;
  progress.textContent = `Questão ${current + 1} de ${questions.length}`;
  updateFooter();
}

function answer(isTrue) {
  if (answered) return;
  answered = true;
  const q = questions[current];
  const correct = q.answer === isTrue;
  if (correct) {
    score++;
    feedback.innerHTML = `<b>Você acertou.</b> <br>${q.comment}`;
  } else {
    wrong++;
    feedback.innerHTML = `<b>Você errou!</b> <br>${q.comment}`;
  }
  trueBtn.disabled = true;
  falseBtn.disabled = true;
  nextBtn.style.display = current < questions.length - 1 ? 'inline-block' : 'none';
  updateFooter();
  if (current === questions.length - 1) {
    setTimeout(showResult, 1200);
  }
}

function nextQuestion() {
  if (current < questions.length - 1) {
    current++;
    showQuestion();
  }
}

function showResult() {
  questionArea.textContent = 'Quiz finalizado!';
  const percentCorrect = questions.length > 0 ? Math.round((score / questions.length) * 100) : 0;
  feedback.innerHTML = `Você acertou <b>${score}</b> de <b>${questions.length}</b> questões. <b>(${percentCorrect}%)</b>`;
  trueBtn.style.display = 'none';
  falseBtn.style.display = 'none';
  nextBtn.style.display = 'none';
  progress.textContent = '';
  updateFooter();
}

trueBtn.addEventListener('click', () => answer(true));
falseBtn.addEventListener('click', () => answer(false));
nextBtn.addEventListener('click', nextQuestion);
startQuizBtn.addEventListener('click', loadQuestions);

// Adicionar atalhos de teclado
document.addEventListener('keydown', (event) => {
  // Verificar se não há campos de texto em foco
  if (document.activeElement.tagName !== 'INPUT' && document.activeElement.tagName !== 'TEXTAREA' && document.activeElement.tagName !== 'SELECT') {
    // Tecla 'C' para resposta correta (Certo)
    if (event.key === 'c' || event.key === 'C') {
      if (!answered && !trueBtn.disabled) {
        answer(true);
      }
    }
    // Tecla 'E' para resposta errada (Errado)
    else if (event.key === 'e' || event.key === 'E') {
      if (!answered && !falseBtn.disabled) {
        answer(false);
      }
    }
    // Seta direita para próxima questão
    else if (event.key === 'ArrowRight') {
      if (nextBtn.style.display === 'inline-block') {
        nextQuestion();
      }
    }
    // Seta esquerda para questão anterior (se implementado)
    else if (event.key === 'ArrowLeft') {
      // Se houver uma função para questão anterior, chamá-la aqui
      if (current > 0 && !answered) {
        current--;
        showQuestion();
      }
    }
  }
});

// Funções para gerenciar o tema
function setTheme(theme) {
  if (theme === 'light') {
    document.documentElement.setAttribute('data-theme', 'light');
    themeToggleIcon.textContent = '☀️';
    localStorage.setItem('quiz-theme', 'light');
  } else {
    document.documentElement.removeAttribute('data-theme');
    themeToggleIcon.textContent = '🌙';
    localStorage.setItem('quiz-theme', 'dark');
  }
}

function toggleTheme() {
  const currentTheme = localStorage.getItem('quiz-theme') || 'dark';
  const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
  setTheme(newTheme);
}

// Inicializar tema com base na preferência salva
const savedTheme = localStorage.getItem('quiz-theme');
if (savedTheme) {
  setTheme(savedTheme);
}

// Event listener para o botão de alternância de tema
themeToggle.addEventListener('click', toggleTheme);

showQuestion(); 