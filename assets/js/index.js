import Board from "./board.js";

let board = new Board(); // creates a new game board

// Examine the grid of the game board in the browser console.
// Create the UI of the game using HTML elements based on this grid.

// Your code here

console.log(board.grid);

const body = document.body
body.classList.add("center")
let div = document.createElement("div");
body.appendChild(div)
div.classList.add("center")
div.classList.add('div-style')



board.grid.forEach((row, idx) => {

  row.forEach((cell, idy) => {
    let innerDiv = document.createElement('div');
    innerDiv.classList.add("inner-div")
    innerDiv.setAttribute("data-row", `${idx}`)
    innerDiv.setAttribute("data-column", `${idy}`)

    let value = div.appendChild(innerDiv)
    value.innerText = cell
    value.addEventListener('click', (e) => {
      const [row, column] = [innerDiv.dataset.row, innerDiv.dataset.column];
      console.log(row, column);
      board.makeHit(row, column)
      console.log(e.target)

    })
  })

})