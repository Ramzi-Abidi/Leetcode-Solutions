var hammingWeight = function(n) {
    
    let c=0;
    for(let i=0;i<32;i++){
        if(n&1===1) c++;
        n>>=1;
        
    }
    return c;
};