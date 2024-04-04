var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var prompt = function(texto) { return lines.shift();};

let x = parseInt(prompt())

if (x === 1) {
    console.log(`January`)
}

else if (x === 2) {
    console.log(`February`)
}

else if (x === 3) {
    console.log(`March`)
}

else if (x === 4) {
    console.log(`April`)
}

else if (x === 5) {
    console.log(`May`)
}

else if (x === 6) {
    console.log(`June`)
}

else if (x === 7) {
    console.log(`July`)
}

else if (x === 8) {
    console.log(`August`)
}

else if (x === 9) {
    console.log(`September`)
}

else if (x === 10) {
    console.log(`October`)
}

else if (x === 11) {
    console.log(`November`)
}

else if (x === 12) {
    console.log(`December`)
}

else {
    console.log(`mes invalido`)
}

