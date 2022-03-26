
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

let gridNumber = 16;


createGrid(gridNumber)

let gridItems = document.querySelectorAll('.grid-item');


//EVENT LISTENERS 


// we use the .forEach method to iterate through each button
gridItems.forEach((item) => {

    // and for each one we add a 'click' listener
    item.addEventListener('mouseover', () => {
      console.log('Hover Detected')
    });
  });



console.log(gridItems)

