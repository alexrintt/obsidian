import * as React from "react";

import * as S from "./style";
import { LayoutHeader } from "../layout-header";
import { LayoutNav } from "../layout-nav";
import { LayoutFooter } from "../layout-footer";
import LineDecoration from "../line-decoration";
import { ImageDataLike } from "gatsby-plugin-image";

export type GitHubUser = {
  readonly login?: string | null;
  readonly bio?: string | null;
  readonly githubId?: string | null;
  readonly avatarUrlSharpOptimized: ImageDataLike;
};

export type ILayoutProps = {
  title?: string;
  owner: GitHubUser;
};

export function Layout({
  children,
  title,
  owner,
}: React.PropsWithChildren<ILayoutProps>) {
  return (
    <React.Fragment>
      <LineDecoration />
      <S.GlobalStyle />
      <LayoutHeader owner={owner} title={title} />
      <LayoutNav />
      {children}
      <LayoutFooter />
    </React.Fragment>
  );
}
