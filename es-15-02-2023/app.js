// Quindi create e connettetevi ad un db chiamato school, dentro create 
// 2 collection: students e courses. La collection student raccoglie, 
// nome, cognome, matricola (scegliete un codice numerico), corsi ai quali lo studente è iscritto, esami da sostenere. 
// Nella collection courses: nome del corso, materia, docenti.
// Inserite per ogni collections un discreto numero di documenti sui quali dovrete applicare le 
// 4 operazioni CRUD: Creo, Leggo, Modifico/aggiorno, Cancello.
// Utilizzate le opzioni di find => One / Many e così di insert.


const MongoClient = require ('mongodb').MongoClient
let url = "mongodb+srv://Flavia:chelemi85@cluster0.cdpbpna.mongodb.net/mongo?retryWrites=true"


// MongoClient.connect(url)
// .then((db)=>{
//      accountDb = db
//      collection = accountDb.db('school')
//      console.log('database connesso')
//     })
//     .catch((err) => {
//         console.log(err);
//     });

//     MongoClient.connect(url, function(err, db) {
//         if (err) throw err;
//         let dbase = db.db("school");
//         dbase.createCollection("studenti", function(err, res) {
//             if (err) throw err;
//             console.log("Collection creata");
//             db.close();
//         });
//     });
//     MongoClient.connect(url, function(err, db) {
//         if (err) throw err;
//         let dbase = db.db("school");
//         dbase.createCollection("courses", function(err, res) {
//             if (err) throw err;
//             console.log("Collection creata");
//             db.close();
//         });
//     });

    

//     MongoClient.connect(url , (err, db) =>{
//     if (err) throw err;
//     let dbase = db.db("school");

//     let myObj = [
//         {nome: "paolino", anni: "20",cognome:"paperino", matricola: "313", corsi:"fortunologia applicata", esami_da_sostenere: "riposino avanzato"},
//         {nome: "paperina", anni: "19",cognome:"paperina", matricola: "314", corsi:"ma ci sei o ci fai", esami_da_sostenere: "fedeltà"},
//         {nome: "Gastone", anni: "19",cognome:"paperone", matricola: "1313", corsi:"fortunologia", esami_da_sostenere: "ritrovamento quadrifogli"},
//         {nome: "paperon", anni: "60",cognome:"de paperoni", matricola: "1", corsi:"economia", esami_da_sostenere: "spilorceria"}

//     ]

//     dbase.collection('studenti').insertMany(myObj, (err, res) =>{

//         if (err) throw err;
//         console.log(`Numero di record inseriti: ${res.insertedCount}`)
//         db.close();
//     })
// })
// MongoClient.connect(url , (err, db) =>{
//     if (err) throw err;
//     let dbase = db.db("school");

//     let myObj = [
//         {nome_del_corso: "fortunologia applicata",materia:"fortuna base", docente: "natofortunato"},
//         {nome_del_corso:"ma ci sei o ci fai",materia:"smorfiosità", docente: "DitaVon"},
//         {nome_del_corso: "fortunologia",materia:"ci si nasce", docente: "lotteriadellostato"},
//         {nome_del_corso: "economia",materia:"dindini", docente: "agenziadellentrate"}
        
//     ]

//     dbase.collection('courses').insertMany(myObj, (err, res) =>{

//         if (err) throw err;
//         console.log(`Numero di record inseriti: ${res.insertedCount}`)
//         db.close();
//     })
// })


//SELEZIONO UN DATO
// MongoClient.connect(url, (err, db) =>{
//     if (err) throw err;
//     let dbase = db.db("school");
//     dbase.collection('studenti').findOne({}, (err, res) =>{
//         if (err) throw err;
//         console.log(res.nome)
//         db.close();
//     })
// })

//SELEZIONO TUTTI I DATI
// MongoClient.connect(url, (err, db) => {
//     if (err) throw err;
//     let dbase = db.db("school");
//     dbase.collection('courses').find({}).toArray(function (err, res) {
//         if (err) throw err;
//         console.log(res)
//         db.close();
//     })
// })



//MODIFICO
// MongoClient.connect(url, (err, db) => {
//     if (err) throw err;
//     let dbase = db.db("school");

//     let query = {docente:"DitaVon"}
//     let newValue = {$set: {docente:"DitaVonTeese"}}
//     dbase.collection('courses').updateOne(query, newValue ,function(err, res) {
//         if (err) throw err;
//         console.log(`record(s) aggiornati` )
//         db.close();
//     })
// })


//ELIMINA
MongoClient.connect(url, (err, db) => {
    if (err) throw err;
    let dbase = db.db("school");

    let query = {anni:'60'}
    dbase.collection('studenti').deleteMany(query, function(err, obj) {
        if (err) throw err;
        console.log(`${obj.result} records cancellati` )
        db.close();
    })
})
