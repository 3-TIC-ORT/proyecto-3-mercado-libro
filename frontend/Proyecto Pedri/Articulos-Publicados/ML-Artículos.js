//////////////////////PARA VOLVER AL LOGIN SI NO SE ESTÁ REGISTRADO ///////////////////////////
window.addEventListener("pageshow",()=>{
    window.reload()
})

if (localStorage.getItem("user") === "-"){
    location.href = '../Log-In/ML-login.html';
}



//////////////////////////////// PARTE MODAL ////////////////////////////////////
const abrirModal = document.querySelector("[data-open-modal]")
const cerrarModal = document.querySelector("[data-close-modal]")
const modal = document.querySelector("[data-modal]")

abrirModal.addEventListener("click", () => {
    modal.showModal()
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
            publicados.innerHTML = publicados.innerHTML + `<div class="libros"><div class="imagen"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShaWwHk25rOFdbzWhtU8iT7A1IIBJandpDVg&s" class="img" alt=""></div><div class="info"><h6 class="nombre">${i.nombre}</h6><h6 class="precio">${i.precio}</h6></div></div>`
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
    let numero = document.getElementById("numero");// TODO: Agregar comparación de precio e imagen
    if( nombre.value === "" || materia.value === "" || descripcion.value === "" || año.value === "" || mail.value === ""){
        alert("Es necesario completar todos los campos para poder publicar");
    }
    else{
        let publicacion = {
            "nombre": nombre.value,
            "imagen": "SIUUU", //TODO: Agregar link img
            "materia": materia.value,
            "precio": "SIUUUU", //TODO: Agregar precio posta cuando esté en el css
            "descripcion": descripcion.value,
            "año": año.value,
            "nombreDeUsuario": nombreDeUsuario.value,
            "mail": mail.value,
            "numero": numero.value
        }
        modal.close()
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


//////////////////////////////// PARTE SUBIDA DE IMÁGENES ////////////////////////////////////
let inputFile = document.getElementById("nombreImagen");
function displayImageName(){
    var fileInput = document.getElementById('upload');
    var fileReader = new FileReader();
    fileReader.readAsDataURL(fileInput.files[0]);
    fileReader.onloadend = ()=>{
        let resultado = FileReader.result;
    }

    var fileName = fileInput.files[0] ? fileInput.files[0].name : "Ninguna imagen seleccionada";
    document.getElementById('nombreImagen').textContent = fileName;
}
