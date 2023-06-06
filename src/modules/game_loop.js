import createBoard from "./DOMmethods";
import Gameboard from "./gameboard";
import Ship from "./ship";

function buildComputerGameBoard(
  playerGameBoard,
  shipArray,
  gameBoard,
  currentShipIndex = 0
) {
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

function buildComputer(playerGameBoard) {
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
  buildComputerGameBoard(playerGameBoard, computerShipArray, computerGameBoard);
}

export default function startGame(playerGameBoard) {
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
      const row = +coord[0];
      const col = +coord[1];
      if (!playerGameBoard.checkValidMove(row, col, dir, ship)) return;
    });
  });
}
