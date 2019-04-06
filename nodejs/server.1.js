// server serving json
var http = require('http');
var fs = require('fs');
var host = '127.0.0.1';

var port = 3000;

var server = http.createServer(function(request, response){

    response.writeHead(200, {'Content-Type': "text/json"});
    //Create a JSON
    let json_response = {
        status: 200,
        message: 'succssful',
        result: ['sunday', 'monday', 'tuesday', 'wednesday'],
        code: 2000
    }
    // response.write('<h1>Hello World</h1>');
        console.log("read html file successfull");
        //sending response
        console.log(json_response);
        response.end(JSON.stringify(json_response));
    console.log("server created and started.....");
    // response.end('Server workign Success');
});

server.listen(port, host, function (error){
    if (error) {
        return console.log("Error occurred", error);
    }
    
    console.log("server is listening on:" + host + ':' + port);

});
