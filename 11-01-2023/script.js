
// Creare una singola card tutto in statico (via HTML), inserire gli elementi a piacere, come immagini, testo o titoli, 
// indispensabile pero aggiungere un button con una X come testo.

// Aggiungere un evento al cui click del mouse sulla class intera:

// Cambi il colore del testo di tutta la card
// Aggiungere un secondo evento al cui click del mouse sul pulsante con la X - Elimini la card stessa



function closeCard () {
    cardClickEl.remove('card');
}

function changeColorText (){
 descriptionEl.style.color = 'red';

}

const descriptionEl = document.querySelector ('.description');

const cardClickEl = document.querySelector('.card');
cardClickEl.addEventListener('click', changeColorText);

const btnXEl = document.querySelector('.btn');
btnXEl.addEventListener('click', closeCard);


