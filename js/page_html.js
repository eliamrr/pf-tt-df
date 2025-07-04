let htmlContenido = [
    {
        clase:1,
        ruta:"https://www.youtube.com/embed/GL-PiM4vu_A?si=m6rgRa-KwYjqe3ek",     
        informacion:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates maxime natus neque accusamus placeat atque cumque perspiciatis laboriosam facilis! Perferendis modi necessitatibus ea quam velit nemo facere fuga ut odio!",
    },
    {
        clase:2,
        ruta:"https://www.youtube.com/embed/wbz6JP1h784?si=1eV5lzGwLIJoInBu",     
        informacion:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates maxime natus neque accusamus placeat atque cumque perspiciatis laboriosam facilis! Perferendis modi necessitatibus ea quam velit nemo facere fuga ut odio!",      
    },
    {
        clase:3,
        ruta:"https://www.youtube.com/embed/b5Iw3EggZmI?si=K3hOBv-PFNJef-6E",     
        informacion:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates maxime natus neque accusamus placeat atque cumque perspiciatis laboriosam facilis! Perferendis modi necessitatibus ea quam velit nemo facere fuga ut odio!",        
    },
    {
        clase:4,
        ruta:"https://www.youtube.com/embed/k2mnLqpx6fU?si=n4a2dq8wlJ5kbYuZ" ,     
        informacion:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates maxime natus neque accusamus placeat atque cumque perspiciatis laboriosam facilis! Perferendis modi necessitatibus ea quam velit nemo facere fuga ut odio!",        
    },
    {
        clase:5,
        ruta:"https://www.youtube.com/embed/uTF8z4qnqDs?si=zpjMJ2a2q7-ia5XY",     
        informacion:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates maxime natus neque accusamus placeat atque cumque perspiciatis laboriosam facilis! Perferendis modi necessitatibus ea quam velit nemo facere fuga ut odio!",         
    },
    {
        clase:6,
        ruta:"https://www.youtube.com/embed/IdlrXKINfZI?si=2BEVbdIWToFBJq68",     
        informacion:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates maxime natus neque accusamus placeat atque cumque perspiciatis laboriosam facilis! Perferendis modi necessitatibus ea quam velit nemo facere fuga ut odio!",        
    },
    {
        clase:7,
        ruta:"https://www.youtube.com/embed/x-g-F2r4NKk?si=KtDs2PHbNhFgvejH",     
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

let conteiner_html = document.getElementById("conteiner_contenido_html")
agregarContenido(htmlContenido,conteiner_html)