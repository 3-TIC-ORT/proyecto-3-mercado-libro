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
const botonSubirImagen = document.getElementById("upload")

abrirModalPublicar.addEventListener("click", () => {
    modalPublicar.showModal()
})

modalPublicar.addEventListener("click", e => {
    const dimensionesModalPublicar = modalPublicar.getBoundingClientRect()
    if (
        e.clientX < dimensionesModalPublicar.left ||
        e.clientX > dimensionesModalPublicar.right ||
        e.clientY < dimensionesModalPublicar.top ||
        e.clientY > dimensionesModalPublicar.bottom
    ) {
        modalPublicar.close()
    }
})

botonSubirImagen.addEventListener("click", e => {
    e.stopImmediatePropagation();
});

const modalLibros = document.querySelector(".graciasIvoLibros")
modalLibros.addEventListener("click", e => {
    const dimensionesModalLibros = modalLibros.getBoundingClientRect()
    if (
        (e.clientX < dimensionesModalLibros.left ||
        e.clientX > dimensionesModalLibros.right ||
        e.clientY < dimensionesModalLibros.top ||
        e.clientY > dimensionesModalLibros.bottom) &&
        e
    ) {
        modalLibros.close()
    }
})

/////////////////////////////////////////// PARTE DIALOG ////////////////////////////////////////////

////////////////////////// SEPTIMO /////////////////////////////////////
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

////////////////////////// PRIMERO AÑO /////////////////////////////////////

const cambiarDialogPrimero = document.querySelector(".dialogAbrirPrimero")
const dialogPimero = document.querySelector(".dialogPrimero")

cambiarDialogPrimero.addEventListener("mouseover", () => {
    dialogPimero.show()
})
cambiarDialogPrimero.addEventListener("mouseout", () => {
    dialogPimero.close()
})
dialogPimero.addEventListener("mouseover", () => {
    dialogPimero.show()
})
dialogPimero.addEventListener("mouseout", () => {
    dialogPimero.close()
})

////////////////////////// SEGUNDO AÑO /////////////////////////////////////

const cambiarDialogSegundo = document.querySelector(".dialogAbrirSegundo")
const dialogSegundo = document.querySelector(".dialogSegundo")

cambiarDialogSegundo.addEventListener("mouseover", () => {
    dialogSegundo.show()
})
cambiarDialogSegundo.addEventListener("mouseout", () => {
    dialogSegundo.close()
})
dialogSegundo.addEventListener("mouseover", () => {
    dialogSegundo.show()
})
dialogSegundo.addEventListener("mouseout", () => {
    dialogSegundo.close()
})


////////////////////////// TERCER AÑO /////////////////////////////////////

const cambiarDialogTercero = document.querySelector(".dialogAbrirTercero")
const dialogTercero = document.querySelector(".dialogTercero")

cambiarDialogTercero.addEventListener("mouseover", () => {
    dialogTercero.show()
})
cambiarDialogTercero.addEventListener("mouseout", () => {
    dialogTercero.close()
})
dialogTercero.addEventListener("mouseover", () => {
    dialogTercero.show()
})
dialogTercero.addEventListener("mouseout", () => {
    dialogTercero.close()
})

////////////////////////// CUARTO AÑO /////////////////////////////////////

const cambiarDialogCuarto = document.querySelector(".dialogAbrirCuarto")
const dialogCuarto = document.querySelector(".dialogCuarto")

cambiarDialogCuarto.addEventListener("mouseover", () => {
    dialogCuarto.show()
})
cambiarDialogCuarto.addEventListener("mouseout", () => {
    dialogCuarto.close()
})
dialogCuarto.addEventListener("mouseover", () => {
    dialogCuarto.show()
})
dialogCuarto.addEventListener("mouseout", () => {
    dialogCuarto.close()
})

////////////////////////// QUINTO AÑO /////////////////////////////////////

const cambiarDialogQuinto = document.querySelector(".dialogAbrirQuinto")
const dialogQuinto = document.querySelector(".dialogQuinto")

cambiarDialogQuinto.addEventListener("mouseover", () => {
    dialogQuinto.show()
})
cambiarDialogQuinto.addEventListener("mouseout", () => {
    dialogQuinto.close()
})
dialogQuinto.addEventListener("mouseover", () => {
    dialogQuinto.show()
})
dialogQuinto.addEventListener("mouseout", () => {
    dialogQuinto.close()
})

////////////////////////// INGLES /////////////////////////////////////

const cambiarDialogIngles = document.querySelector(".dialogAbrirIngles")
const dialogIngles = document.querySelector(".dialogIngles")

cambiarDialogIngles.addEventListener("mouseover", () => {
    dialogIngles.show()
})
cambiarDialogIngles.addEventListener("mouseout", () => {
    dialogIngles.close()
})
dialogIngles.addEventListener("mouseover", () => {
    dialogIngles.show()
})
dialogIngles.addEventListener("mouseout", () => {
    dialogIngles.close()
})


/////////////////////////////////////// PARTE DE PUBLICACIONES EN INGLES /////////////////////////////////////////


let materias = {
    "Séptimo grado": ["Lengua", "Ciencias Sociales", "Ciencias Naturales", "Educación Judía", "Hebreo"],
    "Primer año": ["Lengua", "Geografía", "Ética", "Biología", "Historia", "Educación Judía", "Hebreo"],
    "Segundo año": ["Lengua", "Geografía", "Ética", "Biología", "Historia", "Educación Judía", "Hebreo"],
    "Tercer año": ["Lengua", "Geografía", "Ética", "Biología", "Historia", "Educación Judía", "Hebreo"],
    "Cuarto año": ["Lengua", "Geografía", "Ética", "Historia", "Educación Judía", "Hebreo"],
    "Quinto año": ["Lengua", "Historia", "Educación Judía", "Hebreo"]
}
let materiasIngles = ["Key", "Preliminary", "Teens 5", "Pre First", "First", "Pre Advanced", "Advanced", "Pre Proficiency", "Proficiency"]

document.getElementById("año").addEventListener("change",()=>{
    if (document.getElementById("año").value === "Inglés"){
        let materiaPublicar = document.getElementById("materia");
        materiaPublicar.innerHTML = `<option value="" disabled selected>Nivel</option>`;
        materiasIngles.forEach(materiaIngles => {
            materiaPublicar.innerHTML += `<option value="${materiaIngles}">${materiaIngles}</option>`;
        });
    }else{
        let materiaPublicar = document.getElementById("materia");
        materiaPublicar.innerHTML = `<option value="" disabled selected>Materia</option>`;
        materias[document.getElementById("año").value].forEach(materiaNormal => {
            materiaPublicar.innerHTML += `<option value="${materiaNormal}">${materiaNormal}</option>`;
        });
    }
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
        let nmbre = "" 
        if (i.nombre.length > 16){
            for(let f = 0; f<=15; f++){
                nmbre += i.nombre[f];
            }
            nmbre+= "..."
        }
        else{
            nmbre = i.nombre;
        }
        publicados.innerHTML = publicados.innerHTML + `<div class="libros" id="${i.id}"><div class="imagen"><img src="${i.foto}" class="img" alt=""></div><div class="info"><h6 class="nombre">${nmbre}</h6><h6 class="precio">${i.precio}</h6></div></div>`
    }
    let libritos = document.querySelectorAll(".libros");
    for (let i of libritos){
        i.addEventListener("click",()=>{
            postData("clickLibro",Number(i.id),(info)=>{
                let nombreLibros = document.getElementById("nombreLibros");
                let precioLibros = document.getElementById("precioLibros");
                let materiaLibros = document.getElementById("materiaLibros");
                let añoLibros = document.getElementById("añoLibros");
                let descripcionLibros = document.getElementById("descripcionLibros");
                let imgDeLibros = document.getElementById("imgDeLibros");
                let datosDeLibros = document.getElementById("datosDeLibros");
                let infoTelLibros = document.getElementById("infoTelLibros");
                let infoMailLibros = document.getElementById("infoMailLibros");
                nombreLibros.textContent = info.nombre;
                precioLibros.textContent = info.precio;
                materiaLibros.textContent = info.materia;
                añoLibros.textContent = info.año;
                descripcionLibros.textContent = info.descripcion;
                imgDeLibros.src = info.foto;
                datosDeLibros.textContent = info.nombreDeUsuario;
                infoTelLibros.textContent = info.numero;
                infoMailLibros.textContent = info.mail;
                modalLibros.showModal()
            })
            
        })
    }
    let nombres = document.querySelectorAll(".nombre");
    for(let i of nombres){
        if(i.offsetHeight > 35){
            let nome = i.textContent;
            let nuevoNome = "";
            for (let v = 0; v < 8; v++){
                nuevoNome += nome[v];
            }
            i.textContent = nuevoNome + "..."
        }
    }
}

///////// PARTE FUNCIONALIDAD (PARTE DE TOMAR LOS DATOS DE LOS INPUTS Y METERLOS EN OBJETOS Y PASARSELOS AL BACK)/////

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
    }else if(Number(precio.value) == 0 || Number(precio.value) > 999999){
        alert("El precio debe ser de entre $1 y $999999");
    }else{
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
            document.getElementById('nombreImagen').innerHTML = `<img id="ay" src="${resultado}" alt=""></img>`
        }
    }
}
