import Character from "./init";
import Board from "./createBoardGam"

Board.createBoard(4);
const Game = new Character(document.querySelector(".grid-container"));
Game.init();