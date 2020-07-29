import React from 'react';
import Navigator from './navigation/Navigator';
import LoadFonts from './styles/LoadFonts';
import { ThemeProvider } from './context/ThemeContext.js';
import { Provider as LoanProvider } from './context/LoanContext';
import { Provider as AuthProvider } from './context/AuthContext';

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