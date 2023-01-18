// Esercitazione
// Utilizzando sempre le seguenti Rest API: https://api.escuelajs.co/api/v1/products lavoriamo sempre al nostro e-commerce.

// Con il metodo giusto per la manipolazione delle stringe limitiamo il titolo della card a 
// solo 10 caratteri e la descrizione della card a soli 30.
// Dovremo crere anche un addEventListner al pusante di aggiunta al carrello, in modo 
// da aggiungere l'elemento al vostro carrello const cart = [] facendo apparire un alert() 
// che indichi l'avvenuta aggiunta al carrello dell'elemento.
// NB: è gradita sempre la gestione degli errori per il metodo fetch() ed un loader




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
.catch(e => { 
    loaderElement.textContent = "Errore";
    console.log("Errore", error);
})

);



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
    cart.forEach((item) => {
      const cartEl = document.createElement('p');
      cartEl.textContent = item.title;
      tendinaEl.appendChild(cartEl);
    });
  };
