var search = function(arr, target) {
    let start = 0 ;
    let end = arr.length-1 ;
    
    while(start <= end) {
        let mid = start + Math.floor((end - start) / 2)     //start+end/2 can exceed Math.pow(2,31) 

        if(arr[mid] === target) {
            return mid ;
        }
        else if(arr[mid] > target) {
            end = mid-1 ;
        }
        else if(arr[mid] < target){
            start = mid+1 ;
        }
    }
    
    return -1 ;
};