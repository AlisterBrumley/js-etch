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
// Drawing grid
function drawGrid(gWidth) {
    const gSize = gWidth ** 2;
    const gContainer = document.querySelector(".gridContainer");
    const gFragment = new DocumentFragment();

    // creating initial row
    let gRow = document.createElement("div");
    gRow.classList.add("gridRow");

    // creating grid
    for (let addBlock = 1; addBlock <= gSize; addBlock++) {
        // creating blocks
        const gBlock = document.createElement("div");
        gBlock.classList.add("block");
        gRow.appendChild(gBlock);

        // if at row end, append to container and create new row
        if (addBlock % gWidth === 0) {
            gFragment.appendChild(gRow);
            gRow = document.createElement("div");
            gRow.classList.add("gridRow");
        };
    };

    gContainer.appendChild(gFragment);

    return document.querySelectorAll(".block");
};

// Coloring Blocks in default dark color
function gBlockEtch(block) {
    block.style.backgroundColor = "var(--base03)";
};

// Coloring Blocks in alternative colors
function gBlockColor(block) {
    const randomInt = Math.floor(Math.random() * colorArray.length);
    const randomColor = colorArray[randomInt];
    block.style.backgroundColor = `var(${randomColor})`;
};


// MAIN FUNCTION RUN
let gBlocks = drawGrid(gridWidth);


// EVENT LISTENER
// Etching function
gBlocks.forEach((gBlock) => {
    gBlock.addEventListener("mouseover", () => {
        if (!colorEtch) {
            gBlockEtch(gBlock)
        } else {
            gBlockColor(gBlock)
        };
    });
});

//
sizeButton.addEventListener("click", () => {
    let newSize = prompt("new grid size?");
    // TODO add function that deletes old grid container/rows and maybe callsback to create new
})

colorButton.addEventListener("click", () => {
    colorEtch = !colorEtch;
})

resetButton.addEventListener("click", () => {
    location.reload();
});
