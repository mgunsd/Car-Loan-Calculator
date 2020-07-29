import { useEffect, useState } from 'react';
import arnoldclark from 'src/api/arnoldclark';

export default () => {
  const [results, setResults] = useState([]);
  const [errorMessage, setErrorMessage] = useState('');

  const searchCars = async montlyPay => {
    console.log('searchApi calisir');
    try {
      const response = await arnoldclark.get('/used-cars/search.json', {
        params: {
          payment_type: 'monthly',
          min_price: (montlyPay - 5),
          max_price: (montlyPay + 5),
          sort_order: 'monthly_payment_up',
        }
      });
      setResults(response.data.searchResults);
    } catch (err) {
      setErrorMessage('Fetching data failed');
    }
  };

  useEffect(() => {
    searchCars(125);
  }, []);

  return [searchCars, results, errorMessage];
};