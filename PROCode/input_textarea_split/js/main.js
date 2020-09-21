let str = document.getElementById('story').defaultValue;
let btn = document.querySelector('.btnGo');
let inpS = document.querySelector('.created');

let inP = '<input  type ="text" class="input" value=""></input>';

const btnFunc = () => {
    inpS.innerHTML = '';
    for (let i = 0; i <arr.length; i++){
        inpS.innerHTML += inP;
        console.log(inP);
    };
    let inpObjs = document.querySelectorAll('.input');
    let maxWord = 0;
    let maxWordInd = 0;
    for (let i = 0; i < arr.length; i++){ 
        inpObjs[i].value = arr[i];
        if (maxWord < arr[i].length) {
            maxWordInd = i;
            maxWord = arr[i].length;
        };
    };
    console.log(arr[maxWordInd]);
};

let arr = str.split(" ");

btn.addEventListener('click', btnFunc);