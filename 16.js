const prompt = require("prompt-sync")();

let vetor = [];

for (let i = 0; i < 15; i++) {
    let valor = parseInt(prompt(`Digite o valor para a posição ${i + 1}: `));
    vetor.push(valor);
}

let valorProcurado = parseInt(prompt("Digite o valor a ser procurado: "));

let contador = 0;
for (let i = 0; i < vetor.length; i++) {
    if (vetor[i] === valorProcurado) {
        contador++;
    }
}

console.log("O valor ${valorProcurado} ocorre ${contador} vez(es) no vetor.");