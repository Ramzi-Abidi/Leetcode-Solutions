const findCircleNum = (isConnected) => {
    const createGraph = () => {
        const graph = {};
        for (let i = 0; i < isConnected.length; i++) {
            for (let j = 0; j < isConnected.length; j++) {
                if (isConnected[i][j] === 1) {
                    if (graph[i] === undefined) {
                        graph[i] = [];
                    }
                    if (graph[j] === undefined) {
                        graph[j] = [];
                    }
                    if (i !== j) {
                        graph[i].push(j);
                    }
                    //graph[j].push(i);
                }
            }
        }
        return graph;
    };

    const dfs = (graph, src, visited) => {
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

    const visited = {};
    const graph = createGraph();

    let count = 0;

    for (const key in graph) {
        if (visited[key] === undefined) {
            dfs(graph, key, visited);
            count++;
        }
    }
    return count;
};