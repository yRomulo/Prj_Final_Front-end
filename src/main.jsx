import GlobalStyles from "./styles/global.js";
import { ThemeProvider } from "styled-components";
import theme from "./styles/theme.js";
import React from "react";
import ReactDOM from "react-dom/client";
import { Home } from "./pages/Home";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Home/>
    </ThemeProvider>
  </React.StrictMode>
);
