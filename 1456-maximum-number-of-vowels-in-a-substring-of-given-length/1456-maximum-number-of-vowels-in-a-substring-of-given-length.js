var maxVowels = function(ch, k) {
    let j=0 ;
    let max = 0;
    let count = 0;

    for (let i = 0; i < ch.length; i++) {
        if(ch[i] == "a" || ch[i] == "e" || ch[i] == "u" || ch[i] == "i" || ch[i] =="o") {
            count++ ;
        }        
        
        if(i >= k-1) {
            max = Math.max(max, count); 
            if(ch[j] == "a" || ch[j] == "e" || ch[j] == "u" || ch[j] == "i" || ch[j] =="o") {
                count-- ;
            }
            j++ ;
        }
    }

    return max ;
};