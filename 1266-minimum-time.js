// 1266. Minimum Time Visiting All Point

// On a plane there are n points with integer coordinates points[i] = [xi, yi]. Your task is to find the minimum time in seconds to visit all points.

// You can move according to the next rules:

// In one second always you can either move vertically, horizontally by one unit or diagonally (it means to move one unit vertically and one unit horizontally in one second).
// You have to visit the points in the same order as they appear in the array.

// Example 1:

//              |
//              4              x
//              |
//              3         x    x    
//              |             
//              2    x     x 
//              |       
//              1x   x
//              |    
//  -- -- -1x -- -- 1 -- 2 -- 3 -- 4 -- 
//              |
//              -1
//              |


// Input: points = [[1,1],[3,4],[-1,0]]
// Output: 7
// Explanation: One optimal path is [1,1] -> [2,2] -> [3,3] -> [3,4] -> [2,3] -> [1,2] -> [0,1] -> [-1,0]   
// Time from [1,1] to [3,4] = 3 seconds 
// Time from [3,4] to [-1,0] = 4 seconds
// Total time = 7 seconds

// Example 2:

// Input: points = [[3,2],[-2,2]]
// Output: 5
 

// Constraints:

// points.length == n
// 1 <= n <= 100
// points[i].length == 2
// -1000 <= points[i][0], points[i][1] <= 1000

// /**
//  * @param {number[][]} points
//  * @return {number}
//  */

// const minTimeToVisitAllPoints = (points) => {
//     let coordArr = points;
//     let sum = 0;
//     for(let i = 0; i < coordArr.length-1; i++) {
//         let currentCoords = [];
//         let nextCoords = [];
//         let xDiff = 0;
//         let yDiff = 0;
//         currentCoords = coordArr[i];
//         nextCoords = coordArr[i+1];
//         xDiff = Math.abs(currentCoords[0] - (nextCoords[0]));
//         yDiff = Math.abs(currentCoords[1] - nextCoords[1]);
//         sum += Math.max(xDiff, yDiff);
//     };
//     return sum;
// };



// submission results for the above solution:

// Runtime: 80 ms, faster than 76.23% of JavaScript online submissions for Minimum Time Visiting All Points.
// Memory Usage: 40 MB, less than 49.12% of JavaScript online submissions for Minimum Time Visiting All Points.


// Goint to see if I can use less memory by trimming out some of the variables...

const minTimeToVisitAllPoints = (points) => {
    let sum = 0;
    for(let i = 0; i < points.length-1; i++) {
        sum += Math.max((Math.abs(points[i][0] - (points[i+1][0]))), (Math.abs(points[i][1] - points[i+1][1])));
    };
    return sum;
};

let points = [[1,1],[3,4],[-1,0]];
// Expected output: 7
minTimeToVisitAllPoints(points); 
