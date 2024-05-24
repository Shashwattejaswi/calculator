


const expandArray = [{ val: '(', func: "" }, ')', 'mc', 'm+', 'm-', 'mr', '2nd', 'x2', 'x3', 'xy', 'ex', '10x', '1/x', '2x', '3x', 'yx', 'ln', 'log10', 'x!', 'sin', 'cos', 'tan', 'e', 'EE', 'rad', 'sinh', 'cosh', 'tanh', 'pi', 'rand'];


export const priority = (char) => {
    switch (char) {
        case '+':
            return 1;
        case '-':
            return 1;
        case '*':
            return 2;
        case '/':
            return 2;
        case '^':
            return 3;

    }
}

export const solve = (first, op, second) => {
    switch (op) {
        case '+':
            return first + second;
        case '-':
            return second - first;
        case '*':
            return first * second;
        case '/':
            return second / first;
        case '^':
            return first ** second;

    }


}

const parameter = (eq) => {
    const operator = [];
    const operant = [];
    let i = 0;
    while (i < eq.length) {
        if (isNaN(eq.charAt(i))) {

        }
        else {
            operant.push(eq.charAt(i));
        }
    }
}