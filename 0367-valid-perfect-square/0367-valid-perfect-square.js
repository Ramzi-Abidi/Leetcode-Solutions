var isPerfectSquare = function(x) {
    let k=1 ;
    if(x===1)
        return true ;
    if(x===2 || x===3) {
        return false ;
    }

    for (let i = 1; i <= x/2; i++) {
        if(k*i === x) {
            return true ;         
        }

        else {
            k++ ;        
        }
    }
    return false ;
};