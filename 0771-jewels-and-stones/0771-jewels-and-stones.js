var numJewelsInStones = function(jewels, stones) {
    const hashmap = {}
    let count = 0
    
    for (let c of jewels) {
        hashmap[c] = 1;
    }
    
    for (let c of stones) {
        if (hashmap[c]) {
            count++;
        }
    }
    return count;
};