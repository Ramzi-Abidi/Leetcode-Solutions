var uniquePaths = function (m, n) {
    const gridTravelerDP = (n, m, memo) => {
        if (`${n},${m}` in memo) {
            return memo[`${n},${m}`];
        }
        if (n === 1 && m === 1) {
            return 1;
        }
        if (n === 0 || m === 0) {
            return 0;
        }
        let down = gridTravelerDP(n - 1, m, memo);
        let right = gridTravelerDP(n, m - 1, memo);
        memo[`${n},${m}`] = down + right;

        return down + right;
    };

    return gridTravelerDP(m, n, {});
};