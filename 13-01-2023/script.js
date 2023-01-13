
// Esercizio 1
// Creare uno slider (template via HTML), seguendo il wireframe presente in allegato, 
// seguendo le logiche viste durante la lezione. Lo stesso dovrà presentare 3 immagini che si susseguono al click sui relativi pallini identificatori.

const images = [
    "https://picsum.photos/500/500?1",
    "https://picsum.photos/500/500?2",
    "https://picsum.photos/500/500?3",
];

const sliderImgEl = document.querySelector('.slider__img');
const leftBtnEl = document.querySelector('.left-btn');
const centerBtnEl = document.querySelector('.center-btn');
const rightBtnEl = document.querySelector('.right-btn');

rightBtnEl.addEventListener("click", (e) => {
    sliderImgEl.setAttribute("src", images[0]);
    leftBtnEl.style.backgroundColor = "transparent";
    centerBtnEl.style.backgroundColor = "transparent";
    rightBtnEl.style.backgroundColor = "white";

});

centerBtnEl.addEventListener("click", (e) => {
    sliderImgEl.setAttribute("src", images[1]);
    leftBtnEl.style.backgroundColor = "transparent";
    centerBtnEl.style.backgroundColor = "white";
    rightBtnEl.style.backgroundColor = "transparent";
});

leftBtnEl.addEventListener("click", (e) => {
    sliderImgEl.setAttribute("src", images[2]);
    leftBtnEl.style.backgroundColor = "white";
    centerBtnEl.style.backgroundColor = "transparent";
    rightBtnEl.style.backgroundColor = "transparent";
});
