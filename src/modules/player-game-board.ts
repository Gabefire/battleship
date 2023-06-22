import GameBoard from "./game-board";
import Ship from "./ship";
import { changeShipText, createBoard } from "./DOM-methods";

interface Player {
  currentShipIndex: number;
  currentShip: Ship;
  boundedPlaceShipListener: EventListenerOrEventListenerObject;
  boundedShiftDir: EventListenerOrEventListenerObject;
  possibleDir: number[][];
  currentDirIndex: number;
  currentDir: number[];
}

class Player extends GameBoard {
  constructor() {
    super();
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

  placeShipIndicator(shipLength: number, dir: number[]) {
    const squares: NodeListOf<Element> = document.querySelectorAll(".square");
    let selection: HTMLDivElement[] = [];

    squares.forEach((square) => {
      square.addEventListener("mouseover", (e) => {
        let length = shipLength;
        let color = "lightgrey";
        const coord = (e.target as HTMLDivElement).id.split("-");
        const row = +coord[1];
        const col = +coord[2];
        if (this.squareArray[row][col].shipPlaced !== null) return;
        if (!this.checkValidMove(row, col, dir, length)) {
          color = "red";
          let results = false;
          while (!results) {
            length -= 1;
            results = this.checkValidMove(row, col, dir, length);
          }
        }
        if (dir[0] === 1) {
          for (let i = row; i < length + row; i += 1) {
            const box = document.getElementById(
              `large-${i}-${col}`
            ) as HTMLDivElement;
            box.style.backgroundColor = color;
            selection.push(box);
          }
        }
        if (dir[0] === -1) {
          for (let i = row; i > row - length; i -= 1) {
            const box = document.getElementById(
              `large-${i}-${col}`
            ) as HTMLDivElement;
            box.style.backgroundColor = color;
            selection.push(box);
          }
        }
        if (dir[1] === 1) {
          for (let i = col; i < length + col; i += 1) {
            const box = document.getElementById(
              `large-${row}-${i}`
            ) as HTMLDivElement;
            box.style.backgroundColor = color;
            selection.push(box);
          }
        }
        if (dir[1] === -1) {
          for (let i = col; i > col - length; i -= 1) {
            const box = document.getElementById(
              `large-${row}-${i}`
            ) as HTMLDivElement;
            box.style.backgroundColor = color;
            selection.push(box);
          }
        }
      });
      square.addEventListener("mouseleave", () => {
        if (selection.length > 0) {
          selection.forEach((element) => {
            const node = element;
            node.style.backgroundColor = "white";
          });
        }
        selection = [];
      });
    });
  }

  placeShipListener(e: MouseEvent) {
    const coord = (e.target as Element).id.split("-");
    const row = +coord[1];
    const col = +coord[2];
    const results = this.placeShip(row, col, this.currentDir, this.currentShip);
    if (!results) {
      return;
    }
    this.currentShipIndex += 1;
    if (this.currentShipIndex > this.shipArray.length - 1) {
      const body = document.querySelector("body");
      (body as HTMLBodyElement).removeEventListener(
        "keydown",
        this.boundedShiftDir
      );
      startGame(this);
      changeShipText(5);
      return;
    }
    changeShipText(this.currentShipIndex);
    this.currentShip = this.shipArray[this.currentShipIndex];
    this.buildGameBoard();
  }

  shiftDirListener(e: KeyboardEvent) {
    const keyCode: number = +e.key;
    if (keyCode === 37) {
      this.currentDirIndex -= 1;
      if (this.currentDirIndex < 0) {
        this.currentDirIndex = 3;
      }
    } else if (keyCode === 39) {
      this.currentDirIndex += 1;
      if (this.currentDirIndex > 3) {
        this.currentDirIndex = 0;
      }
    } else return;
    this.currentDir = this.possibleDir[this.currentDirIndex];
    this.buildGameBoard();
  }

  buildGameBoard() {
    createBoard("large", this.squareArray);
    this.placeShipIndicator(this.currentShip.length, this.currentDir);
    changeShipText(this.currentShipIndex);
    const body = document.querySelector("body");
    (body as HTMLBodyElement).addEventListener("keydown", this.boundedShiftDir);
    const squares = document.querySelectorAll(".square");
    squares.forEach((square) => {
      square.removeEventListener("click", this.boundedPlaceShipListener);
      square.addEventListener("click", this.boundedPlaceShipListener);
    });
  }
}

export default Player;
