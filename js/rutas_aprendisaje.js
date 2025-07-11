document.addEventListener("DOMContentLoaded",()=>{
    
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
            article.id = curso.name
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
    
    // Funcion que rededirije a otra subpagina al hacer clik 
    function rederijirPage(idCaja, ruta){
        // Accedemos al documento a traves del idCaja para poder para hcignarle la funcion
        let caja = document.getElementById(idCaja)
        // Asignamos la funcione
        caja.addEventListener("click", function() {
            window.location.href = ruta
        })
    }
    
    // Redirije a rutas de aprendisaje
    rederijirPage("Desarrollo Front-end","rutas aprendisaje/desarrollo_front.html")
    
    rederijirPage("Desarrollo Back-end","rutas aprendisaje/desarrollo_back.html")
    rederijirPage("Desarrollo Movil","rutas aprendisaje/desarrollo_movil.html")

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


