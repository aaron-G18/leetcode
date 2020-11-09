// 1281. Subtract the Product and Sum of Digits of an Integer

// Given an integer number n, return the difference between the product of its digits and the sum of its digits.
 

// Example 1:

// Input: n = 234
// Output: 15 
// Explanation: 
// Product of digits = 2 * 3 * 4 = 24 
// Sum of digits = 2 + 3 + 4 = 9 
// Result = 24 - 9 = 15

// Example 2:

// Input: n = 4421
// Output: 21
// Explanation: 
// Product of digits = 4 * 4 * 2 * 1 = 32 
// Sum of digits = 4 + 4 + 2 + 1 = 11 
// Result = 32 - 11 = 21
 

// Constraints:

// 1 <= n <= 10^5

// /**
//  * @param {number} n
//  * @return {number}
//  */

const subtractProductAndSum = (n) => {
    let nums = n.toString().split("");
    console.log("nums = ", nums);
    let prod = nums[0];
    let sum = parseInt(nums[0]);
    for (let i = 1; i < nums.length; i++) {
        prod *= nums[i];
        sum +=  parseInt(nums[i]);
    };
    console.log("prod = ", prod);
    console.log("sum = ", sum); 
    console.log(prod-sum);
    return prod-sum;
};


// solution that is faster using an accumulator:

// var subtractProductAndSum = function(n) {
//     var chars = n.toString().split(""); 
//     return (
//       chars.reduce((acc, curr) => acc * parseInt(curr)) -
//       chars.reduce((acc, curr) => acc + parseInt(curr), 0)
//     );
// };

let n = 4421;
subtractProductAndSum(n);
