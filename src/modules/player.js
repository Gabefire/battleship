import createBoard from "./DOMmethods";
import placeShipIndicator, { placeShipListener } from "./event_listeners";
import Gameboard from "./gameboard";
import Ship from "./ship";

export default class Player {
  constructor() {
    this.gameBoard = new Gameboard();
    let maxShipSlots = 5;
    const playerShipArray = [];
    for (let i = 0; i < 5; i += 1) {
      const ship = new Ship(maxShipSlots);
      playerShipArray.push(ship);
      maxShipSlots -= 1;
    }
    this.shipArray = playerShipArray;
  }

  buildGameboard() {
    createBoard("large", this.gameBoard.squareArray);
    const possibleDir = [
      // right
      [0, 1],
      // up
      [1, 0],
      // left
      [0, -1],
      // down
      [-1, 0],
    ];

    for (let i = 0; i < this.shipArray.length; i += 1) {
      let nextSelection = false;
      while (!nextSelection) {
        let currentDirIndex = 0;
        let currentDir = possibleDir[currentDirIndex];
        let currentShip = this.shipArray[0];
        const tempGameBoard = this.gameBoard;
        function shiftDir(e) {
          const { keyCode } = e;
          if (keyCode === 37) {
            currentDirIndex -= 1;
            if (currentDirIndex < 0) {
              currentDirIndex = 3;
            }
          }
          if (keyCode === 39) {
            currentDirIndex += 1;
            if (currentDirIndex > 3) {
              currentDirIndex = 0;
            }
          }
          currentDir = possibleDir[currentDirIndex];
          const grid = document.querySelector(".grid");
          grid.innerHTML = "";
          const { squareArray } = tempGameBoard;
          createBoard("large", squareArray);
          placeShipIndicator(currentShip, tempGameBoard, currentDir);
        }
        document.onkeydown = shiftDir;
        const squares = document.querySelectorAll(".square");
        const dir = currentDir;
        squares.forEach((square) => {
          square.addEventListener("click", (e) => {
            const coord = e.target.id.split("-");
            const row = +coord[0];
            const col = +coord[1];
            const results = this.gameBoard.placeShip(
              row,
              col,
              currentDir,
              this.shipArray[0]
            );
            if (!results) {
              console.log("train was not placed");
              return;
            }
            console.log("train was placed");
          });
        });

        placeShipIndicator(this.shipArray[i], this.gameBoard, currentDir);
      }
    }
  }
}
