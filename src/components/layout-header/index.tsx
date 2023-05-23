import * as React from "react";
import { graphql, useStaticQuery } from "gatsby";

import * as S from "./style.tsx";
import { useSiteMetadata } from "../../hooks/use-site-metadata";

export function LayoutHeader() {
  const siteMetadata: any = useSiteMetadata();

  return <S.Header>{siteMetadata.title}</S.Header>;
}
