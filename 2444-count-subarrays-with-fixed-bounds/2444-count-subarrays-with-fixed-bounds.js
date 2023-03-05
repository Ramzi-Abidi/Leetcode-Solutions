var countSubarrays = function (arr, minK, maxK) {
    let sum = 0;
    let badPosition = -1,
        minStart = 0,
        maxStart = 0;
    let minf = false,
        maxf = false;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < minK || arr[i] > maxK) {
            minf = false;
            maxf = false;
            badPosition = i;
        }

        if (arr[i] === minK) {
            minf = true;
            minStart = i;
        }

        if (arr[i] === maxK) {
            maxf = true;
            maxStart = i;
        }

        if (minf && maxf) {
            sum += Math.max(Math.min(minStart, maxStart) - badPosition);
        }
    }

    return sum;
};