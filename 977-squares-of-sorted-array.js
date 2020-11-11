// 977. Squares of a Sorted Array

// Given an array of integers A sorted in non-decreasing order, return an array of the squares of each number, also in sorted non-decreasing order. 

// Example 1:

// Input: [-4,-1,0,3,10]
// Output: [0,1,9,16,100]

// Example 2:

// Input: [-7,-3,2,3,11]
// Output: [4,9,9,49,121]
 

// Note:

// 1 <= A.length <= 10000
// -10000 <= A[i] <= 10000
// A is sorted in non-decreasing order.

// /**
//  * @param {number[]} A
//  * @return {number[]}
//  */
const sortedSquares = (A) => {
    let newArr = [];
    for (let i = 0; i < A.length; i++) {
        newArr.push(A[i]*A[i]);
    };
    console.log(newArr.sort(function(a,b) {return a-b}));
    return newArr.sort();
};

let input = [-4,-1,0,3,10];
sortedSquares(input);

// Expected output: [0,1,9,16,100]


// Success
// Details 
// Runtime: 116 ms, faster than 84.60% of JavaScript online submissions for Squares of a Sorted Array.
// Memory Usage: 45.1 MB, less than 24.88% of JavaScript online submissions for Squares of a Sorted Array.
