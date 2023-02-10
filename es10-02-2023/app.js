// Lavoriamo integrando le strutture tipiche, ma non uniche, di una app Node.js in ambito Express
// Utilizzate il template statico che avete a disposizione e trasformatelo 
// per l'uso in Node in modo che sia pronto per le eventuali implementazioni di strutture dinamiche.
// In particolare, create il routing e predisponete le interfacce per essere utilizzate con handlebars.
// Analizzate quali parti sono adatte per dei partials.
// Il tag title deve recuperare il valore da una variabile e ovviamente tutti i link statici 
// devono diventare dinamici secondo il routing dell'app.
// Nel progetto statico manca una pagina 404 customizzata. Aggiungetela e gestitela nel sistema.


const express= require('express')

const hbs = require ('hbs')
const router = require('./router')
const app = express()
const PORT= 4000
app.use('/', router)

app.set('view engine', 'hbs')

hbs.registerPartials(__dirname + '/views/partials');

app.use(express.static('public'))

app.get('/home', (req, res)=>{
    res.render('home')
    
})
       

app.get('/about', (req, res)=>{
    res.render('about')
})




app.listen(PORT, ()=>{
 console.log( `server attivo ${PORT}`)
})