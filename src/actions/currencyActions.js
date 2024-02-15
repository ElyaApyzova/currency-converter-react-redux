import { CHANGE_FROM_INPUT,CHANGE_TO_INPUT,CHANGE_FROM_CURRENCY,CHANGE_TO_CURRENCY,HANDLE_ERROR,SWITCH_BETWEEN } from "../constants/actionTypes";


export const changeFromInput = (value) => ({
    type:CHANGE_FROM_INPUT,
    payload:value,
});

export const changeToInput = (value) => ({
    type:CHANGE_TO_INPUT,
    payload:value,
});

export const changeFromCurrency = (currency) => ({
    type:CHANGE_FROM_CURRENCY,
    payload:currency,
});

export const changeToCurrency = (currency) => ({
    type:CHANGE_TO_CURRENCY,
    payload:currency,
});

export const handleError = (error) => ({
    type:HANDLE_ERROR,
    payload:error,
});

export const switchBetweenCurrencies = () => ({
    type:SWITCH_BETWEEN
})