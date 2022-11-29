var getMaximumGold = function (grid) {
    // exploring all paths + backtracking technique :
    function dfs(grid, i, j, s) {
        if (i < 0 || j < 0 || i >= grid.length || j >= grid[0].length || grid[i][j] === 0) {
            return;
        }

        let ch = i + "," + j ;

         if (visited.has(ch)) {
            return;
        }

        visited.add(ch) ;

        s += grid[i][j];

        max = Math.max(max, s);

        //right
        dfs(grid, i, j + 1,s);
        //top
        dfs(grid, i - 1, j,s);
        //bottom
        dfs(grid, i + 1, j,s);
        //left
        dfs(grid, i, j - 1,s);

        visited.delete(ch);
    }

    let visited = new Set() ;
    let max = 0;

    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[0].length; j++) {
            if (grid[i][j] !== 0) {
                dfs(grid, i, j, 0);
            }
        }
    }

    return max;
};
