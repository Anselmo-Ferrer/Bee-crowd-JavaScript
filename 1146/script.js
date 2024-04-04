var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var prompt = function(texto) { return lines.shift();};


while (true) {
    let result = ""; 
    let x = parseInt(prompt())

    if (x === 0) {
        break;
    }

    for (let i = 1; i <= x; i++) {
    
        result += i; 

        if (i < x) {
            result += " "; 
        }
    }
    
    console.log(result)
}
