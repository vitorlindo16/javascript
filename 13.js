const prompt = require("prompt-sync")();

let rendaMensal = parseFloat(prompt("Digite a sua renda mensal: R$ "));

let valorEmprestimo = parseFloat(prompt("Digite o valor total do empréstimo solicitado: R$ "));

let numPrestacoes = parseInt(prompt("Digite o número de prestações desejadas: "));


let valorPrestacao = valorEmprestimo / numPrestacoes;

let limiteEmprestimo = rendaMensal * 10;

let limitePrestacao = rendaMensal * 0.30;

if (valorEmprestimo <= limiteEmprestimo && valorPrestacao <= limitePrestacao) {
    console.log("Empréstimo concedido!");
} else {
    console.log("Empréstimo não concedido. Verifique os critérios.");
}