# Counting using dictionary
# Time complexity: O(n)
# Space complexity: O(n)
class Solution:
    def canConstruct(self, ransomNote: str, magazine: str) -> bool:
        charCount = {}

        for s in magazine:
            if s not in charCount:
                charCount[s] = 0
            charCount[s] += 1

        for s in ransomNote:
            if s not in charCount or charCount.get(s) == 0:
                return False
            charCount[s] -= 1

        return True


from collections import Counter


# One-liner using Counter
# Time complexity: O(n)
# Space complexity: O(n)
class Solution2:
    def canConstruct(self, ransomNote: str, magazine: str) -> bool:
        return Counter(ransomNote) <= Counter(magazine)


# Using set and count
# Time complexity: O(n)
# Space complexity: O(n)
class Solution3:
    def canConstruct(self, ransomNote: str, magazine: str) -> bool:
        for c in set(ransomNote):
            if ransomNote.count(c) > magazine.count(c):
                return False
        return True
