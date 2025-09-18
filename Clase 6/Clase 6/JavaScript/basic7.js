const tableBodyData = [
{numero:"1",First:"Mark",Last:"Otto",Handle:"@mdo"},
{numero:"2",First:"Jacob",Last:"Thornton",Handle:"@fat"},
{numero:"3",First:"Larry",Last:"the Bird",Handle:"@twitter"},
{numero:"4",First:"Joel",Last:"Doe",Handle:"@jdoe"},
{numero:"5",First:"Santiago",Last:"Smith",Handle:"@ssmith"},
{numero:"6",First:"Valentina",Last:"Johnson",Handle:"@tinaj"}
];

function loadTableData() {
    const tableBody = document.getElementById('tablebasic7');
    tableBody.innerHTML = '';

    tableBodyData.forEach(data => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <th scope="row">${data.numero}</th>
            <td>${data.First}</td>
            <td>${data.Last}</td>
            <td>${data.Handle}</td>
        `;
        tableBody.appendChild(row);
        
    })
}
  