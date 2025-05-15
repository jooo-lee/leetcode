from collections import Counter


# Solution using Counter import
# Time complexity: O(n + m) where n is len(s) and m is len(t)
# Space complexity: O(1) since we have at most 26 diff chars
class Solution:
    def isAnagram(self, s: str, t: str) -> bool:
        # This can also be written as a one-liner
        sCounter = Counter(s)
        tCounter = Counter(t)
        return sCounter == tCounter


# Solution without imports
# Time complexity: O(n + m) where n is len(s) and m is len(t)
# Space complexity: O(1) since we have at most 26 diff chars
class Solution:
    def isAnagram(self, s: str, t: str) -> bool:
        if len(s) != len(t):
            return False

        sCount = {}
        tCount = {}

        for i in range(0, len(s)):
            sCount[s[i]] = sCount.get(s[i], 0) + 1
            tCount[t[i]] = tCount.get(t[i], 0) + 1

        return sCount == tCount
