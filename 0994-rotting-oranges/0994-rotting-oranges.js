const bfs = (timestamp, grid, ROWS, COLS) => {
    let directions = [[-1, 0], [0, 1], [1, 0], [0, -1]];
    // flag to indicate if the rotting process should be continued
    let toBeContinued = false;
    for (let row = 0; row < ROWS; ++row) {
        for (let col = 0; col < COLS; ++col) {
            if (grid[row][col] == timestamp) {
                // current contaminated cell
                for (let d of directions) {
                    let nRow = row + d[0]
                    let nCol = col + d[1];
                    if (nRow >= 0 && nRow < ROWS && nCol >= 0 && nCol < COLS) {
                        if (grid[nRow][nCol] == 1) {
                            // this fresh orange would be contaminated next
                            grid[nRow][nCol] = timestamp + 1;
                            toBeContinued = true;
                        }
                    }
                }
            }
        }
    }
    return toBeContinued;
}

var orangesRotting = function(grid) {
        let ROWS = grid.length;
        let COLS = grid[0].length;
        let timestamp = 2;
        while (bfs(timestamp, grid, ROWS, COLS)) {
            timestamp++;            
        }

        // end of process, to check if there are still fresh oranges left
        for (let row of grid) {
            for (let cell of row) {
                // still got a fresh orange left
                if (cell == 1) {
                    return -1;                   
                }
            }            
        }

        // return elapsed minutes if no fresh orange left
        return timestamp - 2;
};