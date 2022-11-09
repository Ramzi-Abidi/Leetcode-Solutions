var twoSum = function(arr, target) {
        let i = 0,
        j = arr.length-1;

    while (i !== j) {
        if (arr[i] + arr[j] === target) {
            return [i+1, j+1];
        }
        if (arr[i] + arr[j] > target) {
            j--;
        } else {
            i++;
        }
    }
    return [-1,-1];
};