let dataRows = [];

function processData() {
    const inputData = document.getElementById('inputData').value;
    const resultDiv = document.getElementById('result');

    // Retirar espaços desnecessários
    let cleanedData = inputData.replace(/\s+/g, ' ').trim();

    // Quebrar em linhas e colunas
    const lines = cleanedData.split(' / ');
    dataRows = lines.map(line => line.split(', '));

    // Gerar a tabela de resultados
    renderTable(dataRows, resultDiv);
}

function renderTable(rows, container) {
    let tableHTML = '<table id="resultsTable" class="table table-striped table-bordered">';
    tableHTML += `
        <thead class="thead-dark">
            <tr>
                <th>ID</th>
                <th>Inscrição</th>
                <th>Nome</th>
                <th>Nota P1</th>
                <th>Acertos P1</th>
                <th>Nota P2</th>
                <th>Acertos P2</th>
                <th>Nota Final Objetiva</th>
                <th>Nota Discursiva Q1 P3</th>
                <th>Nota Discursiva Q2 P3</th>
                <th>Nota Final Discursiva</th>
            </tr>
        </thead>
        <tbody>
    `;

    rows.forEach(row => {
        tableHTML += '<tr>';
        tableHTML += `<td></td>`; // Placeholder for the dynamic ID
        row.forEach(cell => {
            tableHTML += `<td>${cell}</td>`;
        });
        tableHTML += '</tr>';
    });

    tableHTML += '</tbody></table>';
    container.innerHTML = tableHTML;

    // Inicializar DataTables com drawCallback para atualizar o ID
    $(document).ready(function() {
        $('#resultsTable').DataTable({
            "paging": true,
            "searching": true,
            "ordering": true,
            "info": true,
            "language": {
                "url": "//cdn.datatables.net/plug-ins/1.10.21/i18n/Portuguese-Brasil.json"
            },
            "columnDefs": [
                {
                    "targets": 0, // ID column
                    "orderable": false,
                    "searchable": false
                }
            ],
            "drawCallback": function(settings) {
                var api = this.api();
                api.rows({ page: 'current' }).every(function (rowIdx) {
                    var data = this.data();
                    // Update the ID cell with the current row index + 1 (for display purposes)
                    $(api.cell(rowIdx, 0).node()).html(rowIdx + 1);
                });
            }
        });
    });
}
