//--------------------- start MODEL ------------------
const cellRow = 8;
const cellCols = 8;

const cardTypeCount = 10;
const typeCount = 3;
const cardCount = cardTypeCount * typeCount;

const createField = () => {
  return new Array(cellRow).fill("").map(() => new Array(cellCols).fill(""));
};

const shuffle = (a) => {
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
};

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

const cardsInDeck = (arr) => {
  let sumPlayed = 0;
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      if (arr[i][j].length !== 0) sumPlayed++;
    }
  }
  return cardCount - sumPlayed;
};
//--------------------------end MODEL-------------------

//--------------------------start VIEW--------------------

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

const generateInfoHTML = (field) => {
  document.querySelector(".info").innerHTML = `Left: ${cardsInDeck(field)} cards`;
};

const generateBoxCards = (cards) => {
  card = cards[cards.length - 1];
  drawCard(document.querySelector(".box_cards"), card);
};
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

let field = createField();
let cards = generateCards();

const doMove = (ev) => {
  let elt = field[ev.target.parentNode.rowIndex][ev.target.cellIndex];
  if (elt.length === 0) {
    card = cards.pop();
    console.log("" + ev.target.cellIndex + " " + ev.target.parentNode.rowIndex);
    field[ev.target.parentNode.rowIndex][ev.target.cellIndex] = "0";
    drawCard(ev.target, card);
  } else {
      let angle = parseInt(elt);
      angle += 90;
      if(angle === 360) {
          angle = 0;
      }
      ev.target.style.transform = `rotate(${angle}deg)`;
      field[ev.target.parentNode.rowIndex][ev.target.cellIndex] = '' + angle;
  }
  generateBoxCards(cards);
  generateInfoHTML(field);
};

makeTableHTML(field, doMove);

console.log(cards);

generateInfoHTML(field);

generateBoxCards(cards);

//--------------end CONTROLLER---------------------------
