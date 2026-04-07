#include <stdio.h>
#include <limits.h>

#define MAX(a, b) ((a) > (b) ? (a) : (b))

int maxProfit(int* prices, int pricesSize) {
    if (pricesSize <= 1) return 0;

    // We want to minimize costs (firstBuy, secondBuy) 
    // and maximize profits (firstSell, secondSell).
    int firstBuy = INT_MIN; 
    int firstSell = 0;
    int secondBuy = INT_MIN;
    int secondSell = 0;

    for (int i = 0; i < pricesSize; i++) {
        // 1. Maximize money after first buy (least cost)
        firstBuy = MAX(firstBuy, -prices[i]);
        
        // 2. Maximize profit after first sell
        firstSell = MAX(firstSell, firstBuy + prices[i]);
        
        // 3. Maximize money after second buy (first profit - current price)
        secondBuy = MAX(secondBuy, firstSell - prices[i]);
        
        // 4. Maximize profit after second sell
        secondSell = MAX(secondSell, secondBuy + prices[i]);
    }

    return secondSell;
}
