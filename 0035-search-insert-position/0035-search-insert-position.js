function binarySearch(arr, target) {
    let start = 0,
        end = arr.length - 1;

    while (start <= end) {
        let mid = start + Math.floor((end - start) / 2)     //start+end/2 can exceed Math.pow(2,31) 

        if(start === end) {
            if(target > arr[mid]) {
                return mid+1;
            }
            else {
                if(target < arr[mid]) {
                    return mid ;
                }
            }

        }

        if (target === arr[mid])
            return mid;
        else
            if (target > arr[mid])
                start = mid + 1;
            else
                if (target < arr[mid])                            //target<arr[mid]
                    end = mid;
    }
}

var searchInsert = function(arr, target) {
    if(target > arr[arr.length-1]) {
        return arr.length ;
    }
    else if(target === arr[arr.length-1]) {
        return arr.length - 1 ;
    }
    else if(target <= arr[0]) {
        return 0;
    }
    else {
        return binarySearch(arr, target) ;
    }
};