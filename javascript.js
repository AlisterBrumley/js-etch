// INITIAL VARIABLES
const gridWidth = 16;
const sizeButton = document.querySelector(".sizeButton");
const colorButton = document.querySelector(".colorButton");
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
const resetButton = document.querySelector(".resetButton");


// FUNCTIONS
function drawGrid(gWidth) {
    const gSize = gWidth ** 2;
    const gContainer = document.querySelector(".gridContainer");
    const gFragment = new DocumentFragment();

    // creating initial row
    let gRow = document.createElement("div");
    gRow.classList.add("gridRow");

    // creating grid
    for (let addBlock = 1; addBlock <= gSize; addBlock++) {
        // creating blocks and appending to row
        const gridBlock = document.createElement("div");
        gridBlock.classList.add("block");
        gRow.appendChild(gridBlock);

        // if at row end, append to container fragment and create new row
        if (addBlock % gWidth === 0) {
            gFragment.appendChild(gRow);
            gRow = document.createElement("div");
            gRow.classList.add("gridRow");
        };
    };

    // appending container fragments to container element
    gContainer.appendChild(gFragment);

    return document.querySelectorAll(".block");
};

// Coloring Blocks in default dark color
function gBlockEtch(gBlock) {
    gBlock.style.backgroundColor = "var(--base03)";
};

// Coloring Blocks in alternative colors
function gBlockColor(gBlock) {
    const randomInt = Math.floor(Math.random() * colorArray.length);
    const randomColor = colorArray[randomInt];
    gBlock.style.backgroundColor = `var(${randomColor})`;
};

// Etching in both color and mono
function etcher(gBlocks) {
    gBlocks.forEach((gBlock) => {
        gBlock.addEventListener("mouseover", () => {
            if (!colorEtch) {
                gBlockEtch(gBlock)
            } else {
                gBlockColor(gBlock)
            };
        });
    });
}

// Creating new grid
function drawNewGrid() {
    const newSize = parseInt(prompt("new grid size?"));

    if (!Number.isInteger(newSize)) {
        alert("size must be input with numbers only!")
        return
    } else if (newSize < 16 || newSize > 100) {
        alert("size must be between 16 and 100!")
        return
    }

    const gContainer = document.querySelector(".gridContainer");

    // deleting old grid
    gContainer.replaceChildren();

    // creating new grid and reinitializing event listener
    gridBlocks = drawGrid(newSize);
    etcher(gridBlocks);
}


// MAIN FUNCTION RUN
let gridBlocks = drawGrid(gridWidth);
etcher(gridBlocks);

// EVENT LISTENERS
// Size button
sizeButton.addEventListener("click", () => {
    drawNewGrid()
})

// Switching to color/mono modes
colorButton.addEventListener("click", () => {
    colorEtch = !colorEtch;
})

// Resetting page
resetButton.addEventListener("click", () => {
    location.reload();
});