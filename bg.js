const body = document.querySelector("body");

const IMG_NUMBER = 3;

function paintNumber(imgNumber){
    const image = new Image();
    image.src = `${imgNumber + 1}.jpg`;
    image.classList.add('bgImage');
    body.appendChild(image);
}

function genRandom(){
    const number = Math.floor(Math.random() * IMG_NUMBER);
    return number;
}


function init(){
    const randomNumber = genRandom();
    paintNumber(randomNumber);
}

init();