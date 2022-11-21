function createHash(ch) {
    let hash = {};

    for (let i = 0; i < ch.length; i++) {
        if (hash[ch[i]] === undefined) {
            hash[ch[i]] = 1;
        } else {
            hash[ch[i]]++;
        }
    }
    return hash;
}

function anag(s1, s2, hash1, hash2) {
    // check if s1 and s2 are anag
    // guarenteed that hash1 and hash2 are equal because s1 and s2 are equal
    if (Object(hash1).length !== Object(hash2).length) {
        return false;
    }
    //s1 = "ab"
    for (const key in hash2) {
        if (hash1[key] === undefined || hash1[key] !== hash2[key]) {
            return false;
        }
    }

    return true;
}

var checkInclusion = function (ch1, ch2) {
    let j = 0;

    if (ch1.length > ch2.length) {
        return false;
    }

    let hash1 = createHash(ch1);

    let hash2 = {};

    for (let i = 0; i < ch2.length; i++) {
        if (!hash2[ch2[i]]) {
            hash2[ch2[i]] = 1;
        } else {
            hash2[ch2[i]]++;
        }

        if (i >= ch1.length - 1) {
            if (anag(ch1, ch2.slice(j, i + 1), hash1, hash2)) {
                // O(26*n)
                return true;
            } else {
                hash2[ch2[j]]--;
                if (hash2[ch2[j]] === 0) {
                    delete hash2[ch2[j]];
                }
                j++;
            }
        }
    }

    return false;
};