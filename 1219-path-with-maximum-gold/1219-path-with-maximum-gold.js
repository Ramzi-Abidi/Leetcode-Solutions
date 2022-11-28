var getMaximumGold = function (grid) {

    function dfs(grid, i, j, s) {
        if (i < 0 || j < 0 || i >= m || j >= n || grid[i][j] === 0) {
            return;
        }

        if (visited[i][j]) {
            return;
        }
        visited[i][j] = true;

        s += grid[i][j];

        max = Math.max(max, s);

        dfs(grid, i + 1, j, s);
        dfs(grid, i - 1, j, s);
        dfs(grid, i, j + 1, s);
        dfs(grid, i, j - 1, s);

        visited[i][j] = false;
    }

    let m = grid.length;
    let n = grid[0].length;
    let visited = new Array(m).fill(false).map((val) => new Array(n).fill(val));
    let max = 0;

    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (grid[i][j] !== 0) {
                dfs(grid, i, j, 0);
            }
        }
    }

    return max;
};