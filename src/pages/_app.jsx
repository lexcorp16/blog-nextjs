/** @jsx jsx */
import { jsx } from "theme-ui";
import { ThemeProvider } from "theme-ui";

import Header from "../components/Header";
import theme from "../../theme";

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <div
        sx={{
          marginLeft: "auto",
          marginRight: "auto",
          maxWidth: "42rem",
          height: "100vh",
          padding: "2.625rem 1.3125rem",
        }}
      >
        <Header />
        <Component {...pageProps} />
      </div>
    </ThemeProvider>
  );
}

export default MyApp;
