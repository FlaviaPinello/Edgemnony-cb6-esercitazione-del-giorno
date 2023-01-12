

// Sulla base della lezione odierna, e utilizzando l'array di oggetti esposto alla fine di questo documento, svolgere i seguenti esercizi:

// Esercizio 1
// Eseguire sull'array riportato sotto:

// un metodo forEach che stampi in console.log i soli ID di ogni singolo elemento
// un metodo map che memorizzi in una variabile tutti gli userId di ogni singolo elemento e quindi richiamarli con un console.log a parte
// un metodo filter che stampi in console.log i soli ID di ogni singolo elemento i cui valori siano maggiori o uguali a 4

import { todos } from './mocks.js';
todos.forEach((todos) => console.log(todos.id));


const todosId = todos.map((todos) => todos.id);
console.log(todosId);

const todosFilterID4 = todos.filter(todos => todos.id >= 4);
console.log(todosFilterID4);
