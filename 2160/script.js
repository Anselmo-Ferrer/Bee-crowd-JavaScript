var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var prompt = function(texto) { return lines.shift();};

let x = prompt()

if (x.length > 80) {
     console.log('NO')
}

else {
     console.log('YES')
}
