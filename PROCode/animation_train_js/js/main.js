document.onkeydown = keyDown;
document.onkeyup = keyUp;

let minX = 0;
let maxX = 545;
let lightX = -250;
let headingLeft = true;

const train = document.getElementById('train');

const animationSpeed = 100;
let trainMove = train.offsetLeft;
let speedTrain = trainMove/animationSpeed;

const btnLeft = document.querySelector('.btn-left');
const btnRight = document.querySelector('.btn-right');

const btnLight = document.querySelector('.btn-light');
let searchLight = document.getElementById('searchlight');

btnLight.innerHTML = 'Light Off';
searchLight.classList.add('light-off');

function moveLeft (){   
    if(!headingLeft) {
        train.classList.remove('train-right');
        headingLeft = true;
    };
    trainMove = train.offsetLeft;
    train.style.left = minX + "px";
    speedTrain = trainMove/animationSpeed;
    train.style.transitionDuration=(speedTrain)+'s';
};

function moveRight (){
    if(headingLeft) {
        train.classList.add('train-right');
        headingLeft = false;
    };
    trainMove = train.offsetLeft;
    train.style.left = maxX + "px";
    speedTrain = (maxX - trainMove)/animationSpeed;
    train.style.transitionDuration=(speedTrain)+'s';
};

pauseTrain = () => {
    let temp = window.getComputedStyle(train).getPropertyValue('left');
    console.log(temp);
    train.style.left = temp;
};

function toggleLight() {
    if ( btnLight.innerHTML == 'Light Off') {
        btnLight.innerHTML = 'Light On';
        searchLight.classList.remove('light-off');
        searchLight.classList.add('light-on');
   } else if (btnLight.innerHTML == 'Light On'){
         btnLight.innerHTML = 'Light Off';
         searchLight.classList.remove('light-on');
         searchLight.classList.add('light-off');
     };   
};

function keyDown(t) {
    t = t || window.event;
    switch(t.keyCode){
        case 37 : moveLeft();
        break;
        case 39 : moveRight();
        break;
        case 70 : toggleLight();
    }
};

function keyUp(t) {
    t = t || window.event;
    switch(t.keyCode) {
        case 37 : pauseTrain();
        break;
        case 39 : pauseTrain();
    }
};

btnLeft.addEventListener('mousedown', moveLeft);
btnLeft.addEventListener('mouseup', pauseTrain);
btnRight.addEventListener('mousedown', moveRight);
btnRight.addEventListener('mouseup', pauseTrain);
btnLight.addEventListener('mousedown', toggleLight);
