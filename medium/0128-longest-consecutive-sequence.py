# Pseudocode:
# Create a set that will contain nums
# Loop over nums and add each num to set
# Create var to track longest seq
# Loop over set
#   # For each num, check if num - 1 in set
#   # if it isn't, num is the start of a sequence:
#       # Create curr seq len var, set it = 1
#       # While (num + curr seq len) in set:
#           # Increment curr seq len
#       # If curr seq len > longest seq,
#       # set new longest seq
# Return longest seq

from typing import List


# Time complexity: O(n)
# Space complexity: O(n)
class Solution:
    def longestConsecutive(self, nums: List[int]) -> int:
        nums_set = set(nums)
        longest_len = 0

        for num in nums_set:
            if (num - 1) not in nums_set:
                # num is the start of a sequence
                curr_len = 1
                while (num + curr_len) in nums_set:
                    curr_len += 1
                longest_len = max(curr_len, longest_len)

        return longest_len
