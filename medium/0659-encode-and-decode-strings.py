from typing import List


class Solution:
    # If m is the sum of lens of all the strings
    # and n is the total number of strings
    # Time complexity: O(m)
    # Space complexity: O(m + n)
    def encode(self, strs: List[str]) -> str:
        res = []
        for s in strs:
            # Encode by prepending len of str and separator to str
            res.append(f"{len(s)}#{s}")
        return "".join(res)

    # If m is the sum of lens of all the strings
    # and n is the total number of strings
    # Time complexity: O(m)
    # Space complexity: O(m + n)
    def decode(self, s: str) -> List[str]:
        res = []
        i = 0
        while i < len(s):
            # Read len of curr str until separator
            j = i + 1
            while s[j] != "#":
                j += 1
            strLen = int(s[i:j])

            # Slicing [i:j] will give us curr str
            i = j + 1
            j = i + strLen
            res.append(s[i:j])
            i = j
        return res
