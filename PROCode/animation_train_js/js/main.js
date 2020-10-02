document.onkeydown = goKey;

let moveX = 400;
let lightX = -250;
let headingLeft = true;

const btnLeft = document.querySelector('.btn-left');
const btnRight = document.querySelector('.btn-right');

const btnLight = document.querySelector('.btn-light');
let searchLight = document.getElementById('searchlight');

btnLight.innerHTML = 'Light Off';
searchLight.classList.add('light-off');
function moveLeft (){   
    if(!headingLeft) {
        document.getElementById('train').classList.remove('train-right');
        headingLeft = true;
    }
    if (moveX<5) { 
        moveX = 0;
    } else {
        moveX -= 5;      
    }
    document.getElementById('train').style.left = moveX + "px"; 
};

function moveRight (){
    if(headingLeft) {
        document.getElementById('train').classList.add('train-right');
        headingLeft = false;
    }
    if (moveX > 545) {
        moveX = 550;
    } else { 
        moveX += 5;
    }  
    document.getElementById('train').style.left = moveX + "px";
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
}

function goKey(t) {
    t = t || window.event;
    switch(t.keyCode){
        case 37 : moveLeft();
        break;
        case 39 : moveRight();
        break;
        case 70 : toggleLight();
    }
};

btnLeft.addEventListener('click', (ev) => {
    moveLeft();
});

btnRight.addEventListener('click', (ev) => {
    moveRight();
});

btnLight.addEventListener('click', (ev) => {
    toggleLight();
});
  
