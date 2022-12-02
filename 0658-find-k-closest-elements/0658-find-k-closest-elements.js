var findClosestElements = function (arr, k, x) {
    arr.sort((a, b) => {
        return Math.abs(a - x) - Math.abs(b - x);
    });

    const res = arr.slice(0, k).sort((a, b) => {
        return a - b;
    });

    return res;
};