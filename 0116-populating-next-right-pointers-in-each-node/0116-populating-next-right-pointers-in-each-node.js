var connect = function(root) {
    let ptr = root;
    while(root && root.left){
        let temp = root;
        while(temp) {
            temp.left.next = temp.right;
            temp.right.next = temp.next ? temp.next.left : null;
            temp = temp.next;
        }
        root = root.left;
    }
    return ptr;
}