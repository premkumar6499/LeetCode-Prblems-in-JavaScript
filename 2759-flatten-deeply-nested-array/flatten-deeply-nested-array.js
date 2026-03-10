/**
 * @param {Array} arr
 * @param {number} depth
 * @return {Array}
 */
var flat = function (arr, n) {
    // If n is 0, no flattening occurs, return the original array
    if (n === 0) return arr;

    const result = [];

    // Helper function to handle recursion
    const flatten = (currentArray, currentDepth) => {
        for (const item of currentArray) {
            // Check if item is an array AND if we have remaining depth to flatten
            if (Array.isArray(item) && currentDepth < n) {
                flatten(item, currentDepth + 1);
            } else {
                result.push(item);
            }
        }
    };

    flatten(arr, 0);
    return result;
};
