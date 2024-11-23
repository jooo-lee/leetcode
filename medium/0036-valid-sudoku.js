/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function (board) {
  const rows = new Map();
  const cols = new Map();
  const subBoxes = new Map();

  for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
      if (board[i][j] == '.') continue;

      const subBoxIndex = `${Math.floor(i / 3)},${Math.floor(j / 3)}`;
      if (
        (rows.has(i) && rows.get(i).has(board[i][j])) ||
        (cols.has(j) && cols.get(j).has(board[i][j])) ||
        (subBoxes.has(subBoxIndex) &&
          subBoxes.get(subBoxIndex).has(board[i][j]))
      ) {
        return false;
      }

      if (!rows.has(i)) rows.set(i, new Set());
      if (!cols.has(j)) cols.set(j, new Set());
      if (!subBoxes.has(subBoxIndex)) subBoxes.set(subBoxIndex, new Set());

      rows.get(i).add(board[i][j]);
      cols.get(j).add(board[i][j]);
      subBoxes.get(subBoxIndex).add(board[i][j]);
    }
  }
  return true;
};

// Time complexity: O(n)
// Space complexity: O(n)
// where n is the number of cells in the grid (9x9 in this case)
