function generateTable(m, n) {
    const tableContainer = document.getElementById('tableContainer');
    const table = document.createElement('table');

    for (let i = 0; i < m; i++) {
        const row = document.createElement('tr');
        for (let j = 0; j < n; j++) {
            const cell = document.createElement('td');
            const randomValue = Math.floor(Math.random() * 100);
            cell.textContent = randomValue;
            row.appendChild(cell);
        }
        table.appendChild(row);
    }

    tableContainer.appendChild(table);
}


const m = 3;
const n = 5;
generateTable(m, n);
