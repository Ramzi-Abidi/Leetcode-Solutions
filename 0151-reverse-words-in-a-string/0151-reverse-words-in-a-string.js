var reverseWords = function(s) {
    let singleSpaces = s.replace(/  +/g, ' ');
    
    return singleSpaces.trim().split(" ").reverse().join(" ");
    
};