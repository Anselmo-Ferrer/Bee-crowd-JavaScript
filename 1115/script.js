var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var prompt = function(texto) { return lines.shift();};

while (true) { 
    var entrada = prompt("XXXXX");

    var [x,y] = entrada.split(" ");

    x = parseInt(x);
    y = parseInt(y);

    if (x === 0 || y === 0) { 
        break;
    }

    if (x > 0 && y > 0) { 
        console.log('primeiro');
    }
    else if (x < 0 && y > 0) { 
        console.log('segundo');
    }
    else if (x < 0 && y < 0) { 
        console.log('terceiro');
    }
    else { 
        console.log('quarto');
    }
}

