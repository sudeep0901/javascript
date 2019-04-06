// window.open('http://javascript.info/');

// setTimeout(() => window.open('http://google.com'), 3000);
setTimeout(() => window.open('popupwindow.1.html'), 1000);

let params = `scrollbars=no,resizable=no,status=no,location=no,toolbar=no,menubar=no,
width=600,height=300,left=100,top=100`;

setTimeout(() => window.open('popupwindow.1.html', 'using new window', params), 1000);

let newWindow = open('popupwindow.1.html', 'example', 'width=300,height=300')
newWindow.focus();

newWindow.onload = function() {
  let html = `<div style="font-size:30px">Welcome!</div>`;
  newWindow.document.body.insertAdjacentHTML('afterbegin', html);
};