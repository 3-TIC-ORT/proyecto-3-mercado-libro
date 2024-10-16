//////////////////////////////// PARTE MODAL ////////////////////////////////////
const abrirModal = document.querySelector("[data-open-modal]")
const cerrarModal = document.querySelector("[data-close-modal]")
const modal = document.querySelector("[data-modal]")

abrirModal.addEventListener("click", () => {
    modal.showModal()
})

cerrarModal.addEventListener("click", () => {
    modal.close()
})

//////////////////////////////// PARTE GENERACIÓN DE LISTAS ////////////////////////////////////

let lista = [{nombre: "toldot 3", precio: "$12.000"},{nombre: "toldot 4", precio: "$14.000"},{nombre: "toldot 2", precio: "$10.000"},{nombre: "toldot 3", precio: "$12.000"},{nombre: "toldot 3", precio: "$12.000"},{nombre: "toldot 3", precio: "$12.000"}];
let publicados = document.getElementById("publicadosinvisible");

publicados.innerHTML = "";

for (let i of lista){
    publicados.innerHTML = publicados.innerHTML + `<div class="libros"><div class="imagen"><img src="https://cdn.shopify.com/s/files/1/2482/2494/files/Cuentos_de_los_hermanos_Grimm_480x480.jpg?v=1629400827" class="img" alt=""></div><div class="info"><h6 class="nombre">${i.nombre}</h6><h6 class="precio">${i.precio}</h6></div></div>`
}
