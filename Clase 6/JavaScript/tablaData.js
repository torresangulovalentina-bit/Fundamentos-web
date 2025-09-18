const tableBodyData =[{name:"Ashton Cox",position:"Junior Technical Author",office:"San Francisco",salary:"$86,000"},
    {name:"Cedric Kelly",position:"Senior Javascript Developer",office:"Edinburgh",salary:"$433,060"},
    {name:"Airi Satou",position:"Accountant",office:"Tokyo",salary:"$162,700"}
]

function loadTableData() {
  const tableBody = document.getElementById('tableBodyData');
  tableBody.innerHTML=" " ;
  tableBodyData.forEach(data => {
    const row = document.createElement('tr');
    row.innerHTML = `
      <td>${data.name}</td>
      <td>${data.position}</td>
      <td>${data.office}</td>
      <td>${data.salary}</td>
    `;
    tableBody.appendChild(row);
  });
}
