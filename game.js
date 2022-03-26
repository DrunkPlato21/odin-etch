
function createGrid(num) {
    const gridContainer = document.querySelector(".board");
    gridContainer.style.gridTemplateColumns = `repeat(${num}, 1fr)`;
    gridContainer.style.gridTemplateRows = `repeat(${num}), 1fr`;

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

  
      let userInput = prompt("What resolution would you like? (max 100)", 75);
      if (userInput === null || userInput == "" || parseInt(userInput) > 100) {
        alert("not a valid entry, creating default 32 resolution grid")
        createGrid(32)
        listenGrid();
        return
        
      }

        createGrid(userInput);
        listenGrid();

}

function changeColor(color) {
  gridColor = color
}



//EVENT LISTENERS 

function listenGrid(){

  let gridItems = document.querySelectorAll('.grid-item');
// we use the .forEach method to iterate through each button
  gridItems.forEach((item) => {

    item.addEventListener('mouseover', () => {
      console.log('Hover Detected');
      item.style.backgroundColor = gridColor;
      
    });
  });

}

//init

let gridNumber = 64;
let gridColor = "red";
createGrid(gridNumber);
listenGrid();




  