var os = require('os');
var prettyjson = require('prettyjson');

var value = os.cpus();
var options = {
    noColor: false
  };
   
console.log("os.cpus()===>", JSON.stringify(value),null, 4);
console.log(prettyjson.render(value, options));
console.log(prettyjson.render(os.arch(), options));
console.log(prettyjson.render(os.endianness(), options));
console.log(prettyjson.render(os.freemem(), options));
console.log(prettyjson.render(os.hostname(), options));
console.log(prettyjson.render(os.homedir(), options));
console.log(prettyjson.render(os.hostname(), options));
console.log(prettyjson.render(os.platform(), options));
console.log(prettyjson.render(os.release(), options));
console.log(prettyjson.render(os.totalmem(), options));
console.log(prettyjson.render(os.tmpdir(), options));
console.log(prettyjson.render(os.userInfo(), options));
console.log(prettyjson.render(os.type(), options));










