import React from 'react';
import { Screen, CustomHeader } from 'commons';
import { PaySchedule, LoanSummaryCard } from 'loan';

export const ScheduleScreen = () => {
  return (
    <Screen>
      <CustomHeader
        title='Loan Details' />
      <PaySchedule />
      <LoanSummaryCard />
    </Screen >
  )
};