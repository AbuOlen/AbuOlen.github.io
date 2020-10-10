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
};
let arr = arrayCreate(numbeR, numbeR, numbeR);
console.log(arr);

// -----------2. empty Array--------------

arr = arrayCreate(numbeR, numbeR, null);
console.log(arr);

//------------- 3. quantity---------------

let quant = 0;
for (let i = 0; i < arr.length; i++) {
  for (let j = 0; j < arr[i].length; j++) {
    if (arr[i][j] != null) {
      quant += 1;
    }
  }
}
console.log(quant);


 //---------------4. create table----------------

const quantityCell = document.querySelector(".quantity");
quantityCell.innerHTML = quant;

function makeTableHTML(arr) {
    const poz = document.querySelector('.main');
    const tab = document.createElement('table');
    
    poz.appendChild(tab);

    for(let i=0; i<arr.length; i++) {
        let row = tab.insertRow(i);
        for(let j=0; j<arr[i].length; j++){
            let cell = row.insertCell(j);
            if(arr[i][j] === null) {
                cell.classList.add('cell');
                cell.classList.add('white');
            }
        }
    }
};
makeTableHTML(arr);
