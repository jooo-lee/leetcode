/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
    if (prices.length == 1) return 0;

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
