const dfs = (grid, i, j, visited) => {
    //out of the grid
    if (i < 0 || i >= grid.length || j >= grid[0].length || j < 0) {
        return 1;
    }

    //not land
    if (grid[i][j] === 0) {
        return 1;
    }

    //already visited cell
    if (visited[i][j]) {
        return 0;
    }

    let count = 0;

    // visited cell
    visited[i][j] = true;

    // top
    count += dfs(grid, i - 1, j, visited);
    //right
    count += dfs(grid, i, j + 1, visited);
    //left
    count += dfs(grid, i, j - 1, visited);
    // bottom
    count += dfs(grid, i + 1, j, visited);

    return count;
};

var islandPerimeter = function (grid) {
    // visited matrix
    let visited = [];
    for (let i = 0; i < grid.length; i++) {
        let arr = [];
        for (let j = 0; j < grid[0].length; j++) {
            arr.push(false);
        }
        visited.push(arr);
    }

    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[0].length; j++) {
            // if it's a land
            if (grid[i][j] === 1) {
                return dfs(grid, i, j, visited);
            }
        }
    }
};