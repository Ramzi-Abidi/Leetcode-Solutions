var maxScore = function(arr, k) {
    let j = k-1,
        end = arr.length - 1,
        s = 0,
        max = 0 ;

    for (let i = 0; i < k; i++) {
        s += arr[i];
    }

    max = Math.max(max, s);

    for (let i = 0; i < k; i++) {
        s -= arr[j];
        j--;
        s += arr[end];
        end--;
        max = Math.max(max, s);
    }

    return max;
};