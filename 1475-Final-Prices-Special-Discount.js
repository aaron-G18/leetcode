// 1475. Final Prices With a Special Discount in a Shop

// Given the array prices where prices[i] is the price of the ith item in a shop. There is a special discount for items in the shop, if you buy the ith item, then you will receive a discount equivalent to prices[j] where j is the minimum index such that j > i and prices[j] <= prices[i], otherwise, you will not receive any discount at all.

// Return an array where the ith element is the final price you will pay for the ith item of the shop considering the special discount.

 

// Example 1:

// Input: prices = [8,4,6,2,3]
// Output: [4,2,4,2,3]
// Explanation: 
// For item 0 with price[0]=8 you will receive a discount equivalent to prices[1]=4, therefore, the final price you will pay is 8 - 4 = 4. 
// For item 1 with price[1]=4 you will receive a discount equivalent to prices[3]=2, therefore, the final price you will pay is 4 - 2 = 2. 
// For item 2 with price[2]=6 you will receive a discount equivalent to prices[3]=2, therefore, the final price you will pay is 6 - 2 = 4. 
// For items 3 and 4 you will not receive any discount at all.
// Example 2:

// Input: prices = [1,2,3,4,5]
// Output: [1,2,3,4,5]
// Explanation: In this case, for all items, you will not receive any discount at all.
// Example 3:

// Input: prices = [10,1,1,6]
// Output: [9,0,1,6]
 

// Constraints:

// 1 <= prices.length <= 500
// 1 <= prices[i] <= 10^3

// /**
//  * @param {number[]} prices
//  * @return {number[]}
//  */
const finalPrices = (prices) => {
    let pricesArr = [];
    for (let i = 0; i < prices.length; i++) {
        let j = i + 1;
        while (j > i) {
            if (prices[j] <= prices[i]) {
                pricesArr.push(prices[i] - prices[j]);
                j = -1;
            } else if (prices[j] > prices[i]) {
                j++;
            } else {
                pricesArr.push(prices[i]);
                j = -1;
            };
        };
    };
    return pricesArr;
};




//Submission results:

// Success
// Details 
// Runtime: 96 ms, faster than 28.32% of JavaScript online submissions for Final Prices With a Special Discount in a Shop.
// Memory Usage: 40.6 MB, less than 39.07% of JavaScript online submissions for Final Prices With a Special Discount in a Shop.

// Other solutions:

// var finalPrices = function(prices) {
//     let arr = [];
//     let min = 0;
//     for (let i = 1; i < prices.length; i++) {
//         console.log("*******");
//         console.log("i = ", i);
//         console.log("min= ", min);
//         if (prices[min] >= prices[i]) {
//             arr.push(prices[min] - prices[i]);
//             min++;
//             i = min;
//             console.log("i = ", i);
//         } else if (i === prices.length - 1) {
//             arr.push(prices[min]);
//             min++;
//             i = min;
//             console.log("else if hit");
//         }
//         console.log("arr = ", arr);
//     }
//     arr.push(prices[prices.length - 1]);
//     console.log(arr);
//     return arr;
// };

finalPrices([8,4,6,2,3]);
// Expected Output: [4,2,4,2,3]