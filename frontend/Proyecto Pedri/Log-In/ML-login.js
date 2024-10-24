let btnInicioSesion = document.getElementById("login");
let usuario = document.getElementById("usuario");
let contraseña = document.getElementById("contraseña");


window.addEventListener("pageshow",()=>{
    document.reload()
})



function receiveLogin(info){
    if (info.ok === true){
        console.log(`Bienvenido, ${info.user}`);
        localStorage.setItem("user",info.user);
        location.href = "../Articulos-Publicados/ML-Articulos.html";
    }else{
        console.log("Usuario o contraseña incorrectos");
    }
}


function sendLogin(){
    let dict = {}
    dict.emailOusuario = usuario.value;
    dict.contraseña = contraseña.value;
    postData("login",dict,receiveLogin);
}



btnInicioSesion.addEventListener("click",sendLogin);