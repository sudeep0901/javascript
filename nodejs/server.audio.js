// server serving json
var http = require('http');
var fs = require('fs');
var host = '127.0.0.1';

var port = 3000;

var server = http.createServer(function(request, response){

    response.writeHead(200, {'Content-Type': "audio/mp3"});
    //Create a JSON
    fs.exists('audio.mp3', (exists) =>{
        if (exists){
            var rstream = fs.createReadStream('audio.mp3');
            rstream.pipe(response);
            console.log(rstream);
            console.log("read mp3 file successfull");
            //sending response
        }
        else{
                        response.end("its 404");

        }
        
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
