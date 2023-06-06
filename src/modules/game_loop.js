import Gameboard from "./gameboard";
import Ship from "./ship";
import { createBoard, updateSquare } from "./DOMmethods";

function buildComputerGameBoard(shipArray, gameBoard, currentShipIndex = 0) {
  if (currentShipIndex > shipArray.length - 1) {
    return;
  }
  const possibleDir = [
    // right
    [0, 1],
    // up
    [1, 0],
    // left
    [0, -1],
    // down
    [-1, 0],
  ];
  const currentShip = shipArray[currentShipIndex];
  let results = false;
  while (!results) {
    const row = Math.floor(Math.random() * 10);
    const col = Math.floor(Math.random() * 10);
    let dir = Math.floor(Math.random() * 4);
    dir = possibleDir[dir];
    results = gameBoard.placeShip(row, col, dir, currentShip);
  }
  const shipIndex = currentShipIndex + 1;

  buildComputerGameBoard(shipArray, gameBoard, shipIndex);
}

function getComputersTurn(computerGameBoard) {
  const row = Math.floor(Math.random() * 10);
  const col = Math.floor(Math.random() * 10);
  if ([row, col] in computerGameBoard.previousMoves) {
    getComputersTurn(computerGameBoard);
  }
  computerGameBoard.previousMoves.push([row, col]);
  return [row, col];
}

export default function startGame(playerGameBoard) {
  const computerGameBoard = new Gameboard();
  let maxShipSlots = 5;
  const computerShipArray = [];
  for (let i = 0; i < 4; i += 1) {
    const ship = new Ship(maxShipSlots);
    computerShipArray.push(ship);
    maxShipSlots -= 1;
  }
  const ship4 = new Ship(3);
  computerShipArray.splice(2, 0, ship4);
  buildComputerGameBoard(computerShipArray, computerGameBoard);
  createBoard("large", computerGameBoard.squareArray, false);
  createBoard("small", playerGameBoard.squareArray);
  let gameOver = false;
  let playersTurn = true;
  const squares = document.querySelectorAll(".square");
  squares.forEach((square) => {
    square.addEventListener("click", (e) => {
      if (gameOver) {
        return;
      }
      const coord = e.target.id.split("-");
      const row = +coord[1];
      const col = +coord[2];
      if ([row, col] in playerGameBoard.previousMoves) {
        // changeStatus("Square already hit")
        return;
      }
      playerGameBoard.previousMoves.push([row, col]);
      let result = computerGameBoard.receiveAttack(row, col);
      updateSquare("large", row, col, result);
      // changeStatus(result);
      gameOver = computerGameBoard.checkResults();
      if (gameOver) {
        // displayWinner(playersTurn);
        return;
      }
      playersTurn = false;
      const computerCoord = getComputersTurn(computerGameBoard);
      result = playerGameBoard.receiveAttack(...computerCoord);
      updateSquare("small", ...computerCoord, result);
      gameOver = computerGameBoard.checkResults();
      if (gameOver) {
        // displayWinner(playersTurn);
        return;
      }
      playersTurn = true;
    });
  });
}
