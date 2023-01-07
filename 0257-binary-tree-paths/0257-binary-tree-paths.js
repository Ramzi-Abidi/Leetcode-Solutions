function preOrderTraverse(root,chres,res) {
    if (!root) {
        return;
    }
    else {
        chres+=root.val.toString()+"->";
        preOrderTraverse(root.left, chres, res);
        preOrderTraverse(root.right,chres, res);
        if(!root.left && !root.right) {
            res.push(chres.slice(0,chres.length-2));
        }
    }
}

var binaryTreePaths = function(root) {
    let res=[];
    preOrderTraverse(root,"",res);
    //console.log(res);
    return res;
};