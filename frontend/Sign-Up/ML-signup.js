let usuario  = document.getElementById("usuario");
let mail = document.getElementById("mail");
let contraseña = document.getElementById("contraseña");
let button = document.getElementById("login");




button.addEventListener("click",()=>{
    let info = {
        usuario : usuario.value,
        mail : mail.value,
        contraseña : contraseña.value
    }
    postData("registrarse", info, registrado);
})

function registrado(info){
    if (info.ok){
        localStorage.setItem("user",info.user);
        location.href = "../Articulos-Publicados/ML-Articulos.html";
    }else{
        alert(info.msg);
    }
}