
// Sulla base della lezione del giorno, ricreare una funzione asincrona (utilizzando `ASYNC` / `AWAIT`)
//  che effettui una chiamata al seguente endpoint: `https://dummyjson.com/quotes`.

// - Lo stile è a scelta dell'utente e la quantità di quote da visualizzare è soltanto 1.
//   Per qulunque riferimento utilizzare la documentazione presente al seguente indirizzo: https://dummyjson.com/


import { qS, cE, quoteCard } from "./utils.js";
import {GET} from "./app.js";

const bodyEl = qS("body");
const containerEl = cE("div");
containerEl.className = "container";
bodyEl.appendChild(containerEl);




GET("quotes/1").then((data) =>containerEl.appendChild(quoteCard(data)));


