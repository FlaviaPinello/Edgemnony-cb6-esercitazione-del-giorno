// Perciò, procedi alla creazione di una tua cartella progetto dal nome lista_libri
// Lista libri è una app che offre anche una comoda API per prelevare i dati di alcuni volumi interessanti
// Quindi, dopo la creazione del progetto, crea un file json nel quale inserirai la tua lista, bastano
//  5-6 elementi nei quali puoi gestire titolo, autore, genere, prezzo
// Chiama il tuo file json come vuoi
// Ora crea due file html: un per il percorso di root della home page e uno chi-sono
// Crea ora un server e ricordati che dovrai gestire dei file esterni quindi aggiungi tutti i moduli nativi 
// di cui hai bisogno e il collegamento alla risorsa JSON
// Ora il server dovrà impostare 4 percorsi: root, percorso chi-sono, percorso della tua api che puoi chiamare come vuoi
// Nel percorso api dovrai mostrare i dati del tuo file json
// Nella pagina home crea un menù con i corretti collegamenti alle tue pagine.

const http = require ('http')
const lista_libri = require('./lista_libri')

let server = http.createServer((req, res)=>{
   
res.writeHead(200, {'Contenet-Type': 'application/json'})
res.end(JSON.stringify(lista_libri))

});

const callback = ()=>{
const address = server.address().address;
const port = server.address().port;
console.log (`server in ascolto su http://${address}:${port}`);

};

server.listen(8000, 'localhost', callback)
console.log(lista_libri)