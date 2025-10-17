
async function loadTableData() {

  const tableBody = document.getElementById('table6BodyDataBasic');
  tableBody.innerHTML=" " ;
  const tableBodyData = await obtenerDatos(); //es un funcion asincrona

  tableBodyData.forEach(data => {
    const url_formUsuario = 'form_usuarios.html?id=' + data.id;
    const row = document.createElement('tr');
    row.innerHTML =`
      <td>${data.id}</td>
      <td>${data.name}</td>
      <td>${data.email}</td>
      <td>${data.username}</td>
      <td>
          <a href="${url_formUsuario}" class="btn btn-primary">Edit</a>
          <a href="javascript:deleteUser(${data.id})" class="btn btn-danger">Delete</a>
      </td>
      `;
    tableBody.appendChild(row);
  });
}

async function obtenerDatos() {
  try {
    // 1. Define la URL del endpoint de la API
    const url = 'https://jsonplaceholder.typicode.com/users'; // Ejemplo de URL

    // 2. Realiza la petición GET usando fetch
    const respuesta = await fetch(url);

    // 3. Convierte la respuesta a formato JSON
    const datos = await respuesta.json();

    // 4. Utiliza los datos
    console.log(datos);// Muestra los datos en la consola
    return datos; 
    // Aquí podrías actualizar la interfaz de usuario, por ejemplo
  } catch (error) {
    console.error('Error al consumir la API:', error);
  }
}

async function deleteUser(id){
    try{
        const url = 'https://jsonplaceholder.typicode.com/users/'+id;

        const respuesta = await fetch(url, {
            method: "DELETE"
        });

        const datos = await respuesta.json();
        alert("registro borrado");
    } catch (error) {
        console.error('Error al consumir la API:', error);
        return null;
    }
}

