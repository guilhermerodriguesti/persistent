const questions = [
    {
        "id": 1,
        "category": "TI - Redes de Computadores - Active Directory e Administração de Usuários",
        "text": "Julgue o próximo item, a respeito da administração de AD (Active Directory) usando linha de comando, considerando que minhaprova.com.br seja um domínio AD hipotético. O comando whoami /groups in minhaprova.com.br permite listar os grupos do referido domínio.",
        "answer": "ERRADO",
        "explanation": "Explicação disponível no sistema Tec Concursos."
    },
    {
        "id": 2,
        "category": "TI - Redes de Computadores - Active Directory e Administração de Usuários",
        "text": "A respeito de VPN, anti-DDoS, Nagios e Active Directory , julgue o item subsequente. O arquivo edb.log tem como função armazenar todo o banco de dados do Active Directory.",
        "answer": "ERRADO",
        "explanation": "Explicação disponível no sistema Tec Concursos."
    },
    {
        "id": 3,
        "category": "TI - Redes de Computadores - Windows Server 2012",
        "text": "Acerca de sistemas operacionais, arquitetura em nuvem e virtualização, julgue o item subsequente. A partir da versão Windows Server 2012, há a possibilidade de upgrade de arquiteturas de computador de 32 bits para 64 bits.",
        "answer": "ERRADO",
        "explanation": "Explicação disponível no sistema Tec Concursos."
    },
    {
        "id": 4,
        "category": "TI - Redes de Computadores - Windows Server 2019",
        "text": "Acerca de configuração e administração de Windows Server 2019, Active Directory, LDAP, GPO ( group policy objects ) e arquitetura de computadores, julgue o item a seguir. Um GPO é uma infraestrutura hierárquica que permite realizar alterações nos objetos de uma rede, como usuários, bloqueando o acesso ao armazenamento removível de sua estação de trabalho.",
        "answer": "CERTO",
        "explanation": "Explicação disponível no sistema Tec Concursos."
    },
    {
        "id": 5,
        "category": "TI - Redes de Computadores - Windows Server 2022",
        "text": "Em relação a configurações básicas de MS Windows Server e Linux, julgue o item a seguir. No MS Windows Server, a zona DNS é uma parte específica de um namespace DNS, em que o armazenamento, por padrão, está localizado na pasta %windir%\\System32\\Dns no servidor.",
        "answer": "CERTO",
        "explanation": "Explicação disponível no sistema Tec Concursos."
    },
    {
        "id": 6,
        "category": "TI - Redes de Computadores - Windows Server 2022",
        "text": "Em relação a configurações básicas de MS Windows Server e Linux, julgue o item a seguir. No MS Windows Server, o DHCP oferece uma configuração do endereço IP confiável, que minimiza erros de configuração manual de IP, e uma configuração centralizada e automatizada.",
        "answer": "CERTO",
        "explanation": "Explicação disponível no sistema Tec Concursos."
    },
    {
        "id": 7,
        "category": "TI - Redes de Computadores - Windows Server 2022",
        "text": "Julgue o item que se segue, relativo a instalação e suporte de TCP/IP, DHCP e DNS em ambiente Microsoft Windows. A configuração do TCP/IP em um computador Windows necessita apenas de dois parâmetros: o endereço IP e o gateway padrão.",
        "answer": "ERRADO",
        "explanation": "Explicação disponível no sistema Tec Concursos."
    },
    {
        "id": 8,
        "category": "TI - Redes de Computadores - Windows Server 2022",
        "text": "Julgue o item que se segue, relativo a instalação e suporte de TCP/IP, DHCP e DNS em ambiente Microsoft Windows. Em computadores Windows com adaptadores configurados para a obtenção automática de um endereço IP, o comando ipconfig/release permite renovar a configuração do DHCP para todos os adaptadores.",
        "answer": "ERRADO",
        "explanation": "Explicação disponível no sistema Tec Concursos."
    },
    {
        "id": 9,
        "category": "TI - Redes de Computadores - Windows Server 2022",
        "text": "Julgue o próximo item, relativo à administração de sistemas operacionais Linux e Windows. No Windows, o contêiner é um componente do Active Directory cuja função é oferecer simplificação administrativa por meio da delegação de direitos e da vinculação de GPO para definir configurações de usuários e computadores vinculados a ele.",
        "answer": "ERRADO",
        "explanation": "Explicação disponível no sistema Tec Concursos."
    },
    {
        "id": 10,
        "category": "Geral",
        "text": "TI - Redes de Computadores - Datacenters  Acerca dos componentes centrais da arquitetura em nuvem, julgue o item subsequente.  Uma zona de disponibilidade (AZ) é um conjunto de  data centers   de regiões distintas cuja finalidade é a de disponibilizar uma coleção de recursos em uma localização geográfica.  Certo  Errado",
        "answer": "ERRADO",
        "explanation": "Explicação disponível no sistema Tec Concursos."
    },
    {
        "id": 11,
        "category": "TI - Redes de Computadores - Datacenters",
        "text": "No que se refere às tecnologias de datacenters, julgue o próximo item. Devido às suas característica e configurações, datacenters não podem ser instalados em unidades móveis, como, por exemplo, em contêineres.",
        "answer": "ERRADO",
        "explanation": "Explicação disponível no sistema Tec Concursos."
    },
    {
        "id": 12,
        "category": "TI - Redes de Computadores - Datacenters",
        "text": "No que se refere às tecnologias de datacenters, julgue o próximo item. 813) 814) 815) 816) 817) 818) A redundância em datacenters, com a duplicação de diversos componentes, tem como objetivo aumentar o poder de processamento das máquinas neles instaladas.",
        "answer": "ERRADO",
        "explanation": "Explicação disponível no sistema Tec Concursos."
    },
    {
        "id": 13,
        "category": "TI - Redes de Computadores - Datacenters",
        "text": "No que se refere às tecnologias de datacenters, julgue o próximo item. Nos datacenters do tipo Tier IV, os serviços não são interrompidos quando ocorre falha em algum sistema, componente ou elemento de distribuição.",
        "answer": "CERTO",
        "explanation": "Explicação disponível no sistema Tec Concursos."
    },
    {
        "id": 14,
        "category": "TI - Redes de Computadores - Datacenters",
        "text": "A respeito de data centers, julgue o item que se segue. Data centers classificados como tier III operam no formato 24 × 7, em que podem ocorrer manutenções preventivas sem suspensão de suas operações.",
        "answer": "CERTO",
        "explanation": "Explicação disponível no sistema Tec Concursos."
    },
    {
        "id": 15,
        "category": "TI - Redes de Computadores - Datacenters",
        "text": "A respeito de data centers, julgue o item que se segue. Uma das medidas para dimensionar o tamanho de um data center é a quantidade de clientes remotos que acessam simultaneamente os seus servidores.",
        "answer": "ERRADO",
        "explanation": "Explicação disponível no sistema Tec Concursos."
    },
    {
        "id": 16,
        "category": "TI - Redes de Computadores - Datacenters",
        "text": "A respeito de data centers, julgue o item que se segue. A redundância em data centers diz respeito à multiplicidade de equipamentos e serviços que cumprem o mesmo objetivo: evitar paradas por falha e para manutenção.",
        "answer": "CERTO",
        "explanation": "Explicação disponível no sistema Tec Concursos."
    },
    {
        "id": 17,
        "category": "TI - Segurança da Informação - Conceitos de Criptografia (Chaves, Simetria, etc.)",
        "text": "Acerca de segurança da informação, segurança de datacenter, segurança de dispositivos e disponibilidade, julgue o item a seguir. Um ataque de dicionário é comumente empregado contra criptografias que utilizam chaves longas e complexas.",
        "answer": "ERRADO",
        "explanation": "Explicação disponível no sistema Tec Concursos."
    },
    {
        "id": 18,
        "category": "TI - Segurança da Informação - Conceitos de Criptografia (Chaves, Simetria, etc.)",
        "text": "Julgue o item a seguir, relativo ao uso de criptografia e suas características. Em criptografia simétrica, uma das características mais importantes é o tamanho variável de um bloco de bites . Além disso, a chave secreta sempre é mudada a cada mensagem enviada em um sistema de comunicação cifrado.",
        "answer": "ERRADO",
        "explanation": "Explicação disponível no sistema Tec Concursos."
    },
    {
        "id": 19,
        "category": "TI - Segurança da Informação - Conceitos de Criptografia (Chaves, Simetria, etc.)",
        "text": "Julgue o próximo item, a respeito de ataques, malwares, criptografia e certificação digital. Na criptografia simétrica, o texto cifrado resultante depende diretamente da chave secreta e do texto inteligível, usados como entrada para o algoritmo de criptografia.",
        "answer": "CERTO",
        "explanation": "Explicação disponível no sistema Tec Concursos."
    },
    {
        "id": 20,
        "category": "TI - Segurança da Informação - Conceitos de Criptografia (Chaves, Simetria, etc.)",
        "text": "Acerca de criptografia simétrica e de certificados digitais, julgue o seguinte item. Normalmente, a chave privada está incluída em um certificado digital, assim, o destinatário de uma mensagem assinada digitalmente é capaz de fazer a verificação de assinatura.",
        "answer": "ERRADO",
        "explanation": "Explicação disponível no sistema Tec Concursos."
    },
    {
        "id": 21,
        "category": "TI - Segurança da Informação - Conceitos de Criptografia (Chaves, Simetria, etc.)",
        "text": "Acerca de conceitos relativos à segurança da informação, julgue o item a seguir. A criptografia ajuda a determinar se os dados obtidos são provenientes de uma fonte confiável e não foram alterados durante a transmissão, obedecendo, assim, ao princípio da confidencialidade.",
        "answer": "ERRADO",
        "explanation": "Explicação disponível no sistema Tec Concursos."
    },
    {
        "id": 22,
        "category": "TI - Segurança da Informação - Conceitos de Criptografia (Chaves, Simetria, etc.)",
        "text": "Em relação a ameaças e vulnerabilidades em aplicações, julgue o item subsequente. São exemplos de armazenamento criptográfico inseguro: imprudência no armazenamento de chaves e utilização de um hash para proteção de senhas sem o salt.",
        "answer": "CERTO",
        "explanation": "Explicação disponível no sistema Tec Concursos."
    },
    {
        "id": 23,
        "category": "TI - Segurança da Informação - Conceitos de Criptografia (Chaves, Simetria, etc.)",
        "text": "Acerca de criptografia e proteção de dados, julgue o item a seguir. Independentemente do tamanho de dados armazenados, a técnica criptográfica mais eficiente e rápida é a de chave pública.",
        "answer": "ERRADO",
        "explanation": "Explicação disponível no sistema Tec Concursos."
    },
    {
        "id": 24,
        "category": "TI - Segurança da Informação - Conceitos de Criptografia (Chaves, Simetria, etc.)",
        "text": "Acerca de criptografia e proteção de dados, julgue o item a seguir. Em criptografia de curva elíptica, para ser considerada uma curva elíptica, a equação deve ser satisfeita.",
        "answer": "CERTO",
        "explanation": "Explicação disponível no sistema Tec Concursos."
    },
    {
        "id": 25,
        "category": "TI - Segurança da Informação - Conceitos de Criptografia (Chaves, Simetria, etc.)",
        "text": "Acerca de criptografia e proteção de dados, julgue o item a seguir. = + ax + b y 2 x 3 826) 827) 828) 829) 830) 831) A criptografia de curva elíptica é um tipo de sistema criptográfico simétrico embasado na estrutura algébrica de curvas elípticas sobre campos infinitos.",
        "answer": "ERRADO",
        "explanation": "Explicação disponível no sistema Tec Concursos."
    },
    {
        "id": 26,
        "category": "TI - Segurança da Informação - Conceitos de Criptografia (Chaves, Simetria, etc.)",
        "text": "Acerca de criptografia, de clean code , de refactoring e de JUnit, julgue o item seguinte. A criptografia de curvas elípticas é um método de criptografia de chave pública que se baseia na matemática de curvas elípticas para garantir a confidencialidade e a integridade de dados, além de ser resistente ao problema do logaritmo discreto de curva elíptica.",
        "answer": "CERTO",
        "explanation": "Explicação disponível no sistema Tec Concursos."
    },
    {
        "id": 27,
        "category": "TI - Segurança da Informação - Algoritmos de Criptografia",
        "text": "No que se refere a segurança de aplicativos web, prevenção e combate a ataques a redes de computadores e sistemas criptográficos, julgue o item a seguir. Em um sistema de comunicação em rede, a criptografia assimétrica, como o RSA, pode ser usada para proteger o processo de troca de uma chave secreta entre duas partes; após o compartilhamento seguro dessa chave, um algoritmo de criptografia simétrica, como o AES, pode ser utilizado para proteger a transmissão de grandes volumes de dados, devido à sua maior eficiência em comparação aos algoritmos assimétricos para esse tipo de tarefa.",
        "answer": "CERTO",
        "explanation": "Explicação disponível no sistema Tec Concursos."
    },
    {
        "id": 28,
        "category": "Geral",
        "text": "TI - Segurança da Informação - Algoritmos de Criptografia  Acerca dos algoritmos simétricos e assimétricos utilizados em dados em repouso, julgue o item subsecutivo.  SHA3 é um algoritmo de verificação de integridade simétrico, portanto sua saída é uma boa chave criptográfica para algoritmos simétricos.  Certo  Errado",
        "answer": "ERRADO",
        "explanation": "Explicação disponível no sistema Tec Concursos."
    },
    {
        "id": 29,
        "category": "TI - Segurança da Informação - Algoritmos de Criptografia",
        "text": "Acerca de assinatura e certificação digital, julgue o item que se segue. O algoritmo SHA512 é inseguro porque o ataque de repetição (replay attack) permite a colisão dos primeiros 64 bits de saída.",
        "answer": "ERRADO",
        "explanation": "Explicação disponível no sistema Tec Concursos."
    },
    {
        "id": 30,
        "category": "TI - Segurança da Informação - Algoritmos de Criptografia",
        "text": "Acerca de criptografia, julgue o item a seguir. O RSA é um algoritmo simétrico baseado no princípio da fatoração de grandes números primos, o que torna a chave privada fácil de ser deduzida com poder computacional doméstico de um PC a partir da chave pública.",
        "answer": "ERRADO",
        "explanation": "Explicação disponível no sistema Tec Concursos."
    },
    {
        "id": 31,
        "category": "TI - Segurança da Informação - Assinatura Digital",
        "text": "Acerca de protocolos de certificação digital e assinaturas digitais, julgue o item a seguir. Nesse sentido, considere que a sigla AC, sempre que empregada, se refere a autoridade certificadora. Assinatura digitalizada e assinatura digital, para fins de integridade, possuem as mesmas propriedades de integridade quanto à verificação de documentos eletrônicos. Certo 832) 833) 834) 835) 836) 837) Errado",
        "answer": "ERRADO",
        "explanation": "Explicação disponível no sistema Tec Concursos."
    },
    {
        "id": 32,
        "category": "Geral",
        "text": "TI - Segurança da Informação - Assinatura Digital  Acerca dos algoritmos simétricos e assimétricos utilizados em dados em repouso, julgue o item subsecutivo.  No sistema de arquivos do Ubuntu LTS 22.4, ao se utilizar algoritmo assimétrico para cifrar um conjunto de arquivos, é garantida automaticamente a assinatura digital do arquivo.  Certo  Errado",
        "answer": "ERRADO",
        "explanation": "Explicação disponível no sistema Tec Concursos."
    },
    {
        "id": 33,
        "category": "TI - Segurança da Informação - Conceitos de Certificado Digital",
        "text": "Julgue o item a seguir, a respeito de segurança, criptografia e automação. Um certificado digital do tipo A1 armazena a chave no próprio equipamento do usuário; no tipo A3, a chave é armazenada em dispositivos físicos portáteis, como tokens e cartões.",
        "answer": "CERTO",
        "explanation": "Explicação disponível no sistema Tec Concursos."
    },
    {
        "id": 34,
        "category": "TI - Segurança da Informação - Conceitos de Certificado Digital",
        "text": "Acerca de assinatura e certificação digital, julgue o item que se segue. No caso de um certificado digital com o algoritmo RSA, o tamanho adequado e seguro da chave é de 512 bits.",
        "answer": "ERRADO",
        "explanation": "Explicação disponível no sistema Tec Concursos."
    },
    {
        "id": 35,
        "category": "TI - Segurança da Informação - X.509",
        "text": "Acerca de criptografia, julgue o item a seguir. A estrutura de certificação digital do tipo X.509 é utilizada para emitir certificados SSL/TLS, em que a autoridade certificadora garante a autenticidade da chave pública.",
        "answer": "CERTO",
        "explanation": "Explicação disponível no sistema Tec Concursos."
    },
    {
        "id": 36,
        "category": "TI - Segurança da Informação - Malware (Vírus, Worms, Trojans, etc.)",
        "text": "Julgue o seguinte item, que tratam de proteção contra softwares maliciosos e de sistemas de detecção de intrusão. No ciclo de operação dos malwares, existe uma etapa conhecida como exfiltração, muito usada em ransomwares; nessa etapa, o malware envia os dados ou fornece ao agente malicioso uma forma de monetizar a situação.",
        "answer": "CERTO",
        "explanation": "Explicação disponível no sistema Tec Concursos."
    },
    {
        "id": 37,
        "category": "TI - Segurança da Informação - Malware (Vírus, Worms, Trojans, etc.)",
        "text": "Acerca de ataques de malware , julgue o próximo item. Ataques do tipo APT ( advanced persistent threats ) usam uma abordagem ampla e são projetados sem um alvo específico, sendo iniciados para causar danos à rede da organização-alvo, com o objetivo de se obter entrada e saída rápidas.",
        "answer": "ERRADO",
        "explanation": "Explicação disponível no sistema Tec Concursos."
    },
    {
        "id": 38,
        "category": "Geral",
        "text": "TI - Segurança da Informação - Engenharia Social e Phishing  Uma   grande   empresa   que   recentemente   migrou   suas   operações   para   um   ambiente   de   nuvem   está   preocupada   com   a   integridade,   confidencialidade   e disponibilidade dos seus dados, especialmente devido a incidentes recentes de segurança que ocorreram em outras organizações do mesmo setor de negócios. Essa empresa utiliza serviços de IaaS (Infrastructure as a Service) e está sob constante ameaça de ataques como modificação de dados, espionagem na rede, phishing, DDoS, ransomware, entre outros. Com isso, a área de segurança digital solicitou uma análise detalhada das possíveis vulnerabilidades e das medidas necessárias para mitigá-las.  A partir da situação hipotética precedente, julgue o seguinte item, em relação à segurança da informação.  Phishing é um ataque que compromete apenas a confidencialidade das informações.  Certo  Errado",
        "answer": "ERRADO",
        "explanation": "Explicação disponível no sistema Tec Concursos."
    },
    {
        "id": 39,
        "category": "TI - Segurança da Informação - Engenharia Social e Phishing Um usuário recebeu um email, aparentemente vindo do departamento de TI da sua empresa, no qual lhe era solicitada a validação urgente de suas credenciais em um link incluído na mensagem, sob pena de um possível bloqueio das credenciais caso a solicitação não fosse atendida. Sem desconfiar da mensagem, o usuário clicou no link e preencheu um formulário com seu nome de usuário e senha. Posteriormente, descobriu-se que as informações prestadas pelo usuário foram usadas por terceiro para acessar dados confidenciais e realizar atividades não autorizadas, em um ataque de phishing.",
        "text": "Considerando essa situação hipotética, julgue o item seguinte. A melhor contramedida contra o phishing seria usar algoritmos de criptografia mais robustos nas comunicações de email efetuadas na empresa.",
        "answer": "ERRADO",
        "explanation": "Explicação disponível no sistema Tec Concursos."
    },
    {
        "id": 40,
        "category": "TI - Segurança da Informação - Engenharia Social e Phishing",
        "text": "No que se refere à segurança da informação, julgue o item subsecutivo. Nos golpes cibernéticos promovidos com base em engenharia social, em geral, os invasores têm como objetivos a interrupção ou corrupção de dados para causar danos ou incômodos e obtenção de algum valor, tal como dinheiro ou acesso a informações ou a dados pessoais ou sigilosos.",
        "answer": "CERTO",
        "explanation": "Explicação disponível no sistema Tec Concursos."
    },
    {
        "id": 41,
        "category": "TI - Segurança da Informação - Spoofing",
        "text": "No que se refere a ataques em redes de computadores e redes wireless , julgue o item subsecutivo. Nos ataques do tipo access point spoofing, os invasores circulam fisicamente por regiões onde desejam realizar os ataques e descobrem as redes que existem por ali, bem como os equipamentos físicos através dos quais poderão realizar as invasões posteriormente.",
        "answer": "ERRADO",
        "explanation": "Explicação disponível no sistema Tec Concursos."
    },
    {
        "id": 42,
        "category": "TI - Segurança da Informação - Negação de Serviço (DoS) Um servidor web de uma empresa de e-commerce foi alvo de um ataque DDoS. Durante o ataque, o servidor começou a apresentar lentidão extrema, tornando-se incapaz de atender às requisições legítimas dos clientes. A equipe de segurança detectou um tráfego anormal proveniente de diversos endereços IP, todos de dispositivos comprometidos em diferentes partes do mundo, que inundavam o servidor com solicitações massivas e simultâneas, visando interromper ou degradar significativamente a disponibilidade do serviço de e-commerce.",
        "text": "Tendo como referência a situação hipotética precedente, julgue o item a seguir. A principal consequência de um ataque DDoS é a perda de integralidade dos dados armazenados no servidor atacado.",
        "answer": "ERRADO",
        "explanation": "Explicação disponível no sistema Tec Concursos."
    },
    {
        "id": 43,
        "category": "TI - Segurança da Informação - Negação de Serviço (DoS) 843) 844) 845) 846) 847) 848) 849)",
        "text": "A respeito de VPN, anti-DDoS, Nagios e Active Directory, julgue o item subsequente. Inundação SYN é um tipo de ataque distribuído de negação de serviço (DDoS) em que um grande número de solicitações HTTP inunda o servidor, resultando na interrupção do serviço.",
        "answer": "ERRADO",
        "explanation": "Explicação disponível no sistema Tec Concursos."
    },
    {
        "id": 44,
        "category": "TI - Segurança da Informação - Negação de Serviço (DoS)",
        "text": "No que se refere a ataques em redes de computadores e redes wireless , julgue o item subsecutivo. O ataque DoS se caracteriza por utilizar uma única fonte de conexões, enquanto um ataque DDoS utiliza várias fontes de tráfego de ataque, muitas vezes na forma de uma botnet .",
        "answer": "CERTO",
        "explanation": "Explicação disponível no sistema Tec Concursos."
    },
    {
        "id": 45,
        "category": "TI - Segurança da Informação - Ataques a Aplicações Web (XSS, CSRF, SQL Injection etc.)",
        "text": "Em relação à análise de vulnerabilidades, julgue o item a seguir. Cross-site scripting é um tipo clássico de CVE ( Common Vulnerabilities and Exposures ) que permite a neutralização de entradas com parâmetros inadequados para um sistema Web.",
        "answer": "ERRADO",
        "explanation": "Explicação disponível no sistema Tec Concursos."
    },
    {
        "id": 46,
        "category": "TI - Segurança da Informação - Ataques a Aplicações Web (XSS, CSRF, SQL Injection etc.)",
        "text": "Julgue o próximo item, a respeito de XSS (cross-site scripting). https://www.apenasexemplo.com.br/?name=<scrip t>alert(1)</script> é um exemplo de XSS Reflected e será executado no navegador do usuário.",
        "answer": "CERTO",
        "explanation": "Explicação disponível no sistema Tec Concursos."
    },
    {
        "id": 47,
        "category": "TI - Segurança da Informação - Ataques a Aplicações Web (XSS, CSRF, SQL Injection etc.)",
        "text": "Com base em CSRF (cross site request forgery) , julgue o item subsequente. Por fundamento de CSRF, o uso de cookies é suficiente para garantir que uma aplicação não seja vulnerável à exploração de CSRF.",
        "answer": "ERRADO",
        "explanation": "Explicação disponível no sistema Tec Concursos."
    },
    {
        "id": 48,
        "category": "TI - Segurança da Informação - Ataques a Aplicações Web (XSS, CSRF, SQL Injection etc.)",
        "text": "Em relação a ameaças e vulnerabilidades em aplicações, julgue o item subsequente. Cross-site request forgery é um vetor de ataque que faz que o navegador web execute uma ação indesejada na aplicação web alvo onde a vítima está logada.",
        "answer": "CERTO",
        "explanation": "Explicação disponível no sistema Tec Concursos."
    },
    {
        "id": 49,
        "category": "TI - Segurança da Informação - Ataques a Aplicações Web (XSS, CSRF, SQL Injection etc.)",
        "text": "Em relação a ameaças e vulnerabilidades em aplicações, julgue o item subsequente. O SQL injection e o cross - site scripting utilizam a linguagem JavaScript.",
        "answer": "ERRADO",
        "explanation": "Explicação disponível no sistema Tec Concursos."
    },
    {
        "id": 50,
        "category": "TI - Segurança da Informação - Ataques a Aplicações Web (XSS, CSRF, SQL Injection etc.)",
        "text": "Considerando os tipos de ataques comuns a redes de computadores e sistemas, julgue o item a seguir. Um ataque do tipo SQL injection requer a existência de uma falha na aplicação relacionada com a sanitização de parâmetros, de modo que um hacker possa enviar comandos SQL para o banco de dados por meio da aplicação exposta.",
        "answer": "CERTO",
        "explanation": "Explicação disponível no sistema Tec Concursos."
    },
    {
        "id": 51,
        "category": "TI - Segurança da Informação - Ameaças Técnicas Relacionadas a Redes e Criptografia",
        "text": "A respeito de port scanning , julgue o item a seguir. A varredura de porta TCP com a técnica de SYN scan não abre uma conexão TCP completa.",
        "answer": "CERTO",
        "explanation": "Explicação disponível no sistema Tec Concursos."
    },
    {
        "id": 52,
        "category": "TI - Segurança da Informação - Ameaças Técnicas Relacionadas a Redes e Criptografia",
        "text": "Julgue o item subsequente referente a conceitos de segurança da informação, segurança de redes sem fio e gestão de riscos em tecnologia da informação. A prática conhecida como wardriving consiste em procurar e mapear redes sem fio, podendo as informações obtidas ser usadas para a identificação de redes inseguras ou vulneráveis, assim como das que estão disponíveis para uso público.",
        "answer": "CERTO",
        "explanation": "Explicação disponível no sistema Tec Concursos."
    },
    {
        "id": 53,
        "category": "TI - Segurança da Informação - Questões Mescladas de Ameaças aos Sistemas Computacionais",
        "text": "Julgue o próximo item, a respeito de ataques de negação de serviço, controles CIS, gerenciamento de incidentes de segurança da informação e gestão de riscos e continuidade de negócio. Um dos métodos usados em ataques PDoS consiste em explorar vulnerabilidades de um sistema ou dispositivo para substituir seu software básico por uma imagem corrompida de firmware , inviabilizando, assim, o funcionamento do dispositivo ou do sistema inteiro.",
        "answer": "CERTO",
        "explanation": "Explicação disponível no sistema Tec Concursos."
    },
    {
        "id": 54,
        "category": "TI - Segurança da Informação - Questões Mescladas de Ameaças aos Sistemas Computacionais",
        "text": "Julgue o próximo item, relativo a ameaças e ataques de email e a aplicações web em redes de computadores e redes wireless. Os ataques DoS e DDoS visam indisponibilizar recursos, enquanto técnicas de sniffing e spoofing interceptam e manipulam dados.",
        "answer": "CERTO",
        "explanation": "Explicação disponível no sistema Tec Concursos."
    },
    {
        "id": 55,
        "category": "TI - Segurança da Informação - Questões Mescladas de Ameaças aos Sistemas Computacionais",
        "text": "Acerca de ataques de malware , julgue o próximo item. Leakware/doxware é um tipo de ransomware em que se ameaça destruir os dados se o resgate não for pago, havendo casos em que se destroem os dados mesmo tendo sido efetivado o pagamento do resgate.",
        "answer": "ERRADO",
        "explanation": "Explicação disponível no sistema Tec Concursos."
    },
    {
        "id": 56,
        "category": "TI - Segurança da Informação - Backup",
        "text": "Acerca de tecnologias de backu p de dados em ambientes de alta disponibilidade, julgue o item abaixo. Caso se deseje copiar apenas os últimos arquivos modificados desde o último backup fu ll, a melhor estratégia a ser empregada é o snapshot dos dados.",
        "answer": "ERRADO",
        "explanation": "Explicação disponível no sistema Tec Concursos."
    },
    {
        "id": 57,
        "category": "TI - Segurança da Informação - Backup",
        "text": "Julgue o próximo item, relativo a conceitos de balanceamento de carga, failover, fundamentos da computação em nuvem, backup e RAID. Recuperação de dados mais rápida (montagem e busca dos dados), falhas no restore, acesso aleatório, otimização para pesquisa e múltiplos servidores acessando dados de forma simultânea são as vantagens de um backup executado em uma unidade de fita em relação ao realizado em uma unidade de disco rígido (HDD).",
        "answer": "ERRADO",
        "explanation": "Explicação disponível no sistema Tec Concursos."
    },
    {
        "id": 58,
        "category": "TI - Segurança da Informação - Backup",
        "text": "A respeito de data centers, julgue o item que se segue. No backup, os dados armazenados em um data center são copiados para outro data center, evitando-se a cópia em nuvem, para que não ocorra a exposição dos próprios dados.",
        "answer": "ERRADO",
        "explanation": "Explicação disponível no sistema Tec Concursos."
    },
    {
        "id": 59,
        "category": "Geral",
        "text": "TI - Segurança da Informação - Backup  Um grande banco brasileiro sofreu um ataque de ransomware. Os sistemas ficaram inacessíveis quando os funcionários chegaram ao trabalho na manhã de segunda-feira e os clientes não conseguiram acessar suas informações financeiras. Os sistemas internos do banco exibiam uma mensagem na tela dos computadores na qual se exigia um pagamento em bitcoins para a liberação dos dados. A equipe de segurança da referida instituição financeira identificou que o ataque começara durante o fim de semana e que os backups estavam criptografados.  Com referência a essa situação hipotética, julgue o próximo item, a respeito de ações para mitigar os danos causados pelo ataque de ransomware, recuperar as operações e prevenir futuros incidentes dessa natureza.  A referida instituição financeira pode resolver o problema sem pagar o resgate, utilizando os backups de dados.  Certo  Errado",
        "answer": "ERRADO",
        "explanation": "Explicação disponível no sistema Tec Concursos."
    },
    {
        "id": 60,
        "category": "TI - Segurança da Informação - Backup",
        "text": "A respeito de backup e de ILM (information lifecycle management), julgue o seguinte item. Na fase de arquivamento de dados do ILM, os dados são gerenciados quanto aos quesitos de segurança e disponibilidade.",
        "answer": "ERRADO",
        "explanation": "Explicação disponível no sistema Tec Concursos."
    },
    {
        "id": 61,
        "category": "TI - Segurança da Informação - Backup",
        "text": "A respeito de backup e de ILM (information lifecycle management), julgue o seguinte item. No processo de CDP (continuous data protection), um dado modificado é instantaneamente copiado para um sistema de backup.",
        "answer": "CERTO",
        "explanation": "Explicação disponível no sistema Tec Concursos."
    },
    {
        "id": 62,
        "category": "TI - Segurança da Informação - Sistemas de Proteção Locais (Antivírus, Antispyware, etc.)",
        "text": "A respeito de usabilidade e acessibilidade na Internet, julgue o próximo item. Captchas apresentados para confirmar que o acesso está sendo feito por humano devem prover formas alternativas acessíveis a usuários com deficiência.",
        "answer": "CERTO",
        "explanation": "Explicação disponível no sistema Tec Concursos."
    },
    {
        "id": 63,
        "category": "TI - Segurança da Informação - Conceitos Gerais de Autenticação e Controle de Acesso",
        "text": "No que se refere a segurança de aplicativos web, prevenção e combate a ataques a redes de computadores e sistemas criptográficos, julgue o item a seguir. Na execução de uma aplicação web, a possibilidade de um usuário não autenticado agir como um usuário autenticado ou de um usuário comum autenticado agir como um administrador representa falha de segurança de elevação de privilégios relacionada ao controle de acesso da aplicação.",
        "answer": "CERTO",
        "explanation": "Explicação disponível no sistema Tec Concursos."
    },
    {
        "id": 64,
        "category": "TI - Segurança da Informação - Autenticação Multifator (MFA)",
        "text": "Acerca de segurança da informação, segurança de datacenter, segurança de dispositivos e disponibilidade, julgue o item a seguir. A autenticação de dois fatores (MFA) utiliza apenas uma camada de segurança, que resulta da combinação de um fator de conhecimento com um fator de posse, como uma senha e um token físico.",
        "answer": "ERRADO",
        "explanation": "Explicação disponível no sistema Tec Concursos."
    },
    {
        "id": 65,
        "category": "TI - Segurança da Informação - Autenticação Multifator (MFA)",
        "text": "Acerca de segurança da informação, sistemas de informação e serviços de TI, julgue o item a seguir. A utilização de autenticação multifatorial (MFA) é uma prática recomendada para fortalecer a segurança dos sistemas de informação, pois combina múltiplos métodos de verificação para garantir a identidade do usuário.",
        "answer": "CERTO",
        "explanation": "Explicação disponível no sistema Tec Concursos."
    },
    {
        "id": 66,
        "category": "TI - Segurança da Informação - Autenticação Multifator (MFA)",
        "text": "Julgue o item a seguir, referente a práticas de segurança de software contra ameaças cibernéticas e vulnerabilidades. A implementação de autenticação multifator (MFA) reduz significativamente o risco de acesso não autorizado ao sistema.",
        "answer": "CERTO",
        "explanation": "Explicação disponível no sistema Tec Concursos."
    },
    {
        "id": 67,
        "category": "TI - Segurança da Informação - Autenticação Multifator (MFA)",
        "text": "A respeito da autenticação e proteção de sistemas, julgue o item que se segue. Na notificação por push, os métodos de autenticação de dois fatores (2FA) exigem uma senha para aprovar o acesso a um sítio ou aplicativo.",
        "answer": "ERRADO",
        "explanation": "Explicação disponível no sistema Tec Concursos."
    },
    {
        "id": 68,
        "category": "TI - Segurança da Informação - Autenticação Multifator (MFA) 868) 869) 870) 871) 872) 873) 874)",
        "text": "A respeito da autenticação e proteção de sistemas, julgue o item que se segue. A biometria pode ser usada em conjunto com outros métodos de autenticação — principalmente senhas e PIN — como parte de uma configuração 2FA.",
        "answer": "CERTO",
        "explanation": "Explicação disponível no sistema Tec Concursos."
    },
    {
        "id": 69,
        "category": "TI - Segurança da Informação - Autenticação Multifator (MFA)",
        "text": "A respeito de técnicas de proteção de aplicações web, julgue o item subsequente. A implantação de 2FA aumenta a complexidade para acesso ao sistema, mas não oferece ganhos em relação à segurança.",
        "answer": "ERRADO",
        "explanation": "Explicação disponível no sistema Tec Concursos."
    },
    {
        "id": 70,
        "category": "TI - Segurança da Informação - Single Sign-On (SSO)",
        "text": "Em relação a APIs, serviços de autenticação, webhook, PostgreSQL e microsserviços, julgue o item a seguir. O single sign-on do tipo adaptável gera um token físico, como um pendrive ou cartão magnético, para garantir a relação de confiança digital.",
        "answer": "ERRADO",
        "explanation": "Explicação disponível no sistema Tec Concursos."
    },
    {
        "id": 71,
        "category": "TI - Segurança da Informação - Single Sign-On (SSO)",
        "text": "No que se refere a single sign - on, Git e Keycloak, julgue o item subsequente. Single sign-on é uma solução de autenticação que permite que os usuários façam login uma vez utilizando um único conjunto de credenciais e acessem várias aplicações durante a mesma sessão.",
        "answer": "CERTO",
        "explanation": "Explicação disponível no sistema Tec Concursos."
    },
    {
        "id": 72,
        "category": "TI - Segurança da Informação - Autorização e Controle de Acesso (RBAC, ABAC, MAC, DAC e ACL)",
        "text": "Julgue o item a seguir, a respeito de segurança da informação, políticas de segurança, classificação de informações e análise de vulnerabilidades. Ao implementar mecanismos para limitar o acesso a recursos informacionais para, apenas, indivíduos ou sistemas autorizados, o controle de acesso contribui diretamente para a confidencialidade na segurança da informação.",
        "answer": "CERTO",
        "explanation": "Explicação disponível no sistema Tec Concursos."
    },
    {
        "id": 73,
        "category": "TI - Segurança da Informação - Autorização e Controle de Acesso (RBAC, ABAC, MAC, DAC e ACL)",
        "text": "Julgue o item que se segue, referentes a controle de acesso, gestão de identidades, serviços de autenticação e monitoramento de tráfego. A adoção do controle de acesso baseado em papéis (RBAC) elimina a necessidade da autenticação baseada em múltiplosfatores (MFA), uma vez que os papéis e as permissões são suficientes para garantir a segurança do acesso às informações.",
        "answer": "ERRADO",
        "explanation": "Explicação disponível no sistema Tec Concursos."
    },
    {
        "id": 74,
        "category": "TI - Segurança da Informação - Autorização e Controle de Acesso (RBAC, ABAC, MAC, DAC e ACL)",
        "text": "Julgue o item a seguir, pertinente a mecanismos de controle de acesso. Controle de acesso discricionário (DAC) é um modelo que permite que cada objeto em um sistema seja protegido por assinatura digital baseada em grupo.",
        "answer": "ERRADO",
        "explanation": "Explicação disponível no sistema Tec Concursos."
    },
    {
        "id": 75,
        "category": "TI - Segurança da Informação - Autorização e Controle de Acesso (RBAC, ABAC, MAC, DAC e ACL)",
        "text": "Julgue o item a seguir, pertinente a mecanismos de controle de acesso. Autorização baseada em atributos é o tipo de mecanismo que deve desconsiderar a localização de um usuário porque ela é baseada em certificado digital.",
        "answer": "ERRADO",
        "explanation": "Explicação disponível no sistema Tec Concursos."
    },
    {
        "id": 76,
        "category": "TI - Segurança da Informação - Autorização e Controle de Acesso (RBAC, ABAC, MAC, DAC e ACL)",
        "text": "Julgue o item a seguir, pertinente a mecanismos de controle de acesso. Controle de acesso baseado em função (RBAC) atribui aos usuários as permissões com base em suas funções e responsabilidades.",
        "answer": "CERTO",
        "explanation": "Explicação disponível no sistema Tec Concursos."
    },
    {
        "id": 77,
        "category": "TI - Segurança da Informação - Gestão de Identidade e Acesso (IAM, IdP e Identidade Federada)",
        "text": "No que se refere a single sign - on, Git e Keycloak, julgue o item subsequente. Keycloak é uma ferramenta open-source que permite, em um projeto que utilize abordagem DevSecOps, implementar com segurança CI (continuous integration) e CD (continuous deployment), automatizando etapas do ciclo de desenvolvimento de software, como construção, teste e implantação.",
        "answer": "ERRADO",
        "explanation": "Explicação disponível no sistema Tec Concursos."
    },
    {
        "id": 78,
        "category": "TI - Segurança da Informação - Gestão de Identidade e Acesso (IAM, IdP e Identidade Federada)",
        "text": "Julgue o próximo item, à luz do disposto na NBR ISO/IEC 27002:2022. Deve-se permitir a identificação única de indivíduos e sistemas que acessem as informações de uma organização por meio da gestão de identidade; assim, são vedadas, expressamente e sem exceção, identidades atribuídas a várias pessoas, como, por exemplo, identidades compartilhadas, uma vez que é cogente responsabilizar a pessoa por ações realizadas com o emprego de uma identidade específica.",
        "answer": "ERRADO",
        "explanation": "Explicação disponível no sistema Tec Concursos."
    },
    {
        "id": 79,
        "category": "TI - Segurança da Informação - OAuth",
        "text": "Julgue o item a seguir, relativo ao protocolo de autenticação OAuth 2.0. Conforme o OAuth 2.0, o single sign-on é possível mediante a implementação de sessões, entretanto o single logout deve ser realizado individualmente.",
        "answer": "ERRADO",
        "explanation": "Explicação disponível no sistema Tec Concursos."
    },
    {
        "id": 80,
        "category": "TI - Segurança da Informação - OAuth",
        "text": "Julgue o item a seguir, relativo ao protocolo de autenticação OAuth 2.0. Segundo o OAuth 2.0, o SSO ( single sign-on ) ocorre quando um usuário, ao fazer login em um aplicativo, automaticamente faz login em outros aplicativos.",
        "answer": "CERTO",
        "explanation": "Explicação disponível no sistema Tec Concursos."
    },
    {
        "id": 81,
        "category": "881) 882) 883) 884) 885) 886) TI - Segurança da Informação - OAuth",
        "text": "Julgue o item a seguir, relativo aos serviços de autenticação Keycloak e OAuth 2.0. De acordo com a especificação OAuth 2.0, o token de acesso, credencial utilizada para acessar recursos protegidos, é uma string que representa uma autorização emitida para o cliente.",
        "answer": "CERTO",
        "explanation": "Explicação disponível no sistema Tec Concursos."
    },
    {
        "id": 82,
        "category": "TI - Segurança da Informação - OAuth",
        "text": "Acerca de segurança da informação, segurança de datacenter, segurança de dispositivos e disponibilidade, julgue o item a seguir. OAuth 2 é um protocolo que permite a autorização segura, sem revelar credenciais, enquanto JWT é um formato de token, que pode ser usado com OAuth 2 para transmitir informações de forma segura entre partes.",
        "answer": "CERTO",
        "explanation": "Explicação disponível no sistema Tec Concursos."
    },
    {
        "id": 83,
        "category": "TI - Segurança da Informação - OAuth",
        "text": "A respeito do OAuth 2.0 e do OpenId Connect (OIDC), julgue o item subsequente. O OIDC é uma camada de autorização construída sobre o OAuth 2.0 que permite que os clientes usem a identidade do usuário final com base na autorização realizada pelo servidor de autenticação.",
        "answer": "ERRADO",
        "explanation": "Explicação disponível no sistema Tec Concursos."
    },
    {
        "id": 84,
        "category": "TI - Segurança da Informação - OAuth",
        "text": "Em relação aos métodos de autenticação e seus principais protocolos, julgue o próximo item. O OAuth é um protocolo que fornece aos aplicativos a capacidade de acesso designado seguro por transmitir dados de autenticação entre consumidores e provedores de serviços.",
        "answer": "ERRADO",
        "explanation": "Explicação disponível no sistema Tec Concursos."
    },
    {
        "id": 85,
        "category": "Geral",
        "text": "TI - Segurança da Informação - OAuth  Acerca do uso do  framework   de autenticação OAuth 2.0, julgue o item subsequente.  O OAuth 2.0 utiliza  refresh tokens   para obter novos tokens de acesso, sem pedir ao usuário para fazer  login   novamente, e serve de base para o OpenID Connect, que adiciona uma camada de autenticação sobre o protocolo de autorização.  Certo  Errado",
        "answer": "CERTO",
        "explanation": "Explicação disponível no sistema Tec Concursos."
    },
    {
        "id": 86,
        "category": "Geral",
        "text": "TI - Segurança da Informação - OpenID Connect  Acerca da gestão de segurança da informação, de métodos de autenticação e de ameaças e vulnerabilidades em aplicações, julgue o item a seguir.  No contexto do protocolo OpenID Connect, um  identity token   representa o resultado de um processo de autenticação, com assinatura digital, que contém declarações descritoras do usuário e os detalhes da autenticação, como, por exemplo, informações sobre como e quando o usuário foi autenticado.  Certo  Errado",
        "answer": "CERTO",
        "explanation": "Explicação disponível no sistema Tec Concursos."
    },
    {
        "id": 87,
        "category": "Geral",
        "text": "TI - Segurança da Informação - OpenID Connect    887)  888)  889)  890)  891)  892)  O XYZ Digital, sistema nacional de agendamento de serviços públicos, acessado via  desktop   e dispositivos móveis, que exige autenticação de cidadãos para solicitação de documentos e consultas, passou por auditoria de segurança após tentativas de acesso indevido e um incidente de autenticação indevida. Após o incidente, constatou-se a utilização de  single   sign-on   (SSO – autenticação única), tendo sido providenciadas a autenticação forte com multifator (MFA) e a implementação de OpenID Connect.  A partir do caso hipotético precedente, julgue o item subsequente.  A implementação de OpenID Connect no XYZ Digital permite a autenticação federada, na qual um provedor de identidade confiável autentica o usuário em nome do sistema.  Certo  Errado",
        "answer": "CERTO",
        "explanation": "Explicação disponível no sistema Tec Concursos."
    },
    {
        "id": 88,
        "category": "TI - Segurança da Informação - OpenID Connect",
        "text": "A respeito da autenticação e proteção de sistemas, julgue o item que se segue. O OpenID Connect é um protocolo de identidade simples, construído no protocolo do JSON Web Token, e permite que os aplicativos clientes confiem na autenticação executada por um provedor OpenID Connect para verificar a identidade de um usuário.",
        "answer": "ERRADO",
        "explanation": "Explicação disponível no sistema Tec Concursos."
    },
    {
        "id": 89,
        "category": "TI - Segurança da Informação - Firewall, Roteadores, Proxy e DMZ",
        "text": "Julgue o item a seguir, relativo a implementação e monitoramento de segurança em firewall, IDS, IPS e configuração e administração de redes de computadores. Um firewall configurado com o critério de filtragem baseado em regras independentes para cada pacote faz distinção do tráfego HTTP usado para navegação web e o tráfego HTTP usado para compartilhamento de arquivos peer-to-peer .",
        "answer": "ERRADO",
        "explanation": "Explicação disponível no sistema Tec Concursos."
    },
    {
        "id": 90,
        "category": "TI - Segurança da Informação - Firewall, Roteadores, Proxy e DMZ",
        "text": "A respeito das características de um ataque de negação de serviço distribuído, julgue o próximo item. Um firewall de borda é considerado como o elemento capaz de fazer a mitigação de ataques DDoS de maneira eficiente, já que o tráfego da camada de aplicação tem que ser bloqueado na entrada da rede.",
        "answer": "ERRADO",
        "explanation": "Explicação disponível no sistema Tec Concursos."
    },
    {
        "id": 91,
        "category": "TI - Segurança da Informação - Firewall, Roteadores, Proxy e DMZ",
        "text": "Julgue o item a seguir, em relação a dispositivos de segurança e a softwares maliciosos. Os firewalls de rede fazem a filtragem de pacotes na rede e realizam um tipo de ação de acordo com as regras implementadas; em situações normais, trabalham nas camadas 3 e 4 da pilha TCP/IP.",
        "answer": "CERTO",
        "explanation": "Explicação disponível no sistema Tec Concursos."
    },
    {
        "id": 92,
        "category": "TI - Segurança da Informação - IDS, IPS e Honeypots",
        "text": "Acerca de redes sem fio dos padrões 802.11, WEP, WPA e WPA2, conceitos relativos a routing e switching e IDS, julgue o item subsequente. O IDS faz análise das atividades de uma rede, com o objetivo de descobrir atividades inapropriadas e alertar os administradores, tendo como vantagens o sistema failover e a filtragem de pacotes.",
        "answer": "ERRADO",
        "explanation": "Explicação disponível no sistema Tec Concursos."
    },
    {
        "id": 93,
        "category": "TI - Segurança da Informação - IDS, IPS e Honeypots",
        "text": "Julgue o seguinte item, que tratam de proteção contra softwares maliciosos e de sistemas de detecção de intrusão. O IDS (Intrusion Detection System ) é disponibilizado sob a forma de um software instalado em um endpoint, de um hardware dedicado conectado à rede ou mesmo como uma solução de serviço em nuvem; independentemente da forma de disponibilização, o sistema vai usar, pelo menos, um dos principais métodos de detecção a ameaças: detecção baseada em assinatura ou baseada em anomalias.",
        "answer": "CERTO",
        "explanation": "Explicação disponível no sistema Tec Concursos."
    },
    {
        "id": 94,
        "category": "TI - Segurança da Informação - VPN",
        "text": "Acerca de VPN (virtual private network), julgue o seguinte item. Em uma implantação de VPN user-to-site, o usuário, por meio de um cliente VPN e com suas respectivas configurações e credenciais, acessa o concentrador VPN, e este, por sua vez, valida as credenciais e estabelece o túnel, obedecendo aos parâmetros definidos pela política de acesso.",
        "answer": "CERTO",
        "explanation": "Explicação disponível no sistema Tec Concursos."
    },
    {
        "id": 95,
        "category": "TI - Segurança da Informação - VPN",
        "text": "Acerca de VPN (virtual private network), julgue o seguinte item. Um dos algoritmos simétricos implantados no túnel de uma VPN site-to-site é o SHA256.",
        "answer": "ERRADO",
        "explanation": "Explicação disponível no sistema Tec Concursos."
    },
    {
        "id": 96,
        "category": "TI - Segurança da Informação - VPN",
        "text": "A respeito de VPN, anti-DDoS, Nagios e Active Directory, julgue o item subsequente. Em uma VPN, o tráfego de dados é levado pela rede pública por meio de protocolos de criptografia por tunelamento, como o SSL, que define um tipo de cabeçalho de autenticação (AH - authentication header ), garantindo a confidencialidade dos dados.",
        "answer": "ERRADO",
        "explanation": "Explicação disponível no sistema Tec Concursos."
    },
    {
        "id": 97,
        "category": "TI - Segurança da Informação - TLS, SSL e HTTPS",
        "text": "Julgue o item a seguir, relativo aos protocolos HTTPS e SSL/TLS. Sítios HTTPS requerem a emissão de um certificado SSL/TLS por uma autoridade certificadora (CA), o qual é compartilhado com o navegador para estabelecer confiança e permitir a troca segura de dados criptografados.",
        "answer": "CERTO",
        "explanation": "Explicação disponível no sistema Tec Concursos."
    },
    {
        "id": 98,
        "category": "Geral",
        "text": "TI - Segurança da Informação - TLS, SSL e HTTPS  No que concerne aos principais algoritmos e protocolos criptográficos, bem como à segurança de redes sem fio, julgue o item a seguir.  No mecanismo de  handshake   do TLS 1.3, o início da sessão se dá quando o servidor envia uma mensagem   Server   Hello , acompanhada de um número randômico, e estabelece o algoritmo simétrico e o tamanho da chave.  Certo  Errado",
        "answer": "ERRADO",
        "explanation": "Explicação disponível no sistema Tec Concursos."
    },
    {
        "id": 99,
        "category": "899) 900) 901) 902) 903) 904) TI - Segurança da Informação - TLS, SSL e HTTPS",
        "text": "Julgue o item a seguir, a respeito de redes de computadores e gerenciamento de redes. Para o uso do HTTPS, que é criptografado para aumentar a segurança da transferência de dados, é necessário que um certificado SSL ou TLS esteja instalado no sítio.",
        "answer": "CERTO",
        "explanation": "Explicação disponível no sistema Tec Concursos."
    },
    {
        "id": 100,
        "category": "TI - Segurança da Informação - TLS, SSL e HTTPS",
        "text": "Julgue o item a seguir, a respeito de estratégia de criptografia para dados em trânsito em uma rede de computadores. O uso da última versão do TLS é recomendado para a criação de túneis de comunicação criptografados, considerando as versões de algoritmos simétricos e assimétricos seguros.",
        "answer": "CERTO",
        "explanation": "Explicação disponível no sistema Tec Concursos."
    },
    {
        "id": 101,
        "category": "TI - Segurança da Informação - TLS, SSL e HTTPS",
        "text": "Julgue o item a seguir, em relação ao processo de negociação de parâmetros criptográficos e múltiplas conexões conforme o protocolo TLS 1.3. O TLS impede a abertura de múltiplas conexões HTTP paralelas.",
        "answer": "ERRADO",
        "explanation": "Explicação disponível no sistema Tec Concursos."
    },
    {
        "id": 102,
        "category": "Geral",
        "text": "TI - Segurança da Informação - TLS, SSL e HTTPS  Uma   grande   empresa   que   recentemente   migrou   suas   operações   para   um   ambiente   de   nuvem   está   preocupada   com   a   integridade,   confidencialidade   e disponibilidade dos seus dados, especialmente devido a incidentes recentes de segurança que ocorreram em outras organizações do mesmo setor de negócios. Essa empresa utiliza serviços de IaaS (Infrastructure as a Service) e está sob constante ameaça de ataques como modificação de dados, espionagem na rede, phishing, DDoS, ransomware, entre outros. Com isso, a área de segurança digital solicitou uma análise detalhada das possíveis vulnerabilidades e das medidas necessárias para mitigá-las.  A partir da situação hipotética precedente, julgue o seguinte item, em relação à segurança da informação.  O uso de SSL/TLS ajuda a prevenir ataques de negação de serviço.  Certo  Errado",
        "answer": "ERRADO",
        "explanation": "Explicação disponível no sistema Tec Concursos."
    },
    {
        "id": 103,
        "category": "TI - Segurança da Informação - Segurança em Correio Eletrônico",
        "text": "Julgue o próximo item, relativo a ameaças e ataques de email e a aplicações web em redes de computadores e redes wireless. SPF ( sender policy framework) e DKIM ( domain keys identified mail ) aumentam a proteção de emails contra phishing e spamming , verificando a autenticidade do remetente.",
        "answer": "CERTO",
        "explanation": "Explicação disponível no sistema Tec Concursos."
    },
    {
        "id": 104,
        "category": "TI - Segurança da Informação - Segurança em Correio Eletrônico",
        "text": "Julgue o item seguinte, relativos a ameaças, ataques e protocolos de segurança de email. O método de autenticação SPF ( sender policy framework ) permite que os proprietários de domínios assinem emails automaticamente a partir de seu domínio; nessa assinatura digital, é utilizada criptografia de chave pública para verificar matematicamente que o email veio do domínio correto.",
        "answer": "ERRADO",
        "explanation": "Explicação disponível no sistema Tec Concursos."
    },
    {
        "id": 105,
        "category": "905) 906) 907) 908) 909) 910) 911) TI - Segurança da Informação - Testes de Segurança (Pentest, Varreduras etc.)",
        "text": "Julgue o seguinte item, relativos a CSRF (cross-site request forgery), testes de invasão e segurança de aplicativos web. O objetivo principal dos testes de invasão é simular falhas de desempenho de servidores, avaliando a carga sob estresse para fins de escalabilidade.",
        "answer": "ERRADO",
        "explanation": "Explicação disponível no sistema Tec Concursos."
    },
    {
        "id": 106,
        "category": "TI - Segurança da Informação - Testes de Segurança (Pentest, Varreduras etc.)",
        "text": "Julgue o item que se segue, relativos a port scanning. O port scanning não pode ser prevenido, sendo possível apenas a sua detecção, pois é uma técnica muito comum e não há forma de interrompê-la.",
        "answer": "ERRADO",
        "explanation": "Explicação disponível no sistema Tec Concursos."
    },
    {
        "id": 107,
        "category": "TI - Segurança da Informação - Testes de Segurança em Desenvolvimento (SAST e DAST)",
        "text": "Julgue o item subsecutivo, a respeito de técnicas e ferramentas de análise de segurança das aplicações, criptografia e infraestrutura de chaves públicas. SAST ( static application security testing ), DAST ( dynamic application security testing ) e SCA ( software composition analysis ) são técnicas de análise do comportamento dinâmico das aplicações em tempo de execução, com a finalidade de garantir que todos os componentes do software sejam seguros e livres de vulnerabilidades.",
        "answer": "ERRADO",
        "explanation": "Explicação disponível no sistema Tec Concursos."
    },
    {
        "id": 108,
        "category": "Geral",
        "text": "TI - Segurança da Informação - CIS (Critical Security Controls)  De acordo com o CIS Controls, julgue o item a seguir.  Conforme o CIS Controls, os controles de ativos criptográficos integram a seção denominada configuração segura de ativos e  softwares   corporativos.  Certo  Errado",
        "answer": "ERRADO",
        "explanation": "Explicação disponível no sistema Tec Concursos."
    },
    {
        "id": 109,
        "category": "TI - Segurança da Informação - CIS (Critical Security Controls)",
        "text": "Julgue o próximo item, a respeito de ataques de negação de serviço, controles CIS, gerenciamento de incidentes de segurança da informação e gestão de riscos e continuidade de negócio. De acordo com o controle CIS 03, no que se refere a dados, é importante para a organização desenvolver processos que incluam frameworks de gestão, diretrizes de classificação e requisitos de proteção, manuseio, retenção e descarte.",
        "answer": "CERTO",
        "explanation": "Explicação disponível no sistema Tec Concursos."
    },
    {
        "id": 110,
        "category": "TI - Segurança da Informação - CIS (Critical Security Controls)",
        "text": "Em relação ao framework do NIST e aos controles do CIS, julgue o item que se segue. Nos controles CIS, empresas que geralmente armazenam e processam informações confidenciais de clientes são classificadas como IG2 ou IG3.",
        "answer": "CERTO",
        "explanation": "Explicação disponível no sistema Tec Concursos."
    },
    {
        "id": 111,
        "category": "TI - Segurança da Informação - NIST (National Institute of Standarts and Technology)",
        "text": "A respeito do NIST – secure software development framework, julgue o item a seguir. Enfatiza-se a importância crítica de se estabelecer mecanismos robustos de monitoramento contínuo e de atualização rigorosa de bibliotecas e componentes de terceiros. 912) 913) 914) 915) 916) 917)",
        "answer": "CERTO",
        "explanation": "Explicação disponível no sistema Tec Concursos."
    },
    {
        "id": 112,
        "category": "TI - Segurança da Informação - NIST (National Institute of Standarts and Technology) Certa empresa brasileira de médio porte, que desenvolve soluções de software para o setor financeiro e armazena informações sensíveis de clientes, como dados bancários, documentos pessoais e credenciais de acesso, iniciou um processo de adequação à norma ISO/IEC 27001:2022, implementando um sistema de gestão da segurança da informação (SGSI). A equipe de segurança da empresa criou políticas para garantir confidencialidade, integridade, disponibilidade e autenticidade das informações e adotou criptografia assimétrica, controle de acesso baseado em função, eo NIST Cybersecurity Framework para resposta a incidentes. Foram identificadas vulnerabilidades de injeção SQL e a empresa sofreu um ataque DDoS que afetou a disponibilidade do sistema.",
        "text": "Com base na situação precedente, julgue o item a seguir. De acordo com o NIST Cybersecurity Framework adotado pela empresa em questão, é recomendável que ações como identificação de riscos e recuperação de sistemas façam parte do processo de segurança.",
        "answer": "CERTO",
        "explanation": "Explicação disponível no sistema Tec Concursos."
    },
    {
        "id": 113,
        "category": "TI - Segurança da Informação - NIST (National Institute of Standarts and Technology)",
        "text": "Em relação ao que preconiza o NIST Cybersecurity Framework (CSF) em sua versão 2.0, julgue o item que se segue. O CSF 2.0, em sua função de identificar, preconiza a utilização das salvaguardas para gerenciar os riscos de segurança cibernética da organização.",
        "answer": "ERRADO",
        "explanation": "Explicação disponível no sistema Tec Concursos."
    },
    {
        "id": 114,
        "category": "TI - Segurança da Informação - NIST (National Institute of Standarts and Technology)",
        "text": "Em relação ao que preconiza o NIST Cybersecurity Framework (CSF) em sua versão 2.0, julgue o item que se segue. A governança faz parte do núcleo do CSF 2.0 e estabelece a estratégia voltada para a gestão de riscos de segurança cibernética da organização.",
        "answer": "CERTO",
        "explanation": "Explicação disponível no sistema Tec Concursos."
    },
    {
        "id": 115,
        "category": "TI - Segurança da Informação - NIST (National Institute of Standarts and Technology)",
        "text": "Em relação ao framework do NIST e aos controles do CIS, julgue o item que se segue. No framework do NIST, a função proteção desenvolve e implementa as atividades adequadas para manter os planos de resiliência contra um evento de segurança cibernética.",
        "answer": "ERRADO",
        "explanation": "Explicação disponível no sistema Tec Concursos."
    },
    {
        "id": 116,
        "category": "Geral",
        "text": "TI - Segurança da Informação - MITRE ATT&CK  No que diz respeito a  frameworks   de segurança da informação e segurança cibernética, julgue o item subsequente.  O   framework   de segurança da informação e segurança cibernética MITRE ATT&CK oferece as seguintes aplicações práticas: melhoramento do entendimento das ameaças, testes de penetração, priorização de ameaças e riscos, melhoria dos controles de segurança, caça a ameaças e resposta a incidentes, avaliação de soluções de segurança, pesquisa e desenvolvimento.  Certo  Errado",
        "answer": "CERTO",
        "explanation": "Explicação disponível no sistema Tec Concursos."
    },
    {
        "id": 117,
        "category": "TI - Sistemas Operacionais - Windows Powershell e Prompt de Comando",
        "text": "No que se refere ao Microsoft PowerShell, julgue o item a seguir. 918) 919) 920) 921) 922) Ao ser executado o comando PowerShell a seguir, serão reiniciados os serviços cujo nome de exibição começa com sql, exceto o serviço SQL Server Agent. Restart-Service -DisplayName “sql*” -Exclude “SQL Server Agent”",
        "answer": "CERTO",
        "explanation": "Explicação disponível no sistema Tec Concursos."
    },
    {
        "id": 118,
        "category": "TI - Sistemas Operacionais - Windows Powershell e Prompt de Comando",
        "text": "Julgue o item seguinte, relativo a virtualização e orquestração de infraestrutura. O comando Hyper-V a seguir será executado diretamente se a sessão remota do servidor remoto já estiver ativa. Invoke-Command -ScriptBlock { Install-WindowsFeature -Name Hyper-V - IncludeManagementTools -Restart }",
        "answer": "ERRADO",
        "explanation": "Explicação disponível no sistema Tec Concursos."
    },
    {
        "id": 119,
        "category": "TI - Sistemas Operacionais - Linux",
        "text": "Em relação a configurações básicas de MS Windows Server e Linux, julgue o item a seguir. Processos do Linux são identificados por seus respectivos identificadores únicos denominados PID, sendo o canal de comunicação entre dois processos conhecido como pipe .",
        "answer": "CERTO",
        "explanation": "Explicação disponível no sistema Tec Concursos."
    },
    {
        "id": 120,
        "category": "TI - Sistemas Operacionais - Linux",
        "text": "Em relação a sistemas operacionais, programas do Microsoft Office, navegadores e Microsoft Outlook, julgue o item a seguir. Nos sistemas operacionais Linux, os processos podem comunicar-se uns com os outros por meio de canais para trocas de mensagens denominados pipes .",
        "answer": "CERTO",
        "explanation": "Explicação disponível no sistema Tec Concursos."
    },
    {
        "id": 121,
        "category": "TI - Sistemas Operacionais - Linux",
        "text": "Julgue o item a seguir, referente a gerenciamento de servidores Windows e Linux. Em servidores Linux, caso seja necessária a execução de reparação de partições com estruturas danificadas, deve-se executar, como root, o comando fdisk –l .",
        "answer": "ERRADO",
        "explanation": "Explicação disponível no sistema Tec Concursos."
    },
    {
        "id": 122,
        "category": "Geral",
        "text": "TI - Sistemas Operacionais - Linux  Com relação a ambiente Linux e integração com ambiente Windows, julgue o próximo item.  Um computador com Linux pode ser integrado a uma rede Windows por meio do  Active Directory , o que permite que os usuários acessem recursos em ambos os sistemas.  Certo  Errado",
        "answer": "CERTO",
        "explanation": "Explicação disponível no sistema Tec Concursos."
    },
    {
        "id": 123,
        "category": "Geral",
        "text": "TI - Sistemas Operacionais - Linux    923)  924)  925)  926)  927)  928)  Com relação a ambiente Linux e integração com ambiente Windows, julgue o próximo item.  Em um computador com Linux instalado, se o resultado da busca das permissões de um arquivo for -rw-rw-r--, então todos os usuários do computador poderão ler e escrever nesse arquivo.  Certo  Errado",
        "answer": "ERRADO",
        "explanation": "Explicação disponível no sistema Tec Concursos."
    },
    {
        "id": 124,
        "category": "Geral",
        "text": "TI - Sistemas Operacionais - Linux  Com relação a ambiente Linux e integração com ambiente Windows, julgue o próximo item.  Os aplicativos necessários para a configuração do ambiente Linux ficam instalados no diretório /root, o qual não pode ser deletado por qualquer tipo de usuário.  Certo  Errado",
        "answer": "ERRADO",
        "explanation": "Explicação disponível no sistema Tec Concursos."
    },
    {
        "id": 125,
        "category": "Geral",
        "text": "TI - Sistemas Operacionais - Linux  Relativamente à administração de servidores Linux, julgue o item seguinte.  O comando ls -la é usado para listar detalhes dos arquivos e diretórios no diretório atual, incluindo-se arquivos ocultos.  Certo  Errado",
        "answer": "CERTO",
        "explanation": "Explicação disponível no sistema Tec Concursos."
    },
    {
        "id": 126,
        "category": "Geral",
        "text": "TI - Sistemas Operacionais - Linux  Relativamente à administração de servidores Linux, julgue o item seguinte.  Na estrutura de diretórios padrão no Linux, o /usr é utilizado para armazenar os arquivos pessoais de cada usuário, como, por exemplo, documentos, fotografias, músicas e vídeos.  Certo  Errado",
        "answer": "ERRADO",
        "explanation": "Explicação disponível no sistema Tec Concursos."
    },
    {
        "id": 127,
        "category": "Geral",
        "text": "TI - Sistemas Operacionais - Linux  Relativamente à administração de servidores Linux, julgue o item seguinte.  No sistema operacional Linux, quando um processo está em estado “parado”, significa que o processo está aguardando algum recurso para ser executado.  Certo  Errado",
        "answer": "ERRADO",
        "explanation": "Explicação disponível no sistema Tec Concursos."
    },
    {
        "id": 128,
        "category": "Geral",
        "text": "TI - Sistemas Operacionais - Linux  Com relação ao sistema operacional Linux, julgue o item subsequente.  Considere que, a partir do diretório atual, seja necessário criar uma estrutura de 3 subdiretórios com o formato   dir2/dir3/dir4.  Nesse caso, o comando utilizado deve ser o apresentado a seguir.  mkdir   -p   dir2/dir3/dir4  Certo  Errado",
        "answer": "CERTO",
        "explanation": "Explicação disponível no sistema Tec Concursos."
    },
    {
        "id": 129,
        "category": "929) 930) 931) 932) 933) 934) TI - Sistemas Operacionais - Linux",
        "text": "Em relação à gestão de processos e à administração de sistemas operacionais, julgue o item que se segue. O Linux impede que dois usuários diferentes tenham o mesmo UID, com exceção do usuário root.",
        "answer": "ERRADO",
        "explanation": "Explicação disponível no sistema Tec Concursos."
    },
    {
        "id": 130,
        "category": "TI - Sistemas Operacionais - Linux",
        "text": "Em relação à gestão de processos e à administração de sistemas operacionais, julgue o item que se segue. Qualquer novo usuário criado no Linux, por padrão, recebe um identificador de usuário (UID), que é utilizado quando um processo é criado pelo usuário em seu espaço de usuário (user space).",
        "answer": "CERTO",
        "explanation": "Explicação disponível no sistema Tec Concursos."
    },
    {
        "id": 131,
        "category": "Geral",
        "text": "TI - Sistemas Operacionais - Red Hat  Acerca do sistema operacional Red Hat Enterprise Linux 7, julgue o próximo item.  Nesse sistema operacional, para se realizar busca por pacote com o nome pacote1, é necessário que se utilize o comando yum find pacote1.  Certo  Errado",
        "answer": "ERRADO",
        "explanation": "Explicação disponível no sistema Tec Concursos."
    },
    {
        "id": 132,
        "category": "Geral",
        "text": "TI - Sistemas Operacionais - Scripts em Unix e Linux  Com relação ao sistema operacional Linux, julgue o item subsequente.  Em um arquivo criado com o nome  script.sh , para ser executado como um  script   a cada 30 minutos, é necessário conceder permissão de execução por meio do comando apresentado a seguir.  chmod   +x   script.sh  Certo  Errado",
        "answer": "CERTO",
        "explanation": "Explicação disponível no sistema Tec Concursos."
    },
    {
        "id": 133,
        "category": "TI - Sistemas Operacionais - Virtualização - Conceitos Gerais",
        "text": "No que se refere a virtualização de servidores, contêineres e computação em nuvem, julgue o item a seguir. Workload consiste no dimensionamento da infraestrutura virtualizada, consideradas a velocidade de entrada/saída (I/O), a velocidade da CPU, a capacidade de paralelismo e a eficiência do sistema operacional.",
        "answer": "ERRADO",
        "explanation": "Explicação disponível no sistema Tec Concursos."
    },
    {
        "id": 134,
        "category": "TI - Sistemas Operacionais - Virtualização - Conceitos Gerais",
        "text": "No que se refere a virtualização de servidores, contêineres e computação em nuvem, julgue o item a seguir. Em uma máquina virtual, um processo, gerenciado por um motor de isolamento, faz a intermediação com o sistema operacional, limitando os recursos que podem ser usados e as syscalls que podem ser chamadas e passadas para o sistema operacional.",
        "answer": "ERRADO",
        "explanation": "Explicação disponível no sistema Tec Concursos."
    },
    {
        "id": 135,
        "category": "TI - Sistemas Operacionais - Virtualização - Conceitos Gerais 935) 936) 937) 938) 939) 940) 941)",
        "text": "No que se refere a virtualização de servidores, contêineres e computação em nuvem, julgue o item a seguir. As limitações e dificuldades para a utilização da virtualização incluem a falta de profissionais especializados e o uso de aplicativos de carga excessiva.",
        "answer": "CERTO",
        "explanation": "Explicação disponível no sistema Tec Concursos."
    },
    {
        "id": 136,
        "category": "TI - Sistemas Operacionais - Virtualização - Conceitos Gerais",
        "text": "Julgue o próximo item, referente à computação em nuvem, virtualização e conteinerização de aplicações. As tecnologias de computação em grid, cluster e nuvem compartilham o princípio de virtualização de recursos, diferindo-se principalmente no nível de especificidade na gestão de recursos.",
        "answer": "CERTO",
        "explanation": "Explicação disponível no sistema Tec Concursos."
    },
    {
        "id": 137,
        "category": "TI - Sistemas Operacionais - Virtualização - Conceitos Gerais",
        "text": "Julgue o próximo item, referente à computação em nuvem, virtualização e conteinerização de aplicações. A conteinerizaçã o de aplicações proporciona maior flexibilidade na escolha do sistema operacional, em comparação com máquinas virtuais, permitindo, de forma mais eficiente, a execução de diferentes sistemas operacionais em um único host.",
        "answer": "ERRADO",
        "explanation": "Explicação disponível no sistema Tec Concursos."
    },
    {
        "id": 138,
        "category": "TI - Sistemas Operacionais - Virtualização - Conceitos Gerais",
        "text": "A respeito de virtualização, consolidação de servidores e integração de plataforma alta com plataforma baixa, julgue o próximo item. A consolidação de servidores reduz a quantidade de equipamentos físicos e melhora o gerenciamento dosrecursos de um datacenter , mas gera o aumento dos custos com o consumo de energia em razão da necessidade de servidores mais potentes para a consolidação de muitos servidores virtuais.",
        "answer": "ERRADO",
        "explanation": "Explicação disponível no sistema Tec Concursos."
    },
    {
        "id": 139,
        "category": "TI - Sistemas Operacionais - Virtualização - Conceitos Gerais",
        "text": "Acerca de virtualização, julgue o próximo item. Workload, conceito que representa a demanda de aplicações a serem processadas, é utilizado para o correto dimensionamento de uma infraestrutura virtualizada.",
        "answer": "CERTO",
        "explanation": "Explicação disponível no sistema Tec Concursos."
    },
    {
        "id": 140,
        "category": "TI - Sistemas Operacionais - Virtualização - Conceitos Gerais",
        "text": "Acerca de virtualização, julgue o próximo item. A virtualização de um servidor físico ocorre exclusivamente mediante seu particionamento em vários servidores lógicos.",
        "answer": "ERRADO",
        "explanation": "Explicação disponível no sistema Tec Concursos."
    },
    {
        "id": 141,
        "category": "TI - Sistemas Operacionais - Ferramentas de Virtualização (Hypervisores, VMWare, Hyper-V etc.)",
        "text": "Julgue o item a seguir, referente a formatação de dados, virtualização VMWare e HyperV, e cluster . Na criação de uma máquina virtual Hyper-V de primeira geração, é possível utilizar a inicialização segura e gerar um volume de inicialização com até 64 TB.",
        "answer": "ERRADO",
        "explanation": "Explicação disponível no sistema Tec Concursos."
    },
    {
        "id": 142,
        "category": "TI - Sistemas Operacionais - Ferramentas de Virtualização (Hypervisores, VMWare, Hyper-V etc.)",
        "text": "Julgue o item a seguir, referente a formatação de dados, virtualização VMWare e HyperV, e cluster . Caso uma máquina virtualizada no VMWare falhe no aplicativo, o desempenho ou a operação de outros sistemas operacionais em execução no host serão afetados.",
        "answer": "ERRADO",
        "explanation": "Explicação disponível no sistema Tec Concursos."
    },
    {
        "id": 143,
        "category": "TI - Sistemas Operacionais - Ferramentas de Virtualização (Hypervisores, VMWare, Hyper-V etc.)",
        "text": "A respeito de virtualização, consolidação de servidores e integração de plataforma alta com plataforma baixa, julgue o próximo item. O VMware vSphere apresenta, entre outras camadas, a de infraestrutura, que virtualiza recursos do servidor com eficiência e os incorpora em pools lógicos que são alocados por aplicativos.",
        "answer": "CERTO",
        "explanation": "Explicação disponível no sistema Tec Concursos."
    },
    {
        "id": 144,
        "category": "TI - Sistemas Operacionais - Ferramentas de Virtualização (Hypervisores, VMWare, Hyper-V etc.)",
        "text": "A respeito de virtualização, consolidação de servidores e integração de plataforma alta com plataforma baixa, julgue o próximo item. O DRS (VMware Distributed Resource Scheduler) adiciona recursos de computação em cluste rs, e aloca-os dinamicamente na máquina virtual, com base na prioridade do negócio, reduzindo-se a complexidade do gerenciamento por meio de automação.",
        "answer": "CERTO",
        "explanation": "Explicação disponível no sistema Tec Concursos."
    },
    {
        "id": 145,
        "category": "TI - Sistemas Operacionais - Ferramentas de Virtualização (Hypervisores, VMWare, Hyper-V etc.)",
        "text": "Acerca de sistemas operacionais, arquitetura em nuvem e virtualização, julgue o item subsequente. Em virtualização, um hipervisor é definido como sendo um componente de software que gerencia várias máquinas virtuais em um computador, garantindo que cada uma delas receba os recursos alocados e não interfira na operação de outras máquinas virtuais.",
        "answer": "CERTO",
        "explanation": "Explicação disponível no sistema Tec Concursos."
    },
    {
        "id": 146,
        "category": "TI - Sistemas Operacionais - Sistemas Distribuídos (Cluster, GRID etc.)",
        "text": "Julgue o item a seguir, referente a formatação de dados, virtualização VMWare e HyperV, e cluster . Em um cluster ativo/passivo, o segundo servidor assume a posição do primeiro em caso de falha; em um cluster ativo/ativo, os servidores dividem as requisições, balanceando as cargas.",
        "answer": "CERTO",
        "explanation": "Explicação disponível no sistema Tec Concursos."
    },
    {
        "id": 147,
        "category": "TI - Sistemas Operacionais - Sistemas Distribuídos (Cluster, GRID etc.)",
        "text": "Julgue o item subsecutivo, relativo à arquitetura orientada a serviços (SOA), à arquitetura distribuída, à especificação de web services e a dispositivos móveis. Em sistemas distribuídos par a par, cada ponto central integra apresentação e processamento de dados, armazenando camadas completas e, possivelmente, todo o estado do sistema.",
        "answer": "CERTO",
        "explanation": "Explicação disponível no sistema Tec Concursos."
    },
    {
        "id": 148,
        "category": "TI - Sistemas Operacionais - Sistemas Distribuídos (Cluster, GRID etc.)",
        "text": "Em relação a arquiteturas e tecnologias de sistemas de informação, julgue o item subsecutivo. Na arquitetura distribuída, promove-se a centralização lógica dos dados e processos enquanto se distribui fisicamente os recursos computacionais.",
        "answer": "CERTO",
        "explanation": "Explicação disponível no sistema Tec Concursos."
    },
    {
        "id": 149,
        "category": "TI - Sistemas Operacionais - Sistemas Distribuídos (Cluster, GRID etc.)",
        "text": "Julgue o próximo item, relativo a conceitos de balanceamento de carga, failover, fundamentos da computação em nuvem, backup e RAID. O failover é a transferência da carga de trabalho de um sistema primário para um sistema secundário em caso de falha no sistema primário.",
        "answer": "CERTO",
        "explanation": "Explicação disponível no sistema Tec Concursos."
    },
    {
        "id": 150,
        "category": "TI - Sistemas Operacionais - Sistemas Distribuídos (Cluster, GRID etc.)",
        "text": "Julgue o próximo item, relativo a conceitos de balanceamento de carga, failover, fundamentos da computação em nuvem, backup e RAID. Uma das estratégias de failover mais empregadas no mercado é a tomada de controle mútuo, na qual um sistema primário processa toda a carga de trabalho enquanto um sistema secundário está inativo, ou em modo de espera, pronto para assumir o controle da carga de trabalho se houver falha no sistema primário.",
        "answer": "ERRADO",
        "explanation": "Explicação disponível no sistema Tec Concursos."
    },
    {
        "id": 151,
        "category": "TI - Sistemas Operacionais - Sistemas Distribuídos (Cluster, GRID etc.)",
        "text": "A respeito da arquitetura de sistemas distribuídos, julgue o item que se segue. Enquanto o balanceamento de carga distribui as requisições entre os nós disponíveis, o fail-over assegura a continuidade do serviço em caso de falha de um nó, e a replicação de estado garante que os dados estejam duplicados ou sincronizados entre os nós.",
        "answer": "CERTO",
        "explanation": "Explicação disponível no sistema Tec Concursos."
    },
    {
        "id": 152,
        "category": "TI - Sistemas Operacionais - Sistemas Distribuídos (Cluster, GRID etc.)",
        "text": "Acerca de arquitetura e tecnologias de sistemas de informações e de desenvolvimento de integrações, julgue o seguinte item. A especificação de metadados, em sistemas distribuídos, desempenha um papel crucial no sincronismo dos servidores, garantindo-se conformidade e eficiência no armazenamento e na recuperação dos dados.",
        "answer": "CERTO",
        "explanation": "Explicação disponível no sistema Tec Concursos."
    },
    {
        "id": 153,
        "category": "TI - Sistemas Operacionais - Sistemas Distribuídos (Cluster, GRID etc.)",
        "text": "Acerca de arquitetura do sistema de arquivos distribuído, julgue o item subsecutivo. Apache Spark é um sistema de processamento de dados paralelos muito utilizado para aplicações de Big Data, porém ele não suporta operações algébricas.",
        "answer": "ERRADO",
        "explanation": "Explicação disponível no sistema Tec Concursos."
    },
    {
        "id": 154,
        "category": "TI - Sistemas Operacionais - Sistemas Distribuídos (Cluster, GRID etc.) 954) 955) 956) 957) 958) 959) 960)",
        "text": "Acerca de Active Directory, LDAP, interoperabilidade, computação em nuvem e servidores de aplicação, julgue o item subsequente. O balanceamento de carga é um mecanismo usado para atingir escalabilidade, dividindo o processamento entre um conjunto de duas ou mais máquinas.",
        "answer": "CERTO",
        "explanation": "Explicação disponível no sistema Tec Concursos."
    },
    {
        "id": 155,
        "category": "TI - Sistemas Operacionais - Sistemas Distribuídos (Cluster, GRID etc.)",
        "text": "Em relação a sistemas distribuídos, julgue o item seguinte. Os sistemas desenvolvidos de acordo com os ePING (padrões de interoperabilidade) devem possuir registros históricos (logs) para permitir auditorias e provas materiais.",
        "answer": "CERTO",
        "explanation": "Explicação disponível no sistema Tec Concursos."
    },
    {
        "id": 156,
        "category": "TI - Sistemas Operacionais - Sistemas Distribuídos (Cluster, GRID etc.)",
        "text": "Em relação a sistemas distribuídos, julgue o item seguinte. Filtro Bloom é uma estrutura de dados com uso eficiente de espaço que pode ser utilizada para testar se um elemento é membro de um conjunto; no entanto, os índices do filtro Bloom suportam apenas consultas de igualdade, sendo mais úteis quando uma tabela possui muitos atributos e as consultas testam combinações arbitrárias deles.",
        "answer": "CERTO",
        "explanation": "Explicação disponível no sistema Tec Concursos."
    },
    {
        "id": 157,
        "category": "TI - Sistemas Operacionais - Sistemas Distribuídos (Cluster, GRID etc.)",
        "text": "Em relação a sistemas distribuídos, julgue o item seguinte. O termo middleware é usado para designar uma camada de software responsável pela interface com o usuário, como as camadas de apresentação e visualização.",
        "answer": "ERRADO",
        "explanation": "Explicação disponível no sistema Tec Concursos."
    },
    {
        "id": 158,
        "category": "TI - Sistemas Operacionais - Sistemas Distribuídos (Cluster, GRID etc.)",
        "text": "Acerca de servidores de aplicação, julgue o próximo item. O balanceamento de carga dos servidores de aplicação distribui as chamadas de maneira que as diferentes máquinas do cluster funcionem como uma única.",
        "answer": "CERTO",
        "explanation": "Explicação disponível no sistema Tec Concursos."
    },
    {
        "id": 159,
        "category": "TI - Sistemas Operacionais - Sistemas Distribuídos (Cluster, GRID etc.) Uma empresa de comércio eletrônico está planejando um sistema de banco de dados para gerenciar suas operações, que incluem informações sobre clientes, produtos, pedidos e inventário, sendo importantes os seguintes aspectos: desempenho, escalabilidade, disponibilidade e segurança.",
        "text": "Considerando a situação hipotética precedente, julgue o próximos item. A técnica de balanceamento de carga poderia ser utilizada na empresa, pois é o método ideal de distribuição da quantidade de dados nas tabelas de um banco de dados para manter a estabilidade do servidor quando o volume de dados for muito grande.",
        "answer": "ERRADO",
        "explanation": "Explicação disponível no sistema Tec Concursos."
    },
    {
        "id": 160,
        "category": "TI - Sistemas Operacionais - Contêineres (Docker, Kubernetes, etc.)",
        "text": "Julgue o item a seguir, relativo a práticas e ferramentas de DevOps e integração contínua de código. 961) 962) 963) 964) 965) Em Kubernetes, a política padrão de pull é IfNotPresent , mas pode ser configurada como Always para forçar o pull da imagem, ajustando a imagePullPolicy ou usando a tag latest .",
        "answer": "CERTO",
        "explanation": "Explicação disponível no sistema Tec Concursos."
    },
    {
        "id": 161,
        "category": "TI - Sistemas Operacionais - Contêineres (Docker, Kubernetes, etc.)",
        "text": "Julgue o item a seguir, a respeito de ambientes de clusters , Kubernetes, ferramenta de orquestração de contêineres e Rancher. A ferramenta Kubeadm é responsável por criar e gerenciar diretamente todos os pods e contêineres no cluster , enquanto a ferramenta Kubelet executa comandos administrativos no cluster .",
        "answer": "ERRADO",
        "explanation": "Explicação disponível no sistema Tec Concursos."
    },
    {
        "id": 162,
        "category": "TI - Sistemas Operacionais - Contêineres (Docker, Kubernetes, etc.)",
        "text": "Julgue o item a seguir, a respeito de ambientes de clusters , Kubernetes, ferramenta de orquestração de contêineres e Rancher. O servidor de API do Rancher pode provisionar Kubernetes em nós existentes ou realizar atualizações do Kubernetes.",
        "answer": "CERTO",
        "explanation": "Explicação disponível no sistema Tec Concursos."
    },
    {
        "id": 163,
        "category": "TI - Sistemas Operacionais - Contêineres (Docker, Kubernetes, etc.)",
        "text": "Julgue o item a seguir, relativo a RabbitMQ, Rancher e GIT. O Rancher pode provisionar o Kubernetes de um provedor hospedado ou importar clusters do Kubernetes existente em execução em qualquer lugar, permitindo, ainda, o monitoramento e a emissão de alerta para clusters e seus recursos.",
        "answer": "CERTO",
        "explanation": "Explicação disponível no sistema Tec Concursos."
    },
    {
        "id": 164,
        "category": "TI - Sistemas Operacionais - Contêineres (Docker, Kubernetes, etc.)",
        "text": "Julgue o próximo item, referente à computação em nuvem, virtualização e conteinerização de aplicações. A conteinerização de aplicações no contexto DevOps permite a criação de ambientes de desenvolvimento isolados que, de forma inerente, reproduzem o comportamento do usuário final e as interações com sistemas externos.",
        "answer": "ERRADO",
        "explanation": "Explicação disponível no sistema Tec Concursos."
    },
    {
        "id": 165,
        "category": "TI - Sistemas Operacionais - Contêineres (Docker, Kubernetes, etc.)",
        "text": "Julgue o item seguinte, relativo a virtualização e orquestração de infraestrutura. No dockerfile mostrado a seguir, com a execução do comando RUN pip install -r requirements.txt, serão instaladas as dependências listadas no requirements.txt, sem o armazenamento de caches, o que ajuda a reduzir o tamanho final da imagem. FROM python:3.12 WORKDIR /usr/local/app COPY requirements.txt ./ RUN pip install -r requirements.txt COPY src ./src EXPOSE 5000 RUN useradd app USER app CMD [\"uvicorn\", \"app.main:app\", \"--host\", \"0.0.0.0\", \"--port\", \"8080\"]\"0.0.0.0\", \"-- port\", \"8080\"]",
        "answer": "ERRADO",
        "explanation": "Explicação disponível no sistema Tec Concursos."
    },
    {
        "id": 166,
        "category": "TI - Sistemas Operacionais - Contêineres (Docker, Kubernetes, etc.) Na configuração de um ambiente de desenvolvimento para um novo projeto, é necessário definir variáveis de ambiente específicas a fim de garantir que a aplicação funcione corretamente em diferentes ambientes (desenvolvimento, teste e produção). Para isso, decidiu-se, utilizando o Docker, criar um contêiner e definir as variáveis de ambiente necessárias.",
        "text": "Com base na situação hipotética apresentada, julgue o item a seguir, relativo às práticas DevOps. Na situação apresentada, é necessário adicionar uma nova dependência à aplicação e, então, modificar diretamente a imagem Docker já criada.",
        "answer": "ERRADO",
        "explanation": "Explicação disponível no sistema Tec Concursos."
    },
    {
        "id": 167,
        "category": "TI - Sistemas Operacionais - Contêineres (Docker, Kubernetes, etc.) Na configuração de um ambiente de desenvolvimento para um novo projeto, é necessário definir variáveis de ambiente específicas a fim de garantir que a aplicação funcione corretamente em diferentes ambientes (desenvolvimento, teste e produção). Para isso, decidiu-se, utilizando o Docker, criar um contêiner e definir as variáveis de ambiente necessárias.",
        "text": "Com base na situação hipotética apresentada, julgue o item a seguir, relativo às práticas DevOps. A configuração de variáveis de ambiente específicas em um contêiner Docker utilizando o comando docker create permite que essas variáveis sejam definidas antes da inicialização do contêiner, o que garante maior controle sobre o ambiente de execução.",
        "answer": "CERTO",
        "explanation": "Explicação disponível no sistema Tec Concursos."
    },
    {
        "id": 168,
        "category": "TI - Sistemas Operacionais - Contêineres (Docker, Kubernetes, etc.)",
        "text": "A respeito de gerência de contêineres e segurança com Docker, julgue o item a seguir. Para executar duas instâncias do PostgreSQL em contêineres separados, é correto utilizar os seguintes comandos, mapeando-se portas diferentes do host para a porta padrão do PostgreSQL (5432) no contêiner. docker run -d -p 5433:5432 --name postgres_dev postgres docker run -d -p 5434:5432 --name postgres_test postgres",
        "answer": "CERTO",
        "explanation": "Explicação disponível no sistema Tec Concursos."
    },
    {
        "id": 169,
        "category": "TI - Sistemas Operacionais - Contêineres (Docker, Kubernetes, etc.)",
        "text": "A respeito de gerência de contêineres e segurança com Docker, julgue o item a seguir. O Registry Access Management permite controlar quais registries os desenvolvedores podem acessar usando o Docker Desktop; esse recurso opera no nível de DNS e garante suporte a registries somente locais.",
        "answer": "ERRADO",
        "explanation": "Explicação disponível no sistema Tec Concursos."
    },
    {
        "id": 170,
        "category": "TI - Sistemas Operacionais - Contêineres (Docker, Kubernetes, etc.)",
        "text": "A respeito de gerência de contêineres e segurança com Docker, julgue o item a seguir. No trecho de código a seguir, a opção -p mapeia uma porta específica do host para uma porta correspondente no contêiner, o que permite o acesso aos serviços em execução dentro do contêiner a partir do host. docker run -d -p HOST_PORT:CONTAINER_PORT postgres",
        "answer": "CERTO",
        "explanation": "Explicação disponível no sistema Tec Concursos."
    },
    {
        "id": 171,
        "category": "TI - Sistemas Operacionais - Contêineres (Docker, Kubernetes, etc.)",
        "text": "Julgue o item a seguir, a respeito de design system , de frameworks para o desenvolvimento de APIs e de orquestração de contêineres. O Docker Swarm é uma alternativa ao Kubernetes que oferece as mesmas funcionalidades, mas com uma curva de aprendizado mais íngreme e menos recursos avançados.",
        "answer": "ERRADO",
        "explanation": "Explicação disponível no sistema Tec Concursos."
    },
    {
        "id": 172,
        "category": "TI - Sistemas Operacionais - Contêineres (Docker, Kubernetes, etc.)",
        "text": "Julgue o seguinte item, relativo DevOps, CI/CD, contêiner e arquitetura de banco de dados. Kubernetes é uma ferramenta de orquestração de contêineres capaz de oferecer suporte às equipes de DevOps e que pode ser integrada aos fluxos de trabalho de CI/CD; a orquestração de contêineres permite automatizar a implantação, o gerenciamento, o dimensionamento e a rede de contêineres.",
        "answer": "CERTO",
        "explanation": "Explicação disponível no sistema Tec Concursos."
    },
    {
        "id": 173,
        "category": "TI - Sistemas Operacionais - Contêineres (Docker, Kubernetes, etc.)",
        "text": "A respeito de contêineres, máquinas virtuais e DevOps, julgue o item a seguir. Contêineres e máquinas virtuais são equivalentes, sendo ambos uma cópia digital de uma máquina física; os contêineres, além de serem uma cópia digital, contêm o código de uma aplicação, suas bibliotecas e outras dependências.",
        "answer": "ERRADO",
        "explanation": "Explicação disponível no sistema Tec Concursos."
    },
    {
        "id": 174,
        "category": "Geral",
        "text": "TI - Sistemas Operacionais - Contêineres (Docker, Kubernetes, etc.)  Acerca do desenvolvimento de pipelines e do processamento distribuído para aprendizado de máquina, julgue o seguinte item.  Um dos propósitos da ferramenta Docker, no contexto de desenvolvimento de pipelines para aprendizado de máquina, é facilitar a criação e distribuição de ambientes isolados, proporcionando uma melhoria na segurança do ambiente de desenvolvimento.  Certo  Errado",
        "answer": "CERTO",
        "explanation": "Explicação disponível no sistema Tec Concursos."
    },
    {
        "id": 175,
        "category": "TI - Sistemas Operacionais - Contêineres (Docker, Kubernetes, etc.)",
        "text": "Julgue o item seguinte, no que se refere a arquiteturas de contêiner e orquestradores. Imagem de contêiner no Kubernetes é uma representação em formato binário que engloba uma aplicação e suas dependências, pronta para ser executada em um contêiner.",
        "answer": "CERTO",
        "explanation": "Explicação disponível no sistema Tec Concursos."
    },
    {
        "id": 176,
        "category": "TI - Sistemas Operacionais - Contêineres (Docker, Kubernetes, etc.)",
        "text": "Julgue o item seguinte, no que se refere a arquiteturas de contêiner e orquestradores. Nas versões atuais do Kubernetes, o comando a seguir somente liberará o nome do pod no apiserver com o encerramento adequado do contêiner. kubectl delete pods <pod> --grace-period=0 – force",
        "answer": "ERRADO",
        "explanation": "Explicação disponível no sistema Tec Concursos."
    },
    {
        "id": 177,
        "category": "TI - Sistemas Operacionais - Contêineres (Docker, Kubernetes, etc.)",
        "text": "Julgue o item seguinte, no que se refere a arquiteturas de contêiner e orquestradores. O comando a seguir clona o repositório especificado e o utiliza como contexto para criar uma imagem Docker de acordo com as instruções contidas no Dockerfile localizado na raiz desse repositório. docker build github.com/creack/docker-firefox",
        "answer": "CERTO",
        "explanation": "Explicação disponível no sistema Tec Concursos."
    },
    {
        "id": 178,
        "category": "TI - Sistemas Operacionais - Contêineres (Docker, Kubernetes, etc.)",
        "text": "Julgue o item seguinte, no que se refere a arquiteturas de contêiner e orquestradores. No comando a seguir, o arquivo compose.yml especifica as configurações ou personalizações adicionais a serem utilizadas para orquestrar o serviço Docker. docker compose -f compose.yml -f compose.admin.yml",
        "answer": "ERRADO",
        "explanation": "Explicação disponível no sistema Tec Concursos."
    },
    {
        "id": 179,
        "category": "TI - Sistemas Operacionais - Contêineres (Docker, Kubernetes, etc.)",
        "text": "A respeito de conteinerização e DevOps, julgue o item que se segue. A comunicação entre os servidores docker e os repositórios de registros deve ocorrer com uso de chaves criptográficas, para garantir a confidencialidade das informações.",
        "answer": "CERTO",
        "explanation": "Explicação disponível no sistema Tec Concursos."
    },
    {
        "id": 180,
        "category": "TI - Sistemas Operacionais - Contêineres (Docker, Kubernetes, etc.)",
        "text": "Julgue o item que se segue, relativo às arquiteturas de container e orquestradores. Na plataforma Kubernetes, os containers do mesmo pod possuem um único endereço IP.",
        "answer": "CERTO",
        "explanation": "Explicação disponível no sistema Tec Concursos."
    },
    {
        "id": 181,
        "category": "Geral",
        "text": "TI - Sistemas Operacionais - Contêineres (Docker, Kubernetes, etc.)  Acerca das tecnologias que atendem a PDPJ-Br, julgue o próximo item.  Para facilitar a integração com o Windows, o Kubernetes utiliza armazenamento do tipo NTFS.  Certo  Errado",
        "answer": "ERRADO",
        "explanation": "Explicação disponível no sistema Tec Concursos."
    },
    {
        "id": 182,
        "category": "Geral",
        "text": "TI - Sistemas Operacionais - Contêineres (Docker, Kubernetes, etc.)  Acerca das tecnologias que atendem a PDPJ-Br, julgue o próximo item.  O Kubernetes tem como objetivo gerenciar os contêineres de aplicação, sendo de responsabilidade de outra ferramenta o encapsulamento de tudo o que a aplicação exige.  Certo  Errado",
        "answer": "CERTO",
        "explanation": "Explicação disponível no sistema Tec Concursos."
    },
    {
        "id": 183,
        "category": "TI - Sistemas Operacionais - Contêineres (Docker, Kubernetes, etc.)",
        "text": "Julgue o item seguinte, referente a virtualização e contêineres e storage. Cgroups em contêineres corresponde à política de estruturação de grupos em um único contêiner, com o objetivo de compartilhar todos os recursos disponíveis.",
        "answer": "ERRADO",
        "explanation": "Explicação disponível no sistema Tec Concursos."
    },
    {
        "id": 184,
        "category": "TI - Sistemas Operacionais - Contêineres (Docker, Kubernetes, etc.)",
        "text": "Julgue o próximo item, relativo ao DevOps. No Kubernetes, o comando kubectl get nodes permite que se crie um pod, com configuração padrão, no nó em que está conectado, sem a necessidade de se atribuir um rótulo para esse nó.",
        "answer": "ERRADO",
        "explanation": "Explicação disponível no sistema Tec Concursos."
    },
    {
        "id": 185,
        "category": "TI - Sistemas Operacionais - Contêineres (Docker, Kubernetes, etc.)",
        "text": "Julgue o próximo item, relativo ao DevOps. Os contêineres são padronizáveis, o que permite a inclusão das dependências necessárias para sua execução, na qual, por exemplo, cada nó em um cluster Kubernetes executa os contêineres.",
        "answer": "CERTO",
        "explanation": "Explicação disponível no sistema Tec Concursos."
    },
    {
        "id": 186,
        "category": "TI - Sistemas Operacionais - Contêineres (Docker, Kubernetes, etc.)",
        "text": "Julgue o próximo item, relativos a DevOps e Kubernetes. O CRI ( container runtime interface ) é o principal protocolo para a comunicação entre o kubelet e o container runtime.",
        "answer": "CERTO",
        "explanation": "Explicação disponível no sistema Tec Concursos."
    },
    {
        "id": 187,
        "category": "TI - Sistemas Operacionais - Contêineres (Docker, Kubernetes, etc.)",
        "text": "Julgue o próximo item, relativos a DevOps e Kubernetes. Um statefulset define os pods que fornecem instalações e serviços com armazenamento não persistente, de forma que a operação do cluster seja executada sem acoplamento; assim, cada pod pode executar suas funções sem a necessidade de fazer parte de um complemento.",
        "answer": "ERRADO",
        "explanation": "Explicação disponível no sistema Tec Concursos."
    },
    {
        "id": 188,
        "category": "TI - Sistemas Operacionais - Contêineres (Docker, Kubernetes, etc.)",
        "text": "Julgue o próximo item, relativos a DevOps e Kubernetes. Pod, por padrão, executa um container (unique container image), assim, caso seja necessário encapsular uma aplicação composta de vários containers fortemente acoplados, faz-se necessário criar vários pods correlacionados no registry.",
        "answer": "ERRADO",
        "explanation": "Explicação disponível no sistema Tec Concursos."
    },
    {
        "id": 189,
        "category": "TI - Sistemas Operacionais - Contêineres (Docker, Kubernetes, etc.)",
        "text": "Julgue o próximo item, relativos a DevOps e Kubernetes. 990) 991) 992) 993) 994) 995) O comando kubeadm init inicializa um Kubernetes worker e o conecta ao cluster existente.",
        "answer": "ERRADO",
        "explanation": "Explicação disponível no sistema Tec Concursos."
    },
    {
        "id": 190,
        "category": "TI - Sistemas Operacionais - Contêineres (Docker, Kubernetes, etc.)",
        "text": "Julgue o próximo item, relativos a DevOps e Kubernetes. No ingress, os caminhos que não incluem um pathType explícito falharão na validação.",
        "answer": "CERTO",
        "explanation": "Explicação disponível no sistema Tec Concursos."
    },
    {
        "id": 191,
        "category": "TI - Sistemas Operacionais - Contêineres (Docker, Kubernetes, etc.)",
        "text": "Julgue o próximo item, relativos a DevOps e Kubernetes. A execução do comando kubectl get services lista todos os serviços que estão no namespace, descrevendo os nomes dos pods e nodes associados ao cluster conectado.",
        "answer": "ERRADO",
        "explanation": "Explicação disponível no sistema Tec Concursos."
    },
    {
        "id": 192,
        "category": "TI - Sistemas Operacionais - Contêineres (Docker, Kubernetes, etc.)",
        "text": "Julgue o próximo item, relativos a DevOps e Kubernetes. O ingress permite o gerenciamento de rotas HTTPS de fora do cluster para um serviço dentro do cluster, sendo o roteamento do tráfego controlado por regras definidas no próprio ingress.",
        "answer": "CERTO",
        "explanation": "Explicação disponível no sistema Tec Concursos."
    },
    {
        "id": 193,
        "category": "TI - Sistemas Operacionais - Contêineres (Docker, Kubernetes, etc.)",
        "text": "Julgue o próximo item, relativos a DevOps e Kubernetes. Helm permite que se instalem e(ou) se atualizem aplicativos do Kubernetes.",
        "answer": "CERTO",
        "explanation": "Explicação disponível no sistema Tec Concursos."
    },
    {
        "id": 194,
        "category": "TI - Sistemas Operacionais - Contêineres (Docker, Kubernetes, etc.)",
        "text": "Acerca de Kubernetes, julgue os itens que se seguem. A menor unidade de gerenciamento no cluster é o pod , que pode conter um ou mais contêineres.",
        "answer": "CERTO",
        "explanation": "Explicação disponível no sistema Tec Concursos."
    },
    {
        "id": 195,
        "category": "TI - Sistemas Operacionais - Contêineres (Docker, Kubernetes, etc.)",
        "text": "Acerca de Kubernetes, julgue os itens que se seguem. Worker nodes têm a função de coordenar tarefas dos pods e manter a saúde do cluster, sendo o master node o local onde os pods são executados.",
        "answer": "ERRADO",
        "explanation": "Explicação disponível no sistema Tec Concursos."
    },
    {
        "id": 196,
        "category": "TI - Sistemas Operacionais - Contêineres (Docker, Kubernetes, etc.)",
        "text": "Acerca de Kubernetes, julgue os itens que se seguem. O armazenamento dos dados de configurações e estados de um cluster é mantido no etcd, que é um banco de dados distribuído de chave-valor.",
        "answer": "CERTO",
        "explanation": "Explicação disponível no sistema Tec Concursos."
    }
];