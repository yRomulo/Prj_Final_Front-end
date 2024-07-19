import GlobalStyles from "./styles/global.js";
import { ThemeProvider } from "styled-components";
import theme from "./styles/theme.js";
import React from "react";
import ReactDOM from "react-dom/client";
import { Details } from "./pages/Details";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Details/>
    </ThemeProvider>
  </React.StrictMode>
);
