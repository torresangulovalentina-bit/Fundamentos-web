const tableBodyData =[
    {id:1, avatar:"images/avatar/1.jpg", code:"#5469", name:"Louis Stanley", product:"iMax", count:231, status:"Complete"},
    {id:2, avatar:"images/avatar/2.jpg", code:"#5468", name:"Gregory Dixon", product:"iPad", count:250, status:"Complete"},
    {id:3, avatar:"images/avatar/3.jpg", code:"#5467", name:"Catherine Dixon", product:"SSD", count:250, status:"Complete"},
    {id:4, avatar:"images/avatar/4.jpg", code:"#5466", name:"Mary Silva", product:"Magic Mouse", count:250, status:"Pending"},
]

function loadTableData() {
  const tableBody = document.getElementById('tableBodyData');
  tableBody.innerHTML=" " ;
  tableBodyData.forEach(data => {
   const row = `<tr>
                    <td class="serial">${data.id}.</td>
                    <td class="avatar">
                        <div class="round-img">
                            <a href="#"><img class="rounded-circle" src="${data.avatar}" alt=""></a>
                        </div>
                    </td>
                    <td> ${data.code} </td>
                    <td>  <span class="name">${data.name}</span> </td>
                    <td> <span class="product">${data.product}</span> </td>
                    <td><span class="count">${data.count}</span></td>
                    <td>
                        <span class="badge badge-${data.status === 'Complete' ? 'complete' : 'pending'}">${data.status}</span>
                    </td>
                </tr>`;
   tableBody.innerHTML += row;
  });
}
