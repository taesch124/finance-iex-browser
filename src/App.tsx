import React from 'react';

import './App.scss';
import './Styles/Fonts.scss';

import QuoteList from './Components/List/QuoteList';

const App: React.FC = () => {
  return (
    <div className="App">
      <QuoteList />
    </div>
  );
}

export default App;
