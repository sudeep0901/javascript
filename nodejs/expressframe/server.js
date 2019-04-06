var express = require('express');

var app = express();

app.get('/', function(req, res){
    res.send('hello World');
});

app.get('/signup', function(req,res){

    var name=req.query.name;
    var email=req.query.email;
    var password = req.query.password;

    console.log(name + ' ' + email + ' ' + password);

    res.send('signup module');
});

app.get('/signin', function(req,res){
       res.send('signin')
});

app.listen(3000, function(){
    console.log("server running on 3000. . . .:");
});