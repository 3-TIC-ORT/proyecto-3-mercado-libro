import fs from "fs";

function registrarse(nombre,email,contraseña){
    if (nombre.length >3 && contraseña.length > 3){
        if (email.endsWith(".com") && email.includes("@") && !email.startsWith("@")){

            let user = {}
            user.nombre = nombre;
            user.contraseña = contraseña;
            user.email = email;
            let usuarios = JSON.parse(fs.readFileSync("USUARIOS/usuarios.json","utf-8"));
            usuarios.push(user);
            fs.writeFileSync("USUARIOS/usuarios.json",JSON.stringify(usuarios));
            return true;
        }else{
            return false;
        }
    }else{
        return false;
    }
}


function iniciarSesion(emailOusuario, contraseña){
    let usuarios = JSON.parse(fs.readFileSync("USUARIOS/usuarios.json"));
    for (let i of usuarios){
        if (emailOusuario === i.nombre || emailOusuario === i.email){
            if (contraseña === i.contraseña){
                console.log(`Bienvenido, ${i.nombre}`);
                return true;
            }
        }
    }
    console.log("Usuario o contraseña incorrectos");
    return false;
}

