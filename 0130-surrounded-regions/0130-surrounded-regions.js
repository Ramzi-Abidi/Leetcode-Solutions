const dfs = (board, i, j, visited) => {
    // out of the board
    if (i < 0 || i >= board.length || j >= board[0].length || j < 0) {
        return ;
    }

    if (board[i][j] === "X") {
        return;
    }

    if (visited[[i, j]] !== undefined) {
        return;
    }
    //mark the cell as visited
    visited[[i, j]] = true;

    // exploring cell's neghbors (dfs)
    dfs(board, i, j + 1, visited);
    dfs(board, i + 1, j, visited);
    dfs(board, i - 1, j, visited);
    dfs(board, i, j - 1, visited);

    return;
};

var solve = function (board) {
    let visited = {};

    for (let i = 0; i < board.length; i++) {
        for (let j = 0; j < board[0].length; j++) {
            if (board[i][j] === "O" && (i === 0 || j === 0 || i === board.length - 1 || j === board[0].length - 1)) {
                // exploring all cells that must stay as it is
                dfs(board, i, j, visited);
            }
        }
    }

    for (let i = 0; i < board.length; i++) {
        for (let j = 0; j < board[0].length; j++) {
            //not visited
            if (visited[[i, j]] === undefined) {
                board[i][j] = "X";
            }
        }
    }
};