function combinations(n, chres, openParenthese, closedParenthese, res) {
    if (openParenthese === n && closedParenthese === n) {
        res.push(chres);
        return ;
    }

    if (openParenthese !== n) {
        combinations(n, chres + "(", openParenthese + 1, closedParenthese, res);
    }
     if (openParenthese !== closedParenthese) {
        combinations(n, chres + ")", openParenthese, closedParenthese + 1, res);
    }
}

var generateParenthesis = function(n) {
    let res=[] ;
    combinations(n,"",0,0,res) ;
    return res ;
};
