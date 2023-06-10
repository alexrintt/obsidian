import React from "react";
import styled from "styled-components";
import {
  withBorderBottom,
  withBorderLeft,
  withBorderRight,
} from "../../style/common";

import { InLink } from "../inlink";

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
  justify-content: center;
  flex-wrap: wrap;
`;

export function Nav({ children }: React.PropsWithChildren) {
  return (
    <NavWrapper>
      <NavContainer>{children}</NavContainer>
    </NavWrapper>
  );
}

export const NavLink = styled(InLink)`
  &:hover {
    text-decoration: underline double;
  }
  margin-right: 1rem;
  margin-bottom: 0.3rem;
  display: block;
`;
