const buildGraph = (arr,n) => {
    // arr is the prerequisites
    let hash = {};

    for (let i = 0; i < arr.length; i++) {
        let [a, b] = arr[i];

        if (hash[a] === undefined) {
            hash[a] = [];
        }
        if (hash[b] === undefined) {
            hash[b] = [];
        }
        hash[b].push(a);
    }

    for (let i = 0; i < n; i++) {
        if(hash[i] === undefined) {
            hash[i] = [];
        }        
    }
    return hash;
};

const topologicalSort = (graph, prerequisites, n) => {
    let hash = {};

    // the hash that contains our elements with number of incoming edges for each element
    for (let i = 0; i < prerequisites.length; i++) {
        let [a, b] = prerequisites[i];
        if (!hash[a]) {
            hash[a] = 1;
        } else {
            hash[a]++;
        }
    }

    // adding elements that have no income edges to the hash
    for (let i = 0; i < n; i++) {
        if (hash[i] === undefined) {
            if (graph[i] !== undefined) {
                hash[i] = 0;
            }
        }
    }
    // the queue which has all nodes with 0 incoming edges
    let queue = [];
    for (const key in hash) {
        if (hash[key] === 0) {
            queue.push(key);
        }
    }

    // we didn't find any node with 0 incoming edges => there's a cycle in the graph
    if (queue.length === 0) {
        return [];
    }

    let sortedQueue = [];

    while (queue.length > 0) {
        let curr = queue.shift();
        sortedQueue.push(parseInt(curr));
        
        // removing all connections that curr points to
        for (let i = 0; i < graph[curr].length; i++) {
            hash[graph[curr][i]]--;
            if (hash[graph[curr][i]] === 0) {
                queue.push(graph[curr][i]);
            }
        }
    }

    // if there are more edges in the hash then there's a cycle
    for (const key in hash) {
        if (hash[key] !== 0) {
            return [];
        }
    }
    return sortedQueue;
};


var findOrder = function (n, prerequisites) {
    let graph = buildGraph(prerequisites, n);

    return topologicalSort(graph, prerequisites, n);
};