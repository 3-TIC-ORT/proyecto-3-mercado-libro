let publicacionesTotales = [];
let input = document.getElementById("buscador");
// let lupita= document.getElementById("lupita"); TODO: ESTO ESTA COMENTADO PQ HAY Q CREAR EL BOTON LUPITA
let focus = false;
let publicacionesValidas = [];

// esta funcion se llama al presionar "enter", posteriormente tambien el boton buscar
function buscar(){
    publicacionesValidas = [];
    for(let i of publicacionesTotales){
        if(i.includes(input.value)){
            publicacionesValidas.push(i);
        }
    }
    console.log(publicacionesValidas)
}

//todo esto sirve para que al presionar enter se llame a la funcion
input.addEventListener("keydown",function(event){
    if(event.key=== "Enter" && focus){
        buscar();
    }
});
input.addEventListener("focus",function(){
    focus = true; 
})
input.addEventListener("blur",function(){
    focus = false; 
})
// lupita.addEventListener("click",buscar); TODO::ACA TAMBIEN, HAY QUE CREAR EL BTN DE LUPITA PARA ACTIVARLO