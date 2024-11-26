import Board from "./createBoardGam";
import Character from "./init";
import Score from "./score";

const gamesBoard = new Board("field");
gamesBoard.createBoard(4);

Character.randomGoblin();
Score.click();
