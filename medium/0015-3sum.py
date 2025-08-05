from typing import List


# Time complexity: O(n^2)
# Space complexity: Python uses Timsort which is O(n)
class Solution:
    def threeSum(self, nums: List[int]) -> List[List[int]]:
        res = []
        nums.sort()

        for i in range(len(nums) - 1):
            # Skip over duplicates for nums[i]
            if i > 0 and nums[i] == nums[i - 1]:
                continue

            # Since nums is now sorted, any combination of i, left and right
            # where nums[i] > 0 means that the 3sum must also be > 0.
            if nums[i] > 0:
                break

            left, right = i + 1, len(nums) - 1
            while left < right:
                threeSum = nums[i] + nums[left] + nums[right]
                if threeSum < 0:
                    left += 1
                elif threeSum > 0:
                    right -= 1
                else:
                    # Found valid 3sum triplet
                    res.append([nums[i], nums[left], nums[right]])

                    # Keep searching using the same i value but move left so
                    # that we ignore duplicates
                    left += 1
                    while left < right and nums[left] == nums[left - 1]:
                        left += 1

        return res
