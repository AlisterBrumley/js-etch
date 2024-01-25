const gridWidth = 16;
const gridSize = gridWidth ** 2;

console.log(gridSize);

function drawGrid(gWidth, gSize) {
    const gridContainer = document.querySelector(".gridContainer");
    const gridFragment = new DocumentFragment();

    // creating initial row
    let gridRow = document.createElement("div");
    gridRow.classList.add("gridRow")

    // creating grid
    for (let addBlock = 1; addBlock <= gSize; addBlock++) {
        // creating blocks
        const gridBlock = document.createElement("div");
        gridBlock.classList.add("block");
        gridRow.appendChild(gridBlock);

        // if at row end, append to container and create new row
        if (addBlock % gWidth === 0) {
            gridContainer.appendChild(gridRow);
            gridRow = document.createElement("div");
            gridRow.classList.add("gridRow")
        }
    };
    
    // TODO: use fragments to speed up
    // Currently kinda breaky at 100
}


document.addEventListener("DOMContentLoaded", (event) => {
    drawGrid(gridWidth, gridSize);
});