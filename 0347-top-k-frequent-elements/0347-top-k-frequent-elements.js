const buildHash = (arr) => {
    let hash = {};

    for (let i = 0; i < arr.length; i++) {
        if (hash[arr[i]] === undefined) {
            hash[arr[i]] = 1;
        } else {
            hash[arr[i]]++;
        }
    }
    return hash;
};

var topKFrequent = function (arr, k) {
    let hash = buildHash(arr); //O(n)

    let arr1 = Object.entries(hash); //O(26)
    arr1.sort((a, b) => b[1] - a[1]); // O(26 log 26)

    let res = [];
    let i = 0;
    while (k > 0) {
        res.push(parseInt(arr1[i][0]));
        i++;
        k--;
    }
    return res;
};
