import React from 'react';
import { Screen, Container, CustomHeader, Label, Spacer } from 'src/components';
import useCarResults from 'src/hooks/useCarResults';
import { ResultsList } from 'src/components/car';

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
