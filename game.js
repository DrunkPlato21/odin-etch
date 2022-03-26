

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


const buttons = document.querySelectorAll('button');


// we use the .forEach method to iterate through each button
buttons.forEach((button) => {

    // and for each one we add a 'click' listener
    button.addEventListener('click', () => {
      alert(button.id);
    });
  });

createGrid(16)