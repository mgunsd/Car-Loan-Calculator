import React from 'react';
import { KeyboardAvoiding, Screen, Container, CustomHeader } from 'src/components';
import { LoanForm } from 'src/components/loan/LoanForm';
export const LoanScreen = () => {
  return (
    <KeyboardAvoiding>
      <Screen>
        <CustomHeader
          title='Loan Calculator' />

        <Container style={{ alignItems: 'stretch', marginTop: 0 }}>
          <LoanForm />
        </Container>
      </Screen>
    </KeyboardAvoiding>
  )
}
