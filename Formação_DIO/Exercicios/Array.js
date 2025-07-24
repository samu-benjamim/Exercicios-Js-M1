const notas = []

notas.push(5);
notas.push(8);
notas.push(8);
notas.push(6);
notas.push(9);
notas.push(10);
notas.push(4);

let somaNotas = 0 

for (let i = 0; i < notas.length; i++){
    const nota = notas[i];
    somaNotas = somaNotas + nota;
}

const media =  somaNotas / notas.length;
console.log(media.toFixed(2));