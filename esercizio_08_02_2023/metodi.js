// Ovviamente sotto con la pratica dei metodi HTTP.
// Avete a disposizione un po' di materiale su cui lavorare: o il file data.js o il file articoli.json.
// Questo ultimo file è più ricco di contenuti per gestire meglio le nostre chiamate, creando e modificando il dati.
// Altrimenti, se preferite la risorsa js, sarebbe il caso di aggiungere nuovi elementi all'oggetto people.
// Non fate prove con le immagini perchè ne parleremo domani.
// Quindi, create un nuovo progetto, preparate la vostra risorsa, attivate postman e buon divertimento.
// Solo un'ultima cosa: se non lo avete già fatto provate in postman la chiamata post sulla route /login 
// in modo che sia pronta per domani per essere collegata alla form. Visto che ci siete, aggiungete anche il controllo sullo stato 400

const express = require ('express')
const {products} = require('./data')
// const articoli = require('./articoli')
const app = express()
const PORT = 3000

app.use(express.static('./public'))

app.use(express.urlencoded({extended: true}))
app.use(express.json())



app.get('/api/products', (req, res) =>{
    res.status(200).json({success:true, data:products})
    // res.status(200).json({success:true, data:articoli})
})

app.post('/api/products', (req, res) =>{
 const {id, title} = req.body
// const {body, tags} = req.body
 if(!id || !title){
    // if(!body || !tags){
    return res
    .status(400)
    .json({success:false, msg: 'non trovo un dato'})
 }
  return res
  .status(200)
  .json({success:true, person: {id:id, title:title}})
// .json({success:true, articoli: {body:body, tags:tags}})
})

app.post('/api/products/new', (req, res)=>{
    const {id, title} = req.body
    if(!id || !title){
        // if(!body || !tags){
        return res
        .status(400)
        .json({success:false, msg: 'non trovo un dato'})
     }
      return res
      .status(201)
      .json({success:true, data:[...products, {id:id, title:title}]})
    // .json({success:true, articoli: {body:body, tags:tags}})
    })

//POST  CON DATO DA FORM
app.post('/login', (req, res)=>{
    const {name} = req.body
    if(name){
        return res
        .status(200)
        .send( `Benvenuto/a ${name} `)
    }
})
    
app.put('/api/products/:id', (req, res)=>{
 const {id} = req.params
 const {name} = req.body

 const product = products.find((product)=> product.id === Number(id))

 if(!product){
    return res
    .status (400)
    .json({success:false, msg: `non c'è nessun prodotto con id: ${id}`})
 }
  const newProduct = product.map((product) =>{
    if(product.id === Number(id)){
     product.title = title
    }
    return product
  })
  res.status(200).json({success: true, data: newProduct})

})

app.delete('/api/products/:id', (req, res) =>{
    const product = products.find((product)=>product.id === Number(req.params.id))

    if(!product){
        res
        .status(400)
        .json({success:false, msg :`non c'è nessun prodotto con id: ${req.params.id}`})
    }
    const newProduct = products.filter((product) => product.id !== Number(req.params.id))
    return res
    .status(200)
    .json ({success: true, data: newProduct})
})
app.listen(PORT, ()=>{
    console.log(`server in ascolto ${PORT}`)
})
