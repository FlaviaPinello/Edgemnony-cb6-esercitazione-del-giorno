const http = require('http')
const fs = require ('fs')
const homePage = fs.readFileSync('index.html');
let server = http.createServer((req, res)=> {
if(req.url === '/cliente')
res.end('pagina cliente')
else if(req.url === '/prodotti')
res.end('pagina prodotti')
else if(req.url === '/')
res.end(homePage)
else{
    res.writeHead(404)
    res.end('Sorry, not found')
}
})
server.listen(3000)