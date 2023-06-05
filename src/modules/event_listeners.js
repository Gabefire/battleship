export default function placeShipIndicator(ship, gameboard, dir) {
  const squares = document.querySelectorAll(".square");
  let selection = [];

  squares.forEach((square) => {
    square.addEventListener("mouseover", (e) => {
      const coord = e.target.id.split("-");
      const row = +coord[0];
      const col = +coord[1];
      if (!gameboard.checkValidMove(row, col, dir, ship)) return;
      if (dir[0] === 1) {
        for (let i = row; i < ship.length + row; i += 1) {
          const box = document.getElementById(`${i}-${col}`);
          box.style.backgroundColor = "lightgrey";
          selection.push(box);
        }
      }
      if (dir[0] === -1) {
        for (let i = row; i > row - ship.length; i -= 1) {
          const box = document.getElementById(`${i}-${col}`);
          box.style.backgroundColor = "lightgrey";
          selection.push(box);
        }
      }
      if (dir[1] === 1) {
        for (let i = col; i < ship.length + col; i += 1) {
          const box = document.getElementById(`${row}-${i}`);
          box.style.backgroundColor = "lightgrey";
          selection.push(box);
        }
      }
      if (dir[1] === -1) {
        for (let i = col; i > col - ship.length; i -= 1) {
          const box = document.getElementById(`${row}-${i}`);
          box.style.backgroundColor = "lightgrey";
          selection.push(box);
        }
      }
    });
    square.addEventListener("mouseleave", () => {
      if (selection.length > 0) {
        selection.forEach((box) => {
          box.style.backgroundColor = "white";
        });
      }
      selection = [];
    });
  });
}

export function placeShipListener(ship, gameBoard, dir) {
  const squares = document.querySelectorAll(".square");

  squares.forEach((square) => {
    square.addEventListener("click", (e) => {
      const coord = e.target.id.split("-");
      const row = +coord[0];
      const col = +coord[1];
      const results = gameBoard.placeShip(row, col, dir, ship);
      if (!results) {
        console.log("train was not placed");
        return;
      }
      console.log("train was placed");
    });
  });
}
