var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var prompt = function(texto) { return lines.shift();};

let array = []

for (let i = 19; i >= 0; i--) {

    let x = parseInt(prompt())
    array[i] = x

}

for (let j = 0; j <= 19; j++) {
    
    console.log(`N[${j}] = ${array[j]}`)
}
