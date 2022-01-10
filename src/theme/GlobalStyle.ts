import { createGlobalStyle } from 'styled-components';
import BelweMedium from '../assets/fonts/BelweMedium.otf';

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: BelweMedium;
    src: url(${BelweMedium}) format("opentype");
  }
  * {
    margin: 0;
    padding: 0;
    font-family: BelweMedium, Open-Sans, Helvetica, Sans-Serif;
  }
`;

export default GlobalStyle;
