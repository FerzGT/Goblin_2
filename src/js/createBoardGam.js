export default class Board {
    constructor (boardEL){
        this.__boardEL = boardEL;
        this.createBox = function createB(ClassBoard) {
            const cell = document.createElement('div');
            cell.classList.add(ClassBoard);
            craseBoard.appendChild(cell);
            }
        
    }
    createBoard(cage) {
        let craseBoard = document.querySelectorAll("grid-container");
        
        for (let i = 0; i < cage; i++) {
            this.createBox('grid-row');
                        
            for (let j = 0; j < cage; j++) {
            this.createBox('grid-cell');
            }
      }
      this.__boardEL.appendChild(craseBoard);
    }
}