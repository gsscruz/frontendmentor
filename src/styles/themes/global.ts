import { createGlobalStyle, css } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
html{
  font-size: 15px;
}
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
body{
  background:${(props) => props.theme['light-grey']};
  font-family:'Outfit', sans-serif;
font-size: 1rem;
}

`;
