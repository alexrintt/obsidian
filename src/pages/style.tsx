import React from "react";
import styled from "styled-components";
import {
  resetBorder,
  withBorderBottom,
  withBorderLeft,
  withBorderRight,
} from "../style/common";

export const MainWrapper = styled.main`
  width: 100%;
  display: flex;
  justify-content: center;
`;

export const MainContainer = styled.div`
  width: 100%;
  max-width: var(--container-width);
  ${withBorderRight}
  ${withBorderLeft}
`;

export function Main({ children }: React.PropsWithChildren) {
  return (
    <MainWrapper>
      <MainContainer>{children}</MainContainer>
    </MainWrapper>
  );
}

export const BlogPostItem = styled.div`
  padding: 0 1.5rem;
  ${withBorderBottom}
`;
