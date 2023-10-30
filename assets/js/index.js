import Board from "./board.js";

let board = new Board(); // creates a new game board

// Examine the grid of the game board in the browser console.
// Create the UI of the game using HTML elements based on this grid.
console.log(board.grid);

const body = document.body
body.classList.add("center")
let div = document.createElement("div");
body.appendChild(div)
div.classList.add("center")
div.classList.add('div-style')

board.grid.forEach((row) => {
  row.forEach((cell) => {
    let innerDiv = document.createElement('div');
    innerDiv.classList.add("inner-div")
    div.appendChild(innerDiv)
  })
})
// Your code here
