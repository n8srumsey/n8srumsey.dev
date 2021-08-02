import React from "react";
import { createTheme } from "@material-ui/core/styles";
import { ThemeProvider } from "@material-ui/styles";

import Portfolio from "./components/Portfolio";
import { PRIMARY, SECONDARY, DP08 } from "./constants/colors";

const theme = createTheme({
  type: 'dark',
  palette: {
    primary: {
      main: PRIMARY,
    },
    secondary: {
      main: SECONDARY,
    },
    contrastThreshold: 3,
    tonalOffset: 0.2,
  },
});

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Portfolio />
    </ThemeProvider>
  );
};

export default App;
