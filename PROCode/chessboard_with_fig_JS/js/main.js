
class Figure  {
    constructor(symbol, color) {
        this.symbol = symbol;
        this.color = color;
        
    }
};
class FigureSet {
    constructor(color) {
        this.king = new Figure('&#9818', color);
        this.queen = new Figure('&#9819', color);
        this.rook = new Figure('&#9820', color);
        this.bishop = new Figure('&#9821', color);
        this.knight = new Figure('&#9822', color);
        this.pawn = new Figure('&#9823', color);
    }
};

const figureSetBlack = new FigureSet('black');
const figureSetWhite = new FigureSet('white');

class ChessBoard {
    constructor() {
        this.state = [
            [figureSetBlack.rook, figureSetBlack.knight, figureSetBlack.bishop, figureSetBlack.queen, figureSetBlack.king, figureSetBlack.bishop, figureSetBlack.knight, figureSetBlack.rook],
            [figureSetBlack.pawn, figureSetBlack.pawn, figureSetBlack.pawn, figureSetBlack.pawn, figureSetBlack.pawn, figureSetBlack.pawn, figureSetBlack.pawn, figureSetBlack.pawn],
            [0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0],
            [figureSetWhite.pawn, figureSetWhite.pawn, figureSetWhite.pawn, figureSetWhite.pawn, figureSetWhite.pawn, figureSetWhite.pawn, figureSetWhite.pawn, figureSetWhite.pawn],
            [figureSetWhite.rook, figureSetWhite.knight, figureSetWhite.bishop, figureSetWhite.queen, figureSetWhite.king, figureSetWhite.bishop, figureSetWhite.knight, figureSetWhite.rook],
        ];
        this.draw();
    }
    buildId(column, row) {
        return String(column) + String(row); 
    }
    draw() {
        const poz = document.getElementById('chess_field');
        const tab = document.createElement('table');
        poz.appendChild(tab);
        tab.border = '5';
        tab.style.textAlign = 'center';
        tab.style.fontSize = '2.2em';
        for (let i = 0; i < 8; i++){
            let row = tab.insertRow(i);
            for(let j = 0; j < 8; j++){
                let cell = row.insertCell(j);
                cell.id = this.buildId(j, i);
                const f = this.state[i][j];
                if(f !== 0) {
                    cell.innerHTML = f.symbol;
                    cell.style.color = f.color;
                }
                cell.style.backgroundColor = (i+j)%2 ? '#cc6600' : '#ffb366';
                cell.style.height = '50px';
                cell.style.width = '50px';
            };
        };
    }

    reset(){

    }
}

const chessboard = new ChessBoard();


































