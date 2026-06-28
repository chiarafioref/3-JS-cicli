console.log("script JS caricato");

const correctPassword = "ciao";
let yourPassword;
let attempts = 0;

do {
    yourPassword = prompt("Inserisci la tua password:");
    attempts++;

} while (yourPassword !== correctPassword && attempts < 3);

if (yourPassword === correctPassword) {
    console.log("Benvenuto");
} else {
    console.log("Bloccato");
}