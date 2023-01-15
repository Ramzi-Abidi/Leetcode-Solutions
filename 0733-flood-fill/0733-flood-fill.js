const dfs = (grid, i, j, color, visited, startingPoint) => {
    //out of the grid
    if (i >= grid.length || j >= grid[0].length || i < 0 || j < 0) {
        return;
    }

    // visited
    if (visited[[i, j] !== undefined]) {
        return;
    }

    visited[[i, j]] = true;

    if (grid[i][j] !== startingPoint) {
        return;
    }

    if(grid[i][j] === color) {
        return ; 
    }

    // unvisitd
    grid[i][j] = color;

    // top
    dfs(grid, i - 1, j, color, visited, startingPoint);
    //right
    dfs(grid, i, j + 1, color, visited, startingPoint);
    //left
    dfs(grid, i, j - 1, color, visited, startingPoint);
    // bottom
    dfs(grid, i + 1, j, color, visited, startingPoint);
};

const floodFill = function (grid, sr, sc, color) {
    let visited = {};
    let startingPoint = grid[sr][sc];

    dfs(grid, sr, sc, color, visited, startingPoint);
    return grid;
};