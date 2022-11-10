function binarySearchFirstIndex(arr, target) {

    if (target > arr[arr.length - 1] || arr.length === 0)
        return -1;

    let start = 0,
        end = arr.length - 1;

    while (start <= end) {
        let mid = start + Math.floor((end - start) / 2);
        
        if (target === arr[mid]) {
            if(arr[mid-1] === target) end = mid - 1 ;
            else {
                return mid;
            }
        }
        else
            if (target > arr[mid])
                start = mid + 1;

            else {
                end = mid - 1;                
            }
    }
    return -1 ;
}
function binarySearchFirstIndex1(arr, target, ok) {
    if (target > arr[arr.length - 1] || arr.length === 0)
        return -1;

    let start = 0,
        end = arr.length - 1;

    while (start <= end) {
        let mid = start + Math.floor((end - start) / 2);
        
        if (target === arr[mid]) {
            if(arr[mid+1] === target) start = mid + 1 ;
            else {
                return mid;
            }
        }
        else
            if (target > arr[mid])
                start = mid + 1;

            else {
                end = mid - 1;                
            }
    }
    return -1 ;
}   

var searchRange = function(nums, target) {    
    let start = binarySearchFirstIndex(nums, target) ;
    let end = binarySearchFirstIndex1(nums, target) ;
    
    return [start,end]; 
    
};