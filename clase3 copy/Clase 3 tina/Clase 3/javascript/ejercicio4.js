const categorias = [
	{
		titulo: 'Ropa para Hombre',
		link: 'hombres.html',
		linkText: 'Ver más',
        img: {id:"img1", src:"../imgs/Hombre.jpg", alt:"Ropa de Hombre", width:"340"}
	},
	{
		titulo: 'Ropa para Mujeres',
		link: 'mujeres.html',
		linkText: 'Ver más',
        img:{id:"img2", src:"../imgs/mujer.jpg", alt:"Ropa de mujer", width:"360"}
	},
	{
		titulo: 'Accesorios',
		link: 'accesorios.html',
		linkText: 'Ver más',
        img:{id:"img3", src:"../imgs/accesorios.jpg", alt:"accesorios", width:"340", width:"270"}
	}
];

function crearArticulo(categoria) {
	return `
		<article class="categoria">
			<h3>${categoria.titulo}</h3>
			<div class="img-categoria">
				<img src="${categoria.img.src}"alt="${categoria.img.alt}"width="${categoria.img.width}">
			</div>
			<a href="${categoria.link}">${categoria.linkText}</a>
		</article>
	`;
}