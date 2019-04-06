var fs = require('fs');
var error = new Error("This is error from NodeJS");

error.code = '9999';
console.log(error.message);
console.log(error.message);
console.log(error);

console.log(error.message);
console.log(error.code);
console.log(error.stack);




//Reading a File Asynchronously using nodejs
//if any error occurs such as file not found
//we don't have permissions , etc
//then an err message will be console.
//otherwise data will be printed
var fs = require('fs');

// err = fs.readFile('message3.txt', (err, data) => {
// 	if (err) 
// 		return console.error(err);

// 	console.log("Content :  " + data);
// });


function nSCallback(error, data) {
    if (error) {
        console.error('Error : ', error);
        return error;
    }
    console.log(data);
}
fs.readFile('file_that_exists', nSCallback);
fs.readFile('file_does_not_exists', nSCallback);
console.log("errro handled");