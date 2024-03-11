var customSortString = function (order, s) {
    const hash = {};

    // O(26) => O(1)
    for (let i = 0; i < s.length; i++) {
        if (s[i] in hash) {
            hash[s[i]]++;
        }
        else {
            hash[s[i]] = 1;
        }
    }

    let res = "";
    for (let i = 0; i < order.length; i++) {
        if (order[i] in hash) {
            res += order[i].repeat(hash[order[i]]);     // o(26) => o(1)
            delete hash[order[i]];
        }
    }

    for (const key in hash) {
        res += key.repeat(hash[key]);
    }

    return res;
};