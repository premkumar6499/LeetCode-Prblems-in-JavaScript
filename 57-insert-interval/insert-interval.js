/**
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */
var insert = function(intervals, newInterval) {
    const result = [];
    let i = 0;
    const n = intervals.length;

    // Phase 1: Add intervals that come strictly BEFORE the new interval
    while (i < n && intervals[i][1] < newInterval[0]) {
        result.push(intervals[i]);
        i++;
    }

    // Phase 2: Merge overlapping intervals with the new interval
    // An overlap exists as long as intervals[i].start <= newInterval.end
    while (i < n && intervals[i][0] <= newInterval[1]) {
        newInterval[0] = Math.min(newInterval[0], intervals[i][0]);
        newInterval[1] = Math.max(newInterval[1], intervals[i][1]);
        i++;
    }
    result.push(newInterval); // Push the final merged interval

    // Phase 3: Add intervals that come strictly AFTER the new interval
    while (i < n) {
        result.push(intervals[i]);
        i++;
    }

    return result;
};