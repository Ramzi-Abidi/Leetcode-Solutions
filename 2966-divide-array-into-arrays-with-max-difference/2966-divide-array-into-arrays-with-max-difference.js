var divideArray = function (arr, k) {
    const res = [];
    let i = 0;
    let noSol = false;

    arr.sort((a, b) => a - b);

    while (i < arr.length) {
        let temp = [];
        for (let j = i; j < i + 3; j++) {
            if (Math.abs(arr[j] - arr[i]) <= k) {
                temp.push(arr[j]);
            }
            else {
                noSol = true;
            }
        }
        res.push(temp);

        i += 3;
    }

    return noSol === true ? [] : res;
};