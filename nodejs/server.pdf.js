// server serving json
var http = require('http');
var fs = require('fs');
var host = '127.0.0.1';

var port = 3000;

var server = http.createServer(function(request, response){

    response.writeHead(200, {'Content-Type': "application/pdf"});
    //Create a JSON
    fs.readFile('bill.pdf', (error, data) =>{
        if (error){
            response.json({'status':'error', msg:err});
        }
        response.write(data);
        console.log("read pdf file successfull");
        //sending response
        response.end();
    });
    // response.write('<h1>Hello World</h1>');
        
    console.log("server created and started.....");
    // response.end('Server workign Success');
});

server.listen(port, host, function (error){
    if (error) {
        return console.log("Error occurred", error);
    }
    console.log("server is listening on:" + host + ':' + port);
});
