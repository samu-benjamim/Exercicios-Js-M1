const nota1 = 7.5;
const nota2 = 8.0;
const nota3 = 6.0;

const mediaNotas = (nota1 + nota2 + nota3) / 3;

if (mediaNotas >= 7) {
    console.log(`Aprovado com média: ${mediaNotas.toFixed(2)}`);
} else if (mediaNotas >= 5 && mediaNotas < 7) {
    console.log(`Recuperação com média: ${mediaNotas.toFixed(2)}`);
} else {
    console.log(`Reprovado com média: ${mediaNotas.toFixed(2)}`);
}