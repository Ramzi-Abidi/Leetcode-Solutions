function anag(hash, hash1) {

    for (const key in hash) {
        if (!(hash[key] <= hash1[key])) {
            return false;
        }
    }
    return true;
}

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

var minWindow = function (ch, ch1) {
    if (ch1.length > ch.length) {
        return "";
    }

    if (ch === ch1) {
        return ch;
    }

    let hash = createHash(ch1); // for ch1 : "abc"

    let hash1 = {}; // for ch : "ADOBECODEBANC"

    let chres = "";
    let minString = ch;

    let j = 0;
    let ok = false ;
    
    for (let i = 0; i < ch.length; i++) {
        chres += ch[i];

        if (hash1[ch[i]] === undefined) {
            hash1[ch[i]] = 1;
        } else {
            hash1[ch[i]]++;
        }

        while (anag(hash, hash1)) {
            ok = true ;
            if (chres.length < minString.length) {
                // minimizing
                minString = chres;
            }

            hash1[ch[j]]--;

            if (hash1[ch[j]] == 0) {
                delete hash1[ch[j]];
            }
            j++;
            chres = chres.slice(1);
        }
    }
    return ok ? minString : "" ;
};