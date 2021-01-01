import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

import { QueryClient, QueryClientProvider, useQuery } from "react-query";
import { ThemeProvider } from "styled-components";
import Theme from "./utils/theme";
import GlobalStyle from "./utils/globals";

const queryClient = new QueryClient();

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={Theme}>
      <QueryClientProvider client={queryClient}>
        <App />
        <GlobalStyle />
      </QueryClientProvider>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
