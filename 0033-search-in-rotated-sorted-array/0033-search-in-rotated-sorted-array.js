function binarySearch(arr, target, start1, indexOfPivot) {
    let start = start1,
        end = indexOfPivot;

    while (start <= end) {
        let mid = start + Math.floor((end - start) / 2); //start+end/2 can exceed Math.pow(2,31)

        if (target === arr[mid]) return mid;
        else if (target > arr[mid]) start = mid + 1;
        else if (target < arr[mid])
            //target<arr[mid]
            end = mid - 1;
    }
    return -1;
}

function pivot(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > arr[i + 1]) return i;
    }
    return null;
}

function pivot1(arr) {
    let start = 0;
    let end = arr.length - 1;

    while (start <= end) {
        let mid = start + Math.floor((end - start) / 2); //start+end/2 can exceed Math.pow(2,31)

        if (mid < end && arr[mid] > arr[mid + 1]) {
            return mid;
        } else if (mid > start && arr[mid] < arr[mid - 1]) {
            return mid - 1;
        } else if (arr[mid] <= arr[start]) {
            end = mid - 1;
        } else {
            start = mid + 1;
        }
    }

    return false;
}

var search = function (arr, target) {
    if (arr[0] === target) return 0;
    if (arr[arr.length - 1] === target) return arr.length - 1;

    if (arr.length === 1 || arr.length === 2) {
        if (arr[0] === target) return 0;
        if (arr[1] === target) return 1;
    }

    let indexOfPivot = pivot1(arr);

    if (indexOfPivot === null) {
        return binarySearch(arr, target, 0, arr.length - 1);
    }

    if (target > arr[0] && target <= arr[indexOfPivot]) {
        return binarySearch(arr, target, 0, indexOfPivot);
    } else {
        return binarySearch(arr, target, indexOfPivot + 1, arr.length - 1);
    }
};
