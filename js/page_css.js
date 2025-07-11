document.addEventListener("DOMContentLoaded",()=>{
        let cssContenido = [
        {
            clase:"CSS 1 - Introducción a CSS",
            ruta:"https://www.youtube.com/embed/3O5I0o3jAmg?si=aKR3jKFGFDbpbs4t" ,     
            temas:["Bases del CSS","CSS externo, interno y en línea","Selectores básicos (id, clase, etiqueta, universal)","Especificidad, Herencia, Cascada y Orden de las reglas en CSS","Ejercicios","Cuestionario","Ruta de Avance"]

        },
        // {
        //     clase:2,
        //     ruta:"https://www.youtube.com/embed/1aiPlpgu_EQ?si=S3kdlZNE_FqV562C",     

        // },
        {
            clase:"CSS 2 - Medidas, Colores, Fondos, Fuentes e Íconos",
            ruta:"https://www.youtube.com/embed/nLZfFAku7N0?si=AqkFf5izEop7WOC_",     
            temas:["Unidades de medida","Colores CSS","Fondos en CSS","Fuentes y tipografías","Estilos para textos y listas","Íconos","Ejercicios"]
            
        },
        // {
        //     clase:4,
        //     ruta:"https://www.youtube.com/embed/fdjCeZPOXy8?si=uLjKkqnKt3WEN-Uw",     
        // },
        {
            clase:"CSS 3 - Modelo de Caja, Posicionamiento y Flexbox",
            ruta:"https://www.youtube.com/embed/OqLac1ORFJA?si=7v5sp6HJqcf1SDNI",     
            temas:["Modelo de caja y propiedades","Posicionamiento y visualización","Selectores avanzados","¿Qué es Flexbox?","Propiedades del contenedor Flex y los Flex items","Ejercicios","Cuestionarios"]
        
        },
        // {
        //     clase:6,
        //     ruta:"https://www.youtube.com/embed/4f6wNqdNEA0?si=wlF-DxqiVuageEdp",     
        // },
        {
            clase:"CSS 4 - Grid y Media Queries",
            ruta:"https://www.youtube.com/embed/67APrmz1pX8?si=l_SBoyTS_4aAZGjR",     
            temas:["¿Qué es Grid?","Implementación de Grid","Maquetado con Flex y Grid","Media Queries","Ejercicios"]
        
        },
        // {
        //     clase:8,
        //     ruta:"https://www.youtube.com/embed/7wuYj2Bwqdc?si=Y-uHhWjumEsVwH7Z",     
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

    let conteiner_css = document.getElementById("conteiner_contenido_css")
    agregarContenido(cssContenido,conteiner_css)


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
