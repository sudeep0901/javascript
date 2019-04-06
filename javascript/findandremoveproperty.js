
// find and remove property of an object
if(typeof(myObject.regex) === "undefined"){
    return false;
  }


    function removeProperty(obj, prop) {
  if("undefined" === typeof(  obj[prop])) 
    return false
  
  
  delete obj[prop];
  return true;
}

var myObject = {
    "ircEvent": "PRIVMSG",
    "method": "newURI",
    "regex": "^http://.*"
};


var result = removeProperty(myObject,"regex");
console.log(result);

// find if values is passed or not

function ensure(value) {
  if (value==null || (typeof  value   ==='undefined')) {
    throw "error"
    return
 }
  return value
  
}

 
