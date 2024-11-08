const prompt = require("prompt-sync")();

let numero = parseInt(prompt("Digite um número: "));

if (numero % 10 === 0) {
    console.log("O número é divisível por 10.");
} else if (numero % 5 === 0) {
    console.log("O número é divisível por 5.");
} else if (numero % 2 === 0) {
    console.log("O número é divisível por 2.");
} else {
    console.log("O número não é divisível por 10, 5 ou 2.");
}