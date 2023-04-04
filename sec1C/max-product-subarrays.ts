const testData = [2,3,-2,4];
//const testData = [-2,0,-1];
// const testData = [-2];

function products(arr: number[]): number {
    // do note that in nodejs, -1 * 0 will be getting -0, which should be the same as 0,
    // -0 === 0 // true
    // -0 == 0 // true
    // reference: https://medium.com/coding-at-dawn/is-negative-zero-0-a-number-in-javascript-c62739f80114
    return arr.reduce((acc, num) => {
        return acc * num;
    }, 1);
}

function max(arr: number[]): number {
    return arr.reduce((acc, num) => {
        return acc > num ? acc : num;
    });
}

function main(arr: number[]): number {
    /*
    1. get max chunkable length
    2. get all possible chunks with loop
    3. product each of the chunks
    4. get max
    */

    const arrLength = testData.length;

    let possibleSubarrays: number[][] = [];
    for (let i = 1; i <= arrLength; i++) {
        for (let y = 0; y < arrLength; y++) {
            possibleSubarrays.push(arr.slice(y, y+i));
        }
    }

    const subArrayProducts = possibleSubarrays.reduce((acc, arr) => {
        return [
            ...acc,
            products(arr)
        ]
    }, []);

    return max(subArrayProducts);
}

console.log('===test', testData);
const results = main(testData);
console.log('===max', results);
