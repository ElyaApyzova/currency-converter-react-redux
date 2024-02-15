import { CHANGE_FROM_INPUT,CHANGE_TO_INPUT,CHANGE_FROM_CURRENCY,CHANGE_TO_CURRENCY,HANDLE_ERROR,SWITCH_BETWEEN } from "../constants/actionTypes";


const initialState = {
    fromCurrency:'',
    toCurrency:'',
    fromValue: 0,
    toValue:0,
    error:null,

};

const currencyReducer = (state = initialState, action) => {
    switch (action.type) {
        case CHANGE_FROM_INPUT:
            return {
                ...state,
                fromValue:action.payload,
                toValue:action.payload * state.toCurrency.rate,
            };

            case CHANGE_TO_INPUT:
                return {
                   ...state,
                   fromValue:action.payload / state.toCurrency.rate,
                   toValue:action.payload, 
                };

                case CHANGE_FROM_CURRENCY:
                    return {
                        ...state,
                        fromCurrency:action.payload,
                        toValue:state.fromValue * action.payload.rate,
                    };

               case CHANGE_TO_CURRENCY:
                return {
                    ...state,
                    toCurrency:action.payload,
                    toValue:state.fromValue * action.payload.rate,
                };
                
                case HANDLE_ERROR:
                    return {
                        ...state,
                        error:action.payload
                    };
           case SWITCH_BETWEEN:
            return {
                ...state,
                fromCurrency:state.toCurrency,
                toCurrency:state.fromCurrency,
                fromValue:state.toValue,
                toValue:state.fromValue,
            };

            default:
                return state;

    }
}

export default currencyReducer;