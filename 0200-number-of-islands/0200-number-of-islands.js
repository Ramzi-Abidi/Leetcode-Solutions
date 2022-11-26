var numIslands = function (grid) {
    let visited = {};
    let count = 0;


    // "dfs" on a matrix :
    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[0].length; j++) {
            if (dfs(i, j, visited, grid)) {
                count++;
            }
        }
    }
    return count;
};

const dfs = (i, j, visited, grid) => {
    // out of the grid !
    if (i < 0 || i >= grid.length || j >= grid[0].length || j < 0) {
        return false;
    }

    if (grid[i][j] === "0") {
        return false;
    }

    if (visited[[i, j]] !== undefined) {
        return false;
    }

    // market the position as visited
    visited[[i, j]] = true;

    if (grid[i][j] === "0") {
        return false;
    }

    // all recursive calls
    //right
    dfs(i, j + 1, visited, grid);
    //top
    dfs(i - 1, j, visited, grid);
    //bottom
    dfs(i + 1, j, visited, grid);
    //left
    dfs(i, j - 1, visited, grid);

    return true;
};
// this pattern is for grid graph problems (we used dfs) 