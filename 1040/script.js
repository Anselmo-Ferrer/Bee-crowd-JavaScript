var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var prompt = function(texto) { return lines.shift();};

var entrada = prompt("XXXXX");

var [N1,N2,N3,N4] = entrada.split(" ");

N1 = parseFloat(N1);
N2 = parseFloat(N2);
N3 = parseFloat(N3);
N4 = parseFloat(N4);

let media = ((N1*2) + (N2*3) + (N3*4) + (N4*1)) / 10

console.log(`Media: ${media.toFixed(1)}`)

if (media >= 7.0) {
    console.log(`Aluno aprovado.`)
}

else if (media < 5.0) {
    console.log(`Aluno reprovado.`)
}

else if (media >= 5.0 && media <= 6.9) {
    console.log(`Aluno em exame.`)
    let exame = parseFloat(prompt(''))
    console.log(`Nota do exame: ${exame.toFixed(1)}`)
    let novamedia = (media + exame) / 2
    
    if (novamedia >= 5.0) {
        console.log(`Aluno aprovado.`)
    }
    
    else {
        console.log(`Aluno reprovado.`)
    }
    
    console.log(`Media final: ${novamedia.toFixed(1)}`)
}

else {
    console.log(`erro`)
}
