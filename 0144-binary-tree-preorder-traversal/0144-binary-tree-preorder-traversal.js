function helper(root,arr) {
    if (root === null)
        return;
    else {
        arr.push(root.val) ;
        helper(root.left,arr);
        helper(root.right,arr);
    }
}


var preorderTraversal = function(root) {
    let arr = [] ;
    helper(root,arr) ;
    return arr ;
};