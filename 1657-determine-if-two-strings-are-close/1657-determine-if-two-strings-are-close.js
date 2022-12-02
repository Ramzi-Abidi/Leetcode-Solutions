const buildHash = (ch) => {
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

var closeStrings = function (ch1, ch2) {
    if (ch1.length !== ch2.length) {
        return false;
    }

    let hash1 = buildHash(ch1);
    let hash2 = buildHash(ch2);

    let arr1 = [];
    let arr2 = [];

    //Time : O(26)
    for (const key in hash1) {
        if(hash2[key] === undefined) {
            return false ;
        }
        arr1.push(hash1[key]);
    }

    //Time : O(26)
    for (const key in hash2) {
        arr2.push(hash2[key]);
    }


    //Time : O(n log n)
    return (
        arr1.sort((a, b) => a - b).join("") ===
        arr2.sort((a, b) => a - b).join("")
    );
};