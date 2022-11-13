function combinationsNoDuplication(nums, prefix, arr, hash) {
    if (nums.length === 0) {
        prefix.sort() ;
        if (!hash[prefix]) {
            arr.push(prefix);
            hash[prefix] = true;
        }
        return;
    }
    else {
        combinationsNoDuplication(nums.slice(1), [...prefix, nums[0]], arr, hash);
        combinationsNoDuplication(nums.slice(1), prefix, arr, hash);
    }
}

var subsetsWithDup = function(nums) {
    let res = [];
    combinationsNoDuplication(nums,[],res,{});
    return res ;
};