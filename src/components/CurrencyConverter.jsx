import React from "react";
import { connect } from 'react-redux';
import { changeFromInput,changeToInput,changeFromCurrency,changeToCurrency,switchBetweenCurrencies } from "../actions/currencyActions";

const CurrencyConverter = ({
    fromCurrency,
    toCurrency,
    fromValue,
    toValue,
    error,
    changeFromInput,
    changeToInput,
    changeFromCurrency,
    changeToCurrency,
    switchBetweenCurrencies,

}) => {

    const handleFromInputChange = (e)=> {
        const value = parseFloat(e.target.value);
        changeFromInput(value);
    };

    const handleToInputChange = (e) => {
        const value = parseFloat(e.target.value);
        changeToInput(value);
    };

    const handleFromCurrencyChange = (e) => {
        const currency = e.target.value;
        changeFromCurrency(currency);
    };

    const handleToCurrencyChange = (e) => {
        const currency = e.target.value;
        changeToCurrency(currency);
    };

    return (
        <div>
          <select value={fromCurrency} onChange={handleFromCurrencyChange}>
            {/* Render currency options */}
          </select>
          <input type="number" value={fromValue} onChange={handleFromInputChange} />
          <select value={toCurrency} onChange={handleToCurrencyChange}>
            {/* Render currency options */}
          </select>
          <input type="number" value={toValue} onChange={handleToInputChange} />
          {error && <p>{error}</p>}
          <button onClick={switchBetweenCurrencies}>Switch</button>
        </div>
      );
    };
    

    
const mapStateToProps = (state) => ({
    fromCurrency: state.fromCurrency,
    toCurrency: state.toCurrency,
    fromValue: state.fromValue,
    toValue: state.toValue,
    error: state.error,
  });
  
  export default connect(mapStateToProps, {
    changeFromInput,
    changeToInput,
    changeFromCurrency,
    changeToCurrency,
    switchBetweenCurrencies,
  })(CurrencyConverter);