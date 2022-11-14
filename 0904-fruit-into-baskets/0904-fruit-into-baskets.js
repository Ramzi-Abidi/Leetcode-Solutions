var totalFruit = function (arr) {
    let max = 0;
    let hash = {};
    let j = 0;
    let objLength = 0;

    for (let i = 0; i < arr.length; i++) {
        if (!hash[arr[i]]) {
            hash[arr[i]] = 1;
            objLength++ ;
        } else {
            hash[arr[i]]++;
        }

        while (objLength > 2) {
            hash[arr[j]]--;
            if (hash[arr[j]] === 0) {
                delete hash[arr[j]];
                objLength-- ;
            }
            j++;
        }
        if (objLength <= 2) {
            max = Math.max(max, i - j + 1);
        }
    }
    return max;
}