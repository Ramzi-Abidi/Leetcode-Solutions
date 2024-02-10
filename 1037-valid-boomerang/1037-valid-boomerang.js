var isBoomerang = function (points) {
    // x1 (y2 - y3) + x2 (y3 - y1) + x3 (y1 - y2) = 0
    let [[x1, y1], [x2, y2], [x3, y3]] = points;
    return x1 * (y2 - y3) + x2 * (y3 - y1) + x3 * (y1 - y2) == 0 ? false : true;
};