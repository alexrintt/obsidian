import * as React from "react";

import "./style.ts";
import { LayoutHeader } from "../layout-header";
import { GlobalStyle } from "./style.ts";

export function Layout({ children }: React.PropsWithChildren) {
  return (
    <React.Fragment>
      <GlobalStyle />
      <LayoutHeader />
      {children}
    </React.Fragment>
  );
}
