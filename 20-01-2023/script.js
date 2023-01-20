

// Lavoriamo sempre al nostro e-commerce

// Aggiungiamo i 2 ulteriori metodi visti a lezione: PUT e DELETE magari gestendoli con 2 nuovi form mi raccomando a 
// leggere la documentazione per capire quali parametri e/o body inviare al backend per il corretto funzionamento delle chiamate.
// Sistemate tutto il codice in diversi files in modo da rendere il tutto piu leggibile e fruibile.



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

  