// import React, { useContext, useState, useEffect } from 'react';

// import { MonthlyPayCard } from './MonthlyPayCard';
// import { Context as LoanContext } from '../../context/LoanContext';
// import { InputCard } from './InputCard';
// import CurrencyInput from './CurrencyInput';
// import ModalDatePicker from './ModalDatePicker'
// import { PeriodToggle } from '../loan/PeriodToggle';
// import { ARRANGEMENT_FEE, COMPLETION_FEE, DEPOSIT_PERCENT } from '../../constants/LoanConstants';


// const { state: { total, deposit, monthlyPay, period, deliveryDate, reset },
//   setTotal, setDeposit, setMonthlyPay, setPeriod, setDeliveryDate } = useContext(LoanContext);

// useEffect(() => {
//   let monthlyPay = Math.round((total - deposit) / period);
//   return setMonthlyPay(monthlyPay)
// });

// // export const calcMontlyPay = ()=>{

// // } 



// //parseFloat((totalPrice / form.financeOptions).toFixed(2))