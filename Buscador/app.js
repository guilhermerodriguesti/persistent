function searchWikipedia() {
    var searchTerm = document.getElementById('searchTerm').value;
    var url = `https://pt.wikipedia.org/w/api.php?origin=*&action=query&list=search&srsearch=${encodeURIComponent(searchTerm)}&format=json`;

    fetch(url)
    .then(response => response.json())
    .then(data => {
        var results = data.query.search;
        var table = document.getElementById('resultsTable');

        // Limpa resultados anteriores
        while (table.rows.length > 1) {
            table.deleteRow(1);
        }

        // Insere novos resultados
        results.forEach(result => {
            var row = table.insertRow(-1);
            var titleCell = row.insertCell(0);
            var snippetCell = row.insertCell(1);
            var linkCell = row.insertCell(2);

            titleCell.innerHTML = result.title;
            snippetCell.innerHTML = result.snippet;
            linkCell.innerHTML = `<a href="https://pt.wikipedia.org/?curid=${result.pageid}" target="_blank">Link</a>`;
        });
    })
    .catch(error => console.error('Erro na busca:', error));
}