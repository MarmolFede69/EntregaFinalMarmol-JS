// validacion de usuario para que solo el usuario en linea pueda recorrer el index //

const usuariosEnLinea = JSON.parse(localStorage.getItem("usuarioEnLinea")) || false

if (!usuariosEnLinea) {
    window.location.href = "login.html"
}

// un boton de salir que borra el storage  y redirige al usuario al login //

const logout = document.getElementById("Salir")
logout.addEventListener("click", () => {
    alert("Hasta pronto")
    localStorage.removeItem("usuarioEnLinea")
    window.location.href = "login.html"
})

//variables
const contenedorGeneralDeAutos = document.getElementById("contenedorGeneralDeAutos")
let carrito = [];

const carritoContenedor = document.getElementById("carritoContenedor")

// En esta parte recorremos el array y creamos una card para cada objeto //

listaAutos.forEach((autosEnVenta) => {
    let contenedorAutos = document.createElement("div");
    contenedorAutos.className = "cardAutos";
    contenedorAutos.innerHTML = `
    <h2 class="eliminarProducto"> X </h2>
    <img src="${autosEnVenta.img}">
    <h3>Nombre : ${autosEnVenta.nombre}</h3>
    <h3>Caracteristicas : ${autosEnVenta.caracteristicas}</h3>
    <p>Precio : ${autosEnVenta.precio}</p>
    <button id="agregar${autosEnVenta.id}" class="btn btn-success">Comprar</button>
    `;
    contenedorGeneralDeAutos.append(contenedorAutos);

    const botonSelecionar = document.getElementById(`agregar${autosEnVenta.id}`);
    botonSelecionar.addEventListener("click", () => {
        agregarAlCarrito(autosEnVenta.id)
        contadorCarrito.innerText = carrito.length
        precioTotal.innerText = carrito.reduce((acc, prod) => acc + prod.precio, 0)


    })

})


//Carrito

const botonCarrito = document.getElementById("verCarrito")
const contadorCarrito = document.getElementById("contadorCarrito")
const precioTotal = document.getElementById("precioTotal")

botonCarrito.addEventListener("click", () => {

    actualizarCarrito()
    console.log(carrito)


})

const agregarAlCarrito = (autoId) => {
    const autoSeleccionado = listaAutos.find((auto) => auto.id === autoId)
    carrito.push(autoSeleccionado)



}

const eliminarDelCarrito = (autoId) => {
    const autoParaEliminar = carrito.find((auto) => auto.id === autoId)
    const indice = carrito.indexOf(autoParaEliminar)
    carrito.splice(indice, 1)
    actualizarCarrito()


}

const actualizarCarrito = () => {

    carritoContenedor.innerHTML = ""

    carrito.forEach((autoEnCarrito) => {

        const divCarrito = document.createElement("div")
        divCarrito.className = ("autoEnCarrito")
        divCarrito.innerHTML = `
        <h3>Nombre : ${autoEnCarrito.nombre}</h3>
        <p>Precio : ${autoEnCarrito.precio}</p>
        <button onclick="eliminarDelCarrito(${autoEnCarrito.id})" class="btn btn-danger">Eliminar</button>
        `
        carritoContenedor.append(divCarrito)

    })

    contadorCarrito.innerText = carrito.length
    precioTotal.innerText = carrito.reduce((acc, prod) => acc + prod.precio, 0)


}


















