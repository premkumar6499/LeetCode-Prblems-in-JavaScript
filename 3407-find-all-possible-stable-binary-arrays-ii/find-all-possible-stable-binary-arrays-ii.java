public class Solution {
    public int numberOfStableArrays(int zero, int one, int limit) {
        int MOD = 1_000_000_007;
        // dp[i][j][0] is number of stable arrays with i zeros, j ones, ending in 0
        // dp[i][j][1] is number of stable arrays with i zeros, j ones, ending in 1
        long[][][] dp = new long[zero + 1][one + 1][2];

        // Base cases: single blocks of 0s or 1s within the limit
        for (int i = 1; i <= Math.min(zero, limit); i++) {
            dp[i][0][0] = 1;
        }
        for (int j = 1; j <= Math.min(one, limit); j++) {
            dp[0][j][1] = 1;
        }

        for (int i = 1; i <= zero; i++) {
            for (int j = 1; j <= one; j++) {
                // Transition for ending with 0
                // We can append a 0 to any stable array ending in 0 or 1
                dp[i][j][0] = (dp[i - 1][j][0] + dp[i - 1][j][1]) % MOD;
                if (i > limit) {
                    // Subtract cases where adding this 0 created limit + 1 consecutive zeros
                    // This only happens if the sequence at i - limit - 1 was forced to end in 1
                    dp[i][j][0] = (dp[i][j][0] - dp[i - limit - 1][j][1] + MOD) % MOD;
                }

                // Transition for ending with 1
                // We can append a 1 to any stable array ending in 0 or 1
                dp[i][j][1] = (dp[i][j - 1][0] + dp[i][j - 1][1]) % MOD;
                if (j > limit) {
                    // Subtract cases where adding this 1 created limit + 1 consecutive ones
                    dp[i][j][1] = (dp[i][j][1] - dp[i][j - limit - 1][0] + MOD) % MOD;
                }
            }
        }

        return (int) ((dp[zero][one][0] + dp[zero][one][1]) % MOD);
    }

    public static void main(String[] args) {
        Solution sol = new Solution();
        System.out.println(sol.numberOfStableArrays(1, 1, 2)); // Output: 2
        System.out.println(sol.numberOfStableArrays(1, 2, 1)); // Output: 1
        System.out.println(sol.numberOfStableArrays(3, 3, 2)); // Output: 14
    }
}
