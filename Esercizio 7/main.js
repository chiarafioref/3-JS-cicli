console.log("script JS caricato");

const yourNumber = Number(prompt("Inserisci un numero:"));
let sum = 0;

for (let i = 1; i <= yourNumber; i++) {
    sum = sum + i;
}
console.log("La somma totale da 1 al numero da te inserito è: " + sum);