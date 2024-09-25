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
        let cells = document.querySelectorAll('.cell-visited');
        
        cells.forEach(function(cell) {
            cell.classList.remove('cell-visited');
        })
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
            this.classList.add('cell-visited');
        })
        grid.appendChild(cell);
    }
}