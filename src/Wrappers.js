import React from 'react';
import Navigator from './src/navigation/Navigator';
import { ThemeProvider } from '/src/context/ThemeContext.js';

const Wrappers = () => {
  return (
    <ThemeProvider>
      <Navigator />
    </ThemeProvider>
  )
}
export default Wrappers;