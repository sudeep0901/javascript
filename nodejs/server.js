var http = require('http');
var fs = require('fs');
var host = '127.0.0.1';

var port = 3000;

var server = http.createServer(function(request, response){

    response.writeHead(200, {'Content-Type': "text/html"});

    // response.write('<h1>Hello World</h1>');
    fs.readFile('index.html', (err, data)=>{
        if(err){
            throw err;
        }

        console.log("read html file successfull");
        //sending response
        console.log(data);
        response.end(data);
    });
    console.log("server created and started.....");
    // response.end('Server workign Success');
});

server.listen(port, host, function (error){
    if (error) {
        return console.log("Error occurred", error);
    }
    console.log("server is listening on:" + host + ':' + port);

});
