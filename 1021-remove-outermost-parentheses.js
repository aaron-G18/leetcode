// 1021. Remove Outermost Parentheses

// A valid parentheses string is either empty (""), "(" + A + ")", or A + B, where A and B are valid parentheses strings, and + represents string concatenation.  For example, "", "()", "(())()", and "(()(()))" are all valid parentheses strings.

// A valid parentheses string S is primitive if it is nonempty, and there does not exist a way to split it into S = A+B, with A and B nonempty valid parentheses strings.

// Given a valid parentheses string S, consider its primitive decomposition: S = P_1 + P_2 + ... + P_k, where P_i are primitive valid parentheses strings.

// Return S after removing the outermost parentheses of every primitive string in the primitive decomposition of S.

 

// Example 1:

// Input: "(()())(())"
// Output: "()()()"
// Explanation: 
// The input string is "(()())(())", with primitive decomposition "(()())" + "(())".
// After removing outer parentheses of each part, this is "()()" + "()" = "()()()".
// Example 2:

// Input: "(()())(())(()(()))"
// Output: "()()()()(())"
// Explanation: 
// The input string is "(()())(())(()(()))", with primitive decomposition "(()())" + "(())" + "(()(()))".
// After removing outer parentheses of each part, this is "()()" + "()" + "()(())" = "()()()()(())".
// Example 3:

// Input: "()()"
// Output: ""
// Explanation: 
// The input string is "()()", with primitive decomposition "()" + "()".
// After removing outer parentheses of each part, this is "" + "" = "".
 

// Note:

// S.length <= 10000
// S[i] is "(" or ")"
// S is a valid parentheses string

// /**
//  * @param {string} S
//  * @return {string}
//  */
const removeOuterParentheses = (S) => {

// make a new array from looping over the string S and assigning each index as an "id" and "count depth"
// so start with depth is 1 for the first index (S[0]), and then every "(" = index++, then assign the depth for the current S[i] index, every ")" = assign the depth value and then index--
// once you have the complete string looped over, simply delete all the arrays with depth value 1 and concat a new string.
// If there are only depth 1 arrays, return a blank string ("").

// e.g. for input "(()())(())"  ...
// here is that input spaced out to see more easily            (      (      )      (      )      )      (      (      )      )
// your holding array would be sub arrays of [index, depth]  [0,1], [1,2], [2,2], [3,2], [4,2], [5,1], [6,1], [7,2], [8,2], [9,1]
// So if you get rid of every sub array with a depth of 1, the output = "()()()"

    let holdingArr = [];
    let depth = 1;
    holdingArr.push([0,1]);
    let res = "";
    for (let i = 1; i < S.length; i++) {
        if (S[i] === "(") {
            depth++;
            holdingArr.push([i, depth]);
        } else if (S[i] === ")") {
            holdingArr.push([i, depth]);
            depth--;
        }
    };
    for (let i = 0; i < holdingArr.length; i++) {
        if (holdingArr[i][1] != 1) {
            res += S[i];
        }
    };
    return res;
};

let input = "(()())(())";
removeOuterParentheses(input);
// Expected output: "()()()"

// Submission results
// Success
// Details 
// Runtime: 88 ms, faster than 31.45% of JavaScript online submissions for Remove Outermost Parentheses.
// Memory Usage: 42.9 MB, less than 5.45% of JavaScript online submissions for Remove Outermost Parentheses.