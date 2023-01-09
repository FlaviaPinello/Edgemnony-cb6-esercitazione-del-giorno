// ## Esercizio 1

// Sulla base della lezione del giorno, ricreare la calcolatrice fatta in passato utilizzando solo arrow functions.

// > nb. ogni singola operazione sara una arrow function
// Alla fine combinare le varie operazioni in una funzione piu ampia, dove all'utente viene data la possibilita di scegliere quale operazione effettuare.
// Siate liberi di aggiungere gli argomenti a piacere, come per esempio i numeri, se chiederli all'utente o meno.

// ## Avanzato

// Provare a completare l'esercizio sopra applicando qualche callback.
// Anche qui non importa l'impostazione, siate creativi, l'importante che si verifichi il caso di una callback


// CALCOLATRICE CON FUNZIONE E IF/ELSE IF

// function sum() {
//     let operation = prompt("Inserisci operazione matematica Es +")
//     let num1 = prompt("Inserisci il primo numero")
//     let parsednum1 = parseInt(num1)
//     let num2 = prompt("Inserisci il secondo numero")
//     let parsednum2 = parseInt(num2)

//     if (operation === "+") {
//         console.log(parsednum1 + parsednum2);
//     } else if (operation === "-") {
//         console.log(parsednum1 - parsednum2);
//     } else if (operation === "*"){
//         console.log(parsednum1 * parsednum2);
//     } else if (operation === "/"){
//         console.log(parsednum1 / parsednum2);
//     }
//     }
// sum();



// N.B. OGNI SINGOLA OPERAZIONE SARA' UNA ARROW FUNCTION

// const sum = () => {
//     let operation = prompt("Fai addizione: +")
//     let num1 = prompt("Inserisci il primo numero")
//     let parsednum1 = parseInt(num1)
//     let num2 = prompt("Inserisci il secondo numero")
//     let parsednum2 = parseInt(num2)

//      return parsednum1 + parsednum2;

// };
// sum();
// console.log(sum());

// const sot = () => {
//     let operation = prompt("Fai sottrazione: -")
//     let num1 = prompt("Inserisci il primo numero")
//     let parsednum1 = parseInt(num1)
//     let num2 = prompt("Inserisci il secondo numero")
//     let parsednum2 = parseInt(num2)

//      return parsednum1 - parsednum2;

// };
// sot();
// console.log(sot());

// const mol = () => {
//     let operation = prompt("Fai moltiplicazione: *")
//     let num1 = prompt("Inserisci il primo numero")
//     let parsednum1 = parseInt(num1)
//     let num2 = prompt("Inserisci il secondo numero")
//     let parsednum2 = parseInt(num2)

//      return parsednum1 * parsednum2;

// };
// mol();
// console.log(mol());

// const div = () => {
//     let operation = prompt("Fai divisione: /")
//     let num1 = prompt("Inserisci il primo numero")
//     let parsednum1 = parseInt(num1)
//     let num2 = prompt("Inserisci il secondo numero")
//     let parsednum2 = parseInt(num2)

//      return parsednum1 / parsednum2;

// };
// div();
// console.log(div());

// CALCOLATRICE ARROW FUNCTION: Alla fine combinare le varie operazioni in una funzione piu ampia, dove all'utente viene data la possibilita di scegliere quale operazione effettuare.
// Siate liberi di aggiungere gli argomenti a piacere, come per esempio i numeri, se chiederli all'utente o meno.

const sum = () => {
    let operation = prompt("Inserisci operazione matematica Es +")
    let num1 = prompt("Inserisci il primo numero")
    let parsednum1 = parseInt(num1)
    let num2 = prompt("Inserisci il secondo numero")
    let parsednum2 = parseInt(num2)

    if (operation === "+") {
         console.log(parsednum1 + parsednum2);
    } else if (operation === "-") {
         console.log(parsednum1 - parsednum2);
    } else if (operation === "*"){
         console.log(parsednum1 * parsednum2);
    } else if (operation === "/"){
         console.log(parsednum1 / parsednum2)
    }
};
sum()