export default class Board {
  constructor (classBoard){
    this.boardEL = document.getElementById(classBoard);
    console.log(this.boardEL);
  }
  createBoard(cage) {
    //const boardEL = document.getElementById('field');
    this.boardEL.classList.add('cursor');
    
    for (let i = 0; i < cage; i++) {
        this.createB('grid-row');
                
     for (let j = 0; j < cage; j++) {
        this.createB('grid-cell');     
      }
    }
  }
  createB(ClassBoard1) {
      const cell = document.createElement('div');
      cell.classList.add(ClassBoard1);
      console.log(this.boardEL);
      this.boardEL.appendChild(cell);
  }
}