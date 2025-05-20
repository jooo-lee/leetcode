from typing import List


# Hash map one pass solution
# Time complexity: O(n)
# Space complexity: O(n)
class Solution:
    def twoSum(self, nums: List[int], target: int) -> List[int]:
        d = {}
        for i, num in enumerate(nums):
            diff = target - num
            if diff in d:
                return [i, d[diff]]
            d[num] = i
        return []
