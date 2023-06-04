export default function createBoard(size) {
  const grid = document.querySelector(".grid");
  grid.id = `${size}`;

  for (let i = 9; i >= 0; i -= 1) {
    const row = document.createElement("div");
    row.id = `${i}`;
    row.className = "row";
    grid.appendChild(row);

    for (let x = 0; x < 10; x += 1) {
      const div = document.createElement("div");
      div.setAttribute("date-row", `${i}`);
      div.setAttribute("data-column", `${x}`);
      div.className = "square";
      row.appendChild(div);
    }
  }
}

// export function placeShip(length) {}
