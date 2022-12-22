const buildGraph = (arr) => {
    let hash = {};

    for (let i = 0; i < arr.length; i++) {
        hash[i] = arr[i];
    }

    return hash;
};

const dfs = (graph, src, visited) => {
    //dfs iteratively
    let stack = [src];

    while (stack.length > 0) {
        let curr = stack.pop();

        visited[curr] = true;

        for (let i = 0; i < graph[curr].length; i++) {
            if (visited[graph[curr][i]] === undefined) {
                stack.push(graph[curr][i]);
            }
        }
    }
};

var canVisitAllRooms = function (rooms) {
    let graph = buildGraph(rooms);

    let visited = {};
    dfs(graph, 0, visited);
    for (const key in graph) {
        if(visited[key]===undefined) {
            return false ;
        }
    }
    return true;
};