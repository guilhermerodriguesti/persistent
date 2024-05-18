let dataRows = [];

function processData() {
    const inputData = document.getElementById('inputData').value;
    const resultDiv = document.getElementById('result');

    // Retirar espaços desnecessários
    let cleanedData = inputData.replace(/\s+/g, ' ').trim();

    // Quebrar em linhas e colunas
    const lines = cleanedData.split(' / ');
    dataRows = lines.map(line => line.split(', '));

    // Ordenar os dados pelo nome do candidato (índice 1)
    dataRows.sort((a, b) => a[1].localeCompare(b[1]));

    // Gerar a tabela de resultados
    renderTable(dataRows, resultDiv);
}

function renderTable(rows, container) {
    let tableHTML = '<table class="table table-striped">';
    tableHTML += `
        <thead class="thead-dark">
            <tr>
                <th onclick="sortTable(0)">Inscrição</th>
                <th onclick="sortTable(1)">Nome</th>
                <th onclick="sortTable(2)">Nota P1</th>
                <th onclick="sortTable(3)">Acertos P1</th>
                <th onclick="sortTable(4)">Nota P2</th>
                <th onclick="sortTable(5)">Acertos P2</th>
                <th onclick="sortTable(6)">Nota Final Objetiva</th>
                <th onclick="sortTable(7)">Nota Provisória Q1 P3</th>
                <th onclick="sortTable(8)">Nota Provisória Q2 P3</th>
                <th onclick="sortTable(9)">Nota Provisória Discursiva</th>
            </tr>
        </thead>
        <tbody>
    `;

    rows.forEach(row => {
        tableHTML += '<tr>';
        row.forEach(cell => {
            tableHTML += `<td>${cell}</td>`;
        });
        tableHTML += '</tr>';
    });

    tableHTML += '</tbody></table>';
    container.innerHTML = tableHTML;
}

function sortTable(columnIndex) {
    const numericColumns = [2, 3, 4, 5, 6, 7, 8, 9];
    const isNumeric = numericColumns.includes(columnIndex);

    dataRows.sort((a, b) => {
        if (isNumeric) {
            return parseFloat(a[columnIndex]) - parseFloat(b[columnIndex]);
        } else {
            return a[columnIndex].localeCompare(b[columnIndex]);
        }
    });

    renderTable(dataRows, document.getElementById('result'));
}
