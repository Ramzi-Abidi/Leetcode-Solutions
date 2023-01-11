var minTime = function (n, edges, hasApple) {
    let hashEdges = {}
    for (let i = 0; i < n; i++) {
        hashEdges[i] = []
    }
    edges.forEach(([x, y]) => {
        hashEdges[x].push(y)
        hashEdges[y].push(x)
    })

    var dfs = (current, parent) => {
        let count = 0;

        hashEdges[current].forEach((edge) => {
            if(edge === parent) return
            let time = dfs(edge, current)
            if(time || hasApple[edge]) {
                count += (2 + time)
            }
        })

        return count;
    }
    return dfs(0, -1);
};