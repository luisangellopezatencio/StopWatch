const start = document.querySelector("#start");
const parar = document.querySelector("#stop");
const reset = document.querySelector("#reset");
const lap = document.querySelector("#lap");
let milseg = document.querySelector("#milseg");
let segundos = document.querySelector("#segundos");
let minutos = document.querySelector("#minutos");
let i = 0;
let j = 0;
let k = 0;
let n = 0;
let segundero;

function ContarSegundos(){
    i++;
    milseg.textContent = i.toString().padStart(2,0);
    if (i == 100) {
        i = 0;
        j++;
        segundos.textContent = j.toString().padStart(2,0);
        if (j == 59) {
            j = 0;
            k++;
            minutos.textContent = k.toString().padStart(2,0);
        }
    }
}
 function allceros() {
    i=0;
    j=0;
    k=0;
    n=0;
    milseg.textContent = i.toString().padStart(2,0);
    segundos.textContent = j.toString().padStart(2,0);
    minutos.textContent = k.toString().padStart(2,0);
}

function GuardarTiempo() {
    n++;
    let li = document.createElement("li");
    let ul = document.querySelector(".Lista-de-vueltas");
    ul.insertBefore(li, ul.childNodes[-1]);
    li.className = "remover"
    li.textContent = "Vuelta "+ n.toString()+": " + k.toString().padStart(2,0)+":"+ j.toString().padStart(2,0)+":"+ i.toString().padStart(2,0);
}

function borrarLista() {
    let ul = document.querySelector(".Lista-de-vueltas");
    let li = document.querySelector(".remover");
    for (let m = 0; m < ul.childNodes.length+100; m++) {
        ul.removeChild(li);
        li = document.querySelector(".remover");
    }
}

start.onclick = function() {
    segundero = setInterval(ContarSegundos,10);
    start.disabled = true;
}

lap.onclick = function(){
    GuardarTiempo();
 }

reset.onclick = function() {
    allceros();
    borrarLista();
}

parar.onclick = function() {
    clearInterval(segundero);
    //Liberar el segundero de la variable
    segundero = null;
    start.disabled = false;
 } 

