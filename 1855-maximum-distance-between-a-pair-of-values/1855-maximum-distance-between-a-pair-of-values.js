var maxDistance = function(nums1, nums2) {
    let i = 0, j = 0;
    
    let ans = 0;
    while (i < nums1.length && j < nums2.length) {
        j = Math.max(j, i);
        
        while (nums1[i] <= nums2[j]) {
            ans = Math.max(ans, j - i);
            j++;
        }
        i++;
    }
    
    return ans;
};