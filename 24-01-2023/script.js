
// ### Esercizio 1

// Sulla base della lezione del giorno, creare una paginetta che effettui una chiamata di tipo GET all'endpoint 
// `https://dummyjson.com/users`, 
// renderizzare la lista di utenti, creando delle cards con i valori a vostra scelta (es. nome, cognome, ecc...)


import { GET } from "./api.js";

const usersGen = (data)=> {
  const usersEl = document.createElement("div");
  const firstNameEl = document.createElement("h3");
  const lastNameEl = document.createElement("p");
  const ageEl = document.createElement("p");
  const emailEl = document.createElement("p");

  usersEl.className = "users";
  firstNameEl.textContent = data.firstName;
  lastNameEl.textContent = data.lastName;
  ageEl.textContent = data.age;
  emailEl.textContent = data. email;

  usersEl.append(firstNameEl, lastNameEl, ageEl, emailEl);
  return usersEl;
};

const bodyEl = document.body;


GET("users?limit=150").then((data) => 
    data.users.map((users)=> bodyEl.appendChild(usersGen(users)))
);


