function merge(left, right) {
    let sortedArr = []; // the sorted items will go here

    while (left.length && right.length) {
        // Insert the smallest item into sortedArr
        if (left[0] < right[0]) {
            sortedArr.push(left.shift());
        } else {
            sortedArr.push(right.shift());
        }
    }
    // Use spread operators to create a new array, combining the three arrays
    return [...sortedArr, ...left, ...right];
}



var sortArray = function(arr) {
     const half = Math.floor(arr.length / 2);

    if (arr.length === 1) {
        return arr;
    }

    return merge(sortArray(arr.slice(0, half)), sortArray(arr.slice(half)));
};