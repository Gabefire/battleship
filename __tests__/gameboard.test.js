import Gameboard from "../src/modules/gameboard";
import Ship from "../src/modules/ship";

it("hit square", () => {});

it("place ship: 1", () => {
  const gameboard = new Gameboard();
  const ship = new Ship(3);
  gameboard.placeShip(1, 2, [1, 0], ship);
  const squareArray = gameboard.squareArray;
  expect(squareArray[1][2].shipPlaced).toBe(ship);
  expect(squareArray[2][2].shipPlaced).toBe(ship);
  expect(squareArray[3][2].shipPlaced).toBe(ship);
});

it("place ship: 2", () => {
  const gameboard = new Gameboard();
  const ship = new Ship(3);
  gameboard.placeShip(0, 8, [0, -1], ship);
  const squareArray = gameboard.squareArray;
  expect(squareArray[0][8].shipPlaced).toBe(ship);
  expect(squareArray[0][7].shipPlaced).toBe(ship);
  expect(squareArray[0][6].shipPlaced).toBe(ship);
});

it("place ship: ship array", () => {
  const gameboard = new Gameboard();
  const ship1 = new Ship(3);
  gameboard.placeShip(0, 8, [0, -1], ship1);
  const ship2 = new Ship(4);
  gameboard.placeShip(1, 2, [1, 0], ship2);
  expect(gameboard.shipArray).toStrictEqual([ship1, ship2]);
});

it("place ship: to large left", () => {
  const gameboard = new Gameboard();
  const ship = new Ship(9);
  expect(gameboard.placeShip(0, 8, [0, -1], ship)).toBe(false);
});

it("place ship: to large up", () => {
  const gameboard = new Gameboard();
  const ship = new Ship(1);
  expect(gameboard.placeShip(9, 0, [1, 0], ship)).toBe(false);
});

it("receive attack: hit", () => {
  const gameboard = new Gameboard();
  const ship = new Ship(1);
  gameboard.placeShip(0, 0, [1, 0], ship);
  expect(gameboard.receiveAttack(0, 0)).toBe(true);
  expect(ship.numHits).toBe(1);
});

it("receive attack: miss", () => {
  const gameboard = new Gameboard();
  expect(gameboard.receiveAttack(0, 0)).toBe(false);
});

it("gameover: false", () => {
  const gameboard = new Gameboard();
  const ship1 = new Ship(3);
  gameboard.placeShip(0, 8, [0, -1], ship1);
  const ship2 = new Ship(4);
  ship2.sunk = true;
  gameboard.placeShip(1, 2, [1, 0], ship2);
  expect(gameboard.checkResults()).toBe(false);
});

it("gameover: true", () => {
  const gameboard = new Gameboard();
  const ship1 = new Ship(3);
  ship1.sunk = true;
  gameboard.placeShip(0, 8, [0, -1], ship1);
  const ship2 = new Ship(4);
  ship2.sunk = true;
  gameboard.placeShip(1, 2, [1, 0], ship2);
  expect(gameboard.checkResults()).toBe(true);
});
