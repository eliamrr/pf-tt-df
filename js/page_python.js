let pythonContenido = [
    {
        clase:"Introducción",
        ruta:"https://www.youtube.com/embed/iIe3TIXNO_c?si=mpEQmmLiHBYjSqcQ",     
        temas:["Introducción al curso: duración, objetivos, metodología, evaluación.","Conceptos básicos: hardware, software.","Sistemas operativos y aplicaciones.","Lenguajes de programación"]
    },
    {
        clase:"Algoritmos",
        ruta:"https://www.youtube.com/embed/MGxaGnzkwVE?si=rZhCA94pnuFrWg3Z",     
        temas:["Concepto de algoritmo. Entrada-Proceso-Salida.","Estrategias para la resolución de problemas.","Introducción a Python: Origen, características, campo de aplicación.","Instalación y configuración del entorno de desarrollo (Visual Studio Code + Python).","Interfaz de Visual Studio Code.","\"Hola Mundo\" en Python.","Sintaxis básica de Python: variables y tipos de datos simples"]
    },
    {
        clase:"Operadores y Expresiones en Pytho",
        ruta:"https://www.youtube.com/embed/o-sC1k0mI1Y?si=SHtKllL0uvogsfm4",     
        temas:["Operadores algebraicos y expresiones en Python","Uso de input()","Programas con entrada, procesamiento y salida de datos"]
    },
    {
        clase:"Definimos Avances",
        ruta:"https://www.youtube.com/embed/8HT3J1zTFJ4?si=xg-KFubTjiRsMzmP",     
        temas:["Definimos los requisitos del Proyecto Integrador.","Creamos un menú de opciones provisorio.","Creamos código para pedir, procesar y mostrar datos"]
    },
    {
        clase:"Condicionales",
        ruta:"https://www.youtube.com/embed/HT_PmpFL4bg?si=0yAkVX7NEOTYfLzY",  
        temas:["Definimos los requisitos del Proyecto Integrador.","Creamos un menú de opciones provisorio.","Creamos código para pedir, procesar y mostrar datos."]   
    },
    {
        clase:"Bucles while",
        ruta:"https://www.youtube.com/embed/c3uVeHVE7bc?si=_fBbEXJkGKxiYk-Z",   
        temas:["Control de flujo: bucles while.","Concepto y usos de los contadores.","Concepto y usos de los acumuladores."]  
    },
    {
        clase:"Listas y Tuplas",
        ruta:"https://www.youtube.com/embed/LHazv0UydzU?si=CNyI_J3kGkXTU7fT",     
        temas:["Listas y tuplas: creación y manipulación.","Uso de subindices.","Métodos de listas y tuplas.","Recorrer una lista con while"]
    },
    {
        clase:"Bucles for",
        ruta:"https://www.youtube.com/embed/l73KasfbUUg?si=rukkters3QdNU5vn",     
        temas:[  "Control de flujo: bucles for","Slices y listas de listas"]
    },
    {
        clase:"Diccionarios",
        ruta:"https://www.youtube.com/embed/wvVBdW78yrM?si=sJ3-PKp1-4S6Jtp5",  
        temas:["Diccionarios: uso y métodos esenciales.","Uso de diccionarios como medio de almacenamiento temporal de datos"]
    },
    {
        clase:"Funciones",
        ruta:"https://www.youtube.com/embed/JC6Kv-jwDdA?si=TSxvSCJ2r-bwvJK-",    
        temas:["Funciones en Python: definición y uso.","Argumentos y retorno de valores.","Funciones que llaman a funciones"] 
    },
    {
        clase:"Introducción a Base de Datos",
        ruta:"https://www.youtube.com/embed/RlG4OBZlF5Q?si=IjKQbnuWyaxnwYmb",  
        temas:["Concepto y utilidad de los módulos en Python","Introducción a Bases de Datos.","Idea de tabla, campo, índice, clave, etc."]   
    },
    {
        clase:"Fundamentos SQL",
        ruta:"https://www.youtube.com/embed/9Lu8FeWIF9Q?si=MRUGnwSJQyae0JaY",   
        temas:[  "Instalación y uso del módulo SQLite","Consultas SQL básicas desde Python con SQLite","Consultas SQL básicas: SELECT, INSERT, UPDATE, DELETE"]  
    },
    {
        clase:"SQLite",
        ruta:"https://www.youtube.com/embed/nNyN2WAYFy8?si=vYXIvi4PDRdD2tHx",     
        temas:["Definimos y creamos la base de datos","Agregamos a las funciones creadas antes de las consultas de SQL","Revisión de los criterios de evaluación"]
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


// Accedemos al contenedor html
let conteiner_python = document.getElementById("conteiner_contenido_python")
agregarContenido(pythonContenido,conteiner_python)
