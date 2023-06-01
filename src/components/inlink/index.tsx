import React from "react";

import { getCssVar } from "../line-decoration";

import * as S from "./style";

export type IInLink = {
  to: string;
};

export function InLink({
  to,
  children,
  ...props
}: React.PropsWithChildren<IInLink>) {
  return (
    <S.InLink
      paintDrip
      duration={1}
      hex={getCssVar("--surface-color")}
      to={to}
      {...props}
    >
      {children}
    </S.InLink>
  );
}
