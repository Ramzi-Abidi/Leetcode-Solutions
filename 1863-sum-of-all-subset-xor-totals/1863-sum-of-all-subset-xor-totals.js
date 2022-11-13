function sum(arr) {
    let s = arr[0];
    if (arr.length === 0)
        return 0;
    else
        if (arr.length === 1)
            return arr[0];
        else {
            for (let i = 1; i < arr.length; i++) {
                s ^= arr[i];
            }
        }
    return s;
}


var subsetXORSum = function(nums) {
    const subSeq=(nums,prefix)=>{
    if (nums.length === 0) {
        s += sum(prefix);
        return;
    }
    else {
        subSeq(nums.slice(1), prefix);
        subSeq(nums.slice(1), [...prefix, nums[0]]);
    }
}
    
    let s = 0;
    subSeq(nums, []);
    return s ;
};