var evalRPN = function (tokens) {
    const calc = (a, opr, b) => {
        let ans = 0;
        if (opr === "/") {
            if (a === 0 || b === 0) {
                ans = 0;
            }
            else ans = Math.trunc(a / b);
        }
        else if (opr === "+") {
            ans = a + b;
        }
        else if (opr === "-") {
            ans = a - b;
        }
        else if (opr === "*") {
            return a * b;
        }
        return ans;
    }

    const stack = [];
    const operators = ["+", "/", "-", "*"];

    for (let token of tokens) {
        if (operators.indexOf(token) === -1) {
            stack.push(token);
        }
        else {
            let el = stack.pop();
            let el1 = stack.pop();
            let result = calc(Number(el1), token, Number(el));
            stack.push(result);
        }
    }
    return stack[stack.length - 1];
};