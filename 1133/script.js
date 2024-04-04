var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var prompt = function(texto) { return lines.shift();};

let x = parseInt(prompt())
let y = parseInt(prompt())

let maior;
let menor;

if (x>y) {
    maior = x
    menor = y
}

else {
    maior = y
    menor = x
}

for (let i = menor+1; i < maior; i++) {
     if (i%5 === 2) {
          console.log(i)
     }

     if (i%5 === 3) {
          console.log(i)
     }
}
