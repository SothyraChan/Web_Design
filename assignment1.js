function drawTable() {
    let table = document.getElementById("multiTable");
    let row = document.getElementById("row").value;
    let column = document.getElementById("col").value;

    table.innerHTML = "";

    for (let i = 1; i <= row; i++) 
    {
        let row = document.createElement("tr");

        for (let k = 1; k <= column; k++) 
        {
            let tableCell = document.createElement("td");
            tableCell.textContent = i * k;
            row.appendChild(tableCell);
        }

        table.appendChild(row);
    }
}