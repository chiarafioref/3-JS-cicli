console.log("script JS caricato");

let price;
let total = 0;

do {
    price = Number(prompt("Inserisci il prezzo del prodotto. Per terminare inserisci 0"));
    total = total + price;
} while (price !== 0);

console.log("Il totale della spesa è: " + total + "€");