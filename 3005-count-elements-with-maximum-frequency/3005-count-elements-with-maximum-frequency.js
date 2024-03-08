var maxFrequencyElements = function (arr) {
    const createHash = () => {
        const hash = {};
        for (let el of arr) {
            if (el in hash) {
                hash[el]++;
            } else {
                hash[el] = 1;
            }
        }
        return hash;
    };

    const hash = createHash();

    const values = Object.values(hash);

    const maxFreq = Math.max(...values);

    let count = 0;
    for (let el of arr) {
        if (hash[el] == maxFreq) {
            count++;
        }
    }
    return count;
};
