import Square from "./square";

export default class Gameboard {
  constructor() {
    const squareArray = [];
    // const grid = document.querySelector(".grid");

    for (let i = 9; i >= 0; i -= 1) {
      // const row = document.createElement("div");
      // row.id = `${i}`;
      // row.className = "row";
      // grid.appendChild(row);
      const rowArray = [];
      for (let x = 0; x < 10; x += 1) {
        // const div = document.createElement("div");
        const square = new Square(i, x);
        rowArray.push(square);
        // div.id = `${i}-${x}`;
        // div.className = "square";
        // row.appendChild(div);
      }
      squareArray.unshift(rowArray);
    }
    this.squareArray = squareArray;
    this.shipArray = [];
    this.missedAttacks = 0;
  }

  placeShip(row, col, dir, ship) {
    let x = row;
    let y = col;
    if (
      row + ship.length * dir[0] > 9 ||
      row + ship.length * dir[0] < 0 ||
      col + ship.length * dir[1] > 9 ||
      col + ship.length * dir[1] < 0
    ) {
      return false;
    }

    for (let i = 0; i < 3; i += 1) {
      const square = this.squareArray[x][y];
      square.shipPlaced = ship;
      x += dir[0];
      y += dir[1];
    }
    this.shipArray.push(ship);
    return true;
  }

  receiveAttack(row, col) {
    const square = this.squareArray[row][col];
    if (square.hit === true) {
      return "invalid";
    }
    square.hit = true;
    if (square.shipPlaced !== null) {
      square.shipPlaced.hit();
      return true;
    }
    this.missedAttacks += 1;
    return false;
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
