/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    let currentSum = nums[0];
    let maxSum = nums[0];

    for (let i = 1; i < nums.length; i++) {
        // Choice: Is it better to start a new subarray at nums[i], 
        // or keep adding to the current one?
        currentSum = Math.max(nums[i], currentSum + nums[i]);
        
        // Update the best sum we've seen so far
        maxSum = Math.max(maxSum, currentSum);
    }

    return maxSum;
};