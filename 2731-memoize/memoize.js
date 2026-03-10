/**
 * @param {Function} fn
 * @return {Function}
 */
function memoize(fn) {
    // A cache to store results: key is the arguments, value is the result
    const cache = new Map();
    let callCount = 0;

    const memoized = function(...args) {
        // Create a unique key based on the arguments
        // Using JSON.stringify or joining with a separator ensures (1, 2) is different from (12)
        const key = args.join(',');

        if (cache.has(key)) {
            return cache.get(key);
        }

        // If not in cache, call the original function and increment count
        const result = fn(...args);
        cache.set(key, result);
        callCount++;
        return result;
    }

    // Attach a helper method to return the call count for testing purposes
    memoized.getCallCount = () => callCount;

    return memoized;
}

/** 
 * Example usage:
 * let callCount = 0;
 * const memoizedFn = memoize(function (a, b) {
 *	 callCount += 1;
 *   return a + b;
 * })
 * memoizedFn(2, 2) // 4
 * memoizedFn(2, 2) // 4
 * console.log(callCount) // 1 
 */
