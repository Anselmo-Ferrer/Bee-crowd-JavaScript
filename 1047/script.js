var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var prompt = function(texto) { return lines.shift();};

var entrada = prompt("XXXXX");

var [A,B,C,D] = entrada.split(" ");

hi = parseInt(A);

mi = parseInt(B);

hf = parseInt(C);

mf = parseInt(D);


if (hi>hf && mi>mf) {
    let totalh = ((24-hi) + hf ) -1
    let totalm = (60-mi) + mf 
    console.log(`O JOGO DUROU ${totalh} HORA(S) E ${totalm} MINUTO(S)`)
}

else if (hi>hf && mf>mi) {
    let totalh = (24-hi) + hf 
    let totalm = (60-mi) - (60-mf)
    console.log(`O JOGO DUROU ${totalh} HORA(S) E ${totalm} MINUTO(S)`)
}

else if (hf>hi && mi>mf) {
    let totalh = (hf-hi) -1
    let totalm = 60 - (mi-mf)
    console.log(`O JOGO DUROU ${totalh} HORA(S) E ${totalm} MINUTO(S)`)
}

else if (hf>hi && mf>mi) {
    let totalh = (24-hi) - (24-hf) 
    let totalm = (60-mi) - (60-mf)
    console.log(`O JOGO DUROU ${totalh} HORA(S) E ${totalm} MINUTO(S)`)
}

else if (hf==hi && mi>mf) {
    let totalh = 23
    let totalm = 60 - (mi-mf)
    console.log(`O JOGO DUROU ${totalh} HORA(S) E ${totalm} MINUTO(S)`)
}

else if (hi==hf && mi<mf) {
    let totalh = 0
    let totalm = mf-mi
    console.log(`O JOGO DUROU ${totalh} HORA(S) E ${totalm} MINUTO(S)`)
}

else if (hi>hf && mi==mf) {
    let totalh = 24 - (hi-hf)
    let totalm = 0
    console.log(`O JOGO DUROU ${totalh} HORA(S) E ${totalm} MINUTO(S)`)
}

else if (hi<hf && mi==mf) {
    let totalh = hf-hi
    let totalm = 0
    console.log(`O JOGO DUROU ${totalh} HORA(S) E ${totalm} MINUTO(S)`)
}

else {
    console.log(`O JOGO DUROU 24 HORA(S) E 0 MINUTO(S)`)
}