const prompt = require("prompt-sync")();

let custoFabrica = parseFloat(prompt("Digite o custo de fábrica do carro: "));

let percentualRevendedor = 0.25;
let percentualImpostos = 0.45;

let valorRevendedor = custoFabrica * percentualRevendedor;
let valorImpostos = custoFabrica * percentualImpostos;

let custoConsumidor = custoFabrica + valorRevendedor + valorImpostos;

console.log("Detalhamento do Custo do Carro:");
console.log("Custo de Fábrica: R$ ${custoFabrica.toFixed(2)}");
console.log("Valor do Revendedor (25%): R$ ${valorRevendedor.toFixed(2)}");
console.log("Valor dos Impostos (45%): R$ ${valorImpostos.toFixed(2)}");
console.log("Custo Final ao Consumidor: R$ ${custoConsumidor.toFixed(2)}")