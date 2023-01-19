const createHash = (ch) => {
    let hash = {};

    for (let i = 0; i < ch.length; i++) {
        if (!hash[ch[i]]) {
            hash[ch[i]] = 1;
        } else {
            hash[ch[i]]++;
        }
    }

    return hash;
};

const compareHashmaps = (hash1, hash2) => {
    for (const key in hash2) {
        if (hash1[key] === undefined) {
            return key;
        }
        else if(hash1[key] !== hash2[key]){
            return key ;
        }
    }
};

const findTheDifference = function (s, t) {
    let hash1 = createHash(s);
    let hash2 = createHash(t);

    let carac = compareHashmaps(hash1, hash2);

    return carac;
};
