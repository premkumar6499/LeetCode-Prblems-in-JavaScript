/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
var myPow = function(x, n) {
    // Handle negative powers: x^-n = (1/x)^n
    if (n < 0) {
        x = 1 / x;
        n = -n;
    }

    const fastPow = (base, power) => {
        if (power === 0) return 1.0;
        
        let half = fastPow(base, Math.floor(power / 2));
        
        if (power % 2 === 0) {
            return half * half;
        } else {
            return half * half * base;
        }
    };

    return fastPow(x, n);
};