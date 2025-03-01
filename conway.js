const gridContainer = document.getElementById('grid-container');

let simulationIntervalId = null;
let resetIntervalId = null;

const rows = 50;
const cols = 50;
let grid = createGrid(rows, cols);
let intervalId = null;

function createGrid(rows, cols) {
    const grid = new Array(rows);
    for (let i = 0; i < rows; i++) {
        grid[i] = new Array(cols).fill(0);
    }
    return grid;
}

function renderGrid(grid) {
    gridContainer.innerHTML = '';
    gridContainer.style.gridTemplateColumns = `repeat(${cols}, 0.4vh)`;
    gridContainer.style.gridTemplateRows = `repeat(${rows}, 0.4vh)`;

    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            const cell = document.createElement('div');
            cell.classList.add('cell');
            if (grid[i][j] === 1) {
                cell.classList.add('alive');
            }
            cell.addEventListener('click', () => toggleCell(i, j));
            gridContainer.appendChild(cell);
        }
    }
}

function toggleCell(i, j) {
    grid[i][j] = grid[i][j] === 1 ? 0 : 1;
    renderGrid(grid);
}

function getNextGeneration(grid) {
    const newGrid = createGrid(rows, cols);

    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            const neighbors = countNeighbors(grid, i, j);
            if (grid[i][j] === 1) {
                newGrid[i][j] = (neighbors === 2 || neighbors === 3) ? 1 : 0;
            } else {
                newGrid[i][j] = (neighbors === 3) ? 1 : 0;
            }
        }
    }

    return newGrid;
}

function countNeighbors(grid, x, y) {
    let count = 0;
    for (let i = -1; i <= 1; i++) {
        for (let j = -1; j <= 1; j++) {
            if (i === 0 && j === 0) continue;
            const newX = x + i;
            const newY = y + j;
            if (newX >= 0 && newX < rows && newY >= 0 && newY < cols) {
                count += grid[newX][newY];
            }
        }
    }
    return count;
}

function randomizeGrid(grid) {
    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            grid[i][j] = Math.random() > 0.7 ? 1 : 0; // Adjust 0.7 for more/less alive cells
        }
    }
}

function startGame() {
    // Clear previous intervals if they exist
    if (simulationIntervalId) clearInterval(simulationIntervalId);
    if (resetIntervalId) clearInterval(resetIntervalId);

    // Randomize grid and render initial state
    randomizeGrid(grid);
    renderGrid(grid);

    // Start simulation: update the game every 100ms
    simulationIntervalId = setInterval(() => {
        grid = getNextGeneration(grid);
        renderGrid(grid);
    }, 100);

    // Set up an interval to randomize the grid every 60 seconds
    resetIntervalId = setInterval(() => {
        randomizeGrid(grid);
        renderGrid(grid);
    }, 30000);
}

function resetGame() {
    clearInterval(intervalId);
    intervalId = null;
    grid = createGrid(rows, cols);
    renderGrid(grid);
}

renderGrid(grid);
startGame();
