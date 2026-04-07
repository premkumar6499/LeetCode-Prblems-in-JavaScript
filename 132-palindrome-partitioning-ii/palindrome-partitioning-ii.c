#include <string.h>
#include <stdbool.h>

#define MIN(a, b) ((a) < (b) ? (a) : (b))

int minCut(char* s) {
    int n = strlen(s);
    if (n <= 1) return 0;

    bool isPal[n][n];
    memset(isPal, false, sizeof(isPal));

    // Build the Palindrome matrix
    for (int len = 1; len <= n; len++) {
        for (int i = 0; i <= n - len; i++) {
            int j = i + len - 1;
            if (s[i] == s[j]) {
                isPal[i][j] = (len <= 2) ? true : isPal[i + 1][j - 1];
            }
        }
    }

    int dp[n];
    for (int i = 0; i < n; i++) {
        if (isPal[0][i]) {
            dp[i] = 0;
        } else {
            dp[i] = i; // Max cuts
            for (int j = 0; j < i; j++) {
                if (isPal[j + 1][i]) {
                    dp[i] = MIN(dp[i], dp[j] + 1);
                }
            }
        }
    }

    return dp[n - 1];
}
