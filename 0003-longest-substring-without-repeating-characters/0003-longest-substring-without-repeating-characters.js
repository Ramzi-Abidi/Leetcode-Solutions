function lengthOfLongestSubstring(ch) {
    let hash = {} ;
    let max = 0 ;
    let j=0 ;
    let i=0 ;
    
    while(i<ch.length) {
        if(!hash[ch[i]]) {
            hash[ch[i]] = 1 ;
            max = Math.max(max, i-j+1);
            i++ ;
        }
        else {
            delete hash[ch[j]] ;
            j++ ;
        }
    }
    return max ;
    
};