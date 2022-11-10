var arrangeCoins = function(n) {
    let coin = 0;
    let count = 1;

    while (coin < n) {
        coin += count + 1;
        count++;
    }
    return count - 1;
};