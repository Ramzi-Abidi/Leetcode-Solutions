function lemonadeChange(bills) {
    let fives = 0;
    let tens = 0;

    for (let bill of bills) {
        if (bill === 5) {
            fives += 1;
        } else if (bill === 10) {
            if (fives === 0) {
                return false;
            }
            fives -= 1;
            tens += 1;
        } else if (bill === 20) {
            if (tens > 0 && fives > 0) {
                tens -= 1;
                fives -= 1;
            } else if (fives >= 3) {
                fives -= 3;
            } else {
                return false;
            }
        }
    }

    return true;
}
