// reading file usign node js

fs = require('fs');
// reading asyncrhonously 
var data = fs.readFileSync('message.txt',(err, data)=>{
    if(err){
        throw err;
    }

});

    setTimeout(() => console.log("reading file ansyncrhonously"),5000);
    console.log("File data:" + data);
