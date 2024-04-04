var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var prompt = function(texto) { return lines.shift();};

let partidas = 0 
let inter = 0
let gremio = 0
let empate = 0

while (true) {

    var entrada = prompt("XXXXX");
    
    var [a,b] = entrada.split(" ");
    
    a = parseInt(a);
    
    b = parseInt(b);

    if (a > b) {
        inter += 1
    } 

    else if (b > a) {
        gremio += 1
    }

    partidas += 1

    console.log(`Novo grenal (1-sim 2-nao)`)
    let novo = parseInt(prompt())

    if (novo === 2) {
        break;
    }
}

console.log(`${partidas} grenais`)
console.log(`Inter:${inter}`)
console.log(`Gremio:${gremio}`)
console.log(`Empates:${empate}`)


if (inter>gremio) {
    console.log(`Inter venceu mais`)
}

else if (gremio>inter) {
    console.log(`Gremio venceu mais`)
}

else {
    console.log(`Nao houve vencedor`)
}
