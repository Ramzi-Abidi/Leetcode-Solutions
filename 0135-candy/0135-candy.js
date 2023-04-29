var candy = function(ratings) {
    const candies = [];
    let i;
    let currentNum = 1;
    candies[0] = 1; // set first value to 1
    for(i = 1; i < ratings.length; i++){
		/* set value to one greater if greater than previous value, otherwise to 1 */
        if (ratings[i] > ratings[i-1]) currentNum++;
        else currentNum = 1;
        candies[i] = currentNum;
    }
    for(i = ratings.length - 2; i >= 0; i--){
		/* set value to max of one greater than previous or to current value */
        if (ratings[i] > ratings[i+1]) currentNum++;
        else currentNum = 1;
        candies[i] = Math.max(currentNum, candies[i]);
    }
	/* return sum of all candies array */
    return candies.reduce(function(total, value){
        return total + value;
    });
};