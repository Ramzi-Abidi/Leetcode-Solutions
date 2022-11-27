function permutations(ch, arr, arr1) {
    if (ch.length === 0) {
        arr1.push(arr);
        return;
    }

    let c = ch[0];
    for (let i = 0; i <arr.length+1; i++) {
        let f = arr.slice(0, i);
        let s = arr.slice(i);
        permutations(ch.slice(1), [...f, c, ...s], arr1);
    }
}


var permute = function(nums) {
    let arr1 = [];
    permutations(nums, [], arr1);
    
    return arr1 ;
};