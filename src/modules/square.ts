import Ship from "./ship";

interface Square {
  row: number;
  col: number;
  shipPlaced: Ship | null;
  hit: boolean;
}

class Square {
  constructor(row: number, col: number) {
    this.row = row;
    this.col = col;
    this.shipPlaced = null;
    this.hit = false;
  }
}

export default Square;
