function binarySearch(i, j, target, M) {
    let start = 0,
        end = j - 1;

    while (start <= end) {
        let mid = start + Math.floor((end - start) / 2);

        if (target === M[i][mid]) {
            return true;
        } else if (target > M[i][mid]) {
            start = mid + 1;
        } else {
            end = mid - 1;
        }
    }
    return false;
}


var searchMatrix = function(M, target) {
    for (let i = 0; i < M.length; i++) {
        if (target === M[i][M[i].length - 1]) {
            return true;
        } else if (target < M[i][M[i].length - 1]) {
            return binarySearch(i, M[i].length, target,M);
        }
    }
    return false;
};