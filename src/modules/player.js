import { createBoard, changeShipText } from "./DOMmethods";
import placeShipIndicator from "./event_listeners";
import Gameboard from "./gameboard";
import Ship from "./ship";
import startGame from "./game_loop";

export default class Player {
  constructor() {
    this.gameBoard = new Gameboard();
    let maxShipSlots = 5;
    const playerShipArray = [];
    for (let i = 0; i < 4; i += 1) {
      const ship = new Ship(maxShipSlots);
      playerShipArray.push(ship);
      maxShipSlots -= 1;
    }
    const ship4 = new Ship(3);
    playerShipArray.splice(2, 0, ship4);
    this.shipArray = playerShipArray;
    this.currentShipIndex = 0;
    this.currentShip = this.shipArray[this.currentShipIndex];
    this.boundedPlaceShipListener = this.placeShipListener.bind(this);
    this.boundedShiftDir = this.shiftDirListener.bind(this);
    this.possibleDir = [
      // right
      [0, 1],
      // up
      [1, 0],
      // left
      [0, -1],
      // down
      [-1, 0],
    ];
    this.currentDirIndex = 0;
    this.currentDir = this.possibleDir[this.currentDirIndex];
  }

  placeShipListener(e) {
    const coord = e.target.id.split("-");
    const row = +coord[1];
    const col = +coord[2];
    const results = this.gameBoard.placeShip(
      row,
      col,
      this.currentDir,
      this.currentShip
    );
    if (!results) {
      return;
    }
    this.currentShipIndex += 1;
    if (this.currentShipIndex > this.shipArray.length - 1) {
      startGame(this.gameBoard);
      changeShipText("");
      return;
    }
    changeShipText(this.currentShipIndex);
    this.currentShip = this.shipArray[this.currentShipIndex];
    this.buildGameBoard();
  }

  shiftDirListener(e) {
    const { keyCode } = e;
    if (keyCode === 37) {
      this.currentDirIndex -= 1;
      if (this.currentDirIndex < 0) {
        this.currentDirIndex = 3;
      }
    }
    if (keyCode === 39) {
      this.currentDirIndex += 1;
      if (this.currentDirIndex > 3) {
        this.currentDirIndex = 0;
      }
    }
    this.currentDir = this.possibleDir[this.currentDirIndex];
    this.buildGameBoard();
  }

  buildGameBoard() {
    const { squareArray } = this.gameBoard;
    createBoard("large", squareArray);
    placeShipIndicator(this.currentShip, this.gameBoard, this.currentDir);
    changeShipText(this.currentShipIndex);
    document.onkeydown = this.boundedShiftDir;
    const squares = document.querySelectorAll(".square");
    squares.forEach((square) => {
      square.removeEventListener("click", this.boundedPlaceShipListener);
      square.addEventListener("click", this.boundedPlaceShipListener);
    });
  }
}
