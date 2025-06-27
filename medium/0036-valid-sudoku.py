from typing import List
from collections import defaultdict


# One pass hash set solution
# Time complexity: O(n^2)
# Space complexity: O(n^2)
class Solution:
    def isValidSudoku(self, board: List[List[str]]) -> bool:
        rows = defaultdict(set)
        cols = defaultdict(set)
        squares = defaultdict(set)

        for r in range(9):
            for c in range(9):
                if board[r][c] == ".":
                    continue

                if (
                    board[r][c] in rows[r]
                    or board[r][c] in cols[c]
                    or board[r][c] in squares[(r // 3, c // 3)]
                ):
                    return False

                rows[r].add(board[r][c])
                cols[c].add(board[r][c])

                # Tuples are immutable, so we can use them as keys
                squares[(r // 3, c // 3)].add(board[r][c])

        return True


# Time complexity: O(n^2)
# Space complexity: O(n)
class Solution2:
    def isValidSudoku(self, board: List[List[str]]) -> bool:
        # Create "seen" set to store numbers we've seen
        seen = set()

        # Check each of the rows for duplicates
        for i in range(9):
            for j in range(9):
                if board[i][j] == ".":
                    continue
                if board[i][j] in seen:
                    return False
                seen.add(board[i][j])
            seen.clear()  # Reset set for next row

        # Check each of the cols for duplicates
        for j in range(9):
            for i in range(9):
                if board[i][j] == ".":
                    continue
                if board[i][j] in seen:
                    return False
                seen.add(board[i][j])
            seen.clear()  # Reset set for next col

        # Check each of the sub-boxes for duplicates
        r = 0
        c = 0
        while r < 9 and c < 9:
            for _ in range(3):
                for i in range(r, r + 3):
                    for j in range(c, c + 3):
                        if board[i][j] == ".":
                            continue
                        if board[i][j] in seen:
                            return False
                        seen.add(board[i][j])
                # Move to next sub-box
                seen.clear()  # Reset set for next sub-box
                c += 3
            c = 0
            r += 3

        return True
