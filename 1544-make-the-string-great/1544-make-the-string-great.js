    var makeGood = function (s) {
    let i = 0;
    while (i < s.length - 1) {
        if (s[i] != s[i + 1] && s[i].toLowerCase() === s[i + 1].toLowerCase()) {
            s = s.replace(s[i] + s[i + 1], "");
            if (i) {
                i--;
            }
        }
         else {
            i++;
        }
    }
    return s;
};