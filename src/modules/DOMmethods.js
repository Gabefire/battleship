export function createBoard(size, squareArray, displayShip = true) {
  const grid = document.querySelector(`#${size}-grid`);
  const sideBar = document.querySelector(".side-bar");
  grid.innerHTML = "";
  if (size === "small") {
    sideBar.style.display = "flex";
  }

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

export function changeShipText(shipIndex) {
  const statusShip = document.querySelector(".status-ship");
  let text = shipIndex;
  switch (shipIndex) {
    case 0:
      text = "Place Carrier";
      break;
    case 1:
      text = "Place Battleship";
      break;
    case 2:
      text = "Place Cruiser";
      break;
    case 3:
      text = "Place Submarine";
      break;
    case 4:
      text = "Place Destroyer";
      break;
    default:
      break;
  }
  statusShip.textContent = text;
}

export function changeStatus(result) {
  const status = document.querySelector(".status");
  status.textContent = result;
}

export function displayWinner(playersTurn) {
  const status = document.querySelector(".status");
  const resetButton = document.querySelector(".reset");
  resetButton.visibility = "visible";
  if (playersTurn) {
    status.textContent = "You won!";
  } else {
    status.textContent = "Computer won!";
  }
}
