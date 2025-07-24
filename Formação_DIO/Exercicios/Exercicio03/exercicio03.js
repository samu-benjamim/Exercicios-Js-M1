/* 3) Faça um programa que calcule e imprima o salário salário a ser transferido para um funcionário.
Para realizar o calculo receba o valor bruto do salário e o adicional dos benefícios.
O salário salário a ser transferido é calculado da seguinte maneira: 
   
   valor bruto do salário - percentual de imposto mediante a faixa salarial + adicional dos benefícios

Para calcular o percentual de imposto segue as aliquotas:

    De R$ 0.00 a R$ 1100.00 = 5.00%
    De R$ 1100.01 a	R$ 2500.00 = 10.00%
    Maior que 2500.00 = 15.00%

    Exemplo:
        Entrada:
            2000
            250

        Saída:
            2050.00 */

const { gets, print } = require('./funcaoes_auxiliares_ex03');

function calcularAliquotas(salario){
    let salarioComDescontos = 0
    if (salario > 0 && salario <= 1100){
        salarioComDescontos = salario - (salario * 0.05);
        return salarioComDescontos;        
    } else if (salario > 1100 && salario <= 2500){
        salarioComDescontos = salario - (salario * 0.10);
        return salarioComDescontos;
    } else {
        salarioComDescontos = salario - (salario * 0.15);
        return salarioComDescontos;
    }
}

function calcularBeneficios(salario,beneficios){
    let salarioComBeneficios = salario + beneficios
    return salarioComBeneficios
}

(function main(){
    let salarioComDescontos = calcularAliquotas(gets());
    let beneficios = gets()
    let salarioComBeneficios = calcularBeneficios(salarioComDescontos, beneficios)
    print(`Seu salario este mês é R$ ${salarioComBeneficios.toFixed(2)}`)
})()