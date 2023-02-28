const calcEquation = (equations, values, queries) => {
    const graph = {};

    const dfs = (src, dest, visited) => {
        if (graph[src] === undefined || graph[dest] === undefined) {
            return -1;
        }

        // mark it as visited
        visited.add(src);

        for (let i = 0; i < graph[src].length; i++) {
            const { char, val } = graph[src][i];

            if (dest === char) {
                return val;
            }

            if (src === dest) {
                return 1;
            }

            let temp;
            if (!visited.has(char)) {
                visited.add(char);

                temp = dfs(char, dest, visited);
                if (temp !== -1) {
                    return temp * val;
                }
            }
        }

        return -1;
    };

    for (let i = 0; i < equations.length; i++) {
        if (graph[equations[i][0]] === undefined) {
            graph[equations[i][0]] = [];
        }
        if (graph[equations[i][1]] === undefined) {
            graph[equations[i][1]] = [];
        }

        let obj = {};
        let char = equations[i][1];
        let val = values[i];
        obj["char"] = char;
        obj["val"] = val;

        graph[equations[i][0]].push(obj);

        obj = {};
        char = equations[i][0];
        val = 1 / values[i];

        obj["char"] = char;
        obj["val"] = val;

        graph[equations[i][1]].push(obj);
    }

    const res = [];

    for (let i = 0; i < queries.length; i++) {
        const [a, b] = queries[i];

        let el = dfs(a, b, new Set());
        res.push(el);
    }

    return res;
};
