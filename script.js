function showMessage(){

alert("Welcome to my personal website!");

}

function changeBackground(){

const colors = ["#f2f2f2","#dff6ff","#fde2e4","#e4f9f5"];

const random = Math.floor(Math.random() * colors.length);

document.body.style.background = colors[random];

}

function showTime(){

const now = new Date();

const time = now.toLocaleTimeString();

document.getElementById("time").innerHTML = "Current time: " + time;

}