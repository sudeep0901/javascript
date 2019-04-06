function hello() {
    console.log("Hello");
}

// this will execute immidiately 
setImmediate(hello);

setInterval(hello,2000);