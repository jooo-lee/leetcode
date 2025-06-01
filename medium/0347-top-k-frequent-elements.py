from typing import List
from collections import Counter


# Time complexity: O(nlogn)
# Space complexity: O(n)
class Solution:
    def topKFrequent(self, nums: List[int], k: int) -> List[int]:
        # hashmap with key: num and val: freq of num
        # iterate over nums and fill hashmap
        # sort hashmap by descending order of values
        # return k most frequent elements as a list
        count = Counter(nums)
        sortedCount = dict(
            sorted(count.items(), key=lambda item: item[1], reverse=True)
        )
        return list(sortedCount.keys())[:k]
