import GameBoard from "../src/modules/game-board";
import Ship from "../src/modules/ship";

it("hit square", () => {});

it("place ship: up", () => {
  const gameBoard = new GameBoard();
  const ship = new Ship(3);
  gameBoard.placeShip(1, 2, [1, 0], ship);
  const squareArray = gameBoard.squareArray;
  expect(squareArray[1][2].shipPlaced).toBe(ship);
  expect(squareArray[2][2].shipPlaced).toBe(ship);
  expect(squareArray[3][2].shipPlaced).toBe(ship);
});

it("place ship: up top of board", () => {
  const gameBoard = new GameBoard();
  const ship = new Ship(5);
  gameBoard.placeShip(5, 6, [1, 0], ship);
  const squareArray = gameBoard.squareArray;
  expect(squareArray[5][6].shipPlaced).toBe(ship);
  expect(squareArray[6][6].shipPlaced).toBe(ship);
  expect(squareArray[7][6].shipPlaced).toBe(ship);
  expect(squareArray[8][6].shipPlaced).toBe(ship);
  expect(squareArray[9][6].shipPlaced).toBe(ship);
});

it("place ship: left", () => {
  const gameBoard = new GameBoard();
  const ship = new Ship(5);
  gameBoard.placeShip(0, 8, [0, -1], ship);
  const squareArray = gameBoard.squareArray;
  expect(squareArray[0][8].shipPlaced).toBe(ship);
  expect(squareArray[0][7].shipPlaced).toBe(ship);
  expect(squareArray[0][6].shipPlaced).toBe(ship);
  expect(squareArray[0][5].shipPlaced).toBe(ship);
  expect(squareArray[0][4].shipPlaced).toBe(ship);
});

it("place ship: right", () => {
  const gameBoard = new GameBoard();
  const ship = new Ship(3);
  gameBoard.placeShip(0, 0, [0, 1], ship);
  const squareArray = gameBoard.squareArray;
  expect(squareArray[0][0].shipPlaced).toBe(ship);
  expect(squareArray[0][1].shipPlaced).toBe(ship);
  expect(squareArray[0][2].shipPlaced).toBe(ship);
});

it("place ship: down", () => {
  const gameBoard = new GameBoard();
  const ship = new Ship(3);
  gameBoard.placeShip(9, 2, [-1, 0], ship);
  const squareArray = gameBoard.squareArray;
  expect(squareArray[9][2].shipPlaced).toBe(ship);
  expect(squareArray[8][2].shipPlaced).toBe(ship);
  expect(squareArray[7][2].shipPlaced).toBe(ship);
});

it("place ship: to large left", () => {
  const gameBoard = new GameBoard();
  const ship = new Ship(10);
  expect(gameBoard.placeShip(0, 8, [0, -1], ship)).toBe(false);
});

it("place ship: to large up", () => {
  const gameBoard = new GameBoard();
  const ship = new Ship(2);
  expect(gameBoard.placeShip(9, 0, [1, 0], ship)).toBe(false);
});

it("place: ship in spot right", () => {
  const gameBoard = new GameBoard();
  const ship = new Ship(5);
  const currentDir = [-1, 0];
  gameBoard.placeShip(8, 8, currentDir, ship);
  const ship2 = new Ship(2);
  let dir = [0, 1];
  const squareArray = gameBoard.squareArray;
  let row = 8;
  let col = 9;
  expect(gameBoard.placeShip(row, col, dir, ship2)).toBe(false);
});
it("place: ship in spot left", () => {
  const gameBoard = new GameBoard();
  const ship = new Ship(5);
  const currentDir = [-1, 0];
  gameBoard.placeShip(8, 8, currentDir, ship);
  const ship2 = new Ship(2);
  let dir = [1, 0];
  const squareArray = gameBoard.squareArray;
  let row = 8;
  let col = 9;
  dir = [0, -1];
  expect(gameBoard.placeShip(row, col, dir, ship2)).toBe(false);
});
it("place: ship in spot down", () => {
  const gameBoard = new GameBoard();
  const ship = new Ship(5);
  const currentDir = [0, -1];
  gameBoard.placeShip(8, 8, currentDir, ship);
  const ship2 = new Ship(2);
  let dir = [1, 0];
  const squareArray = gameBoard.squareArray;
  let row = 9;
  let col = 6;
  dir = [-1, 0];
  expect(gameBoard.placeShip(row, col, dir, ship2)).toBe(false);
});

it("place: ship in spot up", () => {
  const gameBoard = new GameBoard();
  const ship = new Ship(5);
  const currentDir = [0, -1];
  gameBoard.placeShip(8, 8, currentDir, ship);
  const ship2 = new Ship(2);
  let dir = [1, 0];
  const squareArray = gameBoard.squareArray;
  let row = 7;
  let col = 8;
  dir = [1, 0];
  expect(gameBoard.placeShip(row, col, dir, ship2)).toBe(false);
});

it("receive attack: hit", () => {
  const gameBoard = new GameBoard();
  const ship = new Ship(2);
  gameBoard.placeShip(0, 0, [1, 0], ship);
  expect(gameBoard.receiveAttack(0, 0)).toBe("Hit!");
  expect(ship.numHits).toBe(1);
});

it("receive attack: miss", () => {
  const gameBoard = new GameBoard();
  expect(gameBoard.receiveAttack(0, 0)).toBe("Miss!");
});

it("gameover: false", () => {
  const gameBoard = new GameBoard();
  const ship1 = new Ship(3);
  gameBoard.placeShip(0, 8, [0, -1], ship1);
  const ship2 = new Ship(4);
  ship2.sunk = true;
  gameBoard.placeShip(1, 2, [1, 0], ship2);
  expect(gameBoard.checkResults()).toBe(false);
});

it("game over: true", () => {
  const gameBoard = new GameBoard();
  gameBoard.shipArray.forEach((ship) => {
    ship.sunk = true;
  });
  expect(gameBoard.checkResults()).toBe(true);
});
