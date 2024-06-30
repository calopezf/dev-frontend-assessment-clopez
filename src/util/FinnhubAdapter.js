/**
 * Adapts Finnhub API data to a consistent format for Vue.js application use.
 */
export default class FinnhubAdapter {
    /**
     * Converts a Finnhub API ticker object to a standardized format with sensible defaults.
     * @param {Object} ticker - The raw ticker object from Finnhub API.
     * @returns {Object} A ticker object with formatted and default values.
     */
    static adaptTickerData(ticker) {
        return {
            symbol : ticker.symbol,
            description : ticker.description || "No description available",
            type : ticker.type || "N/A",
            exchange : ticker.exchange || "Unknown",
            currency : ticker.currency || "USD",
            marketCap : ticker.marketCap || "Not available",
            lastPrice : ticker.lastPrice || 0,
            changePercent : ticker.changePercent || 0,
            volume : ticker.volume || 0,
            timestamp : ticker.timestamp ? new Date(ticker.timestamp * 1000).toLocaleString() : "Time unknown",
        };
    }
}
