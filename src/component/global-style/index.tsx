import { createGlobalStyle } from "styled-components/macro";

const GlobalStyle = createGlobalStyle`
  * {
    font-family: 'NanumSquare', sans-serif !important;
    font-display: 'block';
    box-sizing : border-box;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  html {
    font-size : 10px;
    cursor: url(music.cur), auto;
  }
  
  body {
    margin: 0;
    user-select : none;
  }

  button {
    cursor:url(music2.cur), auto;
  }
  
  ul {
    list-style-type: none;
    padding : 0;
  }
`;

export default GlobalStyle;
