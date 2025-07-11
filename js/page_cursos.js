document.addEventListener("DOMContentLoaded",()=>{
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
    agregarCosasHorizontales(cursos, main_page_cursos)
    
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
    rederijirPage("Html","lenguajes/html.html")
    rederijirPage("Css","lenguajes/css.html")
    rederijirPage("JavasCript","lenguajes/javascript.html")
    rederijirPage("Python","lenguajes/python.html")
    
    let menu = document.getElementById("menuid")
    menu.addEventListener("click",()=>{
        let lista = document.getElementById("lista_h")
        lista.classList.remove("lista")
        lista.classList.add("mv_ver")
    })


    let cerrar = document.getElementById("cerra")
    cerrar.addEventListener("click",()=>{
        let lista = document.getElementById("lista_h")
        lista.classList.add("lista")
        lista.classList.remove("mv_ver")
    })



})
