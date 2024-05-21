
import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  html,
  body {
    font-family: sans-serif;
  }

  h1,h2,h3,
  h4,h4,h5,h6 {
    font-family: 'Poppins', sans-serif;
    font-weight: 500;
  }

  p, a, button {
    font-family: 'Poppins', sans-serif;
  }

  button {
    border: none;
    cursor: pointer;
  }

  a {
    text-decoration: none;
  }
`;

export default GlobalStyles;
