import Character from "./init";
import Board from "./createBoardGam"

const gamesBoard = new Board('field');
gamesBoard.createBoard(4);

const Game = new Character(document.querySelector(".grid-container"));
Game.init();