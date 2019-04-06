

if (window == top) { // current window == window.top?
  alert('The script is in the topmost window, not in a frame');
} else {
  alert('The script runs in a frame!');
}
iframe.onload = function () {
  // we can get the reference to the inner window
  let iframeWindow = iframe.contentWindow;
  iframe.contentDocument.body.prepend("Hello, world!");
  try {
    // ...but not to the document inside it
    let doc = iframe.contentDocument;
  } catch (e) {
    alert(e); // Security Error (another origin)
  }

  // also we can't read the URL of the page in it
  try {
    alert(iframe.contentWindow.location);
  } catch (e) {
    alert(e); // Security Error
  }

  // ...but we can change it (and thus load something else into the iframe)!
  iframe.contentWindow.location = '/'; // works

  // iframe.onload = null; // clear the handler, to run this code only once
};


let oldDoc = iframe.contentDocument;

// every 100 ms check if the document is the new one
let timer = setInterval(() => {
  if (iframe.contentDocument == oldDoc) return;

  // new document, let's set handlers
  iframe.contentDocument.addEventListener('DOMContentLoaded', () => {
    iframe.contentDocument.body.prepend('Hello, world!');
  });

  clearInterval(timer); // cancel setInterval, don't need it any more
}, 100);
alert(iframe.contentWindow == frames[0]); // true
  alert(iframe.contentWindow == frames.win); // true