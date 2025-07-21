let palavra= "JavaScript";
console.log(`O tipo do valor é: ${typeof palavra}`);
console.log(`Só tem espaços? ${palavra.includes(" ")}`);
console.log(`É um número? ${!isNaN(palavra)}`);
console.log(`É alfabético? ${/^[a-zA-Z]+$/.test(palavra)}`);
console.log(`É alfanumérico? ${/^[0-9]+$/.test(palavra)}`);
console.log(`É maiúsculo? ${palavra === palavra.toUpperCase()}`);
console.log(`É minúsculo? ${palavra === palavra.toLowerCase()}`);
console.log(`Ela tem maiúscula e minúscula? ${/[a-z]/.test(palavra) && /[A-Z]/.test(palavra)}`);