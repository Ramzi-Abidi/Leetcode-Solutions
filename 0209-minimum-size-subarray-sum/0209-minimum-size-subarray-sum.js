function minSubArrayLen(target,arr) {
    let s = 0;
    let min = Infinity;
    let j = 0;

    for (let i = 0; i < arr.length; i++) {
        s += arr[i];
        while (s >= target) {
            min = Math.min(min, i - j + 1);
            s -= arr[j];
            j++;
        }
    }
    return min !== Infinity ? min : 0;
};