const buttonNumber = document.getElementById('button-number');
const buttonName = document.getElementById('button-name');
const p = document.getElementById("result");

buttonNumber.addEventListener('click',fNumber);
buttonName.addEventListener('click',fName);

function fNumber() {
    p.innerHTML=`Your lucky numbers are ${Math.floor((Math.random() * 100) + 1)} and ${Math.floor((Math.random() * 100) + 1)}`
    console.log('number button is clicked');
}

function fName() {
    p.innerHTML = "My name is Garikapati Rajesh Chowdary"
    console.log('name button is clicked');
}