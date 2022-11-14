var judgeSquareSum = function (c) {
  for (let a = 0; a * a <= c; a++) {        // a*a is always < c 
    const b = Math.sqrt(c - a * a);
    if (Math.floor(b) === b)
        return true;
  }
  return false;
};