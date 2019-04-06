var fs = require('fs');

fs.rename('data.txt', 'new_data.txt', (err) =>{
    if(err)
        throw err;

    console.log("file renamed Successfully asyncrhnously");
});

    console.log("file renamed asyncrhnously");

    // rename file asyncrhonously
    fs.renameSync('new_data.txt', 'data.txt');
    console.log("file renamed synchronously");
