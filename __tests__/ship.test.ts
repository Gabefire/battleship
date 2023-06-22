import Ship from "../src/modules/ship";

it("hit", () => {
  const ship = new Ship(6);
  ship.hit();
  expect(ship.numHits).toBe(1);
});

it("sunk", () => {
  const ship = new Ship(6);
  ship.numHits = 1;
  ship.length = 1;
  ship.isSunk();
  expect(ship.sunk).toBe(true);
});
