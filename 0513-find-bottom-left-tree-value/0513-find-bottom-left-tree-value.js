var findBottomLeftValue = function (root) {
    const levelOrder = (root) => {
        if (root === null) return [];

        let res = [];
        const queue = [root];

        while (queue.length !== 0) {
            let len = queue.length;
            let childs = queue.map((node) => {
                return node.val;
            });
            res.push(childs);
            while (len > 0) {
                let head = queue.shift();
                if (head.left) queue.push(head.left);
                if (head.right) queue.push(head.right);
                len--;
            }
        }
        return res;
    };

    const res = levelOrder(root);
    
    return res[res.length - 1][0];
};