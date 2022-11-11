var specialArray = function(nums) {
    const N = nums.length; let l = 0, r = N-1; 
    
    nums.sort((a,b) => a - b);
    
    while(l < r - 1){
        let mid = l + ((r - l) >> 1);
        let x = N - mid;
        
        if(nums[mid] >= x && x > nums[mid-1]) return x;
        
        nums[mid] < x ? l = mid : r = mid;
    }
    
    let x = N - l;
	return nums[l] >= x ?  x : -1;
};