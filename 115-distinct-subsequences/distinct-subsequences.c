#include <string.h>

int numDistinct(char* s, char* t) {
    int m = strlen(s);
    int n = strlen(t);
    
    // Use unsigned long long for intermediate sums to prevent overflow,
    // though the problem guarantees the final answer fits in a 32-bit int.
    unsigned int dp[n + 1];
    memset(dp, 0, sizeof(dp));
    
    // Base case: an empty t can be formed by any prefix of s in 1 way.
    dp[0] = 1;
    
    for (int i = 1; i <= m; i++) {
        // Iterate backwards so we use results from the "previous row"
        for (int j = n; j >= 1; j--) {
            if (s[i-1] == t[j-1]) {
                dp[j] = dp[j] + dp[j-1];
            }
            // If they don't match, dp[j] remains dp[j] (equivalent to dp[i-1][j])
        }
    }
    
    return (int)dp[n];
}
