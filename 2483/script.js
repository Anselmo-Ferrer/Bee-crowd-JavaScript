var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var prompt = function(texto) { return lines.shift();};

let x = parseInt(prompt())
let natal = ""

for (let i = 1; i <= x; i++) {

    natal += "a"

}

console.log(`Feliz nat${natal}l!`)