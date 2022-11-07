var numOfSubarrays = function(arr, k, threshold) {
    let s = 0;
    let nb = 0;

    for (let i = 0; i < arr.length; i++) {
        s += arr[i];
        if (i >= k - 1) {
            if (Math.floor(s / k) >= threshold) {
                nb++;
            }
            s -= arr[i - (k - 1)];
        }
    }
    return nb;
};