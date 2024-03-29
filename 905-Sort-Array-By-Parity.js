// 905. Sort Array By Parity

// Given an array A of non-negative integers, return an array consisting of all the even elements of A, followed by all the odd elements of A.

// You may return any answer array that satisfies this condition.


// Example 1:

// Input: [3,1,2,4]
// Output: [2,4,3,1]
// The outputs [4,2,3,1], [2,4,1,3], and [4,2,1,3] would also be accepted.
 

// Note:

// 1 <= A.length <= 5000
// 0 <= A[i] <= 5000

/**
 * @param {number[]} A
 * @return {number[]}
 */

const sortArrayByParity = (A) => {
    let evenArr = [];
    let oddArr = [];
    for (let num of A) {
        if (num % 2 === 0) {
            evenArr.push(num)
        } else {
            oddArr.push(num)
        };
    };
    let result = evenArr.concat(oddArr);
    return result;
};

sortArrayByParity([3,1,2,4]);


// Submission results:

// Success
// Details:
 
// Runtime: 96 ms, faster than 73.24% of JavaScript online submissions for Sort Array By Parity.
// Memory Usage: 42 MB, less than 21.17% of JavaScript online submissions for Sort Array By Parity.


