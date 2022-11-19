/**
 * @param {string} s
 * @return {string}
 */

function rev(ch) {
    let chres="" ;
    
    for(let i=0; i<ch.length; i++) {
        chres=ch[i]+chres ;
    }
    
    return chres;
}


var reverseWords = function(s) {
    let arr = s.split(" ") ;
    let chres="" ;
    
    for(let i=0; i<arr.length ;i++) {
        arr[i] = rev(arr[i]) ;
    }
    
    return arr.join(" ") ;
};