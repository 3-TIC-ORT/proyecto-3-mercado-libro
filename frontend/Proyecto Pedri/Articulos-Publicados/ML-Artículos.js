let resultado = "";
//////////////////////PARA VOLVER AL LOGIN SI NO SE ESTÁ REGISTRADO ///////////////////////////
window.addEventListener("pageshow",()=>{
    document.reload()
    
})

if (localStorage.getItem("user") === "-" || localStorage.getItem("user") == null){
    location.href = '../Log-In/ML-login.html';
}



//////////////////////////////// PARTE MODALES ////////////////////////////////////
const abrirModalPublicar = document.querySelector("[data-open-modal]")
const cerrarModalPublicar = document.querySelector("[data-close-modal]")
const modalPublicar = document.querySelector("[data-modal]")

abrirModalPublicar.addEventListener("click", () => {
    modalPublicar.showModal()
})

const modalLibros = document.querySelector(".graciasIvoLibros")



/////////////////////////////////////////// PARTE DIALOG ////////////////////////////////////////////

const cambiarDialog = document.querySelector(".dialogAbrir")
const dialog = document.querySelector(".dialog")

cambiarDialog.addEventListener("mouseover", () => {
    dialog.show()
})
cambiarDialog.addEventListener("mouseout", () => {
    dialog.close()
})
dialog.addEventListener("mouseover", () => {
    dialog.show()
})
dialog.addEventListener("mouseout", () => {
    dialog.close()
})

////////////////////////////// PARTE DE OBTENER PUBLICACIONES Y GENERACIÓN DE LIBROS /////////////////////////////
let listaDeLibros;
window.onload = ()=>{
    fetchData("pedirLibros",(libros)=>{
        crearLibros(libros)
    })
}


function crearLibros(libros){
    listaDeLibros = libros;
    let publicados = document.getElementById("publicadosinvisible");
    publicados.innerHTML = "";
    for (let i of listaDeLibros){
        publicados.innerHTML = publicados.innerHTML + `<div class="libros" id="${i.id}"><div class="imagen"><img src="${i.foto}" class="img" alt=""></div><div class="info"><h6 class="nombre">${i.nombre}</h6><h6 class="precio">${i.precio}</h6></div></div>`
    }
    let libritos = document.querySelectorAll(".libros");
    for (let i of libritos){
        i.addEventListener("click",()=>{
            modalLibros.showModal()
        })
    }
}

////////////////////////////// PARTE FUNCIONALIDAD (PARTE DE TOMAR LOS DATOS DE LOS INPUTS Y METERLOS EN OBJETOS Y PASARSELOS AL BACK)/////

document.getElementById("botonPublicar").addEventListener("click", publicar);
function publicar(){ 
    let nombre = document.getElementById("nombre");
    let materia = document.getElementById("materia");
    let precio = document.getElementById("precio");
    let descripcion = document.getElementById("descripcion");
    let año = document.getElementById("año");
    let nombreDeUsuario = localStorage.getItem("user");
    let mail = document.getElementById("mail");
    let numero = document.getElementById("numero");
    if( nombre.value === "" || materia.value === "" || descripcion.value === "" || año.value === "" || mail.value === "" || resultado === "" || numero.value === "" || precio.value === ""){
        alert("Es necesario completar todos los campos para poder publicar");
    }
    else{
        let publicacion = {
            "nombre": nombre.value.charAt(0).toUpperCase() + nombre.value.slice(1).toLowerCase(),
            "foto": resultado,
            "materia": materia.value,
            "precio": "$"+ precio.value,
            "descripcion": descripcion.value,
            "año": año.value,
            "nombreDeUsuario": localStorage.getItem("user"),
            "mail": mail.value,
            "numero": numero.value
        }
        modalPublicar.close()
        postData("publicar",publicacion);
        resultado = "";
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
        resultado = fileReader.result;
        var fileName = fileInput.files[0] ? fileInput.files[0].name : "Ninguna imagen seleccionada";
        if (fileName === "Ninguna imagen seleccionada"){
            document.getElementById('nombreImagen').textContent = fileName;
        }else{
            document.getElementById('nombreImagen').innerHTML = `<img id="ay" width="330px" src="${resultado}" alt=""></img>`
        }
    }

    
    
}
