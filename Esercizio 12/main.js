console.log("script JS caricato");

let computerNumber = Math.floor(Math.random() * 100) + 1;
let yourNumber;
do {
    yourNumber = Number(prompt("Indovina il numero"));
    if (yourNumber > computerNumber) {
        alert("Troppo alto");
    } if (yourNumber < computerNumber) {
        alert("Troppo basso");
    }
} while (yourNumber !== computerNumber);

console.log("Complimenti hai indovinato!");
alert("Complimenti hai indovinato!");