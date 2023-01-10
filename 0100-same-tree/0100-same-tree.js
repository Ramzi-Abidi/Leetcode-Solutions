function verif(arr, arr1) {
    if(arr.length !== arr1.length) {
        return false ;
    }
    for(let i=0; i<arr.length; i++) {
        if(arr[i] !== arr1[i]) {
            return false ;
        }
    }
    return true ;
}
var isSameTree = function(p, q) {
    
    const dfs = (root, arr) => {
        if(root === null) {
            arr.push(null);
            return ;
        }
        else {
            arr.push(root.val);
            dfs(root.left, arr);
            dfs(root.right, arr);
        }
    }

    let res = [] ;
    let res1 = [] ;

    dfs(p, res);
    dfs(q, res1);

    return verif(res,res1);
};