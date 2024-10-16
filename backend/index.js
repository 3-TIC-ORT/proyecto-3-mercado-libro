import fs from "fs";
import {onEvent,startServer} from "soquetic";

//PARTE DE LEO
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

//PARTE DE BATTI

onEvent("publicar", publicar)

function publicar(info){
    let numerito;
    let leido = fs.readFileSync("DATOS/publisSubidas.json","utf-8");
    leido= JSON.parse(leido);
    if(leido.length===0){
        numerito=0;
    }else{
        numerito= leido[leido.length-1].id + 1;
    }
    let nombre = info.nombre;
    let foto = info.foto;
    let materia = info.materia;
    let precio = info.precio;
    let descripcion = info.descripcion;
    let año = info.año;
    let nombreDeUsuario = info.nombreDeUsuario;
    let mail = info.mail;
    let numero = info.numero;

    let datos = {
        nombre:nombre,
        foto:foto,
        materia:materia,
        precio:precio,
        descripcion:descripcion,
        año:año,
        nombreDeUsuario:nombreDeUsuario,
        mail:mail,
        numero:numero,
        id:numerito
    }

    leido.push(datos);
    fs.writeFileSync("DATOS/publisSubidas.json",JSON.stringify(leido));
    return true
}


//ELIMINAR PUBLICACIONES:
onEvent("eliminar",eliminar);
function eliminar(id){
    let publicaciones = fs.readFileSync("DATOS/publisSubidas.json","utf-8");
    publicaciones = JSON.parse(publicaciones);
    let nuevaLista = [];
    for(let i of publicaciones){
        if(i.id != id){
            nuevaLista.push(i);
        }
    }
    fs.writeFileSync("DATOS/publisSubidas.json",JSON.stringify(nuevaLista));
}
// ENVIAR LIBROS
onEvent("pedirLibros",()=>{
    let publicaciones = fs.readFileSync("DATOS/publisSubidas.json","utf-8");
    publicaciones = JSON.parse(publicaciones);
    return publicaciones
})
startServer();