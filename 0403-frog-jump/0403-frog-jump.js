var canCross = function (stones) {
    const canJump = (index, k, memo) => {
        // memoization
        if (`${index},${k}` in memo) {
            return memo[`${index},${k}`];
        }
        // can t reach last stone => false
        if (index >= stones.length) {
            return false;
        }
        // on last stones => true
        if (index === stones.length - 1) {
            return true;
        }
        for (let i = index + 1; i < stones.length; i++) {
            if (stones[index] + k + 1 === stones[i]) {
                if (canJump(i, k + 1, memo)) {
                    memo[`${index},${k + 1}`] = true;
                    return memo[`${index},${k + 1}`];
                }
            }
            if (stones[index] + k - 1 === stones[i]) {
                if (canJump(i, k - 1, memo)) {
                    memo[`${index},${k - 1}`] = true;
                    return memo[`${index},${k - 1}`];
                }
            }
            if (stones[index] + k === stones[i]) {
                if (canJump(i, k, memo)) {
                    memo[`${index},${k}`] = true;
                    return memo[`${index},${k}`];
                }
            }
        }
        memo[`${index},${k}`] = false;
        return memo[`${index},${k}`];
    };
    if (stones[1] > 1) {
        return false;
    }
    return canJump(1, 1, {}); // index,k
};
