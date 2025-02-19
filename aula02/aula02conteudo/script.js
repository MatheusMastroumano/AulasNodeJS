const readline = require('readline-sync')

let idade = Number(readline.question('Digite sua idade: \n '));
if (idade >= 0 && idade < 121) {
    if (idade >= 18) {
    console.log('Maior de idade');
} else {
    console.log('Menor de idade');
}
} else {
    console.log('Idade inválida');
}