const regionsBySlashes = (grid) => {
    const N = grid.length;
    let count = 4 * N * N; // note 1
    const parent = [...new Array(4 * N * N)].map((_, i) => i);

    const find = (u) => {
        if (parent[u] === u) {
            return u;
        } else {
            return find(parent[u]);
        }
    };

    const union = (u, v) => {
        if (find(u) != find(v)) {
            parent[find(u)] = find(v);
            count--;
        }
    };

    for (let r = 0; r < N; r++) {
        // loop though the 'grid' & change 'parent' values
        for (let c = 0; c < N; c++) {
            const root = 4 * (r * N) + 4 * c; //note 2
            const val = grid[r].charAt(c);
            if (val != "\\") {
                //  val = '/' or '' or ' '
                union(root + 0, root + 1);
                union(root + 2, root + 3);
            }
            if (val != "/") {
                //  val =  '\\' or '' or ' '
                union(root + 0, root + 2);
                union(root + 1, root + 3);
            }
            // note 3
            if (r + 1 < N) {
                // North-South
                union(root + 3, root + 4 * N + 0);
            }
            if (r - 1 >= 0) {
                // South-North
                union(root + 0, root - 4 * N + 3);
            }
            if (c + 1 < N) {
                // East-West
                union(root + 2, root + 4 + 1);
            }
            if (c - 1 >= 0) {
                // West-East
                union(root + 1, root - 4 + 2);
            }
        }
    }

    return count;
};


// algo explained: https://www.youtube.com/watch?time_continue=2&v=tIZkh7mpIDo&feature=emb_logo
