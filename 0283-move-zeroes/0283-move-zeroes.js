var moveZeroes = function(arr) {
    let count = 0;
    let i=0 ;

    while (i < arr.length) {
        if (arr[i] === 0) {
            arr.splice(i, 1);
            count++;
        }
        else {
            i++ ;
        }
    }
    for (let i = 0; i < count; i++) {
        arr.push(0);
    }
};