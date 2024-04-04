var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');


var prompt = function(texto) { return lines.shift();};

var entrada = prompt("XXXXX");

var [A,B,C] = entrada.split(" ");

h = parseInt(A);

z = parseInt(B);

l = parseInt(C);


if (l>z && z>h || h>z && z>l) {
    console.log(`zezinho`)
}

else if (z>l && l>h || h>l && l>z) {
    console.log(`luisinho`)
}

else if (z>h && h>l || l>h && h>z) {
    console.log(`huguinho`)
}

else {
    console.log(`erro`)
}
