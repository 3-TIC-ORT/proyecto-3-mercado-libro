let input = document.getElementById("buscador");
let publicadosinvisible = document.getElementById("publicadosinvisible")

localStorage.setItem("condiciones",JSON.stringify({}))
window.addEventListener("pageshow",()=>{
    document.reload()
})

//CONDICIONES EN EL LOCALSTORAGE
let botonesGrados = document.querySelectorAll(".grados")
for(let i of botonesGrados){
    i.addEventListener("click",()=>{
        let condiciones = JSON.parse(localStorage.getItem("condiciones"))
        condiciones["año"] = i.id;
        if (Object.hasOwn(condiciones,"materia")){
            delete condiciones["materia"];
        }
        console.log(condiciones)
        localStorage.setItem("condiciones",JSON.stringify(condiciones))
        clickaño()
    })
}

let botonesMaterias = document.querySelectorAll(".materias");
for (let i of botonesMaterias){
    i.addEventListener("click",()=>{
        let condiciones = JSON.parse(localStorage.getItem("condiciones"));
        condiciones["materia"] = i.id;
        condiciones["año"] = i.parentNode.parentNode.previousSibling.previousSibling.id;
        localStorage.setItem("condiciones",JSON.stringify(condiciones));
        clickaño()
    })
}

// let lupita= document.getElementById("lupita"); TODO: ESTO ESTA COMENTADO PQ HAY Q CREAR EL BOTON LUPITA
let focus = false;
let publicacionesValidas = [];

// esta funcion se llama al presionar "enter", posteriormente tambien el boton buscar
function buscar1(){
    let condiciones = JSON.parse(localStorage.getItem("condiciones"))
    postData("buscador",condiciones,buscar2)
}


function clickaño(){
    let condiciones = JSON.parse(localStorage.getItem("condiciones"))
    postData("buscador",condiciones,(publicaciones)=>{
        crearLibros(publicaciones)
    })
}

function buscar2(publicacionesTotales){
    publicacionesValidas = [];
    for(let i of publicacionesTotales){
        if(i.nombre.toLowerCase().includes(input.value.toLowerCase())){
            publicacionesValidas.push(i);
        }
    }
    if(publicacionesValidas.length === 0){
        console.log("no se encontraron coincidencias")
    }
    crearLibros(publicacionesValidas)
}

//todo esto sirve para que al presionar enter se llame a la funcion
input.addEventListener("keydown",function(event){
    if(event.key=== "Enter" && focus){
        buscar1();
    }
});
input.addEventListener("focus",function(){
    focus = true; 
})
input.addEventListener("blur",function(){
    focus = false; 
})
// lupita.addEventListener("click",buscar); TODO::ACA TAMBIEN, HAY QUE CREAR EL BTN DE LUPITA PARA ACTIVARLO
//FILTRADOOO
function crearLibros(libros){
    listaDeLibros = libros;
    console.log(listaDeLibros)
    let publicados = document.getElementById("publicadosinvisible");
    publicados.innerHTML = "";
    let condiciones = JSON.parse(localStorage.getItem("condiciones"))
    if (Object.hasOwn(condiciones,"nombreDeUsuario")){
        for (let i of listaDeLibros){
            let nmbre = "" 
            if (i.nombre.length > 25){
                for(let f = 0; f<=24; f++){
                    nmbre += i.nombre[f];
                }
                nmbre+= "..."
            }
            else{
                nmbre = i.nombre;
            }
            publicados.innerHTML = publicados.innerHTML + `<div class="libros" id="${i.id}"><div class="imagen"><img src="${i.foto}" class="img" alt=""></div><div class="eliminar" id="${i.id + "-"}"><img src="./imagenes/bote-de-basura.png" class="tacho"></div><div class="info"><h6 class="nombre">${nmbre}</h6><h6 class="precio">${i.precio}</h6></div></div>`
                
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
    }else{
        for (let i of listaDeLibros){
            let nmbre = "" 
            if (i.nombre.length > 15){
                for(let f = 0; f<=14; f++){
                    nmbre += i.nombre[f];
                }
                nmbre+= "..."
            }
            else{
                nmbre = i.nombre;
            }
            publicados.innerHTML = publicados.innerHTML + `<div class="libros" id="${i.id}"><div class="imagen"><img src="${i.foto}" class="img" alt=""></div><div class="info"><h6 class="nombre">${nmbre}</h6><h6 class="precio">${i.precio}</h6></div></div>`
        }
    }
    let libritos = document.querySelectorAll(".libros");
    for (let i of libritos){
        i.addEventListener("click",()=>{
            postData("clickLibro",Number(i.id),(info)=>{
                let nombreLibros = document.getElementById("nombreLibros");
                let precioLibros = document.getElementById("precioLibros");
                let materiaLibros = document.getElementById("materiaLibros");
                let añoLibros = document.getElementById("añoLibros");
                let descripcionLibros = document.getElementById("descripcionLibros");
                let imgDeLibros = document.getElementById("imgDeLibros");
                let datosDeLibros = document.getElementById("datosDeLibros");
                let infoTelLibros = document.getElementById("infoTelLibros");
                let infoMailLibros = document.getElementById("infoMailLibros");
                nombreLibros.textContent = info.nombre;
                precioLibros.textContent = info.precio;
                materiaLibros.textContent = info.materia;
                añoLibros.textContent = info.año;
                descripcionLibros.textContent = info.descripcion;
                imgDeLibros.src = info.foto;
                datosDeLibros.textContent = info.nombreDeUsuario;
                infoTelLibros.textContent = info.numero;
                infoMailLibros.textContent = info.mail;
                modalLibros.showModal()
            })
        })
    }
    let nombres = document.querySelectorAll(".nombre");
    for(let i of nombres){
        if(i.offsetHeight > 35){
            let nome = i.textContent;
            let nuevoNome = "";
            for (let v = 0; v < 8; v++){
                nuevoNome += nome[v];
            }
            i.textContent = nuevoNome + "..."
        }
    }
}


//////// PARA MODAL DEL LIBRO /////////////





