const swap = (arr, i, j) => {
    [arr[i], arr[j]] = [arr[j], arr[i]];
};

var moveZeroes = function (arr) {
    let i = 0;
    let j = 1;

    while (j < arr.length) {
        if (arr[i] === 0 && arr[j] !== 0) {
            swap(arr, i, j);
        } else if (arr[i] !== 0 && arr[j] !== 0) {
            i++;
            j++;
        } else if (arr[i] !== 0 && arr[j] === 0) {
            i++;
            j++;
        } else if (arr[i] === 0 && arr[j] === 0) {
            j++;
        }
    }
};