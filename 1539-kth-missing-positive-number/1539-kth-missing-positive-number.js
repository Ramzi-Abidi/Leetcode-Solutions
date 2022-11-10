var findKthPositive = function (arr, k) {
  const missing = [];
  const len = arr.length + k;
 
  for (let i = 0, j = 1; j <= len; j++) {
    arr[i] != j ? missing.push(j) : i++;
    if (missing.length == k) return missing.pop()
  }
};