var pathSum = function(root, targetSum) {
    function preOrder(root, res, targetSum, arr) {
        if(!root) {
            return ;
        }
    if(!root.left && !root.right) {
        if(targetSum-root.val === 0) {
            arr.push(root.val);
            res.push(arr);
        }
    }
        preOrder(root.left, res,targetSum-root.val, [...arr, root.val]);               preOrder(root.right, res, targetSum-root.val, [...arr, root.val]);
};
    
    let res = [] ;
    preOrder(root, res, targetSum, []);

    return res;
};