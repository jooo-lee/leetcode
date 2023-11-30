/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
    let lPtr = 0; // Buy
    let rPtr = 1; // Sell
    let maxProfit = 0;

    // Make one pass through the prices array - O(n)
    while (rPtr < prices.length) {
        if (prices[lPtr] < prices[rPtr]) {
            // Calculate profit and update maxProfit if needed
            let profit = prices[rPtr] - prices[lPtr];
            maxProfit = Math.max(profit, maxProfit);
        } else {
            lPtr = rPtr; // We've found a new lowest price
        }
        rPtr++;
    }

    return maxProfit;
};

// Time complexity: O(n)
// Space complexity: O(1)
// where n is the length of prices

// ---------------------- Alternate solution: ----------------------

var maxProfit = function (prices) {
    let buy = prices[0];
    let profit = 0;

    for (let i = 1; i < prices.length; i++) {
        let sell = prices[i];
        if (sell < buy) {
            buy = sell;
        } else if (sell - buy > profit) {
            profit = sell - buy;
        }
    }

    return profit;
};

// Time complexity: O(n)
// Space complexity: O(1)
// where n is the length of prices
