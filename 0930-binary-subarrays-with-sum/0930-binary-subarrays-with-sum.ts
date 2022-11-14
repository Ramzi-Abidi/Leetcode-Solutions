function numSubarraysWithSum(arr, k) {
    let count = 0;
    let s = 0;
    let hash = {};

    for (let i = 0; i < arr.length; i++) {
        s += arr[i];

        if (s === k) {
            count++;
        }
        if (hash[s - k]) {
            count += hash[s - k];
        }
        if (!hash[s]) {
            hash[s] = 1;
        } else {
            hash[s]++;
        }
    }
    return count;
}