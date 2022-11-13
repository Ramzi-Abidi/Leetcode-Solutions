var kWeakestRows = function (mat, k) {
  return mat
    .map((e, i) => [i, e.reduce((acc, cur) => acc + cur, 0)])
	//turn the array into [index, sum of soilders] form
    .sort((a, b) => (a[1] == b[1] ? a[0] - b[0] : a[1] - b[1]))
	//sort the array: if the number of soilders is equal then sort with the index of the row 
    .map((x) => x[0])
	//take of the row index of the sorted result
    .slice(0, k);
	//slice the result according to k number
};