// Allora, sfruttando i file della app di oggi, dovete aggiungere alle pagine già esistenti:
//  una pagina login e una pagina mi-presento. Poi dovete aggiungere un partials con
//   una immagine che potete interpolare in qualsiasi pagina vogliate.
// Poi dovete creare un oggetto chiamato myPreferences nel quale gestite questi elementi: pet, color, season.
// Questo oggetto deve essere caricato nella route radice, quindi nella home page. 
// Ovviamente richiamate nella pagina stessa gli elementi dell'oggetto.
// Ai percorsi / e /about deve essere passata una variabile titolo ovviamente diversa a seconda della pagina.
// Come ultima cosa, ma è più facoltativa anche se credo siate in grado di farlo, 
// nella pagina mi-presento dovete creare un form che invia un dato, come nell' esempio già fatto,
//  in relazione ad una chiamata POST che andrete a configurare in app.
// Questa volta però il response non a semplice stringa da metodo send ma atterrerà su
//  una pagina login che dovrete configurare con render() nel metodo POST


const express= require('express')

const hbs = require ('hbs')

const app = express()
const PORT= 4000

const myPreferences=[
    {
        pet: "cat and dog",
        color: "white",
        season: "summer"
    }
]

app.set('view engine', 'hbs')
hbs.registerPartials(__dirname + '/views/partials');
app.use(express.static('public'))

app.get('/', (req, res)=>{
    res.render('home', {
        nome: "Flavia",
        titolo: "Corso",
        pet:"gatti",
        myPreferences: myPreferences[0],
    })
})

app.get('/about', (req, res)=>{
    res.render('about',{
        titolo: "oggi è tutto un casino"

    })
})

app.get('/login',(req, res)=>{
    res.render('login')
})

app.get('/mi presento',(req, res)=>{
    res.render('mi presento')
})

app.listen(PORT, ()=>{
    console.log( `server attivo ${PORT}`)
   })