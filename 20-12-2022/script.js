//Sulla base della lezione del giorno, scrivere un array inizialmente vuoto
// e aggiungere al suo interno dieci elementi di tipo string a scelta, rispettando i seguenti punti:
// utilizzare il ciclo for classico
// sarà l'utente ad inserire queste stringhe (prompt)
// alla fine, quando l'utente avrà inserito tutte e 10 le parole, stamparle in console

let userregali = [];
for (let x = 0; x < 10; x++ ){
 userregali.push(prompt("La tua lista di 10 regali per Babbo Natale"));
};
console.log(userregali);