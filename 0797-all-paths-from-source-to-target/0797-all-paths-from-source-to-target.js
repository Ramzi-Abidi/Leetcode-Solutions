const buildGraph = (edges) => {
    let graph = {};

    for (let i = 0; i < edges.length; i++) {
        graph[i] = edges[i];
    }

    return graph;
};

function dfs(graph, src, dst, arr, visited, res) {
    // solving it with dfs recursively
    visited[src] = true;

    if (src === dst) {
        arr.push(src);
        res.push(arr);
        return;
    }

    for (let i = 0; i < graph[src].length; i++) {
        dfs(graph, graph[src][i], dst, [...arr, src], visited, res);    // backtraking pattern
    }
}

const allPathsSourceTarget = (edges) => {
    const graph = buildGraph(edges);

    let res = [];

    let visited = {};

    dfs(graph, 0, edges.length - 1, [], visited, res);

    return res;
};