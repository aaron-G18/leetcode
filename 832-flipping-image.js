// 832. Flipping an Image

// Given a binary matrix A, we want to flip the image horizontally, then invert it, and return the resulting image.

// To flip an image horizontally means that each row of the image is reversed.  For example, flipping [1, 1, 0] horizontally results in [0, 1, 1].

// To invert an image means that each 0 is replaced by 1, and each 1 is replaced by 0. For example, inverting [0, 1, 1] results in [1, 0, 0].

// Example 1:

// Input: [[1,1,0],[1,0,1],[0,0,0]]
// Output: [[1,0,0],[0,1,0],[1,1,1]]
// Explanation: First reverse each row: [[0,1,1],[1,0,1],[0,0,0]].
// Then, invert the image: [[1,0,0],[0,1,0],[1,1,1]]

// Example 2:

// Input: [[1,1,0,0],[1,0,0,1],[0,1,1,1],[1,0,1,0]]
// Output: [[1,1,0,0],[0,1,1,0],[0,0,0,1],[1,0,1,0]]
// Explanation: First reverse each row: [[0,0,1,1],[1,0,0,1],[1,1,1,0],[0,1,0,1]].
// Then invert the image: [[1,1,0,0],[0,1,1,0],[0,0,0,1],[1,0,1,0]]
// Notes:

// 1 <= A.length = A[0].length <= 20
// 0 <= A[i][j] <= 1

// /**
//  * @param {number[][]} A
//  * @return {number[][]}
//  */
const flipAndInvertImage = (A) => {
    let ans = [];
    let currSubArr = [];
    let newSubArr = [];
    for (let i = 0; i < A.length; i++) {
        currSubArr = A[i];
        for (let j = (currSubArr.length-1); j >= 0; j--) {
            if (currSubArr[j] === 0) {
                newSubArr.push(1);
            } else {
                newSubArr.push(0);
            }
        };
        ans.push(newSubArr);
        newSubArr = [];
    };
    console.log("answer array: ", ans);
    return ans;
};

let input = [[1,1,0,0],[1,0,0,1],[0,1,1,1],[1,0,1,0]];
flipAndInvertImage(input);
// Expected output: [[1,1,0,0],[0,1,1,0],[0,0,0,1],[1,0,1,0]]

// Success
// Details 
// Runtime: 92 ms, faster than 23.49% of JavaScript online submissions for Flipping an Image.
// Memory Usage: 40.5 MB, less than 37.47% of JavaScript online submissions for Flipping an Image.