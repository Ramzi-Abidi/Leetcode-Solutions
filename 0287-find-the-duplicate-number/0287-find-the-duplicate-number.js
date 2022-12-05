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
        if (arr[i] !== arr[arr[i] - 1]) {
            swap(arr, i, arr[i] - 1);
        } else {
            i++;
        }
    }
}

var findDuplicate = function(arr) {
    cyclicSort(arr) ;

    for (let i = 0; i < arr.length; i++) {
        if(arr[i] !== i + 1) {
           // console.log(arr[i])
            return arr[i] ;
        }
    }
};