function swap(T, i, j) {
    let aux;
    aux = T[i];
    T[i] = T[j];
    T[j] = aux;
}

function cyclicSort(arr) {
    // O(n)
    let i = 0;

    while (i < arr.length) {
        if (arr[i] < arr.length && arr[i] !== arr[arr[i]]) {
            // because the range is [0,n]
            swap(arr, i, arr[i]);
        } else {
            i++;
        }
    }
}

var missingNumber = function (arr) {
    cyclicSort(arr);

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] !== i) {
            return i;
        }
    }
    return arr.length;
};