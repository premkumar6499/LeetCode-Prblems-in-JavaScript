/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    const map = {};

    for (let str of strs) {
        // 1. Create a signature by sorting the characters
        let sortedStr = str.split('').sort().join('');
        
        // 2. If the signature isn't in the map, initialize it
        if (!map[sortedStr]) {
            map[sortedStr] = [];
        }
        
        // 3. Push the original string into the corresponding group
        map[sortedStr].push(str);
    }

    // 4. Return only the grouped values
    return Object.values(map);
};