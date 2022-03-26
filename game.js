
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


function clearGrid() {

const gridContainer = document.querySelector(".board");
  console.log(gridContainer)

while (gridContainer.firstChild) {
    gridContainer.removeChild(gridContainer.firstChild);
    
  } 
let userInput = prompt("What resolution would you like? (max 100)");

createGrid(userInput);
listenGrid();

}
//EVENT LISTENERS 

function listenGrid(){

  let gridItems = document.querySelectorAll('.grid-item');
// we use the .forEach method to iterate through each button
  gridItems.forEach((item) => {

    item.addEventListener('mouseover', () => {
      console.log('Hover Detected');
      item.style.backgroundColor = "red"
      
    });
  });

}

//init

let gridNumber = 64;
createGrid(gridNumber);
listenGrid();




  