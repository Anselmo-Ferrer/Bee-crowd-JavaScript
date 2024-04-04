var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var prompt = function(texto) { return lines.shift();};

let total = 0;

let coelhos = 0
let ratos = 0
let sapos = 0

let x = parseInt(prompt('numero de casos: '))

for (let i = 1; i <= x; i++) {
    
    var entrada = prompt("XXXXX");

    var [a,b] = entrada.split(" ");
    
    a = parseInt(a);
    
    b = String(b);

    if ( b.toUpperCase() === 'C') {
        coelhos += a
    }

    if ( b.toUpperCase() === 'R') {
        ratos += a
    }

    if ( b.toUpperCase() === 'S') {
        sapos += a
    }
    
    total += a
}

console.log(`Total: ${total} cobaias`)

console.log(`Total de coelhos: ${coelhos}`)
console.log(`Total de ratos: ${ratos}`)
console.log(`Total de sapos: ${sapos}`)

console.log(`Percentual de coelhos: ${((coelhos/total) *  100).toFixed(2)} %`)
console.log(`Percentual de ratos: ${((ratos/total) *  100).toFixed(2)} %`)
console.log(`Percentual de sapos: ${((sapos/total) *  100).toFixed(2)} %`)
