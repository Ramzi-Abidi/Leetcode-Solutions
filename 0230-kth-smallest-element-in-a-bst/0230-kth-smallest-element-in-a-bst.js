function helper(root,arr) {
    if (root === null)
        return;
    else {
        helper(root.left,arr);
        arr.push(root.val) ;
        helper(root.right,arr);
    }
}


var kthSmallest = function(root, k) {
    let arr = [];
    helper(root,arr);
    return arr[k-1] ;
};