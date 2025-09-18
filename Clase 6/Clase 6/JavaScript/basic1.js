const tableBodyData = [
{numero:"1", avatar:"./dashboard_base/images/avatar/1.jpg", id:"#5469", name:"Louis Stanley", product:"iMax", quantity:231, status:"Complete"},
{numero:"2", avatar:"./dashboard_base/images/avatar/2.jpg", id:"#5468", name:"Gregory Dixon", product:"iPad", quantity:250, status:"Complete"},
{numero:"3", avatar:"./dashboard_base/images/avatar/3.jpg", id:"#5467", name:"Catherine Dixon", product:"SSD", quantity:250, status:"Complete"},
{numero:"4", avatar:"./dashboard_base/images/avatar/4.jpg", id:"#5466", name:"Mary Silva", product:"Magic Mouse", quantity:250, status:"Pending"},
{numero:"5", avatar:"./dashboard_base/images/avatar/6.jpg", id:"#5464", name:"Diana Petersen", product:"TV", quantity:250, status:"Pending"},

   
];

function loadTableData() {
    const tableBody = document.getElementById('tablebasic1');
    tableBody.innerHTML = '';

    tableBodyData.forEach(data => {
        const row = document.createElement("tr");
        row.innerHTML = `
            <td class="serial">${data.numero}</td>
            <td class="avatar">
                <div class="round-img">
                    <a href="#"><img class="rounded-circle" src="${data.avatar}" alt=""></a>
                </div>
            </td>
            <td> ${data.id} </td>
            <td>  <span class="name">${data.name}</span> </td>
            <td> <span class="product">${data.product}</span> </td>
            <td><span class="count">${data.quantity}</span></td>
            <td>
                <span class="badge badge-${data.status === 'Complete' ? 'complete' : 'pending'}">${data.status}</span>
            </td>
        `;
        tableBody.appendChild(row);
  
    })
}
  