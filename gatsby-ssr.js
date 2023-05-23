import * as React from "react";

export const onRenderBody = ({ setHeadComponents }) => {
  setHeadComponents([
    <link
      rel="preload"
      href="/fonts/TimesNewerRoman-Regular.otf"
      as="font"
      type="font/opentype"
      crossOrigin="anonymous"
      key="TimesNewerRomanRegularFont"
    />,
    <link
      rel="preload"
      href="/fonts/TimesNewerRoman-Bold.otf"
      as="font"
      type="font/opentype"
      crossOrigin="anonymous"
      key="TimesNewerRomanBoldFont"
    />,
  ]);
};
