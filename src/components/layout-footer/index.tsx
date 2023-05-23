import * as React from "react";
import { graphql, useStaticQuery } from "gatsby";

import * as S from "./style.tsx";
import { useSiteMetadata } from "../../hooks/use-site-metadata.ts";
import blogConfig from "../../../blog.config.ts";

export type ILayoutFooterProps = {
  title?: string;
};

export function LayoutFooter({
  title,
}: React.PropsWithoutRef<ILayoutFooterProps>) {
  return <S.Footer>you reached the end</S.Footer>;
}
