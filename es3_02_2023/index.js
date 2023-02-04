

// vi lascio con l'incarico di sviluppare una semplice applicazione Express, quindi avviate tutto 
// il processo di installazione generale, create e avviate il server.
// La vostra app  deve gestire risorse statiche perchè lavoriamo con interfacce in html.
// Il sito riguarda un vostro hobby, quindi piena libertà del tema.
// Gestite 4 pagine html fra cui la 404
// Sviluppate un menu con i giusti collegamenti relativi al routing della vostra app.
//  Ovviamente la 404 non va collegata a livello di menu
// Le cartelle che contengono fogli di stile e immagini devono essere posti in 
// una sottocartella di public denominata assets => quindi occhio ai link relativi


const express = require('express')
const app = express()
const PORT = 8080
app.use(express.static('public'));

app.get('/', (req, res) =>{
    
    res.sendFile(__dirname + '/public/index.html')
})
app.get('/contatti', (req, res) =>{
    
    res.sendFile(__dirname + '/public/contatti.html')
})
app.get('/servizi', (req, res) =>{
  
    res.sendFile(__dirname + '/public/servizi.html')
})



app.get('*', (req, res) => {
    res.sendFile(__dirname  + '/public/404.html')
    console.log(res)
})

 
app.listen(PORT, () =>{
 console.log(`Server attivo su ${PORT}`)
})