document.addEventListener('DOMContentLoaded', () =>{
    // Funcion para corroborar si esta lleno el formulario
    // Selecionamos formulario del dom
    const formulario = document.querySelector("form")

    // funcion mostar error
    const mostarError = (input, mensaje)=>{
        // Accedmos al div padre 
        const divPadre = input.parentNode
        // Agregamos los estilos
        divPadre.classList.add("errorInput")
        
        // Buscamos en todo el divPadre 
        const errorText = divPadre.querySelector(".error")
        // Agregamos el mensaje
        errorText.innerText = mensaje   
    }
    //funcion eliminar error
    const eliminarError = (input)=>{
        // Accedmos al contenedor padre del input
        const divPadre = input.parentNode
        // Removemos los estilos aplicados
        divPadre.classList.remove("errorInput")
        // Encuentra el lugar donde esta el texto error
        const errorText = divPadre.querySelector(".error")
        // Remplaza por texto vacio
        errorText.innerText = ""
    }    

    formulario.querySelectorAll("input").forEach(input =>{
        input.addEventListener("change",() =>{
            const valor = input.value.trim()
            if(valor !== ''){
                eliminarError(input)
            }
        })
    })

    // Funcion para validar campo
    function validarCampo(campoId, mensaje){
        const campo = document.getElementById(campoId)
        const value = campo.value.trim()

        if(value == ''){
            mostarError(campo,mensaje)
            return false
        }else{
            eliminarError(campo)
            return true
        }
    }

    // Funcion para validar un correo electronico utilizando una exprecion regular
    function isEmail(email){
        const exprecionRegular = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
        return exprecionRegular.test(email)
    }

    // Funcion para validar email
    function validarEmail(campoId, mensaje){
        const campo = document.getElementById(campoId)
        const email = campo.value.trim()
        if (email === ''){
            mostarError(campo,"El correo electronico es obligatorio")
            return false
        }else if(!isEmail(email)){
            mostarError(campo,mensaje)
            return false
        }else{
            eliminarError(campo)
            return true

        }
    }

    //Funcion para validar el frmulario
    const validarFormulario = () =>{
        let validar = true
        validar = validarEmail("email","el correo electronico no es valido") && validar
        validar = validarCampo("password","la contraseña es obligatoria") && validar
        return validar
    }

    formulario.addEventListener("submit",event =>{
        event.preventDefault()
        if(!validarFormulario()){
            event.preventDefault()
            console.log("El Formulario no es valido")
        }else{
            event.preventDefault()
            alert("Bienvenido")
        }
    })

})
