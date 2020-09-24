import React from 'react';
import { KeyboardAvoiding, Screen, Container, CustomHeader } from 'components';
import { LoanForm } from 'loan/LoanForm';
export const LoanScreen = () => {
  return (
    <KeyboardAvoiding style={{ flex: 1 }} >
      <Screen>
        <CustomHeader
          title='Loan Calculator' />
        <Container
          style={{ marginTop: 0, alignItems: 'stretch', }}
        >
          <LoanForm />
        </Container>
      </Screen>
    </KeyboardAvoiding >
  )
}  