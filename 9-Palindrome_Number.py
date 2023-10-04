# 9. Palindrome Number
# Solved
# Easy
# Topics
# Companies
# Hint
# Given an integer x, return true if x is a 
# palindrome
# , and false otherwise.


# Example 1:

# Input: x = 121
# Output: true
# Explanation: 121 reads as 121 from left to right and from right to left.
# Example 2:

# Input: x = -121
# Output: false
# Explanation: From left to right, it reads -121. From right to left, it becomes 121-. Therefore it is not a palindrome.
# Example 3:

# Input: x = 10
# Output: false
# Explanation: Reads 01 from right to left. Therefore it is not a palindrome.


# Constraints:

# -231 <= x <= 231 - 1

# Solution using slice reversing string
class Solution(object):
    def isPalindrome(self, x):
        if str(x) == str(x)[::-1]:
            return True
        else:
            return False


# Solution without slice reversing string
class Solution(object):
    def isPalindrome(self, x):
        """
        :type x: int
        :rtype: bool
        """
        palindrome = False
        string = str(x)
        for i in range(len(string)):
            if string[i] == string[-(i+1)]:
                palindrome = True
                continue
            else:
                palindrome = False

                return palindrome

        return palindrome

