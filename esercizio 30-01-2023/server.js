const http = require('http');

const server = http.createServer((req, res) => {

   
    if(req.url === '/')
res.end('pagina iniziale')
else if(req.url === '/studenti')
res.end('pagina 2');
else if(req.url === '/corsi')
res.end ('pagina 3');

else{
    res.writeHead(404)
    res.end('pagina non trovata')
}
});

server.listen(3000);

