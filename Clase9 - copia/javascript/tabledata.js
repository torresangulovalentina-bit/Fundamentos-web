async function loadTableData() {
    const tableBody = document.getElementById('tableBodyData');
    tableBody.innerHTML = '';
    const tableBodyData = await obtenerDatos();

    tableBodyData.forEach(data => {
        const url_formProducto = 'form_usuarios.html?id=' + data.id;
        const row = document.createElement("tr");
        row.innerHTML = `
            <td>${data.id}</td>
            <td><img src="${data.image}" alt="${data.title}" class="product-img"></td>
            <td>${data.title}</td>
            <td>$${data.price.toFixed(2)}</td>
            <td>${data.category}</td>
            <td>
                <a href="${url_formProducto}" class="btn btn-primary">Edit</a>
                <a href="javascript:deleteProduct(${data.id})" class="btn btn-danger">Delete</a>
            </td>
        `;
        tableBody.appendChild(row);
    });
}

async function obtenerDatos() {
    try {
        // 1. Define la URL del endpoint de la API
        const url = 'https://fakestoreapi.com/products';

        // 2. Realiza la petición GET usando fetch
        const respuesta = await fetch(url);

        // 3. Convierte la respuesta a formato JSON
        const datos = await respuesta.json();

        // 4. Utiliza los datos
        console.log(datos);
        return datos;
    } catch (error) {
        console.error('Error al consumir la API:', error);
    }
}

async function deleteProduct(id) {
    try {
        const url = 'https://fakestoreapi.com/products/' + id;

        const respuesta = await fetch(url, {
            method: "DELETE"
        });

        const datos = await respuesta.json();
        alert("Producto eliminado correctamente");
        loadTableData();
    } catch (error) {
        console.error('Error al eliminar el producto:', error);
        return null;
    }
}
