
// Sulla base della lezione del giorno, creare un mock in formato JSON. Riprendere 
// uno degli esercizi passati (es. generatore di una card prodotto), eliminare 
// eventuale chiamata fetch ed utilizzare il mock JSON creato per popolare i dati.

// import { GET } from "./api.js";

import myJson from "./mock.json" assert { type: "json" };

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
console.log(myJson);

myJson.users.map((users)=> bodyEl.appendChild(usersGen(users)));


// GET("users?limit=150").then((data) => 
//     data.users.map((users)=> bodyEl.appendChild(usersGen(users)))
// );


