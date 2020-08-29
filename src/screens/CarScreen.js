import React from 'react';
import { Screen, Container, CustomHeader, Label, Spacer } from 'components';
import useCarResults from 'hooks/useCarResults';
import { ResultsList } from 'car';

export const CarScreen = () => {
  const [searchCars, results, errorMessage] = useCarResults();
  return (
    <Screen>
      <CustomHeader
        title='Available Cars' />
      <Container style={{ marginTop: 0 }} >

        {errorMessage ? <Text>{errorMessage}</Text> : null}
        <ResultsList results={results} />
      </Container>
    </Screen>
  )
};
