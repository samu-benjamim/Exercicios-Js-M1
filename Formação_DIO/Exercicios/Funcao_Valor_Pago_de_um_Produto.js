function aplicarDesconto (valor, desconto) {
    return valor - (valor * desconto);
}

function aplicarJuros (valor, juros) {
    return valor + (valor * juros);
}

function calcularValorPago(formaDePagamento, parcela, valorProduto) {
    if (formaDePagamento === 'dinheiro' || formaDePagamento === 'pix')  {
        return aplicarDesconto(valorProduto, 0.15); // 15% de desconto
    }    else if (formaDePagamento === 'cartão de debito') {
        return aplicarDesconto(valorProduto, 0.10);
    } else if (formaDePagamento === 'cartão de crédito') {
        if (parcela === 1 || parcela === 2)
            return valorProduto; // à vista
        else
            return aplicarJuros(valorProduto, 0.10); // com juros de 10%
        }
    }


(function main() {
    const formaDePagamento = 'cartão de crédito';
    const parcela = 3; // Exemplo de número de parcelas
    const valorProduto = 100.00; // Exemplo de valor do produto
    const valorPago = calcularValorPago(formaDePagamento, parcela, valorProduto);
    console.log(`Valor pago: R$ ${valorPago.toFixed(2)} ${parcela > 2 ? '(com juros de 10%)' : '(à vista)'}`);
})();
