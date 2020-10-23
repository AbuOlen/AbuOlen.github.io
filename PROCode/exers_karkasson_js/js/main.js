//--------------------- start MODEL ------------------
const cellRow = 8;
const cellCols = 8;

const cardTypeCount = 10;
const typeCount = 3;
const cardCount = cardTypeCount * typeCount;

//----create array with empty objects

function createField() {
  let arr = [];

  for (let i = 0; i < cellRow; i++) {
    arr.push([]);

    arr[i].push(new Array(cellCols));

    for (let j = 0; j < cellCols; j++) {
      arr[i][j] = {};
    }
  }
  return arr;
};
// 
// console.log(arr);



// const createField = () => {
//   return new Array(cellRow).fill({}).map(() => new Array(cellCols).fill({}));
// };

const shuffle = (a) => {
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
};

// ----- generate card & shuffle---
const generateCards = () => {
  let cards = [];
  for (let j = 0; j < typeCount; j++) {
    for (let i = 0; i < cardTypeCount; i++) {
      let card = {};
      card.type = j;
      cards.push(card);
    }
  }
  for (let i = 0; i < 100; i++) {
    cards = shuffle(cards);
  }
  return cards;
};
//------counting the remaining cards in the deck
const cardsInDeck = (arr) => {
  let sumPlayed = 0;
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      if (typeof(arr[i][j].type) !== 'undefined') sumPlayed++;
    }
  }
  return cardCount - sumPlayed;
};
//--------------------------end MODEL-------------------

//--------------------------start VIEW--------------------

//----creating game field
const makeTableHTML = (arr, onclick) => {
  const poz = document.querySelector(".main");
  const tab = document.createElement("table");
  poz.appendChild(tab);
  for (let i = 0; i < arr.length; i++) {
    let row = tab.insertRow(i);
    for (let j = 0; j < arr[i].length; j++) {
      let cell = row.insertCell(j);
      cell.addEventListener("click", onclick);
      cell.classList.add("cell");
    }
  }
};

//------visualization of the number of remaining cards
const generateInfoHTML = (field) => {
  document.querySelector(".info").innerHTML = `Left: ${cardsInDeck(field)} cards`;
};
//draw card deck
const generateBoxCards = (cards) => {
  card = cards[cards.length - 1];
  drawCard(document.querySelector(".box_cards"), card);
};
// draw card on field  
const drawCard = (el, card) => {
  el.classList.remove("img0");
  el.classList.remove("img1");
  el.classList.remove("img2");
  if(typeof(card) === 'undefined') {
      return;
  }
  switch (card.type) {
    case 0:
      el.classList.add("img0");
      break;
    case 1:
      el.classList.add("img1");
      break;
    case 2:
      el.classList.add("img2");
  }
};

//--------------------end VIEW-----------------------

//--------------------start CONTROLLER------------------

let field = createField();     //create array with empty objects
let cards = generateCards();   //generate card & shuffle

// main
const doMove = (ev) => {
  let elt = field[ev.target.parentNode.rowIndex][ev.target.cellIndex]; //get active field cell

  if (typeof (elt.type) === 'undefined') {     // put card on the cell
    card = cards.pop();

    console.log("" + ev.target.cellIndex + " " + ev.target.parentNode.rowIndex);

    elt["angle"] = "0";   //set rotation angle to 0 
    elt["type"] = card.type;   //assigning card type to field cell
  
    drawCard(ev.target, card);   // draw card
    
  } else {                           // rotate card by 90deg
      let angle = parseInt(elt.angle);  
      angle += 90;
      if(angle === 360) {
          angle = 0;
      }
      ev.target.style.transform = `rotate(${angle}deg)`;
      elt.angle = '' + angle;
  }
  
  generateBoxCards(cards);   // draw card deck 
  generateInfoHTML(field);   // visualization of the number of remaining cards

    field[ev.target.parentNode.rowIndex][ev.target.cellIndex] = elt; // put cell back to the field array
    console.log(elt);
    console.log(field);
};

makeTableHTML(field, doMove);  //creating game field

console.table(cards);



generateInfoHTML(field);   //visualization of the number of remaining cards

generateBoxCards(cards);   //draw card deck

//--------------end CONTROLLER---------------------------
