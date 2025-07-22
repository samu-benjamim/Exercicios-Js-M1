const formaDePagamento = 'cartão de crédito';
const parcela = 3; 
const valorProduto = 100.00;

if (formaDePagamento === 'dinheiro' || formaDePagamento === 'pix') {
    const desconto = 0.15; 
    const valorPago = valorProduto - (valorProduto * desconto);
    console.log(`Valor pago: R$ ${valorPago.toFixed(2)} (com desconto)`);
} else if (formaDePagamento === 'cartão de debito') {
    const desconto = 0.10; 
    const valorPago = valorProduto - (valorProduto * desconto);
    console.log(`Valor pago: R$ ${valorPago.toFixed(2)} (com desconto)`);
} else if (formaDePagamento === 'cartão de crédito') {
    if (parcela === 1 || parcela === 2) {
        const valorPago = valorProduto; 
        console.log(`Valor pago: R$ ${valorPago.toFixed(2)} (à vista)`);
    } else  {
        const juros = 0.10; 
        const valorPago = valorProduto + (valorProduto * juros);
        console.log(`Valor pago: R$ ${valorPago.toFixed(2)} (com juros de 10%)`);
    } 
}
