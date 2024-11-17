export default class Board {
    constructor (boardEL){
        this.boardEl = boardEl;
        this.boardsCells = [];
        }

        createBoard(cage) {
            const boardEl = document.getElementById('board');
            boardEl.classList.add('cursor');
            for (let i = 0; i < cage; i++) {
              const cell = document.createElement('div');
              cell.classList.add('game-cell');
              boardEl.appendChild(cell);
              this.randomImg();
            }
          }
}