function allAnagrams(ch, p, res) {
    let hash = {}; // hash of string p

    for (let i = 0; i < p.length; i++) {
        if (!hash[p[i]]) {
            hash[p[i]] = 1;
        } else {
            hash[p[i]]++;
        }
    }

    let k = p.length;
    let j = 0;
    let hash1 = {};

    for (let i = 0; i < ch.length; i++) {
        if (hash1[ch[i]] === undefined) {
            hash1[ch[i]] = 1;
        } else {
            hash1[ch[i]]++;
        }
        if (i === k - 1) {
            if (anag(hash, hash1)) {
                res.push(j);
            }
        } else if (i > k - 1) {
            j++;
            if (hash1[ch[j - 1]] > 1) hash1[ch[j - 1]]--;
            else delete hash1[ch[j - 1]];
            if (anag(hash, hash1)) {
                res.push(j);
            }
        }
    }
}

function sortObject(obj) {
    return Object.keys(obj)
        .sort()
        .reduce(function (result, key) {
            result[key] = obj[key];
            return result;
        }, {});
}

function anag(hash, hash1) {
    let sorted = sortObject(hash);
    let sorted1 = sortObject(hash1);

    return JSON.stringify(sorted1) === JSON.stringify(sorted);
}



var findAnagrams = function(s, p) {
    let res = [] ;
    allAnagrams(s,p, res);
    return res ;
};