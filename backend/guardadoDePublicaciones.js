// /* atributos del objeto van a ser: nombre, ft, materia, descripcion, año(3ro), nombre de usuario(se hace en el login),
// mail del vendedor, telefono */
import fs from "fs";
import {onEvent,startServer} from "soquetic";
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
    let descripcion = info.descripcion;
    let año = info.año;
    let nombreDeUsuario = info.nombreDeUsuario;
    let mail = info.mail;
    let numero = info.numero;

    let datos = {
        nombre:nombre,
        foto:foto,
        materia:materia,
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

startServer();
