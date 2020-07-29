import React from 'react';
//export const toPounds = number => new Intl.NumberFormat('en-GB', { style: 'currency', currency: 'GBP' }).format(number);

export const toPounds = (number) => number
  .toString()
  .replace(/[^\d.]/g, '')
  .replace(/\B(?=(\d{3})+(?!\d))/g, ",");


// export const toFloat = (value) => {
//   const numberString = value.toString().replace(/[^\d.]/g, '');
//   return parseFloat(numberString).toFixed(2);
// }


export const toFloat = (value) => parseFloat(value
  .toString()
  .replace(/[^\d.]/g, ''));

  //return parseFloat(numberString).toFixed(2);
