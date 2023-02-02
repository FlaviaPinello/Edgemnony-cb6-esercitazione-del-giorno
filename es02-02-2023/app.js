const http = require('http')
const fs = require ('fs')

const server = http.createServer((req, res)=>{
    if(req.url === '/'){
        res.writeHead(200, {'Contenet-Type' : 'text/html'});
    
        let html = fs.readFileSync('index.html');
        res.end(html)
    }else if(req.url === '/api/chi_sono'){
        res.writeHead(200, {'Contenet-Type' : 'application/json'});
        const user = JSON.stringify({
           "name": "Inheterance",
           "autore": "C.Paolini",
           "prezzo": "20€",
           "genere": "fantasy"
        });
        res.end(user)

    }else{
        res.writeHead(404);
        res.end('Not found');
    }

}).listen(8181);
console.log('server attivo')