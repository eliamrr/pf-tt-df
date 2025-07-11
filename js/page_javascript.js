document.addEventListener("DOMContentLoaded",()=>{
    let jsContenido = [
        {
            clase:"JS 1 - Introducción a JavaScript",
            ruta: "https://www.youtube.com/embed/iJ5qkWv1lcg?si=5JG-cmvAWbd5u0UW" ,     
            temas:["¿Qué es y para qué se usa JavaScript?","Conceptos generales. Sintaxis básica","Variable: ¿qué es y cómo declararla? Tipos","Asignación y cambio del valor","Operadores aritméticos","Cversión a entero y flotante","Ejercicio"]
        },
        // {
        //     clase:2,
        //     ruta:"https://www.youtube.com/embed/RC0VkzWcOzY?si=2MZFwOkojGFLAr9S",     
        // },
        {
            clase:"JS 2 - Condicionales y Ciclos",
            ruta:"https://www.youtube.com/embed/RQ2FJfRT0D0?si=w6TEDTFgfBllbXB4",     
            temas:["Diagrama de flujo","Condicional: ¿Qué es?","Operadores lógicos y de comparación: ¿Qué son y cuál es su uso en los condicionales?","Bucles: ¿Qué son? Tipos y diferencias entre sí","Cómo combinar operadores lógicos y ciclos","Ejercicio","Cuestionario"]
        },
        // {
        //     clase:4,
        //     ruta:"https://www.youtube.com/embed/cmcbqAPiM6w?si=04GTmKYlnV9QAwhq",     
        // },
        {
            clase:"JS 3 - Programación Modular con Funciones",
            ruta:"https://www.youtube.com/embed/hD7KlfkBSYU?si=ervuE7LpGB87caXq",     
            temas:["Funciones: ¿Qué son? Parámetros de entrada y de salida","Scope global y local","Programación modular vs. Funciones","Ejercitación de funciones","Parámetros.","Funciones nativas.","Ejercicio"]
        },
        // {
        //     clase:6,
        //     ruta:"https://www.youtube.com/embed/HWawIgnu8Bo?si=geX1M2m18QkCDLYB",     
        // },
        {
            clase:"JS 5 - DOM y Eventos",
            ruta:"https://www.youtube.com/embed/_KKDiOPpfe8?si=5YCMEibboOuhWvgv",     
            temas:["Manipulación del DOM","Definición, alcance y su importancia para operar sobre elementos HTML","Eventos en JS","Eventos: ¿Qué son, para qué sirven y cuáles son los más comunes?","Escuchar un evento sobre el DOM","Ejercicios.","Cuestionario.","Ruta de Avance"]
        },
        {
            clase:"JS 6 - LocalStorage, SessionStorage y Carrito de Compras",
            ruta:"https://www.youtube.com/embed/1Z8LKNU9SXs?si=J5Wamw9sTcECMJFR",     
            temas:["Introducción a LocalStorage y SessionStorage","Diferencias entre LocalStorage y SessionStorage","Implementación de un carrito de compras utilizando LocalStorage o SessionStorage","Ejercicios."]
        },
        // {
        //     clase:9,
        //     ruta:"https://www.youtube.com/embed/b-zxQN_CYj8?si=fThMpK28mOnOrHzR",     
        //     informacion:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates maxime natus neque accusamus placeat atque cumque perspiciatis laboriosam facilis! Perferendis modi necessitatibus ea quam velit nemo facere fuga ut odio!",    
        // },
        {
            clase:"JS 7 - Asincronía",
            ruta:"https://www.youtube.com/embed/o_h6dHRmyj8?si=7UdCS7hh_E9JkpRX",     
            temas:["Asincronía","Consumo de API REST a través de fetch","Procesamiento de los datos","Incluir los datos consumidos y procesados por medio de fetch en nuestro proyecto","Ejercicios.","Cuestionario."]
        },
        // {
        //     clase:9,
        //     ruta:"https://www.youtube.com/embed/ECkiqlRLHWY?si=fyp8H2LWwg_j2REj",     
        // },
        {
            clase:"API y Procesamiento de Datos",
            ruta:"https://www.youtube.com/embed/Y9u2zL_cLik?si=5wdTWBa5HR4zFjXi" ,     
            temas:["Desarrollo de un proyecto integrador que combine HTML, CSS, y JavaScript","Consumo de API REST","Incorporación y procesamiento de los datos en nuestro HTML","Incorporación de buenas prácticas de accesibilidad y SEO","Presentación del proyecto final","Ejercicios.","Proyecto Final"]
        },
        // {
        //     clase:10,
        //     ruta:"https://www.youtube.com/embed/4uB_VXS99lg?si=bd34zXFvdffBDenF",     
        //     informacion:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates maxime natus neque accusamus placeat atque cumque perspiciatis laboriosam facilis! Perferendis modi necessitatibus ea quam velit nemo facere fuga ut odio!",    
        // },
    ]
    function agregarContenido(cursos,contenedor){
        cursos.forEach(curso =>{
            // Creamos la section 
            let setcion = document.createElement("section")
            setcion.classList.add("caja_curso_html")
    
            //Creamos una caja para la imagen
            let caja_video = document.createElement("div")
            caja_video.classList.add("caja_imagen_ch")
    
            // creamos un iframe
            let iframe = document.createElement("iframe")
            iframe.classList.add("imagen_ch")
            iframe.src = curso.ruta
    
            let caja_info = document.createElement("div")
            caja_info.classList.add("caja_info_ch")
    
            let nombre = document.createElement("h3")
            nombre.classList.add("nombre_ch")
            nombre.textContent =curso.clase
    
            let cajalista = document.createElement("ul")
    
            curso.temas.forEach(info=>{
                let li = document.createElement("li")
                li.textContent = info
                li.classList.add("info_ch")
                cajalista.appendChild(li)
            })
    
            
            // Combinamos elementos
            caja_video.appendChild(iframe)
    
            caja_info.append(nombre, cajalista)
    
            setcion.append(caja_video,caja_info)
            contenedor.appendChild(setcion)
        })
    }
    
    let conteiner_js = document.getElementById("conteiner_contenido_js")
    agregarContenido(jsContenido,conteiner_js)

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