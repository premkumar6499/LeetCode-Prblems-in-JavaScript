/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function(intervals) {
    if (intervals.length <= 1) return intervals;

    // 1. Sort intervals by start time
    intervals.sort((a, b) => a[0] - b[0]);

    const result = [intervals[0]];

    for (let i = 1; i < intervals.length; i++) {
        const lastMerged = result[result.length - 1];
        const current = intervals[i];

        // 2. Check for overlap
        // If current start <= last merged end, merge them
        if (current[0] <= lastMerged[1]) {
            lastMerged[1] = Math.max(lastMerged[1], current[1]);
        } else {
            // 3. No overlap, add to result
            result.push(current);
        }
    }

    return result;
};