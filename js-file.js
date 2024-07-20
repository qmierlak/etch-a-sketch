/* create 16 div squares
for (let i = 0; i < 16; i++) {
    const square = document.createElement('div');
    square.setAttribute("class", "square");
    containerLink.appendChild(square);
}
*/


/*
    Strategy:
    Create 16 rows of 16 grids per row, flexbox row them.
*/

let containerLink = document.querySelector(".container");


for (let row = 0; row < 16; row++) {
    let rowDiv = document.createElement('div');
    rowDiv.setAttribute("class", "row");

    for (let i = 0; i < 16; i++) {
        const cellDiv = document.createElement('div');
        cellDiv.setAttribute("class", "cell");
        rowDiv.appendChild(cellDiv);
    }
    containerLink.appendChild(rowDiv);
}