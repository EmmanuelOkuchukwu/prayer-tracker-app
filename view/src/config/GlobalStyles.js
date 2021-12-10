import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  body {
    margin: 0;
    padding: 0;
    background-color: ${props => props.theme.primary};
    font-family: 'Roboto Mono', monospace;
  }
  h1, 
  h2, 
  h3, 
  h4, 
  h5,
  h6, 
  p {
    margin: 0;
    padding: 0;
  }
`;
