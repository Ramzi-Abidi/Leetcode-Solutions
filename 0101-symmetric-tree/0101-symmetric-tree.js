var isSymmetric = function (root) {
    function dfs1(node1, node2) {
        if (!node1 && !node2) {
            return true;
        }
        if ((!node1 && node2) || (!node2 && node1)){
            return false;
        }
        else if(node1.val !== node2.val) {
            return false ;
        }
        else {
            return dfs1(node1.left, node2.right) && dfs1(node1.right, node2.left);
        }
    }

    if (!root) {
        return true;
    } else {
        return dfs1(root.left, root.right);
    }
};