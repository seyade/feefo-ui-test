import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    font-family: 'Roboto', sans-serif;
    background-color: #f5f5f5;
    color: #555;
  }

  p, h1, h2, h3, h4 {
    margin: 0;
  }
`;

export default GlobalStyle;
