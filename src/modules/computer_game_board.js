import GameBoard from "./gameboard";

export default class ComputerGameBoard extends GameBoard {
  constructor() {
    super();
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
    const possibleMovesArray = [];
    for (let i = 9; i >= 0; i -= 1) {
      for (let x = 0; x < 10; x += 1) {
        possibleMovesArray.push([i, x]);
      }
    }
    this.possibleMovesArray = possibleMovesArray;
    this.previousHits = [];
    this.currentDir = null;
    this.nextMove = null;
  }

  buildComputerGameBoard(currentShipIndex = 0) {
    if (currentShipIndex > this.shipArray.length - 1) {
      return;
    }
    const currentShip = this.shipArray[currentShipIndex];
    let results = false;
    while (!results) {
      const row = Math.floor(Math.random() * 10);
      const col = Math.floor(Math.random() * 10);
      let dir = Math.floor(Math.random() * 4);
      dir = this.possibleDir[dir];
      results = this.placeShip(row, col, dir, currentShip);
    }
    this.buildComputerGameBoard(currentShipIndex + 1);
  }

  getComputersTurn() {
    const filterPossibleMove = (element) => {
      const row = element[0];
      const col = element[1];
      if (this.nextMove[0] === row && this.nextMove[1] === col) {
        return true;
      }
      return false;
    };
    if (this.nextMove !== null) {
      const moveIndex = this.possibleMovesArray.findIndex(filterPossibleMove);
      const [move] = this.possibleMovesArray.splice(moveIndex, 1);
      return move;
    }
    const moveIndex = Math.floor(
      Math.random() * this.possibleMovesArray.length
    );
    // const [move] = this.possibleMovesArray.slice(moveIndex);
    const [move] = this.possibleMovesArray.splice(moveIndex, 1);
    return move;
  }

  computerAdjacentSquare(x, y, result) {
    const filterPossibleMove = (element) => {
      const row = element[0];
      const col = element[1];
      if (this.nextMove[0] === row && this.nextMove[1] === col) {
        return true;
      }
      return false;
    };
    if (result === "Ship Sunk!") {
      this.nextMove = null;
      this.previousHits = [];
      this.currentDir = null;
      return;
    }
    this.previousHits.push([x, y]);
    if (result === "Hit!" && this.previousHits.length > 1) {
      let row = x + this.currentDir[0];
      let col = y + this.currentDir[1];
      this.nextMove = [row, col];
      if (
        row > 9 ||
        row < 0 ||
        col > 9 ||
        col < 0 ||
        !this.possibleMovesArray.some(filterPossibleMove)
      ) {
        const coords = this.previousHits[0];
        row = coords[0] - this.currentDir[0];
        col = coords[1] - this.currentDir[1];

        this.nextMove = [row, col];
        return;
      }
      return;
    }
    if (
      (result === "Miss!" && this.previousHits.length > 1) ||
      (result === "Invalid!" && this.previousHits.length > 1)
    ) {
      const coords = this.previousHits[0];
      const row = coords[0] - this.currentDir[0];
      const col = coords[1] - this.currentDir[1];
      this.nextMove = [row, col];
      if (
        row > 9 ||
        row < 0 ||
        col > 9 ||
        col < 0 ||
        !this.possibleMovesArray.some(filterPossibleMove)
      ) {
        this.nextMove = null;
        this.previousHits = [];
        return;
      }
      this.currentDir = [-this.currentDir[0], -this.currentDir[1]];
      return;
    }
    if (this.previousHits.length === 1) {
      for (let i = 0; i < 40; i += 1) {
        const coord = this.previousHits[0];
        const dir = Math.floor(Math.random() * 4);
        const currentDir = this.possibleDir[dir];
        const row = coord[0] + currentDir[0];
        const col = coord[1] + currentDir[1];
        this.nextMove = [row, col];
        if (
          currentDir !== this.currentDir &&
          row <= 9 &&
          row >= 0 &&
          col <= 9 &&
          col >= 0 &&
          this.possibleMovesArray.some(filterPossibleMove)
        ) {
          this.currentDir = currentDir;
          return;
        }
      }
      this.nextMove = null;
      this.previousHits = [];
      this.currentDir = null;
    }
  }
}
