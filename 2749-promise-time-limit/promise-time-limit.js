/**
 * @param {Function} fn
 * @param {number} t
 * @return {Function}
 */
var timeLimit = function(fn, t) {
    
    return async function(...args) {
        // Create a promise that rejects after t milliseconds
        const timeoutPromise = new Promise((_, reject) => {
            setTimeout(() => {
                reject("Time Limit Exceeded");
            }, t);
        });

        // Race the original function against the timeout
        // If fn finishes first, it resolves/rejects normally
        // If timeout finishes first, it rejects with "Time Limit Exceeded"
        return Promise.race([
            fn(...args),
            timeoutPromise
        ]);
    }
};

/**
 * Example usage:
 * const limited = timeLimit(async (n) => { 
 *   await new Promise(res => setTimeout(res, 100)); 
 *   return n * n; 
 * }, 50);
 * limited(5).catch(console.log) // "Time Limit Exceeded" at t=50ms
 */
