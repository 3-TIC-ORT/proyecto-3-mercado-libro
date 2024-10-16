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
//////////////////////////////FUNCIONALIDAD (PARTE DE TOMAR LOS DATOS DE LOS INPUTS Y METERLOS EN OBJETOS Y PASARSELOS AL BACK)/////

document.getElementById("botonPublicar").addEventListener("click", publicar);
function publicar(){
    let nombre = document.getElementById("nombre");
    let imagen = document.getElementById("imagen");
    let materia = document.getElementById("materia");
    let precio = document.getElementById("precio");
    let descripcion = document.getElementById("descripcion");
    let año = document.getElementById("año");
    let nombreDeUsuario = localStorage.getItem("user");
    let mail = document.getElementById("mail");
    let numero = document.getElementById("numero");
    if( nombre.value === "" || imagen.value === "" || materia.value === "" || precio.value === "" || descripcion.value === "" || año.value === "" || nombreDeUsuario.value === "" || mail.value === "" || numero.value === ""){
        alert("Es necesario completar todos los campos para poder publicar");
    }
    else{
        let publicacion = {
            "nombre": nombre.value,
            "imagen": imagen.value,
            "materia": materia.value,
            "precio": precio.value,
            "descripcion": descripcion.value,
            "año": año.value,
            "nombreDeUsuario": nombreDeUsuario.value,
            "mail": mail.value,
            "numero": numero.value
        }
        postData("publicar",publicacion);
        window.reload()
    }
}