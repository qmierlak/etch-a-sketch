// create 16 div squares
let containerLink = document.querySelector(".container");
for (let i = 0; i < 16; i++) {
    const square = document.createElement('div');
    square.setAttribute("class", "square");
    containerLink.appendChild(square);
}