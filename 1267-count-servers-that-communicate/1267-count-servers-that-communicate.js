const countServers = (grid) => {
    const hasNeighbors = (x, y) => {

        // Y axis
        for (let i = 0; i < grid.length; i++) {
            if (grid[i][y
            ] && x !== i) {
                return 1;
            }
        }

        // Check X Axis
        for (let j = 0; j < grid[0].length; j++) {
            if (grid[x][j] && y !== j) {
                return 1;
            }
        }

        return 0;
    };

    let res = 0;
    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[0].length; j++) {
            if (grid[i][j] === 1) {
                res += hasNeighbors(i, j);
            }
        }
    }
    return res;
};
