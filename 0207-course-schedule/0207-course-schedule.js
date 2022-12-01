const buildGraph = (arr) => {
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

    // adding elements that have no income edges
     for (let i = 0; i < n; i++) {
        if(!hash[i]) {
            if (graph[i] !== undefined) {
                hash[i] = 0;
            }
        }
    } 

    // the queue which has all elements with 0 incoming edges
    let queue = [];
    for (const key in hash) {
        if (hash[key] === 0) {
            queue.push(key);
        }
    }

    // there's a cycle in the graph
    if (queue.length === 0) {
        return false;
    }

    let sortedQueue = []; // this sorted queue will contain the sorted graph (final result)

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
        if(hash[key] !== 0) {
            return false ;
        }
    }
    return true;
};


var canFinish = function (n, prerequisites) {
    if(prerequisites.length === 0) {
        return true;
    }
    
    let graph = buildGraph(prerequisites);
    return topologicalSort(graph, prerequisites, n);
};