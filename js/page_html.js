let htmlContenido = [
    {
        clase:"Presentación y Conceptos Básicos de HTML",
        ruta:"https://www.youtube.com/embed/GL-PiM4vu_A?si=m6rgRa-KwYjqe3ek",     
        temas: ["Sobre Talento Tech","Objetivo del curso y lineamientos de cursada","Conceptos básicos sobre Full Stack","Herramientas a utilizar","Instalación del software","Explicación del proyecto final","Introducción a HTML: Etiquetas básicas y atributos","Etiquetas semánticas más comunes: <header>, <nav>, <main>, <footer>, <section>, <article>, <aside>","Cómo dividir una página HTML con las etiquetas semánticas","Etiquetas básicas más comunes: <h1>, <h2>, <p>, <b>, <strong>, <i>","Ejercicios"]

    },
    // {
    //     clase:"After class #",
    //     ruta:"https://www.youtube.com/embed/wbz6JP1h784?si=1eV5lzGwLIJoInBu",
    //     temas: ["Ejercicios"]
    // },
    // {
    //     clase:"After class #",
    //     ruta:"https://www.youtube.com/embed/b5Iw3EggZmI?si=K3hOBv-PFNJef-6E",   
    //     temas: []          
    // },
    {
        clase:"HTML 2 - Listas, Rutas, Multimedia y Tablas",
        ruta:"https://www.youtube.com/embed/k2mnLqpx6fU?si=n4a2dq8wlJ5kbYuZ" ,     
        temas: ["Listas y enlaces","Rutas absolutas y relativas","Elementos en bloque y en línea","Multimedia con HTML: imágenes, video, audio, iframes","Accesibilidad en Multimedia (etiquetas alt, subtítulos en video)","Tablas","Ejercicios", "Cuestionario"]            
    },
    // {
    //     clase:"After class #",
    //     ruta:"https://www.youtube.com/embed/uTF8z4qnqDs?si=zpjMJ2a2q7-ia5XY",     
    //     temas: []          
        
    // },
    {
        clase:"HTML 3 - Formularios y Subida al Servidor",
        ruta:"https://www.youtube.com/embed/IdlrXKINfZI?si=2BEVbdIWToFBJq68",  
        temas: [  "Formularios","Formspree","Herramienta de inspección","Subida a un hosting gratuito (Netlify o GitHub Pages)","Ejercicios"]     
        
    },
    // {
    //     clase:"After class #",
    //     ruta:"https://www.youtube.com/embed/x-g-F2r4NKk?si=KtDs2PHbNhFgvejH",     
    //     temas: []          
        
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
        nombre.textContent = curso.clase


        let cajalista = document.createElement("ul")

        curso.temas.forEach(info=>{
            let li = document.createElement("li")
            li.textContent = info
            li.classList.add("info_ch")
            cajalista.appendChild(li)
        })
        
        // Combinamos elementos
        caja_video.appendChild(iframe)

        caja_info.append(nombre,cajalista)

        setcion.append(caja_video,caja_info)
        contenedor.appendChild(setcion)
    })
}

let conteiner_html = document.getElementById("conteiner_contenido_html")
agregarContenido(htmlContenido,conteiner_html)