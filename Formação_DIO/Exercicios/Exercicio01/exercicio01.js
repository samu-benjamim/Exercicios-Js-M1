const {gets, print} = require('./funcoes_auxiliares_ex01');


function classificarMedia (nota){
    if (nota < 5) {
        print("Reprovado");
    } else if (nota >= 5 && nota < 7){
        print("Recuperação");
    } else if (nota >= 7) {
        print(("Aprovado"))
    } else {
        print("Valor invalido")
    }
}

(function main(){
    classificarMedia(gets())
    classificarMedia(gets())
    classificarMedia(gets())
    classificarMedia(gets())
    classificarMedia(gets())
    classificarMedia(gets())
    classificarMedia(gets())
    classificarMedia(gets())
    classificarMedia(gets())
    classificarMedia(gets())    
    
})()
