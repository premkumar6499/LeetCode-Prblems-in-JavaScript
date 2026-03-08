/**
 * @param {number} n
 * @return {number}
 */
var totalNQueens = function(n) {
    let count = 0;
    
    // Sets to store occupied paths
    const cols = new Set();
    const posDiag = new Set(); // r + c
    const negDiag = new Set(); // r - c

    const backtrack = (r) => {
        // Base case: If we've reached the last row, we found a solution
        if (r === n) {
            count++;
            return;
        }

        for (let c = 0; c < n; c++) {
            // If the current column or diagonals are under attack, skip
            if (cols.has(c) || posDiag.has(r + c) || negDiag.has(r - c)) {
                continue;
            }

            // "Place" the queen (mark paths as occupied)
            cols.add(c);
            posDiag.add(r + c);
            negDiag.add(r - c);

            // Move to the next row
            backtrack(r + 1);

            // "Remove" the queen (backtrack for next iteration)
            cols.delete(c);
            posDiag.delete(r + c);
            negDiag.delete(r - c);
        }
    };

    backtrack(0);
    return count;
};