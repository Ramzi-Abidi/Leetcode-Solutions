var judgeCircle = function(moves) {
    start = [0,0]
    for(let i=0; i<moves.length; i++) {
        
        if(moves[i] === "U") {
            start[0]-- ;
        }
        else if(moves[i] === "D") {
            start[0]++ ;
        }
        else if(moves[i] === "R") {
            start[1]++ ;
        }
        else if(moves[i] === "L") {
            start[1]-- ;
        }
    }

    return start[0] === 0 && start[1] === 0;
};