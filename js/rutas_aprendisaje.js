//Contine la informacione de rutas de aprendisaje
let rutasAprendisaje = [
    {
        name: "Desarrollo Front-end",
        image: "../img/rutas_aprendisaje/ff.png",
    },
    {
        name: "Desarrollo Back-end",
        image: "../img/rutas_aprendisaje/ba.png",
    },
    {
        name: "Desarrollo Movil",
        image:"../img/rutas_aprendisaje/mm.png" ,
    }
    
]

let contenedor_ru = document.getElementById("contenedor_rutas_aprendisaje")

//Creamos la funcion para agregar los archivos

function agreagarRutas(cursos,contenedor){
    cursos.forEach(curso => {
        
        let article = document.createElement("article")
        article.classList.add("cajas_ra")
        article.classList.add("agrandar")
        article.classList.add("bordes_de")


        let cajaImagen = document.createElement("div")
        cajaImagen.classList.add("caja_imagen")

        let img = document.createElement("img")
        img.classList.add("imagen")
        img.src = curso.image

        let titulo =document.createElement("h4")
        titulo.classList.add("nombre_c" )
        titulo.textContent = curso.name

        // Empesamos a juntar los elementos
        cajaImagen.appendChild(img)
        article.append(cajaImagen,titulo)
        contenedor.appendChild(article)
    })
}
agreagarRutas(rutasAprendisaje, contenedor_ru)