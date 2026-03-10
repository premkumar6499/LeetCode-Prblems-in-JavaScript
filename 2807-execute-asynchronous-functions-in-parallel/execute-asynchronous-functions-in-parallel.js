/**
 * @param {Array<Function>} functions
 * @return {Promise<any>}
 */
var promiseAll = function(functions) {
    return new Promise((resolve, reject) => {
        // Handle empty array case immediately
        if (functions.length === 0) {
            resolve([]);
            return;
        }

        const results = new Array(functions.length);
        let resolvedCount = 0;

        functions.forEach((fn, index) => {
            // Execute each function and handle the returned promise
            fn()
                .then((value) => {
                    results[index] = value; // Store result at original index
                    resolvedCount++;

                    // Once all are resolved, return the final array
                    if (resolvedCount === functions.length) {
                        resolve(results);
                    }
                })
                .catch((err) => {
                    // If any single promise fails, reject the entire process
                    reject(err);
                });
        });
    });
};

/**
 * Example usage:
 * const promise = promiseAll([() => new Promise(res => res(42))])
 * promise.then(console.log); // [42]
 */
