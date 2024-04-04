var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');


var prompt = function(texto) { return lines.shift();};


let x = parseInt(prompt())

let dentro = 0
let fora = 0

for (let i = 1; i <= x; i++) {
    let valor = parseInt(prompt())

    if (valor >= 10 & valor <= 20) {
        dentro += 1
    }

    else {
        fora += 1
    }

}

console.log(`${dentro} in`)
console.log(`${fora} out`)
