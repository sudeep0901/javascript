function foo() {
    console.log("foo funciotn.....");
}



// IIFE 
// (function. ) function expression
// II - () at the end of functin 

(function () {

    console.log("Inside of IIFE ...... ");

})();


// See II - Both valided before and after curly
(function () {
    console.log("Inside of IIFE Other format to define ...... ");
}());

// IIFE WITH PARAMETERS
(function (name) {
    console.log("Inside of IIFE Other format to define ...... ");
    console.log(name);
}('sudeep'));


// AMD Format - Reuire JS will load the modules



//commonJS Format
var player = require('./player.js');
var game = require('./game.js');

console.log("Strating Common JS FOrmat with systemJS Application...............");

//add a click event handler to start game button
document.getElementById('startGame').addEventListener('click', function () {

    player.setName(document.getElementById('playername').value);
    game.printGame();

});

//add a click event handler to start game button
document.getElementById('calculate').addEventListener('click', function () {
    player.setName(document.getElementById('playername').value);
    game.calculateScore();

});

//add a click event handler to start game button

document.getElementById('problemCount').value = game.getProblemCount();

document.addEventListener('DOMContentLoaded', function (event) {
    console.log("DOM FUllly loaded1");
});