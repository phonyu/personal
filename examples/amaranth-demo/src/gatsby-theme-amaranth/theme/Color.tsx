import { createGlobalStyle, css } from "styled-components";

const Colors = css`
  :root {
    --color-primary: #38d960;
    --color-primary-100: #87e89f;
    --color-primary-300: #65e284;
    --color-primary-700: #27ce51;
    --color-primary-900: #21ab43;

    --color-grey-100: #f7f7f7;
    --color-grey-300: #c0c0c0;
    --color-grey-500: #9a9a9a;
    --color-grey-700: #414141;
    --color-grey-900: #1a1a1a;

    --color-text: #000000;
    --color-inverted-text: #ffffff;
    --color-background: #ffffff;
    --color-inverted-background: #000000;
  }
`;

const Color = createGlobalStyle`
    ${Colors}
`;

export default Color;
