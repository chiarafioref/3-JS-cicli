console.log("script JS caricato");

let vote;
let count = 0;
let sum = 0;

do {
    vote = Number(prompt("Inserisci il tuo voto, per terminare inserisci lo 0."));
    if (vote !== 0) {
        sum = sum + vote;
        count++;
    }
} while (vote !== 0);
const average = sum / count;

console.log("La tua media in base ai voti inseriti è: " + average);