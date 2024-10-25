let resultado = "";
//////////////////////PARA VOLVER AL LOGIN SI NO SE ESTÁ REGISTRADO ///////////////////////////
window.addEventListener("pageshow",()=>{
    document.reload()
    let condiciones = JSON.parse(localStorage.getItem("condiciones"))
    condiciones["nombreDeUsuario"] = localStorage.getItem("user");
    localStorage.setItem("condiciones",JSON.stringify(condiciones))
})
let condiciones = JSON.parse(localStorage.getItem("condiciones"))
condiciones["nombreDeUsuario"] = localStorage.getItem("user");
localStorage.setItem("condiciones",JSON.stringify(condiciones))

if (localStorage.getItem("user") === "-" || localStorage.getItem("user") == null){
    location.href = '../Log-In/ML-login.html';
}



postData("pedirMisLibros",localStorage.getItem("user"),mostrarMis);
let listaDeLibros;
function mostrarMis(misLibros){
    listaDeLibros = misLibros;
        let publicados = document.getElementById("publicadosinvisible");
        publicados.innerHTML = "";
        for (let i of listaDeLibros){
            publicados.innerHTML = publicados.innerHTML + `<div class="libros"><div class="imagen"><img src="${i.foto}" class="img" alt=""></div><div class="eliminar" id="${i.id + "-"}"><img src="bote-de-basura.png" class="tacho"></div><div class="info"><h6 class="nombre">${i.nombre}</h6><h6 class="precio">${i.precio}</h6></div></div>`
            
        }
        let botones = document.querySelectorAll(".eliminar")
        for (let i of botones){
            i.addEventListener("click",()=>{
                let elID = ""
                for(let w of i.id){
                    if (w != "-"){
                        elID += w;
                    }
                }
                postData("eliminar",elID,()=>{document.reload()})
            })
        }
}
///////////////////// PARA CERRAR CESIÓN ////////////////////////
let btnCerrarSesion = document.getElementById("botonCerrarSesion");

btnCerrarSesion.addEventListener("click",()=>{
    localStorage.setItem("user","-");
    location.href = '../Log-In/ML-login.html'
})
