const prompt = require("prompt-sync")();



function converterDolarParaReal(dolares) {
    constDeConversao = 5.50;
    return dolares * constDeConversao;
}

let dolares = prompt("Digite a quantidade de Dólares que deseja converter para Reais:");

if (isNaN(dolares) || dolares <= 0) {
    console.log("Por favor, digite um valor válido.");
} else {

    let reais = converterDolarParaReal(parseFloat(dolares));
     console.log("US$ ${dolares} equivalem a R$ ${reais.toFixed(2)}");
}