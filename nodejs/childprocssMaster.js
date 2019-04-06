//Master spawn process

console.log("Master process number " + process.argv[2] + "is excecuted");

var cp = require("child_process");

for (var i = 1; i < 6; i++) {

    var worker = cp.spawn('node', ['childprocssSlave.js', i, "Hello "]);

    worker.stdout.on('data', function (data) {
        console.log("value of stdout :" + data);
        console.log(data);

        

    });

    worker.stderr.on('data', function (data) {
        console.log("value of stdout :" + data);
    });

    worker.on('close',function(code){
        console.log("Exit code", code);
        
    });

}