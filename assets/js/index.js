import Board from "./board.js";

let board = new Board(); // creates a new game board

// Examine the grid of the game board in the browser console.
// Create the UI of the game using HTML elements based on this grid.

// Your code here
let game = false;
console.log(board.grid);

const body = document.body
body.classList.add("center")
let div = document.createElement("div");
body.appendChild(div)
div.classList.add("center")
div.classList.add('div-style')
let win = document.createElement("div")
let h2 = document.createElement("h2")
body.insertBefore(win, div)
h2.classList.add("hidden")
h2.classList.add("shown")
h2.innerText = " YOU WIN! "
win.appendChild(h2)

board.grid.forEach((row, idx) => {

  row.forEach((cell, idy) => {
    let innerDiv = document.createElement('div');
    innerDiv.classList.add("inner-div")
    innerDiv.setAttribute("data-row", `${idx}`)
    innerDiv.setAttribute("data-column", `${idy}`)

    let content = div.appendChild(innerDiv)
    content.innerText = cell
    content.addEventListener('click', (e) => {
      const [row, column] = [innerDiv.dataset.row, innerDiv.dataset.column];
      if (innerDiv.style.backgroundColor === "green" || game) {
        return
      }

      let hit = board.makeHit(row, column);

      if (typeof hit === "number") {
        innerDiv.style.backgroundColor = "green";
      } else {
        innerDiv.style.backgroundColor = "red";
      }

      if (board.isGameOver()) {
        let all = document.querySelectorAll(".inner-div")
        game = true;
        h2.classList.remove("hidden")
      }
    })
  })

})