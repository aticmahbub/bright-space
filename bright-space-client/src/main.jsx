import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { router } from "./Routes/Routes";
import "./index.css";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import AuthProvider from "./providers/AuthProvider";
import { QueryClient, QueryClientProvider, } from "@tanstack/react-query";
import { ToastContainer } from 'react-toastify';
import SocketProvider from "./providers/SocketProvider";
const fonts = {
  heading: `'Poppins', sans-serif`,
  body: `'Poppins', sans-serif`,
  // heading: `'Be Vietnam Pro', sans-serif`,
  // body: `'Be Vietnam Pro', sans-serif`,
};

const colors = {
  primary: {
    50: "#FFECD6",   // Lightest tone
    100: "#FFE3C0",
    200: "#FFCB80",
    300: "#FFB340",
    400: "#FF9B20",
    500: "#FF9500",   // Base color
    600: "#E08600",
    700: "#B36900",
    800: "#865000",
    900: "#593600"    // Darkest tone
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
const queryClient = new QueryClient();


createRoot(document.getElementById("root")).render(
  <StrictMode>
    <SocketProvider>
      <QueryClientProvider client={queryClient}>
        <AuthProvider>
          <ChakraProvider theme={theme}>
            <RouterProvider router={router} />
          </ChakraProvider>
        </AuthProvider>
      </QueryClientProvider>
    </SocketProvider>
    <ToastContainer />
  </StrictMode>
);
