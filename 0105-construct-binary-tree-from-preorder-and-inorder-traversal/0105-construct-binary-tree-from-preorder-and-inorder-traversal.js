
var buildTree = function(preorder, inorder) {
    let hash = {}
    let index = 0 ;
    
    for(let i=0; i<inorder.length; i++) {
        if(!hash[inorder[i]]) {
            hash[inorder[i]] = i ;
        }
    }
    
    console.log(hash) ;
    
    let root = new TreeNode() ;
    root = dfs(0,preorder.length-1)       //or inorder.length they have the same length     
    
    return root ;
    
    function dfs(i, n) {        // n : length of preorder
        if(i > n) {
            return null;
        }

        // the root val
        let curval = preorder[index] ;        // kol mara bch yhedhe e root
        index++ ;
        
        // creating of the root node
        let cur = new TreeNode(curval) ;
        
        //creating the left subtree of the root
        cur.left = dfs(i, hash[curval]-1);  //hash[curval] gives index of root inorder arr
        
        //creating the right subtree of the root
        cur.right = dfs(hash[curval]+1, n);

    return cur ;

    }


};