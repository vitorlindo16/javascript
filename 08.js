const prompt = require("prompt-sync")();

let salarioFixo = 1200.00;
let percentualComissao = 0.15;

let valorVendas = parseFloat(prompt("Digite o valor total das vendas no mês: "));

let valorComissao = valorVendas * percentualComissao;
let salarioTotal = salarioFixo + valorComissao;

console.log("Detalhamento do Salário:");
console.log("Salário Fixo: R$ ${salarioFixo.toFixed(2)}");
console.log("Comissão (15% sobre R$ ${valorVendas.toFixed(2)}): R$ ${valorComissao.toFixed(2)}");
console.log("Salário Total: R$ ${salarioTotal.toFixed(2)}");