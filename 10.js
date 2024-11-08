const prompt = require("prompt-sync")();

let velocidadeMS = parseFloat(prompt("Digite a velocidade em metros por segundo (m/s): "));

if (isNaN(velocidadeMS) || velocidadeMS < 0) {
    console.log("Por favor, insira um valor válido de velocidade.");
} else {
  
    let velocidadeKMH = velocidadeMS * 3.6;

    console.log("${velocidadeMS} m/s é igual a ${velocidadeKMH} km/h.");
}