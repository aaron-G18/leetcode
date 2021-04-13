// 1748. Sum of Unique Elements

// You are given an integer array nums. The unique elements of an array are the elements that appear exactly once in the array.

// Return the sum of all the unique elements of nums.

 

// Example 1:

// Input: nums = [1,2,3,2]
// Output: 4
// Explanation: The unique elements are [1,3], and the sum is 4.
// Example 2:

// Input: nums = [1,1,1,1,1]
// Output: 0
// Explanation: There are no unique elements, and the sum is 0.
// Example 3:

// Input: nums = [1,2,3,4,5]
// Output: 15
// Explanation: The unique elements are [1,2,3,4,5], and the sum is 15.
 

// Constraints:

// 1 <= nums.length <= 100
// 1 <= nums[i] <= 100

/**
 * @param {number[]} nums
 * @return {number}
 */
const sumOfUnique = (nums) => {
    let uniqueArr = {};
    let sum = 0;
    for(let n of nums) {
      if(uniqueArr[n] === undefined) { //Encountering first time, add to sum
        sum += n;
        uniqueArr[n] = true;
      } else if(uniqueArr[n]) { //Encountering second time, subtract from sum
        sum -= n;
        uniqueArr[n] = false; //Set to false so third or more occurrences will not get added to sum
      }
    }
    console.log(sum);
    return sum;
};


sumOfUnique([1,2,3,2]);


// Submission results:

// Success
// Details 
// Runtime: 84 ms, faster than 26.34% of JavaScript online submissions for Sum of Unique Elements.
// Memory Usage: 38.7 MB, less than 73.02% of JavaScript online submissions for Sum of Unique Elements.


