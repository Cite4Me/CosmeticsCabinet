import React from 'react'
import { ThemeProvider, createTheme } from '@mui/material/styles';
import TYPOGRAPHY from './typography.ts';
import PALETTE from './palette.ts';

const theme = createTheme({
    typography: TYPOGRAPHY,
    palette: PALETTE
});

function ThemeConfig({ children }){
    return(
        <ThemeProvider theme={theme}>
            {children}
        </ThemeProvider >
    )
}

export default ThemeConfig;