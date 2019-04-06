var ws = require('fs');

console.time('Print');

const {Console} = require('console');

const output = ws.createWriteStream('./stdout.log');
const errOutput = ws.createWriteStream('./stderr.log');

//custom print
const print= new Console(output, errOutput);

const name ="sudeep";
print.log("name :%d", name);
print.log("this will be stroed in log file");


console.log('creating log statement');
console.count('log');


setTimeout(()=>{
console.clear('clearing log statement');
    },10000);
console.log("Clearing consoole");

console.timeEnd("Print");