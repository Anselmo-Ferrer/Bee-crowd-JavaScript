var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var prompt = function(texto) { return lines.shift();};

let l = parseInt(prompt())
let c = parseInt(prompt())

let branco = 1;
let preto = 0;

if (l % 2 === 1 && c % 2 === 1) {
    console.log(branco)
}

else if (l % 2 === 0 && c % 2 === 0) {
    console.log(branco)
}

else if (l % 2 === 0 && c % 2 === 1) {
    console.log(preto)
}

else if (l % 2 === 1 && c % 2 === 0) {
    console.log(preto)
}

else {
    console.log(`erro`)
}