var hasPathSum = function(root, targetSum) {
    const dfs=(root, targetSum)=>{
        if(!root) {
            return;
        }
        if(!root.left && !root.right) {
            if(targetSum-root.val === 0) return true ;
        }
        let left = dfs(root.left, targetSum-root.val);
        let right = dfs(root.right, targetSum-root.val);
        
        if(left || right) {
            return true ;
        }else {
            return false;            
        }
    }
    if(!root) {
        return false ;
    }
    return dfs(root, targetSum);
};