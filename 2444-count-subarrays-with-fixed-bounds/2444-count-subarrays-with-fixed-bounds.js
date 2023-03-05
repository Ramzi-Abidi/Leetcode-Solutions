var countSubarrays = function (nums, minK, maxK) {
    let sum = 0;
    let badPosition = -1,
        minStart = 0,
        maxStart = 0;
    let minf = false,
        maxf = false;

    for (let i = 0; i < nums.length; i++) {
        let num = nums[i];
        if (num < minK || num > maxK) {
            minf = false;
            maxf = false;
            badPosition = i;
        }

        if (num === minK) {
            minf = true;
            minStart = i;
        }

        if (num === maxK) {
            maxf = true;
            maxStart = i;
        }

        if (minf && maxf) {
            sum += Math.max(Math.min(minStart, maxStart) - badPosition);
        }
    }

    return sum;
};