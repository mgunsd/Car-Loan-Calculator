import React from 'react';
import Navigator from './navigation/Navigator';
import { ThemeProvider } from './context/ThemeContext.js';
import LoadFonts from './styles/LoadFonts';

const Wrappers = () => {
  return (
    <LoadFonts>
      <ThemeProvider>
        <Navigator />
      </ThemeProvider>
    </LoadFonts>
  )
}
export default Wrappers;