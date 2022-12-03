var containsDuplicate = function(arr) {
    let hash = {} ;
    
    for(let i=0; i<arr.length; i++) {
        if(hash[arr[i]] === undefined) {
            hash[arr[i]] = 1 ;
        }
        else {
            hash[arr[i]]++ ;
        }
    }
    
    for(const key in hash) {
        if(hash[key]>1) {
            return true ;
        }
    }
    return false ;
};