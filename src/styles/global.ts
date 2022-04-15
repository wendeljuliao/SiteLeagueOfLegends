import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    font-family: 'Poppins', sans-serif;
  }

  :root {
    --white: #FFF;
    --dark-primary: #1A1825;
    --dark-blue: #001A6C;
    --dark-secundary: #042028;
    --orange: #BE5A04;
    --brown: #5A3A24;



  }

  body {
    overflow: overlay;

  }

  html {

  }

`;

export default GlobalStyle;