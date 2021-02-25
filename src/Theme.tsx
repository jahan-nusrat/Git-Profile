import React, { useContext } from 'react';
import {ThemeProvider} from 'styled-components'
import { AppContext } from './context/AppContext';

const Theme: React.FC = ({children}:any) => {
  const {state} = useContext(AppContext);
  const actualTheme = state.theme === 'light' ? 'light' : 'dark'
  return (
    <ThemeProvider theme={{actualTheme}}>
      {children}
    </ThemeProvider>
  )
}

export default Theme
