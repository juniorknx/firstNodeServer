const http = require('http');
const fs = require('fs');
const contents = fs.readFileSync('index.html');

http.createServer(function(req, res){
    res.end(contents);
}).listen(8080);