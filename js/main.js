// Just Start
console.log('Start Etch-a-Sketch!');

// grid div
let grid = document.querySelector('.grid');

// Grid and cell widths
let widthUnit = 'rem';
// one cell width
let cellWidth = 2;
// number of cells in row
let cellsInRow = 16;

// calculate and adjust grid width
let gridWidth = cellWidth * cellsInRow;
grid.style.width = `${gridWidth}${widthUnit}`;

// Create grid cells
for(let i = 1; i <= (cellsInRow*cellsInRow); i++) {
    let cell = document.createElement('div');
    cell.classList.add('cell', `cell-${i}`);
    cell.style.width = cell.style.height = `${cellWidth}${widthUnit}`;
    grid.appendChild(cell);
}