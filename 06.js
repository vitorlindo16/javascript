const prompt = require("prompt-sync")();

let idade = parseInt(prompt("Digite sua idade: "));

if (idade < 16) {
    console.log("Não eleitor.");
} else if ((idade >= 18 && idade < 65)) {
    console.log("Eleitor obrigatório.");
} else {
    console.log("Eleitor facultativo.");
}