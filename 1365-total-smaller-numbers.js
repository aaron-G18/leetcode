// 1365. How Many Numbers Are Smaller Than the Current Number

// Given the array nums, for each nums[i] find out how many numbers in the array are smaller than it. That is, for each nums[i] you have to count the number of valid j's such that j != i and nums[j] < nums[i].

// Return the answer in an array.

 

// Example 1:

// Input: nums = [8,1,2,2,3]
// Output: [4,0,1,1,3]
// Explanation: 
// For nums[0]=8 there exist four smaller numbers than it (1, 2, 2 and 3). 
// For nums[1]=1 does not exist any smaller number than it.
// For nums[2]=2 there exist one smaller number than it (1). 
// For nums[3]=2 there exist one smaller number than it (1). 
// For nums[4]=3 there exist three smaller numbers than it (1, 2 and 2).
// Example 2:

// Input: nums = [6,5,4,8]
// Output: [2,1,0,3]
// Example 3:

// Input: nums = [7,7,7,7]
// Output: [0,0,0,0]
 

// Constraints:

// 2 <= nums.length <= 500
// 0 <= nums[i] <= 100

// /**
//  * @param {number[]} nums
//  * @return {number[]}
//  */

const smallerNumbersThanCurrent = (nums) => {
    let numsArr = nums.map(x => x);
    console.log(numsArr);
    let sortedArr = numsArr.sort((a, b) => {return a-b});
    
    console.log("sortedArr = ", sortedArr);
    let res = [];
    for (let i = 0; i < nums.length; i++) {
        res.push((sortedArr.indexOf(nums[i])));
    };
    console.log("res = ", res);
    console.log("expected = [4,0,1,1,3]")
    return res;
};


// clean solution found on site using rest operator:

// var smallerNumbersThanCurrent = function(nums) {
//     var sorted = [...nums].sort((a, b) => a - b);
//     console.log("sorted = ", sorted);
//     console.log(nums.map(num => sorted.indexOf(num)));
//     return nums.map(num => sorted.indexOf(num));
// };


let nums = [8,1,2,2,3];
smallerNumbersThanCurrent(nums);