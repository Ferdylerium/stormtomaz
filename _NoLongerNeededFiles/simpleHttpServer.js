var http = require("http");

var server = http.createServer(function onRequest(request, response){
    
    response.writeHead(200, {'content-type': 'text/plain'});
    response.write("This is a simple HttpServer.");
    response.end();
    
}).listen(process.env.PORT, process.env.IP);