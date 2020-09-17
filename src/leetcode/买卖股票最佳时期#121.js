let maxProfit = function(prices) {
    let max = 0, minprice = prices[0]
    for (let i = 1; i < prices.length; i++) {
        minprice = Math.min(prices[i], minprice)
        max = Math.max(max, prices[i] - minprice)
    }
    return max
}

maxProfit([7, 1, 5, 3, 6, 4])
