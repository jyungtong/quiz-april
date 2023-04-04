// const testData = ["4","2","+","5","*"];
const testData = ["4","13","5","/","+"];

const operators: { [key: string]: (x: number | undefined, y: number | undefined) => number} = {
    '+': (x = 0, y = 0) => x + y,
    '-': (x = 0, y = 0) => x - y,
    '*': (x = 1, y = 1) => x * y,
    '/': (x = 0, y = 1) => Math.floor(x / y)
}

function main(tokens: string[]): number {
    /*
    1. push token 1 by 1
    2. if number push into stack
    3. if operator then pop last 2 tokens and calculate and push the results to the stack
    */

    let stack: number[] = [];

    for (const token of tokens) {
        if (!Number.isNaN(Number(token))) {
            stack.push(Number(token));
        } else {
            const secondArg = stack.pop();
            const firstArg = stack.pop();

            stack.push(operators[token](firstArg, secondArg));
        }
    }

    return stack[0];
}

console.log('===test', testData);
const results = main(testData);
console.log('===results', results);
