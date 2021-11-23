import style from './style.scss';

let arr = "Welcome to Webpack 5".split("");
const heading = document.getElementById("app")

let i = 0;
function showLetters() {
    return () => arr[i++];
}

const getChar = showLetters();

let interval = setInterval(function() {
    const span = document.createElement("span");
    span.textContent = getChar();
    heading.appendChild(span);
    
    if(arr.length === i) {
        clearInterval(interval);
        heading.style.color = "#ffffff"
        document.body.style.background = getColor();
    }
}, 300);

function getColor() {
    const colors = ["#552277", "#550055", "#330055"];
    const index = Math.floor(Math.random() * colors.length);
    return colors[index];
}

