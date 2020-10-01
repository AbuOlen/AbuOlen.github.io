document.onkeydown = goKey;

let moveX = 400;
let headingLeft = true;
const btnLeft = document.querySelector('.btn-left');
const btnRight = document.querySelector('.btn-right');

const btnLight = document.querySelector('.btn-light');

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
}

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
}

function goKey(t) {
    t = t || window.event;
    switch(t.keyCode){
        case 37 : moveLeft();
        break;
        case 39 : moveRight();
        break;
    }
};

btnLeft.addEventListener('click', (ev) => {
    moveLeft();
});

btnRight.addEventListener('click', (ev) => {
    moveRight();
});


  
