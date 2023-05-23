import React from "react";
import styled from "styled-components";
import {
  withBorderBottom,
  withBorderLeft,
  withBorderRight,
} from "../../style/common";

export const HeaderWrapper = styled.div`
  display: flex;
  justify-content: center;

  ${withBorderBottom}
`;

export const HeaderContainer = styled.div`
  width: 100%;
  max-width: var(--container-width);
  padding: 1.5rem;
  ${withBorderLeft}
  ${withBorderRight}
  display: flex;
  font-size: 90px;
`;

export function Header({ children }: React.PropsWithChildren) {
  return (
    <HeaderWrapper>
      <HeaderContainer>{children}</HeaderContainer>
    </HeaderWrapper>
  );
}
