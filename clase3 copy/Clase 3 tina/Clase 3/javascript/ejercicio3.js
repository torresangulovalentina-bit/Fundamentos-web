const categorias = [
	{
		titulo: 'Ropa para Hombre',
		imgAlt: 'Ropa para Hombre',
		link: 'hombres.html',
		linkText: 'Ver más'
	},
	{
		titulo: 'Ropa para Mujeres',
		imgAlt: 'Ropa para Mujeres',
		link: 'mujeres.html',
		linkText: 'Ver más'
	},
	{
		titulo: 'Accesorios',
		imgAlt: 'Accesorios',
		link: 'accesorios.html',
		linkText: 'Ver más'
	}
];

function crearArticulo(categoria) {
	return `
		<article class="categoria">
			<h3>${categoria.titulo}</h3>
			<div class="img-categoria">
				<img src="./imgs/ropa1.jpg" alt="${categoria.imgAlt}" width="300px">
			</div>
			<a href="${categoria.link}">${categoria.linkText}</a>
		</article>`;
}