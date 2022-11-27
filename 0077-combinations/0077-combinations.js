function subSeq(arr, prefix, res,k) {
    if (arr.length === 0) {
        if(prefix.length===k) {
            res.push(prefix);
            return;
        }
    }
    
    else {
        subSeq(arr.slice(1), prefix, res,k);
        subSeq(arr.slice(1), [...prefix, arr[0]], res,k);
    }
}

var combine = function(n, k) {
    let res = [];
    let arr = [];

    for (let i = 1; i <= n; i++) {
        arr.push(i) ;
    }
    
    subSeq(arr, [], res,k);

    return res;
};