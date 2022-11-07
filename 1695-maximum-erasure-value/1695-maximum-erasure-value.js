var maximumUniqueSubarray = function(arr) {
    let hash = {};
    let j = 0;
    let s = 0;
    let max = 0;

    for (let i = 0; i < arr.length; i++) {
        s += arr[i];

        if (!hash[arr[i]]) {
            hash[arr[i]] = 1;
            max = Math.max(max, s);
        } else {
            hash[arr[i]]++;
        }

        while (hash[arr[i]] > 1) {
            s -= arr[j];
            hash[arr[j]]--;

            if (hash[arr[j]] === 0) {
                delete hash[arr[j]];
            }

            j++;
        }
    }

    return max;
};