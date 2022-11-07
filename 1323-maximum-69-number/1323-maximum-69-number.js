var maximum69Number  = function(num) {
    let ch = num.toString() ;
    
    let chres = "" ;
    let ok = true ;
    
    for(let i=0; i<ch.length; i++) {
        if(ch[i] !== "9" && ok) {
            chres+= "9";
            ok = false ;
        }
        else {
            chres+=ch[i] ;
        }
    }
    
    return parseInt(chres) ;
    
};