let longestCommonPrefix = function (arr) {
    if (!arr[0]) {
        return "";
    }
    let chres = "";
    let prefix = "";
    for (let i = 0; i < arr[0].length; i++) {
        prefix += arr[0][i];
        for (let i = 1; i < arr.length; i++) {
            if (!arr[i].startsWith(prefix)) {
                return chres;
            }
        }
        chres = prefix;
    }
    return prefix;
};