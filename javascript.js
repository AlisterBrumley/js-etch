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
        const gridBlock = document.createElement("div");
        gridBlock.classList.add("block");
        gRow.appendChild(gridBlock);

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
let gridBlocks = drawGrid(gridWidth);


// EVENT LISTENER

//
sizeButton.addEventListener("click", () => {
    const newSize = prompt("new grid size?");
    const gContainer = document.querySelector(".gridContainer");

    gContainer.replaceChildren();

    gridBlocks = drawGrid(newSize);

    // TODO
    // THIS WORKS BUT MIGHT PEFORM BAD
    // try to callback from event listen or create function to contain a callback
    gridBlocks.forEach((gridBlock) => {
        gridBlock.addEventListener("mouseover", () => {
            if (!colorEtch) {
                gBlockEtch(gridBlock)
            } else {
                gBlockColor(gridBlock)
            };
        });
    });
})

// Etching function
gridBlocks.forEach((gridBlock) => {
    gridBlock.addEventListener("mouseover", () => {
        if (!colorEtch) {
            gBlockEtch(gridBlock)
        } else {
            gBlockColor(gridBlock)
        };
    });
});

// Switching to color/mono modes
colorButton.addEventListener("click", () => {
    colorEtch = !colorEtch;
})

// Resetting page
resetButton.addEventListener("click", () => {
    location.reload();
});
