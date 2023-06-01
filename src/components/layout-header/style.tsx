import React from "react";
import styled from "styled-components";
import {
  withBorder,
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

  padding: 1.5rem;

  ${withBorderLeft}
  ${withBorderRight}

  display: flex;
  flex-direction: column;
  font-size: 1rem;

  background: var(--surface-color);
`;

export type ISHeaderProps = {};

export function Header({ children }: React.PropsWithChildren<ISHeaderProps>) {
  return (
    <HeaderWrapper>
      <HeaderContainer>{children}</HeaderContainer>
    </HeaderWrapper>
  );
}

export const OwnerHeader = styled.div`
  display: flex;
  align-items: center;
  padding: 0;
  margin-bottom: 1rem;
`;

export const OwnerPfp = styled.div`
  border-radius: 100%;
  width: 50px;
  height: 50px;

  ${withBorder}

  display: flex;
  justify-content: center;
  align-items: center;

  overflow: hidden;
  margin-right: 1rem;
`;
