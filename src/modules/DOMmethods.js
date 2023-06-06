export function createBoard(size, squareArray, displayShip = true) {
  const grid = document.querySelector(`#${size}-grid`);
  grid.innerHTML = "";

  for (let i = 9; i >= 0; i -= 1) {
    const row = document.createElement("div");
    row.id = `${i}`;
    row.className = "row";
    grid.appendChild(row);

    for (let x = 0; x < 10; x += 1) {
      const div = document.createElement("div");
      div.id = `${size}-${i}-${x}`;
      div.className = "square";
      row.appendChild(div);
      const square = squareArray[i][x];
      if (square.shipPlaced !== null && square.hit === true) {
        div.style.backgroundColor = "red";
      } else if (
        square.shipPlaced !== null &&
        square.hit === false &&
        displayShip
      ) {
        div.style.backgroundColor = "grey";
      } else if (square.shipPlaced === null && square.hit === true) {
        div.style.backgroundColor = "blue";
      } else {
        div.style.backgroundColor = "white";
      }
    }
  }
}

export function updateSquare(size, row, col, result) {
  const currentSquare = document.getElementById(`${size}-${row}-${col}`);
  if (result === "Hit!" || result === "Ship Sunk!") {
    currentSquare.style.backgroundColor = "red";
  } else if (result === "Miss!") {
    currentSquare.style.backgroundColor = "blue";
  }
}

// export function placeShip(length) {}
