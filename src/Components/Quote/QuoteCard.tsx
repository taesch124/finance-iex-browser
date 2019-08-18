import React , { Component } from 'react';
import Quote from './Quote';

import './QuoteCard.scss';


class QuoteCard extends Component<{quote: Quote}, {}> {

    render() {
        let quote: Quote = this.props.quote;
        return (
            <div className="quote-card">
                <div className="quote-card-company">
                    <h4>{quote.symbol}</h4>
                    <p>{quote.companyName}</p>
                </div>
                
                <div className="quote-card-prices">
                    <p>Open: ${quote.open} - Close: ${quote.close}
                        <span 
                            className={`quote-percent-change ${quote.changePercent >= 0 ? 'up' : 'down'}`}>
                            ({quote.changePercent.toFixed(3)}%)
                        </span>
                    </p>
                    <p>Latest: ${quote.latestPrice} 
                        <span className="update-text">
                            updated at {quote.latestUpdate.toLocaleString()}
                        </span>
                    </p>
                </div>
                
            </div>
        )
    }
}

export default QuoteCard;