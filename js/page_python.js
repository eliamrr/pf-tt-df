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

let pythonContenido = [
    {
        clase:1,
        ruta:"https://www.youtube.com/embed/iIe3TIXNO_c?si=mpEQmmLiHBYjSqcQ",     
        informacion:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates maxime natus neque accusamus placeat atque cumque perspiciatis laboriosam facilis! Perferendis modi necessitatibus ea quam velit nemo facere fuga ut odio!",
    },
    {
        clase:2,
        ruta:"https://www.youtube.com/embed/MGxaGnzkwVE?si=rZhCA94pnuFrWg3Z",     
        informacion:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates maxime natus neque accusamus placeat atque cumque perspiciatis laboriosam facilis! Perferendis modi necessitatibus ea quam velit nemo facere fuga ut odio!",      
    },
    {
        clase:3,
        ruta:"https://www.youtube.com/embed/o-sC1k0mI1Y?si=SHtKllL0uvogsfm4",     
        informacion:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates maxime natus neque accusamus placeat atque cumque perspiciatis laboriosam facilis! Perferendis modi necessitatibus ea quam velit nemo facere fuga ut odio!",        
    },
    {
        clase:4,
        ruta:"https://www.youtube.com/embed/8HT3J1zTFJ4?si=xg-KFubTjiRsMzmP",     
        informacion:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates maxime natus neque accusamus placeat atque cumque perspiciatis laboriosam facilis! Perferendis modi necessitatibus ea quam velit nemo facere fuga ut odio!",        
    },
    {
        clase:5,
        ruta:"https://www.youtube.com/embed/HT_PmpFL4bg?si=0yAkVX7NEOTYfLzY",     
        informacion:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates maxime natus neque accusamus placeat atque cumque perspiciatis laboriosam facilis! Perferendis modi necessitatibus ea quam velit nemo facere fuga ut odio!",         
    },
    {
        clase:6,
        ruta:"https://www.youtube.com/embed/c3uVeHVE7bc?si=_fBbEXJkGKxiYk-Z",     
        informacion:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates maxime natus neque accusamus placeat atque cumque perspiciatis laboriosam facilis! Perferendis modi necessitatibus ea quam velit nemo facere fuga ut odio!",      
    },
    {
        clase:7,
        ruta:"https://www.youtube.com/embed/LHazv0UydzU?si=CNyI_J3kGkXTU7fT",     
        informacion:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates maxime natus neque accusamus placeat atque cumque perspiciatis laboriosam facilis! Perferendis modi necessitatibus ea quam velit nemo facere fuga ut odio!",   
    },
    {
        clase:8,
        ruta:"https://www.youtube.com/embed/l73KasfbUUg?si=rukkters3QdNU5vn",     
        informacion:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates maxime natus neque accusamus placeat atque cumque perspiciatis laboriosam facilis! Perferendis modi necessitatibus ea quam velit nemo facere fuga ut odio!",         
    },
    {
        clase:9,
        ruta:"https://www.youtube.com/embed/wvVBdW78yrM?si=sJ3-PKp1-4S6Jtp5",     
        informacion:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates maxime natus neque accusamus placeat atque cumque perspiciatis laboriosam facilis! Perferendis modi necessitatibus ea quam velit nemo facere fuga ut odio!",        
    },
    {
        clase:10,
        ruta:"https://www.youtube.com/embed/JC6Kv-jwDdA?si=TSxvSCJ2r-bwvJK-",     
        informacion:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates maxime natus neque accusamus placeat atque cumque perspiciatis laboriosam facilis! Perferendis modi necessitatibus ea quam velit nemo facere fuga ut odio!",
    },
    {
        clase:11,
        ruta:"https://www.youtube.com/embed/RlG4OBZlF5Q?si=IjKQbnuWyaxnwYmb",     
        informacion:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates maxime natus neque accusamus placeat atque cumque perspiciatis laboriosam facilis! Perferendis modi necessitatibus ea quam velit nemo facere fuga ut odio!",
    },
    {
        clase:12,
        ruta:"https://www.youtube.com/embed/9Lu8FeWIF9Q?si=MRUGnwSJQyae0JaY",     
        informacion:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates maxime natus neque accusamus placeat atque cumque perspiciatis laboriosam facilis! Perferendis modi necessitatibus ea quam velit nemo facere fuga ut odio!",
    },
    {
        clase:13,
        ruta:"https://www.youtube.com/embed/nNyN2WAYFy8?si=vYXIvi4PDRdD2tHx",     
        informacion:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates maxime natus neque accusamus placeat atque cumque perspiciatis laboriosam facilis! Perferendis modi necessitatibus ea quam velit nemo facere fuga ut odio!",
    },
]

// Accedemos al contenedor html
let conteiner_python = document.getElementById("conteiner_contenido_python")
agregarContenido(pythonContenido,conteiner_python)
