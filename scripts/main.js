let myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySource = myImage.getAttribute('src');
    if(mySource == "images/earth_large.jpg")
        myImage.setAttribute("src", "images/earth-medium.jpg");
    else
        myImage.setAttribute("src", "images/earth_large.jpg");
      
}

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

myButton.onclick = function() {
    setUsername();
}

function setUsername() {
    let name = prompt("Enter your name:");
    if(!name) {
        setUsername();
    } else {
        localStorage.setItem('name', name);
        myHeading.textContent = 'Earth by ' + name;
    }
}


if(!localStorage.getItem('name')) {
    setUsername();
} else {
    let storedName = localStorage.getItem('name');
    myHeading.textContent = "Earth by " + storedName;
}

