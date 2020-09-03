let flagWidth = null;
let flagHeight = null;
let flagBackgroundLG = null;
let tempHeight = 100;
let tempWidth = 200;
let one = 1;

/***** НИЖЕ ЭТОГО КОММЕНТАРИЯ НАПИШИТЕ СВОЙ КОД *****/

// let flag = document.getElementById('flag');

flagHeight = String(tempWidth + tempHeight) + "px";
flagWidth = String((tempWidth << one) + tempHeight) + "px";
let ff = tempWidth + (tempHeight >> one) + one+one+one+one+one;
let nl = one >> one;
flagBackgroundLG = `rgb(${nl}, ${nl}, ${ff}) ${tempHeight >> one}%, rgb(${ff},${ff},${nl}) ${tempHeight >> one}% `;

console.log(flagBackgroundLG);


/***** ВЫШЕ ЭТОГО КОММЕНТАРИЯ НАПИШИТЕ СВОЙ КОД *****/
/*

.flag { 
  width: <значение переменной flagWidth>;
  height: <значение переменной flagHeight>;
  background: linear-gradient(<значение переменной flagBackgroundLG>);
}

*/

flag.style.height = flagHeight;
flag.style.width = flagWidth;
flag.style.background =`linear-gradient( ${ flagBackgroundLG } )`;


