
// empezamos con el registro

const formIngresar = document.getElementById("formRegistrate")

formIngresar.addEventListener("submit", (Event) => {
    Event.preventDefault()
    console.log("Formulario Valido")

    //ingreso de datos del cliente.

    const nombreCliente = document.getElementById("nombreCliente").value
    const emailCliente = document.getElementById("emailCliente").value
    const passCliente = document.getElementById("passCliente").value

    //Simulamos un base de datos es esa variable se almacena los usuarios como objetos.

    const nuevosClientes = JSON.parse(localStorage.getItem("nuevosClientesRegistrados")) || []

    //Hago una validacion para que el email ingresado no se pueda volver a ingresar.

    const uruarioRegistrado = nuevosClientes.find(usuarios => usuarios.emailCliente === emailCliente)
    if (uruarioRegistrado) {
        return alert("el usuario esta registrado")
    }

    // y con el "else" nos pushea un objeto nuevo y lo alamcenamos en el storage

    else {
        nuevosClientes.push({ nombreCliente: nombreCliente, emailCliente: emailCliente, passCliente: passCliente })
        localStorage.setItem("nuevosClientesRegistrados", JSON.stringify(nuevosClientes))
        alert("registro exitoso bienvenido " + nombreCliente)
    }

    //redirecion a login

    window.location.href = "login.html"
})

// almaceno los usuarios del localStorage y los recorro con un "for of"

let usuariosLocal = JSON.parse(localStorage.getItem("nuevosClientesRegistrados"))

console.log(usuariosLocal)

for (personas of usuariosLocal) {
    console.log(personas)
}



