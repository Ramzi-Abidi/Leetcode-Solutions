var numSubarrayProductLessThanK = function (arr, k) {
    let count = 0;
    let s = 1;
    let j = 0;

    if (k <= 1)
        return 0;

    for (let i = 0; i < arr.length; i++) {
        s *= arr[i];

        while (s >= k) {
            s /= arr[j];
            j++;
        }
        count += i - j + 1;
    }
    return count;
};