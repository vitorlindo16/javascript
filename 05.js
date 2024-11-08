const prompt = require("prompt-sync")();

let peso = parseFloat(prompt("Digite seu peso (em kg): "));
let altura = parseFloat(prompt("Digite sua altura (em metros): "));

let imc = peso / (altura * altura);

console.log("Seu IMC é ${imc.toFixed(2)}");

if (imc < 20) {
    console.log("Você está abaixo do peso.");
} else if (imc >= 20 && imc < 25) {
    console.log("Você está com peso normal.");
} else if (imc >= 25 && imc < 30) {
    console.log("Você está com sobrepeso.");
} else if (imc >= 30 && imc < 40) {
    console.log("Você está obeso.");
} else {
    console.log("Você está com obesidade mórbida.");
}