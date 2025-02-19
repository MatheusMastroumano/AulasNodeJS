const readline = require('readline-sync')

let peso = Number(readline.question('Digite seu peso (somente o número): \n '));
if (peso <= 0) {
    console.log('Peso inválido');
}
let altura = Number(readline.question('Digite a sua altura (por exemplo 1.80): '));
if (altura <= 0) {
    console.log('Altura inválida');
}
const imc = Number(peso) / (Number(altura) * Number(altura))
console.log(`O seu IMC é de ${imc}`);
if (imc <= 17) {
    console.log('Muito abaixo do peso');
} else if (imc > 17 && imc <= 18.49) {
    console.log('Abaixo do peso');
} else if (imc > 18.50 && imc <= 24.99) {
    console.log('Peso normal');
} else if (imc > 25 && imc <= 29.99) {
    console.log('Acima do peso');
} else if (imc > 30 && imc <= 34.99) {
    console.log('Obesidade I');
} else if (imc > 35 && imc <= 39.99) {
    console.log('Obesidade II');
} else {
    console.log('Obesidade III');
}
