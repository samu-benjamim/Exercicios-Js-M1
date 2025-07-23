class Pessoa{
    constructor(nome, peso, altura){
        this.nome = nome,
        this.peso = peso,
        this.altura = altura
    }

   
    classificarIMC() {
        const imc = this.peso / (Math.pow(this.altura,2))
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
    

    falarIMC(){
        const imc = this.peso / (Math.pow(this.altura,2))
        return `Meu nome é ${this.name} tenho ${this.peso}Kg e altura de ${this.altura}m, meu IMC é ${imc.toFixed(2)}`
    }
}

function instanciarPessoa(nome, peso, altura){
    return new Pessoa(nome, peso, altura)
}

function main(){
    const jose = instanciarPessoa("José", 70, 1.75)
    console.log(jose.falarIMC())
    console.log(jose.classificarIMC())
}

main()
