var maxArea = function(arr) {
    let i = 0;
    let j = arr.length - 1;
    let max = 0;

    while (i !== j) {
        let surf = (j - i) * Math.min(arr[i], arr[j]); // surf = width * heigh(the min between arr[i] and arr[j])
        max = Math.max(max, surf);
        if (arr[i] < arr[j]) {
            i++;
        } else {
            j--;
        }
    }
    return max;
};