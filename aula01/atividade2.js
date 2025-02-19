const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

readline.question('Digite seu peso (somente o número): ', peso => {
    readline.question('Digite a sua altura (por exemplo 1.80): ', altura => {
        console.log(`O seu IMC é de ${Number(peso) / (Number(altura) * Number(altura))}`);
        readline.close();
    });
});