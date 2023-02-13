// nell'esercizio di oggi potete riprendere il progetto di venerdì che abbiamo reso dinamico in Node.js/Express 
// e potete applicare il semplice sistema di autenticazione che abbiamo visto oggi.
// Quindi la voce profilo la usate per la login e logout per la relativa funzione. 
// Poi create 3 nuove pagine: una per direzionare i vostri utenti verso una pagina per non autorizzati, 
// la pagina con contenuto protetto e naturalmente la pagina per fare login
// Vi ricordo di gestire eventuali messaggi di controllo sui campi e di proteggere il percorso della pagina protetta.


const express= require('express')
const session = require('cookie-session')
const bodyParser = require('body-parser')

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
app.get('/signup', (req, res) =>{
    res.render('signup')
})

app.post('/signup', (req, res) =>{
    console.log(`${req.body.name} /${req.body.password}`)

  
    if(!req.body.name || !req.body.password){
        res.status(400)
        res.render('/signup', {message: 'per favore, aggiungi tutti i dati richiesti'})
    }
 
    else{
        let name = "Flavia"
        let password = "2345"
        let userAuth = {name:name, password:password}

        if(name == req.body.name && password == req.body.password){
            req.session.user = userAuth
            res.redirect('/private')
        }else{
            res.redirect('/warning')
        }
    }
})
       
app.get('/private', checkPage, (req, res) =>{
    res.render('private')
})

app.get('/warning', (req, res) =>{
    res.render('warning')
})
function checkPage(req, res, next){
    if(req.session.user){
        next()
    }else{
        res.redirect('/warning')
    }
}
app.post('/private',(req, res)=>{
    res.render('private')
})
app.post('/warning',(req, res)=>{
    res.render('warning')
})


app.get('/logout', (req, res) =>{
    console.log('hai fatto logout')
    req.session = null
    res.redirect('/signup')
})
app.get('/about', (req, res)=>{
    res.render('about')
})




app.listen(PORT, ()=>{
 console.log( `server attivo ${PORT}`)
})