var subarraysWithKDistinct = function (arr, k) {
    if (arr == null || arr.length == 0 || k == 0 || arr.length < k) {
        return 0;
    }
    //let hash = Array(arr.length + 1).fill(0);
    let hash = {};

    let j = 0, nb = 0, res = 0;

    for (let i = 0; i < arr.length; i++) {
        if(hash[arr[i]]) {
            hash[arr[i]]++;
        }
        if(hash[arr[i]] === undefined) {
            hash[arr[i]] = 1;
            k--;
        }

        if (k < 0) {
            hash[arr[j]]--;
            if(hash[arr[j]] === 0) delete hash[arr[j]];
            j++;
            k++;
            nb = 0;
        }
        if (k === 0) {
        while (hash[arr[j]] > 1) {
            hash[arr[j]]--;
            if(hash[arr[j]] === 0) delete hash[arr[j]];
            j++;
            nb++;
        }
            res += nb + 1;
        }
    }
    return res;
}