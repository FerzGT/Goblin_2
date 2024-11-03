export default class Board {
    constructor (boardEL){
        this.boardEL = boardEL;
    }

        function createB(ClassBoard) {
            const cell = document.createElement('div');
            cell.classList.add(ClassBoard);
             boardEl.appendChild(cell);
        }


    createBoard(cage) {
        const boardEL = document.getElementById('grid-container');
        boardEL.classList.add('cursor');
        for (let i = 0; i < cage; i++) {
            createB('grid-row');
                  
            for (let j = 0; j < cage; j++) {
            createB('grid-cell');
             
        }
     } 
}
}