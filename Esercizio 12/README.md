# ESERCIZIO 

Il computer pensa a un numero tra 1 e 100. L'utente indovina. Dopo ogni tentativo sbagliato, il computer dice "Troppo alto" o "Troppo basso" per aiutare l'utente.

## RAGIONAMENTO

- Il computer genera un numero casuale tra 1 e 100
- chiedo all'utente di indovinare il numero generato
   - SE l'utente inserisce un numero maggiore del numero generato dal pc
     - chiedo all'utente di inserire un altro numero specificando che è "Troppo alto"
   - ALTRIMENTI SE l'utente inserisce un numero minore del numero generato dal pc
     - chiedo all'utente di inserire un altro numero specificando che è "Troppo basso"
  - ALTRIMENTI SE l'utente indovina il numero
    - stampo "Complimenti hai indovinato"