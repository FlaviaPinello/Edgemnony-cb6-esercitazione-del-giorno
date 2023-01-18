const postForm = document.querySelector("#postForm");
const inputTitle = document.querySelector("#title");
const inputPrice = document.querySelector("#price");
const inputCategory = document.querySelector("#category");
const inputDescription = document.querySelector("#description");
const inputImages = document.querySelector("#images");


postForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const newObj = {
        title: inputTitle.value,
        price: parseInt(inputPrice.value),
        description: inputDescription.value,
        categoryId: parseInt(inputCategory.value),
        images: [inputImages.value],
      };
      alert("Hai aggiunto un nuovo prodotto");
    console.log(newObj);
});


const funzionePost = (objBody) => {
 fetch("https://api.escuelajs.co/api/v1/products", {
    method: "POST",
    headers: {"Content-Type": "application/json"},
    body: JSON.stringify(objBody),
   })
  .then(res => res.json())
  .then(data => console.log("Risposta POST: ", data))
  .catch(e => console.log("Errore:", e));
 };