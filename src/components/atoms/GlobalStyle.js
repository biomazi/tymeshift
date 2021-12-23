import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    box-sizing: border-box;
    text-align: left;
    margin: 0;
    font-family: Lato, 'Segoe UI', 'Roboto', 'Droid Sans', 'Helvetica Neue', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New', monospace;
  }
  *, *::before, *::after {
    box-sizing: border-box;
    font-family: Lato, 'Segoe UI', 'Roboto', 'Droid Sans', 'Helvetica Neue', sans-serif;
    font-size: 14px;
    line-height: 24px;
    color: rgb(0, 17, 34, 0.8);
  }
  h1,h2,h3,h4,p {
    margin: 0
  }

`;

export default GlobalStyle;
