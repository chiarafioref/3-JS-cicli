console.log("script JS caricato");

const myNumber = Math.floor(Math.random() * 10) + 1;
let yourNumber;

do {
    yourNumber = Number(prompt("Indovina il numero da 1 a 10:"));

} while (yourNumber !== myNumber);