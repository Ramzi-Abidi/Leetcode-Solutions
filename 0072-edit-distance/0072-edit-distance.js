// string matching pattern

var minDistance = function (s1, s2) {
    const f = (i, j, memo) => {
        if (j < 0) {
            return i + 1;
        }

        if (j >= 0 && i < 0) {
            return j + 1;
        }

        if (`${i},${j}` in memo) {
            return memo[`${i},${j}`];
        }

        if (s1[i] === s2[j]) {
            memo[`${i},${j}`] = 0 + f(i - 1, j - 1, memo);
            return memo[`${i},${j}`];
        }

        let min =
            1 +
            Math.min(
                f(i, j - 1, memo),
                Math.min(f(i - 1, j, memo), f(i - 1, j - 1, memo)),
            );

        memo[`${i},${j}`] = min;
        return memo[`${i},${j}`];
    };

    let n = s1.length;
    let m = s2.length;

    return f(n - 1, m - 1, {});
};
