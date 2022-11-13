var checkIfExist = function (arr) {
    let hash = {};

    for (let i = 0; i < arr.length; i++) {
        if (!hash[arr[i]]) {
            hash[arr[i]] = i;       // el: its_index
        } else {
            hash[arr[i]]++;
        }
    }

    //console.log(hash);

    for (let i = 0; i < arr.length; i++) {
        let nb = arr[i] * 2;
        if (hash[nb] !== undefined) {
            if(hash[nb] !== i) {// this means the index of 2*arr[i] is different from the index in the arr
                return true;
            }
        }
    }
    return false;
};