import React from "react";
import { createTheme } from "@material-ui/core/styles";
import { ThemeProvider } from "@material-ui/styles";

import Portfolio from "./components/Portfolio";
import { PRIMARY, SECONDARY } from "./constants/colors";

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
    <div>
      <ThemeProvider theme={theme}>
        <Portfolio />
      </ThemeProvider>
    </div>
  );
};

export default App;
