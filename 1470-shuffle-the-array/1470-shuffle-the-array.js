const shuffle = function(arr, n) {
    const res = [];
    const size = n;
    
    for(let i=0; i<arr.length-size; i++) {
        
        res.push(arr[i]);         
        res.push(arr[n]);
        n++;
    }
    
    return res ;
};