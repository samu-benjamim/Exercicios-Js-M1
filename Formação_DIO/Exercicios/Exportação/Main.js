const {gets, print} = require('./Funcoes_auxiliares');

const numSorteado = [];

for (let i = 0; i < 5; i++){
    const numSorte = gets();
    numSorteado.push(numSorte);
}

let numMaior = 0

for (let i = 0; i < numSorteado.length; i++) {
    const num = numSorteado[i];
    if (numMaior< num){
        numMaior = num;
    }
}

print(numMaior);