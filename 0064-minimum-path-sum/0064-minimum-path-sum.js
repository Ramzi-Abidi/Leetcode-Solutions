const minPathSum = (grid) => {
    const traverse = (i, j, memo) => {
        if (`${i},${j}` in memo) {
            return memo[`${i},${j}`];
        }
        if (i >= n || j >= m) {
            return Infinity;
        }
        if (i == n - 1 && j == m - 1) {
            return grid[i][j];
        }
        let min = Infinity;
        let right = grid[i][j] + traverse(i, j + 1, memo);
        let down = grid[i][j] + traverse(i + 1, j, memo);
        min = Math.min(down, right);
        memo[`${i},${j}`] = min;
        return memo[`${i},${j}`];
    }
    let n = grid.length;
    let m = grid[0].length;

    return traverse(0, 0, {});
};