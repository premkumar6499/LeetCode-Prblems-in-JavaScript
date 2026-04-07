#include <stdio.h>
#include <stdlib.h>

// Helper to calculate Greatest Common Divisor
int gcd(int a, int b) {
    while (b) {
        a %= b;
        int tmp = a; a = b; b = tmp;
    }
    return a;
}

int maxPoints(int** points, int pointsSize, int* pointsColSize) {
    if (pointsSize <= 2) return pointsSize;
    int max_all = 0;

    for (int i = 0; i < pointsSize; i++) {
        int duplicate = 1;
        int current_max = 0;
        // In a real C implementation, you would use a hash map here.
        // For N=300, a simple O(N^2) comparison for each base point is also feasible.
        for (int j = i + 1; j < pointsSize; j++) {
            int cnt = 0;
            long x1 = points[i][0], y1 = points[i][1];
            long x2 = points[j][0], y2 = points[j][1];
            
            // Check all other points k for collinearity with line (i, j)
            for (int k = 0; k < pointsSize; k++) {
                long x3 = points[k][0], y3 = points[k][1];
                // Use cross-multiplication to avoid division/GCD: 
                // (y2-y1)/(x2-x1) == (y3-y1)/(x3-x1) => (y2-y1)*(x3-x1) == (y3-y1)*(x2-x1)
                if ((y2 - y1) * (x3 - x1) == (y3 - y1) * (x2 - x1)) {
                    cnt++;
                }
            }
            if (cnt > max_all) max_all = cnt;
        }
    }
    return max_all == 0 ? 1 : max_all;
}
