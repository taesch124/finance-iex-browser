import React, { Component, Props } from 'react';
import axios from 'axios';
import Quote from './../Quote/Quote';
import QuoteCard from './../Quote/QuoteCard';

import './QuoteList.scss';

const token: string = 'pk_c6dd4002430d4cd59e337663530e900f';

interface ListState  {
    list: Array<Quote>,
    loading: boolean
}

class QuoteList extends Component<{}, ListState> {
    state = {
        list: [],
        loading: false,
    }

    componentDidMount() {
        this.getQuotes();
    }

    render() {
        return (
            <div className="quote-list">
                <p>Today's big earners are:</p>
                <button onClick={this.getQuotes}>Refresh</button>
                 <div className="quote-card-grid">
                     {this.state.list.length > 0 
                    ?
                    this.state.list.map(apiQuote => {
                        let quote = new Quote(apiQuote);
                        return (<QuoteCard quote={quote} key={quote.symbol}/>)
                    })
                    :
                    this.state.loading && <img src={process.env.PUBLIC_URL + 'assets/images/loaders/circle-loader.gif'} alt="loading icon" />
                    } 
                </div> 
                
            </div>
        )
    }

    getQuotes = (): void => {
        let url: string = `https://cloud.iexapis.com/stable/stock/market/list/gainers?token=${token}&listLimit=25`;

        this.setState({
            list: [],
            loading:true
        }, () => {
            axios.get(url)
            .then(response => {
                console.log(response.data);
                this.setState({
                    list: response.data
                });
            })
            .catch(error => {
                console.error(error);
            })
        })
    }
}

export default QuoteList;