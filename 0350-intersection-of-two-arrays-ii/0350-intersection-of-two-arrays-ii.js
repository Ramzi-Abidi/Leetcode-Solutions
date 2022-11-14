function binarySearch(arr, target) {
    //console.log(arr, target);
    let start = 0,
        end = arr.length - 1;

    while (start <= end) {
        let mid = start + Math.floor((end - start) / 2); //start+end/2 can exceed Math.pow(2,31)
        if (target === arr[mid]) {
            arr.splice(mid, 1);
            return true;
        } else if (target > arr[mid]) start = mid + 1;
        else end = mid - 1;
    }
    return false;
}

function isSubset(arr1, arr) {
    // is arr1 a subset of arr

    let res = [];
    //arr = [...new Set(arr)];

    for (let i = 0; i < arr1.length; i++) {     // O(n log n)
        if (binarySearch(arr, arr1[i])) {
            res.push(arr1[i]);
        }
    }
    return res;
}

var intersect = function (nums1, nums2) {
    // check if arr is subset of arr1
    if (nums2.length < nums1.length) {
        nums1.sort((a, b) => {
            return a - b;
        });
        return isSubset(nums2, nums1);
    } else {
        nums2.sort((a, b) => {
            return a - b;
        });
        return isSubset(nums1, nums2);
    }
};
