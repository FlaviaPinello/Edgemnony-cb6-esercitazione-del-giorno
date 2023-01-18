/* ## Esercitazione
Utilizzando sempre le seguenti Rest API: https://api.escuelajs.co/api/v1/products lavoriamo sempre al nostro e-commerce.

Creiamo una nuova pagina al nostro e-commerce che includa un form
Questo form dovrà contenere i seguenti campi:
title
price
category
image (dove inseriremo un url ad immagine presente nel web)
description
aggiungiamo poi un addEventlistner al form che venga triggherato al submit. 
Questo evento dovrà stampare in console un oggetto che conterrà i seguenti valori

{
  title: -valore preso dal form-,
  price: -valore preso dal form-,
  description: -valore preso dal form-,
  categoryId: -valore preso dal form-,
  images: -valore preso dal form-
}
NB: per evitare che si riaggiorni al pagine utilizzare il metodo preventDefault() */


const heroEl = document.querySelector('.hero')
const menuBtn = document.querySelector('.menu')
const tendinaEl = document.querySelector('.tendina')
const productsEl = document.querySelector('.products')
const loaderElement = document.querySelector('.loader')
const cart = [];

menuBtn.addEventListener("click", () => {
    tendinaEl.classList.toggle("show");
});


fetch("https://api.escuelajs.co/api/v1/products")
 .then(res => res.json())
 .then(data => 
    // console.log(data)
  data.forEach(element => {
    cardCreator(element);
   })
 )
 .catch(e => 
  console.log("Errore:", e));



const cardCreator = (item) => {
    
    const cardEl =document.createElement('div');
    cardEl.className ="card";

    const imgEl= document.createElement('img');
    imgEl.setAttribute('src',item.images);
    imgEl.setAttribute('alt', '#');

    const h1El = document.createElement('h1');
    h1El.className = "title";
    h1El.textContent = item.title.slice(0, 10);

    const priceEl = document.createElement('p');
    priceEl.className = "price";
    priceEl.textContent = item.price;

    const descriptionEl = document.createElement('p');
    descriptionEl.className = "description";
    descriptionEl.textContent = item.description.slice(0,30);

    const btnEl = document.createElement('button');
    btnEl.textContent = "Aggiungi al carrello";

    btnEl.addEventListener('click', () =>{
        cart.push(item);
        cartCreation();
        alert("Aggiunto al carrello!");
        
    })

 cardEl.append(imgEl, h1El, priceEl, descriptionEl, btnEl);
 productsEl.appendChild(cardEl);
};

  const cartCreation = () => {
    tendinaEl.innerHTML = "";
    cart.forEach((item, index) => {
      const cartEl = document.createElement('div');
      cartEl.className = "cartRow";
      cartEl.innerHTML = `<p>${item.title}</p><p>${item.price}</p>`
      const deleteBtn = document.createElement('button');
      deleteBtn.textContent ="Rimuovi";
      deleteBtn.addEventListener('click', () => {
        cartEl.remove();
        cart.splice(index, 1);
      })


      cartEl.append(deleteBtn);
      tendinaEl.appendChild(cartEl);
    });

  };

  