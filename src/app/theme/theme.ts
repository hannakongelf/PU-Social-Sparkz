'use client';

import { createTheme } from '@mui/material/styles';

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

declare module '@mui/material/styles' {
  interface Components {}
}

const theme = createTheme({
  palette: {
    primary: {
      light: '#9c7ece',
      main: '#845EC2',
      dark: '#5c4187',
      contrastText: '#fff',
    },
    secondary: {
      light: '#9c7ece',
      main: '#845EC2',
      dark: '#5c4187',
      contrastText: '#fff',
    },

    mode: 'light',
  },
});

export default theme;
