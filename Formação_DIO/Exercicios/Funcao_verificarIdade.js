function verificarIdade(idade) {
    if (idade >= 18) {
        return "Você é maior de idade.";
    } else {    
        return "Você é menor de idade.";
    }
}

(function main() {
    const idadeUsuario = 20; // Exemplo de idade
    console.log(verificarIdade(idadeUsuario));
})();