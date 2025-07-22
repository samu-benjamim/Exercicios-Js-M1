const precoGasolina = 5.88;
const precoEtanol = 4.88;
const combustivelNoCarro = 'gasolina';
const distanciaPercorrida = 1638;
const consumoCombustivel = 15;

if (combustivelNoCarro === 'gasolina') {
    var precoCombustivel = precoGasolina;
} else if (combustivelNoCarro === 'etanol') {
    var precoCombustivel = precoEtanol;
} else{
    console.log('Combustível inválido');
    var precoCombustivel = 0;
}

let custoViagem= (distanciaPercorrida / consumoCombustivel) * precoCombustivel;

console.log(`O custo da viagem é R$ ${custoViagem.toFixed(2)}`);