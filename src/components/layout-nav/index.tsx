import * as React from "react";

import * as S from "./style.tsx";
import { useSiteMetadata } from "../../hooks/use-site-metadata";
import blogConfig from "../../../blog.config.ts";

export type ILayoutNavProps = {};

export function LayoutNav() {
  return (
    <S.Nav>
      <S.NavLink to="/">Home</S.NavLink>
      <S.NavLink to={`https://github.com/${blogConfig.owner}`}>
        @{blogConfig.owner}
      </S.NavLink>
    </S.Nav>
  );
}
