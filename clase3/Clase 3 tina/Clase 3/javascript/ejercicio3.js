const datosImagen = [
    {id:"img1", src:"../imgs/Hombre.jpg", alt:"Ropa de Hombre", width:"340"},
    {id:"img2", src:"../imgs/mujer.jpg", alt:"Ropa de mujer", width:"340"},
    {id:"img3", src:"../imgs/accesorios.jpg", alt:"accesorios", width:"340", width:"340"},
    {id:"img4", src:"../imgs/Gloss.jpg", alt:"Gloss", width:"250"},
    {id:"img5", src:"../imgs/leggins.jpg", alt:"leggings de yoga", width:"250"},
    {id:"img6", src:"../imgs/zapatillas.png", alt:"zapatillas de running", width:"250"},
    {id:"img7", src:"../imgs/short.png", alt:"shorts", width:"270"}
];

function crearImagen(src, alt,width) { 
    return `<img src="${src}" alt="${alt}" width="${width}">`;
}