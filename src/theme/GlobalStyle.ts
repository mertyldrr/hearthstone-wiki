import { createGlobalStyle } from 'styled-components';
import Fonts from '../ui/Fonts';

const { BelweMedium, BelweBoldBT, BelweCondensedBT, BelweLightBT } = Fonts;

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'BelweMedium';
    src: url(${BelweMedium}) format("truetype");
  }
  @font-face {
    font-family: 'BelweBoldBT';
    src: url(${BelweBoldBT}) format("truetype");
  }
  @font-face {
    font-family: 'BelweCondensedBT';
    src: url(${BelweCondensedBT}) format("truetype");
  }
  @font-face {
    font-family: 'BelweLightBT';
    src: url(${BelweLightBT}) format("truetype");
  }
  * {
    margin: 0;
    padding: 0;
    font-family: BelweMedium, Open-Sans, Helvetica, Sans-Serif;
  }
`;

export default GlobalStyle;
