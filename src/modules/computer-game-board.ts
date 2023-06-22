import GameBoard from "./game-board";

interface ComputerGameBoard {
  possibleMovesArray: number[][];
  previousHits: number[][];
  currentDir: number[] | null;
  nextMove: number[] | null;
}

class ComputerGameBoard extends GameBoard {
  constructor() {
    super();
    const possibleMovesArray: number[][] = [];
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
      const result: number = Math.floor(Math.random() * 4);
      const dir: number[] = this.possibleDir[result];
      results = this.placeShip(row, col, dir, currentShip);
    }
    this.buildComputerGameBoard(currentShipIndex + 1);
  }

  getComputersTurn() {
    const filterPossibleMove = (element: number[]) => {
      const row = element[0];
      const col = element[1];
      if (
        this.nextMove !== null &&
        this.nextMove[0] === row &&
        this.nextMove[1] === col
      ) {
        return true;
      }
      return false;
    };

    if (this.nextMove !== null && this.possibleMovesArray.length > 0) {
      const moveIndex = this.possibleMovesArray.findIndex(filterPossibleMove);
      const [move] = this.possibleMovesArray.splice(moveIndex, 1);
      return move;
    }
    const moveIndex = Math.floor(
      Math.random() * this.possibleMovesArray.length
    );
    const [move] = this.possibleMovesArray.splice(moveIndex, 1);
    return move;
  }

  computerAdjacentSquare(x: number, y: number, result: string) {
    const filterPossibleMove = (element: number[]) => {
      const row = element[0];
      const col = element[1];
      if (
        this.nextMove !== null &&
        this.nextMove[0] === row &&
        this.nextMove[1] === col
      ) {
        return true;
      }
      return false;
    };

    if (
      result === "Ship Sunk!" ||
      (this.nextMove !== null && this.previousHits.length === 0)
    ) {
      this.nextMove = null;
      this.previousHits = [];
      this.currentDir = null;
      return;
    }

    if (this.previousHits.length === 0) {
      this.previousHits.push([x, y]);
      let validMove = false;
      while (!validMove) {
        let index = Math.floor(Math.random() * this.previousHits.length);
        const randomPreviousHit = this.previousHits[index];
        const possibleMoves: number[][] = [];
        for (let i = 0; i < 4; i += 1) {
          const possibleRow = randomPreviousHit[0] + this.possibleDir[i][0];
          const possibleCol = randomPreviousHit[1] + this.possibleDir[i][1];
          this.nextMove = [possibleRow, possibleCol];
          this.currentDir = this.possibleDir[i];
          if (this.possibleMovesArray.some(filterPossibleMove)) {
            possibleMoves.push([...this.nextMove, ...this.possibleDir[i]]);
          }
        }
        if (possibleMoves.length === 0) {
          this.nextMove = null;
          this.previousHits = [];
          this.currentDir = null;
          return;
        }
        index = Math.floor(Math.random() * possibleMoves.length);
        const row = possibleMoves[index][0];
        const col = possibleMoves[index][1];
        const dirRow = possibleMoves[index][2];
        const dirCol = possibleMoves[index][3];
        this.nextMove = [row, col];
        this.currentDir = [dirRow, dirCol];
        validMove = true;
      }
      return;
    }

    if (
      this.currentDir !== null &&
      result === "Hit!" &&
      this.previousHits.length > 0
    ) {
      this.previousHits.push([x, y]);
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
        this.currentDir = [-this.currentDir[0], -this.currentDir[1]];
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
          this.currentDir = null;
        }
        return;
      }
      return;
    }

    if (
      this.currentDir !== null &&
      (result === "Miss!" || result === "Invalid!")
    ) {
      const coords = this.previousHits[0];
      const row = coords[0] - this.currentDir[0];
      const col = coords[1] - this.currentDir[1];
      this.currentDir = [-this.currentDir[0], -this.currentDir[1]];
      this.nextMove = [row, col];
      if (
        row > 9 ||
        row < 0 ||
        col > 9 ||
        col < 0 ||
        !this.possibleMovesArray.some(filterPossibleMove)
      ) {
        let validMove = false;
        while (!validMove) {
          let index = Math.floor(Math.random() * this.previousHits.length);
          const randomPreviousHit = this.previousHits[index];
          const possibleMoves: number[][] = [];
          for (let i = 0; i < 4; i += 1) {
            const possibleRow = randomPreviousHit[0] + this.possibleDir[i][0];
            const possibleCol = randomPreviousHit[1] + this.possibleDir[i][1];
            this.nextMove = [possibleRow, possibleCol];
            if (this.possibleMovesArray.some(filterPossibleMove)) {
              possibleMoves.push([...this.nextMove, ...this.possibleDir[i]]);
            }
          }
          if (possibleMoves.length === 0) {
            const moveIndex = this.previousHits.findIndex(filterPossibleMove);
            this.previousHits.splice(moveIndex, 1);
          } else {
            index = Math.floor(Math.random() * possibleMoves.length);
            const row = possibleMoves[index][0];
            const col = possibleMoves[index][1];
            const dirRow = possibleMoves[index][2];
            const dirCol = possibleMoves[index][3];
            this.nextMove = [row, col];
            this.currentDir = [dirRow, dirCol];
            validMove = true;
          }
        }
      }
    }
  }
}

export default ComputerGameBoard;
