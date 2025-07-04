// Contiene la imformacion de cursos
let cursos = [
    {
        name: "Html",
        image: "img/cursos/html_na.jpg"
    },
    {
        name: "Css",
        image: "img/cursos/css_azul.png"
    },
    {
        name: "JavasCript",
        image: "img/cursos/js.png"
    },
    {
        name: "Python",
        image: "img/cursos/pytohomn.png"
    }
]
//Contine la informacione de rutas de aprendisaje
let rutasAprendisaje = [
    {
        name: "Desarrollo Front-end",
        image: "img/rutas_aprendisaje/ff.png",
    },
    {
        name: "Desarrollo Back-end",
        image: "img/rutas_aprendisaje/ba.png",
    },
    {
        name: "Desarrollo Movil",
        image:"img/rutas_aprendisaje/mm.png" ,
    }
    
]

// Accedmos al contemnedor de los cursos
let divCursos = document.getElementById("contenedor_cursos")
// Accedmos al contemnedor de las rutas de aprendisaje
let divRutasAprendiosaje = document.getElementById("contenedor_rutas_aprendisaje")

//Funcion  que accede al oicument y cre alos elemetos que le pasamos de javascrip
function agegarCosas(cursos, contenedor){
    cursos.forEach(c => {
        
        // Creamos un articulo
        let articulo = document.createElement("article")
        articulo.classList.add("cajas_ra")
        articulo.classList.add("agrandar")
        articulo.classList.add("bordes_de")
        
        // Creamos un div para la imagen
        let divImage = document.createElement("div")
        divImage.classList.add("caja_imagen")
        
        //Creamos la imagen
        let imagen = document.createElement("img")
        imagen.classList.add("imagen")
        //Asignamos la ruta de imagen
        imagen.src = c.image
        
        
        // Creamos el nombre de la caja
        let titulo = document.createElement("h4")
        titulo.classList.add("nombre_c")
        titulo.textContent = c.name
        
        //Empesamos a agregar cada cosa a su lugar 
        //Agregamos la imagen a su caja
        divImage.appendChild(imagen)
        
        //agregaos la caja y el nombre
        articulo.append(divImage,titulo)
        
        //Agregamos elartculo a su contenedor
        contenedor.appendChild(articulo)
    })
}

//Llamamos a la funcion y le pasamos los cursos  y el contenedor
agegarCosas(cursos, divCursos)

//Llamamos a la funcion y le pasamos las rutas de aprendisaje  y el contenedor
agegarCosas(rutasAprendisaje, divRutasAprendiosaje)