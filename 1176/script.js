var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var prompt = function(texto) { return lines.shift();};

let a = 0;
let b = 1;
let c = 0;

let result = ""; 

for (let i = 0; i <= 60; i++) {
    
    result += a;
    
    if (i < 60) {
        result += " "; 
    }

    c = a + b
    a = b
    b = c
    
}

let array = result.split(" ")

let x = parseInt(prompt())

for (let i = 1; i <= x; i++) {
    let z = parseInt(prompt())
    console.log(`Fib(${z}) = ${array[z]}`)
}
