/**
 * @param {Object|Array} obj
 * @return {Object|Array}
 */
var compactObject = function(obj) {
    // Base case: if obj is null or not an object, return it as is
    if (!obj || typeof obj !== 'object') return obj;

    // Handle Arrays
    if (Array.isArray(obj)) {
        const compactArray = [];
        for (const item of obj) {
            const val = compactObject(item);
            // Only push if the processed value is truthy
            if (Boolean(val)) {
                compactArray.push(val);
            }
        }
        return compactArray;
    }

    // Handle Objects
    const compactObj = {};
    for (const key in obj) {
        const val = compactObject(obj[key]);
        // Only add key if the processed value is truthy
        if (Boolean(val)) {
            compactObj[key] = val;
        }
    }
    return compactObj;
};

