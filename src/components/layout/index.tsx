import * as React from "react";

import * as S from "./style";
import { LayoutHeader } from "../layout-header";
import { LayoutNav } from "../layout-nav";
import { LayoutFooter } from "../layout-footer";
import LineDecoration from "../line-decoration";

export type ILayoutProps = {
  title?: string;
};

export function Layout({
  children,
  title,
}: React.PropsWithChildren<ILayoutProps>) {
  return (
    <React.Fragment>
      <LineDecoration />
      <S.GlobalStyle />
      <LayoutHeader title={title} />
      <LayoutNav />
      {children}
      <LayoutFooter />
    </React.Fragment>
  );
}
