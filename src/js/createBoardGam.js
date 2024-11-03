function createB(ClassBoard) {
    const cell = document.createElement('div');
    cell.classList.add(ClassBoard);
    craseBoard.appendChild(cell);
    }


export default class Board {
    constructor (boardEL){
        this.__boardEL = boardEL;
    }
    createBoard(cage) {
        let craseBoard = document.createElement("div");
        craseBoard.classList.add("board");

        for (let i = 0; i < cage; i++) {
            createB('grid-row');
                        
            for (let j = 0; j < cage; j++) {
            createB('grid-cell');

             
        }

      }
      this.__boardEL.appendChild(craseBoard);
}
}