import Character from "./init";
import Board from "./createBoardGam"

const gamesBoard = new Board();
gamesBoard.createBoard(16);

const Game = new Character(document.querySelector(".grid-container"));
Game.init();