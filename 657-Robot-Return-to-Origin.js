// 657. Robot Return to Origin

// There is a robot starting at position (0, 0), the origin, on a 2D plane. Given a sequence of its moves, judge if this robot ends up at (0, 0) after it completes its moves.

// The move sequence is represented by a string, and the character moves[i] represents its ith move. Valid moves are R (right), L (left), U (up), and D (down). If the robot returns to the origin after it finishes all of its moves, return true. Otherwise, return false.

// Note: The way that the robot is "facing" is irrelevant. "R" will always make the robot move to the right once, "L" will always make it move left, etc. Also, assume that the magnitude of the robot's movement is the same for each move.


// Example 1:

// Input: moves = "UD"
// Output: true
// Explanation: The robot moves up once, and then down once. All moves have the same magnitude, so it ended up at the origin where it started. Therefore, we return true.
// Example 2:

// Input: moves = "LL"
// Output: false
// Explanation: The robot moves left twice. It ends up two "moves" to the left of the origin. We return false because it is not at the origin at the end of its moves.
// Example 3:

// Input: moves = "RRDD"
// Output: false
// Example 4:

// Input: moves = "LDRRLRUULR"
// Output: false
 

// Constraints:

// 1 <= moves.length <= 2 * 104
// moves only contains the characters 'U', 'D', 'L' and 'R'.

// /**
//  * @param {string} moves
//  * @return {boolean}
//  */
const judgeCircle = (moves) => {
    let leftRight = 0;
    let upDown = 0;
    for (let letter of moves) {
        if (letter === "L") {
            leftRight++;
        } else if (letter === "R") {
            leftRight--;
        } else if (letter === "U") {
            upDown++;
        } else {
            upDown--;
        };
    };
    if (leftRight === 0 && upDown === 0) {
        return true;
    } else {
        return false;
    };
};


// Submission results:
// Success
// Details 
// Runtime: 88 ms, faster than 56.98% of JavaScript online submissions for Robot Return to Origin.
// Memory Usage: 40.8 MB, less than 35.47% of JavaScript online submissions for Robot Return to Origin.

// Another solution from the page using hashmap:

var judgeCircle = function(moves) {
    let map = {};
    
    for (let char of moves){
        map[char] = map[char] + 1 || 1
    };
    
    return (map['L'] === map['R'] && map['U'] === map['D']); 
 };