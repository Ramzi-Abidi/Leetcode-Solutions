var pivotIndex = function(arr) {
    // calculating the prefix sum of arr :
    
    let pref = [];
    let s = 0;
    arr.forEach((el) => {
        s += el;
        pref.push(s);
    });

    for (let i = 0; i < pref.length; i++) {
        let left_sum, right_sum;

        if (i === 0) {
            left_sum = 0;
            right_sum = pref[arr.length - 1] - pref[i];
        }

        if (i !== 0) {
            left_sum = pref[i - 1];
            right_sum = pref[arr.length - 1] - pref[i];
        }

        if (left_sum === right_sum) {
            return i;
        }
    }

    return -1;
};