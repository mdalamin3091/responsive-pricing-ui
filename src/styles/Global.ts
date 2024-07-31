import styled, { createGlobalStyle } from "styled-components";
// import { device } from "./BreakPoints";

export const GlobalStyles = createGlobalStyle`
/* @import url('https://fonts.googleapis.com/css2?family=Rubik&display=swap'); */
 
/* Box sizing rules */
*,
*::before,
*::after {
  box-sizing: border-box;
}

html {
  font-size: 100%;
}

body {
  margin: 0;
  padding: 0;
  min-height: 100vh;
  text-rendering: optimizeSpeed;
  font-family: ${({ theme }) => theme.fonts.Rubik}, sans-serif;
  font-size: 1rem;
  line-height: 1;
  background-color: #FCFAFE;
}
h1,
h2,
h3,
h4,
h5,
h6,
p{
  padding: 0;
  margin: 0;
}
button {
  border: none;
  background-color: transparent;
  font-family: inherit;
  padding: 0;
  cursor: pointer;
}

html:focus-within {
  scroll-behavior: smooth;
}

/* Make images easier to work with */
img,
picture {
  max-width: 100%;
  display: block;
}

/* Inherit fonts for inputs and buttons */
input,
button,
textarea,
select {
  font: inherit;
}
`;

export const Container = styled.div`
  width: 100%;
  max-width: 1100px;
  margin: 0 auto;
  padding: 40px ${({ theme }) => theme.paddings.container};
  padding-bottom: 50px;
`;

export const SmallContainer = styled.div`
  width: 100%;
  max-width: 570px;
  margin: 0 auto;
  padding: 0 ${({ theme }) => theme.paddings.container};
`;