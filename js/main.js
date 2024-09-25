// Just Start
console.log('Start Etch-a-Sketch!');

const gridWidth = 600;
const defaultCellsInRow = 16;

// grid div
const grid = document.querySelector('.grid');
grid.style.width = gridWidth;

const changeSizeButton = document.querySelector('.change-size');
changeSizeButton.addEventListener('click', function() {
    let cellsInRow = prompt('How many pixels (squares) you want in every row? (max:100)');
    if(cellsInRow > 100) alert('Please enter maximum 100!');
    else createGrid(cellsInRow);
})

const clearButton = document.querySelector('.clear-grid');
clearButton.addEventListener('click', function() {
    let confirmClear = confirm('Are you sure you want to clear the grid?');
    if(confirmClear) {
        clearCells();
    }
})


createGrid(defaultCellsInRow);

function createGrid(cellsInRow) {
    // empty grid
    grid.innerHTML = "";
    // one cell width
    let cellWidth = gridWidth/cellsInRow;

    // Create grid cells
    for(let i = 1; i <= (cellsInRow*cellsInRow); i++) {
        let cell = document.createElement('div');
        cell.classList.add('cell', `cell-${i}`);
        cell.style.width = cell.style.height = `${cellWidth}px`;
        cell.addEventListener('mouseenter', function() {
            cellVisited(this, 'green');
            cell.classList.add('cell-visited');
        })
        grid.appendChild(cell);
    }
}

function cellVisited(cell, color) {
    cell.style.backgroundColor = color;
    cell.style.borderColor = color;
    let op = parseFloat(cell.style.opacity);
    
    if(!op) cell.style.opacity = 0.1;
    else if(op >= 1) return;
    cell.style.opacity = op + 0.1;
}

function clearCell(cell) {
    cell.style.backgroundColor = '';
    cell.style.borderColor = '';
    cell.style.opacity = '';
}

function clearCells() {
    let cells = document.querySelectorAll('.cell-visited');
    cells.forEach(function(cell) {
        cell.classList.remove('cell-visited');
        clearCell(cell);
    })
}