export default class Quote {
    symbol: string;
    companyName: string;
    open: number;
    close: number;
    latestPrice: number;
    latestUpdate: Date;
    changePercent: number;

    constructor(apiQuote: any) {
        this.symbol = apiQuote.symbol;
        this.companyName = apiQuote.companyName;
        this.open = apiQuote.open;
        this.close = apiQuote.close;
        this.latestPrice = apiQuote.latestPrice;
        this.latestUpdate = new Date(apiQuote.latestUpdate);
        this.changePercent = apiQuote.changePercent;
    }
}