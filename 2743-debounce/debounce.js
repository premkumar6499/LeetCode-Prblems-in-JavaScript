/**
 * @param {Function} fn
 * @param {number} t milliseconds
 * @return {Function}
 */
var debounce = function(fn, t) {
    let timeoutId;

    return function(...args) {
        // Cancel any existing timer currently waiting to execute fn
        clearTimeout(timeoutId);

        // Set a new timer to execute fn after t milliseconds
        timeoutId = setTimeout(() => {
            fn(...args);
        }, t);
    };
};

/**
 * Example usage:
 * const log = debounce(console.log, 50);
 * log('Hello'); // Cancelled by the next call
 * log('Hello'); // Cancelled by the next call
 * log('Hello'); // This one will execute after 50ms
 */
