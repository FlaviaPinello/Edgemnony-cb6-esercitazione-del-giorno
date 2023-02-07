// Per oggi è importante che prendiate confidenza con il programma Postman.
// Quindi a parte eseguire correttamente il codice che abbiamo già visto, 
// fate esercizio con il suo funzionamento facendovi aiutare dal sito:
//  https://jsonplaceholder.typicode.com/ 
//  usando magari la risorsa users che contiene meno dati. Eseguite chiamate GET e POST. 
//  Nella chiamata POST aggiungete nuovi dati e inviate. Controllate sempre gli status.
// Impostate il programma per gestire in ingresso e uscita dati JSON.

const express = require ('express')
const {people} = require('./data')
const app = express()
const PORT = 3000

app.use(express.static('./public'))

app.use(express.urlencoded({extended: true}))
app.use(express.json())



app.get('/api/people', (req, res) =>{
    res.status(200).json({success:true, data:people})
})

app.post('/api/people', (req, res) =>{
 const {id, name} = req.body
 if(!id || !name){
    return res
    .status(400)
    .json({success:false, msg: 'non trovo un dato'})
 }
  return res
  .status(200)
  .json({success:true, person: {id:id, name:name}})
})

app.listen(PORT, ()=>{
    console.log(`server in ascolto ${PORT}`)
})
