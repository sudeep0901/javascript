var buff = Buffer.alloc(20);var fs = require('fs');
console.log(buff);

buff = Buffer.alloc(20,1);
console.log(buff);

buff = Buffer.alloc(20, 'A');
console.log(buff);

buff = Buffer.alloc(20, 'Z');
console.log(buff);
console.log(buff.toString());

// unsafeBuff = Buffer.allocUnsafe(2147483647);

// fs.writeFile('buffer.txt',unsafeBuff);

// var json = unsafeBuff.toJSON(unsafeBuff);
// console.log(json);

buffString = Buffer.from("Sudeep");

console.log(buffString);
console.log(buffString.toString());

							
//Name of the file : buffer.compare.js
var buffer1 = Buffer.from('Nodejsera');
var buffer2 = Buffer.from('Nodejsera');
var output = buffer1.compare(buffer2);
console.log(output)
if(output < 0) {
   console.log(buffer1 +" comes before " + buffer2);
}else if(output == 0){
   console.log(buffer1 +" is same as " + buffer2);
}else {
   console.log(output +" comes after " + buffer2);
}						

//Name of the file : buffer.copy.js
var buff = Buffer.from('Nodejsera');
var newbuff = Buffer.alloc(20);
buff.copy(newbuff);
console.log("Content of newbuff :  " + newbuff.toString());					
                                                    

//Name of the file : buffer.fill.js
var buff = Buffer.allocUnsafe(10).fill('nj');
console.log(buff.toString());					
                                    

//Name of the file : buffer.indexOf.js
var buff1 = Buffer.from('Nodejsera');
console.log(buff1.indexOf('j'));	
						
