var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var prompt = function(texto) { return lines.shift();};

let [a, b] = lines[0].split(' ').map(e => parseInt(e));

if (a != b && a>b) {
    console.log(a)
}

if ( a != b && b>a) {
    console.log(b)
}

if (a === b) {
    console.log(a)
}
