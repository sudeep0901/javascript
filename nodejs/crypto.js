var crypto = require('crypto');

var hash = crypto.createHash('md5');

data = hash.update('nodejsera', 'utf-8');

// gen_hash = data.digest( 'hex');

// console.log("Hash : " + gen_hash);

var whlPool = crypto.createHash('whirlpool');

data = hash.update('sudeep patel', 'utf-8');

gen_hash = data.digest();

console.log("whirlpoo: " + gen_hash);
console.log("whirlpoo: " + gen_hash);

