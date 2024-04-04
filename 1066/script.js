var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var prompt = function(texto) { return lines.shift();};


let pares = 0
let impar = 0
let positivos = 0
let negativos = 0

for (let i = 1; i <= 5; i++) {
    let x = parseInt(prompt())

    if ( x % 2 === 0) {
        pares += 1
    }

    if ( x % 2 !== 0) {
        impar += 1
    }

    if ( x > 0) {
        positivos += 1
    }

    if ( x < 0) {
        negativos += 1
    }



}

console.log(`${pares} valor(es) par(es)`)
console.log(`${impar} valor(es) impar(es)`)
console.log(`${positivos} valor(es) positivo(s)`)
console.log(`${negativos} valor(es) negativo(s)`)

