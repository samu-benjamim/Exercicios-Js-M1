function calcularIMC(peso, altura) {
    return peso / (Math.pow(altura, 2))
}

function classificarIMC(imc) {
    if (imc < 18.5) {
        return `Abaixo do peso: IMC = ${imc.toFixed(2)}`;
    } else if (imc >= 18.5 && imc < 24.9) {
        return `Peso normal: IMC = ${imc.toFixed(2)}`;
    } else if (imc >= 25 && imc < 29.9) {
        return `Sobrepeso: IMC = ${imc.toFixed(2)}`;
    } else if (imc >= 30 && imc < 39.9) {
        return `Obesidade grau 1: IMC = ${imc.toFixed(2)}`;
    } else {
        return `Obesidade grau 2 ou 3: IMC = ${imc.toFixed(2)}`;
    }
}

function calcularEClassificarIMC(peso, altura) {
    const imc = calcularIMC(peso, altura);
    return classificarIMC(imc);
}

(function main () {
    const pesoUsuario = 70; // Exemplo de peso
    const alturaUsuario = 1.75; // Exemplo de altura

    console.log(calcularEClassificarIMC(pesoUsuario, alturaUsuario));
})();


