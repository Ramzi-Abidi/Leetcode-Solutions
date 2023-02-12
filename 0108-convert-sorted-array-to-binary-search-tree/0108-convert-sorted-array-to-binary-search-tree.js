var sortedArrayToBST = function(arr) {
    if(arr===null) {
        return null ;
    }
     if (arr.length === 0) {
        return null;
    }
    
    let mid = Math.floor(arr.length / 2);      // got the root
    
    let root = new TreeNode(arr[mid]);     // arr[mid] is the roor why ? because the root is in the middle of the array
    
    root.left = sortedArrayToBST(arr.slice(0, mid));
    
    root.right = sortedArrayToBST(arr.slice(mid + 1, arr.length));
    
    return root;
};