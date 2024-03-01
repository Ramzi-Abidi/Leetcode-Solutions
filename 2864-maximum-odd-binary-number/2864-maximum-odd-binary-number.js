var maximumOddBinaryNumber = function (s) {
    let res = "1";
    let nbZeroes = 0;
    let count = 0;

    if (s === "1") {
        return s;
    }
    for (let el of s) {
        if (el === "0") {
            nbZeroes++;
        }
    }
    count = nbZeroes;

    while (count > 0) {
        res = "0" + res;
        count--;
    }

    let nbOnes = s.length - nbZeroes;
    nbOnes -= 1;

    while (nbOnes > 0) {
        res = "1" + res;
        nbOnes--;
    }

    return res;
};

