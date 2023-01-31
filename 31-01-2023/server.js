// implementate l'applicazione con i percorsi per mostrare 2 pagine html, per esempio, 
// una pagina prodotti e una pagina cliente, oltre alla home page che è già impostata.
// Fate attenzione a cosa vi servirà per mostrare e poi integrare le due pagine esterne.

const http = require('http')
const os = require('os')
let utente = os.userInfo();
let piattaforma  = os.platform();
let data = new Date();
let messaggio = `<!doctype html>
<html>
<head>
</head>
<body>
l'utente <b>${utente.username} </b> 
ha avviato l'app il giorno 
<b>${data}</b> usando la piattaforma: ${piattaforma}
</body>
</html>`;
const server = http.createServer((req, res) => {
    if(req.url === '/')
        res.end(messaggio)
})
server.listen(3001)
console.log(messaggio)