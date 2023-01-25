import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
@import url("https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@300;600;800&display=swap");


* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-size: 62.5%;
  font-family: "Nunito Sans", sans-serif;
}

`;

export default GlobalStyle;
