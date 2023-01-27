

// Sulla base dell'esercizio del giorno:

// Creare un account su https://developers.themoviedb.org/
// Ottenere una API KEY
// creare una pagina web che effettui anche una sola chiamata GET stavolta per renderizzare una lista di serie tv,
//  esempio popular o top rated o entrambe, e visaulizzare a schermo con uno stile a piacere.


import { GET } from "./api.js";
// GET("tv").then((data)=> console.log(data));

const topRatedEl = document.querySelector(".top_rated");

const tvCardGen = (data) => {
    const cardEl = document.createElement("div");
    const imgEl = document.createElement("img");
  
    cardEl.setAttribute("id", data.id);
    cardEl.className = "tv";
    if (data.poster_path) {
      imgEl.setAttribute(
        "src",
        `https://image.tmdb.org/t/p/w500/${data.poster_path}`
      );
    }
    imgEl.setAttribute("alt", data.name);
    cardEl.appendChild(imgEl);
  
    return cardEl;
  };

  GET("tv", "top_rated")
  .then((data)=> data.results.map((tv)=>topRatedEl.append(tvCardGen(tv)))
  );

