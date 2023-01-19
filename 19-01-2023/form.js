const postForm = document.querySelector("#postForm");
const inputTitle = document.querySelector("#title");
const inputPrice = document.querySelector("#price");
const inputCategory = document.querySelector("#category");
const inputDescription = document.querySelector("#description");
const inputImages = document.querySelector("#images");

const categoryForm = document.querySelector("#categoryForm");
const catName = document.querySelector("#categoryName");
const catImage = document.querySelector("#categoryImages");

categoryForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const newObj = {
    name: catName.value,
    image: catImage.value,
  };
  funzionePost(newObj,"categories");
});



postForm.addEventListener('submit', (event) => {
    event.preventDefault();
    if (parseInt(inputCategory.value) <1) {
      alert( 'la categoria deve essere maggiore di 0');
      return;
    }
    const newObj = {
        title: inputTitle.value,
        price: parseInt(inputPrice.value),
        description: inputDescription.value,
        categoryId: parseInt(inputCategory.value),
        images: [inputImages.value],
      };
      funzionePost(newObj,"products");
      alert("Hai aggiunto un nuovo prodotto");
    console.log(newObj);
});



const funzionePost = (objBody, param) => {
 fetch(`https://api.escuelajs.co/api/v1/`+ param, {
    method: "POST",
    headers: {"Content-Type": "application/json"},
    body: JSON.stringify(objBody),
   })
  .then(res => res.json())
  .then(data => {
    if(data.statusCode <= 400 && data.statusCode < 500){
      alert(
      `${param} Prodotto non caricato: `  + data.message[0]);
    } else{
      alert (`${param} Prodotto caricato:`);
      console.log("Risposta POST: ", data)

    }
    })
  .catch(e => console.log("Errore:", e));
 };