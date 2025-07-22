const peso = 70;
const altura = 1.75;

const imc = peso / (Math.pow(altura, 2));

if (imc < 18.5) {
    console.log(`Abaixo do peso: IMC = ${imc.toFixed(2)}`);
} else if (imc >= 18.5 && imc < 24.9) {
    console.log(`Peso normal: IMC = ${imc.toFixed(2)}`);
} else if (imc >= 25 && imc < 29.9) {
    console.log(`Sobrepeso: IMC = ${imc.toFixed(2)}`);
} else if (imc >= 30 && imc < 39.9) {
    console.log(`Obesidade grau 1: IMC = ${imc.toFixed(2)}`);
} else {
    console.log(`Obesidade grau 2 ou 3: IMC = ${imc.toFixed(2)}`);
}

