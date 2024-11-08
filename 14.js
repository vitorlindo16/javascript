const prompt = require("prompt-sync")();

function calcularAnoUltrapassagem(populacaoA, populacaoB, taxaNatalidadeA, taxaNatalidadeB) {
    let anos = 0;

    while (populacaoA <= populacaoB) {
   
        populacaoA *= (1 + taxaNatalidadeA);
        populacaoB *= (1 + taxaNatalidadeB);
        anos++;
    }

    return anos;
}

let populacaoA = 5000000;
let populacaoB = 7000000; 
let taxaNatalidadeA = 0.03;
let taxaNatalidadeB = 0.02;
let anosNecessarios = calcularAnoUltrapassagem(populacaoA, populacaoB, taxaNatalidadeA, taxaNatalidadeB);

console.log("Será necessário ${anosNecessarios} anos para a população do país A ultrapassar a população do país B.");