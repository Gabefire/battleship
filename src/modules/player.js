import createBoard from "./DOMmethods";
import placeShipIndicator from "./event_listeners";
import Gameboard from "./gameboard";
import Ship from "./ship";

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
    this.boundInnerListener = this.innerListener.bind(this);
    this.boundShiftDir = this.shiftDir.bind(this);
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

  innerListener(e) {
    const coord = e.target.id.split("-");
    const row = +coord[0];
    const col = +coord[1];
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
    this.currentShip = this.shipArray[this.currentShipIndex];
    if (this.currentShipIndex > this.shipArray.length - 1) {
      createBoard("large", this.gameBoard.squareArray);
      console.log(this.gameBoard.squareArray);
      return;
    }
    this.buildGameboard();
  }

  shiftDir(e) {
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
    this.buildGameboard();
  }

  buildGameboard() {
    const { squareArray } = this.gameBoard;
    createBoard("large", squareArray);
    placeShipIndicator(this.currentShip, this.gameBoard, this.currentDir);
    document.onkeydown = this.boundShiftDir;
    const squares = document.querySelectorAll(".square");
    squares.forEach((square) => {
      square.removeEventListener("click", this.boundInnerListener);
      square.addEventListener("click", this.boundInnerListener);
    });
  }
}
