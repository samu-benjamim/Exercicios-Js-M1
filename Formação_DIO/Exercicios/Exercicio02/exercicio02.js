const {gets, print} = require('./funcaoes_auxiliares_ex02');

function recebendoEntradas (entrada){
    let lenLista = entrada
    let listaEntradas= []
    for (let i = 0; i < lenLista; i++){
        let num = gets()
        listaEntradas.push(num)
    }
    return listaEntradas
}


function identificarMaiorPar (lista, len) {
    let numMaiorPar
    for (let i = 0; i < len; i++){
        if (numMaiorPar === undefined && (lista[i] % 2) === 0){
            numMaiorPar = lista[i]
        } else if ((lista[i] % 2) === 0 && lista[i] > numMaiorPar) {
            numMaiorPar = lista[i]
            } 
        }
    

    print(`O maior numero Par é: ${numMaiorPar}`)
}

function identificarMenorImpar (lista, len) {
    let numMenorImpar
    for (let i = 0; i < len; i++){
        if (numMenorImpar === undefined && (lista[i] % 2) === 1){
            numMenorImpar = lista[i]
        } else if ((lista[i] % 2) === 1 && lista[i] < numMenorImpar) {
            numMenorImpar = lista[i]
        }
    }

    print(`O menor numero Impar é: ${numMenorImpar}`)
}

(function main (){
    let entrada = (gets())
    const lista = (recebendoEntradas(entrada))
    identificarMaiorPar(lista, entrada)
    identificarMenorImpar(lista, entrada)
})()
