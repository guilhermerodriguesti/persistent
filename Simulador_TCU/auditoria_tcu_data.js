const questions = [
    {
        id: 1,
        category: "Lei Orgânica do TCU",
        text: "O TCU possui competência para julgar as contas dos administradores e demais responsáveis por dinheiros, bens e valores públicos da administração direta e indireta, incluindo as fundações e sociedades instituídas e mantidas pelo Poder Público federal.",
        answer: "CERTO",
        explanation: "Esta é uma assertiva clássica que reproduz literalmente o art. 1º, inciso I, da Lei 8.443/1992. O TCU tem jurisdição sobre toda a administração direta (órgãos da União) e indireta (autarquias, fundações públicas, empresas públicas e sociedades de economia mista). A CEBRASPE frequentemente cobra a amplitude dessa competência, sendo essencial memorizar que abrange TODAS as entidades que gerenciem recursos públicos federais."
    },
    {
        id: 2,
        category: "Lei Orgânica do TCU",
        text: "As decisões do TCU que resultem em imputação de débito ou multa têm eficácia de título executivo extrajudicial, podendo ser executadas imediatamente após sua publicação, independentemente de notificação do responsável.",
        answer: "ERRADO",
        explanation: "Pegadinha clássica da CEBRASPE! Embora seja verdade que as decisões do TCU têm eficácia de título executivo (art. 71, §3º da CF), elas NÃO podem ser executadas imediatamente após a publicação. É necessário aguardar o trânsito em julgado da decisão e, ainda, conceder prazo para pagamento voluntário. O erro está na expressão 'independentemente de notificação' - o devido processo legal exige a notificação prévia do responsável."
    },
    {
        id: 3,
        category: "Lei Orgânica do TCU",
        text: "O prazo para interposição de recurso de reconsideração contra decisão do TCU que impute débito ou multa é de quinze dias, contados da ciência da decisão.",
        answer: "CERTO",
        explanation: "O art. 33 da Lei 8.443/1992 estabelece expressamente o prazo de 15 dias para recurso de reconsideração. A CEBRASPE adora cobrar prazos processuais. Outros prazos importantes: pedido de reexame (5 anos), embargos de declaração (10 dias), agravo (5 dias). Atenção: o prazo conta da CIÊNCIA, não da publicação."
    },
    {
        id: 4,
        category: "Lei Orgânica do TCU",
        text: "A citação é o instrumento pelo qual o TCU determina que o responsável apresente defesa ou recolha aos cofres públicos quantia certa, fixada em processo de tomada de contas especial ou representação.",
        answer: "ERRADO",
        explanation: "Erro sutil! A citação serve para apresentação de ALEGAÇÕES DE DEFESA ou recolhimento de valor. Porém, o instrumento para 'recolha aos cofres públicos quantia certa' após JULGAMENTO é a NOTIFICAÇÃO, não a citação. A citação é anterior ao julgamento (fase instrutória), enquanto a notificação vem após a decisão condenatória. A CEBRASPE explora muito essa diferença entre citação, audiência e notificação."
    },
    {
        id: 5,
        category: "Lei Orgânica do TCU",
        text: "Compete ao TCU aplicar aos responsáveis as sanções previstas em lei, que incluem multa proporcional ao dano causado ao erário, nunca inferior a R$ 50.000,00.",
        answer: "ERRADO",
        explanation: "Duplo erro! Primeiro: a multa proporcional ao dano NÃO tem valor mínimo estabelecido na Lei 8.443/1992 - o limite é que não pode ser superior ao valor do dano. Segundo: existe sim a multa de R$ 50.000,00 (atualizado), mas ela é aplicável em casos específicos do art. 58 (ato irregular, ilegítimo, antieconômico ou infração à norma legal), não sendo o valor mínimo da multa proporcional. São dois tipos diferentes de multa!"
    },
    {
        id: 6,
        category: "Constituição Federal",
        text: "A fiscalização contábil, financeira, orçamentária, operacional e patrimonial da União será exercida pelo Congresso Nacional, mediante controle externo, e pelo sistema de controle interno de cada Poder.",
        answer: "CERTO",
        explanation: "Reprodução literal do caput do art. 70 da CF/88. Este artigo é fundamental e altamente cobrado. Observe os cinco tipos de fiscalização: contábil, financeira, orçamentária, operacional e patrimonial. A CEBRASPE pode suprimir um deles para tornar a questão errada. Note também a estrutura dual: controle externo (Legislativo com TCU) + controle interno (cada Poder)."
    },
    {
        id: 7,
        category: "Constituição Federal",
        text: "Qualquer cidadão, partido político, associação ou sindicato é parte legítima para denunciar irregularidades ou ilegalidades perante o TCU, sendo assegurado o sigilo da fonte quando solicitado.",
        answer: "CERTO",
        explanation: "Art. 74, §2º da CF/88 - questão clássica sobre legitimidade ativa para denúncias. Pontos essenciais: (1) ampla legitimidade (cidadão, partido, associação, sindicato); (2) direito ao sigilo da fonte; (3) não confundir denúncia (qualquer pessoa) com representação (autoridades específicas). A CEBRASPE pode tentar confundir representação com denúncia ou omitir o direito ao sigilo."
    },
    {
        id: 8,
        category: "Constituição Federal",
        text: "As contas do Presidente da República, caso não sejam encaminhadas ao Congresso Nacional no prazo constitucional, serão julgadas diretamente pelo TCU, que aplicará as sanções cabíveis.",
        answer: "ERRADO",
        explanation: "Pegadinha recorrente! O TCU NÃO julga as contas do Presidente da República - ele apenas elabora parecer prévio (art. 71, I, CF). Quem julga é o Congresso Nacional. Mesmo se as contas não forem enviadas no prazo, o TCU não assume a competência de julgamento. A função do TCU é técnica (parecerista), enquanto a função do Congresso é política (julgamento). Esta distinção é cobrada em diversas variações pela CEBRASPE."
    },
    {
        id: 9,
        category: "Constituição Federal",
        text: "O TCU tem competência para apreciar a legalidade dos atos de admissão de pessoal na administração direta e indireta, incluindo as nomeações para cargo de provimento efetivo, cargo em comissão e contratações temporárias.",
        answer: "CERTO",
        explanation: "Art. 71, III da CF/88. O TCU aprecia a legalidade dos atos de admissão de pessoal, exceto nomeações para cargo em comissão. ATENÇÃO: a assertiva está CERTA porque diz 'incluindo', não 'exceto'. Se dissesse 'exceto as nomeações para cargo em comissão', estaria correto que há exceção. Mas como diz 'incluindo', e realmente INCLUI cargos efetivos e contratações temporárias, está certo. Leia com atenção os quantificadores lógicos da CEBRASPE!"
    },
    {
        id: 10,
        category: "Constituição Federal",
        text: "Diante de ilegalidade de despesa, o TCU, se não atendido, sustará a execução do ato impugnado, comunicando a decisão à Câmara dos Deputados e ao Senado Federal.",
        answer: "ERRADO",
        explanation: "Art. 71, X da CF - questão sobre sustação de atos e contratos. Erro: quem susta DESPESA é o Congresso Nacional, não o TCU. O TCU susta diretamente apenas CONTRATOS (se o Congresso ou Executivo não o fizerem em 90 dias). No caso de despesa ilegal, o TCU assina prazo para providências e, se não atendido, comunica ao CONGRESSO para este sustar. Essa inversão é pegadinha clássica da banca."
    },
    {
        id: 11,
        category: "Normas de Auditoria do TCU",
        text: "As auditorias de conformidade realizadas pelo TCU têm como objetivo avaliar se o objeto de auditoria está em conformidade com critérios estabelecidos em normas, regulamentos e contratos.",
        answer: "CERTO",
        explanation: "Definição precisa de auditoria de conformidade conforme as NAT. Este tipo de auditoria verifica aderência a normas (compliance). Diferencia-se da auditoria operacional (avalia desempenho, economia, eficiência, eficácia) e da auditoria financeira (examina demonstrações contábeis). A CEBRASPE pode trocar os conceitos entre os tipos de auditoria - sempre associe: conformidade = normas/legalidade; operacional = 3Es + efetividade; financeira = demonstrações contábeis."
    },
    {
        id: 12,
        category: "Normas de Auditoria do TCU",
        text: "O auditor do TCU deve manter independência em relação à entidade auditada, mas pode dispensar o ceticismo profissional quando auditar órgãos com histórico de regularidade em prestações de contas anteriores.",
        answer: "ERRADO",
        explanation: "O ceticismo profissional é princípio FUNDAMENTAL e IRRENUNCIÁVEL da auditoria. Segundo as NAT e ISSAI, o auditor JAMAIS pode dispensar a postura crítica e questionadora, independentemente do histórico da entidade. O ceticismo profissional significa manter uma atitude de questionamento e avaliar criticamente as evidências. A CEBRASPE testa se o candidato entende que princípios fundamentais não admitem exceções."
    },
    {
        id: 13,
        category: "Normas de Auditoria do TCU",
        text: "A materialidade é um critério quantitativo utilizado no planejamento da auditoria para determinar a natureza, oportunidade e extensão dos procedimentos, sendo calculada sempre como 5% do total da receita da entidade auditada.",
        answer: "ERRADO",
        explanation: "Erro no percentual fixo! A materialidade NÃO tem um valor fixo de 5% - é um julgamento profissional que varia conforme o contexto, natureza da entidade e tipo de auditoria. Pode usar receita, ativo, passivo, despesa ou outras bases, com percentuais variáveis. A materialidade é sim quantitativa, mas também qualitativa (natureza do item pode torná-lo material independente do valor). Questão típica que tenta induzir ao erro com dado numérico específico."
    },
    {
        id: 14,
        category: "Normas de Auditoria do TCU",
        text: "O relatório de auditoria do TCU deve conter, obrigatoriamente, a identificação da entidade auditada, o objetivo e o escopo da auditoria, a metodologia utilizada, os achados e as conclusões, podendo o auditor omitir achados que considere irrelevantes para a compreensão geral.",
        answer: "ERRADO",
        explanation: "O auditor NÃO pode omitir achados por considerá-los 'irrelevantes' segundo seu critério subjetivo. Todos os achados materiais e relevantes devem ser reportados. A relevância é definida pela materialidade e pelo risco, não por preferência do auditor. O relatório deve ser completo, objetivo e fundamentado. A tentação de 'simplificar' omitindo informações viola os princípios de transparência e completude das NAT."
    },
    {
        id: 15,
        category: "Normas de Auditoria do TCU",
        text: "A auditoria operacional no TCU avalia a economicidade, eficiência, eficácia e efetividade dos programas e ações governamentais, podendo resultar em propostas de melhoria dos processos avaliados.",
        answer: "CERTO",
        explanation: "Definição completa de auditoria operacional (também chamada de auditoria de desempenho ou de natureza operacional). Os '4 Es' são: Economicidade (minimizar custos), Eficiência (relação produto/insumo), Eficácia (atingir objetivos) e Efetividade (impactos na sociedade). Importante: auditoria operacional é propositiva, pode sugerir melhorias. É diferente da conformidade, que é mais restritiva (certo/errado conforme normas)."
    },
    {
        id: 16,
        category: "Processos no TCU",
        text: "A tomada de contas especial é um processo administrativo devidamente formalizado, com rito próprio, para apurar responsabilidade por ocorrência de dano à administração pública federal, devendo ser instaurada pela autoridade administrativa competente quando há omissão no dever de prestar contas.",
        answer: "CERTO",
        explanation: "Definição precisa de TCE conforme IN TCU 71/2012. As hipóteses de instauração incluem: (1) omissão no dever de prestar contas; (2) não comprovação da boa e regular aplicação de recursos; (3) desfalque, desvio ou irregularidade que resulte em dano ao erário. A TCE é obrigatória quando caracterizado o dano e identificado o responsável. Processo essencial para o TCU - representa cerca de 40% dos processos julgados."
    },
    {
        id: 17,
        category: "Processos no TCU",
        text: "O processo de prestação de contas ordinária é aquele pelo qual os responsáveis por unidades gestoras devem comprovar, anualmente, a boa e regular aplicação dos recursos públicos, sendo julgado pelo TCU através de acórdão individual para cada processo.",
        answer: "ERRADO",
        explanation: "A prestação de contas ordinária é mesmo anual, mas o julgamento NÃO é feito através de acórdão individual para cada unidade gestora. O TCU realiza julgamento por LISTAS (agrupadas), emitindo um único acórdão para múltiplos processos regulares (parecer técnico único). Apenas processos com irregularidades são julgados individualmente. Esta sistemática visa economicidade e celeridade processual. A CEBRASPE cobra muito essa distinção entre julgamento em lista versus individual."
    },
    {
        id: 18,
        category: "Processos no TCU",
        text: "A representação é o instrumento por meio do qual qualquer pessoa física ou jurídica, com ou sem vínculo funcional com a administração pública, pode comunicar ao TCU a existência de irregularidades ou ilegalidades.",
        answer: "ERRADO",
        explanation: "Confusão conceitual típica! REPRESENTAÇÃO é privativa de autoridades (agentes públicos, dirigentes, membros do MP, etc.) - art. 237 do RITCU. O instrumento disponível para QUALQUER pessoa é a DENÚNCIA (art. 234 do RITCU). Esta distinção é cobradíssima: Denúncia = qualquer pessoa; Representação = autoridades com competência específica. Memorize: REpresentação = REquer autoridade; DEnúncia = DEmocraticamente qualquer um pode fazer."
    },
    {
        id: 19,
        category: "Processos no TCU",
        text: "O pedido de reexame é o recurso cabível contra decisão definitiva de mérito proferida pelo Plenário do TCU, desde que interposto no prazo de cinco anos, contados do trânsito em julgado da decisão recorrida.",
        answer: "CERTO",
        explanation: "Art. 35 da Lei 8.443/1992 e art. 288 do RITCU. O pedido de reexame tem prazo LONGO (5 anos) e só cabe contra decisões definitivas de mérito do Plenário (não cabe contra decisões monocráticas ou de Câmara). Requisitos: apresentar novos fatos ou circunstâncias que justifiquem a mudança (não é mera revisão). Diferencia-se do recurso de reconsideração (15 dias, contra qualquer decisão em débito/multa) e dos embargos de declaração (10 dias, para esclarecer obscuridade/contradição)."
    },
    {
        id: 20,
        category: "Processos no TCU",
        text: "O processo de fiscalização de obras é iniciado de ofício pelo TCU ou mediante solicitação do Congresso Nacional, tendo como objetivo acompanhar a execução de obras públicas financiadas com recursos federais, podendo resultar em determinações ou recomendações ao gestor.",
        answer: "CERTO",
        explanation: "Fiscalização de obras é competência típica do TCU (art. 71, VI da CF - 'fiscalizar aplicação de recursos repassados'). Pode ser iniciada de ofício (iniciativa do próprio TCU) ou por solicitação (Congresso ou comissões). As obras podem sofrer fiscalização preventiva (acompanhamento durante execução) ou repressiva (análise posterior). Os resultados podem ser: determinações (ordem vinculante), recomendações (sugestões) ou audiências/citações (se houver irregularidades). Tema relevante dado o volume de recursos em obras públicas."
    },
    {
        id: 21,
        category: "Competências e Jurisdição",
        text: "O TCU tem jurisdição própria e privativa em todo o território nacional sobre pessoas e matérias sujeitas à sua competência, podendo suas decisões serem revistas pelo Poder Judiciário quanto ao mérito administrativo.",
        answer: "ERRADO",
        explanation: "A primeira parte está correta (jurisdição própria e privativa), mas o erro está no final. O Judiciário NÃO pode rever o MÉRITO das decisões do TCU - apenas os aspectos formais/legais (devido processo legal, competência, legalidade). O mérito técnico-administrativo (oportunidade, conveniência, valoração de provas técnicas) é irrecorrível ao Judiciário. Esta é uma aplicação do princípio da separação dos poderes e da especialização técnica do TCU. Pegadinha comum: tentar fazer o candidato achar que o Judiciário pode tudo."
    },
    {
        id: 22,
        category: "Competências e Jurisdição",
        text: "Compete ao TCU julgar as contas dos responsáveis por empresas supranacionais de cujo capital social a União participe, nos termos do tratado constitutivo, ainda que de forma minoritária.",
        answer: "CERTO",
        explanation: "Art. 5º, V da Lei 8.443/1992. Competência específica e pouco intuitiva, mas que a CEBRASPE já cobrou. Empresas supranacionais (ex: Itaipu Binacional) com participação da União estão sob jurisdição do TCU, mesmo que a participação seja minoritária. O que importa é a presença de recursos públicos federais. A expressão 'nos termos do tratado constitutivo' indica que as regras específicas do tratado internacional devem ser observadas, mas isso não afasta a jurisdição do TCU."
    },
    {
        id: 23,
        category: "Competências e Jurisdição",
        text: "O TCU não possui competência para fiscalizar recursos federais repassados a Estados, Distrito Federal e Municípios mediante convênio, acordo, ajuste ou outros instrumentos congêneres, uma vez que essa fiscalização compete aos respectivos Tribunais de Contas estaduais e municipais.",
        answer: "ERRADO",
        explanation: "Erro grave! O TCU TEM SIM competência para fiscalizar recursos FEDERAIS, ainda que repassados a entes subnacionais (art. 71, VI da CF). A origem do recurso define a competência: recurso federal = TCU; recurso estadual = TCE; recurso municipal = TC competente. Há competência concorrente quando envolve convênios (tanto o TCU quanto o TCE/TCM podem fiscalizar). A jurisprudência do STF (MS 25.092) confirmou essa competência do TCU. Tema altamente cobrado sobre federalismo fiscal."
    },
    {
        id: 24,
        category: "Competências e Jurisdição",
        text: "A sustação de contrato pelo TCU pode ocorrer diretamente, sem necessidade de prévia comunicação ao Congresso Nacional, quando verificada ilegalidade, cabendo à autoridade administrativa adotar as providências necessárias no prazo de noventa dias.",
        answer: "ERRADO",
        explanation: "A sequência está invertida! Conforme art. 71, §1º da CF: (1) TCU determina que o órgão ou entidade adote providências; (2) Se não atendido, (3) TCU comunica ao Congresso Nacional; (4) Se o Congresso ou o Executivo não sustarem em 90 dias, (5) ENTÃO o TCU susta diretamente. A sustação direta pelo TCU é subsidiária, não primária. Esta questão testa a compreensão da hierarquia de atuação institucional (Executivo → Legislativo → TCU)."
    },
    {
        id: 25,
        category: "Competências e Jurisdição",
        text: "O TCU pode realizar inspeções e auditorias por iniciativa própria ou por solicitação do Congresso Nacional, de suas Casas ou Comissões, devendo comunicar ao Legislativo sempre que constatar irregularidades que demandem providências imediatas.",
        answer: "CERTO",
        explanation: "Art. 71, IV da CF e arts. 38 a 40 da Lei 8.443/1992. O TCU tem dupla iniciativa: de ofício (própria) ou provocada (solicitação). A comunicação ao Congresso é obrigatória quando há urgência ou gravidade. Este dispositivo reforça a natureza do TCU como órgão auxiliar do Poder Legislativo, mas com autonomia para atuar proativamente. A expressão 'demandem providências imediatas' reflete situações como indícios de fraude, desvio, prejuízo iminente ao erário."
    },
    {
        id: 26,
        category: "Lei de Responsabilidade Fiscal",
        text: "Segundo a LRF, o TCU deve alertar os Poderes quando constatar que a despesa total com pessoal ultrapassou 90% do limite máximo estabelecido, devendo o ente adotar medidas de adequação nos dois quadrimestres seguintes.",
        answer: "CERTO",
        explanation: "Art. 59, §1º, II da LRF (LC 101/2000). O alerta do TCU é obrigatório quando atingido 90% do limite (limite de alerta). O prazo para ajuste é dois quadrimestres (não trimestres!). Durante esse período são vedadas: (1) concessão de vantagem a servidores; (2) criação de cargo/emprego; (3) provimento de cargo; (4) contratação de hora extra. A CEBRASPE pode trocar o percentual (usar 95% ou 100%) ou o prazo (usar trimestres ao invés de quadrimestres)."
    },
    {
        id: 27,
        category: "Lei de Responsabilidade Fiscal",
        text: "A fiscalização da gestão fiscal compete ao TCU na esfera federal, abrangendo o controle das metas fiscais, limites e condições estabelecidas na LRF, devendo emitir parecer conclusivo sobre as contas apresentadas pelo Presidente da República no prazo de noventa dias do recebimento.",
        answer: "ERRADO",
        explanation: "A primeira parte está correta (competência do TCU para fiscalizar LRF na esfera federal), mas o erro está no prazo. O prazo para o TCU emitir parecer prévio sobre as contas do Presidente é de 60 dias (art. 71, I da CF), NÃO 90 dias. Este prazo é contado do recebimento pela Comissão Mista de Orçamento do Congresso. Confusão proposital com outros prazos: 90 dias é o prazo para o Congresso sustar contrato, não para o parecer do TCU."
    },
    {
        id: 28,
        category: "Lei de Responsabilidade Fiscal",
        text: "A LRF estabelece que a dívida consolidada líquida não poderá exceder o montante da receita corrente líquida para os Estados, sendo esta relação fiscalizada pelo TCU no âmbito federal e pelos Tribunais de Contas dos Estados em suas respectivas esferas.",
        answer: "ERRADO",
        explanation: "Erro no limite! Segundo o art. 3º da LRF e Resolução do Senado nº 40/2001, o limite da dívida consolidada líquida (DCL) para Estados é de ATÉ 2 vezes a receita corrente líquida (RCL), não 1 vez. Para Municípios é 1,2 vezes a RCL; para União não há limite fixado pela Resolução (depende de lei). A segunda parte sobre competências fiscalizatórias está correta. A CEBRASPE testa se o candidato decorou os percentuais específicos da LRF."
    },
    {
        id: 29,
        category: "Lei de Responsabilidade Fiscal",
        text: "É vedado ao titular de Poder ou órgão realizar operações de crédito que excedam o montante das despesas de capital, salvo mediante autorização específica do Poder Legislativo, caracterizando tal situação a regra de ouro prevista na Constituição Federal e detalhada na LRF.",
        answer: "CERTO",
        explanation: "Art. 167, III da CF (Regra de Ouro) c/c art. 12, §2º da LRF. A regra de ouro impede que o ente se endivide para pagar despesas correntes (custeio) - só pode contrair dívida para investimentos (despesas de capital). Exceção: mediante autorização específica do Legislativo com aprovação de maioria absoluta. Esta regra evita o endividamento para bancar gastos rotineiros, preservando a sustentabilidade fiscal. Questão conceitual importante que conecta CF e LRF."
    },
    {
        id: 30,
        category: "Lei de Responsabilidade Fiscal",
        text: "O TCU deve emitir alerta aos Poderes quando verificar que o montante da dívida consolidada excedeu o respectivo limite ao final de um quadrimestre, devendo o Poder retornar ao limite em até três quadrimestres, reduzindo o excedente em pelo menos 25% no primeiro.",
        answer: "CERTO",
        explanation: "Art. 31 da LRF. Quando a dívida consolidada ultrapassa o limite: (1) TCU emite alerta; (2) Prazo total de recondução: 3 quadrimestres; (3) No primeiro quadrimestre deve eliminar no mínimo 25% do excesso. Enquanto perdurar o excesso: vedação a operação de crédito (exceto refinanciamento do principal) e obtenção de garantias. A CEBRASPE pode trocar os percentuais (usar 33% ou outros) ou prazos (trimestres ao invés de quadrimestres)."
    },
    {
        id: 31,
        category: "Tipos de Fiscalização",
        text: "A fiscalização contábil do TCU verifica a legalidade e legitimidade dos atos de gestão dos responsáveis sujeitos à sua jurisdição, quanto aos aspectos contábeis, abrangendo os registros nos sistemas estruturantes de administração financeira federal.",
        answer: "CERTO",
        explanation: "Art. 70 da CF estabelece cinco tipos de fiscalização, sendo a contábil uma delas. A fiscalização contábil examina: conformidade dos registros contábeis com as normas (MCASP - Manual de Contabilidade Aplicada ao Setor Público), adequação dos lançamentos, integridade dos sistemas (SIAFI, SIAPE, SIASG), demonstrações contábeis. Diferencia-se da fiscalização financeira (fluxos e disponibilidades) e orçamentária (execução do orçamento). A CEBRASPE pode misturar os conceitos entre os cinco tipos."
    },
    {
        id: 32,
        category: "Tipos de Fiscalização",
        text: "A auditoria de conformidade e a auditoria operacional são excludentes entre si, de modo que, ao realizar auditoria operacional, o TCU não pode avaliar aspectos de conformidade legal dos atos examinados.",
        answer: "ERRADO",
        explanation: "As auditorias NÃO são excludentes - são complementares! Uma auditoria operacional pode (e frequentemente deve) incluir avaliação de conformidade quando relevante para os objetivos. Por exemplo: ao avaliar eficiência de um programa, o auditor pode identificar que despesas foram realizadas sem licitação (aspecto de conformidade). As NAT permitem auditorias 'combinadas' ou 'integradas'. Questão sobre a visão holística da auditoria governamental moderna."
    },
    {
        id: 33,
        category: "Tipos de Fiscalização",
        text: "Levantamento de auditoria é uma etapa preliminar de fiscalização destinada a conhecer a organização e o funcionamento de órgão, entidade, programa ou atividade governamental, identificando objetos e instrumentos de fiscalização, sem resultar em determinações ou sanções aos gestores.",
        answer: "CERTO",
        explanation: "Art. 238 do RITCU. O levantamento (survey) é fase exploratória/diagnóstica que precede auditorias mais aprofundadas. Características: (1) caráter preparatório; (2) conhecimento do objeto; (3) identificação de riscos; (4) subsidia planejamento de futuras fiscalizações; (5) não gera responsabilização. É diferente de auditoria (que pode gerar determinações/sanções). O levantamento é fundamental na metodologia de auditoria baseada em risco."
    },
    {
        id: 34,
        category: "Tipos de Fiscalização",
        text: "O acompanhamento é a modalidade de fiscalização utilizada pelo TCU para monitorar o cumprimento de suas decisões e a implementação de determinações e recomendações expedidas em processos anteriores.",
        answer: "CERTO",
        explanation: "Art. 241 do RITCU. O monitoramento/acompanhamento verifica: (1) cumprimento de determinações; (2) adoção de recomendações; (3) efetividade das medidas implementadas; (4) recolhimento de valores devidos. É fase posterior ao julgamento, essencial para garantir que as decisões do TCU produzam efeitos concretos. Pode resultar em nova citação ou audiência se constatado descumprimento. Tema importante sobre efetividade do controle externo."
    },
    {
        id: 35,
        category: "Tipos de Fiscalização",
        text: "A auditoria de conformidade tem caráter eminentemente repressivo, sancionador e punitivo, destinando-se exclusivamente à identificação de irregularidades para responsabilização dos gestores faltosos.",
        answer: "ERRADO",
        explanation: "Embora a auditoria de conformidade verifique legalidade (podendo resultar em sanções), seu objetivo NÃO é exclusivamente sancionador. A finalidade é também: (1) preventiva (evitar irregularidades futuras); (2) pedagógica (orientar gestores); (3) melhoria da gestão pública; (4) transparência. O TCU tem função não apenas repressiva, mas também orientadora e educativa. A visão exclusivamente punitiva é ultrapassada - o controle externo moderno busca agregar valor à gestão."
    },
    {
        id: 36,
        category: "Responsabilização e Sanções",
        text: "A condenação em débito pelo TCU implica na obrigatoriedade de ressarcimento integral do dano causado ao erário, acrescido de juros de mora e correção monetária, sem prejuízo da aplicação cumulativa de multa proporcional ao dano.",
        answer: "CERTO",
        explanation: "Art. 19 e 57 da Lei 8.443/1992. Quando há débito: (1) ressarcimento integral do valor; (2) atualização monetária; (3) juros de mora; (4) possibilidade de multa adicional proporcional ao dano (até 100% do valor atualizado). As sanções são cumulativas: débito + multa. A CEBRASPE pode tentar fazer parecer que só cabe débito OU multa (alternativas), mas a lei permite cumulação. Importante: o débito não prescreve (imprescritível)."
    },
    {
        id: 37,
        category: "Responsabilização e Sanções",
        text: "A declaração de inidoneidade para licitar com a Administração Pública Federal é sanção aplicável pelo TCU aos responsáveis por fraude comprovada em licitação, com prazo de inabilitação não superior a cinco anos.",
        answer: "CERTO",
        explanation: "Art. 46 da Lei 8.443/1992 e art. 87, IV da Lei 8.666/1993. A declaração de inidoneidade é a sanção mais grave em matéria licitatória no âmbito do TCU. Requisitos: fraude comprovada. Prazo: enquanto perdurarem os motivos determinantes ou até reabilitação (a reabilitação pode ocorrer após 2 anos). A lei não estabelece prazo máximo fixo de 5 anos, mas este é referência (pode ser menor conforme reabilitação). Tema conectado com Lei de Licitações."
    },
    {
        id: 38,
        category: "Responsabilização e Sanções",
        text: "O TCU pode aplicar multa aos responsáveis por ato irregular, ilegítimo, antieconômico ou infração à norma legal ou regulamentar, mesmo que não tenha havido dano material ao erário.",
        answer: "CERTO",
        explanation: "Art. 58 da Lei 8.443/1992. Esta é a multa 'autônoma' (diferente da multa proporcional ao dano). Não exige dano patrimonial - basta a irregularidade formal (ilegalidade, ilegitimidade, antieconômicidade). Valor: de R$ 8.000,00 a R$ 100.000,00 (valores atualizados). Exemplos: não prestar contas, sonegar documentos, descumprir determinação do TCU. Questão importante porque muitos candidatos acham que só há sanção quando há prejuízo material."
    },
    {
        id: 39,
        category: "Responsabilização e Sanções",
        text: "A responsabilidade solidária pode ser imputada pelo TCU quando houver coautoria em ato irregular que resultou em dano ao erário, respondendo cada responsável pela totalidade do débito, independentemente do grau de participação de cada um.",
        answer: "CERTO",
        explanation: "Art. 12 da Lei 8.443/1992. Na solidariedade: (1) cada devedor responde pela totalidade; (2) o credor (União) pode cobrar de qualquer um ou de todos; (3) o pagamento por um libera os demais; (4) quem paga pode cobrar dos coautores (ação regressiva). Diferença para responsabilidade subsidiária: na subsidiária existe ordem de cobrança (primeiro do responsável direto, depois dos subsidiários). A solidariedade é mais gravosa. A CEBRASPE testa essa distinção entre solidária e subsidiária."
    },
    {
        id: 40,
        category: "Responsabilização e Sanções",
        text: "A inabilitação para o exercício de cargo em comissão ou função de confiança é sanção aplicável pelo TCU por período de cinco a oito anos aos responsáveis por atos considerados irregulares e que causaram prejuízo ao erário.",
        answer: "CERTO",
        explanation: "Art. 60 da Lei 8.443/1992. A inabilitação tem prazo de 5 a 8 anos e impede o exercício de: cargo em comissão, função de confiança, ou cargo de dirigente de entidade da administração indireta. É sanção grave, mas menos que a inidoneidade (que atinge licitações). Aplica-se quando há: (1) irregularidade grave; (2) prejuízo ao erário; (3) enriquecimento ilícito; ou (4) reincidência em irregularidades. Prazo é fixo neste intervalo, diferente da inidoneidade."
    },
    {
        id: 41,
        category: "Princípios de Controle Externo",
        text: "O princípio da segregação de funções exige que as atividades de autorização, aprovação, execução, controle e contabilização sejam exercidas por pessoas e unidades organizacionais distintas, reduzindo riscos de erro e fraude.",
        answer: "CERTO",
        explanation: "Princípio fundamental de controle interno (IN 01/2016 CGU e COSO Framework). A segregação impede que uma mesma pessoa controle todo o processo, criando 'freios e contrapesos'. Exemplo prático: quem autoriza a compra não pode ser quem recebe a mercadoria nem quem autoriza o pagamento. O TCU cobra muito este princípio ao avaliar sistemas de controle interno. Violações à segregação são achados recorrentes em auditorias. Conecta-se ao princípio da dualidade e da efetividade do controle."
    },
    {
        id: 42,
        category: "Princípios de Controle Externo",
        text: "O contraditório e a ampla defesa são assegurados aos responsáveis em todos os processos no âmbito do TCU, salvo nos casos de levantamento de auditoria e fiscalização, por serem procedimentos de natureza meramente investigativa.",
        answer: "ERRADO",
        explanation: "O contraditório e ampla defesa são garantias constitucionais (art. 5º, LV da CF) aplicáveis a TODOS os processos administrativos. Mesmo em levantamentos e fiscalizações, se houver imputação de responsabilidade ou proposta de sanção, deve ser assegurado o contraditório. O erro está em dizer 'salvo nos casos de levantamento' - na verdade, o levantamento não gera responsabilização mesmo, mas se durante qualquer procedimento surgir necessidade de responsabilização, o contraditório é obrigatório."
    },
    {
        id: 43,
        category: "Princípios de Controle Externo",
        text: "O princípio da economicidade, previsto expressamente na Constituição Federal como critério de fiscalização, refere-se à capacidade de a administração pública minimizar custos dos recursos utilizados sem comprometer a qualidade dos produtos e serviços entregues.",
        answer: "CERTO",
        explanation: "Art. 70 da CF estabelece a economicidade como critério de fiscalização. Economicidade = obter o melhor custo-benefício, minimizando custos mantendo qualidade adequada. Relaciona-se ao conceito de 'value for money' (valor pelo dinheiro). Diferencia-se de: Eficiência (relação produtos/insumos), Eficácia (atingir objetivos), Efetividade (impactos). A economicidade é input-oriented (foco nos insumos/custos), enquanto eficiência considera também outputs. Conceito essencial para auditoria operacional."
    },
    {
        id: 44,
        category: "Princípios de Controle Externo",
        text: "O princípio da publicidade no âmbito do TCU comporta exceções, admitindo-se o sigilo quando necessário à segurança do Estado ou quando o interesse social exigir, conforme determina a Constituição Federal.",
        answer: "CERTO",
        explanation: "Art. 5º, XXXIII e art. 37 da CF c/c Lei 12.527/2011 (LAI). A publicidade é regra, mas admite sigilo em três hipóteses: (1) segurança do Estado; (2) segurança da sociedade; (3) proteção da intimidade/vida privada/honra. No TCU: sessões são públicas (regra), mas pode haver sessão secreta ou sigilo de documentos quando justificado. Exemplo: investigações em andamento, informações protegidas por sigilo fiscal/bancário. A CEBRASPE testa se o candidato sabe que princípios constitucionais não são absolutos."
    },
    {
        id: 45,
        category: "Princípios de Controle Externo",
        text: "O princípio da oralidade não se aplica aos processos do TCU, devendo todos os atos processuais serem reduzidos a termo e formalizados por escrito, sendo vedada a sustentação oral de defesas ou recursos.",
        answer: "ERRADO",
        explanation: "Embora o processo no TCU seja predominantemente escrito (princípio da documentação), a sustentação oral é PERMITIDA em sessões de julgamento. O advogado ou defensor pode fazer sustentação oral perante o Plenário ou Câmara (art. 280 do RITCU). O princípio da oralidade não é aplicado em toda sua extensão (como no processo penal), mas existe. O erro está em dizer que é 'vedada' a sustentação oral - ela é facultativa, mas possível."
    },
    {
        id: 46,
        category: "Temas Complementares",
        text: "As deliberações do TCU classificam-se em acórdãos, decisões, resoluções e instruções normativas, sendo que apenas os acórdãos possuem caráter jurisdicional e força executória para efeitos de cobrança judicial.",
        answer: "ERRADO",
        explanation: "Tanto acórdãos quanto decisões têm caráter jurisdicional. A diferença: acórdãos = colegiado (Plenário ou Câmara); decisões = monocráticas (Ministro-Relator ou Ministro-Presidente). AMBOS têm força executória quando imputam débito ou multa. Resoluções e Instruções Normativas são atos normativos (não jurisdicionais). Questão sobre classificação dos atos do TCU - tema básico, mas que gera confusão pela terminologia."
    },
    {
        id: 47,
        category: "Temas Complementares",
        text: "O TCU pode determinar medidas cautelares, incluindo a indisponibilidade de bens do responsável, quando presentes os requisitos do fumus boni iuris e do periculum in mora, independentemente de provocação do Ministério Público junto ao TCU.",
        answer: "CERTO",
        explanation: "Art. 44, §§ 2º e 3º da Lei 8.443/1992 c/c art. 276 do RITCU. O TCU pode decretar cautelares de ofício (não precisa aguardar MP). Requisitos: (1) fundados indícios de responsabilidade (fumus boni iuris); (2) risco de ineficácia da decisão final (periculum in mora); (3) grave lesão ao erário ou risco de grave lesão. A cautelar mais comum é a indisponibilidade de bens. Pode também suspender procedimentos licitatórios, contratos, repasse de valores. Tema importante sobre poderes instrutórios do TCU."
    },
    {
        id: 48,
        category: "Temas Complementares",
        text: "A consulta ao TCU pode ser formulada por autoridades legitimadas sobre dúvidas na aplicação de dispositivos legais concernentes a matéria de sua competência, devendo versar sobre caso concreto já ocorrido e não sobre situações hipotéticas.",
        answer: "ERRADO",
        explanation: "Art. 264 do RITCU. Erro: a consulta deve versar sobre matéria em TESE (situação hipotética, interpretação abstrata de norma), NÃO sobre caso concreto. Se for caso concreto, o instrumento adequado é a representação ou denúncia. Legitimados para consulta: Presidente/Mesa da Câmara, Senado, comissões técnicas, Tribunal de Justiça, Governador, Presidente de Tribunal de Contas estadual. A CEBRASPE inverte propositalmente (tese/concreto) para confundir."
    },
    {
        id: 49,
        category: "Temas Complementares",
        text: "O Ministério Público junto ao TCU atua como fiscal da lei e como parte processual, podendo interpor recursos, solicitar diligências e promover a defesa da ordem jurídica, sendo suas manifestações essenciais à validade do processo nos casos em que houver débito ou multa.",
        answer: "CERTO",
        explanation: "Arts. 80 a 84 da Lei 8.443/1992. O MP/TCU tem dupla função: custos legis (fiscal da lei) e parte processual. Nos processos com débito/multa, a manifestação do MP é obrigatória (ad validitatem). Prerrogativas: acesso aos autos, solicitar diligências, recorrer de decisões, apresentar pareceres. Diferencia-se do MP comum (MPF/MPE) - são instituições distintas. O MP/TCU não tem legitimidade para ação penal (prerrogativa do MPF)."
    },
    {
        id: 50,
        category: "Temas Complementares",
        text: "O TCU deve encaminhar ao Congresso Nacional relatório trimestral sobre suas atividades de fiscalização, contendo informações sobre as auditorias realizadas, irregularidades detectadas e valores economizados, assegurando a transparência de sua atuação.",
        answer: "ERRADO",
        explanation: "O relatório do TCU ao Congresso é TRIMESTRAL para algumas informações específicas (art. 71, §4º da CF - análise de denúncias), mas o relatório geral de atividades é ANUAL (art. 71, §4º c/c art. 288 do RITCU). Além disso, há o Relatório Anual de Atividades (RELTCU) que consolida toda a atuação do Tribunal. A CEBRASPE pode confundir periodicidades: trimestral (algumas situações específicas) vs. anual (relatório geral). Sempre atenção aos prazos processuais e de prestação de informações!"
    }
];
