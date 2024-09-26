import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { router } from "./Routes/Routes";
import "./index.css";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import AuthProvider from "./providers/AuthProvider";

const fonts = {
  heading: `'Poppins', sans-serif`,
  body: `'Poppins', sans-serif`,
};

import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'

const colors = {
  primary: {
    50: "#FFE6EB",
    100: "#FCDDE0",
    200: "#FABACB",
    300: "#F6969F",
    400: "#F4716A",
    500: "#FF1949",
    600: "#E0003C",
    700: "#B30030",
    800: "#860025",
    900: "#59001A",
  },
  secondary: {
    50: "#E5E7F7", // lightest shade
    100: "#C0C4F0",
    200: "#9BA1E8",
    300: "#767EDD",
    400: "#515BD3",
    500: "#2A3290", // base color
    600: "#242A7D",
    700: "#1E236A",
    800: "#181C56",
    900: "#121543", // darkest shade
  },
};

const breakpoints = {
  base: "0em", // 0px
  sm: "30em", // ~480px. em is a relative unit and is dependant on the font size.
  md: "48em", // ~768px
  lg: "62em", // ~992px
  xl: "80em", // ~1280px
  "2xl": "96em", // ~1536px
};

const theme = extendTheme({ colors, fonts, breakpoints });

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      <ChakraProvider theme={theme}>
        <RouterProvider router={router} />
      </ChakraProvider>
    </AuthProvider>
  </StrictMode>
);
