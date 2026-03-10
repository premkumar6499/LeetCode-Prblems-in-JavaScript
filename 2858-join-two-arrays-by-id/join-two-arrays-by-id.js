/**
 * @param {Array} arr1
 * @param {Array} arr2
 * @return {Array}
 */
var join = function(arr1, arr2) {
    const result = {};

    // Process first array
    for (const obj of arr1) {
        result[obj.id] = obj;
    }

    // Process second array: merge or override
    for (const obj of arr2) {
        if (result[obj.id]) {
            // Merge: Spread arr1's object, then overwrite with arr2's properties
            result[obj.id] = { ...result[obj.id], ...obj };
        } else {
            // Simply add if it doesn't exist
            result[obj.id] = obj;
        }
    }

    // Convert object values back to an array and sort by id
    return Object.values(result).sort((a, b) => a.id - b.id);
};
