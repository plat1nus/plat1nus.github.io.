let myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'image.pngs/firefox-icon') {
      myImage.setAttribute ('src','videos/1127f03c832f3ee0b2a51265e385828e2d910686.gif');
    } else {
      myImage.setAttribute ('src','videos/1127f03c832f3ee0b2a51265e385828e2d910686.gif');
    }
}

var button1 = document.querySelector('button');
var heading = document.querySelector('h1');

function setUserName() {
    var myName = prompt('Please enter your name.')
    localStorage.setItem('name', myName);
    heading.textContent = 'Mozilla is cool, ' + myName;
}

if (!localStorage.getItem('name')) {
    setUserName();

} else {
    var storedName = localStorage.getItem('name');
    heading.textContent = 'Mozilla is cool, ' + storedName;
}

button1.onclick = function() {
    setUserName();
  }