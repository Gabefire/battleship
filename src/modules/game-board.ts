import Square from "./square";
import Ship from "./ship";

interface GameBoard {
  squareArray: Square[][];
  shipArray: Ship[];
}

class GameBoard {
  constructor() {
    const squareArray: Square[][] = [];
    for (let i = 9; i >= 0; i -= 1) {
      const rowArray: Square[] = [];
      for (let x = 0; x < 10; x += 1) {
        const square = new Square(i, x);
        rowArray.push(square);
      }
      squareArray.unshift(rowArray);
    }
    this.squareArray = squareArray;
    let maxShipSlots = 5;
    const shipArray: Ship[] = [];
    for (let i = 0; i < 4; i += 1) {
      const ship = new Ship(maxShipSlots);
      shipArray.push(ship);
      maxShipSlots -= 1;
    }
    const ship4 = new Ship(3);
    shipArray.splice(2, 0, ship4);
    this.shipArray = shipArray;
  }

  // checks if move will put ship outside board or if there is a ship in place
  checkValidMove(
    row: number,
    col: number,
    dir: number[],
    shipLength: number
  ): boolean {
    if (
      row + (shipLength - 1) * dir[0] > 9 ||
      row + (shipLength - 1) * dir[0] < 0 ||
      col + (shipLength - 1) * dir[1] > 9 ||
      col + (shipLength - 1) * dir[1] < 0
    ) {
      return false;
    }
    if (dir[0] === 1) {
      for (let i = row; i < shipLength + row; i += 1) {
        if (this.squareArray[i][col].shipPlaced !== null) return false;
      }
    }
    if (dir[0] === -1) {
      for (let i = row; i > row - shipLength; i -= 1) {
        if (this.squareArray[i][col].shipPlaced !== null) return false;
      }
    }
    if (dir[1] === 1) {
      for (let i = col; i < shipLength + col; i += 1) {
        if (this.squareArray[row][i].shipPlaced !== null) return false;
      }
    }
    if (dir[1] === -1) {
      for (let i = col; i > col - shipLength; i -= 1) {
        if (this.squareArray[row][i].shipPlaced !== null) return false;
      }
    }
    return true;
  }

  placeShip(row: number, col: number, dir: number[], ship: Ship): boolean {
    let x = row;
    let y = col;
    if (!this.checkValidMove(row, col, dir, ship.length)) return false;
    for (let i = 0; i < ship.length; i += 1) {
      const square = this.squareArray[x][y];
      square.shipPlaced = ship;
      x += dir[0];
      y += dir[1];
    }
    return true;
  }

  receiveAttack(row: number, col: number): string {
    // Hit! if hit, invalid if spot already been targeted, Miss! if not hit on ship
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
    return "Miss!";
  }

  checkResults(): boolean {
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

export default GameBoard;
