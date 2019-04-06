// writing asyncrhonously

var fs = require('fs');
var content = "this is the content written by node asyncrhonously";

fs.writeFile('message1.txt'  ,content, (err)=>{
    if (err){
        throw err
    }

    console.log('file written successfully asyncrhonously');
});


//writing   
var content = "this is the content written by node syncrhonously";

var success = fs.writeFileSync('writesync.txt',content);
console.log(success);