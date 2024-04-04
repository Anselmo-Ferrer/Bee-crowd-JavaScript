var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var prompt = function(texto) { return lines.shift();};

for (let i = 0; i < 10; i++) {
    let x = parseInt(prompt())

    if (x === 0) {
        x = 1;
    }

    else if ( x < 0) {
        x = 1;
    }

    else {
        x = x;
    }

    console.log(`X[${i}] = ${x}`)
}
