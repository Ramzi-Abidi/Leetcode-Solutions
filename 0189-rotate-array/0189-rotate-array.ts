var rotate = function(arr, k) {    
    
    while(k--) {
        let el = arr.pop();
        arr.unshift(el);
    }
};