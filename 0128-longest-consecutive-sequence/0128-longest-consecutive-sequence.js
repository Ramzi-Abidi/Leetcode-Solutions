const longestConsecutive = (arr) => {
    let st = new Set(arr);
   
    let max = 0;
    
    for (let i = 0; i < arr.length; i++) {
         let length = 0; // length of the sequence
        // if the set doesn't have the arr[i]-1 element then it's the start of the sequence
        if (!st.has(arr[i] - 1)) {
            while (st.has(arr[i] + length)) {
                length++;
            }
            max = Math.max(length, max);
        }
    }
    return max;
};