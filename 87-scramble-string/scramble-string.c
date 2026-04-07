#include <stdbool.h>
#include <string.h>
#include <stdlib.h>

int memo[31][31][31]; // -1: unvisited, 0: false, 1: true

bool solve(char* s1, int i, char* s2, int j, int len) {
    if (memo[len][i][j] != -1) return memo[len][i][j];

    // Base Case: Exact match
    if (strncmp(s1 + i, s2 + j, len) == 0) return memo[len][i][j] = 1;

    // Pruning: Check if characters frequencies match
    int count[26] = {0};
    for (int k = 0; k < len; k++) {
        count[s1[i + k] - 'a']++;
        count[s2[j + k] - 'a']--;
    }
    for (int k = 0; k < 26; k++) {
        if (count[k] != 0) return memo[len][i][j] = 0;
    }

    // Try every possible split point
    for (int k = 1; k < len; k++) {
        // No Swap case
        if (solve(s1, i, s2, j, k) && solve(s1, i + k, s2, j + k, len - k))
            return memo[len][i][j] = 1;
        
        // Swap case
        if (solve(s1, i, s2, j + len - k, k) && solve(s1, i + k, s2, j, len - k))
            return memo[len][i][j] = 1;
    }

    return memo[len][i][j] = 0;
}

bool isScramble(char* s1, char* s2) {
    int n = strlen(s1);
    memset(memo, -1, sizeof(memo));
    return solve(s1, 0, s2, 0, n);
}
