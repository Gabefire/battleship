export default function createBoard(size, squareArray) {
  const grid = document.querySelector(".grid");
  grid.innerHTML = "";
  grid.id = `${size} grid`;

  for (let i = 9; i >= 0; i -= 1) {
    const row = document.createElement("div");
    row.id = `${i}`;
    row.className = "row";
    grid.appendChild(row);

    for (let x = 0; x < 10; x += 1) {
      const div = document.createElement("div");
      div.id = `${i}-${x}`;
      div.className = "square";
      row.appendChild(div);
      const square = squareArray[i][x];
      if (square.shipPlaced !== null && square.hit === true) {
        div.style.backgroundColor = "red";
      } else if (square.shipPlaced !== null && square.hit === false) {
        div.style.backgroundColor = "grey";
      } else if (square.shipPlaced === null && square.hit === true) {
        div.style.backgroundColor = "blue";
      } else {
        div.style.backgroundColor = "white";
      }
    }
  }
}

// export function placeShip(length) {}
