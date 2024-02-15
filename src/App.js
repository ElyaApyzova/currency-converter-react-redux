
import React from 'react';
import { Provider } from 'react-redux';
import store from './store';
import CurrencyConverter from './components/CurrencyConverter';

function App() {
  return (
    <Provider store={store}>
      <CurrencyConverter/>
    </Provider>
  );
}

export default App;
