var solution = function(isBadVersion) {
    return function(n) {
        let left =1;
        let right =n;
        let mid;

            while(left<right){
                mid = Math.floor(left+(right-left)/2);
                if(!isBadVersion(mid)) left =mid+1
                else right =mid
            }  
            return left;
    };
};