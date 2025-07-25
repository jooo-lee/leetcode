from typing import List


#  Time complexity: O(n)
#  Space complexity: O(1) since output array does not count as extra space
class Solution:
    def productExceptSelf(self, nums: List[int]) -> List[int]:
        n = len(nums)

        # Preallocate space for list
        res = [1] * n

        prefixProd = 1
        for i in range(n):
            res[i] = prefixProd
            prefixProd *= nums[i]

        suffixProd = 1
        for i in range(n - 1, -1, -1):
            res[i] *= suffixProd
            suffixProd *= nums[i]

        return res


# Time complexity: O(n)
# Space complexity: O(n)
class Solution2:
    def productExceptSelf(self, nums: List[int]) -> List[int]:
        # Create prefix arr where each element is the product of all elements before it
        # (first element must be 1 rather than 0 as 0 will make all subsequent products 0 as well)
        # Create suffix arr where each element is the product of all elements after it
        # (last element must be 1 rather than 0 for reasons similar to above)
        #
        # E.g.
        # nums = [1,2,3,4]
        # prefix = [1,1,2,6]
        # suffix = [24,12,4,1]

        prefixProd = 1
        prefix = []
        for i, _ in enumerate(nums):
            if i > 0:
                prefixProd *= nums[i - 1]
            prefix.append(prefixProd)

        suffixProd = 1
        suffix = []
        for i in range(len(nums) - 1, -1, -1):
            if i < len(nums) - 1:
                suffixProd *= nums[i + 1]
            suffix.append(suffixProd)
        suffix.reverse()

        res = []
        for i in range(len(nums)):
            res.append(prefix[i] * suffix[i])
        return res
