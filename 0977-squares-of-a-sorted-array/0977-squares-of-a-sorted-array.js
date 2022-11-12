var sortedSquares = function(arr) {
    for(let i=0; i<arr.length; i++){
        arr[i] = arr[i]*arr[i];
    }
    
    arr.sort((a,b)=>{       // O(n log n)
        return a-b ;
    });
    
    //console.log(arr);
    
    return arr ;
};