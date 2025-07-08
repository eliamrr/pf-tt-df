// Contiene la imformacion de cursos
let cursos = [
    {
        name: "Python",
        image: "../../img/cursos/pytohomn.png"
    }
]

// Accedmos al contemnedor de los cursos
let divCursos = document.getElementById("contenedor_cursos")

function agregarCosasHorizontales(cursos,contenedor){
    cursos.forEach(curso => {
        
        // Creamos una secsion para cada elemento
        let articule = document.createElement("article")
        articule.id = `${curso.name}`
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

//Llamamos a la funcion y le pasamos los cursos  y el contenedor
agregarCosasHorizontales(cursos, divCursos)


// Funcion que rededirije a otra subpagina al hacer clik 
function rederijirPage(idCaja, ruta){
    // Accedemos al documento a traves del idCaja para poder para hcignarle la funcion
    let caja = document.getElementById(idCaja)
    // Asignamos la funcione
    caja.addEventListener("click", function() {
        window.location.href = ruta
    })
}

// Redirije a pagina Cursos
rederijirPage("Python","../../pages/lenguajes/python.html")


