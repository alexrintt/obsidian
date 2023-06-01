import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  html {
    --container-width: 820px;

    // Dark mode
    // --border-color: #232429;
    // --background-color: #131418;
    // --link-color: #58a6ff;
    // --surface-color: #131418;
    // --text-color: #8E8F90;
    // --title-color: #c1c1c1;

    // Light mode - Nature
    // --border-color: #1F8A70;
    // --background-color: #DDFFBB;
    // --link-color: #1F8A70;
    // --surface-color: #DDFFBB;
    // --text-color: #41644A;
    // --title-color: #263A29;

    // Light mode - Default
    --border-color: #FbFbFb;
    --background-color: #FFFFFF;
    --link-color: #1F8A70;
    --surface-color: #FbFbFb;
    --text-color: #061b16;
    --title-color: #030d0b;

    background: var(--background-color);
  }

  .gria-image-wrapper {
    // background: red !important;
    // min-width: 0;
    // max-height: 50vh;
  }

  html,
  body {
    font-family: 'Roboto Mono', serif;

    padding: 0;
    margin: 0;
    box-sizing: border-box;
  
    color: var(--text-color);
  }

  a {
    color: var(--link-color);
    text-decoration: none;
  }
`;
