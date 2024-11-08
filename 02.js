const prompt = require("prompt-sync")();

let anoNascimento = parseInt(prompt("Digite seu ano de nascimento: "));
let anoAtual = new Date().getFullYear();
let idade = anoAtual - anoNascimento;

console.log("Você tem ${idade} anos.");

if (idade >= 18) {
    let nome = prompt("Digite seu nome: ");
    console.log("${nome}, sua entrada foi permitida.");
} else {
    console.log("Sua entrada não é permitida, pois você é menor de idade.");
}