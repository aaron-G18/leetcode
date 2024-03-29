// 1678. Goal Parser Interpretation

// You own a Goal Parser that can interpret a string command. The command consists of an alphabet of "G", "()" and/or "(al)" in some order. The Goal Parser will interpret "G" as the string "G", "()" as the string "o", and "(al)" as the string "al". The interpreted strings are then concatenated in the original order.

// Given the string command, return the Goal Parser's interpretation of command.

// Example 1:

// Input: command = "G()(al)"
// Output: "Goal"
// Explanation: The Goal Parser interprets the command as follows:
// G -> G
// () -> o
// (al) -> al
// The final concatenated result is "Goal".

// Example 2:

// Input: command = "G()()()()(al)"
// Output: "Gooooal"

// Example 3:

// Input: command = "(al)G(al)()()G"
// Output: "alGalooG"
 

// Constraints:

// 1 <= command.length <= 100
// command consists of "G", "()", and/or "(al)" in some order.

// /**
//  * @param {string} command
//  * @return {string}
//  */
const interpret = (command) => {
    let final = "";
    for (let i=0; i<command.length; i++) {
        if (command[i] === "G") {
            final += "G";
        } else if (command[i] === "(" && command[i+1] === ")") {
            final += "o";
        } else if (command[i] === "(" && command[i+1] === "a") {
            final += "al";
        }
    };
    return final;
};

// submission results
// Success
// Details 
// Runtime: 80 ms, faster than 60.55% of JavaScript online submissions for Goal Parser Interpretation.
// Memory Usage: 38.8 MB, less than 16.26% of JavaScript online submissions for Goal Parser Interpretation.
