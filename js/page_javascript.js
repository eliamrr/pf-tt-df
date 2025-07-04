let jsContenido = [
    {
        clase:1,
        ruta: "https://www.youtube.com/embed/iJ5qkWv1lcg?si=5JG-cmvAWbd5u0UW" ,     
        informacion:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates maxime natus neque accusamus placeat atque cumque perspiciatis laboriosam facilis! Perferendis modi necessitatibus ea quam velit nemo facere fuga ut odio!",
    },
    {
        clase:2,
        ruta:"https://www.youtube.com/embed/RC0VkzWcOzY?si=2MZFwOkojGFLAr9S",     
        informacion:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates maxime natus neque accusamus placeat atque cumque perspiciatis laboriosam facilis! Perferendis modi necessitatibus ea quam velit nemo facere fuga ut odio!",   
    },
    {
        clase:3,
        ruta:"https://www.youtube.com/embed/RQ2FJfRT0D0?si=w6TEDTFgfBllbXB4",     
        informacion:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates maxime natus neque accusamus placeat atque cumque perspiciatis laboriosam facilis! Perferendis modi necessitatibus ea quam velit nemo facere fuga ut odio!",  
    },
    {
        clase:4,
        ruta:"https://www.youtube.com/embed/cmcbqAPiM6w?si=04GTmKYlnV9QAwhq",     
        informacion:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates maxime natus neque accusamus placeat atque cumque perspiciatis laboriosam facilis! Perferendis modi necessitatibus ea quam velit nemo facere fuga ut odio!",   
    },
    {
        clase:5,
        ruta:"https://www.youtube.com/embed/hD7KlfkBSYU?si=ervuE7LpGB87caXq",     
        informacion:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates maxime natus neque accusamus placeat atque cumque perspiciatis laboriosam facilis! Perferendis modi necessitatibus ea quam velit nemo facere fuga ut odio!",        
    },
    {
        clase:6,
        ruta:"https://www.youtube.com/embed/HWawIgnu8Bo?si=geX1M2m18QkCDLYB",     
        informacion:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates maxime natus neque accusamus placeat atque cumque perspiciatis laboriosam facilis! Perferendis modi necessitatibus ea quam velit nemo facere fuga ut odio!",    
    },
    {
        clase:7,
        ruta:"https://www.youtube.com/embed/_KKDiOPpfe8?si=5YCMEibboOuhWvgv",     
        informacion:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates maxime natus neque accusamus placeat atque cumque perspiciatis laboriosam facilis! Perferendis modi necessitatibus ea quam velit nemo facere fuga ut odio!",       
    },
    {
        clase:8,
        ruta:"https://www.youtube.com/embed/1Z8LKNU9SXs?si=J5Wamw9sTcECMJFR",     
        informacion:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates maxime natus neque accusamus placeat atque cumque perspiciatis laboriosam facilis! Perferendis modi necessitatibus ea quam velit nemo facere fuga ut odio!",      
    },
    {
        clase:9,
        ruta:"https://www.youtube.com/embed/b-zxQN_CYj8?si=fThMpK28mOnOrHzR",     
        informacion:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates maxime natus neque accusamus placeat atque cumque perspiciatis laboriosam facilis! Perferendis modi necessitatibus ea quam velit nemo facere fuga ut odio!",    
    },
    {
        clase:8,
        ruta:"https://www.youtube.com/embed/o_h6dHRmyj8?si=7UdCS7hh_E9JkpRX",     
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

let conteiner_js = document.getElementById("conteiner_contenido_js")
agregarContenido(jsContenido,conteiner_js)