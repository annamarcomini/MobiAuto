import { GlobalStyle } from "../styles/globals";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import theme from "../theme";
import VehicleProvider from "../contexts/Vehicle";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <VehicleProvider>
        <Component {...pageProps}>
          <GlobalStyle />
        </Component>
      </VehicleProvider>
    </ThemeProvider>
  );
}
