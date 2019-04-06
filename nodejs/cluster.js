var cluster = require('cluster');
var http = require('http');

var numOfCpu = require('os').cpus().length;

console.log("Nmber of CPU's: " + numOfCpu);


if (cluster.isMaster) {

    console.log(`Master with process ID : ${process.pid} is running`);

    // Fork workder 
    for (var i = 0; i < numOfCpu; i++) {
        cluster.fork();

    }

    cluster.on('exit', (worker, code, signal) => {
        console.log(`worker with process ID : ${worker.pid} died`);
    });
} else {

    // worker sharing http server
    http.createServer((req, res) => {
        res.writeHead(200);
        res.end("an example of cluster \n" + process.pid);

    }).listen(3000);

    console.log(`Worker with Process ID : ${process.pid} started`);
}