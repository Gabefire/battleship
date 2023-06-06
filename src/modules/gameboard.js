import Square from "./square";

export default class Gameboard {
  constructor() {
    const squareArray = [];
    for (let i = 9; i >= 0; i -= 1) {
      const rowArray = [];
      for (let x = 0; x < 10; x += 1) {
        const square = new Square(i, x);
        rowArray.push(square);
      }
      squareArray.unshift(rowArray);
    }
    this.squareArray = squareArray;
    this.shipArray = [];
    this.missedAttacks = 0;
    this.previousMoves = [];
    this.previousHits = [];
    this.previousDir = null;
    this.nextMove = null;
  }

  checkValidMove(row, col, dir, ship) {
    if (
      row + (ship.length - 1) * dir[0] > 9 ||
      row + (ship.length - 1) * dir[0] < 0 ||
      col + (ship.length - 1) * dir[1] > 9 ||
      col + (ship.length - 1) * dir[1] < 0
    ) {
      return false;
    }
    if (dir[0] === 1) {
      for (let i = row; i < ship.length + row; i += 1) {
        if (this.squareArray[i][col].shipPlaced !== null) return false;
      }
    }
    if (dir[0] === -1) {
      for (let i = row; i > row - ship.length; i -= 1) {
        if (this.squareArray[i][col].shipPlaced !== null) return false;
      }
    }
    if (dir[1] === 1) {
      for (let i = col; i < ship.length + col; i += 1) {
        if (this.squareArray[row][i].shipPlaced !== null) return false;
      }
    }
    if (dir[1] === -1) {
      for (let i = col; i > col - ship.length; i -= 1) {
        if (this.squareArray[row][i].shipPlaced !== null) return false;
      }
    }
    return true;
  }

  placeShip(row, col, dir, ship) {
    let x = row;
    let y = col;
    if (!this.checkValidMove(row, col, dir, ship)) return false;
    for (let i = 0; i < ship.length; i += 1) {
      const square = this.squareArray[x][y];
      square.shipPlaced = ship;
      x += dir[0];
      y += dir[1];
    }
    this.shipArray.push(ship);
    return true;
  }

  receiveAttack(row, col) {
    // true if hit, invalid if spot already been targeted, false if not hit on ship
    const square = this.squareArray[row][col];
    if (square.hit === true) {
      return "Invalid!";
    }
    square.hit = true;
    if (square.shipPlaced !== null) {
      square.shipPlaced.hit();
      if (square.shipPlaced.isSunk()) {
        return "Ship Sunk!";
      }
      return "Hit!";
    }
    this.missedAttacks += 1;
    return "Miss!";
  }

  checkResults() {
    let winner = true;
    this.shipArray.forEach((ship) => {
      if (ship.sunk === false) {
        winner = false;
      }
    });
    if (winner) {
      return true;
    }
    return false;
  }
}
