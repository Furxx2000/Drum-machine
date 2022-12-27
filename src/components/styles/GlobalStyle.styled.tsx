import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  *, *::before, *::after {
    box-sizing: border-box;
  }

  body {
    display: grid;
    place-items: center;
    min-height: 100vh;
    margin: 0;
    background-color: #1A2A33;
    font-size: 16px;
    font-family: 'Outfit', sans-serif;
    font-weight: 500;
  }
`;
