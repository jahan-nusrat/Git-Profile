import React, { useContext } from 'react';
import {ThemeProvider} from 'styled-components'
import { AppContext } from './context/AppContext';
import Header from './Header';

function App() {
  const {state} = useContext(AppContext);
  const actualTheme = state.theme === 'light' ? 'light' : 'dark'
  return (
    <ThemeProvider theme={actualTheme}>
      
    </ThemeProvider>
  );
}

export default App;
