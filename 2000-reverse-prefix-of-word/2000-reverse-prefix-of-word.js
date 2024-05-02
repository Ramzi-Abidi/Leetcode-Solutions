var reversePrefix = function (word, ch) {
    let idx = word.indexOf(ch);
    let rest = word.slice(idx + 1);

    let chres = "";

    for (let i = idx; i >= 0; i--) {
        chres += word[i];
    }

    chres += rest;

    return chres;
};