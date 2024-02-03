// INITIAL VARIABLES
const gWidth = 16;
const sizeButton = document.querySelector(".sizeButton");
const colorButton = document.querySelector(".colorButton");
const resetButton = document.querySelector(".resetButton");
const colorArray = ["--yellow",
    "--orange",
    "--red",
    "--magenta",
    "--violet",
    "--blue",
    "--cyan",
    "--green"
]
let colorEtch = false;




// FUNCTIONS
// Drawing grid
function drawGrid(gridWidth) {
    const gridSize = gridWidth ** 2;
    const gridContainer = document.querySelector(".gridContainer");
    const gridFragment = new DocumentFragment();

    // creating initial row
    let gridRow = document.createElement("div");
    gridRow.classList.add("gridRow");

    // creating grid
    for (let addBlock = 1; addBlock <= gridSize; addBlock++) {
        // creating blocks
        const gridBlock = document.createElement("div");
        gridBlock.classList.add("block");
        gridRow.appendChild(gridBlock);

        // if at row end, append to container and create new row
        if (addBlock % gridWidth === 0) {
            gridFragment.appendChild(gridRow);
            gridRow = document.createElement("div");
            gridRow.classList.add("gridRow");
        };
    };

    gridContainer.appendChild(gridFragment);

    return document.querySelectorAll(".block");
};

// Coloring Blocks in default dark color
function gridBlockEtch(block) {
    block.style.backgroundColor = "var(--base03)";
};

// Coloring Blocks in alternative colors
function gridBlockColor(block) {
    const randomInt = Math.floor(Math.random() * colorArray.length)
    const randomColor = colorArray[randomInt]
    block.style.backgroundColor = `var(${randomColor})`;
};

// Creating a form for resizing
function gridSizeForm(sizeDiv) {
    const sizeForm = document.createElement("input")
    sizeForm.type = "text"
    sizeForm.classList.add("form")
    sizeDiv.appendChild(sizeForm)
    // TODO
    // keep button at width during form
    // close form and return to old width
    // maybe another func?
}

// TODO
/*
    function/event to take form input
    round to 16-100 
    resize button to normal
    resize grid
*/


// MAIN FUNCTION RUN
let gridBlocks = drawGrid(gWidth);


// EVENT LISTENER
// Etching function
gridBlocks.forEach((gridBlock) => {
    gridBlock.addEventListener("mouseover", () => {
        if (!colorEtch) {
            gridBlockEtch(gridBlock)
        } else {
            gridBlockColor(gridBlock)
        };
    });
});

sizeButton.addEventListener("click", () => {
    const sizeDiv = document.querySelector(".sizeDiv")
    if (sizeDiv.children.length < 2) {
        gridSizeForm(sizeDiv)
    }
})

colorButton.addEventListener("click", () => {
    colorEtch = !colorEtch;
})

resetButton.addEventListener("click", () => {
    location.reload();
});
