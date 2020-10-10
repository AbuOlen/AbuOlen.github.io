const numbeR = 5;

function arrayCreate(rows, cols, defaultValue) {
  let arr = [];

  for (let i = 0; i < rows; i++) {
    arr.push([]);

    arr[i].push(new Array(cols));

    for (let j = 0; j < cols; j++) {
      arr[i][j] = defaultValue;
    }
  }
  return arr;
}
let arr = arrayCreate(numbeR, numbeR, numbeR);
console.log(arr);

// -----------2. empty Array--------------

arr = arrayCreate(numbeR, numbeR, null);
console.log(arr);

//------------- 3. quantity---------------

let quant = 0;
const quantityCell = document.querySelector(".quantity");

function calculateQuantity() {
  quant = 0;
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      if (arr[i][j] !== null) {
        quant += 1;
      }
    }
  }
  quantityCell.innerHTML = quant;
}
calculateQuantity();
console.log(quant);

//---------------4. create table----------------

function makeTableHTML(arr) {
  const poz = document.querySelector(".main");
  const tab = document.createElement("table");

  poz.appendChild(tab);

  for (let i = 0; i < arr.length; i++) {
    let row = tab.insertRow(i);
    for (let j = 0; j < arr[i].length; j++) {
      let cell = row.insertCell(j);
      if (arr[i][j] === null) {
        cell.classList.add("cell");
        cell.classList.add("white");
      }
    }
  }
}
makeTableHTML(arr);

//-------------------6 task-----------
document.onkeydown = keyDown;

const btnLeft = document.querySelector(".btn-left");
const btnRight = document.querySelector(".btn-right");
const btnUp = document.querySelector(".btn-up");
const btnDown = document.querySelector(".btn-down");

let selRow = 0;
let selCol = 0;

const tab = document.querySelector("table");

function selectCell() {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      if (i == selRow && j == selCol) {
        tab.rows[i].cells[j].classList.add("selected");
        arr[i][j] = 1;
        console.table(arr);
      }
    }
  }
}
function moveUp() {
  tab.rows[selRow].cells[selCol].classList.remove("selected");
  arr[selRow][selCol] = null;
  if (selRow > 0) {
    selRow--;
  } else {
    selRow = 0;
  }
  selectCell();
  calculateQuantity();
}
function moveDown() {
  tab.rows[selRow].cells[selCol].classList.remove("selected");
  arr[selRow][selCol] = null;
  if (selRow < 4) {
    selRow++;
  } else {
    selRow = 4;
  }
  selectCell();
  calculateQuantity();
}
function moveLeft() {
  tab.rows[selRow].cells[selCol].classList.remove("selected");
  arr[selRow][selCol] = null;
  if (selCol > 0) {
    selCol--;
  } else {
    selCol = 0;
  }
  selectCell();
  calculateQuantity();
}
function moveRight() {
  tab.rows[selRow].cells[selCol].classList.remove("selected");
  arr[selRow][selCol] = null;
  if (selCol < 4) {
    selCol++;
  } else {
    selCol = 4;
  }
  selectCell();
  calculateQuantity();
}

selectCell();
calculateQuantity();

btnDown.addEventListener('mousedown', moveDown);
btnUp.addEventListener('mousedown', moveUp);
btnLeft.addEventListener('mousedown', moveLeft);
btnRight.addEventListener('mousedown', moveRight);

function keyDown(t) {
  t = t || window.event;
  switch (t.keyCode) {
    case 38:
      moveUp();
      break;
    case 40:
      moveDown();
      break;
    case 37:
      moveLeft();
      break;
    case 39:
      moveRight();
  }
}
