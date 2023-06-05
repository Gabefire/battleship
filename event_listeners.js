/*
import { checkValidMove } from "../src/modules/event_listeners";
import Gameboard from "../src/modules/gameboard";
import Ship from "../src/modules/ship";

it("Invalid Move: outside board", () => {
  const gameboard = new Gameboard();
  const ship = new Ship(5);
  const currentDir = [1, 0];
  const squareArray = gameboard.squareArray;
  const row = 9;
  const col = 9;
  expect(checkValidMove(row, col, ship, currentDir, squareArray)).toBe(false);
});

it("Invalid Move: ship in spot", () => {
  const gameboard = new Gameboard();
  const ship = new Ship(5);
  const currentDir = [0, 1];
  gameboard.placeShip(8, 8, currentDir, ship);
  const ship2 = new Ship(2);
  let dir = [1, 0];
  const squareArray = gameboard.squareArray;
  let row = 8;
  let col = 9;
  expect(checkValidMove(row, col, ship2, dir, squareArray)).toBe(false);
  row = 9;
  col = 9;
  dir = [-1, 0];
  expect(checkValidMove(row, col, ship2, dir, squareArray)).toBe(false);
  row = 1;
  col = 8;
  dir = [0, -1];
  expect(checkValidMove(row, col, ship2, dir, squareArray)).toBe(false);
  row = 9;
  col = 8;
  dir = [0, 1];
  expect(checkValidMove(row, col, ship2, dir, squareArray)).toBe(false);
});

it("Valid Move: 1", () => {
  const gameboard = new Gameboard();
  const ship = new Ship(5);
  const currentDir = [0, 1];
  const squareArray = gameboard.squareArray;
  const row = 9;
  const col = 9;
  expect(checkValidMove(row, col, ship, currentDir, squareArray)).toBe(true);
});

it("Valid Move: 2", () => {
  const gameboard = new Gameboard();
  const ship = new Ship(5);
  const currentDir = [0, 1];
  gameboard.placeShip(9, 9, currentDir, ship);
  const ship2 = new Ship(2);
  const dir = [1, 0];
  const squareArray = gameboard.squareArray;
  const row = 5;
  const col = 5;
  expect(checkValidMove(row, col, ship2, dir, squareArray)).toBe(true);
});
*/
