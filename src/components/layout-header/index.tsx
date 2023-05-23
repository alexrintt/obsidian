import * as React from "react";
import { graphql, useStaticQuery } from "gatsby";

import * as S from "./style.tsx";
import { useSiteMetadata } from "../../hooks/use-site-metadata";

export type ILayoutHeaderProps = {
  title?: string;
  inverse?: boolean;
};

export function LayoutHeader({
  title,
  inverse,
}: React.PropsWithoutRef<ILayoutHeaderProps>) {
  const siteMetadata: any = useSiteMetadata();

  return <S.Header inverse>{title ?? siteMetadata.title}</S.Header>;
}
