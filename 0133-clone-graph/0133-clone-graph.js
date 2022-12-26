var cloneGraph = function(node) {
    let map = {};

    return traverse(node);
    
    function traverse  (node) {
        if(!node) return node;
        if(!map[node.val]) {
            map[node.val] = new Node(node.val);
            map[node.val].neighbors = node.neighbors.map(neighbor => traverse(neighbor))
        }
        return map[node.val]
    }
};