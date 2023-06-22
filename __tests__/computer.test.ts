import ComputerGameBoard from "../src/modules/computer-game-board";
import GameBoard from "../src/modules/game-board";
import Ship from "../src/modules/ship";

it("Get computer turn", () => {
  const computer = new ComputerGameBoard();
  computer.nextMove = [0, 0];
  expect(computer.getComputersTurn()).toEqual([0, 0]);
});

it("Adjacent Squares: hit can move", () => {
  const player = new GameBoard();
  const computer = new ComputerGameBoard();
  const ship = new Ship(5);
  player.placeShip(6, 6, [0, -1], ship);
  player.receiveAttack(6, 6);
  computer.previousHits.push([6, 6]);
  player.receiveAttack(6, 5);
  computer.previousHits.push([6, 5]);
  computer.currentDir = [0, -1];
  computer.computerAdjacentSquare(6, 5, "Hit!");
  expect(computer.nextMove).toEqual([6, 4]);
  player.receiveAttack(6, 4);
  computer.previousHits.push([6, 4]);
  computer.computerAdjacentSquare(6, 4, "Hit!");
  expect(computer.nextMove).toEqual([6, 3]);
  player.receiveAttack(6, 3);
  computer.previousHits.push([6, 3]);
  computer.computerAdjacentSquare(6, 3, "Hit!");
  expect(computer.nextMove).toEqual([6, 2]);
  const results = player.receiveAttack(6, 2);
  computer.previousHits.push([6, 2]);
  computer.computerAdjacentSquare(6, 2, results);
  expect(computer.nextMove).toEqual(null);
});

it("Adjacent Squares: hit with miss at end", () => {
  const player = new GameBoard();
  const computer = new ComputerGameBoard();
  const ship = new Ship(3);
  player.placeShip(6, 6, [0, -1], ship);
  let results = player.receiveAttack(6, 5);
  computer.previousHits.push([6, 5]);
  computer.currentDir = [0, -1];
  results = player.receiveAttack(6, 4);
  computer.previousHits.push([6, 4]);
  results = player.receiveAttack(6, 3);
  computer.computerAdjacentSquare(6, 3, results);
  expect(computer.previousHits.length).toBeGreaterThan(0);
  expect(computer.nextMove).toEqual([6, 6]);
});

it("Adjacent Squares: hit with invalid at end", () => {
  const player = new GameBoard();
  const computer = new ComputerGameBoard();
  const ship = new Ship(3);
  player.placeShip(6, 6, [0, -1], ship);
  let results = player.receiveAttack(6, 5);
  computer.previousHits.push([6, 5]);
  computer.currentDir = [0, -1];
  results = player.receiveAttack(6, 4);
  computer.previousHits.push([6, 4]);
  player.receiveAttack(6, 3);
  results = player.receiveAttack(6, 3);
  computer.computerAdjacentSquare(6, 3, results);
  expect(computer.previousHits.length).toBeGreaterThan(0);
  expect(computer.nextMove).toEqual([6, 6]);
});
