// 728. Self Dividing Numbers

// A self-dividing number is a number that is divisible by every digit it contains.

// For example, 128 is a self-dividing number because 128 % 1 == 0, 128 % 2 == 0, and 128 % 8 == 0.

// Also, a self-dividing number is not allowed to contain the digit zero.

// Given a lower and upper number bound, output a list of every possible self dividing number, including the bounds if possible.

// Example 1:
// Input: 
// left = 1, right = 22
// Output: [1, 2, 3, 4, 5, 6, 7, 8, 9, 11, 12, 15, 22]
// Note:

// The boundaries of each input argument are 1 <= left <= right <= 10000.

/**
 * @param {number} left
 * @param {number} right
 * @return {number[]}
 */

const selfDividingNumbers = (left, right) => {
    let numArr = [];
    let answerArr = [];
    for (let i = left; i <= right; i++) {
        numArr.push(i);
    };
    for (let num of numArr) {
        let digitArr = num.toString().split('').map(iNum => parseInt(iNum, 10));
        let isDivisible = true;
        for (let digit of digitArr) {
            if (digit === 0) {
                isDivisible = false;
            } else if (num % digit != 0) {
                isDivisible = false
            };  
        };
        if (isDivisible === true) {
            answerArr.push(num);
        };
    };
    return answerArr;
};

