import React from "react";
import styled from "styled-components";
import {
  withBorderBottom,
  withBorderLeft,
  withBorderRight,
} from "../../style/common";

import { Link } from "gatsby";

export const NavWrapper = styled.div`
  display: flex;
  justify-content: center;

  ${withBorderBottom}
`;

export const NavContainer = styled.div`
  width: 100%;
  max-width: var(--container-width);
  padding: 1.5rem;
  ${withBorderLeft}
  ${withBorderRight}
  display: flex;
`;

export function Nav({ children }: React.PropsWithChildren) {
  return (
    <NavWrapper>
      <NavContainer>{children}</NavContainer>
    </NavWrapper>
  );
}

export const NavLink = styled(Link)`
  &:hover {
    text-decoration: underline;
  }
  margin-right: 1rem;
`;
