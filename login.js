//Tomamos el "formIngresar"
const formIngresar = document.getElementById("formIngresar")
formIngresar.addEventListener("submit", (Event) => {
    Event.preventDefault()
    console.log("Formulario Valido")
    const emailCliente = document.getElementById("emailCliente").value
    const passCliente = document.getElementById("passCliente").value

    // traemos el "localStorage" creado
    const nuevosClientes = JSON.parse(localStorage.getItem("nuevosClientesRegistrados")) || []

    // Validamos el email && pass 

    const validarUsuario = nuevosClientes.find(usuarios => usuarios.emailCliente === emailCliente && usuarios.passCliente === passCliente)

    // Si el ususario esta mal ingresado 

    if (!validarUsuario) {
        return alert("usuario y/o contraseña incorrecto")


    }

    // De lo contrario redirecciono al programa.

    else {
        alert("bienvenido " + validarUsuario.nombreCliente)
        // creo una nueva clave que sirva para que a la aplicacion solo se pueda entrar si el usuario esta validado.
        localStorage.setItem("usuarioEnLinea", JSON.stringify(validarUsuario))
        window.location.replace("index.html");
    }
})
