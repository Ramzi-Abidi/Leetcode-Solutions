function twoSum(arr, target) {
    let i = 0,
        j = arr.length - 1,
        res = [];

    while (i < j) {
        if (arr[i] + arr[j] > target) {
            j--;
        } else if (arr[i] + arr[j] < target) {
            i++;
        } else {
            res.push([arr[i], arr[j]]);
            i++;
            j--;
        }
    }
    return res;
}

let threeSum = function (arr) {
    arr.sort((a, b) => a - b);

    let res = [];
    let hash = {};

    for (var i = 0; i < arr.length; i++) {
        let fixedTarget = 0 - arr[i];

        let arr1 = twoSum(arr.slice(i + 1), fixedTarget);

            for (let j = 0; j < arr1.length; j++) {
                if (arr1[j][0] + arr1[j][1] + arr[i] === 0) {
                    if (hash[[arr1[j][0], arr1[j][1], arr[i]]] === undefined) {
                        hash[[arr1[j][0], arr1[j][1], arr[i]]] = 1;
                        res.push([arr1[j][0], arr1[j][1], arr[i]]);
                    }
                }
        }
    }
    return res;
};