let cssContenido = [
    {
        clase:1,
        ruta:"https://www.youtube.com/embed/3O5I0o3jAmg?si=aKR3jKFGFDbpbs4t" ,     
        informacion:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates maxime natus neque accusamus placeat atque cumque perspiciatis laboriosam facilis! Perferendis modi necessitatibus ea quam velit nemo facere fuga ut odio!",
    },
    {
        clase:2,
        ruta:"https://www.youtube.com/embed/1aiPlpgu_EQ?si=S3kdlZNE_FqV562C",     
        informacion:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates maxime natus neque accusamus placeat atque cumque perspiciatis laboriosam facilis! Perferendis modi necessitatibus ea quam velit nemo facere fuga ut odio!",      
    },
    {
        clase:3,
        ruta:"https://www.youtube.com/embed/nLZfFAku7N0?si=AqkFf5izEop7WOC_",     
        informacion:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates maxime natus neque accusamus placeat atque cumque perspiciatis laboriosam facilis! Perferendis modi necessitatibus ea quam velit nemo facere fuga ut odio!",    
    },
    {
        clase:4,
        ruta:"https://www.youtube.com/embed/fdjCeZPOXy8?si=uLjKkqnKt3WEN-Uw",     
        informacion:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates maxime natus neque accusamus placeat atque cumque perspiciatis laboriosam facilis! Perferendis modi necessitatibus ea quam velit nemo facere fuga ut odio!",    
    },
    {
        clase:5,
        ruta:"https://www.youtube.com/embed/OqLac1ORFJA?si=7v5sp6HJqcf1SDNI",     
        informacion:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates maxime natus neque accusamus placeat atque cumque perspiciatis laboriosam facilis! Perferendis modi necessitatibus ea quam velit nemo facere fuga ut odio!",         
    },
    {
        clase:6,
        ruta:"https://www.youtube.com/embed/4f6wNqdNEA0?si=wlF-DxqiVuageEdp",     
        informacion:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates maxime natus neque accusamus placeat atque cumque perspiciatis laboriosam facilis! Perferendis modi necessitatibus ea quam velit nemo facere fuga ut odio!",       
    },
    {
        clase:7,
        ruta:"https://www.youtube.com/embed/67APrmz1pX8?si=l_SBoyTS_4aAZGjR",     
        informacion:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates maxime natus neque accusamus placeat atque cumque perspiciatis laboriosam facilis! Perferendis modi necessitatibus ea quam velit nemo facere fuga ut odio!",       
    },
    {
        clase:8,
        ruta:"https://www.youtube.com/embed/7wuYj2Bwqdc?si=Y-uHhWjumEsVwH7Z",     
        informacion:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates maxime natus neque accusamus placeat atque cumque perspiciatis laboriosam facilis! Perferendis modi necessitatibus ea quam velit nemo facere fuga ut odio!",     
    },
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
        nombre.textContent = `clase ${curso.clase}`

        let descripcion = document.createElement("p")
        descripcion.classList.add("info_ch")
        descripcion.textContent = curso.informacion
        
        // Combinamos elementos
        caja_video.appendChild(iframe)

        caja_info.append(nombre, descripcion)

        setcion.append(caja_video,caja_info)
        contenedor.appendChild(setcion)
    })
}

let conteiner_css = document.getElementById("conteiner_contenido_css")
agregarContenido(cssContenido,conteiner_css)