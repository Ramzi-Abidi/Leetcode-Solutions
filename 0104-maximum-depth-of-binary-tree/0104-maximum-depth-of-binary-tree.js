var maxDepth = function(root) {
    if (root === null) {
        return 0;
    }
    
    let left = 1 + maxDepth(root.left); 
    let right = 1 + maxDepth(root.right); 
    let max = Math.max(left, right);     
    
    return max ;
};