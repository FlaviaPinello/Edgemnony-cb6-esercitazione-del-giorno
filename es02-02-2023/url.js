const http = require('http')
const url = require('url')

let server = http.createServer(function(req, res){
    let page = url.parse(req.url).pathname;
    console.log(page);
    res.writeHead(200, {'Contenet-Type' : 'text/plan'});
    if(page === '/'){
        res.write( 'Home');
    }else{
        res.write('not found');
    }
    res.end();
 }).listen(5000);