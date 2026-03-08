/**
 * @param {number} n
 * @return {string[][]}
 */
var solveNQueens = function(n) {
    const res = [];
    const board = Array.from({ length: n }, () => Array(n).fill('.'));

    // Sets to track under-attack zones in O(1) time
    const cols = new Set();
    const posDiag = new Set(); // (r + c)
    const negDiag = new Set(); // (r - c)

    const backtrack = (r) => {
        // Base case: All queens placed
        if (r === n) {
            res.push(board.map(row => row.join('')));
            return;
        }

        for (let c = 0; c < n; c++) {
            // Check if this position is under attack
            if (cols.has(c) || posDiag.has(r + c) || negDiag.has(r - c)) {
                continue;
            }

            // Place the queen
            cols.add(c);
            posDiag.add(r + c);
            negDiag.add(r - c);
            board[r][c] = 'Q';

            // Move to the next row
            backtrack(r + 1);

            // Backtrack: Remove the queen to try the next possibility
            cols.delete(c);
            posDiag.delete(r + c);
            negDiag.delete(r - c);
            board[r][c] = '.';
        }
    };

    backtrack(0);
    return res;
};