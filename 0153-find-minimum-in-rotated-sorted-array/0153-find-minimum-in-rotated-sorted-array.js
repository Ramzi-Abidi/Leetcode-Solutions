var findMin = function(arr) {
        let start = 0,
        end = arr.length - 1,
        mid ;
    
    if (arr[0] < arr[arr.length - 1]) {     // if the array is sorted we return the first element
        return arr[0];
    }
    
    if(arr.length === 1) {
        return arr[0];
    }
    
    while (start < end) {
        mid = start + Math.floor((end - start) / 2);

        if (arr[mid] < arr[end]) {
            end = mid ;
        } else {    // arr[mid] > arr[mid]
            start = mid + 1;
        }
    }
    return arr[start];
};