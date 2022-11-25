const buildGraph = (edges) => {
    let graph = {};

    for (let i = 0; i < edges.length; i++) {
        const [a, b] = edges[i];

        if (graph[a] === undefined) {
            graph[a] = [];
        }
        if (graph[b] === undefined) {
            graph[b] = [];
        }
        graph[a].push(b);
        graph[b].push(a);
    }

    return graph;
};

function hasPath(graph, src, dst, visited) {
    // solving it with dfs recursively
    if (visited[src] !== undefined) {
        // already visisted
        return;
    }

    visited[src] = true;

    if (src === dst) {
        return true;
    }

    for (let i = 0; i < graph[src].length; i++) {
        if (hasPath(graph, graph[src][i], dst, visited) === true) {
            return true;
        }
    }

    return false;
}

var validPath = function (n, edges, source, destination) {
    let graph = buildGraph(edges);
    let visited = {} ;

    return hasPath(graph, source, destination, visited); // using dfs()
};
