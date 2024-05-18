document.addEventListener('DOMContentLoaded', function() {
    const data = [
        { ano: "2012", banca: "CESPE / CEBRASPE", orgao: "Banco da Amazônia", enunciado: "Julgue os itens que se seguem, em relação a metodologias de análise, projeto e desenvolvimento de sistemas. Em um projeto gerido com a metodologia Scrum, um produto estará, ao final de cada sprint, completamente testado, estando 100% completos todos os requisitos do product backlog.", resposta: "Errado" },
        { ano: "2012", banca: "CESPE / CEBRASPE", orgao: "Banco da Amazônia", enunciado: "O escopo, a importância e a estimativa de um Sprint do Scrum são definidos pelo product owner.", resposta: "Certo" },
        { ano: "2012", banca: "CESPE / CEBRASPE", orgao: "Banco da Amazônia", enunciado: "A metodologia Scrum, ágil para gerência de projetos, baseia-se em ciclos de 30 dias, denominados sprints, em que se trabalha para alcançar objetivos bem definidos.", resposta: "Errado" },
        { ano: "2012", banca: "CESPE / CEBRASPE", orgao: "TRE-RJ", enunciado: "A metodologia scrum prega que a equipe complete e entregue partes do produto final constantemente ao final de cada interação. Essa interação deve ser curta e possuir tempo de execução definido previamente.", resposta: "Certo" }
    ];

    const table = document.getElementById('questionsTable');

    data.forEach(question => {
        const row = table.insertRow();
        row.insertCell().textContent = question.ano;
        row.insertCell().textContent = question.banca;
        row.insertCell().textContent = question.orgao;
        row.insertCell().textContent = question.enunciado;
        row.insertCell().textContent = question.resposta;
    });
});
