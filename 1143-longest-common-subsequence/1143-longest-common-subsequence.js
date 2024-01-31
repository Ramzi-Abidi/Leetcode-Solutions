// dp on strings
// match and notMatch

const longestCommonSubsequence = (s1, s2) => {
    const LCS = (i, j, memo) => {
        if (`${i},${j}` in memo) {
            return memo[`${i},${j}`];
        }
        if (i === s1.length || j === s2.length) {
            return 0;
        }
        if (s1[i] === s2[j]) {
            return 1 + LCS(i + 1, j + 1, memo);
        }
        let choice1 = LCS(i + 1, j, memo);
        let choice2 = LCS(i, j + 1, memo);

        memo[`${i},${j}`] = Math.max(choice1, choice2);
        return memo[`${i},${j}`];
    };

    return LCS(0, 0, {});
};
