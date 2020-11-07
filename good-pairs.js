// 1512. Number of Good Pairs

// Given an array of integers nums.

// A pair (i,j) is called good if nums[i] == nums[j] and i < j.

// Return the number of good pairs.

 

// Example 1:

// Input: nums = [1,2,3,1,1,3]
// Output: 4
// Explanation: There are 4 good pairs (0,3), (0,4), (3,4), (2,5) 0-indexed.
// Example 2:

// Input: nums = [1,1,1,1]
// Output: 6
// Explanation: Each pair in the array are good.
// Example 3:

// Input: nums = [1,2,3]
// Output: 0
 

// Constraints:

// 1 <= nums.length <= 100
// 1 <= nums[i] <= 100

// /**
//  * @param {number[]} nums
//  * @return {number}
//  */

var numIdenticalPairs = function(nums) {
    let numberExists = {}; 
    let pair = 0;
    for(val of nums){
        numberExists[val] ? numberExists[val]++ : numberExists[val] = 1;
        console.log("nums[val] = ", nums[val]);
        console.log("numberExists[val] = ", numberExists[val]);
    };

    console.log("numberExists after loop = ", numberExists);
    for(val in numberExists){
        if(numberExists[val] > 1){
            pair += Math.round(  (numberExists[val] * (  (numberExists[val] -1)  )  ) /2);
        }
    }
    console.log(pair);
    return pair;
};







let nums = [1,2,3,1,1,3];
numIdenticalPairs(nums);