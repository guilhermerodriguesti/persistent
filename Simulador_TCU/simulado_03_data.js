const questions = [
    {
        "id": 1,
        "category": "TI - Banco de Dados - Normalização",
        "text": "Julgue o item a seguir, que versam sobre a modelagem de dados. Uma tabela está na 3.ª forma normal (3NF) se todos os atributos dependerem diretamente da chave primária.",
        "answer": "ERRADO",
        "explanation": "Explicação disponível no sistema Tec Concursos."
    },
    {
        "id": 2,
        "category": "TI - Banco de Dados - Normalização",
        "text": "A respeito de banco de dados, julgue o próximo item. O processo de normalização de dados tem como objetivo eliminar aqueles que são redundantes e garantir que as dependências entre eles façam sentido, armazenando apenas os logicamente relacionados em uma tabela.",
        "answer": "CERTO",
        "explanation": "Explicação disponível no sistema Tec Concursos."
    },
    {
        "id": 3,
        "category": "TI - Banco de Dados - Normalização",
        "text": "Julgue o seguinte item, relativo a banco de dados. A redundância de dados deve sempre ser evitada a todo custo durante o projeto e manutenção de um banco de dados, pois causa, frequentemente, inconsistência de dados.",
        "answer": "ERRADO",
        "explanation": "Explicação disponível no sistema Tec Concursos."
    },
    {
        "id": 4,
        "category": "TI - Banco de Dados - Normalização",
        "text": "No que se refere à normalização de banco de dados, julgue o próximo item. Considerando-se a tabela a seguir, é correto afirmar que ela está na primeira forma normal. id_beneficiario nome_titular dependentes 001 João da Silva Ana, Carlos, Pedro 002 Maria Oliveira Luís 003 José Ferreira Laura, Lucas",
        "answer": "ERRADO",
        "explanation": "Explicação disponível no sistema Tec Concursos."
    },
    {
        "id": 5,
        "category": "TI - Banco de Dados - Normalização",
        "text": "Em relação a BI (business intelligence ) e à modelagem de dados, julgue o item que se segue. Quando todas as colunas não chave de uma tabela dependem de toda a chave composta, essa tabela está na segunda forma normal (2FN).",
        "answer": "CERTO",
        "explanation": "Explicação disponível no sistema Tec Concursos."
    },
    {
        "id": 6,
        "category": "TI - Banco de Dados - Normalização",
        "text": "Uma loja pretende estruturar as informações de clientes e produtos em um banco de dados relacional. Os dados de clientes incluem ID do cliente, nome, endereço e telefone. Os dados de produtos incluem ID do produto, nome do produto, preço e quantidade em estoque. A empresa quer saber que produtos cada cliente comprou e em que quantidade, e os clientes que compraram determinado produto, em certo período. Com base na situação hipotética apresentada, julgue o seguinte item. As chaves primárias de cada tabela a ser criada, após a normalização na 3FN, são: Tabela: Clientes: ID_Cliente; Tabela: Produtos: ID_Produto e Tabela: Compras: ID_Compra.",
        "answer": "CERTO",
        "explanation": "Explicação disponível no sistema Tec Concursos."
    },
    {
        "id": 7,
        "category": "Geral",
        "text": "TI - Banco de Dados - Normalização  No que diz respeito à normalização das estruturas de dados, à extração de metadados no MySQL, a técnicas de modelagem dimensional e à linguagem de consulta estruturada (SQL – ANSI), julgue o item seguinte.  A primeira forma normal (1NF) sugere que informações repetitivas, como endereços de clientes, sejam armazenadas em uma tabela separada, para evitar redundâncias e garantir a integridade dos dados.  Certo  Errado",
        "answer": "ERRADO",
        "explanation": "Explicação disponível no sistema Tec Concursos."
    },
    {
        "id": 8,
        "category": "TI - Banco de Dados - Normalização",
        "text": "A respeito de modelagem, normalização de dados e de MySQL, julgue o item seguinte Para que uma tabela de funcionários, que inclua o departamento e o gerente do departamento, esteja na terceira forma normal, é necessário que ela seja dividida para que as informações do gerente estejam armazenadas em uma tabela separada, eliminando-se a dependência transitiva entre funcionário e gerente.",
        "answer": "CERTO",
        "explanation": "Explicação disponível no sistema Tec Concursos."
    },
    {
        "id": 9,
        "category": "TI - Banco de Dados - Normalização Na relação a seguir, criada para armazenar determinados dados, os atributos sublinhados compõem a chave primária. DESIGNA-PROFESSOR-SEMESTRE ( matricula-professor, codigo-curso , nome-professor, nome-curso, quantidade-horas, regime-dedicacao, matricula-doprofessor- coordenador) Nesse caso, são aplicadas as seguintes regras: • um professor pode ser designado para mais de um curso; • um curso tem apenas um professor designado como coordenador; • um professor pode ser coordenador de mais de um curso; • o regime- dedicação de cada professor é determinado em função da quantidade de horas de trabalho designadas.",
        "text": "Com base nas informações precedentes, julgue o item que se segue, a respeito das regras de modelagem e normalização de dados. Para que a relação apresentada esteja na quarta forma normal (4FN), uma das relações geradas no processo de decomposição deve ser a seguinte. DESIGNA-PROFESSOR-COORDENADOR (matricula-professor, matricula-professor-coordenador, codigo-curso)",
        "answer": "ERRADO",
        "explanation": "Explicação disponível no sistema Tec Concursos."
    },
    {
        "id": 10,
        "category": "TI - Banco de Dados - Normalização Na relação a seguir, criada para armazenar determinados dados, os atributos sublinhados compõem a chave primária. DESIGNA-PROFESSOR-SEMESTRE ( matricula-professor, codigo-curso , nome-professor, nome-curso, quantidade-horas, regime-dedicacao, matricula-doprofessor- coordenador) 411) 412) 413) 414) Nesse caso, são aplicadas as seguintes regras: • um professor pode ser designado para mais de um curso; • um curso tem apenas um professor designado como coordenador; • um professor pode ser coordenador de mais de um curso; • o regime- dedicação de cada professor é determinado em função da quantidade de horas de trabalho designadas.",
        "text": "Com base nas informações precedentes, julgue o item que se segue, a respeito das regras de modelagem e normalização de dados. Para que esteja na terceira forma normal (3FN), a relação apresentada deve ser decomposta e deve possuir, no fim do processo de normalização, um total de quatro relações.",
        "answer": "CERTO",
        "explanation": "Explicação disponível no sistema Tec Concursos."
    },
    {
        "id": 11,
        "category": "TI - Banco de Dados - Consultas e Comandos em SQL",
        "text": "Julgue o item a seguir, a respeito de linguagem de manipulação de dados (DML), de linguagem de definição de dados (DDL), de modelagem dimensional e de linguagem de consulta estruturada (SQL). O comando SQL a seguir permite extrair todas as colunas da tabela TB_PESSOA com atributo ALTURA superior a 1.5. EXTRACT ALL COLUMN FROM TABLE TB_PESSOA WHERE COLUMN ALTURA > 1.5",
        "answer": "ERRADO",
        "explanation": "Explicação disponível no sistema Tec Concursos."
    },
    {
        "id": 12,
        "category": "TI - Banco de Dados - Consultas e Comandos em SQL",
        "text": "Julgue o item a seguir, a respeito de linguagem de manipulação de dados (DML), de linguagem de definição de dados (DDL), de modelagem dimensional e de linguagem de consulta estruturada (SQL). O comando SQL SELECT FROM permite que se leia certa coluna de uma tabela.",
        "answer": "CERTO",
        "explanation": "Explicação disponível no sistema Tec Concursos."
    },
    {
        "id": 13,
        "category": "TI - Banco de Dados - Consultas e Comandos em SQL",
        "text": "Acerca de linguagens de consulta e de banco de dados distribuídos, julgue o item a seguir. Os comandos SQL, tais como SELECT , INSERT , UPDATE e DELETE , são aplicáveis em SGDBs relacionais.",
        "answer": "CERTO",
        "explanation": "Explicação disponível no sistema Tec Concursos."
    },
    {
        "id": 14,
        "category": "TI - Banco de Dados - Consultas e Comandos em SQL cidade IBGE Uberaba 3170107 Uberlândia 3170206 Araguari 3103504",
        "text": "Considerando que os dados precedentes estejam armazenados em uma tabela no H2 Database chamada TABCIDADES, julgue o item a seguir. O comando seguinte excluirá da tabela em apreço a coluna IBGE. SET @COLUMN = IBGE DROP COLUMN ON TABCIDADES IN @COLUMN;",
        "answer": "ERRADO",
        "explanation": "Explicação disponível no sistema Tec Concursos."
    },
    {
        "id": 15,
        "category": "TI - Banco de Dados - Consultas e Comandos em SQL 415) 416) 417) 418) cidade IBGE Uberaba 3170107 Uberlândia 3170206 Araguari 3103504",
        "text": "Considerando que os dados precedentes estejam armazenados em uma tabela no H2 Database chamada TABCIDADES, julgue o item a seguir. O comando a seguir excluirá, na tabela em questão, o registro referente à cidade de Uberlândia. SET @ROWID ON IBGE = 3170206; DEL ON TABCIDADES IN @ROWID;",
        "answer": "ERRADO",
        "explanation": "Explicação disponível no sistema Tec Concursos."
    },
    {
        "id": 16,
        "category": "TI - Banco de Dados - Consultas e Comandos em SQL",
        "text": "Julgue o item a seguir, relativo às tecnologias CSV e JSON, à Linguagem SQL e ao modelo CRISP-DM. A cláusula GROUP BY, do SQL, pode ser utilizada sem a presença de funções agregadas, desde que haja uma cláusula ORDER BY para organizar os resultados da consulta.",
        "answer": "ERRADO",
        "explanation": "Explicação disponível no sistema Tec Concursos."
    },
    {
        "id": 17,
        "category": "Geral",
        "text": "TI - Banco de Dados - Consultas e Comandos em SQL  A figura a seguir representa um projeto de banco de dados para a análise de gastos em saúde por município e por hospital.  A partir dessas informações, julgue o próximo item.  A consulta SQL a seguir cria uma view para listar o total de gastos por município e hospital, bem como agrupa os resultados por município e hospital, calcula a soma dos valores gastos e ordena os resultados, de forma decrescente, pelo maior gasto e, depois, pelo nome do município e dohospital.  create   view   total_gastos_por_municipio   as  select   nome_municipio   as   municipio,  nome_hospital   as   hospital,   sum(valor_gasto)  as   total  from   municipio   m   join   hospital   h  on   m.id_municipio   =   h.id_municipio  join   gastos   g   on   h.id_hospital   =  g.id_hospital  group   by   1,2  order   by   3   desc,1,2  Certo  Errado",
        "answer": "CERTO",
        "explanation": "Explicação disponível no sistema Tec Concursos."
    },
    {
        "id": 18,
        "category": "Geral",
        "text": "TI - Banco de Dados - Consultas e Comandos em SQL  A figura a seguir representa um projeto de banco de dados para a análise de gastos em saúde por município e por hospital.    419)  420)  A partir dessas informações, julgue o próximo item.  O código a seguir cria a tabela gastos, de acordo com os relacionamentos com as outras tabelas.  CREATE   TABLE   gastos   (  id_gasto   INTEGER,  id_tipo_gasto_saude   INTEGER   NOT   NULL,  id_hospital   INTEGER   NOT   NULL,  ano   INTEGER   NOT   NULL,  mes   INTEGER   NOT   NULL,  valor_gasto   DECIMAL(15,2)   NOT   NULL,  id_municipio   INTEGER   NOT   NULL,  CONSTRAINT   pk_gastos   PRIMARY   KEY   (id_gasto),  CONSTRAINT   fk_gastos_tipo_gasto   FOREIGN   KEY  (id_tipo_gasto_saude)   REFERENCES  tipo_gasto_saude(id_tipo_gasto_saude),CONSTRA  INT   fk_gastos_hospital   FOREIGN   KEY  (id_hospital)   REFERENCES  hospital(id_hospital))  Certo  Errado",
        "answer": "CERTO",
        "explanation": "Explicação disponível no sistema Tec Concursos."
    },
    {
        "id": 19,
        "category": "Geral",
        "text": "TI - Banco de Dados - Consultas e Comandos em SQL  No que diz respeito à normalização das estruturas de dados, à extração de metadados no MySQL, a técnicas de modelagem dimensional e à linguagem de consulta estruturada (SQL – ANSI), julgue o item seguinte.  A opção de privilégio   SELECT   com hierarquia oferece a um usuário acesso automático a privilégios   SELECT   em subtabelas atuais e futuras, o que simplifica a gestão de permissões no banco de dados.  Certo  Errado",
        "answer": "CERTO",
        "explanation": "Explicação disponível no sistema Tec Concursos."
    },
    {
        "id": 20,
        "category": "TI - Banco de Dados - Consultas e Comandos em SQL",
        "text": "No modelo a seguir, idProcesso da tabela Processo e IdOrgao da tabela Orgao são chaves primárias, NN corresponde a not null e FK, a foreign key. Com base no modelo e nas informações precedentes, julgue o item subsecutivo. A execução do script SQL a seguir criará as tabelas e o relacionamento entre elas, conforme o modelo apresentado. CREATE TABLE Orgao ( IdOrgao INT NOT NULL PRIMARY KEY, NomeOrgao VARCHAR(45) NULL, FOREIGN KEY (Processo) REFERENCES Processo (IdOrgao) ); CREATE TABLE Processo ( idProcesso INT NOT NULL PRIMARY KEY, 421) 422) NumeroProcesso VARCHAR(45) NULL, IdOrgao INT NULL);",
        "answer": "ERRADO",
        "explanation": "Explicação disponível no sistema Tec Concursos."
    },
    {
        "id": 21,
        "category": "TI - Banco de Dados - Consultas e Comandos em SQL",
        "text": "Em determinada faculdade, para controlar os dados das monitorias prestadas por alunos a seus colegas, foram criadas as tabelas Aluno, Disciplina e Monitoria por meio dos scripts SQL a seguir. CREATE TABLE Aluno ( matricula integer, nome varchar(50), cpf integer, PRIMARY KEY(matricula) ); CREATE TABLE Disciplina ( cod_disciplina integer, nome_disciplina varchar(50), PRIMARY KEY(cod_disciplina) ); CREATE TABLE Monitoria ( cod_monitoria integer, dia_da_semana char(20), numero_de_horas integer, matricula_aluno_atendido integer, matricula_aluno_monitor integer, cod_disciplina_apoiada integer, PRIMARY KEY(cod_monitoria), FOREIGN KEY (matricula_aluno_atendido) REFERENCES Aluno (matricula), FOREIGN KEY (matricula_aluno_monitor) REFERENCES Aluno (matricula), FOREIGN KEY (cod_disciplina_apoiada) REFERENCES Disciplina (cod_disciplina) ); A partir dessas informações, julgue o próximo item. Se as referidas tabelas forem criadas em um banco de dados MySQL, para que seja feita uma mudança no nome do campo dia_da_semana para nome_do_dia na tabela Monitoria, será necessário executar o comando a seguir. ALTER TABLE Monitoria MODIFY COLUMN dia_da_semana TO nome_do_dia",
        "answer": "ERRADO",
        "explanation": "Explicação disponível no sistema Tec Concursos."
    },
    {
        "id": 22,
        "category": "TI - Banco de Dados - Consultas e Comandos em SQL",
        "text": "Em determinada faculdade, para controlar os dados das monitorias prestadas por alunos a seus colegas, foram criadas as tabelas Aluno, Disciplina e Monitoria por meio dos scripts SQL a seguir. CREATE TABLE Aluno ( matricula integer, nome varchar(50), cpf integer, PRIMARY KEY(matricula) ); CREATE TABLE Disciplina ( cod_disciplina integer, nome_disciplina varchar(50), PRIMARY KEY(cod_disciplina) ); CREATE TABLE Monitoria ( cod_monitoria integer, dia_da_semana char(20), numero_de_horas integer, matricula_aluno_atendido integer, matricula_aluno_monitor integer, cod_disciplina_apoiada integer, PRIMARY KEY(cod_monitoria), FOREIGN KEY (matricula_aluno_atendido) REFERENCES 423) 424) Aluno (matricula), FOREIGN KEY (matricula_aluno_monitor) REFERENCES Aluno (matricula), FOREIGN KEY (cod_disciplina_apoiada) REFERENCES Disciplina (cod_disciplina) ); A partir dessas informações, julgue o próximo item. O comando SQL a seguir é capaz de listar pelo nome apenas o Aluno apoiado pela Monitoria, seguido pelo número de horas de atendimento, sendo a lista dada em ordem decrescente do número de horas e apresentada com pelo menos um registro na tabela Monitoria. SELECT a.nome, m.numero_de_horas AS nr_horas_atendimento FROM Aluno a LEFT OUTER JOIN Monitoria m ON a.matricula = m.matricula_aluno_atendido order by 2 desc;",
        "answer": "ERRADO",
        "explanation": "Explicação disponível no sistema Tec Concursos."
    },
    {
        "id": 23,
        "category": "TI - Banco de Dados - Consultas e Comandos em SQL",
        "text": "Em determinada faculdade, para controlar os dados das monitorias prestadas por alunos a seus colegas, foram criadas as tabelas Aluno, Disciplina e Monitoria por meio dos scripts SQL a seguir. CREATE TABLE Aluno ( matricula integer, nome varchar(50), cpf integer, PRIMARY KEY(matricula) ); CREATE TABLE Monitoria ( cod_monitoria integer, dia_da_semana char(20), numero_de_horas integer, matricula_aluno_atendido integer, matricula_aluno_monitor integer, cod_disciplina_apoiada integer, PRIMARY KEY(cod_monitoria), FOREIGN KEY (matricula_aluno_atendido) REFERENCES Aluno (matricula), FOREIGN KEY (matricula_aluno_monitor) REFERENCES Aluno (matricula), FOREIGN KEY (cod_disciplina_apoiada) REFERENCES Disciplina (cod_disciplina) ); A partir dessas informações, julgue o próximo item. O comando SQL a seguir permite listar o nome das disciplinas que estão sendo apoiadas pela Monitoria e a respectiva quantidade de alunos atendidos em cada disciplina. SELECT nome_disciplina, COUNT(cod_disciplina_apoiada) as quantidade_de_alunos FROM Monitoria, Disciplina WHERE cod_disciplina = cod_disciplina_apoiada GROUP BY cod_disciplina_apoiada;",
        "answer": "CERTO",
        "explanation": "Explicação disponível no sistema Tec Concursos."
    },
    {
        "id": 24,
        "category": "TI - Banco de Dados - Consultas e Comandos em SQL",
        "text": "Em determinada faculdade, para controlar os dados das monitorias prestadas por alunos a seus colegas, foram criadas as tabelas Aluno, Disciplina e Monitoria por meio dos scripts SQL a seguir. CREATE TABLE Aluno ( matricula integer, nome varchar(50), cpf integer, PRIMARY KEY(matricula) ); CREATE TABLE Disciplina ( cod_disciplina integer, nome_disciplina varchar(50), 425) 426) 427) 428) PRIMARY KEY(cod_disciplina) ); CREATE TABLE Monitoria ( cod_monitoria integer, dia_da_semana char(20), numero_de_horas integer, matricula_aluno_atendido integer, matricula_aluno_monitor integer, cod_disciplina_apoiada integer, PRIMARY KEY(cod_monitoria), FOREIGN KEY (matricula_aluno_atendido) REFERENCES Aluno (matricula), FOREIGN KEY (matricula_aluno_monitor) REFERENCES Aluno (matricula), FOREIGN KEY (cod_disciplina_apoiada) REFERENCES Disciplina (cod_disciplina) ); A partir dessas informações, julgue o próximo item. Se as referidas tabelas forem criadas em um banco de dados MySQL, para que seja feita uma mudança no nome do campo dia_da_semana para nome_do_dia na tabela Monitoria, será necessário executar o comando a seguir. Se a tabela Aluno for eliminada com o comando DROP do SQL, então, para desfazer essa eliminação utilizando o Oracle 21C, o comando a seguir deve ser executado, caso o parâmetro de inicialização RECYCLEBIN esteja definido como ON. FLASHBACK TABLE Aluno TO BEFORE DROP",
        "answer": "CERTO",
        "explanation": "Explicação disponível no sistema Tec Concursos."
    },
    {
        "id": 25,
        "category": "TI - Banco de Dados - Sublinguagens SQL (DDL, DML, DQL, DCL e DTL)",
        "text": "Julgue o item seguinte, relativo a linguagem de consulta estruturada (SQL), linguagem de definição de dados (DDL) e linguagem de manipulação de dados (DML). Os comandos SQL são instruções ou consultas usadas para interagir com um banco de dados relacional, a exemplo do comando COMMIT disponibilizado na DML para manipular dados.",
        "answer": "ERRADO",
        "explanation": "Explicação disponível no sistema Tec Concursos."
    },
    {
        "id": 26,
        "category": "TI - Banco de Dados - PL/SQL e Outras Extensões SQL",
        "text": "Uma loja pretende estruturar as informações de clientes e produtos em um banco de dados relacional. Os dados de clientes incluem ID do cliente, nome, endereço e telefone. Os dados de produtos incluem ID do produto, nome do produto, preço e quantidade em estoque. A empresa quer saber que produtos cada cliente comprou e em que quantidade, e os clientes que compraram determinado produto, em certo período. Com base na situação hipotética apresentada, julgue o seguinte item. Em relação às linguagens de programação para banco de dados, é correto a firmar que S QL é uma linguagem d e programação que se concentra no gerenciamento de bancos de dados relacionais; T-SQL é uma extensão processual usada somente no SQL Server.",
        "answer": "ERRADO",
        "explanation": "Explicação disponível no sistema Tec Concursos."
    },
    {
        "id": 27,
        "category": "TI - Banco de Dados - SQL Server",
        "text": "A respeito de administração de banco de dados, julgue o item a seguir. Os Extended Events no Microsoft SQL Server são ferramentas de monitoramento e diagnóstico, que permitem rastrear eventos com baixo impacto de desempenho, com maior flexibilidade e precisão, substituindo o SQL Profile.",
        "answer": "CERTO",
        "explanation": "Explicação disponível no sistema Tec Concursos."
    },
    {
        "id": 28,
        "category": "TI - Banco de Dados - SQL Server CREATE CLUSTERED INDEX idx_clustered ON schema1.table1 (column1 DESC, column2 ASC, column3 DESC); 429) 430) 431) 432) 433) 434)",
        "text": "Considerando o comando precedente, do banco de dados MS-SQLSERVER 2019, julgue o próximo item. O comando cria um índice clusterizado em column1, column2 e column3 da tabela table1 no esquema schema1, com column1 e column3 classificados em ordem decrescente e column2 classificado em ordem crescente.",
        "answer": "CERTO",
        "explanation": "Explicação disponível no sistema Tec Concursos."
    },
    {
        "id": 29,
        "category": "TI - Banco de Dados - Oracle",
        "text": "Acerca de linguagens de consulta e de banco de dados distribuídos, julgue o item a seguir. No Oracle, o uso de PL/SQL é ideal para operações avançadas de controle e análise de segurança, pois permite que se criem consultas complexas, que incluem laços de repetição e tratamento de exceções.",
        "answer": "CERTO",
        "explanation": "Explicação disponível no sistema Tec Concursos."
    },
    {
        "id": 30,
        "category": "TI - Banco de Dados - MongoDB",
        "text": "Julgue o item a seguir, relativo a administração de banco de dados PostgreSQL, SQL Server e MongoDB. MongoDB utiliza um modelo de dados orientado a documentos e permite a replicação de dados entre diferentes nós através de um conjunto de réplicas ( replica set ), sendo o nível de consistência eventual ( eventual consistency ) a única opção para consultas em réplicas secundárias.",
        "answer": "ERRADO",
        "explanation": "Explicação disponível no sistema Tec Concursos."
    },
    {
        "id": 31,
        "category": "TI - Banco de Dados - NoSQL",
        "text": "Julgue o item a seguir, a respeito de bancos de dados NoSQL. No modelo orientado a documentos, um documento é equivalente a uma tabela no modelo relacional, uma coleção é equivalente a uma linha (ou registro), um campo é equivalente a uma coluna, e um índice de documento é equivalente a um índice.",
        "answer": "ERRADO",
        "explanation": "Explicação disponível no sistema Tec Concursos."
    },
    {
        "id": 32,
        "category": "TI - Banco de Dados - NoSQL",
        "text": "Em relação a bancos de dados, julgue o item subsequente. Para lidar com as necessidades de gerenciamento de dados de Big Data, podem ser usados sistemas para armazenamento de chave-valor, mesmo sendo comum que esses sistemas tenham recursos de consulta limitados e não aceitem o uso da SQL.",
        "answer": "CERTO",
        "explanation": "Explicação disponível no sistema Tec Concursos."
    },
    {
        "id": 33,
        "category": "TI - Banco de Dados - NoSQL",
        "text": "No que se refere a banco de dados NoSQL, julgue o próximo item. No banco de dados NoSQL do tipo graph, os elementos são armazenados como nós, arestas e propriedades.",
        "answer": "CERTO",
        "explanation": "Explicação disponível no sistema Tec Concursos."
    },
    {
        "id": 34,
        "category": "TI - Banco de Dados - NoSQL",
        "text": "No que se refere a banco de dados NoSQL, julgue o próximo item. 435) 436) 437) 438) 439) 440) Os bancos de dados NoSQL do tipo documento ampliam o conceito do banco de dados do tipo chave-valor, pois organizam os documentos inteiros em grupos chamados coleções.",
        "answer": "CERTO",
        "explanation": "Explicação disponível no sistema Tec Concursos."
    },
    {
        "id": 35,
        "category": "TI - Ciência de Dados e Inteligência Artificial - Governança e Qualidade de Dados (DAMA-DMBOK e Conceitos Relacionados)",
        "text": "A respeito de governança e gestão de TI, julgue o próximo item. A governança de dados é um processo exclusivo do departamento de TI e não requer a participação de outras áreas da organização, pois seu objetivo principal é garantir a eficiência técnica dos sistemas de informação.",
        "answer": "ERRADO",
        "explanation": "Explicação disponível no sistema Tec Concursos."
    },
    {
        "id": 36,
        "category": "TI - Ciência de Dados e Inteligência Artificial - Governança e Qualidade de Dados (DAMA-DMBOK e Conceitos Relacionados)",
        "text": "A respeito de governança e gestão de TI, julgue o próximo item. Na governança de dados, a definição de responsabilidades e papéis para o gerenciamento de dados não é essencial, desde que existam ferramentas tecnológicas eficientes para realizar a gestão dos dados de forma automatizada.",
        "answer": "ERRADO",
        "explanation": "Explicação disponível no sistema Tec Concursos."
    },
    {
        "id": 37,
        "category": "TI - Ciência de Dados e Inteligência Artificial - Governança e Qualidade de Dados (DAMA-DMBOK e Conceitos Relacionados)",
        "text": "Acerca de governança de dados, julgue o item a seguir. O CDO ( chief data officer ) é responsável por definir e executar estratégias para a governança, a qualidade e o uso dos dados em diversas áreas, experimentos científicos, gestão operacional e tomada de decisão estratégica, o que garante que as informações sejam organizadas e utilizadas de forma eficiente para gerar inovação e valor para a instituição.",
        "answer": "CERTO",
        "explanation": "Explicação disponível no sistema Tec Concursos."
    },
    {
        "id": 38,
        "category": "TI - Ciência de Dados e Inteligência Artificial - Governança e Qualidade de Dados (DAMA-DMBOK e Conceitos Relacionados)",
        "text": "Acerca de governança de dados, julgue o item a seguir. Se, nos dados de criação de suínos, um suíno foi registrado com 100 kg de peso e 2 meses de idade, então, como os valores registrados são incomuns para a espécie, tem-se, nesse caso, um exemplo de valores inconsistentes; essa discrepância pode indicar erro de preenchimento, como entrada incorreta de dados, ou a manipulação intencional para alterar informações e deve ser corrigida com técnicas como a remoção do registro inconsistente ou a substituição do peso por uma média calculada a partir de outros suínos da mesma idade.",
        "answer": "CERTO",
        "explanation": "Explicação disponível no sistema Tec Concursos."
    },
    {
        "id": 39,
        "category": "TI - Ciência de Dados e Inteligência Artificial - Governança e Qualidade de Dados (DAMA-DMBOK e Conceitos Relacionados)",
        "text": "Acerca de administração de SGBD e governança de dados, julgue o próximo item. De acordo com o DAMA Wheel, a área de arquitetura de dados oferece orientação e supervisão para o gerenciamento de dados.",
        "answer": "ERRADO",
        "explanation": "Explicação disponível no sistema Tec Concursos."
    },
    {
        "id": 40,
        "category": "TI - Ciência de Dados e Inteligência Artificial - Governança e Qualidade de Dados (DAMA-DMBOK e Conceitos Relacionados)",
        "text": "Com base em obtenção, limpeza e pré-processamento de dados, julgue o próximo item. 441) 442) 443) 444) 445) 446) Em um processo de análise de dados, os shadow systems não representam dados consolidados, por isso devem ser excluídos de todas as fases do projeto.",
        "answer": "ERRADO",
        "explanation": "Explicação disponível no sistema Tec Concursos."
    },
    {
        "id": 41,
        "category": "TI - Ciência de Dados e Inteligência Artificial - Governança e Qualidade de Dados (DAMA-DMBOK e Conceitos Relacionados)",
        "text": "Julgue o item que se segue, a respeito de qualidade de dados. A qualidade dos dados é normalmente definida como uma propriedade relativa dos dados, em vez de absoluta.",
        "answer": "CERTO",
        "explanation": "Explicação disponível no sistema Tec Concursos."
    },
    {
        "id": 42,
        "category": "TI - Ciência de Dados e Inteligência Artificial - Governança e Qualidade de Dados (DAMA-DMBOK e Conceitos Relacionados)",
        "text": "Julgue o item que se segue, a respeito de qualidade de dados. Os principais componentes dos processos de qualidade para modelos de dados incluem a definição de secundário, a modelagem de processos e a revisão por pares.",
        "answer": "ERRADO",
        "explanation": "Explicação disponível no sistema Tec Concursos."
    },
    {
        "id": 43,
        "category": "TI - Ciência de Dados e Inteligência Artificial - Governança e Qualidade de Dados (DAMA-DMBOK e Conceitos Relacionados)",
        "text": "Em relação à governança de dados, julgue o item a seguir. Segundo o DAMA-DMBoK, um dos objetivos do gerenciamento de metadados é coletar e integrar os metadados de diversas fontes.",
        "answer": "CERTO",
        "explanation": "Explicação disponível no sistema Tec Concursos."
    },
    {
        "id": 44,
        "category": "TI - Ciência de Dados e Inteligência Artificial - Governança e Qualidade de Dados (DAMA-DMBOK e Conceitos Relacionados)",
        "text": "Em relação à governança de dados, julgue o item a seguir. A administração de dados atua em um contexto mais abrangente que a gestão de dados, com foco no controle das estruturas dos metadados da entidade.",
        "answer": "CERTO",
        "explanation": "Explicação disponível no sistema Tec Concursos."
    },
    {
        "id": 45,
        "category": "TI - Ciência de Dados e Inteligência Artificial - Governança e Qualidade de Dados (DAMA-DMBOK e Conceitos Relacionados)",
        "text": "Em relação à governança de dados, julgue o item a seguir. Uma das premissas da governança de dados é garantir o controle da qualidade dos dados, focando nas atividades operacionais de correção de dados.",
        "answer": "ERRADO",
        "explanation": "Explicação disponível no sistema Tec Concursos."
    },
    {
        "id": 46,
        "category": "TI - Ciência de Dados e Inteligência Artificial - Business Intelligence e Analytics",
        "text": "Acerca de business intelligence, julgue o item a seguir. A arquitetura de business intelligence se utiliza dos componentes indicados na figura a seguir, sendo o OLTP uma ferramenta de software cuja função é a extração de dados de diversos sistemas, transformando-os, conforme regras de negócios e, por fim, carregando-os em um data mart ou um data warehouse. 447) 448) 449) 450)",
        "answer": "ERRADO",
        "explanation": "Explicação disponível no sistema Tec Concursos."
    },
    {
        "id": 47,
        "category": "TI - Ciência de Dados e Inteligência Artificial - Business Intelligence e Analytics",
        "text": "Julgue o item a seguir, relativos a business intelligence (BI). As estatísticas relacionadas a BI devem ser geradas com base nas fontes transacionais, sem que haja acréscimo de informações diretamente da base de BI.",
        "answer": "CERTO",
        "explanation": "Explicação disponível no sistema Tec Concursos."
    },
    {
        "id": 48,
        "category": "TI - Ciência de Dados e Inteligência Artificial - Business Intelligence e Analytics",
        "text": "Acerca de Big Data , business intelligence e machine learning julgue o item a seguir. A limpeza de dados é uma tarefa de suporte primordial em termos de manutenção dos dados usados como parte do processo de business intelligence .",
        "answer": "CERTO",
        "explanation": "Explicação disponível no sistema Tec Concursos."
    },
    {
        "id": 49,
        "category": "TI - Ciência de Dados e Inteligência Artificial - Definições e Funções de Data Warehouse e Data Mart",
        "text": "Acerca de data mining e data mart , julgue o item a seguir. Um data mart é um repositório de dados orientado a um departamento ou a uma função específica dentro de uma organização.",
        "answer": "CERTO",
        "explanation": "Explicação disponível no sistema Tec Concursos."
    },
    {
        "id": 50,
        "category": "Geral",
        "text": "TI - Ciência de Dados e Inteligência Artificial - Definições e Funções de Data Warehouse e Data Mart  Acerca dos conceitos relacionados a  business intelligence,   julgue o item que se segue.  Na implementação do slowly changing dimension tipo 2, o valor antigo é sobrescrito pelo valor novo.  Certo  Errado",
        "answer": "ERRADO",
        "explanation": "Explicação disponível no sistema Tec Concursos."
    },
    {
        "id": 51,
        "category": "TI - Ciência de Dados e Inteligência Artificial - Definições e Funções de Data Warehouse e Data Mart 451) 452) 453) 454) 455) 456) 457)",
        "text": "Julgue o item a seguir, a respeito de sistema gerenciador de banco de dados relacional e NoSQL. Data warehouses são repositórios nos quais os dados podem ser armazenados em formatos variados, incluindo-se registros semiestruturados e formatos de arquivo não estruturados.",
        "answer": "ERRADO",
        "explanation": "Explicação disponível no sistema Tec Concursos."
    },
    {
        "id": 52,
        "category": "TI - Ciência de Dados e Inteligência Artificial - Definições e Funções de Data Warehouse e Data Mart",
        "text": "Em relação a conceitos, fundamentos, características, técnicas e métodos de BI ( business intelligence ), definição e conceitos de DW ( data warehouse ) e data mining e arquitetura e aplicações de data warehouse com ETL, julgue o item subsequente. DW é um processo que reúne e gerencia várias coleções de dados históricos, indexados e de alto valor, que passam por um processo de limpeza, processamento e transformação com vistas a análises estratégicas e avançadas.",
        "answer": "CERTO",
        "explanation": "Explicação disponível no sistema Tec Concursos."
    },
    {
        "id": 53,
        "category": "TI - Ciência de Dados e Inteligência Artificial - Modelagem Dimensional",
        "text": "Em relação a BI (business intelligence ) e à modelagem de dados, julgue o item que se segue. Bancos de dados utilizados em data warehouses empregam uma modelagem específica e otimizada, denominada modelagem multidimensional.",
        "answer": "CERTO",
        "explanation": "Explicação disponível no sistema Tec Concursos."
    },
    {
        "id": 54,
        "category": "TI - Ciência de Dados e Inteligência Artificial - Modelagem Dimensional",
        "text": "Acerca de técnicas de modelagem de BI ( business intelligence ), de big data e de linguagem de manipulação de dados (DML), julgue o item que se segue. As tabelas de dimensão na modelagem para BI são estruturas de dados com informações agregadas e medidas específicas.",
        "answer": "ERRADO",
        "explanation": "Explicação disponível no sistema Tec Concursos."
    },
    {
        "id": 55,
        "category": "TI - Ciência de Dados e Inteligência Artificial - Modelagem Dimensional",
        "text": "No que se refere à integridade referencial e à modelagem dimensional, julgue o item que se segue. No âmbito da modelagem dimensional, as tabelas de fato armazenam medidas quantitativas que representam eventos de negócios, enquanto as tabelas dimensão contêm dados descritivos que auxiliam na interpretação e na análise das métricas da tabela de fato.",
        "answer": "CERTO",
        "explanation": "Explicação disponível no sistema Tec Concursos."
    },
    {
        "id": 56,
        "category": "TI - Ciência de Dados e Inteligência Artificial - ETL (Extração, Transformação e Carga)",
        "text": "Em relação a banco de dados, julgue o próximo item. De forma geral, ETL é normalmente usado para dados totalmente estruturados, enquanto ELT atende bem principalmente dados semiestruturados e(ou) não estruturados.",
        "answer": "CERTO",
        "explanation": "Explicação disponível no sistema Tec Concursos."
    },
    {
        "id": 57,
        "category": "TI - Ciência de Dados e Inteligência Artificial - ETL (Extração, Transformação e Carga)",
        "text": "Com base em modelos e integração de dados, julgue o item que se segue. Os processos de ETL e ELT exigem o mesmo grau de definição em todas as suas etapas, não havendo diferenciação entre ambos os processos. 458) 459) 460) 461) 462) 463)",
        "answer": "ERRADO",
        "explanation": "Explicação disponível no sistema Tec Concursos."
    },
    {
        "id": 58,
        "category": "TI - Ciência de Dados e Inteligência Artificial - ETL (Extração, Transformação e Carga)",
        "text": "Com base em modelos e integração de dados, julgue o item que se segue. Em ETL, o carregamento incremental por transmissão envia de forma contínua alterações em pequenos volumes de dados para o data warehouse de destino.",
        "answer": "CERTO",
        "explanation": "Explicação disponível no sistema Tec Concursos."
    },
    {
        "id": 59,
        "category": "TI - Ciência de Dados e Inteligência Artificial - ETL (Extração, Transformação e Carga)",
        "text": "Em relação à ciência de dados, julgue os itens que se seguem. Durante o processo de ETL ( extract, transform, load ), a etapa de transformação é responsável por mover os dados extraídos para o sistema de destino, onde serão armazenados para análise.",
        "answer": "ERRADO",
        "explanation": "Explicação disponível no sistema Tec Concursos."
    },
    {
        "id": 60,
        "category": "TI - Ciência de Dados e Inteligência Artificial - ETL (Extração, Transformação e Carga)",
        "text": "Julgue o item a seguir, a respeito de técnicas de ingestão de dados, análise de dados e Big Data. Na abordagem ETL, os dados são carregados no mesmo estado em que foram extraídos e são transformados no estágio posterior ao carregamento.",
        "answer": "ERRADO",
        "explanation": "Explicação disponível no sistema Tec Concursos."
    },
    {
        "id": 61,
        "category": "TI - Ciência de Dados e Inteligência Artificial - ETL (Extração, Transformação e Carga)",
        "text": "Julgue o item a seguir, relativos a ELT e ETL. No processo de transformação, os dados de cada fonte serão transformados, limpos e agregados, de acordo com os requisitos, para garantir que sejam armazenados em um formato consistente e universal.",
        "answer": "CERTO",
        "explanation": "Explicação disponível no sistema Tec Concursos."
    },
    {
        "id": 62,
        "category": "TI - Ciência de Dados e Inteligência Artificial - OLAP e suas diferenças com OLTP",
        "text": "A respeito de Big Data, julgue o próximo item. Em um cubo OLAP, os dados podem ser acumulados e divididos conforme a necessidade de cada usuário, para atender a várias áreas de interesse.",
        "answer": "CERTO",
        "explanation": "Explicação disponível no sistema Tec Concursos."
    },
    {
        "id": 63,
        "category": "TI - Ciência de Dados e Inteligência Artificial - Data Mining (Mineração de Dados): Etapas, Algoritmos e Modelos (KDD, CRISP-DM, etc.)",
        "text": "Com base em obtenção, limpeza e pré-processamento de dados, julgue o próximo item. A normalização de um conjunto de dados tem como objetivo representar todos os valores desse conjunto em uma escala de 0 a 1.",
        "answer": "CERTO",
        "explanation": "Explicação disponível no sistema Tec Concursos."
    },
    {
        "id": 64,
        "category": "TI - Ciência de Dados e Inteligência Artificial - Conceitos de Big Data",
        "text": "Acerca de Big Data , julgue o item seguinte. No contexto de Big Data analytics , a aplicação de modelos preditivos baseados em aprendizado de máquina é sempre mais eficiente do que abordagens estatísticas tradicionais, independentemente do volume, da variedade e da velocidade dos dados.",
        "answer": "ERRADO",
        "explanation": "Explicação disponível no sistema Tec Concursos."
    },
    {
        "id": 65,
        "category": "TI - Ciência de Dados e Inteligência Artificial - Conceitos de Big Data",
        "text": "No que se refere a Big Data e analytics, julgue o item a seguir. Em Big Data, um pipeline de dados visa refinar e limpar os dados brutos, facilitando a utilização desses dados pelos usuários finais.",
        "answer": "CERTO",
        "explanation": "Explicação disponível no sistema Tec Concursos."
    },
    {
        "id": 66,
        "category": "TI - Ciência de Dados e Inteligência Artificial - Conceitos de Big Data",
        "text": "Em relação à ciência de dados, julgue os itens que se seguem. O termo Big Data se refere apenas ao grande volume de dados que uma organização coleta, enquanto analytics é o processo de analisar esses dados para obter insights .",
        "answer": "ERRADO",
        "explanation": "Explicação disponível no sistema Tec Concursos."
    },
    {
        "id": 67,
        "category": "TI - Ciência de Dados e Inteligência Artificial - Conceitos de Big Data",
        "text": "Julgue o item a seguir, a respeito de técnicas de ingestão de dados, análise de dados e Big Data. No armazenamento de dados em Big Data, valor é o critério que observa a integração de informações coletadas em diferentes fontes, com vistas a enriquecer as análises.",
        "answer": "ERRADO",
        "explanation": "Explicação disponível no sistema Tec Concursos."
    },
    {
        "id": 68,
        "category": "TI - Ciência de Dados e Inteligência Artificial - Data Lake",
        "text": "Acerca de Big Data , julgue o próximo item. No processo de ELT, a limpeza e a transformação dos dados ocorrem dentro do data warehouse, enquanto que, no ETL, essas etapas ocorrem antes de os dados serem carregados na base de destino.",
        "answer": "CERTO",
        "explanation": "Explicação disponível no sistema Tec Concursos."
    },
    {
        "id": 69,
        "category": "TI - Ciência de Dados e Inteligência Artificial - Data Lake",
        "text": "A respeito de arquitetura e política de armazenamento de dados e engenharia de dados, julgue o item subsequentes. Os lagos de dados armazenam dados de forma não estruturada e sem catalogação, permitindo que todos os dados sejam armazenados livremente, independentemente de sua análise ou utilidade.",
        "answer": "CERTO",
        "explanation": "Explicação disponível no sistema Tec Concursos."
    },
    {
        "id": 70,
        "category": "TI - Ciência de Dados e Inteligência Artificial - Data Lake",
        "text": "Acerca de bancos de dados NoSQL, de banco de dados em memória e de data lake , julgue o item subsecutivo. 471) 472) 473) 474) 475) 476) Um data lake funciona como uma arquitetura de armazenamento que requer que todos os dados sejam estruturados e limpos antes de serem armazenados.",
        "answer": "ERRADO",
        "explanation": "Explicação disponível no sistema Tec Concursos."
    },
    {
        "id": 71,
        "category": "TI - Ciência de Dados e Inteligência Artificial - Ecossistema Hadoop",
        "text": "Acerca de arquitetura do sistema de arquivos distribuído, julgue o item subsecutivo. O Hadoop MapReduce permite que os arquivos de entrada e saída sejam armazenados em um sistema de arquivos distribuído, de modo que várias máquinas leiam e gravem dados em paralelo.",
        "answer": "CERTO",
        "explanation": "Explicação disponível no sistema Tec Concursos."
    },
    {
        "id": 72,
        "category": "TI - Ciência de Dados e Inteligência Artificial - Ecossistema Hadoop",
        "text": "Julgue o item a seguir, a respeito de sistemas de arquivos, banco de dados NoSQL e sistemas de indexação de dados. O Hadoop Distributed File System (HDFS) usa uma tabela para rastrear os clusters em um volume de armazenamento; esses clusters se conectam por meio de diretórios e arquivos associados e o HDFS suporta arquivos com tamanhos de volume de até 4 GB.",
        "answer": "ERRADO",
        "explanation": "Explicação disponível no sistema Tec Concursos."
    },
    {
        "id": 73,
        "category": "TI - Ciência de Dados e Inteligência Artificial - Ecossistema Hadoop",
        "text": "Acerca de Big Data , julgue o próximo item. A arquitetura Lambda difere da arquitetura Kappa devido à existência da camada batch , que permite acesso ao histórico dos dados processados.",
        "answer": "CERTO",
        "explanation": "Explicação disponível no sistema Tec Concursos."
    },
    {
        "id": 74,
        "category": "TI - Ciência de Dados e Inteligência Artificial - Ecossistema Hadoop",
        "text": "Julgue o item a seguir, a respeito de técnicas de ingestão de dados, análise de dados e Big Data. Na ingestão de dados, a arquitetura lambda utiliza o processamento em lote para fornecer visualizações das informações e utiliza a atualização em tempo real para ajudar os gestores a visualizarem dados críticos e urgentes.",
        "answer": "CERTO",
        "explanation": "Explicação disponível no sistema Tec Concursos."
    },
    {
        "id": 75,
        "category": "TI - Ciência de Dados e Inteligência Artificial - Ecossistema Hadoop",
        "text": "Julgue o item a seguir, relativo ao Hadoop e ao Spark. Spark é uma arquitetura de sistema operacional para trabalhar com dados organizados de forma hierárquica, utilizando-se o módulo Spark SQL, que permite consultar arquivos pelo seu conteúdo.",
        "answer": "ERRADO",
        "explanation": "Explicação disponível no sistema Tec Concursos."
    },
    {
        "id": 76,
        "category": "TI - Ciência de Dados e Inteligência Artificial - Ferramentas de Análise de Dados e Observabilidade (Elastic Search, Kibana, Grafana etc.)",
        "text": "Julgue o item seguinte, a respeito de ETL e de manipulação, tratamento e visualização de dados. Em gráficos interativos, um usuário pode detalhar áreas de interesse, de modo que é possível passar de uma visualização agregada, que mostra o total de vendas de um ano inteiro, para os números de vendas mensais de determinado ano. 477) 478) 479) 480) 481) 482)",
        "answer": "CERTO",
        "explanation": "Explicação disponível no sistema Tec Concursos."
    },
    {
        "id": 77,
        "category": "TI - Ciência de Dados e Inteligência Artificial - Ferramentas de Análise de Dados e Observabilidade (Elastic Search, Kibana, Grafana etc.)",
        "text": "No que se refere a Big Data e analytics, julgue o item a seguir. Embora seja viável, a coleta de dados não estruturados torna-se ineficiente quando esses dados são modelados em tabelas convencionais.",
        "answer": "CERTO",
        "explanation": "Explicação disponível no sistema Tec Concursos."
    },
    {
        "id": 78,
        "category": "TI - Ciência de Dados e Inteligência Artificial - Tensores (Tensorflow e PyTorch)",
        "text": "Julgue o próximo item, relativos a linguagens, ferramentas e bibliotecas que facilitam a criação, o treinamento e a implantação de modelos de software com aprendizado de máquina. O PyTorch permite que os desenvolvedores definam seus modelos de maneira dinâmica, o que pode ser vantajoso em cenários nos quais a estrutura do modelo tem de ser modificada.",
        "answer": "CERTO",
        "explanation": "Explicação disponível no sistema Tec Concursos."
    },
    {
        "id": 79,
        "category": "TI - Ciência de Dados e Inteligência Artificial - Conceitos Iniciais e Gerais de Inteligência Artificial",
        "text": "Julgue o próximo item, relativo à avaliação de modelos. A IA generativa é capaz de criar conteúdos novos, como textos, imagens, músicas e vídeos, além de resolver problemas inéditos com base em conhecimentos prévios, permitindo gerar novos artefatos realistas em escala, sem repeti-los.",
        "answer": "CERTO",
        "explanation": "Explicação disponível no sistema Tec Concursos."
    },
    {
        "id": 80,
        "category": "Geral",
        "text": "TI - Ciência de Dados e Inteligência Artificial - Conceitos Iniciais e Gerais de Inteligência Artificial  Com relação a ciência de dados e inteligência artificial, julgue o próximo item.  Na inteligência artificial, a representação completa de determinado assunto constitui uma ontologia.  Certo  Errado",
        "answer": "CERTO",
        "explanation": "Explicação disponível no sistema Tec Concursos."
    },
    {
        "id": 81,
        "category": "Geral",
        "text": "TI - Ciência de Dados e Inteligência Artificial - Conceitos Iniciais e Gerais de Inteligência Artificial  Com relação a ciência de dados e inteligência artificial, julgue o próximo item.  O dispositivo computacional da inteligência artificial engloba, entre outros elementos, a percepção, que é a capacidade de provocar mudanças no ambiente.  Certo  Errado",
        "answer": "ERRADO",
        "explanation": "Explicação disponível no sistema Tec Concursos."
    },
    {
        "id": 82,
        "category": "TI - Ciência de Dados e Inteligência Artificial - Conceitos Iniciais e Gerais de Inteligência Artificial",
        "text": "Com base em obtenção, limpeza e pré-processamento de dados, julgue o próximo item. No processo de análise de dados, a identificação de correlação entre dois dados define também a causalidade entre esses dados.",
        "answer": "ERRADO",
        "explanation": "Explicação disponível no sistema Tec Concursos."
    },
    {
        "id": 83,
        "category": "TI - Ciência de Dados e Inteligência Artificial - Conceitos Iniciais e Gerais de Inteligência Artificial",
        "text": "Com base em obtenção, limpeza e pré-processamento de dados, julgue o próximo item. A análise descritiva tem como objetivo responder à pergunta ‘o que aconteceu?’, ao passo que a análise diagnóstica visa responder à questão ‘por que isso aconteceu?’.",
        "answer": "CERTO",
        "explanation": "Explicação disponível no sistema Tec Concursos."
    },
    {
        "id": 84,
        "category": "TI - Ciência de Dados e Inteligência Artificial - Conceitos Iniciais e Gerais de Inteligência Artificial",
        "text": "A respeito de ontologia, julgue o próximo item. A representação formal de ontologias é utilizada para que estas sejam consumidas por computadores, enquanto a representação gráfica é utilizada para compreensão humana.",
        "answer": "CERTO",
        "explanation": "Explicação disponível no sistema Tec Concursos."
    },
    {
        "id": 85,
        "category": "TI - Ciência de Dados e Inteligência Artificial - Conceitos Iniciais e Gerais de Inteligência Artificial",
        "text": "Em relação a tecnologias de IA e aprendizado de máquina, julgue o item que se segue. A geração de linguagem natural é uma tecnologia capaz de criar texto similar ao texto escrito por seres humanos.",
        "answer": "CERTO",
        "explanation": "Explicação disponível no sistema Tec Concursos."
    },
    {
        "id": 86,
        "category": "TI - Ciência de Dados e Inteligência Artificial - Conceitos Iniciais e Gerais de Inteligência Artificial",
        "text": "Julgue o item a seguir, a respeito de RPA (robotic process automation ). RPA é o processo pelo qual um bot usa uma combinação de automação, visão computacional e aprendizado de máquina para automatizar tarefas repetitivas e de alto volume, baseadas em regras e acionadas por gatilhos.",
        "answer": "CERTO",
        "explanation": "Explicação disponível no sistema Tec Concursos."
    },
    {
        "id": 87,
        "category": "TI - Ciência de Dados e Inteligência Artificial - Conceitos Iniciais e Gerais de Inteligência Artificial",
        "text": "Em relação à inteligência artificial (IA), julgue o item a seguir. Todos os tipos de IA buscam imitar a inteligência humana em tarefas de computação, ocorrendo o aprendizado por meio de reconhecimento de textos e imagens.",
        "answer": "ERRADO",
        "explanation": "Explicação disponível no sistema Tec Concursos."
    },
    {
        "id": 88,
        "category": "TI - Ciência de Dados e Inteligência Artificial - Conceitos Iniciais e Gerais de Inteligência Artificial",
        "text": "Em relação à inteligência artificial (IA), julgue o item a seguir. Os modelos de difusão são focados na classificação de pontos de dados para determinar a relação entre fatores conhecidos e desconhecidos.",
        "answer": "ERRADO",
        "explanation": "Explicação disponível no sistema Tec Concursos."
    },
    {
        "id": 89,
        "category": "TI - Ciência de Dados e Inteligência Artificial - Conceitos Gerais de Machine Learning 489) 490) 491) 492) 493) A matriz de confusão constitui um recurso fundamental para a avaliação do desempenho de modelos de classificação no campo do aprendizado de máquina. Esse instrumento possibilita uma visualização precisa do comportamento do modelo frente às diversas classes, facilitando a identificação de erros de classificação. Nessa matriz, as linhas correspondem às classes reais, e as colunas, às classes preditas por modelo de classificação binária. predito positivo predito negativo real positivo 60 40 real negativo 20 80",
        "text": "Com base no texto e na matriz de confusão apresentados, julgue o item a seguir. Inequivocamente, essa matriz de confusão refere-se a um modelo de aprendizagem de máquina supervisionada.",
        "answer": "CERTO",
        "explanation": "Explicação disponível no sistema Tec Concursos."
    },
    {
        "id": 90,
        "category": "TI - Ciência de Dados e Inteligência Artificial - Conceitos Gerais de Machine Learning",
        "text": "No que se refere à ciência de dados, julgue o item a seguir. Em aprendizado supervisionado, o algoritmo random forest utiliza múltiplas árvores de decisão para melhorar a precisão das previsões e reduzir o risco de overfitting .",
        "answer": "CERTO",
        "explanation": "Explicação disponível no sistema Tec Concursos."
    },
    {
        "id": 91,
        "category": "TI - Ciência de Dados e Inteligência Artificial - Conceitos Gerais de Machine Learning",
        "text": "Julgue o item a seguir, a respeito de LLM e IA generativa. O RAG ( retrieval-augmented generation ) reduz a necessidade de contextualizar prompts, pois o LLM, sozinho, consegue acessar, dinamicamente, informações externas sem qualquer integração prévia com sistemas de recuperação.",
        "answer": "ERRADO",
        "explanation": "Explicação disponível no sistema Tec Concursos."
    },
    {
        "id": 92,
        "category": "TI - Ciência de Dados e Inteligência Artificial - Conceitos Gerais de Machine Learning",
        "text": "A respeito de overfitting e underfitting, de deep learning e de métodos de data mining, julgue o item que se segue. A única maneira de se evitar o underfitting em um modelo de machine learning é reduzir a quantidade de dados de entrada, pois isso impede que o modelo fique sobrecarregado de informações irrelevantes.",
        "answer": "ERRADO",
        "explanation": "Explicação disponível no sistema Tec Concursos."
    },
    {
        "id": 93,
        "category": "TI - Ciência de Dados e Inteligência Artificial - Conceitos Gerais de Machine Learning",
        "text": "Julgue o próximo item, relativo à avaliação de modelos. Considere que o gráfico a seguir descreva o resultado de três modelos de regressão logística distintos e que os resultados de AUC para os modelos referentes às curvas A, B e C sejam, respectivamente, 0,91, 0,77 e 0,59. A partir dessas informações, é correto afirmar que o modelo relativo à curva A é o melhor para classificar corretamente os dados presentes no conjunto de dados utilizado, ainda que o modelo relativo à curva C tenha obtido o menor valor. 494) 495) 496) 497) 498) 499)",
        "answer": "CERTO",
        "explanation": "Explicação disponível no sistema Tec Concursos."
    },
    {
        "id": 94,
        "category": "TI - Ciência de Dados e Inteligência Artificial - Conceitos Gerais de Machine Learning",
        "text": "Acerca de técnicas utilizadas na ciência de dados, julgue o item a seguir. O algoritmo Naive Bayes é inadequado para, por exemplo, a análise de dados de produção agrícola na previsão da qualidade de grãos de café, pois exige uma independência completa entre variáveis como pH do solo, umidade e temperatura, e não apresenta bons resultados quando essas variáveis são correlacionadas.",
        "answer": "ERRADO",
        "explanation": "Explicação disponível no sistema Tec Concursos."
    },
    {
        "id": 95,
        "category": "TI - Ciência de Dados e Inteligência Artificial - Conceitos Gerais de Machine Learning",
        "text": "Julgue o item a seguir, relativo à inteligência artificial (IA). Em machine learning, os sistemas podem usar aprendizado do tipo supervisionado, não supervisionado, autônomo ou gerenciado.",
        "answer": "ERRADO",
        "explanation": "Explicação disponível no sistema Tec Concursos."
    },
    {
        "id": 96,
        "category": "TI - Ciência de Dados e Inteligência Artificial - Conceitos Gerais de Machine Learning",
        "text": "Julgue o item a seguir, a respeito de algoritmos e técnicas supervisionadas e não supervisionadas de aprendizado de máquina e aprendizagem profunda. A distância de Minkowski entre duas cadeias de caracteres é definida como o número mínimo de operações de edição necessárias para transformar a primeira cadeia de caracteres na segunda.",
        "answer": "ERRADO",
        "explanation": "Explicação disponível no sistema Tec Concursos."
    },
    {
        "id": 97,
        "category": "TI - Ciência de Dados e Inteligência Artificial - Conceitos Gerais de Machine Learning",
        "text": "Julgue o item a seguir, a respeito de algoritmos e técnicas supervisionadas e não supervisionadas de aprendizado de máquina e aprendizagem profunda. O objetivo das regras de associação é encontrar todos os conjuntos de itens que possuem confiança mínima com máximo de dados observados.",
        "answer": "ERRADO",
        "explanation": "Explicação disponível no sistema Tec Concursos."
    },
    {
        "id": 98,
        "category": "TI - Ciência de Dados e Inteligência Artificial - Conceitos Gerais de Machine Learning",
        "text": "Julgue o item a seguir, a respeito de algoritmos e técnicas supervisionadas e não supervisionadas de aprendizado de máquina e aprendizagem profunda. Random forests fornecem pontuações de distância euclidiana entre os recursos que podem ser usadas para compreender a importância relativa de cada recurso na previsão.",
        "answer": "ERRADO",
        "explanation": "Explicação disponível no sistema Tec Concursos."
    },
    {
        "id": 99,
        "category": "TI - Ciência de Dados e Inteligência Artificial - Conceitos Gerais de Machine Learning",
        "text": "Julgue o item a seguir que tratam de extração e representação de conhecimento. Se um algoritmo induzir hipóteses que apresentam baixa taxa de acerto mesmo no conjunto de treino, então as hipóteses estão superajustadas aos dados.",
        "answer": "ERRADO",
        "explanation": "Explicação disponível no sistema Tec Concursos."
    },
    {
        "id": 100,
        "category": "Geral",
        "text": "TI - Ciência de Dados e Inteligência Artificial - Conceitos Gerais de Machine Learning  Acerca do desenvolvimento de pipelines e do processamento distribuído para aprendizado de máquina, julgue o seguinte item.  A gestão eficiente de recursos como CPU e memória não é uma consideração crítica em pipelines de aprendizado de máquina, pois os recursos podem ser alocados dinamicamente, conforme necessário.  Certo  Errado",
        "answer": "ERRADO",
        "explanation": "Explicação disponível no sistema Tec Concursos."
    },
    {
        "id": 101,
        "category": "TI - Ciência de Dados e Inteligência Artificial - Conceitos Gerais de Machine Learning",
        "text": "No que se refere à inteligência artificial e aprendizado de máquina, julgue o próximo item. Na regressão linear múltipla, a previsão do modelo é um valor entre 0 e 1, tal que 0 indica um evento improvável de acontecer e 1 indica a probabilidade máxima de que esse evento aconteça.",
        "answer": "ERRADO",
        "explanation": "Explicação disponível no sistema Tec Concursos."
    },
    {
        "id": 102,
        "category": "TI - Ciência de Dados e Inteligência Artificial - Conceitos Gerais de Machine Learning",
        "text": "No que se refere a técnicas, ferramentas e algoritmos de aprendizado não supervisionado, julgue o item a seguir. O algoritmo k-means seleciona objetos reais de uma base de dados como centroide do grupo para realizar o agrupamento de objetos semelhantes.",
        "answer": "ERRADO",
        "explanation": "Explicação disponível no sistema Tec Concursos."
    },
    {
        "id": 103,
        "category": "TI - Ciência de Dados e Inteligência Artificial - Conceitos Gerais de Machine Learning",
        "text": "Julgue o próximo item, relativo a aprendizado de máquina. A técnica de agrupamento é um tipo de aprendizado não supervisionado em que o algoritmo identifica padrões em um conjunto de dados de entrada sem ter recebido qualquer feedback prévio.",
        "answer": "CERTO",
        "explanation": "Explicação disponível no sistema Tec Concursos."
    },
    {
        "id": 104,
        "category": "TI - Ciência de Dados e Inteligência Artificial - Redes Neurais",
        "text": "Julgue o item a seguir, em relação a grandes modelos de linguagem (LLMs) e a redes neurais. A aplicação da função de ativação softmax na camada de saída foi o fator determinante pela grande evolução da capacidade de visão computacional em redes neurais multicamadas.",
        "answer": "ERRADO",
        "explanation": "Explicação disponível no sistema Tec Concursos."
    },
    {
        "id": 105,
        "category": "TI - Ciência de Dados e Inteligência Artificial - Redes Neurais",
        "text": "Julgue o item a seguir, a respeito de LLM e IA generativa. No processo de inferência, o LLaMA utiliza decodificação paralela em vez de decodificação sequencial, gerando todos os tokens simultaneamente, sem depender do contexto anterior, o que elimina a necessidade de otimizações como layer-wise quantization .",
        "answer": "ERRADO",
        "explanation": "Explicação disponível no sistema Tec Concursos."
    },
    {
        "id": 106,
        "category": "506) 507) 508) 509) 510) 511) 512) TI - Ciência de Dados e Inteligência Artificial - Redes Neurais",
        "text": "Julgue o item a seguir, relativo a redes neurais artificiais. Os nós de origem na camada de entrada da rede neural, isto é, na primeira camada oculta, fornecem os respectivos elementos do padrão de ativação (vetor de entrada), que constituem os sinais de entrada aplicados aos neurônios (nós de computação) na segunda camada.",
        "answer": "ERRADO",
        "explanation": "Explicação disponível no sistema Tec Concursos."
    },
    {
        "id": 107,
        "category": "Geral",
        "text": "TI - Ciência de Dados e Inteligência Artificial - Redes Neurais  Com referência ao uso de inteligência artificial para o reconhecimento automático de padrões de imagens de satélite, julgue o item a seguir.  Rede neurais são algoritmos que mimetizam a forma como o cérebro funciona e consistem de neurônios artificiais interligados e agrupados em camadas. Cada ligação entre neurônios possui um peso e cada neurônio possui uma função de perda e um  bias , que determina se ele será ativado ou não. Tais algoritmos podem ser utilizados na classificação de imagens de satélite.  Certo  Errado",
        "answer": "CERTO",
        "explanation": "Explicação disponível no sistema Tec Concursos."
    },
    {
        "id": 108,
        "category": "TI - Ciência de Dados e Inteligência Artificial - Redes Neurais",
        "text": "Considerando que, na chamada Indústria 4.0, diversas tecnologias digitais são integradas nos ambientes e equipamentos de produção, julgue o item a seguir, a respeito de métodos e técnicas empregadas nessa nova abordagem. Em redes neurais artificiais, as funções ativação do tipo sigmoide são não lineares, suaves e continuamente diferenciáveis.",
        "answer": "CERTO",
        "explanation": "Explicação disponível no sistema Tec Concursos."
    },
    {
        "id": 109,
        "category": "TI - Ciência de Dados e Inteligência Artificial - Redes Neurais",
        "text": "Julgue o item a seguir, relativo à inteligência artificial (IA). Em uma rede neural artificial, o valor de entrada de cada neurônio é calculado pelo produto matemático das saídas dos neurônios da camada inferior.",
        "answer": "ERRADO",
        "explanation": "Explicação disponível no sistema Tec Concursos."
    },
    {
        "id": 110,
        "category": "Geral",
        "text": "TI - Ciência de Dados e Inteligência Artificial - Redes Neurais  Com relação a ciência de dados e inteligência artificial, julgue o próximo item.  Os modelos de aprendizagem das redes neurais incluem o aprendizado por memória e o aprendizado competitivo.  Certo  Errado",
        "answer": "CERTO",
        "explanation": "Explicação disponível no sistema Tec Concursos."
    },
    {
        "id": 111,
        "category": "Geral",
        "text": "TI - Ciência de Dados e Inteligência Artificial - Redes Neurais  Com relação a ciência de dados e inteligência artificial, julgue o próximo item.  Em uma rede regida pelo aprendizado Hebbiano, apenas um neurônio de saída é disparado, enquanto em uma rede regida pelo aprendizado competitivo, os neurônios podem ser excitados simultaneamente.  Certo  Errado",
        "answer": "ERRADO",
        "explanation": "Explicação disponível no sistema Tec Concursos."
    },
    {
        "id": 112,
        "category": "TI - Ciência de Dados e Inteligência Artificial - Deep Learning",
        "text": "No que se refere à ciência de dados, julgue o item a seguir. 513) 514) 515) 516) 517) 518) No treinamento de modelos generativos em deep learning , o modelo remove, gradualmente, ruído dos dados reais; em seguida, o modelo aprende a reverter esse processo, adicionando ruído aos ponchos para gerar dados semelhantes aos originais.",
        "answer": "ERRADO",
        "explanation": "Explicação disponível no sistema Tec Concursos."
    },
    {
        "id": 113,
        "category": "TI - Ciência de Dados e Inteligência Artificial - Deep Learning",
        "text": "Julgue o item subsequente, com relação a aprendizado de máquina, que é uma forma de inteligência artificial com vasta aplicação na área de diagnóstico por imagem. Quando se dispõe de um conjunto limitado de observações (por exemplo, imagens de poucos pacientes) para treinar o modelo, é adequado o uso de algoritmos de aprendizado profundo (deep learning).",
        "answer": "ERRADO",
        "explanation": "Explicação disponível no sistema Tec Concursos."
    },
    {
        "id": 114,
        "category": "TI - Ciência de Dados e Inteligência Artificial - IA Generativa",
        "text": "Em relação à inteligência artificial (IA), julgue o item a seguir. A IA generativa utiliza modelos de base treinados para realizar tarefas gerais, como, por exemplo, técnicas de distribuição de probabilidade.",
        "answer": "CERTO",
        "explanation": "Explicação disponível no sistema Tec Concursos."
    },
    {
        "id": 115,
        "category": "TI - Ciência de Dados e Inteligência Artificial - Processamento de Linguagem Natural (IA)",
        "text": "No que se refere à ciência de dados, julgue o item a seguir. No processamento de linguagem natural, para transformar texto bruto em um formato mais estruturado e padronizado, utilizam-se técnicas como a remoção de pontuação, a normalização dos dados, a tokenização e a eliminação de stop words .",
        "answer": "CERTO",
        "explanation": "Explicação disponível no sistema Tec Concursos."
    },
    {
        "id": 116,
        "category": "TI - Ciência de Dados e Inteligência Artificial - Processamento de Linguagem Natural (IA)",
        "text": "A respeito de visão computacional com redes neurais convolucionais (CNN), de classificação de imagens e de processamento de linguagem natural (PLN), julgue o item a seguir. PLN é um campo da inteligência artificial voltado a capacitar máquinas na compreensão, interpretação e geração da linguagem humana. Aplicações como chatbots , tradutores automáticos e análise de sentimentos são exemplos de aplicações dessa tecnologia. Contudo, modelos recentes, como o Gemini e o GPT, embora compartilhem algumas similaridades com o PLN, têm sua base fundamental na aplicação de aprendizado profundo, uma abordagem que dispensa a necessidade de regras linguísticas explícitas e se concentra na identificação de padrões complexos em grandes conjuntos de dados.",
        "answer": "ERRADO",
        "explanation": "Explicação disponível no sistema Tec Concursos."
    },
    {
        "id": 117,
        "category": "TI - Ciência de Dados e Inteligência Artificial - Processamento de Linguagem Natural (IA)",
        "text": "Com base em obtenção, limpeza e pré-processamento de dados, julgue o próximo item. A toquenização (do inglês tokenization) de palavras é uma atividade inerente aos algoritmos de análise granular de palavras em documentos.",
        "answer": "CERTO",
        "explanation": "Explicação disponível no sistema Tec Concursos."
    },
    {
        "id": 118,
        "category": "TI - Ciência de Dados e Inteligência Artificial - Processamento de Linguagem Natural (IA)",
        "text": "No que se refere à inteligência artificial e aprendizado de máquina, julgue o próximo item. 519) 520) 521) 522) 523) Stemming é uma técnica que reduz palavras flexionadas ao seu radical, permitindo que as variações de uma palavra sejam tratadas como um mesmo termo, o que melhora o desempenho de modelos de aprendizado de máquina.",
        "answer": "CERTO",
        "explanation": "Explicação disponível no sistema Tec Concursos."
    },
    {
        "id": 119,
        "category": "Geral",
        "text": "TI - Ciência de Dados e Inteligência Artificial - Outros Assuntos sobre Inteligência Artificial  Com relação a ciência de dados e inteligência artificial, julgue o próximo item.  Os processos heurísticos buscam, primeiramente, estabelecer soluções teóricas para, depois, avançar para uma única tentativa de solução.  Certo  Errado",
        "answer": "ERRADO",
        "explanation": "Explicação disponível no sistema Tec Concursos."
    },
    {
        "id": 120,
        "category": "TI - Ciência de Dados e Inteligência Artificial - Outros Assuntos sobre Inteligência Artificial",
        "text": "A respeito da administração da plataforma SAS Viya, julgue o seguinte item. SAS Manage Workflows é uma aplicação web para gerenciar um ambiente SAS Viya que fornece uma visão geral rápida da integridade e do status do seu ambiente.",
        "answer": "ERRADO",
        "explanation": "Explicação disponível no sistema Tec Concursos."
    },
    {
        "id": 121,
        "category": "TI - Desenvolvimento de Sistemas - Conceitos e Propriedades do Java",
        "text": "Em relação à linguagem de programação Java, julgue o item a seguir. Durante a execução do código a seguir, ocorrerá uma exceção ArithmeticException . public class Main { public static void main(String[] args) { int numero = 10; int divisor = 0; try { int resultado = numero / divisor; System.out.println(“Resultado: “ + resultado); } catch (ArithmeticException e) { e.printStackTrace(); } } }",
        "answer": "CERTO",
        "explanation": "Explicação disponível no sistema Tec Concursos."
    },
    {
        "id": 122,
        "category": "TI - Desenvolvimento de Sistemas - Conceitos e Propriedades do Java",
        "text": "Julgue o item seguinte, com base nos conceitos de linguagem de programação Ruby e Java. Ao se utilizar a estrutura try-catch-finally para tratar certos tipos de erros em um programa Java, as instruções do bloco finally são úteis para realizar operações, independentemente do resultado do bloco try.",
        "answer": "CERTO",
        "explanation": "Explicação disponível no sistema Tec Concursos."
    },
    {
        "id": 123,
        "category": "Geral",
        "text": "TI - Desenvolvimento de Sistemas - Conceitos e Propriedades do Java  Acerca das tecnologias que atendem a PDPJ-Br, julgue o próximo item.  As interfaces do Java permitem que objetos de classes não relacionadas sejam processados de forma polimórfica.  Certo  Errado    524)  525)  526)",
        "answer": "CERTO",
        "explanation": "Explicação disponível no sistema Tec Concursos."
    },
    {
        "id": 124,
        "category": "TI - Desenvolvimento de Sistemas - Códigos em Java",
        "text": "Considerando linguagens de programação, julgue o item que se segue. O código Java a seguir, após executado, apresentará 140 como resultado. public class Main{ public static void main(String[] args) { int soma=0; for (int i = 5; i >= 1; i--) { for (int j = 1; j <= i; j++) { soma += j*i; } } System.out.println(soma); } }",
        "answer": "CERTO",
        "explanation": "Explicação disponível no sistema Tec Concursos."
    },
    {
        "id": 125,
        "category": "TI - Desenvolvimento de Sistemas - Códigos em Java",
        "text": "Em relação à linguagem de programação Java, à arquitetura distribuída de microsserviços e à biblioteca Flyway, julgue o próximo item. Considere o seguinte código, escrito em Java. class Main { public static void main(String[] args) { int x = 11, y = -7, z = 22; int resultado = (x >= y) ? ((x >= z) ? x : z) : ((y >= z) ? y : z); System.out.println(“Resultado: “ + resultado); } } A partir do código precedente, é correto afirmar que a execução desse código apresentará o seguinte resultado. Resultado: 22",
        "answer": "CERTO",
        "explanation": "Explicação disponível no sistema Tec Concursos."
    },
    {
        "id": 126,
        "category": "TI - Desenvolvimento de Sistemas - Códigos em Java 527) 528) 529) 530)",
        "text": "Com base no código precedente, escrito em Java, julgue o próximo item. Se a entrada realizada pelo usuário nas variáveis numero1 ou numero2 não for um valor inteiro, então, de acordo com a sintaxe e a lógica do programa para tratar a exceção de erro, será mostrada a mensagem ERRO - Valor digitado não é um número inteiro!.",
        "answer": "ERRADO",
        "explanation": "Explicação disponível no sistema Tec Concursos."
    },
    {
        "id": 127,
        "category": "TI - Desenvolvimento de Sistemas - JSON (JavaScript Object Notation)",
        "text": "Acerca de API, julgue o item a seguir. Em conformidade com o formato JSON, os dados de um cliente podem ser representados da forma apresentada a seguir. { “cliente:” { “nome:” “João da Silva”, “cpf:” “123.456.789-10” } }",
        "answer": "ERRADO",
        "explanation": "Explicação disponível no sistema Tec Concursos."
    },
    {
        "id": 128,
        "category": "TI - Desenvolvimento de Sistemas - JSON (JavaScript Object Notation)",
        "text": "A respeito dos padrões e das tecnologias de comunicação e integração de sistemas, julgue o item a seguir. Em JSON, um objeto é um conjunto não ordenado de pares nome/valor, delimitado por chaves, com os nomes e valores separados por vírgulas e os pares separados por dois-pontos.",
        "answer": "ERRADO",
        "explanation": "Explicação disponível no sistema Tec Concursos."
    },
    {
        "id": 129,
        "category": "TI - Desenvolvimento de Sistemas - JSON (JavaScript Object Notation)",
        "text": "Julgue o item a seguir, relativo a Java, Swagger e JSON. [ \"Cidades\": ( {\"Cidade\"=\"Uberaba\", \"IBGE\"=\"3170107\"}, {\"Cidade\"=\"Uberlândia\", \"IBGE\"=\"3170206\"}, {\"Cidade\"=\"Araguari\", \"IBGE\"=\"3103504\"}) ] A sintaxe precedente descreve corretamente os dados da tabela a seguir na notação JSON, organizando-os como uma lista de objetos. cidade IBGE Uberaba 3170107 Uberlândia 3170206 Araguari 3103504",
        "answer": "ERRADO",
        "explanation": "Explicação disponível no sistema Tec Concursos."
    },
    {
        "id": 130,
        "category": "TI - Desenvolvimento de Sistemas - JSON (JavaScript Object Notation)",
        "text": "Julgue o item a seguir, relativo às tecnologias CSV e JSON, à Linguagem SQL e ao modelo CRISP-DM. A tecnologia JSON permite a aninhamento de objetos e arrays , possibilitando a construção de estruturas de dados complexas.",
        "answer": "CERTO",
        "explanation": "Explicação disponível no sistema Tec Concursos."
    },
    {
        "id": 131,
        "category": "TI - Desenvolvimento de Sistemas - XML <message name=“getTermRequest”> <part name=“term” type=“xs:string”/> </message> <message name=“getTermResponse”> <part name=“value” type=“xs:string”/> </message> <portType name=“glossaryTerms”> <operation name=“getTerm”> <input message=“getTermRequest”/> <output message=“getTermResponse”/> </operation> </portType> <binding type=“glossaryTerms” name=“b1”> <soap:binding style=“document” transport=“http://schemas.xmlsoap.org/soap/http” /> <operation> <soap:operation soapAction=“http://example.com/getTerm”/> <input><soap:body use=“literal”/></input> <output><soap:body use=“literal”/></output> </operation> </binding >",
        "text": "Com base no código XML precedente, julgue o próximo item. No código apresentado, o termo name é um elemento e o termo message é uma tag .",
        "answer": "CERTO",
        "explanation": "Explicação disponível no sistema Tec Concursos."
    },
    {
        "id": 132,
        "category": "TI - Desenvolvimento de Sistemas - XML <message name=“getTermRequest”> <part name=“term” type=“xs:string”/> </message> <message name=“getTermResponse”> <part name=“value” type=“xs:string”/> </message> <portType name=“glossaryTerms”> <operation name=“getTerm”> <input message=“getTermRequest”/> <output message=“getTermResponse”/> </operation> </portType> <binding type=“glossaryTerms” name=“b1”> <soap:binding style=“document” transport=“http://schemas.xmlsoap.org/soap/http” /> <operation> <soap:operation soapAction=“http://example.com/getTerm”/> <input><soap:body use=“literal”/></input> <output><soap:body use=“literal”/></output> </operation> </binding >",
        "text": "Com base no código XML precedente, julgue o próximo item. No referido código, o termo transport indica que o ESB será acessado por meio da URL a seguir. http://schemas.xmlsoap.org/soap/http",
        "answer": "ERRADO",
        "explanation": "Explicação disponível no sistema Tec Concursos."
    },
    {
        "id": 133,
        "category": "TI - Desenvolvimento de Sistemas - XML",
        "text": "Julgue o seguinte item, relativo a tecnologias web. Em XML, o trecho de código </element /> permite criar um elemento vazio.",
        "answer": "ERRADO",
        "explanation": "Explicação disponível no sistema Tec Concursos."
    },
    {
        "id": 134,
        "category": "Geral",
        "text": "TI - Desenvolvimento de Sistemas - Arquitetura em Camadas e Outras  Acerca da arquitetura de aplicações para ambiente web e de arquitetura em camadas, julgue o item a seguir.  Na arquitetura em camadas, a camada de aplicação deve ser projetada para suportar estratégias de desacoplamento e independência de estado.  Certo  Errado",
        "answer": "CERTO",
        "explanation": "Explicação disponível no sistema Tec Concursos."
    },
    {
        "id": 135,
        "category": "Geral",
        "text": "TI - Desenvolvimento de Sistemas - Arquitetura em Camadas e Outras  Acerca da arquitetura de aplicações para ambiente web e de arquitetura em camadas, julgue o item a seguir.  Na arquitetura de aplicações para ambiente web, a arquitetura cliente-servidor é um modelo de  design   que separa as responsabilidades de processamento entre clientes, que solicitam serviços ou recursos, e servidores, que fornecem e gerenciam esses serviços.  Certo  Errado",
        "answer": "CERTO",
        "explanation": "Explicação disponível no sistema Tec Concursos."
    },
    {
        "id": 136,
        "category": "TI - Desenvolvimento de Sistemas - Arquitetura em Camadas e Outras",
        "text": "Julgue o item subsecutivo, relativo à arquitetura orientada a serviços (SOA), à arquitetura distribuída, à especificação de web services e a dispositivos móveis. A camada de apresentação em aplicativos de dispositivos móveis gerencia fluxos de trabalho, troca de dados e operações, incluindo segurança, cache, log e tratamento de exceções.",
        "answer": "ERRADO",
        "explanation": "Explicação disponível no sistema Tec Concursos."
    },
    {
        "id": 137,
        "category": "Geral",
        "text": "TI - Desenvolvimento de Sistemas - Arquitetura em Camadas e Outras  Acerca da arquitetura de sistemas de N camadas e das APIs, julgue o próximo item.  Na arquitetura de sistemas em N camadas, o sistema é dividido em camadas lógicas, cada uma com uma responsabilidade específica, como apresentação, negócio e dados.  Certo  Errado",
        "answer": "CERTO",
        "explanation": "Explicação disponível no sistema Tec Concursos."
    },
    {
        "id": 138,
        "category": "TI - Desenvolvimento de Sistemas - MVC (Model-View-Controller)",
        "text": "A respeito do padrão arquitetural MVVM ( Model , View e View-Model ) e dos padrões de projetos GoF, julgue o item a seguir. A view-model é a ponte entre a view e o model , sendo responsável por expor dados e comandos para a interface do usuário, mantendo a lógica de apresentação independentemente da interface e da lógica de negócios.",
        "answer": "CERTO",
        "explanation": "Explicação disponível no sistema Tec Concursos."
    },
    {
        "id": 139,
        "category": "TI - Desenvolvimento de Sistemas - MVC (Model-View-Controller) 539) 540) 541) 542) 543) 544) 545)",
        "text": "Julgue o item a seguir, relativo a arquitetura MVC e princípios de projeto. Para manter o princípio da separação das preocupações em um projeto de software implementado como MVC, a camada interface deve oferecer abstrações da camada modelo.",
        "answer": "ERRADO",
        "explanation": "Explicação disponível no sistema Tec Concursos."
    },
    {
        "id": 140,
        "category": "TI - Desenvolvimento de Sistemas - MVC (Model-View-Controller)",
        "text": "Julgue o item a seguir, relativo a arquitetura MVC e princípios de projeto. No padrão arquitetural MVC, o componente model encapsula integralmente os dados, a lógica de negócios e as operações de processamento da aplicação, o que inclui a gestão de todos os objetos de conteúdo e a interação com fontes de dados externas.",
        "answer": "CERTO",
        "explanation": "Explicação disponível no sistema Tec Concursos."
    },
    {
        "id": 141,
        "category": "TI - Desenvolvimento de Sistemas - MVC (Model-View-Controller)",
        "text": "Julgue o próximo item, no que se refere à arquitetura de sistemas. Na arquitetura MVC (model-view-controler) , o componente controlador incorpora todos os estados de um webapp.",
        "answer": "ERRADO",
        "explanation": "Explicação disponível no sistema Tec Concursos."
    },
    {
        "id": 142,
        "category": "TI - Desenvolvimento de Sistemas - MVC (Model-View-Controller)",
        "text": "A respeito do padrão MVC ( model-view-controller ), julgue o item a seguir. O padrão MVC usa o princípio da inversão de controle (IoC) para delegar a responsabilidade de criar e gerenciar os objetos de model, view e controller para um objeto interno.",
        "answer": "ERRADO",
        "explanation": "Explicação disponível no sistema Tec Concursos."
    },
    {
        "id": 143,
        "category": "Geral",
        "text": "TI - Desenvolvimento de Sistemas - MVC (Model-View-Controller)  Acerca da UML, de padrões de projeto e de arquitetura, julgue o item seguinte.  No padrão MVC (modelo-visão-controlador), o componente modelo gerencia o sistema de dados e as operações associadas a esses dados; o componente visão define e gerencia a forma como os dados são apresentados ao usuário; e o controlador gerencia as interações do usuário e as repassa para os componentes visão e modelo.  Certo  Errado",
        "answer": "CERTO",
        "explanation": "Explicação disponível no sistema Tec Concursos."
    },
    {
        "id": 144,
        "category": "TI - Desenvolvimento de Sistemas - SOA - Arquitetura Orientada a Serviço",
        "text": "Em relação a arquiteturas e tecnologias de sistemas de informação, julgue o item subsecutivo. Na arquitetura orientada a serviço, estabelecem-se interfaces bem definidas entre os componentes do sistema, criando-se um acoplamento forte na camada de contrato de serviço enquanto se mantém um acoplamento fraco na implementação interna dos serviços.",
        "answer": "CERTO",
        "explanation": "Explicação disponível no sistema Tec Concursos."
    },
    {
        "id": 145,
        "category": "TI - Desenvolvimento de Sistemas - SOA - Arquitetura Orientada a Serviço",
        "text": "Em relação a arquiteturas e tecnologias de sistemas de informação, julgue o item subsecutivo. 546) 547) 548) 549) 550) 551) Na arquitetura orientada a serviço, promove-se geralmente a criação de serviços altamente especializados, com granularidade fina e com a maximização da reutilização para a maior eficiência do sistema.",
        "answer": "ERRADO",
        "explanation": "Explicação disponível no sistema Tec Concursos."
    },
    {
        "id": 146,
        "category": "TI - Desenvolvimento de Sistemas - SOA - Arquitetura Orientada a Serviço",
        "text": "A respeito de arquitetura de software, julgue o item que se segue. Em SOA, o princípio de granularidade define que os serviços devem ter baixo acoplamento e devem ser stateless.",
        "answer": "ERRADO",
        "explanation": "Explicação disponível no sistema Tec Concursos."
    },
    {
        "id": 147,
        "category": "TI - Desenvolvimento de Sistemas - SOA - Arquitetura Orientada a Serviço",
        "text": "Julgue o item a seguir, em relação ao desenvolvimento de software. SOA ( service oriented architecture ) é uma arquitetura empregada para reutilizar serviços em sistemas diferentes ou combinar vários serviços independentes para realizar tarefas complexas.",
        "answer": "CERTO",
        "explanation": "Explicação disponível no sistema Tec Concursos."
    },
    {
        "id": 148,
        "category": "TI - Desenvolvimento de Sistemas - SOA - Arquitetura Orientada a Serviço",
        "text": "Julgue o próximo item, relativos a arquitetura de software. Na arquitetura orientada a serviços (SOA), os serviços devem possuir acoplamento forte, de modo a se obter maior segurança na comunicação entre os serviços, promovendo uma maior dependência entre os recursos externos.",
        "answer": "ERRADO",
        "explanation": "Explicação disponível no sistema Tec Concursos."
    },
    {
        "id": 149,
        "category": "TI - Desenvolvimento de Sistemas - SOA - Arquitetura Orientada a Serviço",
        "text": "Julgue o próximo item, relativos a arquitetura de software. O barramento de serviço corporativo (ESB) é um padrão de arquitetura em que há integrações entre aplicativos de forma centralizada, oferecendo suporte ao intercâmbio de dados inclusive entre aplicações distintas.",
        "answer": "CERTO",
        "explanation": "Explicação disponível no sistema Tec Concursos."
    },
    {
        "id": 150,
        "category": "Geral",
        "text": "TI - Desenvolvimento de Sistemas - Arquitetura de Microsserviços  Acerca das tecnologias que atendem a PDPJ-Br, julgue o próximo item.  Uma das premissas da arquitetura de microsserviços é que cada microsserviço seja independente, autônomo e autossuficiente.  Certo  Errado",
        "answer": "CERTO",
        "explanation": "Explicação disponível no sistema Tec Concursos."
    },
    {
        "id": 151,
        "category": "TI - Desenvolvimento de Sistemas - Arquitetura de Microsserviços",
        "text": "Com base nos conceitos de microsserviços, julgue o item que se segue. Microsserviços é uma maneira de se desenvolver uma aplicação facilmente escalável, desacoplada e independente; e cada serviço pode ser escrito em uma linguagem de programação diferente. Certo 552) 553) 554) 555) 556) 557) Errado",
        "answer": "CERTO",
        "explanation": "Explicação disponível no sistema Tec Concursos."
    },
    {
        "id": 152,
        "category": "TI - Desenvolvimento de Sistemas - Arquitetura Hexagonal",
        "text": "No que se refere a UX ( user experience ), blockchain , design de software e gerenciador de transições distribuídas, julgue o item a seguir. Em design de software na arquitetura hexagonal, os adaptadores estão conectados diretamente ao núcleo do domínio, pois não há necessidade de portas ou interfaces intermediárias para comunicação.",
        "answer": "ERRADO",
        "explanation": "Explicação disponível no sistema Tec Concursos."
    },
    {
        "id": 153,
        "category": "TI - Desenvolvimento de Sistemas - Arquitetura Hexagonal",
        "text": "Julgue o item a seguir, a respeito da arquitetura hexagonal e da autenticação única ( single sign-on ). Na arquitetura hexagonal, a camada de aplicação em um adaptador atua como a interface de orquestração, responsável por interpretar as solicitações recebidas pelas portas de entrada.",
        "answer": "CERTO",
        "explanation": "Explicação disponível no sistema Tec Concursos."
    },
    {
        "id": 154,
        "category": "TI - Desenvolvimento de Sistemas - Arquitetura Hexagonal",
        "text": "Acerca de blockchain , conceitos de inteligência artificial, arquitetura hexagonal e gestão de conteúdo, julgue o item a seguir. Em uma arquitetura hexagonal, como as classes de domínio estão relacionadas ao negócio do sistema e seus dados, elas devem ser responsáveis pelo armazenamento de dados e as tecnologias usadas para esse fim.",
        "answer": "ERRADO",
        "explanation": "Explicação disponível no sistema Tec Concursos."
    },
    {
        "id": 155,
        "category": "Geral",
        "text": "TI - Desenvolvimento de Sistemas - Conceitos de Web Services  Com relação a integrações de sistemas de informação por meio de web services e APIs, julgue o item a seguir.  Web service   é um modelo de computação distribuída que depende dos sistemas operacionais, porém independe da linguagem de desenvolvimento e do  hardware   onde os sistemas integrados são processados.  Certo  Errado",
        "answer": "ERRADO",
        "explanation": "Explicação disponível no sistema Tec Concursos."
    },
    {
        "id": 156,
        "category": "TI - Desenvolvimento de Sistemas - Conceitos de Web Services",
        "text": "Julgue o item abaixo, relacionados com JavaScript, Web Services e análise estatística de código-fonte. Web Service possibilita que recursos sejam disponibilizados para aplicações clientes, mesmo que estejam em sistemas diferentes e usando linguagens distintas.",
        "answer": "CERTO",
        "explanation": "Explicação disponível no sistema Tec Concursos."
    },
    {
        "id": 157,
        "category": "TI - Desenvolvimento de Sistemas - SOAP",
        "text": "A respeito de arquitetura de software, julgue o item que se segue. Para facilitar a interoperabilidade entre sistemas, o envelope SOAP utiliza XML em toda a sua estrutura.",
        "answer": "CERTO",
        "explanation": "Explicação disponível no sistema Tec Concursos."
    },
    {
        "id": 158,
        "category": "TI - Desenvolvimento de Sistemas - UDDI",
        "text": "Julgue o item subsequente, relativo ao desenvolvimento de sistemas de computação. UDDI é uma linguagem usada para a formatação de documentos JSON para comunicação entre serviços web.",
        "answer": "ERRADO",
        "explanation": "Explicação disponível no sistema Tec Concursos."
    },
    {
        "id": 159,
        "category": "TI - Desenvolvimento de Sistemas - WSDL",
        "text": "Em relação a extranet e intranet, bem como à arquitetura orientada a serviços, julgue o item a seguir. WSDL é uma tecnologia que padroniza a descrição da interface de um web service, enquanto UDDI é um repositório mundial de web services utilizado para publicar e(ou) descobrir serviços que já foram criados e utilizar os já existentes.",
        "answer": "CERTO",
        "explanation": "Explicação disponível no sistema Tec Concursos."
    },
    {
        "id": 160,
        "category": "TI - Desenvolvimento de Sistemas - REST e RESTful",
        "text": "Julgue o item a seguir, relativo a tecnologias e padrões para o desenvolvimento web, intercâmbio de dados e comunicação entre sistemas. O princípio cacheable do padrão REST estabelece que as respostas às solicitações são gerenciadas pelo servidor, que decide acerca do armazenamento em cache dos dados, otimizando o desempenho do cliente.",
        "answer": "ERRADO",
        "explanation": "Explicação disponível no sistema Tec Concursos."
    },
    {
        "id": 161,
        "category": "TI - Desenvolvimento de Sistemas - REST e RESTful",
        "text": "A respeito dos padrões e das tecnologias de comunicação e integração de sistemas, julgue o item a seguir. Uma API RESTful permite a comunicação entre cliente e servidor via HTTP, com arquitetura stateless , com suporte a cache , interface padronizada e sistema em camadas, garantindo escalabilidade e eficiência.",
        "answer": "CERTO",
        "explanation": "Explicação disponível no sistema Tec Concursos."
    },
    {
        "id": 162,
        "category": "TI - Desenvolvimento de Sistemas - REST e RESTful",
        "text": "A respeito de arquitetura de software, julgue o item que se segue. Nos web services RESTful, os dados são retornados exclusivamente no formato XML.",
        "answer": "ERRADO",
        "explanation": "Explicação disponível no sistema Tec Concursos."
    },
    {
        "id": 163,
        "category": "Geral",
        "text": "TI - Desenvolvimento de Sistemas - REST e RESTful  Acerca da arquitetura de sistemas de N camadas e das APIs, julgue o próximo item.  O princípio HATEOAS é utilizado pela API REST para fornecer links entre os recursos e facilitar a navegação do cliente.  Certo  Errado",
        "answer": "CERTO",
        "explanation": "Explicação disponível no sistema Tec Concursos."
    },
    {
        "id": 164,
        "category": "TI - Desenvolvimento de Sistemas - REST e RESTful 564) 565) 566) 567) 568) 569) 570)",
        "text": "Julgue o próximo item, relativo a Hibernate Envers e Swagger. Um documento Swagger é o equivalente a API REST de um documento WSDL para um serviço web baseado em SOAP.",
        "answer": "CERTO",
        "explanation": "Explicação disponível no sistema Tec Concursos."
    },
    {
        "id": 165,
        "category": "Geral",
        "text": "TI - Desenvolvimento de Sistemas - REST e RESTful  Acerca das tecnologias que atendem a PDPJ-Br, julgue o próximo item.  As API RESTful devem ter uma comunicação  statefull   entre cliente e servidor, na qual as informações do cliente são armazenadas entre solicitações GET distintas.  Certo  Errado",
        "answer": "ERRADO",
        "explanation": "Explicação disponível no sistema Tec Concursos."
    },
    {
        "id": 166,
        "category": "TI - Desenvolvimento de Sistemas - REST e RESTful",
        "text": "Julgue o próximo item, relativos aos padrões XML, SOAP, REST e JSON. Ao se utilizar o REST em uma arquitetura com web services, a mensagem SOAP pode ser codificada com o uso de JSON, desde que seja utilizada, no XML resultante, uma referência DTD em que seja possível definir a estrutura, os elementos e os atributos do documento XML.",
        "answer": "ERRADO",
        "explanation": "Explicação disponível no sistema Tec Concursos."
    },
    {
        "id": 167,
        "category": "Geral",
        "text": "TI - Desenvolvimento de Sistemas - Mensageria (Messaging)  Quanto ao gerenciamento de configuração do  software   e aos serviços de mensageria, julgue o item a seguir.  Nos serviços de mensageria, a comunicação síncrona via HTTP é mais adequada para cenários de alta concorrência do que a comunicação assíncrona.  Certo  Errado",
        "answer": "ERRADO",
        "explanation": "Explicação disponível no sistema Tec Concursos."
    },
    {
        "id": 168,
        "category": "TI - Desenvolvimento de Sistemas - Mensageria (Messaging)",
        "text": "No que se refere a mensageria, julgue o próximo item. Sistemas de mensageria são capazes de separar o remetente de uma mensagem e seus consumidores.",
        "answer": "CERTO",
        "explanation": "Explicação disponível no sistema Tec Concursos."
    },
    {
        "id": 169,
        "category": "TI - Engenharia de Software - Conceitos e Princípios das Metodologias Ágeis",
        "text": "Em relação à engenharia de requisitos, julgue o item a seguir. A flexibilidade do desenvolvimento ágil permite a evolução dos requisitos ao longo do projeto, porém, requer um processo formal de gerenciamento de mudanças para garantir que o produto entregue valor.",
        "answer": "ERRADO",
        "explanation": "Explicação disponível no sistema Tec Concursos."
    },
    {
        "id": 170,
        "category": "TI - Engenharia de Software - Conceitos e Princípios das Metodologias Ágeis",
        "text": "Julgue o item seguinte, relativo a metodologias ágeis. O manifesto ágil é uma das referências para metodologias ágeis de software, em que se valoriza indivíduos e interações em detrimento de processos e ferramentas, assim como o software em funcionamento é mais importante que a documentação abrangente.",
        "answer": "CERTO",
        "explanation": "Explicação disponível no sistema Tec Concursos."
    },
    {
        "id": 171,
        "category": "TI - Engenharia de Software - Conceitos e Princípios das Metodologias Ágeis",
        "text": "Julgue o item seguinte, relativo a metodologias ágeis. Nas metodologias adaptativas, incluindo-se a ágil, adota-se um cronograma baseado em fluxo que não utiliza um ciclo de vida ou fases, pois o objetivo dessas metodologias é otimizar o fluxo de entregas com base na capacidade de recursos e materiais.",
        "answer": "CERTO",
        "explanation": "Explicação disponível no sistema Tec Concursos."
    },
    {
        "id": 172,
        "category": "TI - Engenharia de Software - Conceitos e Princípios das Metodologias Ágeis",
        "text": "Julgue o próximo item, relativo a práticas ágeis de desenvolvimento de software e a processo interativo e incremental. Um dos princípios ágeis direciona os clientes do negócio a trabalharem diariamente em conjunto com os desenvolvedores ao longo de todo o projeto.",
        "answer": "CERTO",
        "explanation": "Explicação disponível no sistema Tec Concursos."
    },
    {
        "id": 173,
        "category": "TI - Engenharia de Software - Conceitos e Princípios das Metodologias Ágeis",
        "text": "A respeito de Kanban e Scrum, julgue os itens a seguir. O Kanban e o Scrum utilizam sprints no planejamento e na distribuição de tarefas.",
        "answer": "ERRADO",
        "explanation": "Explicação disponível no sistema Tec Concursos."
    },
    {
        "id": 174,
        "category": "TI - Engenharia de Software - SCRUM",
        "text": "No que se refere a processos ágeis, julgue o item a seguir. O scrum master é responsável por remover impedimentos, facilitar eventos do Scrum e garantir que a equipe siga os valores e princípios do Scrum.",
        "answer": "CERTO",
        "explanation": "Explicação disponível no sistema Tec Concursos."
    },
    {
        "id": 175,
        "category": "TI - Engenharia de Software - SCRUM",
        "text": "A respeito de Scrum, julgue o item a seguir. Os princípios do Scrum são utilizados para orientar as atividades de desenvolvimento dentro de um processo que incorpora as atividades metodológicas para requisitos, análise, projeto, evolução e entrega do software ; em cada uma dessas atividades são realizadas tarefas em sprints específicos, correspondentes a cada uma delas.",
        "answer": "CERTO",
        "explanation": "Explicação disponível no sistema Tec Concursos."
    },
    {
        "id": 176,
        "category": "TI - Engenharia de Software - SCRUM",
        "text": "Julgue o item subsequente, relativo a Kanban e Scrum. Na sprint planning , o product owner planeja o trabalho necessário para criar um incremento do produto que atenda à definição de pronto.",
        "answer": "ERRADO",
        "explanation": "Explicação disponível no sistema Tec Concursos."
    },
    {
        "id": 177,
        "category": "577) 578) 579) 580) 581) 582) TI - Engenharia de Software - SCRUM",
        "text": "Julgue o item subsequente, relativo a Kanban e Scrum. Os artefatos do Scrum representam valor; ou seja, cada um deles contém um compromisso, como, por exemplo, a meta do produto é compromisso para o incremento.",
        "answer": "ERRADO",
        "explanation": "Explicação disponível no sistema Tec Concursos."
    },
    {
        "id": 178,
        "category": "TI - Engenharia de Software - SCRUM",
        "text": "A respeito de metodologias e técnicas prescritas pela engenharia de software para o desenvolvimento e para a gestão de produtos, julgue o item que se segue. Na metodologia Scrum, caso diversos incrementos sejam criados em uma sprint, um deles pode ser entregue aos stakeholders antes da conclusão da sprint.",
        "answer": "CERTO",
        "explanation": "Explicação disponível no sistema Tec Concursos."
    },
    {
        "id": 179,
        "category": "TI - Engenharia de Software - SCRUM",
        "text": "Julgue o próximo item, relativo a padrão de projetos e Scrum. De acordo com o Scrum, durante uma sprint planning, para cada item do product backlog selecionado, cabe ao product owner planejar o trabalho necessário para criar um incremento de valor que atenda à forma como isso será feito.",
        "answer": "ERRADO",
        "explanation": "Explicação disponível no sistema Tec Concursos."
    },
    {
        "id": 180,
        "category": "TI - Engenharia de Software - SCRUM",
        "text": "Julgue o seguinte item, acerca de Scrum. Ainda que a meta da sprint se torne obsoleta, ela não pode ser cancelada; nesse caso, a sprint planning pode ser renegociada com o product owner para a adaptação do progresso em direção à meta do produto.",
        "answer": "ERRADO",
        "explanation": "Explicação disponível no sistema Tec Concursos."
    },
    {
        "id": 181,
        "category": "TI - Engenharia de Software - SCRUM",
        "text": "Julgue o seguinte item, acerca de Scrum. O propósito da sprint review é planejar modos de aumentar a eficácia do Scrum team por meio da inspeção de como foi executada a sprint mais recente em relação às interações e aos processos, avaliando-se o que funcionou corretamente e os problemas encontrados durante a sprint.",
        "answer": "ERRADO",
        "explanation": "Explicação disponível no sistema Tec Concursos."
    },
    {
        "id": 182,
        "category": "TI - Engenharia de Software - SCRUM",
        "text": "Julgue o próximo item, a respeito do Scrum. O Scrum master promove um ambiente em que um product owner ordena o trabalho de um problema complexo em um product backlog.",
        "answer": "CERTO",
        "explanation": "Explicação disponível no sistema Tec Concursos."
    },
    {
        "id": 183,
        "category": "583) 584) 585) 586) 587) 588) 589) TI - Engenharia de Software - SCRUM",
        "text": "Julgue o próximo item, a respeito do Scrum. O time Scrum transforma uma seleção do trabalho em um incremento de valor durante uma daily.",
        "answer": "ERRADO",
        "explanation": "Explicação disponível no sistema Tec Concursos."
    },
    {
        "id": 184,
        "category": "TI - Engenharia de Software - SCRUM",
        "text": "A respeito das características de um time Scrum, julgue o item subsequente. Não existem subequipes ou hierarquias dentro de um time Scrum.",
        "answer": "CERTO",
        "explanation": "Explicação disponível no sistema Tec Concursos."
    },
    {
        "id": 185,
        "category": "Geral",
        "text": "TI - Engenharia de Software - SCRUM  Acerca dos eventos Scrum, julgue o item subsecutivo.  A meta do produto é o objetivo de longo prazo do time Scrum, que deve cumprir ou abandonar um objetivo antes de assumir o próximo.  Certo  Errado",
        "answer": "CERTO",
        "explanation": "Explicação disponível no sistema Tec Concursos."
    },
    {
        "id": 186,
        "category": "TI - Engenharia de Software - SCRUM",
        "text": "A respeito de engenharia de software e dos processos de desenvolvimento de software, julgue o próximo item. Em Scrum, o sprint goal é estabelecido na sprint planning e incorporado ao sprint backlog; caso surjam diferenças nas expectativas, os desenvolvedores colaboram com o product owner para ajustar o sprint backlog sem comprometer o sprint goal.",
        "answer": "CERTO",
        "explanation": "Explicação disponível no sistema Tec Concursos."
    },
    {
        "id": 187,
        "category": "TI - Engenharia de Software - SCRUM",
        "text": "A respeito do gerenciamento de projetos com a utilização da metodologia ágil Scrum, julgue o item a seguir. Por meio do gráfico de burndown, é possível determinar o tempo necessário para concluir um projeto.",
        "answer": "CERTO",
        "explanation": "Explicação disponível no sistema Tec Concursos."
    },
    {
        "id": 188,
        "category": "TI - Engenharia de Software - SCRUM",
        "text": "Julgue o próximo item conforme o Scrum (nov./2020). O sprint backlog é composto tanto meta da sprint quanto pelo plano de ação para entregar o incremento.",
        "answer": "CERTO",
        "explanation": "Explicação disponível no sistema Tec Concursos."
    },
    {
        "id": 189,
        "category": "TI - Engenharia de Software - SCRUM",
        "text": "Julgue o próximo item conforme o Scrum (nov./2020). 590) 591) 592) 593) 594) 595) Na sprint planning, fica a critério exclusivo dos developers o planejamento necessário para se criar um incremento que atenda à definição de pronto, o que pode ser realizado decompondo-se os itens do product backlog.",
        "answer": "CERTO",
        "explanation": "Explicação disponível no sistema Tec Concursos."
    },
    {
        "id": 190,
        "category": "TI - Engenharia de Software - SCRUM",
        "text": "Julgue o próximo item conforme o Scrum (nov./2020). Durante a sprint review, o scrum team e os stakeholders revisam o que foi realizado na sprint, sendo possível ajustar o product backlog a fim de atender a novas oportunidades.",
        "answer": "CERTO",
        "explanation": "Explicação disponível no sistema Tec Concursos."
    },
    {
        "id": 191,
        "category": "TI - Engenharia de Software - SCRUM",
        "text": "Em relação a metodologias de desenvolvimento de sistemas, julgue o item subsequente. No Scrum, a sprint review visa inspecionar o resultado da sprint e determinar as adaptações futuras, caso necessário, e é executada após a sprint ser finalizada.",
        "answer": "ERRADO",
        "explanation": "Explicação disponível no sistema Tec Concursos."
    },
    {
        "id": 192,
        "category": "TI - Engenharia de Software - SCRUM",
        "text": "Em relação a metodologias de desenvolvimento de sistemas, julgue o item subsequente. No Scrum, o product backlog é uma lista ordenada e emergente do que é necessário para melhorar o produto.",
        "answer": "CERTO",
        "explanation": "Explicação disponível no sistema Tec Concursos."
    },
    {
        "id": 193,
        "category": "TI - Engenharia de Software - SCRUM",
        "text": "Em relação a metodologias de desenvolvimento de sistemas, julgue o item subsequente. No Scrum, a sprint retrospective é a etapa na qual o cliente (usuário) identifica as mudanças mais úteis para melhorar a eficácia do produto; essas mudanças podem ser adicionadasao sprint backlog da próxima sprint pelo product owner.",
        "answer": "ERRADO",
        "explanation": "Explicação disponível no sistema Tec Concursos."
    },
    {
        "id": 194,
        "category": "TI - Engenharia de Software - XP (Extreme Programming)",
        "text": "Julgue o item a seguir, no que se refere à engenharia de software e à análise de requisitos. As principais características do teste em programação extrema (XP) são o desenvolvimento orientado a testes a partir de cenários com participação do usuário e o uso de frameworks automatizados para garantir qualidade contínua.",
        "answer": "CERTO",
        "explanation": "Explicação disponível no sistema Tec Concursos."
    },
    {
        "id": 195,
        "category": "TI - Engenharia de Software - XP (Extreme Programming)",
        "text": "Julgue o próximo item, relativo a práticas ágeis de desenvolvimento de software e a processo interativo e incremental. A XP (Extreme Programming) estimula o uso de cartões classe-responsabilidade-colaborador (CRC) para identificar e organizar como deve ser realizada a refatoração com vistas a melhorar o software.",
        "answer": "ERRADO",
        "explanation": "Explicação disponível no sistema Tec Concursos."
    },
    {
        "id": 196,
        "category": "TI - Engenharia de Software - TDD e BDD (Test-Driven Development e Behavior Driven Development)",
        "text": "Em relação ao desenvolvimento guiado por teste (TDD), julgue o item que se segue. O TDD é uma tendência que enfatiza o projeto de casos de teste antes da criação do código fonte e se caracteriza como parte do modelo ágil de desenvolvimento de software.",
        "answer": "CERTO",
        "explanation": "Explicação disponível no sistema Tec Concursos."
    },
    {
        "id": 197,
        "category": "TI - Engenharia de Software - TDD e BDD (Test-Driven Development e Behavior Driven Development)",
        "text": "Julgue o item seguinte, a respeito do desenvolvimento orientado ao comportamento (BDD). Ao se utilizar a metodologia BDD, espera-se que as entregas sejam feitas com menor quantidade de retrabalho e com cobertura de testes automatizados, a documentação passe a ser integrada ao sistema, e os projetos passem a ter estimativas dentro do prazo, com custos controlados.",
        "answer": "CERTO",
        "explanation": "Explicação disponível no sistema Tec Concursos."
    },
    {
        "id": 198,
        "category": "TI - Engenharia de Software - TDD e BDD (Test-Driven Development e Behavior Driven Development)",
        "text": "Julgue o item seguinte, a respeito do desenvolvimento orientado ao comportamento (BDD). Durante o período do BDD, os planos serão validados pelos desenvolvedores conforme previsto pelo TDD por meio de ferramentas de teste como JUnit e Mockito.",
        "answer": "CERTO",
        "explanation": "Explicação disponível no sistema Tec Concursos."
    },
    {
        "id": 199,
        "category": "TI - Engenharia de Software - TDD e BDD (Test-Driven Development e Behavior Driven Development)",
        "text": "Julgue o item seguinte, a respeito do desenvolvimento orientado ao comportamento (BDD). A linguagem ubíqua Cucumber é utilizada para a definição de cenários iniciais no BDD e permite que a equipe de negócios faça levantamentos com as partes interessadas (stakeholders) e os transforme em histórias do usuário (user story).",
        "answer": "ERRADO",
        "explanation": "Explicação disponível no sistema Tec Concursos."
    },
    {
        "id": 200,
        "category": "TI - Engenharia de Software - DevOps, IaC, Integração Contínua e Entrega Contínua",
        "text": "No que se refere a práticas de DevOps, julgue o próximo item. As práticas de DevOps, ao focarem em automação,monitoramento contínuo e feedback rápido, melhoram o tempo médio de recuperação (MTTR) após uma falha.",
        "answer": "CERTO",
        "explanation": "Explicação disponível no sistema Tec Concursos."
    }
];