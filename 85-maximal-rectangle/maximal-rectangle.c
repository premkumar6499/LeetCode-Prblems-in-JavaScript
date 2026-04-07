#include <stdio.h>
#include <stdlib.h>

#define MAX(a, b) ((a) > (b) ? (a) : (b))

int largestRectangleArea(int* heights, int heightsSize) {
    int* stack = (int*)malloc((heightsSize + 1) * sizeof(int));
    int top = -1, maxArea = 0, i = 0;

    while (i <= heightsSize) {
        int h = (i == heightsSize) ? 0 : heights[i];
        if (top == -1 || h >= heights[stack[top]]) {
            stack[++top] = i++;
        } else {
            int height = heights[stack[top--]];
            int width = (top == -1) ? i : i - stack[top] - 1;
            maxArea = MAX(maxArea, height * width);
        }
    }
    free(stack);
    return maxArea;
}

int maximalRectangle(char** matrix, int matrixSize, int* matrixColSize) {
    if (matrixSize == 0) return 0;
    int cols = matrixColSize[0];
    int* heights = (int*)calloc(cols, sizeof(int));
    int maxArea = 0;

    for (int i = 0; i < matrixSize; i++) {
        for (int j = 0; j < cols; j++) {
            if (matrix[i][j] == '1') heights[j]++;
            else heights[j] = 0;
        }
        maxArea = MAX(maxArea, largestRectangleArea(heights, cols));
    }

    free(heights);
    return maxArea;
}
