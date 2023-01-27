const listaCompra = ["Lechuga", "Queso", "Bananas", "Leche", "Palta", "Carne", "Cereal"];

listaCompra.push("Aceite de Girasol")
listaCompra.pop()
console.log(listaCompra);

const peliculasFav = [
    {
        titulo: 'Eternal Sunshine of the Spotless Mind',
        director: 'Michel Gondry',
        fecha:  2004 
    },
    {
        titulo: 'The Butterfly Effect',
        director: 'Eric Bress y J. Mackye Gruber',
        fecha:  2004 
    },
    {
        titulo: 'Lucy',
        director: 'Luc Besson',
        fecha:  2014 
    },
]

const pelisPost2010 = peliculasFav.filter(peli => peli.fecha >= 2010)

const directores = peliculasFav.map(obj => obj.director)

const titulos = peliculasFav.map(obj => obj.titulo)

const concDirYTitu = directores.concat(titulos)

const concDirYTituFacProp = [...directores, ...titulos]
