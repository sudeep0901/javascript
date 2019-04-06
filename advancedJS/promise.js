<<<<<<< HEAD

let myFirstPromise = new Promise((resolve, reject) => {
  // We call resolve(...) when what we were doing asynchronously was successful, and reject(...) when it failed.
  // In this example, we use setTimeout(...) to simulate async code. 
  // In reality, you will probably be using something like XHR or an HTML5 API.
    data = 2 + 2
  setTimeout(function(){
    resolve(data); // Yay! Everything went well!
  }, 250);
});

let successMessage ="Hello i am passed to message";
myFirstPromise.then((successMessage) => {
  // successMessage is whatever we passed in the resolve(...) function above.
  // It doesn't have to be a string, but if it is only a succeed message, it probably will be.
  console.log("Yay! " + successMessage);
});
// an immediately resolved promise
let promise1 = new Promise(resolve => resolve("done!"));

promise1.then(alert); // done! (shows up right now)

// an "immediately" resolved Promise
const executor = resolve => resolve("done!");
const promise2 = new Promise(executor);

promise2.then(alert); // this alert shows last (*)

function loadScript(src) {
    return new  Promise(function(resolve,reject) {
        let script = document.createElement('script');
        script.src = src;

        script.onload = () => resolve(script);
        script.onerror = () => reject(new Error("Script load error:" + src));
       document.head.append(script);
    });
}


let promiseLoad = loadScript("https://cdnjs.cloudflare.com/ajax/libs/lodash.js/3.2.0/lodash.js");

promiseLoad.then(
    script => alert(`${script.src} is loaded`),
    error => alert(`Error: ${error.message}`)
);

promiseLoad.then(script=>alert('One or more handler to do something else!'));


function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
function go() {
    showCircle(150, 150, 100).then(div => {
      div.classList.add('message-ball');
      div.append("Hello, world!");
    });
  }

  function showCircle(cx, cy, radius) {
    let div = document.createElement('div');
    div.style.width = 0;
    div.style.height = 0;
    div.style.left = cx + 'px';
    div.style.top = cy + 'px';
    div.className = 'circle';
    document.body.append(div);

    return new Promise(resolve => {
      setTimeout(() => {
        div.style.width = radius * 2 + 'px';
        div.style.height = radius * 2 + 'px';

        div.addEventListener('transitionend', function handler() {
          div.removeEventListener('transitionend', handler);
          resolve(div);
        });
      }, 0);
    })
  }
test = delay(3000).then(()=> alert("Code executed after 3k MS"));
console.log(test);


alert("code finished"); // this alert shows first
=======
var promise1 = new Promise(function (resolve, reject) {
    setTimeout(resolve, 100, 'foo');
});

console.log(promise1);

let myFirstPromise = new Promise((resolve, reject) => {
    setTimeout(function () {
        resolve("Sucess!");
    }, 250);
});

mp = myFirstPromise;
myFirstPromise.then((successMessage) => {
    console.log(successMessage);
});


function imgLoad(url) {

    return new Promise(function (resolve, reject) {
        var xhr = new XMLHttpRequest();
        xhr.open('GET', url);
        xhr.responseType = 'blob';

        xhr.onload = function () {
            if (xhr.status == '200') {
                resolve(xhr.response);
            } else {
                reject("Image didn\'t load successfully; err cdode" + xhr.statusText)
            }
        }

        xhr.onerror = function () {
            reject(Error("request ended in error"))
        }

        xhr.send();

    });
}

// Get a reference to the body element, and create a new image object
var body = document.querySelector('body');
var myImage = new Image();
// Call the function with the URL we want to load, but then chain the
// promise then() method on to the end of it. This contains two callbacks
imgLoad('myLittleVader.jpg').then(function (response) {
    // The first runs when the promise resolves, with the request.response
    // specified within the resolve() method.
    var imageURL = window.URL.createObjectURL(response);
    myImage.src = imageURL;
    body.appendChild(myImage);
    console.log(myImage);
    // The second runs when the promise
    // is rejected, and logs the Error specified with the reject() method.
}, function (Error) {
    console.log(Error);
});
// function myAsyncFuntion(url) {

// return new Promise((resolve, reject) => {

// const xhr = new XMLHttpRequest();


// xhr.open("GET", url, true);

// xhr.onload = () => resolve(xhr.responseText);
// xhr.onerr = () => reject(xhr.statusText);
// xhr.send();

// });
// };

// myAsyncFuntion("http://google.com");

//handling error gloablly 

window.addEventListener('unhandledrejection', function (event) {
    alert("Event" + event.Promise);
    alert("Event" +  event.reason);
});
new Promise(function() {
    throw new Error("Unhandeled Whoops!");
  });

  Promise.all([
    new Promise((resolve, reject) => setTimeout(() => resolve(1), 1000)),
    new Promise((resolve, reject) => setTimeout(() => reject(new Error("Whoops!")), 2000)),
    new Promise((resolve, reject) => setTimeout(() => resolve(3), 3000))
  ]).catch(alert);

  Promise.all([
    new Promise((resolve, reject) => {
      setTimeout(() => resolve(1), 1000)
    }),
    2, // treated as Promise.resolve(2)
    3  // treated as Promise.resolve(3)
  ]).then(alert); // 1, 2, 3


  Promise.race([
    new Promise((resolve, reject) => setTimeout(() => resolve(1), 1000)),
    new Promise((resolve, reject) => setTimeout(() => reject(new Error("Whoops!")), 2000)),
    new Promise((resolve, reject) => setTimeout(() => resolve(3), 3000))
  ]).then(alert); // 1

//   Promise.resolve(1).then(alert(console.log(alert)));
>>>>>>> 76cf8c886aef99091d290539d93571e6b0e1b531
