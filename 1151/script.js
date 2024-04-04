var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var prompt = function(texto) { return lines.shift();};

let a = 0;
let b = 1;
let c = 0;

let result = ""; 

let x = parseInt(prompt())

for (let i = 1; i <= x; i++) {
    
    result += a; 
    
    if (i < x) {
        result += " "; 
    }

    c = a + b
    a = b
    b = c
    
}

console.log(result);
