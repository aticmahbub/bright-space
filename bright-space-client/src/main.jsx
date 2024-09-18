import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {
  RouterProvider,
} from "react-router-dom";
import { router } from './Routes/Routes';
import './index.css'
import { ChakraProvider, extendTheme } from '@chakra-ui/react';

const fonts = {
  body: `'Poppins', sans-serif`,
}

const colors = {
  primary: {
    50: '#FFE6EB',
    100: '#FCDDE0',
    200: '#FABACB',
    300: '#F6969F',
    400: '#F4716A',
    500: '#FF1949',
    600: '#E0003C',
    700: '#B30030',
    800: '#860025',
    900: '#59001A',
  },
};

const breakpoints = {
  base: '0em', // 0px
  sm: '30em', // ~480px. em is a relative unit and is dependant on the font size.
  md: '48em', // ~768px
  lg: '62em', // ~992px
  xl: '80em', // ~1280px
  '2xl': '96em', // ~1536px
};

const theme = extendTheme({ colors, fonts, breakpoints });

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ChakraProvider theme={theme}>
      <RouterProvider router={router} />
    </ChakraProvider>
  </StrictMode>
)
