const categorias = [
	{
		titulo: 'Ropa para Hombre',
		
		link: 'hombres.html',
		linkText: 'Ver más',
        img: { id: "img1", src: "./imgs/ropa1.jpg", alt: "Ropa para Hombre", width: 300 }
	},
	{
		titulo: 'Ropa para Mujeres',
		
		link: 'mujeres.html',
		linkText: 'Ver más',
        img: { id: "img2", src: "./imgs/ropa2.jpeg", alt: "Ropa para Mujeres", width: 300 }
	},
	{
		titulo: 'Accesorios',
	
		link: 'accesorios.html',
		linkText: 'Ver más',
        img: { id: "img3", src: "./imgs/ropa3.jpg", alt: "Accesorios", width: 300 }
        
	}
];

function crearArticulo(categoria) {
	return `
		<article class="categoria">
			<h3>${categoria.titulo}</h3>
			<div class="img-categoria">
                <img src="${categoria.img.src}" alt="${categoria.img.alt}" width="${categoria.img.width}">
			</div>
			<a href="${categoria.link}">${categoria.linkText}</a>
		</article>
	`;
}


