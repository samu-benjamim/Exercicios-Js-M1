class Carros {
    constructor(marca, cor, gastoMedio){
        this.marca = marca;
        this.cor = cor;
        this.gastoMedio = gastoMedio;
    }
    
    consumo (distancia, precoCombustivel) {
        return (distancia / this.gastoMedio) * precoCombustivel;
    }

    descricao() {
        return `Marca: ${this.marca}, Cor: ${this.cor}, Gasto Médio: ${this.gastoMedio} km/l`;
    }
}

function declararCarros(marca, cor, gastoMedio) {
    return new Carros(marca, cor, gastoMedio);
}    

(function main() {
    const carro1 = declararCarros('Fiat', 'Preto', 12);
    const carro2 = declararCarros('Chevrolet', 'Branco', 10);
       
    
    const distancia = 100; // Exemplo de distância em km
    const precoCombustivel = 5.88; // Exemplo de preço do combustível por litro

    console.log(carro1.descricao());
    console.log(`Custo da viagem: R$ ${carro1.consumo(distancia, precoCombustivel).toFixed(2)}`);

    console.log(carro2.descricao());
    console.log(`Custo da viagem: R$ ${carro2.consumo(distancia, precoCombustivel).toFixed(2)}`);
})();
