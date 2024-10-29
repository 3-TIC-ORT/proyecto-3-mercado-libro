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
            publicados.innerHTML = publicados.innerHTML + `<div class="libros" id="${i.id}"><div class="imagen"><img src="${i.foto}" class="img" alt=""></div><div class="eliminar" id="${i.id + "-"}"><img src="bote-de-basura.png" class="tacho"></div><div class="info"><h6 class="nombre">${i.nombre}</h6><h6 class="precio">${i.precio}</h6></div></div>`
            
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
            publicados.innerHTML = publicados.innerHTML + `<div class="libros" id="${i.id}"><div class="imagen"><img src="${i.foto}" class="img" alt=""></div><div class="info"><h6 class="nombre">${i.nombre}</h6><h6 class="precio">${i.precio}</h6></div></div>`
        }
    }
    
}


//////// PARA MODAL DEL LIBRO /////////////





