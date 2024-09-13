import fs from "fs";
import {onEvent,startServer} from "soquetic";


function registrarse(info){
    let nombre = info.usuario;
    let email = info.mail;
    let contraseña = info.contraseña;
    if (nombre.length > 3 && contraseña.length > 3){
        if (email.endsWith(".com") && email.includes("@") && !email.startsWith("@")){

            let user = {}
            user.nombre = nombre;
            user.contraseña = contraseña;
            user.email = email;
            let usuarios = JSON.parse(fs.readFileSync("DATOS/usuarios.json","utf-8"));
            usuarios.push(user);
            fs.writeFileSync("DATOS/usuarios.json",JSON.stringify(usuarios));
            return {ok:true, user: user.nombre};
        }else{
            return {ok:false, msg:"Ingrese un correo válido."};
        }
    }else{
        return {ok:false, msg: "El usuario y la contraseña deben tener más de tres caracteres."};
    }
}


function iniciarSesion(info){
    let emailOusuario = info.emailOusuario;
    let contraseña = info.contraseña;
    let usuarios = JSON.parse(fs.readFileSync("DATOS/usuarios.json"));
    for (let i of usuarios){
        if (emailOusuario === i.nombre || emailOusuario === i.email){
            if (contraseña === i.contraseña){
                console.log(`Bienvenido, ${i.nombre}`);
                return {ok: true, user: i.nombre};
            }
        }
    }
    console.log("Usuario o contraseña incorrectos");
    return {ok:false};
}

onEvent("registrarse",registrarse);
onEvent("login",iniciarSesion);

startServer();