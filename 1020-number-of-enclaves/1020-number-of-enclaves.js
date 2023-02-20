var numEnclaves = function (grid) {
    const dfs = (i, j, visited) => {
        //out of the grid
        if (i < 0 || i >= grid.length || j >= grid[0].length || j < 0) {
            return;
        }

        if (grid[i][j] === 0) {
            return;
        }

        //already visited cell
        if (visited[i][j] === true) {
            return;
        }

        // visited cell
        visited[i][j] = true;

        // top
        dfs(i - 1, j, visited);
        //right
        dfs(i, j + 1, visited);
        //left
        dfs(i, j - 1, visited);
        // bottom
        dfs(i + 1, j, visited);
    };

    // visited matrix
    const visited = [];
    let count = 0;

    // filling visited arr
    for (let i = 0; i < grid.length; i++) {
        let arr = [];
        for (let j = 0; j < grid[0].length; j++) {
            arr.push(false);
        }
        visited.push(arr);
    }

    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[0].length; j++) {
            if (
                i === 0 ||
                j === 0 ||
                i === grid.length - 1 ||
                j === grid[0].length-1
            ) {
                dfs(i, j, visited);
            }
        }
    }

    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[0].length; j++) {
            if (!visited[i][j] && grid[i][j] === 1) {
                count++;
            }
        }
    }
    return count;
};