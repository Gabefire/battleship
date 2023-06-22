export default function placeShipIndicator(shipLength, gameBoard, dir) {
  const squares = document.querySelectorAll(".square");
  let selection = [];

  squares.forEach((square) => {
    square.addEventListener("mouseover", (e) => {
      let length = shipLength;
      let color = "lightgrey";
      const coord = e.target.id.split("-");
      const row = +coord[1];
      const col = +coord[2];
      if (gameBoard.squareArray[row][col].shipPlaced !== null) return;
      if (!gameBoard.checkValidMove(row, col, dir, length)) {
        color = "red";
        let results = false;
        while (!results) {
          length -= 1;
          results = gameBoard.checkValidMove(row, col, dir, length);
        }
      }
      if (dir[0] === 1) {
        for (let i = row; i < length + row; i += 1) {
          const box = document.getElementById(`large-${i}-${col}`);
          box.style.backgroundColor = color;
          selection.push(box);
        }
      }
      if (dir[0] === -1) {
        for (let i = row; i > row - length; i -= 1) {
          const box = document.getElementById(`large-${i}-${col}`);
          box.style.backgroundColor = color;
          selection.push(box);
        }
      }
      if (dir[1] === 1) {
        for (let i = col; i < length + col; i += 1) {
          const box = document.getElementById(`large-${row}-${i}`);
          box.style.backgroundColor = color;
          selection.push(box);
        }
      }
      if (dir[1] === -1) {
        for (let i = col; i > col - length; i -= 1) {
          const box = document.getElementById(`large-${row}-${i}`);
          box.style.backgroundColor = color;
          selection.push(box);
        }
      }
    });
    square.addEventListener("mouseleave", () => {
      if (selection.length > 0) {
        selection.forEach((element) => {
          const node = element;
          node.style.backgroundColor = "white";
        });
      }
      selection = [];
    });
  });
}
