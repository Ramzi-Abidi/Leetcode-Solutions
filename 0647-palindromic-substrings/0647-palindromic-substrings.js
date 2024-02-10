var countSubstrings = function (s) {
    let count = 0;

    const countpal = (s, left, right) => {
        let count = 0;
        while (left >= 0 && right < s.length && s[left] === s[right]) {
            count++;
            left--;
            right++;
        }
        return count;
    };

    // for odd substrings
    for (let i = 0; i < s.length; i++) {
        let left = i,
            right = i;
        count += countpal(s, left, right);
    }

    // for even substrings
    for (let i = 0; i < s.length; i++) {
        let left = i;
        let right = i + 1;

        count += countpal(s, left, right);
    }
    return count;
};
