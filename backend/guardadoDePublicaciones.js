// /* atributos del objeto van a ser: nombre, ft, materia, descripcion, año(3ro), nombre de usuario(se hace en el login),
// mail del vendedor, telefono */
import fs from "fs";
function publicar(nombre,foto,materia,descripcion,año,nombreDeUsuario,mail,numero){
    let numerito;
    let leido = fs.readFileSync("../publisSubidas.json","utf-8");
    leido= JSON.parse(leido);
    if(leido.length===0){
        numerito=0;
    }else{
        numerito= leido[leido.length-1].id + 1;
    }

    let datos = {
        nombre: nombre,
        foto: foto,
        materia: materia,
        descripcion: descripcion,
        año:año,
        nombreDeUsuario: nombreDeUsuario,
        mail: mail,
        numero: numero,
        id: numerito
    }
    let elJson= fs.readFileSync("../publisSubidas.json","utf-8");
    elJson=JSON.parse(elJson);
    elJson.push(datos);
    fs.writeFileSync("../publisSubidas.json",JSON.stringify(elJson));
}

//ELIMINAR PUBLICACIONES:

function eliminar(id){
    let publicaciones = fs.readFileSync("../publisSubidas.json","utf-8");
    publicaciones = JSON.parse(publicaciones);
    let nuevaLista = [];
    for(let i of publicaciones){
        if(i.id != id){
            nuevaLista.push(i);
        }
    }
    fs.writeFileSync("../publisSubidas.json",JSON.stringify(nuevaLista));
}
