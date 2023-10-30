import Board from "./board.js";

let board = new Board();


const body = document.body;
const button = document.querySelector("button");
const div = createCenteredDiv("div-style");
const win = createCenteredDiv();
const h2 = createHiddenH2("YOU WIN!");

body.appendChild(div);
body.insertBefore(win, div);
win.appendChild(h2);

let game = false;


button.addEventListener("click", () => {
  clearGrid();
  resetBoard();
  play();
});

function createCenteredDiv(className) {
  const newDiv = document.createElement("div");
  newDiv.classList.add("center");
  if (className) {
    newDiv.classList.add(className);
  }
  return newDiv;
}

function createHiddenH2(text) {
  const newH2 = document.createElement("h2");
  newH2.classList.add("hidden");
  newH2.innerText = text;
  return newH2;
}

function clearGrid() {
  const elements = document.querySelectorAll(".inner-div");
  elements.forEach((element) => {
    div.removeChild(element);
  });
}

function resetBoard() {
  board = new Board();
  game = false;
  h2.classList.add("hidden");
}

function play() {
  board.grid.forEach((row, idx) => {
    row.forEach((cell, idy) => {
      const innerDiv = document.createElement("div");
      innerDiv.classList.add("inner-div");
      innerDiv.setAttribute("data-row", idx);
      innerDiv.setAttribute("data-column", idy);

      const content = div.appendChild(innerDiv);
      content.innerText = cell;

      content.addEventListener("click", () => handleCellClick(innerDiv));
    });
  });
}

function handleCellClick(innerDiv) {
  if (innerDiv.style.backgroundColor === "green" || game) {
    return;
  }

  const [row, column] = [
    innerDiv.dataset.row,
    innerDiv.dataset.column,
  ];

  const hit = board.makeHit(row, column);

  if (typeof hit === "number") {
    innerDiv.style.backgroundColor = "green";
  } else {
    innerDiv.style.backgroundColor = "red";
  }

  if (board.isGameOver()) {
    game = true;
    h2.classList.remove("hidden");
  }
}

play();