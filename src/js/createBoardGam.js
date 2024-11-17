export default class Board {
  constructor (boardEL){
      this.boardEL = boardEL;
  }
  createBoard(cage) {
      const boardEL = document.getElementById('field');
      boardEL.classList.add('cursor');
      for (let i = 0; i < cage; i++) {
        this.createB('grid-row');
                
        for (let j = 0; j < cage; j++) {
        this.createB('grid-cell');     
      }
    }
  }
  createB(ClassBoard) {
      const cell = document.createElement('div');
      cell.classList.add(ClassBoard);
       boardEl.appendChild(cell);
  }
}