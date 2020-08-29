import React from 'react';
import Navigator from 'navigation/Navigator';
import LoadFonts from 'styles/LoadFonts';
import {
  ThemeProvider,
  AuthProvider,
  LoanProvider,
} from 'context';

const Wrappers = () => {
  return (
    <LoadFonts>
      <ThemeProvider>
        <LoanProvider>
          <AuthProvider>
            <Navigator />
          </AuthProvider>
        </LoanProvider>
      </ThemeProvider>
    </LoadFonts>
  )
}
export default Wrappers;