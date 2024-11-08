const prompt = require("prompt-sync")();

let salario = parseFloat(prompt("Digite o seu salário: "));
let valorPrestacao = parseFloat(prompt("Digite o valor da prestação: "));

let limitePrestacao = salario * 0.20;

if (valorPrestacao > limitePrestacao) {
    console.log("Empréstimo não pode ser concedido.");
} else {
    console.log("Empréstimo pode ser concedido.");
}