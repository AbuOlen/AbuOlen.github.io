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
  };
  for (let i = 0; i < 100; i++){
      cards = shuffle(cards);
  };
  return cards;
};

const cardsInDeck = (arr) => {
    let sumPlayed = 0;
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr[i].length; j++) {
            if(arr[i][j].length !== 0)
            sumPlayed++;
        }
      };
    return cardCount - sumPlayed;
};
//--------------------------end MODEL-------------------

//--------------------------start VIEW--------------------

const makeTableHTML = (arr) => {
    const poz = document.querySelector(".main");
    const tab = document.createElement("table");
    poz.appendChild(tab);
    for (let i = 0; i < arr.length; i++) {
      let row = tab.insertRow(i);
      for (let j = 0; j < arr[i].length; j++) {
        let cell = row.insertCell(j);
        cell.classList.add("cell");
      }
    }
  };  

const generateInfoHTML = (field) => {
    document.querySelector('.info').innerHTML = `Left: ${cardsInDeck(field)} cards`;
}
//--------------------end VIEW-----------------------

//--------------------start CONTROLLER------------------

let field = createField();

makeTableHTML(field);

let cards = generateCards();
console.log(cards);

generateInfoHTML(field);