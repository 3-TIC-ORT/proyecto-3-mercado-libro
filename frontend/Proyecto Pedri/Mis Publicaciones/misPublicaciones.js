postData("pedirMisLibros",localStorage.getItem("user"),mostrarMis);
let listaDeLibros;
function mostrarMis(misLibros){
    listaDeLibros = misLibros;
        let publicados = document.getElementById("publicadosinvisible");
        publicados.innerHTML = "";
        for (let i of listaDeLibros){
            publicados.innerHTML = publicados.innerHTML + `<div class="libros"><div class="imagen"><img src="${i.foto}" class="img" alt=""></div><div class="eliminar" id="${i.id}"><img src="bote-de-basura.png" class="tacho"></div><div class="info"><h6 class="nombre">${i.nombre}</h6><h6 class="precio">${i.precio}</h6></div></div>`
            
        }
        let botones = document.querySelectorAll(".eliminar")
        for (let i of botones){
            i.addEventListener("click",()=>{
                postData("eliminar",i.id,()=>{document.reload()})
            })
        }
}
///////////////////// PARA CERRAR CESIÓN ////////////////////////
let btnCerrarSesion = document.getElementById("botonCerrarSesion");

btnCerrarSesion.addEventListener("click",()=>{
    localStorage.setItem("user","-");
    location.href = '../Log-In/ML-login.html'
})
