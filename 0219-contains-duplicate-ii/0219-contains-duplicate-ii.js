var containsNearbyDuplicate = function (arr, k) {
    let hash = {};

    for (let i = 0; i < arr.length; i++) {
        if (hash[arr[i]] === undefined) {
            hash[arr[i]] = i;
        }
        else if(Math.abs(hash[arr[i]]- i) <= k) {
                return true ;
            }
        else {
            hash[arr[i]] = i ;    
        }
    }
    return false;
};
