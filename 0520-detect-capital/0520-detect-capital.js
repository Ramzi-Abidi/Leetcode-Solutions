var detectCapitalUse = function(word) {
    if(word === word.toUpperCase() || word === word.toLowerCase() ||
    word === word[0].toUpperCase() + word.toLowerCase().split("").slice(1).join("")) {
        return true;
    }
    else {
        return false ;
    }
};