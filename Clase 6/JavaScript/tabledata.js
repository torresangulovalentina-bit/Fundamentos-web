const tableBodyData = [
    { name: "Lael Greer", position: "Systems Administrator", office: "London", salary: "$103,500" },
    { name: "Jonas Alexander", position: "Developer", office: "San Francisco", salary: "$86,500" },
    { name: "Shad Decker", position: "Regional Director", office: "Edinburgh", salary: "$183,000" },

];

function loadtableData() {
    const tableBody = document.getElementById("tableBodyData");
       tableBody.innerHTML
    tableBodyData.forEach(data => {
        const row = document.createElement("tr");
        row.innerHTML = `
            <td>${data.name}</td>
            <td>${data.position}</td>
            <td>${data.office}</td>
            <td>${data.salary}</td>
        `;
        tableBody.appendChild(row);
    })
}

function loadtabledata() {}
            const tableBody = document.getElementById("tableBodyData");
            tableBody.innerHTML = "";
            tableBodyData.forEach(data => {
                const row = document.createElement("tr");
                row.innerHTML = `
                    <td>${data.name}</td>
                    <td>${data.position}</td>
                    <td>${data.office}</td>
                    <td>${data.salary}</td>
                `;
                tableBody.appendChild(row);
            });