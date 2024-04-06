var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var prompt = function(texto) { return lines.shift();};

let x = parseInt(prompt())

for (let i = 0; i < x; i++) {
    
    let a = prompt()

    if (a.length >= 0) {
        console.log(`I am Toorg!`)
    }
}