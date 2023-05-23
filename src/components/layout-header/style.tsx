import React from "react";
import styled from "styled-components";
import {
  withBorderBottom,
  withBorderLeft,
  withBorderRight,
} from "../../style/common";

export const HeaderWrapper = styled.div<ISHeaderProps>`
  display: flex;
  justify-content: center;
  z-index: 10;

  ${withBorderBottom}
`;

export const HeaderContainer = styled.div<ISHeaderProps>`
  width: 100%;
  max-width: var(--container-width);
  background: var(--surface-color);
  padding: 1.5rem;
  ${withBorderLeft}
  ${withBorderRight}
  display: flex;
  font-size: 2rem;
`;

export type ISHeaderProps = {
  inverse?: boolean;
};

export function Header({
  children,
  inverse,
}: React.PropsWithChildren<ISHeaderProps>) {
  return (
    <HeaderWrapper inverse>
      <HeaderContainer inverse>{children}</HeaderContainer>
    </HeaderWrapper>
  );
}
