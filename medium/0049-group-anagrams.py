from typing import List


# If n is the number of strings in strs and m is the longest string:
# Time complexity: O(n * mlog(m))
# Space complexity: O(n * m)
class Solution:
    def groupAnagrams(self, strs: List[str]) -> List[List[str]]:
        d = {}
        for str in strs:
            sortedStr = "".join(sorted(str))
            if sortedStr in d:
                d[sortedStr].append(str)
            else:
                d[sortedStr] = [str]

        return list(d.values())
