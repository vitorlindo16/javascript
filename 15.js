const prompt = require("prompt-sync")();

function calcularMedia(arr) {
    let soma = arr.reduce((acc, valor) => acc + valor, 0);
    return soma / arr.length;
}

let pluviometria = [];
let maxPluvia = -Infinity;
let minPluvia = Infinity;
let diaMax = 0;
let diaMin = 0;

for (let i = 1; i <= 30; i++) {
    let pluvia = parseFloat(prompt(`Digite o índice pluviométrico do dia ${i} de junho (em mm): `));
    pluviometria.push(pluvia);

    if (pluvia > maxPluvia) {
        maxPluvia = pluvia;
        diaMax = i;
    }

    if (pluvia < minPluvia) {
        minPluvia = pluvia;
        diaMin = i;
    }
}

let primeiraQuinzena = pluviometria.slice(0, 15);
let segundaQuinzena = pluviometria.slice(15);

let mediaPrimeiraQuinzena = calcularMedia(primeiraQuinzena);
let mediaSegundaQuinzena = calcularMedia(segundaQuinzena);

console.log("Dia que mais choveu: Dia ${diaMax} com ${maxPluvia} mm.");
console.log("Dia que menos choveu: Dia ${diaMin} com ${minPluvia} mm.");
console.log("Média pluviométrica da primeira quinzena: ${mediaPrimeiraQuinzena.toFixed(2)} mm.");
console.log("Média pluviométrica da segunda quinzena: ${mediaSegundaQuinzena.toFixed(2)} mm.");