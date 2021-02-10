// 1299. Replace Elements with Greatest Element on Right Side

// Given an array arr, replace every element in that array with the greatest element among the elements to its right, and replace the last element with -1.

// After doing so, return the array.

// Example 1:

// Input: arr = [17,18,5,4,6,1]
// Output: [18,6,6,6,1,-1]
// Explanation: 
// - index 0 --> the greatest element to the right of index 0 is index 1 (18).
// - index 1 --> the greatest element to the right of index 1 is index 4 (6).
// - index 2 --> the greatest element to the right of index 2 is index 4 (6).
// - index 3 --> the greatest element to the right of index 3 is index 4 (6).
// - index 4 --> the greatest element to the right of index 4 is index 5 (1).
// - index 5 --> there are no elements to the right of index 5, so we put -1.


// Example 2:

// Input: arr = [400]
// Output: [-1]
// Explanation: There are no elements to the right of index 0.
 

// Constraints:

// 1 <= arr.length <= 104
// 1 <= arr[i] <= 105

// /**
//  * @param {number[]} arr
//  * @return {number[]}
//  */
const replaceElements = (arr) => {
    if (arr.length === 1) {
        arr[0] = -1;
    } else {
        for (let i = 0; i < arr.length - 2; i++) {
            let greater = arr[i + 1];
            for (let j = i + 1; j < arr.length; j++) {
                if (arr[j] > greater) {
                    greater = arr[j];
                    console.log("arr[j] =", arr[j], "arr[i]= ", arr[i], "greater= ", greater);
                };
            };
            arr[i] = greater;
            console.log("assigned greater= ", greater);
            
        };
        arr[arr.length - 2] = arr[arr.length - 1];
        arr[arr.length - 1] = -1; 
    };
    console.log(arr);
    return arr;
};

replaceElements([56903,18666,60499,57517,26961]);
// Expected [60499,60499,57517,26961,-1]

// Submission results:
// Success
// Details 
// Runtime: 236 ms, faster than 38.69% of JavaScript online submissions for Replace Elements with Greatest Element on Right Side.
// Memory Usage: 42 MB, less than 87.44% of JavaScript online submissions for Replace Elements with Greatest Element on Right Side.