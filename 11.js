const prompt = require("prompt-sync")();

let salario = parseFloat(prompt("Digite o salário do funcionário: R$ "));

if (isNaN(salario) || salario < 0) {
    console.log("Por favor, insira um valor válido de salário.");
} else {
  
    let desconto = salario * 0.11;

    if (desconto > 334.29) {
        desconto = 334.29;
    }

    console.log("O desconto previdenciário do funcionário é: R$ ${desconto.toFixed(2)}");
}