const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

readline.question('Digite a primeira nota: ', n1 => {
    readline.question('Digite a segunda nota: ', n2 => {
        console.log(`A média final é de ${(Number(n1) + Number(n2)) / 2}`);
        readline.close();
    });
});