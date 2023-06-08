import ComputerGameBoard from "./computer_game_board";
import {
  createBoard,
  updateSquare,
  changeStatus,
  displayWinner,
} from "./DOMmethods";

export default function startGame(playerGameBoard) {
  const computerGameBoard = new ComputerGameBoard();
  computerGameBoard.buildComputerGameBoard();
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
      let result = computerGameBoard.receiveAttack(row, col);
      if (result === "Invalid!") {
        changeStatus(result);
        return;
      }
      updateSquare("large", row, col, result);
      changeStatus(result);
      gameOver = computerGameBoard.checkResults();
      if (gameOver) {
        displayWinner(playersTurn);
        return;
      }
      playersTurn = false;
      const computerCoord = computerGameBoard.getComputersTurn();
      result = playerGameBoard.receiveAttack(...computerCoord);
      if (
        result === "Hit!" ||
        computerGameBoard.previousHits.length > 0 ||
        computerGameBoard.nextMove !== null
      ) {
        computerGameBoard.computerAdjacentSquare(...computerCoord, result);
      }
      updateSquare("small", ...computerCoord, result);
      gameOver = playerGameBoard.checkResults();
      if (gameOver) {
        displayWinner(playersTurn);
        return;
      }
      playersTurn = true;
    });
  });
}
