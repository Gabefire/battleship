import Square from "./square";

export function createBoard(
  size: string,
  squareArray: Square[][],
  displayShip: boolean = true
): void {
  const grid = document.querySelector(`#${size}-grid`) as HTMLDivElement;
  const sideBar = document.querySelector(".side-bar") as HTMLDivElement;
  grid.innerHTML = "";
  if (size === "small") {
    sideBar.style.display = "flex";
  }

  for (let i = 9; i >= 0; i -= 1) {
    const row = document.createElement("div") as HTMLDivElement;
    row.id = `${i}`;
    row.className = "row";
    grid.appendChild(row);

    for (let x = 0; x < 10; x += 1) {
      const div = document.createElement("div") as HTMLDivElement;
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

export function updateSquare(
  size: string,
  row: number,
  col: number,
  result: string
): void {
  const currentSquare = document.getElementById(
    `${size}-${row}-${col}`
  ) as HTMLElement;
  if (result === "Hit!" || result === "Ship Sunk!") {
    currentSquare.style.backgroundColor = "red";
  } else if (result === "Miss!") {
    currentSquare.style.backgroundColor = "blue";
  }
}

export function changeShipText(shipIndex: number) {
  const statusShip = document.querySelector(".status-ship") as HTMLElement;
  const text: number = shipIndex;
  let shipText: string = "";
  switch (shipIndex) {
    case 0:
      shipText = "Place Carrier";
      break;
    case 1:
      shipText = "Place Battleship";
      break;
    case 2:
      shipText = "Place Cruiser";
      break;
    case 3:
      shipText = "Place Submarine";
      break;
    case 4:
      shipText = "Place Destroyer";
      break;
    default:
      shipText = "";
      break;
  }
  statusShip.textContent = shipText;
}

export function changeStatus(result: string) {
  const status = document.querySelector(".status") as HTMLElement;
  status.textContent = result;
}

export function displayWinner(playersTurn) {
  const status = document.querySelector(".status") as HTMLElement;
  const resetButton = document.querySelector(".reset") as HTMLButtonElement;
  resetButton.style.visibility = "visible";
  if (playersTurn) {
    status.textContent = "You won!";
  } else {
    status.textContent = "Computer won!";
  }
}
