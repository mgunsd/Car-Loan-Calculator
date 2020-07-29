import { useEffect } from 'react';
import buildContext from './buildContext';
import { DEPOSIT_PERCENT } from 'src/components/loan';
import { toFloat, toPounds } from 'src/utils/numberFormat';
//import { toNumber } from './loanHelper';

const loanReducer = (state, action) => {
  switch (action.type) {
    case 'set_total':
      return { ...state, total: action.payload };
    case 'set_deposit':
      return { ...state, deposit: action.payload };
    case 'set_monthly_pay':
      return { ...state, monthlyPay: action.payload };
    case 'set_period':
      return { ...state, period: action.payload };
    case 'set_start_date':
      return { ...state, deliveryDate: action.payload };
    case 'add_error':
      return { ...state, errorMessage: action.payload };
    case 'clear_error_message':
      return { ...state, errorMessage: '' };
    case 'reset':
      return {
        total: 20000,
        deposit: 3000,
        //monthlyPay: 1416,
        period: 12,
        deliveryDate: new Date(),
        errorMessage: ' ',
        paySchedule: []
      };
    default:
      return state;
  }
};

const setTotal = dispatch => (value) => {
  //const n = toNumber(value);
  //console.log(value);
  dispatch({ type: 'set_total', payload: value });
};

const setDeposit = (dispatch) => {
  return (value) => {
    console.log(value);
    dispatch({ type: 'set_deposit', payload: value });
  };
};
const setMonthlyPay = (dispatch) => {
  return (value) => {
    dispatch({ type: 'set_monthly_pay', payload: value });
  };
};
const setPeriod = (dispatch) => {
  return (value) => {
    dispatch({ type: 'set_period', payload: (value + 1) * 12 });
  };
};
const setDeliveryDate = (dispatch) => {
  return (value) => {
    dispatch({ type: 'set_start_date', payload: value });
  };
};

const clearErrorMessage = dispatch => () => {
  dispatch({ type: 'clear_error_message' });
};

const reset = dispatch => {
  return () => { dispatch({ type: 'reset' }) };
};

export const { Context, Provider } = buildContext(
  loanReducer,
  {
    setTotal,
    setMonthlyPay,
    setDeposit,
    setPeriod,
    clearErrorMessage,
    setDeliveryDate,
    reset,
  },
  {
    total: 20000,
    deposit: 3000,
    monthlyPay: 1416,
    period: 12,
    deliveryDate: new Date(),
    errorMessage: ' ',
    paySchedule: []
  }
);

