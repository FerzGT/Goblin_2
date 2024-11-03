export default class Board {
    
    constructor (){
        this.boardEL = boardEL;
    }
    createBoard(cage) {
        const boardEL = document.getElementById('grid-container');
        boardEL.classList.add('cursor');
        for (let i = 0; i < cage; i++) {
            
            const cell = document.createElement('div');
            cell.classList.add('grid-row');
            boardEl.appendChild(cell);
                  
        for (let j = 0; j < cage; j++) {

            const cell = document.createElement('div');
            cell.classList.add('grid-cell');
            boardEl.appendChild(cell);
        }
      }
}
}