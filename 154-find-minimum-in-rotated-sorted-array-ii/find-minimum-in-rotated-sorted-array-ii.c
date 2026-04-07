#include <stdio.h>

int findMin(int* nums, int numsSize) {
    int left = 0;
    int right = numsSize - 1;

    while (left < right) {
        int mid = left + (right - left) / 2;

        if (nums[mid] > nums[right]) {
            // Min is in the right half
            left = mid + 1;
        } else if (nums[mid] < nums[right]) {
            // Min is in the left half (including mid)
            right = mid;
        } else {
            // nums[mid] == nums[right], cannot decide half
            // Move right pointer one step to safely reduce search space
            right--;
        }
    }
    return nums[left];
}
