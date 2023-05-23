import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Space+Mono:wght@400;700&display=swap');

  * {
    box-sizing: border-box;
  }

  html {
    --container-width: 880px;

    --border-color: #17181B;
    --background-color: #000000;
    --link-color: #58a6ff;
    --surface-color: #101114;
    --text-color: #8E8F90;

    background: var(--background-color);
  }

  html,
  body {
    font-family: 'Space Mono', monospace;

    color: var(--text-color);

    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }

  a {
    color: var(--link-color);
    text-decoration: none;
  }
`;
