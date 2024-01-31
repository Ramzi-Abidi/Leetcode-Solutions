var findPaths = function (m, n, maxMove, startRow, startColumn) {
    // dp + grid graph problem
    const MOD = 10 ** 9 + 7;

    const dfs = (max, i, j, memo) => {
        if (`${i},${j},${max}` in memo) {
            return memo[`${i},${j},${max}`];
        }
        if (i < 0 || i >= m || j < 0 || j >= n) {
            return 1;
        }
        if (max === 0) {
            return 0;
        }

        let bottom = dfs(max - 1, i + 1, j, memo) % MOD;
        let right = dfs(max - 1, i, j + 1, memo) % MOD;
        let top = dfs(max - 1, i - 1, j, memo) % MOD;
        let left = dfs(max - 1, i, j - 1, memo) % MOD;

        memo[`${i},${j},${max}`] = (bottom + top + right + left) % MOD;

        return memo[`${i},${j},${max}`];
    }

    const result = dfs(maxMove, startRow, startColumn, {});

    return result;
};
