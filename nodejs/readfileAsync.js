// reading file usign node js

fs = require('fs');
// reading asyncrhonously 
fs.readFile('message.txt',(err, data)=>{
    if(err){
        throw err;
    }
    console.log("File data:" + data);

});

    setTimeout(() => console.log("reading file ansyncrhonously"),5000);
