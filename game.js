
function createGrid(num) {
    const gridContainer = document.querySelector(".board");
    gridContainer.style.gridTemplateColumns = `repeat(${num}, 1fr)`;
    gridContainer.style.gridTemplateRows = `repeat(${num}, 1fr)`;

    for (let i=1; i <= num * num; i++) {
        let div = document.createElement("div");
        div.classList.add("grid-item")
        gridContainer.appendChild(div);
    }
    
}





//EVENT LISTENERS 
let board = document.querySelectorAll('.board');

// we use the .forEach method to iterate through each button
board.forEach((item) => {

    // and for each one we add a 'click' listener
    item.addEventListener('mouseover', () => {
      console.log('Hover Detected')
    });
  });


let gridNumber = 16;
createGrid(gridNumber)

console.log(board)