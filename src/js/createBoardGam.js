export default class Board {
    constructor (boardEL){
        this.__boardEL = boardEL;
    }
    createBoard(cage) {
        for (let i = 0; i < cage; i++) {
            createB('grid-row');
                  
            for (let j = 0; j < cage; j++) {
            createB('grid-cell');
             
        }
        function createB(ClassBoard) {
            const cell = document.createElement('div');
            cell.classList.add(ClassBoard);
             boardEl.appendChild(cell);
        }
      }
      this.__boardEL.appendChild(cell);
}
}