const averageOfLevels = (root) => {
    const levelOrder = function (root) {
        if (root === null) return [];

        let res = [];
        const queue = [root];

        while (queue.length !== 0) {
            let len = queue.length;
            let sum = 0;
            queue.forEach((node) => {
                sum += node.val;
            });
            res.push(parseFloat(sum / len));
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

    return res;
};
