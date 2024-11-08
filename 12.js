const prompt = require("prompt-sync")();

let caractere = prompt("Digite um caractere: ");

if (caractere.length !== 1) {
    console.log("Por favor, digite apenas um caractere.");
} else {

    let letra = caractere.toLowerCase();

    if (letra === 'a' || letra === 'e' || letra === 'i' || letra === 'o' || letra === 'u') {
        console.log("É uma vogal.");
    }

    else if ((letra >= 'a' && letra <= 'z')) {
        console.log("É uma consoante.");
    }

    else if (caractere >= '0' && caractere <= '9') {
        console.log("É um número.");
    }

    else {
        console.log("É um símbolo.");
    }
}