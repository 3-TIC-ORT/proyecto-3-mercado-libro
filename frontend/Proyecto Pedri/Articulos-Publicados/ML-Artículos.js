//////////////////////PARA VOLVER AL LOGIN SI NO SE ESTÁ REGISTRADO ///////////////////////////
window.addEventListener("pageshow",()=>{
    if (localStorage.getItem("user") === "-"){
        location.href = '../Log-In/ML-login.html';
    }
})





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


////////////////////////////// PARTE DE OBTENER PUBLICACIONES Y GENERACIÓN DE LIBROS /////////////////////////////
let listaDeLibros;
window.onload = ()=>{
    console.log("hola");
    fetchData("pedirLibros",(libros)=>{
        listaDeLibros = libros;
        console.log(listaDeLibros)
        let publicados = document.getElementById("publicadosinvisible");
        publicados.innerHTML = "";
        for (let i of listaDeLibros){
            publicados.innerHTML = publicados.innerHTML + `<div class="libros"><div class="imagen"><img src="https://cdn.shopify.com/s/files/1/2482/2494/files/Cuentos_de_los_hermanos_Grimm_480x480.jpg?v=1629400827" class="img" alt=""></div><div class="info"><h6 class="nombre">${i.nombre}</h6><h6 class="precio">${i.precio}</h6></div></div>`
        }
    })
}
////////////////////////////// PARTE FUNCIONALIDAD (PARTE DE TOMAR LOS DATOS DE LOS INPUTS Y METERLOS EN OBJETOS Y PASARSELOS AL BACK)/////

document.getElementById("botonPublicar").addEventListener("click", publicar);
function publicar(){ 
    // TODO: PEDRO ACA ESTAN TODOS LOS IDS QUE TENES QUE PONER. Tambien tenes que agregar el boton publicar id: botonPublicar 
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







////////////////////////// PARTE CERRAR SESIÓN //////////////////////////////////////////

let btnCerrarSesion = document.getElementById("botonCerrarSesion");

btnCerrarSesion.addEventListener("click",()=>{
    localStorage.setItem("user","-");
    location.href = '../Log-In/ML-login.html'
})

