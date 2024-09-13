nombre = document.getElementById("nombre");
materia = document.getElementById("materia");
descripcion = document.getElementById("descripcion"); 
año = document.getElementById("año");
nombreUsuario = document.getElementById("nombreUsuario"); 
mail = document.getElementById("mail");
numero = document.getElementById("numero");
document.getElementById("btn").addEventListener("click",write);

function write(){
    let info = {
    nombre: nombre.value,
    materia: materia.value,
    descripcion: descripcion.value,
    año: año.value,
    nombreUsuario: nombreUsuario.value,
    mail: mail.value,
    numero: numero.value,
}
    console.log(info);
    postData("publicar",info);
}