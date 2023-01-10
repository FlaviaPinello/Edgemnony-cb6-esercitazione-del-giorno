// Sulla base della lezione del giorno, scrivere una funzione che generi una hero dinamicamente tramite Javascript.
// Devo essere presenti i seguenti elementi:

// Image di sfondo
// Un titolo principale
// Un sottotitolo descrittivo breve

const createHero = (title, img, description) => {

    const bodyEl = document.body;
    const heroEl = document.createElement('hero');
    const imgEl = document.createElement('img');
    const titleEl = document.createElement('h2');
    const descriptionEl = document.createElement('p');
  
    
    heroEl.className = 'class_hero';
  
    
    imgEl.className = 'hero_img';
    imgEl.setAttribute('src', 'https://picsum.photos/1024/300');
    imgEl.setAttribute('alt', 'lorem picsum');
  
    titleEl.className = 'hero_title';
    titleEl.textContent = 'E anche questa è fatta!';
  
    descriptionEl.className = 'hero_description';
    descriptionEl.textContent = 'L esercitazione del giorno è fatta, ora vado a fare la stilista!';
  
  
  
    heroEl.append(imgEl, titleEl, descriptionEl);
    bodyEl.appendChild(heroEl);
  
  };
  
  createHero ({
      title: ' E anche questa è fatta!',
      img: 'https://picsum.photos/1024/300',
      description: 'L esercitazione del giorno è fatta, ora vado a fare la stilista!',
  });