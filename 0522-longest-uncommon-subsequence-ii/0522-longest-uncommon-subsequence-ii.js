const isSubseq = (ch, ch1) => {
    // checking if ch is a subseq of ch1:
    if(ch.length > ch1.length) {
        return false;
    }

    let n = ch.length, m = ch1.length;
    let i = 0, j = 0;

    while (i < n && j < m) {
        if (ch[i] == ch1[j])
            i++;
        j++;
    }
    return i === n;
  
};

var findLUSlength = function (arr) {
    arr.sort((a, b) => {
        return a.length - b.length;
    });

    console.log(arr);

    let max = -1 ;

    for (let i = 0; i < arr.length; i++) {
        let ok = false;

        for (let j = 0; j < arr.length; j++) {
            if (i !== j && isSubseq(arr[i], arr[j])) {
                ok = true;
                break;
            }
        }

        // there's a string which is not a subsequence of anyone
        if (!ok) {
            max = Math.max(max, arr[i].length);
        }
    }
    return max ;
};