/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function(nums) {
    let maxReach = 0;
    
    for (let i = 0; i < nums.length; i++) {
        // If current index is greater than maxReach, we're stuck
        if (i > maxReach) {
            return false;
        }
        
        // Update maxReach to be the furthest we can jump from here
        maxReach = Math.max(maxReach, i + nums[i]);
        
        // Optimization: if we can already reach the end, return true
        if (maxReach >= nums.length - 1) {
            return true;
        }
    }
    
    return true;
};