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

//-------------------6, 7, 8  tasks  -----------


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
        tab.rows[i].cells[j].classList.remove("track");
        tab.rows[i].cells[j].classList.add("selected");
        arr[i][j] = 1;
        console.table(arr);
      }
    }
  }
};

let cellTrack = null;
let numberTrack = 2;
function setCellColor() {
  tab.rows[selRow].cells[selCol].classList.remove("selected");
  cellTrack = tab.rows[selRow].cells[selCol];
  cellTrack.classList.add("track");
  arr[selRow][selCol] = numberTrack;
};

let x = 0;
let y = 0;
let disableUp = false;
let disableDown = false;
let disableLeft = false;
let disableRight = false;
function updateButtonState(x, y) {
    btnUp.disabled = x == 0 || disableUp;
    btnDown.disabled = x == 4 || disableDown;
    btnLeft.disabled = y == 0 || disableLeft;
    btnRight.disabled = y == 4 || disableRight;
};

function incSel(cur) {
    if (cur < 4) {
        cur++;
      } else {
        cur = 4;
      }   
      return cur;
};

function decSel(cur) {
    if (cur > 0) {
        cur--;
      } else {
        cur = 0;
      }
      return cur;
};

function doMove(isRow, isInc) {
    setCellColor();
    let tmpRow = selRow;
    let tmpCol = selCol;
    if(!isRow) {
        if(isInc) {
            tmpRow = incSel(tmpRow);
        } else {
            tmpRow = decSel(tmpRow);
        }
    } else {
        if(isInc) {
            tmpCol = incSel(tmpCol);
        } else {
            tmpCol = decSel(tmpCol);
        }
    }
    if(arr[tmpRow][tmpCol] != numberTrack) {
        selRow = tmpRow;
        selCol = tmpCol;
    } else {
      disableDown = false;
      disableLeft = false;
      disableRight = false;
      disableUp = false;
        if(!isRow) {
            if(isInc) {
                disableDown = true;
            } else {
                disableUp = true;
            }
        } else {
            if(isInc) {
                disableRight = true;
            } else {
                disableLeft = true;
            }
        }
    }
    selectCell();
    calculateQuantity();
    updateButtonState(selRow, selCol);
};

const moveUp = () => doMove(false, false);

const moveDown = () => doMove(false, true);

const moveLeft = () => doMove(true, false);

const moveRight = () => doMove(true, true);



function handleKeyboard(e) {
  e = e || window.event;
  switch (e.keyCode) {
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
};

selectCell();
calculateQuantity();
updateButtonState(selRow, selCol);

btnDown.addEventListener("mousedown", moveDown);
btnUp.addEventListener("mousedown", moveUp);
btnLeft.addEventListener("mousedown", moveLeft);
btnRight.addEventListener("mousedown", moveRight);
document.addEventListener("keydown", handleKeyboard);



