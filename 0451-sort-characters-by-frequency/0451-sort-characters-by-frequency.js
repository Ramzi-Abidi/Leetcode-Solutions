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

var frequencySort = function (s) {
    let hash = buildHash(s); //O(n)

    let arr = Object.entries(hash); //O(26)
    arr.sort((a, b) => b[1] - a[1]); // O(26 log 26)

    let chres= "";
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr[i][1]; j++) {
            chres += arr[i][0];
        }
    }

    return chres ;
};