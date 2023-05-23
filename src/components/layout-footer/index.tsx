import * as React from "react";
import { graphql, useStaticQuery } from "gatsby";

import * as S from "./style.tsx";
import { useSiteMetadata } from "../../hooks/use-site-metadata.ts";
import blogConfig from "../../../blog.config.ts";

export type ILayoutFooterProps = {
  title?: string;
  inverse?: boolean;
};

export function LayoutFooter({
  title,
  inverse,
}: React.PropsWithoutRef<ILayoutFooterProps>) {
  const siteMetadata: any = useSiteMetadata();

  return <S.Footer inverse>{title ?? siteMetadata.title}</S.Footer>;
}
