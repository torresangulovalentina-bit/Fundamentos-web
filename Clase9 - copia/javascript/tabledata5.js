const borderedTableBodyData = [
  { name: "Mark", position: "Otto", office: "@mdo" },
  { name: "Jacob", position: "Thornton", office: "@fat" },
  { name: "Larry the Bird", position: "", office: "@twitter" }
];

function loadTableData() {
    const tableBody = document.getElementById('borderedTableBodyData');
    tableBody.innerHTML = '';

    borderedTableBodyData.forEach((data, index) => {
        const row = document.createElement('tr');
        if (data.name === "Larry the Bird") {
            row.innerHTML = `
                <th scope="row">${index + 1}</th>
                <td colspan="2">${data.name}</td>
                <td>${data.office}</td>
            `;
        } else {
            row.innerHTML = `
                <th scope="row">${index + 1}</th>
                <td>${data.name}</td>
                <td>${data.position}</td>
                <td>${data.office}</td>
            `;
        }
        tableBody.appendChild(row);
    });
}