
var nextGreatestLetter = function(letters, target) {
     if (target >= letters[letters.length - 1])
        return letters[0];

    let start = 0,
        end = letters.length - 1;
    
    while (start <= end) {
        let mid = start + Math.floor((end - start) / 2);

        if (letters[mid] <= target) {
            start = mid + 1;
        }
        else if (target < letters[mid]) {
                end = mid - 1;
            }
    }

    return letters[start];
};