// QUESTÕES CERTEZA – Temas que caem em TODAS as provas CEBRASPE 2022-2025
// Baseado na análise de frequência dos arquivos de questões
const QC = [
// ═══ PORTUGUÊS (1-10) – Interpretação e Coesão caem SEMPRE ═══
{n:1,t:'🔴 Português – Interpretação',q:'A <b>compreensão</b> textual exige informação explícita; a <b>interpretação</b> permite inferências além do texto.',a:true,e:'CEBRASPE cobra essa distinção em TODA prova. Compreensão=explícito. Interpretação=inferência. Apareceu em MPE-CE/2025, EMBRAPA/2025, TRF6/2025.'},
{n:2,t:'🔴 Português – Coesão referencial',q:'Pronomes demonstrativos como "este/esse/aquele" exercem função <b>anafórica</b> quando retomam termo já mencionado.',a:true,e:'Anáfora=retoma. Catáfora=antecipa. CEBRASPE adora pedir o referente de "isso/disso/este". Caiu em MPE-CE/2025, EMBRAPA/2025.'},
{n:3,t:'🔴 Português – Conectivo "Com efeito"',q:'"Com efeito" é um conector de <b>confirmação/reforço</b>, equivalente a "de fato" ou "efetivamente".',a:true,e:'Caiu MPE-CE/2025 e provas anteriores. Pegadinha: alunos confundem com "consequência". Com efeito = reforça a ideia anterior.'},
{n:4,t:'🔴 Português – "Contudo/Porém"',q:'Os conectores "contudo" e "porém" estabelecem relação de <b>oposição/adversidade</b>, não de causa.',a:true,e:'CEBRASPE troca conectivos e pergunta se mantém o sentido. Contudo/porém/todavia/entretanto = oposição. NUNCA = causa.'},
{n:5,t:'🔴 Português – Vírgula S-V',q:'É permitido o uso de vírgula entre sujeito e verbo na ordem direta para dar ênfase.',a:false,e:'NUNCA se separa S-V na ordem direta. Regra cobrada em TODA prova. Sem exceção.'},
{n:6,t:'🔴 Português – Haver impessoal',q:'O verbo "haver" no sentido de "existir" fica na 3ª pessoa do singular: "Havia muitos candidatos".',a:true,e:'Haver=existir → impessoal (singular). Existir → pessoal (concorda). Cai em TODA prova CEBRASPE.'},
{n:7,t:'🔴 Português – SE apassivador',q:'Em "Vendem-se casas", o SE é partícula apassivadora e "casas" é sujeito paciente (verbo no plural).',a:true,e:'VTD+SE = apassivador (concorda). VTI/VI+SE = indeterminador (singular). Distinção cobrada SEMPRE.'},
{n:8,t:'🔴 Português – Pronome QUE',q:'Em "O livro que li era bom", o "que" é pronome relativo com função de objeto direto de "li".',a:true,e:'Funções do QUE: pronome relativo, conjunção integrante, etc. CEBRASPE pede a função sintática SEMPRE.'},
{n:9,t:'🔴 Português – Reescrita concessão',q:'Substituir "embora" por "porque" mantém o sentido da frase.',a:false,e:'Embora=concessão. Porque=causa. CEBRASPE adora trocar conectivos e perguntar se mantém sentido. NUNCA mantém.'},
{n:10,t:'🔴 Português – Crase obrigatória',q:'Em "dirigiu-se à delegacia", a crase é obrigatória: preposição "a" + artigo feminino "a".',a:true,e:'Teste do masculino: "ao quartel" → confirma crase. Cai em toda prova. Regra mais cobrada.'},

// ═══ INGLÊS (11-18) – Interpretação e False Friends SEMPRE ═══
{n:11,t:'🔴 Inglês – Interpretação',q:'Na interpretação de textos em inglês, o CEBRASPE cobra se informações são <b>explícitas ou inferidas</b> do texto.',a:true,e:'Mesmo padrão do português. Caiu TRF6/2025, TRT10/2025 com textos sobre IA e biocomputing. Foco: according to text vs inference.'},
{n:12,t:'🔴 Inglês – "Eventually"',q:'"Eventually" em inglês significa "eventualmente" em português.',a:false,e:'FALSE FRIEND clássico! Eventually=finalmente. Eventualmente=occasionally. Cai em TODA prova.'},
{n:13,t:'🔴 Inglês – "However"',q:'"However" expressa contraste, equivalendo a "nevertheless" ou "on the other hand".',a:true,e:'Conectores de contraste são os MAIS cobrados: however, although, despite, nevertheless, yet.'},
{n:14,t:'🔴 Inglês – Passive Voice',q:'A voz passiva em inglês usa to be + past participle: "The law was approved by Congress".',a:true,e:'CEBRASPE pede para identificar voz passiva no texto. Aparece em quase toda prova.'},
{n:15,t:'🔴 Inglês – Must not vs Don\'t have to',q:'"Must not" (proibição) e "don\'t have to" (sem obrigação) têm o mesmo significado.',a:false,e:'Must not=PROIBIDO. Don\'t have to=não precisa. Pegadinha clássica de modais.'},
{n:16,t:'🔴 Inglês – Referência pronominal',q:'O CEBRASPE pede a que termo se refere um pronome como "it", "they", "their", "which" no texto.',a:true,e:'Referenciação pronominal = questão GARANTIDA. Sempre aparece. Caiu TRF6/2025 com "they" referindo a "scientists".'},
{n:17,t:'🔴 Inglês – Despite vs Although',q:'"Despite" pode ser seguido de oração com sujeito+verbo: "despite it rained".',a:false,e:'Despite + noun/gerund. Although + clause. Pegadinha que cai sempre.'},
{n:18,t:'🔴 Inglês – "Sensible"',q:'"Sensible" em inglês = "sensato", NÃO "sensível" (que é "sensitive").',a:true,e:'False friend. Sensible=sensato. Sensitive=sensível. Cai frequentemente.'},

// ═══ RLM (19-26) – Condicional e Negação SEMPRE ═══
{n:19,t:'🔴 RLM – P→Q falsa',q:'P→Q é falsa APENAS quando P=V e Q=F (Vera Fischer).',a:true,e:'A condicional cai em TODA prova. V→F=F. Resto=V. Macete "Vera Fischer".'},
{n:20,t:'🔴 RLM – Negação de P→Q',q:'A negação de P→Q é ~P→~Q (inversa).',a:false,e:'PEGADINHA mais cobrada! Negação de P→Q = P∧~Q (MANE). ~P→~Q é a INVERSA. Cai SEMPRE.'},
{n:21,t:'🔴 RLM – De Morgan',q:'~(P∧Q) ≡ ~P∨~Q (nega ambas, troca operador).',a:true,e:'De Morgan cai em TODA prova. Nega+troca. ~(P∨Q)=~P∧~Q.'},
{n:22,t:'🔴 RLM – Contrapositiva',q:'A contrapositiva de P→Q é ~Q→~P (inverte E nega). É equivalente.',a:true,e:'Contrapositiva=equivalente. Recíproca (Q→P) NÃO equivale. Pegadinha frequente.'},
{n:23,t:'🔴 RLM – Modus Tollens',q:'P→Q e ~Q → conclui-se ~P.',a:true,e:'Modus Tollens: nega consequente → nega antecedente. Argumento VÁLIDO. Cai sempre.'},
{n:24,t:'🔴 RLM – Falácia consequente',q:'"Se chove, molha. Molhou. Logo, choveu" é argumento válido.',a:false,e:'FALÁCIA da afirmação do consequente! P→Q, Q ∴ P = INVÁLIDO. Pegadinha clássica.'},
{n:25,t:'🔴 RLM – Negação Todo/Algum',q:'Negação de "Todo A é B" = "Nenhum A é B".',a:false,e:'Negação de "Todo A é B" = "Algum A NÃO é B". "Nenhum" nega "Algum é". Cai SEMPRE.'},
{n:26,t:'🔴 RLM – P→Q ≡ ~P∨Q',q:'P→Q é equivalente a ~P∨Q.',a:true,e:'Equivalência fundamental. Nega a 1ª OU mantém a 2ª. Cai em toda prova.'},

// ═══ CONSTITUCIONAL (27-36) – Art. 5º cai em TODA prova ═══
{n:27,t:'🔴 Constitucional – Art. 5º caput',q:'Os direitos do art. 5º se aplicam apenas a brasileiros, excluindo estrangeiros.',a:false,e:'Art. 5º: brasileiros E estrangeiros residentes. STF estende a todos. Caiu PF/2025, TRF6/2025, FUB/2025, ANM/2025.'},
{n:28,t:'🔴 Constitucional – Aplicação imediata',q:'As normas de direitos fundamentais têm aplicação imediata (art. 5º, §1º).',a:true,e:'Caiu TRT10/2025 literalmente. Cai em TODA prova de constitucional CEBRASPE.'},
{n:29,t:'🔴 Constitucional – Reunião',q:'O direito de reunião depende de autorização prévia da autoridade.',a:false,e:'Art. 5º, XVI: independe de autorização, apenas aviso prévio. Caiu TCU/2025. Pegadinha clássica.'},
{n:30,t:'🔴 Constitucional – Liberdade expressão',q:'É livre a expressão da atividade científica, desde que com prévia licença do órgão competente.',a:false,e:'Art. 5º, IX: é livre, INDEPENDENTE de censura ou licença. Caiu FUB/2025. Pegadinha "prévia licença".'},
{n:31,t:'🔴 Constitucional – Preso',q:'É assegurado ao preso o direito à identificação dos responsáveis por sua prisão, sem exceção.',a:true,e:'Art. 5º, LXIV: SEM exceção (nem operação sigilosa). Caiu PF/2025 exatamente assim.'},
{n:32,t:'🔴 Constitucional – Legalidade penal',q:'O reconhecimento de crime exige definição legal + previsão das penas (reserva legal + anterioridade).',a:true,e:'Art. 5º, XXXIX. Caiu FUB/2025. Princípio fundamental.'},
{n:33,t:'🔴 Constitucional – Racismo',q:'Racismo é crime inafiançável e imprescritível.',a:true,e:'Art. 5º, XLII. Hediondos=inafiançável mas PRESCRITÍVEL. Racismo=inafiançável+imprescritível.'},
{n:34,t:'🔴 Constitucional – CPI',q:'CPI pode interceptar telefone (escuta) porque tem poderes de autoridade judicial.',a:false,e:'CPI NÃO pode: interceptação telefônica (reserva jurisdição), prisão, busca domiciliar. PODE: quebra sigilo bancário/fiscal.'},
{n:35,t:'🔴 Constitucional – MP vedação',q:'Medida Provisória pode versar sobre direito penal e processual penal.',a:false,e:'Art. 62, §1º: MP NÃO pode sobre penal, processual penal/civil. Cai sempre.'},
{n:36,t:'🔴 Constitucional – Tratados DH',q:'Tratados de DH aprovados com rito de EC têm status de emenda constitucional.',a:true,e:'§3º art. 5º: rito EC = status EC. Rito ordinário = supralegal. Cai em toda prova.'},

// ═══ ADMINISTRATIVO (37-46) – Lei 14.133 e Improbidade SEMPRE ═══
{n:37,t:'🔴 Administrativo – Lei 14.133',q:'O termo de referência (Lei 14.133) define objeto para contratação de <b>bens e serviços</b>, não de obras.',a:true,e:'Pegadinha que caiu FUB/2025: TR=bens/serviços. Obras=anteprojeto/projeto básico. Distinção cobrada SEMPRE.'},
{n:38,t:'🔴 Administrativo – Autarquias licitam',q:'Autarquias, por terem personalidade jurídica própria, estão dispensadas de licitar.',a:false,e:'Caiu TCE-RS/2025. Autarquias DEVEM licitar. Toda Adm Direta e Indireta deve.'},
{n:39,t:'🔴 Administrativo – Improbidade dolo',q:'Após Lei 14.230/2021, todos os atos de improbidade exigem DOLO. Acabou a modalidade culposa.',a:true,e:'Reforma 2021: só dolo. Ponto MAIS cobrado de improbidade. Cai em toda prova.'},
{n:40,t:'🔴 Administrativo – Revogação/Anulação',q:'Revogação produz efeitos ex tunc (retroativos).',a:false,e:'Revogação=ex NUNC (futuro). Anulação=ex TUNC (retroage). CEBRASPE ADORA inverter.'},
{n:41,t:'🔴 Administrativo – Autotutela',q:'A Administração pode anular seus próprios atos ilegais sem precisar do Judiciário (Súmula 473/STF).',a:true,e:'Autotutela: anular=ilegalidade. Revogar=conveniência. Cai sempre.'},
{n:42,t:'🔴 Administrativo – Resp. objetiva',q:'A responsabilidade civil do Estado é objetiva (art. 37, §6º CF).',a:true,e:'Estado=objetiva. Contra agente=subjetiva (dolo/culpa). Cai em toda prova.'},
{n:43,t:'🔴 Administrativo – Ato discricionário',q:'No ato discricionário, o administrador tem liberdade sobre TODOS os elementos, incluindo finalidade.',a:false,e:'Competência, finalidade e forma = VINCULADOS sempre. Liberdade só em motivo e objeto.'},
{n:44,t:'🔴 Administrativo – TCU',q:'O TCU é órgão do Poder Judiciário.',a:false,e:'TCU = auxiliar do LEGISLATIVO. Não é Judiciário. Pegadinha que cai sempre.'},
{n:45,t:'🔴 Administrativo – PAD',q:'Comissão do PAD: 3 servidores estáveis.',a:true,e:'Art. 149 Lei 8.112. Cai em toda prova de servidor.'},
{n:46,t:'🔴 Administrativo – Concurso',q:'Validade do concurso: até 2 anos, prorrogável uma vez por igual período.',a:true,e:'Art. 37, III CF. 2+2 máximo. Cai sempre.'},

// ═══ INFORMÁTICA (47-56) – Malware cai em TODA prova ═══
{n:47,t:'🔴 Informática – Worm',q:'Worm se propaga automaticamente pela rede, SEM precisar de programa hospedeiro.',a:true,e:'Caiu em INPI/2024, APEX/2024, MPE-TO/2024, CAU/2024, TRF6/2025. TODO concurso tem worm.'},
{n:48,t:'🔴 Informática – Ransomware',q:'Ransomware criptografa arquivos e exige pagamento de resgate.',a:true,e:'Caiu FINEP/2024, CM-SP/2024, Pref-BH/2024. Aparece em toda prova.'},
{n:49,t:'🔴 Informática – Spyware',q:'Spyware coleta informações do usuário de forma oculta e sem permissão.',a:true,e:'Caiu CAU/2024, INPI/2024, DPE-RO/2025. Sempre aparece.'},
{n:50,t:'🔴 Informática – Trojan',q:'Trojan (cavalo de Troia) parece legítimo mas executa funções maliciosas ocultas.',a:true,e:'Caiu INPI/2024, CNPq/2024. Distinção trojan vs vírus vs worm = questão garantida.'},
{n:51,t:'🔴 Informática – Screenlogger',q:'Screenlogger monitora teclados virtuais e captura regiões de tela acionadas.',a:true,e:'Caiu TRF6/2025 e CM-SP/2024. Diferente de keylogger (teclado físico).'},
{n:52,t:'🔴 Informática – Rootkit',q:'Rootkit mantém acesso remoto ao sistema, mesmo após reinicialização.',a:true,e:'Caiu STM/2025. Banca disse "salvo reiniciado" = ERRADO (rootkit persiste).'},
{n:53,t:'🔴 Informática – Adware é malware',q:'Adware NÃO é considerado malware.',a:false,e:'Adware É malware. Caiu CAU/2024 e CM-SP/2024. Pegadinha: "apesar de exibir anúncios, não é malware" = ERRADO.'},
{n:54,t:'🔴 Informática – Phishing/Vishing',q:'Phishing por voz = vishing. Por SMS = smishing.',a:true,e:'Cai em toda prova. Phishing(email), vishing(voz), smishing(SMS).'},
{n:55,t:'🔴 Informática – Simétrica vs Assimétrica',q:'Na criptografia simétrica, usa-se UMA chave (mesma para cifrar e decifrar).',a:true,e:'Simétrica=1 chave. Assimétrica=2 (pública/privada). Distinção cai SEMPRE.'},
{n:56,t:'🔴 Informática – Assinatura Digital',q:'Assinatura digital: assina com chave PRIVADA, verifica com chave PÚBLICA.',a:true,e:'Criptografia: cifra com pública, decifra com privada. Assinatura: ao contrário. Cai sempre.'},

// ═══ PENAL (57-66) – Abuso de Autoridade cai em TODA prova policial ═══
{n:57,t:'🔴 Penal – Abuso: ação penal',q:'Crimes de abuso de autoridade (Lei 13.869) são de ação penal pública incondicionada.',a:true,e:'Caiu TRF6/2025, TRT10/2025, ANM/2025, STM/2025, CNJ/2024, STJ/2024. CAI EM TODA PROVA.'},
{n:58,t:'🔴 Penal – Abuso: substituição pena',q:'As penas privativas de liberdade por abuso de autoridade podem ser substituídas por restritivas de direitos.',a:true,e:'Caiu TRF6/2025 (C) e TRT10/2025 invertido (E). CEBRASPE adora essa questão.'},
{n:59,t:'🔴 Penal – Abuso: reincidência',q:'A perda do cargo por abuso de autoridade só ocorre em caso de reincidência em crimes de mesma natureza.',a:true,e:'Caiu ANM/2025 e STJ/2024. Art. 4º, §2º Lei 13.869.'},
{n:60,t:'🔴 Penal – Abuso: independência',q:'Condenação por abuso de autoridade não impede responsabilização civil e administrativa pela mesma conduta.',a:true,e:'Independência das instâncias. Caiu ANM/2025. Tríplice responsabilidade.'},
{n:61,t:'🔴 Penal – Abuso: particular',q:'Particular que exerce função pública transitoriamente pode cometer abuso de autoridade.',a:true,e:'Caiu ANM/2025. Art. 2º: agente público em sentido amplo.'},
{n:62,t:'🔴 Penal – Concussão vs Corrupção',q:'Concussão = EXIGIR. Corrupção passiva = SOLICITAR/RECEBER.',a:true,e:'Distinção mais cobrada de crimes funcionais. Exigir≠solicitar.'},
{n:63,t:'🔴 Penal – Preventiva de ofício',q:'Após o Pacote Anticrime, juiz pode decretar preventiva de ofício na investigação.',a:false,e:'Lei 13.964/2019: juiz NÃO decreta de ofício em nenhuma fase. Precisa provocação.'},
{n:64,t:'🔴 Penal – IP dispensável',q:'O inquérito policial é INDISPENSÁVEL para denúncia.',a:false,e:'IP é DISPENSÁVEL. MP pode denunciar com outras fontes. Cai sempre.'},
{n:65,t:'🔴 Penal – Prova ilícita',q:'Provas ilícitas contaminam as derivadas (frutos da árvore envenenada).',a:true,e:'Art. 157 CPP. Exceções: fonte independente, descoberta inevitável.'},
{n:66,t:'🔴 Penal – Maria da Penha',q:'Lesão corporal leve na Lei Maria da Penha é ação pública CONDICIONADA.',a:false,e:'Súmula 542/STJ: INCONDICIONADA. Pegadinha que cai SEMPRE.'},

// ═══ CRIMINALÍSTICA (67-74) – Cadeia custódia cai em TODA prova ═══
{n:67,t:'🔴 Criminalística – Início cadeia',q:'A cadeia de custódia inicia-se com a preservação do local ou detecção do vestígio.',a:true,e:'Art. 158-A CPP. Caiu PF/2025, POLC-AL/2023, MPE-CE/2025, STM/2025. CAI EM TODA PROVA.'},
{n:68,t:'🔴 Criminalística – Fixação',q:'A etapa de FIXAÇÃO é a descrição detalhada do vestígio e sua posição no local.',a:true,e:'Caiu POLC-AL/2023 e PF/2025. Pegadinha: confundir fixação com acondicionamento.'},
{n:69,t:'🔴 Criminalística – Confissão não supre',q:'A confissão do acusado NUNCA supre o exame de corpo de delito quando há vestígios.',a:true,e:'Art. 158 CPP. Caiu MPE-CE/2025 literalmente. Regra absoluta.'},
{n:70,t:'🔴 Criminalística – Perito ad hoc',q:'Na falta de perito oficial: DUAS pessoas idôneas com diploma superior.',a:true,e:'Art. 159, §1º. Caiu TRF6/2025 (errado com "uma pessoa"), PF/2025. DUAS, não uma.'},
{n:71,t:'🔴 Criminalística – Prova testemunhal',q:'A prova testemunhal é inidônea para suprir exame de corpo de delito em qualquer hipótese.',a:false,e:'Art. 167: PODE suprir quando vestígios desaparecerem. Caiu TRT10/2025.'},
{n:72,t:'🔴 Criminalística – Juiz rejeitar laudo',q:'O juiz não pode rejeitar conclusões do perito no laudo de corpo de delito.',a:false,e:'PODE rejeitar (livre convencimento motivado). Caiu CNJ/2024.'},
{n:73,t:'🔴 Criminalística – Vestígio por não-perito',q:'Vestígios no local DEVEM ser coletados obrigatoriamente por perito oficial.',a:false,e:'Art. 158-C, §2º: qualquer agente público que reconhecer vestígio pode preservá-lo. Caiu POLC-AL/2023.'},
{n:74,t:'🔴 Criminalística – Mulher violência',q:'Mulher em violência doméstica tem PRIORIDADE na realização do exame de corpo de delito.',a:true,e:'Lei Maria da Penha + Pacote Anticrime. Caiu STM/2025.'},

// ═══ DH (75-82) – DUDH cai em TODA prova ═══
{n:75,t:'🔴 DH – DUDH não é tratado',q:'A DUDH tem natureza de tratado internacional vinculante.',a:false,e:'DUDH = resolução (recomendação), NÃO tratado. Caiu TSE/2024, DPE-RO/2024. Cai SEMPRE.'},
{n:76,t:'🔴 DH – Escravidão + tráfico',q:'A DUDH proíbe escravidão e tráfico de escravos (art. 4º).',a:true,e:'Caiu TRF6/2025: tentou dizer que DUDH é "silente sobre tráfico" = ERRADO. Proíbe ambos.'},
{n:77,t:'🔴 DH – Asilo não é absoluto',q:'O direito de asilo na DUDH é garantido em quaisquer condições, sem exceção.',a:false,e:'Art. 14, §2º DUDH: não se aplica a perseguição por crime de direito comum ou atos contra ONU. Caiu TRF6/2025, DPE-RO/2023.'},
{n:78,t:'🔴 DH – Instrução gratuita',q:'A DUDH prevê instrução gratuita ao menos nos graus elementares e fundamentais.',a:true,e:'Art. 26 DUDH. Caiu TRF6/2025, POLC-AL/2023, Prof-Recife/2023. TODO concurso.'},
{n:79,t:'🔴 DH – Pro persona',q:'Na dúvida, aplica-se a norma mais favorável ao ser humano (princípio pro persona).',a:true,e:'Princípio interpretativo fundamental de DH. Caiu DPE-PI/2022, DPE-RO/2024.'},
{n:80,t:'🔴 DH – Comissão vs Corte',q:'A Comissão Interamericana emite sentenças vinculantes.',a:false,e:'Comissão = recomendações. Corte = sentenças vinculantes. Cai sempre.'},
{n:81,t:'🔴 DH – Limitações DUDH',q:'Os direitos da DUDH são sujeitos a limitações por lei para assegurar reconhecimento de direitos alheios, moral, ordem pública e bem-estar democrático.',a:true,e:'Art. 29, §2º DUDH. Caiu POLC-AL/2023 literalmente. DH não são absolutos.'},
{n:82,t:'🔴 DH – Internacionalização 1948',q:'A efetiva internacionalização dos DH ocorreu com a aprovação da DUDH em 1948.',a:true,e:'Caiu ANAC/2024 e múltiplas provas. Marco histórico.'},

// ═══ INTELIGÊNCIA (83-90) ═══
{n:83,t:'🔴 Inteligência – Intel vs Contraintel',q:'Contrainteligência = obtenção de informações sobre ameaças externas.',a:false,e:'Contraintel = PROTEÇÃO + neutralização. Obter info = inteligência. Distinção mais cobrada.'},
{n:84,t:'🔴 Inteligência – SISBIN/ABIN',q:'O SISBIN é coordenado pela ABIN (Lei 9.883/99).',a:true,e:'Lei 9.883: SISBIN + ABIN. Cai em toda prova de inteligência.'},
{n:85,t:'🔴 Inteligência – PNI ameaças',q:'PNI lista: espionagem, sabotagem, terrorismo, crime organizado, interferência externa, corrupção.',a:true,e:'Decreto 8.793/2016. As 6 ameaças devem ser memorizadas.'},
{n:86,t:'🔴 Inteligência – OSINT',q:'OSINT = inteligência de fontes abertas (públicas).',a:true,e:'OSINT(aberta), HUMINT(humana), SIGINT(sinais). Distinção frequente.'},
{n:87,t:'🔴 Inteligência – Ciclo',q:'Ciclo: planejamento → reunião → análise → difusão.',a:true,e:'4 fases do ciclo de inteligência. Cobrado sempre.'},
{n:88,t:'🔴 Inteligência – Busca vs Coleta',q:'Busca = dado negado/sigiloso. Coleta = dado disponível/aberto.',a:true,e:'Distinção fundamental. Busca é a ação de inteligência propriamente dita.'},
{n:89,t:'🔴 Inteligência – CCAI',q:'A atividade de inteligência é controlada pelo Legislativo via CCAI.',a:true,e:'CCAI = Comissão Mista de Controle. Controle parlamentar externo.'},
{n:90,t:'🔴 Inteligência – Ultrassecreto',q:'Ultrassecreto = 25 anos de sigilo. Reservado=5, Secreto=15.',a:true,e:'LAI: 5-15-25. Macete dos graus de sigilo. Cai SEMPRE.'},

// ═══════════════════════════════════════════════════════════════
// BLOCO 2 – Mais 90 questões de alta frequência (91-180)
// ═══════════════════════════════════════════════════════════════

// ═══ PORTUGUÊS 2 (91-100) – Concordância, Regência, Vozes ═══
{n:91,t:'🔴 Português – Concordância atrativa',q:'Em "Faz dois anos que não viajo", o verbo "faz" deve concordar no plural: "Fazem dois anos".',a:false,e:'FAZER indicando tempo = impessoal (singular). "Faz 2 anos", "Faz 10 dias". NUNCA "fazem". Cai SEMPRE.'},
{n:92,t:'🔴 Português – Sujeito oracional',q:'Em "É necessário que todos participem", o sujeito de "é necessário" é a oração "que todos participem".',a:true,e:'Sujeito oracional → verbo fica singular. Cai em toda prova. "É importante que...", "Convém que...".'},
{n:93,t:'🔴 Português – Voz passiva sintética',q:'"Alugam-se apartamentos" pode ser convertido para "Apartamentos são alugados" sem mudança semântica.',a:true,e:'VPA sintética (SE) = VPA analítica (ser+particípio). Transformação cobrada SEMPRE.'},
{n:94,t:'🔴 Português – Regência "assistir"',q:'O verbo "assistir" no sentido de VER exige complemento COM preposição "a": "assistir ao jogo".',a:true,e:'Assistir=ver → VTI (a). Assistir=ajudar → VTD. Implicar=acarretar → VTD. Cai sempre.'},
{n:95,t:'🔴 Português – Orações restritivas',q:'Oração subordinada adjetiva restritiva vem entre vírgulas.',a:false,e:'Restritiva = SEM vírgulas. Explicativa = COM vírgulas. Pegadinha que cai em TODA prova CEBRASPE.'},
{n:96,t:'🔴 Português – Adjunto vs Complemento',q:'Em "Gosto de música", "de música" é adjunto adverbial.',a:false,e:'"De música" = complemento nominal/objeto indireto (quem gosta, gosta DE). Não é adjunto. Pegadinha frequente.'},
{n:97,t:'🔴 Português – Dois-pontos',q:'Os dois-pontos podem introduzir enumeração, explicação, citação ou consequência.',a:true,e:'Funções dos dois-pontos: explicar, enumerar, citar, consequência. CEBRASPE pede frequentemente.'},
{n:98,t:'🔴 Português – Próclise obrigatória',q:'Palavras negativas (não, nunca, ninguém) atraem o pronome para <b>antes</b> do verbo (próclise).',a:true,e:'Negação, conjunção subordinativa, pronome relativo, advérbio → próclise obrigatória. Cai sempre.'},
{n:99,t:'🔴 Português – Correlação verbal',q:'É correto: "Se ele <b>estudasse</b>, <b>passaria</b>" (pretérito imperfeito do subjuntivo + futuro do pretérito).',a:true,e:'Correlação: se + subjuntivo → condicional. Se estudasse, passaria. Se estudar, passará. Cai sempre.'},
{n:100,t:'🔴 Português – Paralelismo',q:'Em "Ele gosta de ler, escrever e <b>de cantar</b>", há paralelismo sintático correto.',a:false,e:'Falta paralelismo: "de ler, de escrever e de cantar" OU "de ler, escrever e cantar". Misturar com/sem preposição = erro.'},

// ═══ INGLÊS 2 (101-108) – Gramática e Vocabulário ═══
{n:101,t:'🔴 Inglês – "Pretend"',q:'"Pretend" em inglês = "pretender" em português.',a:false,e:'FALSE FRIEND! Pretend=fingir. Pretender=intend. Cai frequentemente.'},
{n:102,t:'🔴 Inglês – Present Perfect',q:'Present perfect (have + past participle) indica ação no passado com relevância no presente.',a:true,e:'I have worked here since 2020. Distinguir de simple past (finished action). CEBRASPE cobra.'},
{n:103,t:'🔴 Inglês – "Which" vs "That"',q:'"Which" e "that" são sempre intercambiáveis em orações relativas.',a:false,e:'That = restritivas apenas. Which = restritivas e explicativas. Em explicativas (com vírgula), SÓ which.'},
{n:104,t:'🔴 Inglês – Linking words causa',q:'"Therefore", "thus", "hence" e "consequently" expressam <b>resultado/consequência</b>.',a:true,e:'Grupo resultado: therefore, thus, hence, consequently, as a result. Grupo causa: because, since, due to.'},
{n:105,t:'🔴 Inglês – Gerund after preposition',q:'Após preposições em inglês, usa-se o verbo no gerúndio (-ing): "interested in <b>learning</b>".',a:true,e:'Preposition + gerund. NUNCA infinitivo após preposição. Regra cobrada CEBRASPE.'},
{n:106,t:'🔴 Inglês – "Actually"',q:'"Actually" em inglês = "atualmente" em português.',a:false,e:'FALSE FRIEND! Actually=na verdade. Atualmente=currently/nowadays. Pegadinha clássica.'},
{n:107,t:'🔴 Inglês – Reported Speech',q:'No discurso indireto, "will" muda para "would" e "can" muda para "could".',a:true,e:'Backshift: will→would, can→could, present→past. Cobra em textos com citações.'},
{n:108,t:'🔴 Inglês – Phrasal verb "carry out"',q:'"Carry out" significa "realizar/executar".',a:true,e:'Phrasal verbs cobrados: carry out(executar), bring about(causar), look into(investigar), turn down(recusar).'},

// ═══ RLM 2 (109-116) – Tabela-verdade, Bicondicional, Conjuntos ═══
{n:109,t:'🔴 RLM – Bicondicional',q:'P↔Q é verdadeira quando P e Q têm o MESMO valor lógico (ambas V ou ambas F).',a:true,e:'Bicondicional: iguais=V, diferentes=F. "Se e somente se". Cai frequentemente.'},
{n:110,t:'🔴 RLM – Tautologia',q:'Tautologia é uma proposição que é SEMPRE verdadeira, independente dos valores de P e Q.',a:true,e:'Exemplo: P∨~P = tautologia. Contradição=sempre falsa. Contingência=depende.'},
{n:111,t:'🔴 RLM – Negação bicondicional',q:'A negação de P↔Q é P↔~Q (ou equivalentemente ~P↔Q).',a:true,e:'Nega UMA das partes. Ou: P⊕Q (ou exclusivo). Cai em provas recentes.'},
{n:112,t:'🔴 RLM – Disjunção exclusiva',q:'Na disjunção exclusiva (P⊻Q), a proposição é verdadeira quando AMBAS são verdadeiras.',a:false,e:'Exclusiva: V quando EXATAMENTE UMA é V. Ambas V = F. Diferente da inclusiva (V∨V=V).'},
{n:113,t:'🔴 RLM – Silogismo',q:'"Todo A é B. Todo B é C. Logo, todo A é C" é argumento válido (silogismo).',a:true,e:'Barbara (AAA-1). Silogismo categórico válido. Cai em toda prova de lógica.'},
{n:114,t:'🔴 RLM – Princípio das gavetas',q:'Se 13 pessoas nascem em meses do ano, pelo menos 2 nasceram no mesmo mês (Dirichlet).',a:true,e:'13 pessoas / 12 meses = pelo menos 2 no mesmo mês. Princípio das gavetas. Cai frequentemente.'},
{n:115,t:'🔴 RLM – P∧Q falsa',q:'P∧Q é falsa quando PELO MENOS UMA das proposições é falsa.',a:true,e:'Conjunção: só V quando ambas V. Uma F = resultado F. Cai na tabela-verdade SEMPRE.'},
{n:116,t:'🔴 RLM – Modus Ponens',q:'P→Q e P → conclui-se Q. Isso é Modus Ponens.',a:true,e:'Modus Ponens: afirma antecedente → afirma consequente. VÁLIDO. Modus Tollens: nega consequente → nega antecedente.'},

// ═══ CONSTITUCIONAL 2 (117-126) – Segurança, Nacionalidade, Remédios ═══
{n:117,t:'🔴 Constitucional – Seg. Pública art. 144',q:'A segurança pública é dever do Estado, direito e responsabilidade de todos.',a:true,e:'Art. 144 caput. NÃO é só dever do Estado. Cai em toda prova policial.'},
{n:118,t:'🔴 Constitucional – Polícia Federal',q:'A PF é instituída por lei e tem por função a apuração de infrações penais contra a ordem política e social.',a:true,e:'Art. 144, §1º. PF: infrações penais federais, político-social, fronteiras, polícia judiciária da União.'},
{n:119,t:'🔴 Constitucional – HC gratuito',q:'Habeas corpus e habeas data são gratuitos.',a:true,e:'Art. 5º, LXXVII. HC e HD = gratuitos. MS e MI = NÃO gratuitos. Distinção cobrada.'},
{n:120,t:'🔴 Constitucional – MS coletivo',q:'Mandado de segurança coletivo pode ser impetrado por partido político com representação no CN.',a:true,e:'Art. 5º, LXX: partido com repr. no CN, organização sindical, entidade de classe, associação (1 ano).'},
{n:121,t:'🔴 Constitucional – Brasileiro nato',q:'São brasileiros natos os nascidos no Brasil, ainda que de pais estrangeiros, desde que estes NÃO estejam a serviço de seu país.',a:true,e:'Art. 12, I, "a". Jus soli com exceção: pais estrangeiros a serviço de seu país. Cai SEMPRE.'},
{n:122,t:'🔴 Constitucional – Extradição nato',q:'Brasileiro nato pode ser extraditado em casos excepcionais.',a:false,e:'NUNCA. Nato NUNCA é extraditado. Naturalizado pode (crime comum antes ou tráfico). Art. 5º, LI.'},
{n:123,t:'🔴 Constitucional – Cláusulas pétreas',q:'Separação dos poderes, voto direto secreto universal e periódico, e direitos fundamentais são cláusulas pétreas.',a:true,e:'Art. 60, §4º: forma federativa, voto DSUP, separação poderes, DF. NÃO inclui república.'},
{n:124,t:'🔴 Constitucional – Imunidade parlamentar',q:'Deputados e senadores são invioláveis por suas opiniões, palavras e votos (imunidade material).',a:true,e:'Art. 53. Material=inviolabilidade (opiniões). Formal=processual (prisão, processo). Cai sempre.'},
{n:125,t:'🔴 Constitucional – Estado de Defesa',q:'O estado de defesa é decretado pelo Presidente, ouvidos o Conselho da República e o CSDN.',a:true,e:'Art. 136. Defesa=ouvidos. Sítio=solicitada autorização ao CN. Diferença crucial.'},
{n:126,t:'🔴 Constitucional – Direitos sociais',q:'Saúde, educação, trabalho e moradia são direitos sociais previstos no art. 6º da CF.',a:true,e:'Art. 6º: educação, saúde, alimentação, trabalho, moradia, transporte, lazer, segurança, previdência, proteção maternidade/infância, assistência. Cai sempre.'},

// ═══ ADMINISTRATIVO 2 (127-136) – Lei 8.112, Poderes, Organização ═══
{n:127,t:'🔴 Administrativo – Estabilidade',q:'O servidor público adquire estabilidade após 2 anos de efetivo exercício.',a:false,e:'3 ANOS (EC 19/1998). Pegadinha: antes era 2 anos. CEBRASPE adora. Art. 41 CF.'},
{n:128,t:'🔴 Administrativo – Demissão estável',q:'Servidor estável pode perder o cargo por: sentença judicial, PAD e avaliação periódica.',a:true,e:'Art. 41, §1º: 3 hipóteses. + excesso de despesa (art. 169). Cai sempre.'},
{n:129,t:'🔴 Administrativo – Poder hierárquico',q:'O poder hierárquico permite delegação, avocação, revisão de atos e aplicação de sanções.',a:false,e:'Sanções = poder DISCIPLINAR, não hierárquico. Hierárquico: delegar, avocar, ordenar, fiscalizar, revisar. CEBRASPE mistura.'},
{n:130,t:'🔴 Administrativo – Poder de polícia',q:'Poder de polícia é a faculdade de limitar atividades individuais em prol do interesse público.',a:true,e:'Art. 78 CTN. Atributos: discricionariedade, autoexecutoriedade, coercibilidade. Cai sempre.'},
{n:131,t:'🔴 Administrativo – Motivação',q:'Todos os atos administrativos, sem exceção, devem ser motivados.',a:false,e:'Regra: motivação. Exceção: nomeação/exoneração ad nutum (cargo em comissão). Não é absoluto.'},
{n:132,t:'🔴 Administrativo – Decadência 5 anos',q:'A Administração tem 5 anos para anular atos ilegais que beneficiem terceiros de boa-fé (Lei 9.784).',a:true,e:'Art. 54 Lei 9.784. Decadência de 5 anos salvo má-fé. Cai em toda prova.'},
{n:133,t:'🔴 Administrativo – Acumulação cargos',q:'A CF permite acumulação de dois cargos de professor ou um de professor com um técnico/científico.',a:true,e:'Art. 37, XVI: 2 professor, 2 saúde, 1 professor + 1 técnico. Com compatibilidade horária.'},
{n:134,t:'🔴 Administrativo – Pregão',q:'O pregão (Lei 14.133) é modalidade para aquisição de bens e serviços comuns.',a:true,e:'Art. 6º, XLI e art. 29. Pregão = bens/serviços comuns e engenharia comum. Cai sempre.'},
{n:135,t:'🔴 Administrativo – Inexigibilidade',q:'Inexigibilidade de licitação ocorre quando há <b>inviabilidade de competição</b>.',a:true,e:'Inexigibilidade=impossível competir (art. 74). Dispensa=possível mas desnecessária (art. 75). Distinção fundamental.'},
{n:136,t:'🔴 Administrativo – LIMPE',q:'Os princípios expressos da Administração são: Legalidade, Impessoalidade, Moralidade, Publicidade e Eficiência.',a:true,e:'Art. 37 caput. LIMPE. Eficiência adicionada pela EC 19/1998. Cai em TODA prova.'},

// ═══ INFORMÁTICA 2 (137-146) – Redes, Backup, LGPD, Firewall ═══
{n:137,t:'🔴 Informática – Firewall antivírus',q:'Firewall tem a mesma função de um antivírus.',a:false,e:'Firewall = filtro de pacotes/conexões. Antivírus = detecta malware. São COMPLEMENTARES, não iguais. Cai sempre.'},
{n:138,t:'🔴 Informática – Backup incremental',q:'Backup incremental copia APENAS os arquivos alterados desde o <b>último backup</b> (completo ou incremental).',a:true,e:'Incremental=desde último backup. Diferencial=desde último COMPLETO. Distinção mais cobrada.'},
{n:139,t:'🔴 Informática – Backup diferencial',q:'Backup diferencial copia todos os arquivos alterados desde o último backup incremental.',a:false,e:'Diferencial = desde o último COMPLETO. Incremental = desde qualquer último. Pegadinha CEBRASPE.'},
{n:140,t:'🔴 Informática – HTTPS',q:'HTTPS utiliza o protocolo SSL/TLS para garantir comunicação criptografada entre cliente e servidor.',a:true,e:'HTTP + SSL/TLS = HTTPS. Porta 443. Garante confidencialidade e autenticidade. Cai sempre.'},
{n:141,t:'🔴 Informática – Intranet vs Internet',q:'A intranet utiliza os mesmos protocolos da internet (TCP/IP), mas é restrita à organização.',a:true,e:'Intranet = rede privada + TCP/IP. Extranet = intranet aberta a parceiros. Internet = pública. Cai sempre.'},
{n:142,t:'🔴 Informática – LGPD controlador',q:'Na LGPD, o <b>controlador</b> decide sobre o tratamento dos dados; o <b>operador</b> executa.',a:true,e:'Controlador=decide. Operador=executa. Encarregado(DPO)=canal titular/ANPD. Cai em toda prova.'},
{n:143,t:'🔴 Informática – LGPD consentimento',q:'O consentimento é a ÚNICA base legal para tratamento de dados pessoais na LGPD.',a:false,e:'Existem 10 bases legais (art. 7º LGPD): consentimento, obrigação legal, política pública, pesquisa, contrato, exercício de direitos, proteção da vida, tutela da saúde, legítimo interesse, proteção do crédito.'},
{n:144,t:'🔴 Informática – Hash',q:'A função hash gera um resumo de tamanho fixo (digest) a partir de dados de qualquer tamanho.',a:true,e:'Hash: SHA-256, MD5. Unidirecional (não decifra). Verifica integridade. Cai sempre.'},
{n:145,t:'🔴 Informática – ICP-Brasil',q:'A ICP-Brasil é a infraestrutura de chaves públicas brasileira, com raiz na AC-Raiz (ITI).',a:true,e:'AC-Raiz=ITI. Emissão de certificados digitais. A1(software,1ano), A3(hardware,até 5 anos). Cai sempre.'},
{n:146,t:'🔴 Informática – VPN',q:'VPN cria um túnel criptografado sobre uma rede pública (internet), garantindo comunicação segura.',a:true,e:'VPN: tunneling + criptografia. Permite acesso remoto seguro. Muito cobrado.'},

// ═══ PENAL 2 (147-156) – Mais Abuso, Prisão, Crimes ═══
{n:147,t:'🔴 Penal – Abuso: pena multa',q:'A Lei de Abuso de Autoridade prevê pena de multa de forma cumulativa com as demais penas.',a:false,e:'Art. 4º Lei 13.869: multa pode ser cumulativa OU alternativa. NÃO é sempre cumulativa.'},
{n:148,t:'🔴 Penal – Abuso: divergência',q:'Divergência na interpretação de lei ou avaliação de provas NÃO configura abuso de autoridade.',a:true,e:'Art. 1º, §2º Lei 13.869. "Mera divergência" não é abuso. Proteção ao agente de boa-fé. Caiu TRF6/2025.'},
{n:149,t:'🔴 Penal – Abuso: elemento subjetivo',q:'Crime de abuso de autoridade exige finalidade específica (dolo + elemento subjetivo especial).',a:true,e:'Art. 1º, §1º: exige finalidade de prejudicar, beneficiar, capricho, satisfação pessoal. Não basta dolo genérico.'},
{n:150,t:'🔴 Penal – Flagrante: tipos',q:'Flagrante presumido: agente é encontrado com instrumentos logo depois do crime.',a:true,e:'Próprio=cometendo/acabou. Impróprio=perseguição. Presumido=encontrado logo depois com instrumentos.'},
{n:151,t:'🔴 Penal – Prisão temporária',q:'Prisão temporária tem prazo de 5 dias, prorrogável por mais 5, em regra.',a:true,e:'Lei 7.960: 5+5 regra. Hediondos: 30+30. Cai sempre em prova policial.'},
{n:152,t:'🔴 Penal – Legítima defesa',q:'Na legítima defesa, a agressão deve ser injusta, atual ou iminente, e a reação proporcional.',a:true,e:'Art. 25 CP. Agressão injusta + atual/iminente + meios moderados + necessários. Cai sempre.'},
{n:153,t:'🔴 Penal – Tentativa',q:'Na tentativa, aplica-se a pena do crime consumado, diminuída de 1/3 a 2/3.',a:true,e:'Art. 14, II + parágrafo único CP. Quanto mais próximo da consumação, menor a redução.'},
{n:154,t:'🔴 Penal – Crime culposo',q:'Crime culposo admite tentativa.',a:false,e:'Crime culposo NÃO admite tentativa (agente não quer o resultado). Exceção doutrinária: culpa imprópria.'},
{n:155,t:'🔴 Penal – Prevaricação',q:'Prevaricação é retardar ou deixar de praticar ato de ofício para satisfazer interesse pessoal.',a:true,e:'Art. 319 CP. Interesse/sentimento pessoal. Diferente de condescendência criminosa (subordinado).'},
{n:156,t:'🔴 Penal – Peculato',q:'Peculato: apropriar-se de valor público ou desviá-lo em proveito próprio ou alheio.',a:true,e:'Art. 312 CP. Peculato-apropriação, peculato-desvio, peculato-furto. Crime funcional mais cobrado.'},

// ═══ CRIMINALÍSTICA 2 (157-164) – Perícia, Local, Vestígios ═══
{n:157,t:'🔴 Criminalística – 10 etapas cadeia',q:'As etapas da cadeia de custódia são: reconhecimento, isolamento, fixação, coleta, acondicionamento, transporte, recebimento, processamento, armazenamento, descarte.',a:true,e:'Art. 158-B a 158-F CPP. 10 etapas em ordem. CEBRASPE pede confusão entre elas.'},
{n:158,t:'🔴 Criminalística – Acondicionamento',q:'Acondicionamento é a embalagem individualizada dos vestígios conforme suas características.',a:true,e:'Art. 158-D CPP. Pegadinha: confundir com "fixação" (descrição). Acondicionamento = embalar.'},
{n:159,t:'🔴 Criminalística – Princípio de Locard',q:'O princípio de Locard afirma que todo contato deixa vestígios: autor e vítima trocam materiais.',a:true,e:'Locard: "Every contact leaves a trace". Princípio fundamental da criminalística. Cai sempre.'},
{n:160,t:'🔴 Criminalística – Necropsia prazo',q:'A necropsia deve ser realizada pelo menos 6 horas após o óbito.',a:true,e:'Art. 162 CPP: 6 horas após. Exceção: quando sinais de morte forem evidentes. Cai frequentemente.'},
{n:161,t:'🔴 Criminalística – Exame indireto',q:'O exame de corpo de delito <b>indireto</b> é feito por prova testemunhal quando os vestígios desaparecem.',a:true,e:'Art. 167 CPP: vestígios desapareceram → testemunhal supletiva. Direto=perito examina. Indireto=testemunho.'},
{n:162,t:'🔴 Criminalística – Assistente técnico',q:'As partes podem indicar assistente técnico para analisar material pericial, mas no ambiente oficial e perante perito.',a:true,e:'Caiu PF/2025 literalmente. Assistente técnico analisa no órgão oficial.'},
{n:163,t:'🔴 Criminalística – Cadeia: quebra',q:'A quebra da cadeia de custódia automaticamente invalida a prova pericial.',a:false,e:'STJ: quebra gera presunção de INVALIDADE, mas admite prova em contrário. NÃO é nulidade automática.'},
{n:164,t:'🔴 Criminalística – Reprodução simulada',q:'A reprodução simulada dos fatos (reconstituição) é vedada quando contrária à moralidade ou à ordem pública.',a:true,e:'Art. 7º CPP. Investigado NÃO é obrigado a participar (nemo tenetur). Cai frequentemente.'},

// ═══ DH 2 (165-172) – CADH, Sistema Interamericano, Gerações ═══
{n:165,t:'🔴 DH – CADH pena de morte',q:'A CADH proíbe o restabelecimento da pena de morte nos países que já a aboliram.',a:true,e:'Art. 4º, §3º CADH. Não pode ampliar. Caiu em múltiplas provas CEBRASPE.'},
{n:166,t:'🔴 DH – CADH suspensão direitos',q:'A CADH permite suspensão de garantias em estado de emergência, mas NUNCA do direito à vida e à integridade pessoal.',a:true,e:'Art. 27 CADH: núcleo duro inderrogável = vida, integridade, proibição escravidão, legalidade penal, personalidade jurídica, etc.'},
{n:167,t:'🔴 DH – Gerações 1ª',q:'Direitos de 1ª geração/dimensão são direitos civis e políticos (liberdade), exigindo abstenção do Estado.',a:true,e:'1ª=liberdade(abstenção). 2ª=igualdade(prestação/sociais). 3ª=fraternidade(difusos). Cai sempre.'},
{n:168,t:'🔴 DH – Universalidade',q:'O princípio da universalidade dos DH significa que se aplicam a TODOS os seres humanos, sem distinção.',a:true,e:'Declaração de Viena 1993: universalidade, indivisibilidade, interdependência. Cai sempre.'},
{n:169,t:'🔴 DH – Indivisibilidade',q:'Os DH são indivisíveis: direitos civis e sociais têm igual importância e não podem ser separados.',a:true,e:'Viena 1993. NÃO existe hierarquia entre gerações. Indivisibilidade = cobrada SEMPRE.'},
{n:170,t:'🔴 DH – Corte IDH competência',q:'A Corte IDH pode julgar <b>indivíduos</b> que violam direitos humanos.',a:false,e:'Corte IDH julga ESTADOS, não indivíduos. Somente Estados podem ser réus. Comissão/Estados podem peticionar.'},
{n:171,t:'🔴 DH – Esgotamento recursos internos',q:'Para acessar o sistema interamericano, é necessário o esgotamento dos recursos internos do Estado.',a:true,e:'Art. 46 CADH. Exceção: demora injustificada, falta de due process, ausência de recurso. Cai sempre.'},
{n:172,t:'🔴 DH – Dupla hierarquia STF',q:'Tratados de DH não aprovados com rito de EC possuem status <b>supralegal</b> (acima das leis, abaixo da CF).',a:true,e:'RE 466.343/STF: supralegal. Com rito EC (§3º art. 5º) = constitucional. Dupla hierarquia. Cai sempre.'},

// ═══ INTELIGÊNCIA 2 (173-180) – PNI, Operações, Legislação ═══
{n:173,t:'🔴 Inteligência – ABIN autoria',q:'A ABIN pode exercer funções de polícia judiciária.',a:false,e:'ABIN NÃO tem função policial. É órgão de inteligência e contrainteligência, não de investigação criminal.'},
{n:174,t:'🔴 Inteligência – PNI objetivos',q:'A PNI tem como objetivo diagnosticar e avaliar as ameaças e as oportunidades para o país.',a:true,e:'Decreto 8.793/2016. PNI: ameaças E oportunidades. Não é só defensiva.'},
{n:175,t:'🔴 Inteligência – Sigilo profissional',q:'Funcionários da ABIN são obrigados a guardar sigilo, mesmo após deixar o cargo.',a:true,e:'Art. 9º Lei 9.883. Sigilo PERMANENTE, inclusive após cessação do vínculo.'},
{n:176,t:'🔴 Inteligência – HUMINT',q:'HUMINT é a inteligência obtida por meio de fontes humanas (agentes, informantes, contatos).',a:true,e:'HUMINT=humana. SIGINT=sinais. IMINT=imagens. OSINT=fontes abertas. MASINT=medidas.'},
{n:177,t:'🔴 Inteligência – Desinformação',q:'Desinformação é técnica de contrainteligência que consiste em difundir informações falsas ou manipuladas para enganar o adversário.',a:true,e:'Desinformação: ferramenta legítima de contrainteligência. Distinguir de propaganda.'},
{n:178,t:'🔴 Inteligência – Conhecimento',q:'Os tipos de conhecimento de inteligência são: informe, informação, apreciação e estimativa.',a:true,e:'Informe(dado bruto). Informação(análise passado/presente). Apreciação(opinião). Estimativa(futuro). Cai sempre.'},
{n:179,t:'🔴 Inteligência – PNPC',q:'O Programa Nacional de Proteção do Conhecimento (PNPC) é executado pela ABIN.',a:true,e:'PNPC: proteger conhecimento sensível. Executado pela ABIN. Prevenção contra espionagem.'},
{n:180,t:'🔴 Inteligência – Crime organizado PNI',q:'O crime organizado transnacional é uma das principais ameaças elencadas na PNI.',a:true,e:'PNI: espionagem, sabotagem, terrorismo, crime organizado (nacional e transnacional), interferência externa, corrupção.'}
];
