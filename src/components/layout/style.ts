import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: "Times Newer Roman";
    font-weight: 100 900;
    font-display: swap;
    font-style: normal;
    font-named-instance: "Regular";
    src: url(/fonts/TimesNewerRoman-Regular.otf) format("opentype");
  }

  * {
    box-sizing: border-box;
  }

  html,
  body {
    font-family: "Times Newer Roman", "Times New Roman", Times, serif;

    --container-width: 720px;

    --border-color: #c1c1c1;
    --background-color: #fafafa;
    --text-color: #333;

    background: var(--background-color);

    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }

  .border-bottom {
    border: none;
    border-bottom: 1px dashed var(--border-color);
  }

  hr {
    border: none;
    border-bottom: 1px dashed var(--border-color);
  }

  a {
    color: var(--text-color);
    text-decoration: none;
  }
`;
