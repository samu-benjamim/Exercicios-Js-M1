const precoCombustivel = 5.88;
const distanciaPercorrida = 1638;
const consumoCombustivel = 15;

let custoViagem= (distanciaPercorrida / consumoCombustivel) * precoCombustivel;

console.log(`O custo da viagem é R$ ${custoViagem.toFixed(2)}`);