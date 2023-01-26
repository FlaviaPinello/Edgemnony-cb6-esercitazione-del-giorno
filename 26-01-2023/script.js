

// Sulla base della lezione di oggi, creare un intervallo temporale che simuli un conto alla rovescia, che dopo n secondi:

// mostra il timer in schermo, come visto a lezione;
// che allo scadere del timer la pagina deve cambiare colore e il timer stesso deve scomparire;
// la presenza di un pulsante STOP interrompe il flusso temporale, tramite il relativo clearInterval.


const bodyEl = document.body;
const titleEl = document.createElement("h1");
const stopBntEl = document.createElement("button");
stopBntEl.textContent = "stop";


bodyEl.append(titleEl, stopBntEl);



let timeout = 60;

const intervalId = setInterval(() => {
      if (timeout === 0) {
        bodyEl.style.backgroundColor = "gold";
        titleEl.remove();
      } else {
        timeout--;
        titleEl.textContent = timeout;
      }
    }, 1000);

stopBntEl.addEventListener("click", () => clearInterval(intervalId));