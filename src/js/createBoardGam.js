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
        let neWobj = new this.createBox;
        
        for (let i = 0; i < cage; i++) {
            this.neWobj('grid-row');
                        
            for (let j = 0; j < cage; j++) {
            this.neWobj('grid-cell');
            }
      }
      this.__boardEL.appendChild(craseBoard);
    }
}