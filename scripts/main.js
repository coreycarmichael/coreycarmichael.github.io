const myHeading = document.querySelector('h1');
myHeading.textContent = 'Corey Carmichael';

let myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/lighthouse.png') {
      myImage.setAttribute('src','images/fixedbronco.png');
    } else {
      myImage.setAttribute('src','images/lighthouse.png');
    }
}

