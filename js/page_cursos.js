let cursos = [
    {
        name: "Html",
        image: "../img/cursos/html_na.jpg"
    },
    {
        name: "Css",
        image: "../img/cursos/css_azul.png"
    },
    {
        name: "JavasCript",
        image: "../img/cursos/js.png"
    },
    {
        name: "Python",
        image: "../img/cursos/pytohomn.png"
    }
]

let main_page_cursos = document.getElementById("contenedor_cursos")

function agregarCosasHorizontales(cursos,contenedor){
    cursos.forEach(curso => {
        
        // Creamos una secsion para cada elemento
        let articule = document.createElement("article")
        articule.classList.add("cajas_ra")
        articule.classList.add("agrandar")
        articule.classList.add("bordes_de")

        
        //Creamos una caja para la imagen
        let caja_imagen = document.createElement("div")
        caja_imagen.classList.add("caja_imagen")
        
        let imagen = document.createElement("img")
        imagen.classList.add("imagen")
        imagen.src = curso.image
        
        let nombre= document.createElement("h4")
        nombre.classList.add("nombre_c")
        nombre.textContent = curso.name
        
        // enpesamos a armar el elmento
        // Caja de la imagen con su imagen
        caja_imagen.appendChild(imagen)
        
        articule.append(caja_imagen,nombre)
        contenedor.appendChild(articule)
    })
}
agregarCosasHorizontales(cursos, main_page_cursos)